window.SCENARIOS_EN = window.SCENARIOS_EN || {};
window.SCENARIOS_EN.midway = {
  title: "The Battle of Midway",
  sub: "The Fateful Morning",
  year: "June 1942",
  place: "North Pacific, bridge of the carrier Akagi",
  role: "Commander, First Air Fleet",
  roleNote: "In Vice Admiral Chuichi Nagumo's position",
  meters: ["Carrier strength", "Mission objectives", "Knowledge of the enemy"],
  intro: [
    "June 1942. Six months after Pearl Harbor, the Imperial Japanese Navy holds the upper hand in the Pacific.",
    "The Combined Fleet has drawn up a plan to seize Midway Island. The goal is to lure out the American carriers and destroy them.",
    "The Kido Butai, a strike force of four carriers, must hit the island's base and also hit any American carriers that appear. It carries two objectives at once.",
    "You are Commander of the First Air Fleet. You stand on the bridge of the flagship Akagi. All times are local time."
  ],
  endings: [
    { title: "Force Preserved", text: "The mission's objectives were not met. But you brought home most of the carriers and the veteran aircrews. The war goes on." },
    { title: "A Costly Draw", text: "You took heavy losses, but you also struck the Americans hard. Still, the veterans you lost will not be easy to replace." },
    { title: "The Carrier Force Destroyed", text: "The carrier force suffered a crushing blow. From this day on, the tide of the Pacific war begins to turn." }
  ],
  epilogue: "Historically, the Japanese Navy lost four carriers (Akagi, Kaga, Soryu, Hiryu), one heavy cruiser, and many veteran aircrew and mechanics. The Americans lost the carrier Yorktown and one destroyer. After this battle, the initiative in the Pacific War passed to the United States.",
  turns: [
    {
      clock: "June 4, 4:30 a.m.",
      title: "The Search Net",
      sit: "You command four carriers (Akagi, Kaga, Hiryu, Soryu) for the attack on Midway. The first strike wave of 108 aircraft has begun to launch. Combined Fleet headquarters believes there are no American carriers near Midway. The plan is to send one search plane along each of seven search lines. But the heavy cruiser Tone's No. 4 floatplane is delayed by a faulty catapult.",
      rep: [
        { f: "Combined Fleet HQ", t: "The American carrier force is near Pearl Harbor and is expected to sortie after the attack on Midway.", why: "The Americans had broken the Japanese naval code, JN-25, and knew the outline of the plan. Three American carriers (Enterprise, Hornet, Yorktown) were already lying in wait northeast of Midway." },
        { f: "Air Staff Officer", t: "Every plane we put into the search is one less for the attack on Midway." },
        { f: "Heavy cruiser Tone", t: "No. 4 floatplane delayed about 30 minutes by catapult trouble." }
      ],
      inv: "You have the radio traffic of the enemy checked. Traffic is heavier than usual around Midway and to the northeast.",
      adv: {
        c: "The search net is too thin. Even at some cost to our striking power, we should confirm there are no enemy carriers.",
        a: "Headquarters says there are no enemy carriers. We should put everything into the attack.",
        d: "The standing plan is optimized from past operations. The cost of confusion from changing it is greater."
      },
      flawWhy: "Ares treated headquarters' belief that \"there are no enemy carriers\" as a confirmed fact.",
      opt: [
        { l: "Launch seven search planes as planned", d: "One plane per search line. Wait out the delay of Tone's No. 4 plane.", ok: "The search planes set out along their assigned lines. The net is thin, but your striking power is intact.", ng: "The search net was thin, and the sector assigned to the delayed Tone No. 4 plane was left blank." },
        { l: "Fly two staggered waves to tighten the net", d: "Take a few planes from the strike force and send a second wave of search planes later. Confirm there are no enemy carriers.", ok: "The second wave picked up signs of an American fleet to the northeast early.", ng: "The net was tighter, but heavy cloud delayed any sighting. Still, you narrowed down where the enemy was not.", tl: "A two-stage search finds the American fleet early" },
        { l: "Cut the search and add to the strike", d: "Assume there are no enemy carriers and throw everything at Midway.", ok: "The blow to Midway's base was heavier. But the sea around you is unwatched.", ng: "American strike aircraft appeared out of the gap in the search.", tl: "A smaller search badly delays finding the American fleet" }
      ],
      hist: "Nagumo launched seven search planes as planned. Tone's No. 4 plane took off about 30 minutes late. The American carrier force was in its sector.",
      lesson: "If you build a plan on the assumption that \"the enemy should not be there,\" build in a way to notice first if that assumption is wrong.",
      histTl: "Seven search planes launched. Tone's No. 4 plane is about 30 minutes late"
    },
    {
      clock: "June 4, 7:00 a.m.",
      title: "Second Attack Needed",
      sit: "Lieutenant Joichi Tomonaga, leader of the Midway strike, has signaled: \"Second attack needed.\" The island's runways are still usable. American planes from the island keep attacking. On your decks, strike aircraft armed with torpedoes and armor-piercing bombs are standing by in case enemy carriers appear.",
      rep: [
        { f: "Lt. Tomonaga, strike leader", t: "\"Second attack needed.\"" },
        { f: "Lookouts", t: "American torpedo planes and bombers from Midway are attacking the fleet again and again. No hits so far." },
        { f: "Search planes", t: "\"No enemy sighted on any search line so far.\"", why: "\"Not sighted\" does not mean \"not there.\" At this point, the late-launching Tone No. 4 plane had not yet reached the far end of its sector." }
      ],
      inv: "You check the position of each search plane. Tone's No. 4 plane has not yet reached the end of its search line. The northeast has simply not been looked at yet.",
      adv: {
        c: "We should not break down the anti-ship armament until the search is complete. It is our trump card if enemy carriers appear.",
        a: "The attacks will not stop until we finish off the island's base. Rearm now and launch a second strike.",
        d: "When uncertainty is high, splitting the force is the sound choice on expected value."
      },
      flawWhy: "Laplace applied the general rule that \"splitting reduces risk.\" But in carrier warfare, a half-sized strike delivers a decisive blow to neither target.",
      opt: [
        { l: "Rearm the reserve planes with land bombs", d: "Give priority to a second strike on Midway's base. Rearming will take more than an hour.", ok: "Rearming began in the hangars. Below deck, bombs and torpedoes are everywhere.", ng: "As the work went on, confusion began to spread through the ships." },
        { l: "Keep the anti-ship armament", d: "Keep your guard up against enemy carriers until the search results are in.", ok: "When word of an enemy fleet came in, the strike force was ready to launch at once.", ng: "The attacks from the island continued, but your anti-ship strike force is still on hand.", tl: "Anti-ship armament kept. Ready to respond the moment enemy carriers are found" },
        { l: "Rearm only half with land bombs", d: "Prepare halfway for each possibility.", ok: "You prepared for both, but each strike group was too small to matter.", ng: "In the confusion of the work, neither strike group could launch for a long time.", tl: "The force is split in half, and neither strike is strong enough" }
      ],
      hist: "Around 7:15 a.m., Nagumo ordered the reserve strike aircraft rearmed with land bombs.",
      lesson: "Tell \"not found\" apart from \"not there.\" Always know which places you have not finished searching.",
      histTl: "Orders the reserve planes rearmed with land bombs"
    },
    {
      clock: "June 4, 7:40 a.m.",
      title: "Ten Enemy Ships",
      sit: "In the middle of rearming, a report comes in from Tone's No. 4 plane: \"Sighted what appears to be ten enemy ships.\" The ship types are unknown. Are there carriers or not? The work is half done. The hangars are a jumble of removed torpedoes and land bombs.",
      rep: [
        { f: "Tone No. 4 plane", t: "\"Sighted what appears to be ten enemy ships. Bearing 10 degrees from Midway, 240 miles.\"" },
        { f: "Air Staff Officer", t: "It is hard to believe a fleet of ten ships would sail without a carrier." },
        { f: "Communications Officer", t: "It must be a surface force of cruisers and destroyers. If there were a carrier, they would have reported it first.", why: "The search plane was struggling to identify the ship types. About 40 minutes later, its report was corrected to \"one ship that appears to be a carrier.\" In fact there were three carriers." }
      ],
      inv: "You order Tone's No. 4 plane: \"Confirm ship types and maintain contact.\" Time keeps passing while you wait for the reply.",
      adv: {
        c: "We should act as if there is a carrier. If we are wrong, we lose only time. If we are right, we save the fleet.",
        a: "We should not be thrown off by a surface force whose types we do not even know. Hit the island as planned.",
        d: "Decisions made on too little information have a high chance of error. The rational course is to wait for more information."
      },
      flawWhy: "Laplace left the cost of waiting out of the calculation. While we waited, American strike aircraft were on their way.",
      opt: [
        { l: "Stop the work and return to anti-ship armament", d: "Prepare for the worst case, that a carrier is there. Reload the torpedoes that were removed.", ok: "Reloading for anti-ship attack began. Your preparations now face the worst case.", ng: "The change of orders threw the hangars into even greater confusion. The removed land bombs are left lying on the deck." },
        { l: "Keep rearming and give priority to Midway", d: "Deal with the unidentified force later.", ok: "Preparations for the Midway strike moved ahead. But the fleet to the northeast is still unidentified.", ng: "You overlooked an enemy fleet with carriers, and your strike force was loaded with nothing but land bombs.", tl: "Brushes off the enemy fleet report and gives priority to another strike on Midway" },
        { l: "Wait until the ship types are known", d: "Changing orders again and again on uncertain information only adds confusion. Wait for confirmation.", ok: "About 40 minutes later came the report: \"one ship that appears to be a carrier.\" But the work had stopped in the meantime.", ng: "The work stopped while you waited, and neither preparation moved forward.", tl: "Waits for ship types to be confirmed. Work stops for 40 minutes" }
      ],
      hist: "Around 7:45 a.m., Nagumo halted the rearming and ordered preparations for an anti-ship attack. Around 8:20 a.m., Tone's No. 4 plane reported: \"Enemy is accompanied by what appears to be a carrier in rear position.\"",
      lesson: "When information is incomplete, prepare for the possibility that costs the most if you are wrong. Waiting has a cost too.",
      histTl: "Rearming halted. Soon after: \"one ship that appears to be a carrier\""
    },
    {
      clock: "June 4, 8:30 a.m.",
      title: "Now, or When Ready?",
      sit: "There is no longer any doubt that American carriers are out there. Overhead, the strike force back from Midway is circling, nearly out of fuel. American planes from the island are still attacking, and the fighters guarding the fleet are running out of fuel and ammunition. A signal arrives from Rear Admiral Tamon Yamaguchi on Hiryu: \"Consider it advisable to launch attack force at once.\"",
      sitIf: [
        "Your preparations have paid off. A strike force armed for anti-ship attack is lined up on deck. But overhead, the strike force back from Midway is circling, nearly out of fuel. American planes from the island are still attacking. A signal arrives from Rear Admiral Tamon Yamaguchi on Hiryu: \"Consider it advisable to launch attack force at once.\""
      ],
      rep: [
        { f: "Rear Adm. Tamon Yamaguchi (Hiryu)", t: "\"Consider it advisable to launch attack force at once.\"" },
        { f: "Air Officer", t: "All we can launch right now is part of the dive bombers. We can give them almost no fighter escort. Recovery of the returning planes will be delayed, and some will ditch in the sea when their fuel runs out." },
        { f: "Navigation Officer", t: "Even if the American carriers launch a strike, it is still two hours away.", why: "The American carriers had already launched. Strike groups from Hornet and Enterprise had been taking off since just after 7:00 a.m." }
      ],
      inv: "You order the lookouts and radio intercept teams to step up their watch. Several American aircraft transmissions are coming in. The American carriers have very likely already launched.",
      adv: {
        c: "An unescorted strike could be wiped out, just like the American planes this morning. Recover the planes first, then hit them all at once with full strength.",
        a: "Admiral Yamaguchi is right. If we wait for a perfect setup, they will strike first.",
        d: "The Navigation Officer estimates the enemy strike is two hours away. The best move is to open the distance and reorganize."
      },
      flawWhy: "Laplace fed the Navigation Officer's estimate straight into the calculation. It never checked the most important variable: whether the enemy had already launched.",
      opt: [
        { l: "Recover the planes, then strike in full", d: "Recover the strike force overhead and organize a proper strike with fighter escort.", ok: "Recovery is complete, and preparations for the strike move ahead. You turn north to close with the American carriers.", ng: "Just after 10:20 a.m., American dive bombers appeared through a break in the clouds. Akagi, Kaga, and Soryu were hit one after another and engulfed in flames." },
        { l: "Launch what you have, right now", d: "Seize the initiative even with little escort. Accept that some returning planes will ditch.", ok: "An incomplete strike force took off. Now there is a chance to land a blow on the American carriers.", ng: "The small strike force was stopped by American fighters. On deck, crews were busy recovering planes, and the fleet was left defenseless.", tl: "Launches an unescorted strike at once" },
        { l: "Withdraw north for now and regroup", d: "Open the distance from the enemy and buy time to recover and reorganize.", ok: "The first American wave struck empty sea. But the Midway timetable fell badly apart.", ng: "The withdrawal came too late. American dive bombers caught the fleet in the middle of recovery.", tl: "Pulls the fleet north, and the operation's timetable collapses" }
      ],
      hist: "Nagumo chose to recover his planes first and strike once he was ready. Just after 10:20 a.m., American dive bombers attacked Akagi, Kaga, and Soryu, and all three were ablaze within minutes. This is known as the \"Fateful Five Minutes,\" but recent research rejects the claim that the strike force was about to launch. Whichever path he chose, his chances may have been slim.",
      lesson: "Some situations have good reasons on both sides. What matters then is not the outcome, but whether you can explain what you assumed and what you put first.",
      histTl: "Akagi, Kaga, and Soryu are hit by dive bombers and set ablaze"
    },
    {
      clock: "June 4, 11:00 a.m.",
      title: "The Last Carrier",
      sit: "Akagi, Kaga, and Soryu are burning. Only Hiryu remains undamaged. You have moved your flag to the light cruiser Nagara. Rear Admiral Yamaguchi on Hiryu signals: \"I am now taking command of air operations.\"",
      sitIf: [
        "American dive bombers have set some of your carriers ablaze. Your decisions kept the damage below the historical toll, but the fleet is badly hurt. Rear Admiral Yamaguchi on Hiryu signals: \"I am now taking command of air operations.\" Do you counterattack with the carriers you have left, or withdraw?"
      ],
      rep: [
        { f: "Rear Adm. Tamon Yamaguchi", t: "\"I am now taking command of air operations.\"" },
        { f: "Reconnaissance", t: "At least one American carrier. There may be others." },
        { f: "Fleet Staff Officer", t: "The Americans have only one carrier left. A counterattack from Hiryu can even the score.", why: "There were three American carriers. Hiryu's strike groups badly damaged Yorktown, but Hiryu was then lost to attacks from Enterprise and Hornet." }
      ],
      inv: "You check the statements of captured American airmen. They say there are three American carriers.",
      adv: {
        c: "Any more losses will put the whole war at risk. We should bring home the ships and men we have left.",
        a: "Only one enemy carrier remains. If Hiryu trades blows with it, we are even again.",
        d: "Our navy has the edge in night-fighting skill. Closing with surface ships at night offers the highest expected value."
      },
      flawWhy: "Ares assumed the unconfirmed report that \"only one enemy carrier remains.\" The urge to win back what was lost was also clouding the judgment.",
      opt: [
        { l: "Counterattack with Hiryu", d: "Leave air operations to Admiral Yamaguchi and strike back at the American carriers with the carrier you have left.", ok: "Hiryu's strike force scored hits on Yorktown. But the remaining American carriers are intact, and Hiryu is being hunted down.", ng: "Hiryu's strike force damaged Yorktown. But in the evening, Hiryu too was hit by dive bombers and set ablaze." },
        { l: "Order all ships to withdraw", d: "Bring the remaining ships and men home.", ok: "Hiryu, many other ships, and their aircrews made it home. Keeping these veterans would matter greatly in the battles to come.", ng: "You were pursued during the withdrawal, but the main force got away.", tl: "Withdraws with Hiryu. Most of the veteran aircrew survive" },
        { l: "Seek a night battle with surface ships", d: "Close with the American carriers at night and fight at close range.", ok: "The night sea held no sign of the American fleet. The Americans had kept their distance and avoided a night action.", ng: "At dawn, the fleet had come too close and was exposed to attack by American aircraft.", tl: "Surface ships charge in seeking a night battle, but the American fleet pulls away" }
      ],
      hist: "Hiryu's two strikes left Yorktown badly damaged. But around 5:00 p.m., Hiryu too was hit by dive bombers and set ablaze. Rear Admiral Yamaguchi went down with his ship. Before dawn the next day, Admiral Isoroku Yamamoto, Commander in Chief of the Combined Fleet, called off the operation.",
      lesson: "Decisions aimed at winning back losses tend to make the losses bigger. Think only about the best next move from here.",
      histTl: "Hiryu is set ablaze too. The next day, Admiral Yamamoto calls off the operation"
    }
  ]
};
