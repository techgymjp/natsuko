"""App Store 配布用のプロビジョニングプロファイルを用意する(GitHub Actions の iOS アップロードで使う)

App Store Connect API で、Bundle ID と配布用証明書に合う「IOS_APP_STORE」のプロファイルを探し、
なければ作る。プロファイルを ~/Library/MobileDevice/Provisioning Profiles に置き、
名前と UUID を GITHUB_ENV に書き出す(PROFILE_NAME / PROFILE_UUID)。

使い方: python ios-profile.py <bundle id> <証明書のシリアル番号(16進)>
環境変数: ASC_KEY_ID / ASC_ISSUER_ID / ASC_KEY_PATH
"""
import base64
import json
import os
import plistlib
import subprocess
import sys
import time
import urllib.parse
import urllib.request

import jwt  # pyjwt

API = 'https://api.appstoreconnect.apple.com/v1'


def token():
    with open(os.environ['ASC_KEY_PATH']) as f:
        key = f.read()
    now = int(time.time())
    payload = {'iss': os.environ['ASC_ISSUER_ID'], 'iat': now, 'exp': now + 15 * 60, 'aud': 'appstoreconnect-v1'}
    return jwt.encode(payload, key, algorithm='ES256', headers={'kid': os.environ['ASC_KEY_ID'], 'typ': 'JWT'})


def call(method, path, body=None):
    url = path if path.startswith('http') else API + path
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(url, data=data, method=method, headers={
        'Authorization': 'Bearer ' + token(), 'Content-Type': 'application/json'})
    try:
        with urllib.request.urlopen(req) as res:
            return json.load(res)
    except urllib.error.HTTPError as e:
        sys.exit(f'App Store Connect API error {e.code} on {method} {path}: {e.read().decode()}')


def norm(serial):
    return serial.upper().lstrip('0')


def main():
    bundle_id, serial = sys.argv[1], norm(sys.argv[2])

    found = call('GET', '/bundleIds?' + urllib.parse.urlencode({'filter[identifier]': bundle_id, 'limit': 200}))
    ids = [b for b in found['data'] if b['attributes']['identifier'] == bundle_id]
    if not ids:
        sys.exit(f'Bundle ID {bundle_id} is not registered in Apple Developer (Identifiers).')
    bundle = ids[0]['id']

    certs = call('GET', '/certificates?' + urllib.parse.urlencode({'filter[certificateType]': 'DISTRIBUTION,IOS_DISTRIBUTION', 'limit': 200}))
    match = [c for c in certs['data'] if norm(c['attributes']['serialNumber']) == serial]
    if not match:
        sys.exit('The distribution certificate in IOS_DIST_CERT_P12_BASE64 was not found in the team (revoked or a different team?).')
    cert = match[0]['id']

    # 既存のプロファイルのうち、この Bundle ID・この証明書を含む有効な App Store 用のものを使う
    profile = None
    listed = call('GET', f'/bundleIds/{bundle}/profiles?limit=200')
    for p in listed['data']:
        a = p['attributes']
        if a['profileType'] != 'IOS_APP_STORE' or a['profileState'] != 'ACTIVE':
            continue
        pc = call('GET', f"/profiles/{p['id']}/certificates?limit=200")
        if any(c['id'] == cert for c in pc['data']):
            profile = p
            break
    if profile is None:
        name = f'{bundle_id} AppStore CI {time.strftime("%Y%m%d%H%M%S")}'
        created = call('POST', '/profiles', {'data': {
            'type': 'profiles',
            'attributes': {'name': name, 'profileType': 'IOS_APP_STORE'},
            'relationships': {
                'bundleId': {'data': {'type': 'bundleIds', 'id': bundle}},
                'certificates': {'data': [{'type': 'certificates', 'id': cert}]}}}})
        profile = created['data']
        print(f'Created profile: {name}')
    else:
        print(f"Using profile: {profile['attributes']['name']}")

    content = base64.b64decode(profile['attributes']['profileContent'])
    # 署名された plist から UUID と名前を読む
    decoded = subprocess.run(['security', 'cms', '-D'], input=content, capture_output=True, check=True).stdout
    info = plistlib.loads(decoded)
    folder = os.path.expanduser('~/Library/MobileDevice/Provisioning Profiles')
    os.makedirs(folder, exist_ok=True)
    with open(os.path.join(folder, info['UUID'] + '.mobileprovision'), 'wb') as f:
        f.write(content)
    with open(os.environ['GITHUB_ENV'], 'a') as f:
        f.write(f"PROFILE_NAME={info['Name']}\nPROFILE_UUID={info['UUID']}\n")
    print(f"Installed profile {info['Name']} ({info['UUID']})")


if __name__ == '__main__':
    main()
