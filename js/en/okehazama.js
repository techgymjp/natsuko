window.SCENARIOS_EN = window.SCENARIOS_EN || {};
window.SCENARIOS_EN.okehazama = {
  title: `Battle of Okehazama`,
  sub: `Strike the Heart of the Army`,
  year: `1560`,
  place: `From Kiyosu Castle to Okehazama, Owari Province`,
  role: `Warlord of Owari`,
  roleNote: `In Oda Nobunaga's position`,
  meters: [`Strength of the Army`, `Morale of the Retainers`, `Knowledge of the Enemy`],
  intro: [
    `The 5th month of 1560. Imagawa Yoshimoto, lord of Suruga, Tōtōmi and Mikawa, has marched a great army into Owari.`,
    `No one knows the exact size of his army. Estimates range from 20,000 to 40,000. The Oda side has only a fraction of that.`,
    `In eastern Owari, Oda forts surround the Imagawa-held castles of Narumi and Ōdaka.`,
    `You are Oda Nobunaga of Owari. At Kiyosu Castle, report after report says the Imagawa army is closing in.`
  ],
  endings: [
    { title: `The Enemy General's Head`, text: `The head of Imagawa Yoshimoto was brought before you. Outnumbered, you bet everything on the one point that decided the battle, and you won.` },
    { title: `Owari Barely Holds`, text: `Owari survived, just barely. But the great Imagawa army is still intact, and the border remains tense.` },
    { title: `The Fall of Owari`, text: `The great Imagawa army swallowed Owari. The name of the Oda clan is left as a small note in the margins of history.` }
  ],
  epilogue: `In history, Imagawa Yoshimoto was killed in this battle. Matsudaira Motoyasu, who was at Ōdaka Castle and later became Tokugawa Ieyasu, returned to Okazaki Castle and broke away from the Imagawa. Around 1562 he formed an alliance with Nobunaga, known as the Kiyosu Alliance. The Imagawa clan lost power quickly after this. The Battle of Okehazama made Nobunaga's name widely known. Historians still disagree about the details of the battle, especially the route Nobunaga took to reach the enemy headquarters.`,
  turns: [
    {
      clock: `5th month, 18th day, night`,
      title: `Night at Kiyosu Castle`,
      sit: `Imagawa Yoshimoto's great army has entered Owari. The Imagawa forces have already taken up position at Kutsukake Castle, and tonight Matsudaira Motoyasu is said to have brought supplies into Ōdaka Castle. By morning, the Marune and Washizu forts that watch Ōdaka will likely come under attack. The Oda side can field a few thousand men at most. The senior retainers gathered at Kiyosu Castle are urging you to hold out inside the castle.`,
      rep: [
        { f: `Senior Retainer`, t: `If we hold Kiyosu Castle, we can last for a while. The Imagawa army is huge. We have no chance in open battle.` },
        { f: `Head of Scouts`, t: `The Imagawa are using Narumi and Ōdaka castles as their base. They seem to have finished moving supplies into Ōdaka.` },
        { f: `One of the Retainers`, t: `An army this far from home cannot keep itself fed. If we hold the castle, they will go back to Suruga in a few days.`, why: `The Imagawa had a foothold inside Owari at Narumi and Ōdaka, and supplies had already been brought into Ōdaka. If Nobunaga had shut himself in his castle, there was no ally to come to his aid. He was likely to be cut off as the forts fell one by one.` }
      ],
      inv: `You sent scouts to look at Narumi and Ōdaka. Both castles have Imagawa troops and supplies, ready for a long stay. There is no sign that any neighboring lord will send help.`,
      adv: {
        c: `When you are outnumbered, the standard move is to hold the castle. The Imagawa will run out of food and pull back sooner or later.`,
        a: `Let's march out with everything tonight and meet them at the border. If we wait, the forts will just fall.`,
        d: `They outnumber us several times over. Our odds are low in the field and low in a siege. The best expected value is to keep our hand hidden until the enemy shows a weakness.`
      },
      flawWhy: `Minerva assumed that an army far from home would soon pull back. In fact, the Imagawa held castles and supplies inside Owari and could stay a long time.`,
      opt: [
        { l: `Hold out in Kiyosu Castle`, d: `Strengthen the castle's defenses and wait for the Imagawa army to withdraw.`,
          ok: `The castle's defenses are solid. But the men in the forts are starting to feel abandoned.`,
          ng: `The Imagawa army took the forts one by one and began to close in around Kiyosu. Morale inside the castle drops by the day.`,
          tl: `Nobunaga holds out in Kiyosu Castle. The Imagawa army takes the Owari forts one after another.` },
        { l: `Reveal nothing and wait for the moment to strike`, d: `Send the retainers home without a decision. Stay ready to move the moment the enemy's plan becomes clear.`,
          ok: `The war council ended in small talk. The senior retainers left uneasy, but nothing of the Oda plan reached the Imagawa.`,
          ng: `The senior retainers whispered, "When luck runs out, even the mirror of wisdom clouds over." Unease is spreading through the clan.` },
        { l: `March out with the whole army tonight`, d: `Gather every man you can and march through the night toward the border forts.`,
          ok: `The men set out eagerly, but their ranks fell apart on the dark roads. You will face the great army with tired soldiers.`,
          ng: `Imagawa scouts spotted the night march. The great army was waiting, and you lost many men.`,
          tl: `Nobunaga marches out at night. The waiting Imagawa army inflicts heavy losses.` }
      ],
      hist: `According to the Shinchō Kōki, the chronicle of Nobunaga's life, Nobunaga did not talk about the war that night. He made small talk and sent his retainers home. The senior retainers are said to have remarked in dismay, "When luck runs out, even the mirror of wisdom clouds over." No one knows what Nobunaga was thinking that night about holding the castle or marching out.`,
      lesson: `When you are outnumbered, keep your cards hidden so that you can choose the moment to act. But silence has a price: the unease of the people who follow you.`,
      histTl: `Revealed no plan at the war council and sent the retainers home`
    },
    {
      clock: `5th month, 19th day, before dawn`,
      title: `The Forts Are Under Attack`,
      sit: `Before dawn, messengers arrive from the Marune and Washizu forts. The Imagawa attack has begun. Matsudaira Motoyasu's troops are attacking Marune. It is about 12 km from Kiyosu to Atsuta, and the forts are farther still. Your retainers have not all gathered at the castle yet.`,
      rep: [
        { f: `Messenger from Marune Fort`, t: `The enemy has been attacking since before dawn. The men in the fort are fighting hard.` },
        { f: `Castle Guard Officer`, t: `Many of the retainers are still at their homes. It will take time for everyone to gather.` },
        { f: `One of the Couriers`, t: `The forts are strong. They will hold for at least two or three days. There is no need to rush out.`, why: `Both the Marune and Washizu forts fell before noon on the 19th. Sakuma Morishige and other commanders were killed. Waiting would not have saved them. It would have cost Nobunaga his chance to strike at all.` }
      ],
      inv: `You questioned the messenger again. The enemy outnumbers the men in the fort many times over. His answer: the fort will not last long.`,
      adv: {
        c: `We cannot abandon the men in the forts. Let's send a relief force to them right away.`,
        a: `If you ride out yourself, the men will follow. There is no time to wait for everyone to gather.`,
        d: `The more men we have, the higher our odds. One report says the forts will hold for two or three days. We should wait until the whole army is ready.`
      },
      flawWhy: `Laplace built a groundless claim that "the forts will hold for days" into his math. Every moment spent waiting hands the initiative to the enemy.`,
      opt: [
        { l: `Ride out with a few men and gather the army at Atsuta`, d: `Do not wait for everyone. Go first yourself. Name Atsuta as the meeting point and gather the men who follow there.`,
          ok: `You danced Atsumori, gulped down a bowl of rice standing up, and rode out. By the time you reached Atsuta, men were arriving one after another.`,
          ng: `You rode out, but the men behind you are slow to catch up. The wait at Atsuta is getting long.` },
        { l: `Wait at Kiyosu until the whole army is ready`, d: `Leave only after everyone has gathered and the ranks are in order.`,
          ok: `The army gathered, but it was nearly noon when you set out. The forts had already fallen.`,
          ng: `While you waited, both forts fell and the Imagawa army made its next move. Word spread through the clan: "Our lord will not move."`,
          tl: `Nobunaga waits at Kiyosu for his army to gather. The forts fall, and he misses his chance.` },
        { l: `Send the men on hand to relieve the forts`, d: `Send the troops already at the castle ahead to help defend the forts.`,
          ok: `The relief force reached the forts but was pushed back by the enemy's numbers.`,
          ng: `The small relief force was surrounded by the Imagawa before it reached the forts.`,
          tl: `Nobunaga sends a small relief force to the forts. The Imagawa block it.` }
      ],
      hist: `According to the Shinchō Kōki, when Nobunaga heard the forts were under attack, he danced a passage from the ballad drama Atsumori: "Fifty years of a man's life, compared with the realm of the heavens, are but a dream and an illusion." He put on his armor, ate standing up, and rode out. It is said that only a handful of riders went with him at first. When he reached Atsuta, smoke was rising from the direction of Marune and Washizu.`,
      lesson: `Waiting for everyone to gather is not always the best choice. If the leader moves, others will follow. If you set a meeting point, you can have both speed and numbers.`,
      histTl: `Danced Atsumori and rode out. Gathered the army at Atsuta.`
    },
    {
      clock: `5th month, 19th day, morning`,
      title: `Zenshōji Fort`,
      sit: `From Atsuta you passed Tange Fort and entered Zenshōji Fort, which faces Narumi Castle. Word has come that both Marune and Washizu have fallen. The men who followed you are gathering at Zenshōji. Narumi Castle, right in front of you, is held by Imagawa troops. Where Imagawa Yoshimoto's main force is, you still do not know.`,
      rep: [
        { f: `Head of Scouts`, t: `The Imagawa main force seems to have moved west from Kutsukake Castle. Where it is going is not clear.` },
        { f: `Fort Commander`, t: `We still have fewer than 2,000 men here.` },
        { f: `One of the Retainers`, t: `Narumi Castle is lightly defended. One hard push and it will fall.`, why: `Narumi Castle was held by Okabe Motonobu, a senior Imagawa commander. Even after Yoshimoto was killed, Okabe did not give up the castle. It is said he handed it over only in exchange for Yoshimoto's head. An attack would have cost Nobunaga his few men at the castle walls.` }
      ],
      inv: `You sent scouts to look at Narumi Castle. Its defenses are strong, and its commander is Okabe Motonobu, well known among the Imagawa.`,
      adv: {
        c: `While our numbers are small, we should stay put and gather men here. Let's send out scouts to find the main force.`,
        a: `Narumi Castle is lightly held. Take the castle in front of us, and we break the enemy's foothold.`,
        d: `The biggest variable, the location of the main force, is unknown. We should first improve the accuracy of our information.`
      },
      flawWhy: `Ares swallowed an unchecked report that Narumi was "lightly defended." If the few men you have are spent on a siege, nothing will be left to fight the main force.`,
      opt: [
        { l: `Attack Narumi Castle`, d: `Take the Imagawa castle in front of you and break the enemy's foothold.`,
          ok: `You broke through the outer defenses, but the castle did not fall. Your men are exhausted.`,
          ng: `Many men fell to fire from the castle. There is no strength left to search for the Imagawa main force.`,
          tl: `Nobunaga attacks Narumi Castle but cannot take it, and his army is worn down.` },
        { l: `Gather men at Zenshōji and send out scouts`, d: `Collect men at the fort to build up your numbers. At the same time, send scouts to find the Imagawa main force.`,
          ok: `Men gathered at Zenshōji Fort. Scouts began to report that the Imagawa main force seemed to be heading toward Okehazama.`,
          ng: `The men gathered, but the scouts' reports conflict. You still cannot place the main force.` },
        { l: `Return to Kiyosu and defend the castle`, d: `The forts have fallen. Take no risks. Lead the men back to Kiyosu.`,
          ok: `The men made it back to Kiyosu safely. But a heavy mood hangs over retainers who have lost the forts.`,
          ng: `On the way back, a rumor spread across Owari: "Nobunaga ran away." Some are starting to think about switching sides.`,
          tl: `Nobunaga returns to Kiyosu. Local lords in Owari begin to waver.` }
      ],
      hist: `Nobunaga went from Atsuta by way of Tange Fort to Zenshōji Fort and gathered his army there. The Shinchō Kōki records that he had fewer than 2,000 men at this point. Both forts had already fallen, and Sakuma Morishige and other commanders had been killed.`,
      lesson: `Before you grab the prize in front of you, check where your real objective lies. Save your limited strength for the one point that matters most.`,
      histTl: `Gathered the army at Zenshōji Fort`
    },
    {
      clock: `5th month, 19th day, around noon`,
      title: `On to Nakajima Fort`,
      sit: `Sassa Masatsugu and Senshū Suetada attacked the Imagawa vanguard with about 300 men. They were driven back, and word has come that both were killed. You are thinking of moving forward to Nakajima Fort. Your senior retainers say, "The road to Nakajima is a single path through deep rice paddies. The enemy will see how few we are." They have grabbed your horse's bridle to stop you.`,
      rep: [
        { f: `Senior Retainer`, t: `The road to Nakajima Fort is a single path between deep paddies. If we move, the enemy will see how few men we have.` },
        { f: `Head of Scouts`, t: `The Imagawa main force seems to have stopped around Okehazama-yama.` },
        { f: `Soldier Who Fled Back`, t: `The Imagawa troops who killed Lord Sassa are coming at us with their whole army!`, why: `Sassa and Senshū were killed by part of the Imagawa vanguard. The Imagawa main force is said to have stayed around Okehazama-yama at this time. To beaten soldiers, the enemy always looks bigger than it is.` }
      ],
      inv: `You sent out another scout to check. There is no great army bearing down on you. The Imagawa main force still seems to be around Okehazama-yama.`,
      adv: {
        c: `Lord Sassa and the others have been killed, and the enemy is closing in. We should pull back and regroup at Kiyosu.`,
        a: `The farther forward we go, the sooner we reach the main force. If we hesitate, the chance will vanish.`,
        d: `Moving to Nakajima carries a high probability of revealing our numbers. The rational choice is to wait here until the main force's position is certain.`
      },
      flawWhy: `Minerva believed the beaten soldiers' report as it was. Only part of the vanguard was advancing. The main force had not moved.`,
      opt: [
        { l: `Shake off your retainers and advance to Nakajima Fort`, d: `Push their hands away, take the single path through the paddies, and enter Nakajima Fort. Close the distance to the main force in one move.`,
          ok: `You entered Nakajima Fort. The Imagawa do not seem to care about such a small force moving. You are closer to the main force now.`,
          ng: `Imagawa scouts clearly saw your column on the single path. The enemy vanguard turned and began to dig in.` },
        { l: `Stay at Zenshōji and pin down the main force's position`, d: `Keep your small numbers hidden and wait for the scouts. Find out where the main force is and how it is moving, then strike all at once.`,
          ok: `Scouts came back one after another, and it became clear that the Imagawa main force was resting at Okehazama-yama. You can choose your line of attack without revealing your numbers.`,
          ng: `Time slipped by while you waited. The men are frustrated that they cannot move forward.`,
          tl: `Nobunaga waits for scouts at Zenshōji and moves only after pinning down the Imagawa main force.` },
        { l: `Pull back and regroup at Kiyosu`, d: `With Sassa and Senshū dead, there is no way to fight with the men you have.`,
          ok: `The men returned to Kiyosu. But with the forts and the vanguard lost, a sense of defeat hangs over the clan.`,
          ng: `The Imagawa vanguard caught you on the way back. The rear guard was cut down, and the rest of the men scattered.`,
          tl: `After Sassa and Senshū are killed, Nobunaga pulls his army back.` }
      ],
      hist: `According to the Shinchō Kōki, the senior retainers grabbed the bridle of his horse, but Nobunaga shook them off and moved to Nakajima Fort. He then tried to push on from Nakajima as well. He is said to have encouraged his men with words to the effect of, "The enemy spent all night hauling supplies to Ōdaka and is worn out. We are fresh." In the end the advance paid off, but it was also a risky move that showed the enemy how few men he had.`,
      lesson: `A bold move that succeeds was not necessarily the best move. When you look back, judge the outcome and the quality of the decision separately.`,
      histTl: `Shook off his retainers and advanced to Nakajima Fort`
    },
    {
      clock: `5th month, 19th day, early afternoon`,
      title: `The Downpour`,
      sit: `The sky suddenly turns dark, and a violent rain begins to fall, as if stones and ice were being hurled down. In the rain and wind, neither side can see the other well. Scouts report that Imagawa Yoshimoto's main force is resting around Okehazama-yama. You have fewer than 2,000 men. Once the rain stops, the enemy will be able to see you too.`,
      rep: [
        { f: `Head of Scouts`, t: `The Imagawa main force has set up camp around Okehazama-yama and is resting. They look relaxed.` },
        { f: `One of the Soldiers`, t: `The rain is blowing into the enemy's faces. They should not be able to see us well.` },
        { f: `One of the Retainers`, t: `The Imagawa main force has already left Okehazama-yama and entered Ōdaka Castle. If we attack now, we will hit nothing.`, why: `Yoshimoto's main force is said to have still been around Okehazama-yama at this time. If Nobunaga had believed this report and pulled back, he would have missed a chance that would never come again.` }
      ],
      inv: `You sent scouts back out into the rain. The banners of the Imagawa main force are still around Okehazama-yama.`,
      adv: {
        c: `Strike part of the vanguard and withdraw. We keep our men and save face. Going deep toward their headquarters is too dangerous.`,
        a: `The moment the rain stops, we should charge straight at Yoshimoto's headquarters.`,
        d: `They outnumber us more than ten to one. There is also a report that the main force has moved to Ōdaka. On expected value, withdrawing is the rational choice.`
      },
      flawWhy: `Laplace compared only the total size of the armies. The men guarding Yoshimoto at his resting headquarters were far fewer than the whole army. And the report that the main force had moved was never checked.`,
      opt: [
        { l: `Charge Yoshimoto's headquarters the moment the rain stops`, d: `Bring every man together, and the instant the rain lifts, attack the headquarters and nothing else.`,
          ok: `As the rain lifted, your men charged. The Imagawa headquarters collapsed, and Yoshimoto tried to escape guarded by a few hundred men. Hattori Koheita struck at him with his spear, and Mōri Shinsuke took his head.`,
          ng: `The charge reached the headquarters, but the men guarding Yoshimoto are fighting fiercely. Your soldiers are falling one after another.` },
        { l: `Strike part of the Imagawa vanguard and withdraw`, d: `Do not go deep toward the headquarters. Defeat the nearest enemy and save face.`,
          ok: `You broke part of the vanguard and withdrew. But the great Imagawa army remains untouched.`,
          ng: `While you were attacking the vanguard, the rain stopped and the Imagawa main force came to help. You withdrew after losing many men.`,
          tl: `Nobunaga strikes only the Imagawa vanguard and withdraws. The main force remains untouched.` },
        { l: `Pull back and wait for another chance`, d: `The main force may already have moved to Ōdaka. Use the rain to cover your withdrawal.`,
          ok: `The men got back safely. But the Imagawa army pushed deeper into Owari, and a chance like this never came again.`,
          ng: `After you withdrew, you learned the main force had still been at Okehazama-yama. Your retainers are deeply discouraged.`,
          tl: `Nobunaga withdraws under cover of the rain. The Imagawa army pushes deeper into Owari.` }
      ],
      hist: `According to the Shinchō Kōki, when the rain stopped, Nobunaga took up a spear himself and attacked with a great shout. The Imagawa headquarters collapsed. Yoshimoto tried to escape guarded by about 300 horsemen, but Hattori Koheita struck at him with his spear and Mōri Shinsuke took his head. It is not clear which route Nobunaga took to reach the headquarters. The idea that he circled behind the hill for a surprise attack spread through studies in the Meiji era. In recent years, a view based on the Shinchō Kōki that he attacked head-on has also gained support, and opinions remain divided. There is also a story that Yanada Masatsuna received the highest reward for reporting where the Imagawa main force was, but it appears only in later writings.`,
      lesson: `To beat a great army, do not fight the whole army. Find the one point that decides the battle, and put all your strength there.`,
      histTl: `Charged the headquarters after the downpour and killed Imagawa Yoshimoto`
    }
  ]
};
