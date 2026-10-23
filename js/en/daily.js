/* Command Seat: Daily Decision (English text). Keyed by DAILY id. */
window.DAILY_EN = {
  dday: {
    year: 'June 4, 1944', title: 'D-Day Weather', role: 'Supreme Allied Commander', roleNote: 'In Eisenhower\'s position',
    sit: 'A storm has already forced a one-day delay of the Normandy landings. At headquarters in southern England, the chief meteorologist, Group Captain James Stagg, reports: "We expect a short break in the weather on the 6th." The tides and moonlight line up only from June 5 to 7. Miss that window, and the next chance is about two weeks away. More than 150,000 troops are waiting on their ships.',
    opt: [
      { l: 'Go on the 6th', d: 'Bet on the brief break in the weather.' },
      { l: 'Delay again and wait', d: 'Wait for reliably good weather. The risk of the plan leaking grows.' },
      { l: 'Rethink the whole operation', d: 'Draw up a new plan that does not depend on the weather.' }
    ],
    hist: 'Eisenhower chose to go on the 6th. Around June 19, the next possible date, the worst Channel storm in decades struck.',
    lesson: 'Waiting for perfect conditions carries its own risk. The "next chance" is not always better than this one.'
  },
  petrov: {
    year: 'September 26, 1983', title: 'Five Missiles', role: 'Soviet Air Defense Duty Officer', roleNote: 'In Stanislav Petrov\'s position',
    sit: 'Just after midnight, the early-warning satellite system sounds an alarm: "ICBM launched from the United States. One... then four more." If you report it up the chain, a nuclear counterstrike may follow. The system is brand new. Ground radar has not confirmed anything yet. You have minutes to decide.',
    opt: [
      { l: 'Report an attack', d: 'Report exactly what the system says.' },
      { l: 'Report a system malfunction', d: 'Too few missiles for a first strike. Ground radar shows nothing.' },
      { l: 'Pass the raw data up', d: 'Make no call yourself. Let your superiors decide.' }
    ],
    hist: 'Petrov reported a malfunction. He reasoned that a real first strike would not use just five missiles, and ground radar had seen nothing. The cause turned out to be sunlight reflecting off clouds, which the sensors mistook for launches.',
    lesson: 'Check automated systems against independent evidence. Ask how a real event would unfold, and the anomalies stand out.'
  },
  snow: {
    year: 'August 1854', title: 'The Broad Street Pump', role: 'London Physician', roleNote: 'In John Snow\'s position',
    sit: 'Cholera has broken out in London\'s Soho district. Hundreds have died in a few days. The accepted theory is that disease spreads through "bad air," or miasma. As you mark the homes of the dead on a map, you notice they cluster around the public water pump on Broad Street.',
    opt: [
      { l: 'Urge officials to remove the pump handle', d: 'Show the map as evidence and name a cause that goes against accepted theory.' },
      { l: 'Clean up the sources of foul smells', d: 'Act in line with the accepted theory.' },
      { l: 'Evacuate residents from the area', d: 'Whatever the cause, move people away.' }
    ],
    hist: 'Snow persuaded the local board to remove the pump handle. The outbreak was already easing, but his analysis is seen as one of the starting points of modern epidemiology.',
    lesson: 'Sometimes the pattern in the data points to a different answer than the accepted one.'
  },
  ookaeshi: {
    year: 'June 1582', title: 'News from Honnō-ji', role: 'Oda Clan General', roleNote: 'In Hideyoshi Toyotomi\'s position (then Hashiba Hideyoshi)',
    sit: 'You are besieging Takamatsu Castle in Bitchū by flooding it. Word arrives that your lord, Oda Nobunaga, has been killed in Kyoto by Akechi Mitsuhide. A large Mōri army is nearby. The Mōri do not yet know Nobunaga is dead.',
    opt: [
      { l: 'Hide his death, make peace, and rush back', d: 'End the fighting before the enemy finds out, then march the whole army back.' },
      { l: 'Take the castle first, then return', d: 'Lock in the gains in front of you before moving.' },
      { l: 'Wait until the news is confirmed', d: 'The report could be false.' }
    ],
    hist: 'Hideyoshi kept Nobunaga\'s death secret and made peace with the Mōri. He then marched about 200 km back in roughly ten days, a feat known as the "Great Return from Chūgoku." He defeated Mitsuhide at the Battle of Yamazaki and opened his path to ruling Japan.',
    lesson: 'An information advantage is temporary. Whether you move before the other side knows decides how many options you have.'
  },
  togo: {
    year: 'May 1905', title: 'Which Strait?', role: 'Commander of the Combined Fleet', roleNote: 'In Admiral Tōgō Heihachirō\'s position',
    sit: 'Russia\'s Baltic Fleet is heading for Vladivostok. Will it pass through the Tsushima Strait, or swing around through the Pacific to the Tsugaru or Sōya Straits? The Combined Fleet is waiting at Chinhae Bay in southern Korea. But the enemy is taking longer to appear than expected. More and more officers say, "They must have gone north."',
    opt: [
      { l: 'Keep waiting at Tsushima', d: 'Bet that they will take the shortest route and hold position.' },
      { l: 'Move the fleet north', d: 'Get ahead of them near the Tsugaru Strait.' },
      { l: 'Split the fleet in two', d: 'Be ready whichever way they come.' }
    ],
    hist: 'The Combined Fleet seriously considered moving north, but in the end it stayed at Tsushima. Early on May 27, the armed merchant cruiser Shinano Maru spotted the Baltic Fleet. The Japanese won a decisive victory at the Battle of Tsushima.',
    lesson: 'Split your forces, and you can lose in both places. Sometimes you must commit to a well-grounded read even when you are not sure.'
  },
  challenger: {
    year: 'January 27, 1986', title: 'A Freezing Launch', role: 'NASA Launch Manager', roleNote: 'In the position of the managers deciding on launch',
    sit: 'The space shuttle Challenger is set to launch tomorrow morning. Temperatures are forecast to drop below freezing. Engineers at Morton Thiokol, the maker of the solid rocket boosters, warn that the O-rings in the joints may not seal in the cold. But they have no conclusive data to prove it. The launch has already been delayed several times.',
    opt: [
      { l: 'Postpone the launch', d: 'If you cannot show it is safe, do not fly.' },
      { l: 'Launch as scheduled', d: 'More delays will hurt the whole program.' },
      { l: 'Demand proof of danger, or launch', d: 'Without hard data, do not treat it as a real concern.' }
    ],
    hist: 'The engineers\' concerns were overruled, and Challenger launched on January 28. Seventy-three seconds after liftoff, an O-ring failure caused the shuttle to break apart. All seven crew members died. The investigation found that the burden had shifted from proving it was safe to proving it was dangerous.',
    lesson: 'Where you place the burden of proof changes the decision. When lives are at stake, require proof that it is safe.'
  },
  philly: {
    year: 'September 1918', title: 'Cancel the Parade?', role: 'City Health Official', roleNote: 'In the position of Philadelphia\'s health authorities',
    sit: 'Spanish flu has started spreading from the port into the city. In a few days, the Philadelphia Liberty Loan parade will urge people to buy war bonds. About 200,000 people are expected. Canceling it will draw criticism for hurting the war effort. Doctors are calling for it to be canceled.',
    opt: [
      { l: 'Hold the parade as planned', d: 'Put wartime unity first.' },
      { l: 'Cancel it and ban gatherings', d: 'Accept the criticism and stop the spread.' },
      { l: 'Hold a smaller parade', d: 'Take the middle road.' }
    ],
    hist: 'Philadelphia held the parade on September 28. Within days, cases exploded. Over the next few weeks, more than 10,000 residents died. St. Louis, which banned gatherings early, kept its death rate far lower.',
    lesson: 'In a crisis that grows exponentially, like an epidemic, acting early is worth a great deal.'
  },
  carpathia: {
    year: 'April 15, 1912', title: 'Distress Call at Midnight', role: 'Captain of the Liner Carpathia', roleNote: 'In Captain Arthur Rostron\'s position',
    sit: 'Around 12:30 a.m., your wireless operator picks up a distress call. The Titanic has struck an iceberg and is sinking. She is about 58 miles (93 km) away. These waters are full of icebergs, and the night is pitch dark. Your ship\'s top speed is about 14 knots.',
    opt: [
      { l: 'Go full speed and double the lookouts', d: 'Send even the heating steam to the engines. Accept the danger and offset it with extra lookouts.' },
      { l: 'Wait for dawn, then go', d: 'A dark sea full of icebergs is too dangerous.' },
      { l: 'Go carefully at a safe speed', d: 'Protect your own passengers too.' }
    ],
    hist: 'Captain Rostron sent even the steam for heating and hot water to the engines. He pushed the ship to about 17 knots, beyond her rated top speed, and wove through the ice. He added lookouts and prepared for the rescue. He arrived about an hour and a half after the Titanic sank, but pulled more than 700 people from the lifeboats.',
    lesson: 'When you take a risk, take steps to reduce it at the same time, such as adding lookouts.'
  },
  dunkirk: {
    year: 'May 1940', title: 'The Beaches of Dunkirk', role: 'Royal Navy Commander at Dover', roleNote: 'In Vice Admiral Bertram Ramsay\'s position',
    sit: 'Germany\'s blitzkrieg has trapped hundreds of thousands of British and French troops on the beaches at Dunkirk in northern France. Bombing has wrecked the harbor. Large warships cannot get close to the shallow beaches. Early estimates say only about 45,000 men can be saved.',
    opt: [
      { l: 'Call up every small civilian boat', d: 'Gather fishing boats and pleasure craft to ferry troops from the shallows to the warships offshore.' },
      { l: 'Evacuate in order using warships only', d: 'Keep the chain of command and avoid chaos.' },
      { l: 'Save the best units first', d: 'With few ships, choose the forces needed to rebuild.' }
    ],
    hist: 'Operation Dynamo called up hundreds of small civilian vessels, including fishing boats and pleasure craft. They carried troops from the shallows to the warships offshore. In about nine days, some 338,000 men were rescued.',
    lesson: 'Do not limit yourself to your own organization\'s resources. How well you use outside resources sets the size of the problems you can solve.'
  },
  alarm1202: {
    year: 'July 20, 1969', title: 'Alarm 1202', role: 'Mission Control Guidance Officer', roleNote: 'In Steve Bales\'s position',
    sit: 'Apollo 11\'s lunar module, Eagle, has begun its final descent. Suddenly its computer shows an unfamiliar alarm: "1202." The crew asks, "Give us a reading on the 1202." Abort, and there is no Moon landing. Continue, and the computer might fail. Behind you, a young engineer says it is fine as long as it does not keep recurring. You have seconds to answer.',
    opt: [
      { l: 'Continue the landing (Go)', d: 'Trust what you sorted out in training and the engineer\'s judgment.' },
      { l: 'Abort the landing', d: 'Do not risk lives on an alarm you do not understand.' },
      { l: 'Let the crew decide', d: 'The people on the scene know best.' }
    ],
    hist: 'Bales trusted the young engineer, Jack Garman, and called "Go." The 1202 alarm meant the computer was overloaded, but it kept running its most important tasks first. Minutes later, Eagle touched down on the Moon.',
    lesson: 'Split-second decisions rest on preparation done beforehand. Because the team had worked out in training which alarms were safe to fly through, this call was possible.'
  }
};
