window.SCENARIOS_EN = window.SCENARIOS_EN || {};
window.SCENARIOS_EN.thaicave = {
  title: `The Tham Luang Cave Rescue`,
  sub: `13 Trapped in a Flooded Cave`,
  year: `June to July 2018`,
  place: `Tham Luang Cave, Chiang Rai Province, Thailand`,
  role: `Commander of the rescue operation`,
  roleNote: `In the position of Chiang Rai Governor Narongsak Osottanakorn`,
  meters: [`The 13 Lives`, `Time Before Rain and Air Run Out`, `Safety of the Rescuers`],
  intro: [
    `June 23, 2018. Chiang Rai Province in northern Thailand. Tham Luang Cave lies in the mountains near the border with Myanmar.`,
    `After practice, 12 boys from the Wild Boars youth soccer team and their 25-year-old coach went into the cave.`,
    `While they were inside, heavy rain fell, and the passages filled with water. The 13 could no longer get out.`,
    `You are the governor of Chiang Rai. The bicycles and bags left at the entrance are the only sign that they are still inside.`
  ],
  endings: [
    { title: `All 13 Come Home`, text: `When the last boys and their coach came out, cheers rose in front of the cave. People who had gathered from around the world brought the 13 back to their families.` },
    { title: `A Heavy Price`, text: `The boys were rescued. But delays and reckless moves piled up, and the rescuers paid a heavy price.` },
    { title: `Out of Reach`, text: `You could not keep up with the water and the clock. The rescue did not reach everyone.` }
  ],
  epilogue: `In history, all 12 boys and their coach were rescued over three days, from July 8 to July 10. It was the 18th day since they had entered the cave. It is reported that more than 10,000 people took part, including Thai Navy SEALs, divers from many countries, doctors and volunteers. Saman Kunan, who died while delivering air tanks, was honored as a hero. In 2019, it was reported that a Thai Navy SEAL also died from an infection he caught during the rescue.`,
  turns: [
    {
      clock: `June 24, 2018`,
      title: `The Flooded Entrance`,
      sit: `The search began last night. The cave is about 10 km long. The deeper you go, the narrower it gets, with one flooded section after another. Local rescue teams and Thai Navy SEAL divers have gone in, but the water is thick with mud, and divers cannot see their own hands. The rain keeps falling, and the water is rising.`,
      rep: [
        { f: `Local Rescue Team`, t: `The water has reached a large chamber a short way inside the entrance. We can't go any farther.` },
        { f: `Explorer Who Knows the Cave`, t: `Deep inside there is a high spot called "Pattaya Beach." If they made it there, they may be alive.` },
        { f: `A Longtime Local Resident`, t: `The rain at this time of year never lasts. Wait a few days and the water will go down on its own.`, why: `The rainy season in northern Thailand had only just begun, and the rain kept coming on and off. If the rescuers had waited for the water to go down by itself, the search would never have moved forward.` }
      ],
      inv: `You checked the weather service's forecast. The rainy season has only just started, and heavy rain is expected to continue.`,
      adv: {
        c: `We should bring everything under one command and call in cave diving experts from around the world. If we push too hard, rescuers will die.`,
        a: `Every minute counts. Let's send the divers deep inside with everything we have.`,
        d: `In past cases, cave water went down within a few days once the rain stopped. The efficient choice is to save our resources and wait for the level to drop.`
      },
      flawWhy: `Laplace applied a past average: "when the rain stops, the water goes down." He left out the condition of this moment, that the rainy season had only just begun.`,
      opt: [
        { l: `Wait for the water to go down`, d: `Sending people into murky water is dangerous. Push the search forward once the water level drops.`,
          ok: `The rescuers were kept out of danger. But the water did not go down, and time slipped away.`,
          ng: `The rain went on, and the water rose even higher. The search was back to square one.`,
          tl: `The rescuers wait for the water to go down, and the search falls far behind.` },
        { l: `Unite the command and call in experts from home and abroad`, d: `Set up a command post in front of the cave and bring the navy, the army, the province and the volunteers under one plan. Call in cave diving experts from Thailand and abroad.`,
          ok: `On top of the Navy SEALs, people and equipment began arriving from inside and outside Thailand. A large command post rose in front of the cave.`,
          ng: `People came, but in the first few days there was confusion over who would do what.` },
        { l: `Keep the navy divers pushing into the murky water`, d: `Even with no visibility, use the divers you have to get a little farther in.`,
          ok: `The divers inched deeper. But in the rushing water, there were many close calls.`,
          ng: `A strong current pushed the divers back, and one of them nearly went missing.`,
          tl: `Divers are forced on through the floodwater and come close to disaster.` }
      ],
      hist: `Governor Narongsak set up a command post in front of the cave and took charge of the rescue. Thai Navy SEALs dove toward the inner cave, and the Thai government asked other countries for help. In late June, British cave divers, a U.S. military rescue team and others arrived on site.`,
      lesson: `Before you decide to wait, check that the reasons for waiting are true. Early in a crisis, gathering people and information in one place is what creates speed.`,
      histTl: `Set up a command post at the cave and asked for help at home and abroad`
    },
    {
      clock: `Late June 2018`,
      title: `The Fight Against the Water`,
      sit: `Cave diving experts have arrived from Britain. But the rain goes on, and the distance divers can cover grows only a little at a time. The only way to lower the water is to pump it out of the cave and reduce the rain that flows into it from the mountain. On the mountain above, teams are also searching for shafts that might lead into the cave.`,
      rep: [
        { f: `Drainage Team`, t: `If we bring in many large pumps, the water will slowly go down. But the water we pump out will flow into the rice fields downstream.` },
        { f: `Mountain Search Team`, t: `We found several shafts on the mountain. But we don't know if any of them connect to the inner cave.` },
        { f: `Drilling Contractor`, t: `If we drill from the top of the mountain, we can reach the boys in a few days.`, why: `No one yet knew where the boys were. A thick mass of rock lay above the cave, and drilling without knowing the exact position or depth had no chance of reaching them in a few days.` }
      ],
      inv: `You compared the cave survey map with the shape of the mountain. As long as no one knows where the boys are, there is no way to decide where to drill.`,
      adv: {
        c: `Let's run the pumping, the diving and the search all at once. And let's explain things carefully to the people downstream who will be flooded.`,
        a: `Diving is too slow. Bring in heavy machinery and drill straight down from above.`,
        d: `The most proven method is skilled divers. The best choice is to put our resources into diving.`
      },
      flawWhy: `Ares took the drilling contractor's optimism as a given. While no one knew where the boys were, there was no way to even decide where to drill.`,
      opt: [
        { l: `Run pumping, water diversion, diving and the shaft search all at once`, d: `Pump water out of the cave, and change the flow of water on the mountain so less of it enters the cave. Divers lay guide lines a little farther each time. Explain the situation to the farmers downstream.`,
          ok: `The water slowly went down, and divers could lay lines and move deeper. The farmers whose rice fields were flooded accepted the plan.`,
          ng: `The pumps kept running, but every heavy rain brought the water back up. Even so, the divers kept moving forward bit by bit.` },
        { l: `Put everything into the divers and push all the way in`, d: `Move the people and equipment from pumping and searching over to diving.`,
          ok: `The divers made it deeper. But the water level did not fall, and every dive stayed dangerous.`,
          ng: `The water rose, and at the end of a guide line deep inside, a diver nearly could not get back.`,
          tl: `All resources go to diving, the water stays high, and dangerous dives continue.` },
        { l: `Drill down from the mountain to reach them directly`, d: `Haul heavy machinery up the mountain and drill toward the inner cave.`,
          ok: `Drilling began. But no one still knows where the boys are.`,
          ng: `The hole never reached the cave. Moving the heavy machinery also slowed down the other work.`,
          tl: `Drilling begins before anyone knows where the boys are, and time is lost.` }
      ],
      hist: `The rescue team pumped water out of the cave with large pumps and worked on the mountain to change the flow of water. British cave divers Rick Stanton and John Volanthen moved deeper, laying guide lines through the murky water. The pumped water flooded rice fields downstream, and it is reported that the farmers accepted this.`,
      lesson: `When you can't bet on a single move, run the moves that buy time alongside the moves that push forward. Explaining things to the people who bear the cost is part of the operation too.`,
      histTl: `Pumped water and diverted streams while divers laid lines deeper inside`
    },
    {
      clock: `July 2, 2018`,
      title: `Found`,
      sit: `At night, two British divers found the 13 on a rock ledge about 4 km from the entrance. It was about ten days after they entered the cave. All of them were alive. But the way there runs through one flooded section after another, and even skilled divers need hours to go one way. The boys have no diving experience, and some of them are not strong swimmers.`,
      rep: [
        { f: `Report from the Site`, t: `All 13 confirmed alive. They are thin, but no one seems to be in danger.` },
        { f: `Medical Team`, t: `First they need food, water and something to keep them warm. A doctor needs to be with them.` },
        { f: `Assessment of the Cave Air`, t: `The chamber is large. The air will last for months.`, why: `Later, as rescuers came and went, the oxygen in the chamber dropped. It is reported that by early July it had fallen to about 15%.` }
      ],
      inv: `You had equipment carried in to measure the air in the chamber. There is enough oxygen for now, but it drops as more people come in. No one can say it will last for months.`,
      adv: {
        c: `Rushing them out is far too dangerous. Let's keep sending in food and wait for the dry season, when the water goes down.`,
        a: `We know where they are. We should bring them out right now, before the next rain.`,
        d: `We don't have enough information. The choice with the highest expected value is to prepare both waiting and diving at once, while measuring conditions.`
      },
      flawWhy: `Minerva chose to wait out of a correct instinct: diving was dangerous. But she missed the danger of waiting itself. The oxygen would fall, and rain would raise the water.`,
      opt: [
        { l: `Leave a doctor and team with them, and prepare every option in parallel`, d: `Leave a navy doctor and team members with the 13. Bring in food and medicine, keep pumping and searching for shafts, and work out how to get them out.`,
          ok: `A navy doctor and team members stayed with the 13. Letters began passing between the boys and their families, and the boys started smiling again.`,
          ng: `The supplies got through. But every round trip to the chamber wore the divers down.` },
        { l: `Wait months for the rainy season to end`, d: `Keep bringing in supplies and wait for the dry season, when the water goes down by itself.`,
          ok: `The boys have their supplies and are calm. But the oxygen in the chamber is slowly falling.`,
          ng: `Rain raised the water, and even the supply dives became dangerous. The oxygen keeps falling.`,
          tl: `The rescuers decide to wait months for the dry season and race against falling oxygen.` },
        { l: `Have the divers bring them out at once`, d: `Move before the next rain, without waiting for preparations.`,
          ok: `The first boy was brought out. But there were not enough tools or procedures, and the divers were pushed to their limits.`,
          ng: `A boy who went into the water unprepared froze partway through. A diver fought to bring him back.`,
          tl: `Rescuers try to bring the boys out unprepared and get into danger underwater.` }
      ],
      hist: `On July 2, British divers John Volanthen and Rick Stanton found the 13. Video of the exchange "How many of you?" "Thirteen." was seen around the world. After that, a Thai navy doctor and team members stayed with the boys and delivered food and medicine. Waiting, diving and drilling were all studied side by side.`,
      lesson: `Finding them is not the finish line. Just when you feel relief, keep measuring the conditions that get worse with time, like oxygen and weather.`,
      histTl: `British divers found the 13. A doctor and team stayed with them.`
    },
    {
      clock: `July 6, 2018`,
      title: `A Death`,
      sit: `Early this morning, Saman Kunan, a former Thai Navy SEAL, died. It is reported that he lost consciousness underwater on his way back after carrying air tanks deep into the cave. It is now clear that even a skilled diver can lose his life on this route. The oxygen in the chamber keeps falling. Forecasters say heavy rain will come again in a few days.`,
      rep: [
        { f: `Weather Service`, t: `Heavy rain is expected within a few days. If it comes, the water will rise again.` },
        { f: `Medical Team`, t: `The oxygen in the chamber is falling. If they stay much longer, it will affect the boys' health.` },
        { f: `Dive Instructor`, t: `With a few days of practice, the boys can dive out on their own.`, why: `Some parts of the route were so narrow that divers had to take their tanks off their bodies to pass, and there was almost no visibility. For children with no diving experience, staying calm while diving for hours in dark, tight water was extremely hard.` }
      ],
      inv: `You asked the divers to describe the route in detail. Narrow flooded passages with no visibility come one after another. They say it frightens even skilled adult divers.`,
      adv: {
        c: `A man as skilled as Saman has died. We can't send children down that route. Let's wait.`,
        a: `If they practice, the kids can get out on their own. We should move before the rain comes.`,
        d: `Putting the rain forecast together with the oxygen trend, the chance of success drops the longer we wait. Having experts carry them out has the highest expected value.`
      },
      flawWhy: `Ares was right that they had to move before the rain. But he missed the danger of having the boys dive out on their own.`,
      opt: [
        { l: `Wait until the rainy season ends`, d: `Keep bringing in supplies and oxygen, and wait for the water to go down.`,
          ok: `The boys are holding on. But the rain is coming closer, and the burden on the divers carrying oxygen keeps growing.`,
          ng: `Heavy rain raised the water. The route to the chamber got even harder, and the oxygen keeps falling.`,
          tl: `The rescuers decide to wait, but rain raises the water and the oxygen keeps falling.` },
        { l: `Plan for skilled divers to escort each boy out`, d: `Before the rain comes, have a diver go with each boy and carry him through the water. Lay guide lines and tanks along the route, and station people at key points.`,
          ok: `The decision to start the rescue was made. The divers began placing tanks and people at key points along the route.`,
          ng: `The plan was set. But even among the divers, some still feared that not everyone could make it.` },
        { l: `Train the boys for a few days and have them dive out on their own`, d: `Teach them the basics of diving, and have the boys dive out themselves, with divers in front and behind.`,
          ok: `Some of the boys learned to dive. But faced with the narrow passages, many froze in fear.`,
          ng: `During training, one boy panicked and nearly pulled off his mask. The plan came to a stop.`,
          tl: `After brief training, the boys try to dive out on their own and get into danger underwater.` }
      ],
      hist: `Saman Kunan's death brought deep sorrow to Thailand and the world. Weighing the rain forecast and the falling oxygen, the rescue command decided that divers would bring the boys out. The rescue began on July 8.`,
      lesson: `A precious sacrifice shows the true danger of an operation. Even in grief, calmly compare the danger of waiting with the danger of moving.`,
      histTl: `Saman Kunan died in the line of duty. The rescue by diving was decided.`
    },
    {
      clock: `July 7, 2018`,
      title: `Carried While Asleep`,
      sit: `Richard Harris, an Australian anesthetist who is also an experienced cave diver, has examined the boys deep in the cave. If a child panics in the dark, narrow water, the diver escorting him is in danger too. What Dr. Harris and the others came up with was a plan to put the boys under anesthesia, fit them with masks that cover the whole face, and have divers carry them out. It has never been done before.`,
      rep: [
        { f: `Medical Team`, t: `If they are asleep, there will be no panic. But their breathing could weaken underwater, and more medicine will need to be given along the way.` },
        { f: `Navy SEALs`, t: `Thai team members are ready at points along the route to take over the boys from the divers.` },
        { f: `Voices Outside the Cave`, t: `The boys are calm. Even without anesthesia, they won't panic if someone is with them.`, why: `Being calm in the chamber was one thing. Being carried for hours through narrow water with no visibility was another. Taking off a mask underwater could be fatal.` }
      ],
      inv: `You checked with the divers. In the narrow spots, they have to push their tanks ahead of them to get through. If a child panics there, even the escorting diver cannot hold him.`,
      adv: {
        c: `It has never been done, but this is the only way to remove the danger of panic. Let's carry a few each day and not push too hard.`,
        a: `The rain is almost here. Let's get everyone out in one day.`,
        d: `Anesthesia carries the danger that breathing will stop. A method without drugs should have a lower chance of complications.`
      },
      flawWhy: `Laplace counted only the chance of complications from anesthesia. He did not include the danger of a child panicking in water with no visibility.`,
      opt: [
        { l: `Bring them out without anesthesia, escorted by divers`, d: `Keep the boys awake, and have divers lead them by the hand through the water.`,
          ok: `The first boy made it out. But he panicked and thrashed in a narrow spot, and the diver was nearly in trouble too.`,
          ng: `A boy panicked in a narrow passage. The escorting diver struggled to hold him and barely made it back.`,
          tl: `The boys are brought out without anesthesia, and one panics in a narrow passage.` },
        { l: `Put them under anesthesia and have divers carry them, a few each day`, d: `Put the boys to sleep, fit them with full-face masks, and have skilled divers carry them. Station people at key points along the route, and bring out a few each day without pushing too hard.`,
          ok: `Four came out on July 8, four on July 9, and the last four boys and the coach on July 10. All 13 were rescued, and finally the divers and doctors came out of the cave too.`,
          ng: `At times, carrying the boys took longer than planned. Even so, one by one, they were brought out.` },
        { l: `Carry everyone out in a single day`, d: `Before the rain comes, put every diver to work and bring out all 13 at once.`,
          ok: `Everyone was out in one day. But the divers were exhausted, and there were many close calls.`,
          ng: `A diver who had been diving nonstop fell ill partway through and got stuck along with the boy he was carrying.`,
          tl: `The rescuers try to carry everyone out in one day, and exhausted divers raise the risk of an accident.` }
      ],
      hist: `On Dr. Harris's proposal, the boys were put under anesthesia and carried out by divers. The rescue was split over three days: four boys on July 8, four on July 9, and the last four boys and the coach on July 10. The navy doctor and team members who had stayed with the boys also came out safely at the end.`,
      lesson: `Even a plan with no precedent should be weighed against the dangers of the other plans. The method that removes the biggest danger can turn out to be the safest.`,
      histTl: `Carried out under anesthesia. All 13 rescued in three days.`
    }
  ]
};
