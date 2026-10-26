window.SCENARIOS_EN = window.SCENARIOS_EN || {};
window.SCENARIOS_EN.amundsen = {
  title: `Race to the South Pole`,
  sub: `By Dog Sled to the Pole`,
  year: `1910 to 1912`,
  place: `Framheim, Bay of Whales, Ross Ice Shelf, Antarctica`,
  role: `Leader of the Antarctic Expedition`,
  roleNote: `In Roald Amundsen's position`,
  meters: [`Lives of the Party`, `Dogs and Supplies`, `Road to the Pole`],
  intro: [
    `1909. American explorers announce, one after another, that they have reached the North Pole.`,
    `The Norwegian explorer Amundsen has been preparing to aim for the North Pole in the Fram, a ship borrowed from Fridtjof Nansen.`,
    `If the North Pole can no longer be a "first," the only great goal left is the South Pole. The British expedition under Robert Falcon Scott is also about to set out for it.`,
    `You are the expedition leader. The Fram has left Norway and is heading south.`
  ],
  endings: [
    { title: `At the Pole, and All Home`, text: `Five men stood at the South Pole, and every one of them made it back to Framheim. Careful planning kept people alive on the coldest continent.` },
    { title: `A Costly Arrival`, text: `You reached the pole. But you lost the unity of your party and much of your supplies, and bitter memories remained.` },
    { title: `A Dream Lost on the Ice`, text: `The party never reached the pole and had no choice but to turn back through the bitter cold.` }
  ],
  epilogue: `In history, Amundsen and four companions reached the South Pole on December 14, 1911, the first people ever to do so. After a journey of about three months, all five returned to Framheim on January 25, 1912. Scott's party of five reached the pole on January 17, 1912, and found the Norwegian flag and tent. All five died on the way back, and their bodies were found in November of that year. Scott kept writing in his journal until his final days.`,
  turns: [
    {
      clock: `September 1910, Madeira`,
      title: `Revealing the Destination`,
      sit: `The Fram has put in at Madeira in the Atlantic. Most of the crew believe they are headed for the Arctic. But you have secretly decided to go for the South Pole. Only a few people know the plan. The money raised for an Arctic expedition and the ship borrowed from Nansen were both meant for the Arctic. In Antarctica, Scott's British expedition is already ahead in its preparations.`,
      rep: [
        { f: `Second-in-Command`, t: `If we keep heading south, the crew will figure it out sooner or later. If we keep hiding it, we cannot hold their trust on the ice.` },
        { f: `A Crew Member`, t: `Just say nothing to Scott. If he doesn't know, he won't hurry.`, why: `Going after the same goal without telling the other side would later be denounced as a sneak attack. That the Fram was heading south was bound to come out eventually.` },
        { f: `Liaison in Norway`, t: `Many of the people who gave money believe this is a plan for the Arctic.` }
      ],
      inv: `You checked the supply and port plans. Heading south means calling at ports in Australia or New Zealand, where word will get out. There is no way to keep it hidden.`,
      adv: {
        c: `Our promise to the backers was the Arctic. We should tell Norway first and get permission before going on.`,
        a: `Tell the whole crew right here, and tell Scott too. Let's compete in the open.`,
        d: `The less we reveal, the slower the other side will respond. Not telling Scott raises our odds of getting there first.`
      },
      flawWhy: `Laplace calculated only how far behind the rival would fall. He left out the honor and support you would lose if it were later seen as a sneak attack.`,
      opt: [
        { l: `Tell the crew and send Scott a telegram`, d: `At Madeira, tell the whole crew you are going to Antarctica, and say anyone who wants to leave may do so. Send Scott a short telegram.`,
          ok: `Every crew member agreed to go to Antarctica. The telegram said only that the Fram was proceeding to the Antarctic. The race was now out in the open.`,
          ng: `The crew agreed, but back home the change of plan drew surprise and criticism.` },
        { l: `Go on without telling Scott`, d: `Tell only the crew about Antarctica, and keep it from the outside world.`,
          ok: `The plan stayed hidden as you sailed south. But you worry about the backlash once it comes out.`,
          ng: `The plan leaked at a port along the way. In Britain, a cry of "sneak attack" spread.`,
          tl: `Heads for Antarctica without telling Scott. Later denounced as a sneak attack.` },
        { l: `Go back to Norway for permission`, d: `Explain the change of plan to the backers, get their consent, and then set out again.`,
          ok: `Most of the backers agreed. But the departure slipped a year, and you lost a whole Antarctic summer.`,
          ng: `Strong opposition to the change of plan led some of the money to be withdrawn.`,
          tl: `Returns home to explain the change of plan. The trip to Antarctica is delayed a year.` }
      ],
      hist: `At Madeira, Amundsen told the crew they were going to Antarctica. All of them are said to have agreed. He sent Scott a short telegram: "Beg to inform you Fram proceeding Antarctic." Scott received it in Australia.`,
      lesson: `Being honest with a rival also protects your own honor. If something cannot stay hidden, be the first to reveal it.`,
      histTl: `Told the crew about Antarctica and sent Scott a telegram`
    },
    {
      clock: `January 1911, Bay of Whales`,
      title: `Dogs or Ponies?`,
      sit: `The Fram has reached the Bay of Whales on the Ross Ice Shelf. Here you will build your winter base, Framheim. The pole is more than 1,300 km away. How you haul your loads will decide everything. The ship carried about 100 Greenland dogs. Scott's party is reported to plan a mix of ponies, motor sledges, and dogs, with the men hauling the sledges themselves at the end. Before winter, you also need to lay supply depots along the route to the pole.`,
      rep: [
        { f: `Dog Handler`, t: `Dogs can run a long way on little food. A dog that weakens can also become food for the other dogs and the men.` },
        { f: `A Crew Member`, t: `Dogs can't cover long distances on the ice shelf. Ponies, like the British are using, can haul heavier loads.`, why: `Ponies sweat and suffer in cold and snow. Their fodder must be hauled as well. On his Northwest Passage expedition, Amundsen had learned how to use dog sleds from the peoples of the far north.` },
        { f: `Surveyor`, t: `If we mark each depot with a line of flags stretching several kilometers to either side, we can find it even if we stray off course a little.` }
      ],
      inv: `You went back over the records from the Arctic. Dogs do not get chilled on snow, and they need little food. Ponies are weak in the cold and in deep snow.`,
      adv: {
        c: `The plan to use the dogs as food is hard, but it is to protect human lives. Let's build the plan on the numbers.`,
        a: `Go for speed with dogs and skis. We should lay depots as far south as we can before winter.`,
        d: `In weight hauled per animal, ponies far outperform dogs. Using ponies maximizes the load.`
      },
      flawWhy: `Laplace compared only how much weight one animal could haul. He left out resistance to cold and the weight of the fodder.`,
      opt: [
        { l: `Go by dog sled and ski, and use the dogs as food`, d: `Haul the loads by dog sled while the men travel on skis. As the loads get lighter, reduce the number of dogs and use them as food. Lay depots before winter.`,
          ok: `By autumn, depots were laid from 80 to 82 degrees south. The lines of flags would mark the way home.`,
          ng: `Several dogs weakened while laying the depots. Even so, the depots were in place.` },
        { l: `Use ponies and motor sledges`, d: `Haul heavy loads in one go, with dogs in support.`,
          ok: `The ponies hauled heavy loads. But they are starting to weaken in the cold, and the weight of the hay is telling.`,
          ng: `The ponies weakened one after another in the cold, and the motor sledges broke down. Loads were left behind on the ice shelf.`,
          tl: `Sets out with ponies and motor sledges. The ponies weaken in the cold, and the loads cannot be moved.` },
        { l: `Have the men haul the sledges`, d: `Rely on your own strength, not animals.`,
          ok: `The party moved forward bit by bit. But the men are badly worn down.`,
          ng: `Hauling heavy sledges day after day, the men nearly collapsed from hunger and frostbite.`,
          tl: `The men haul the sledges themselves and are worn down.` }
      ],
      hist: `Amundsen planned to travel by dog sled and ski. From the start, he counted on reducing the number of dogs as the loads got lighter and using them as food. Before winter, he laid depots from 80 to 82 degrees south and marked them with lines of flags.`,
      lesson: `When you choose your tools, look at what works in the real environment, not at performance on paper. The knowledge of people who know the land can beat the numbers.`,
      histTl: `Chose dog sleds and skis, and laid depots out to 82 degrees south`
    },
    {
      clock: `Early September 1911`,
      title: `Time to Set Out`,
      sit: `The long winter is ending. The Antarctic spring is still young, and some days the temperature drops to around minus 50 degrees Celsius. You cannot stop thinking about Scott's motor sledges. You do not want to be beaten. The dogs have built up their strength over the winter. Some of the men say it is still too early.`,
      rep: [
        { f: `Weather Observer`, t: `It has warmed up a little over the past few days. But early spring often turns suddenly cold again.` },
        { f: `A Crew Member`, t: `It's warmer now. Spring is here. If we leave right away, we're sure to beat Scott.`, why: `The warm spell was only temporary. A few days after setting out, the cold returned, below minus 50 degrees, and both dogs and men suffered frostbite.` },
        { f: `Johansen`, t: `Neither dogs nor men can go far in this cold. We should wait a little longer.` }
      ],
      inv: `You reviewed the temperature records from the winter. In many years, a warm spell at this time of year is quickly followed by severe cold.`,
      adv: {
        c: `We can't change what Scott does. What we can change is our own readiness. Let's wait until the cold eases.`,
        a: `It's getting warmer. We should leave now, before the motor sledges get ahead of us.`,
        d: `Rather than sending everyone, it is more efficient to send a small party first to check the weather.`
      },
      flawWhy: `Ares feared only being beaten by Scott. He mistook a brief warm spell for the arrival of spring and ignored the danger of the cold coming back.`,
      opt: [
        { l: `Set out now with all eight men`, d: `Now that it is warmer, the whole party heads for the pole.`,
          ok: `Soon after you set out, the cold returned. Dogs and men suffered frostbite, and you left the loads at the 80-degree depot and turned back.`,
          ng: `Several dogs collapsed in the cold. On the way back the column broke apart, and the men reached the base in scattered groups.` },
        { l: `Wait for the cold to ease`, d: `Wait until October, when spring is fully here, and protect the strength of the dogs and men.`,
          ok: `In October, the cold eased. Dogs and men were in top shape when the time came to set out.`,
          ng: `While you waited, worry about Scott put the party on edge. Even so, everything was ready.`,
          tl: `Delays the start until October and protects the strength of dogs and men.` },
        { l: `Send a small party ahead to check`, d: `Send just two or three men to the depot to check the weather and the snow.`,
          ok: `The advance party came back, but with frostbite. All they learned was that it was still too cold.`,
          ng: `The small advance party was stranded by the cold, and the men sent to rescue them also suffered frostbite.`,
          tl: `A small advance party is stranded by the cold.` }
      ],
      hist: `Amundsen set out with eight men around September 8, 1911. But within a few days the cold returned, below minus 50 degrees, and dogs and men suffered frostbite. The party left its loads at the 80-degree depot and turned back. On the way to the base the column broke apart, and Johansen and Prestrud arrived well behind the others.`,
      lesson: `Anxiety about a rival bends your judgment. Before you look at what the other side is doing, check whether your own conditions are ready.`,
      histTl: `Set out too early in September and turned back in the cold`
    },
    {
      clock: `Mid-September 1911, Framheim`,
      title: `Conflict in the Party`,
      sit: `The party that turned back reached the base in scattered groups. Johansen came in last, bringing the frostbitten Prestrud, hours after the first men had arrived. In front of everyone, Johansen harshly criticized the early start and the leader's choice to go ahead and leave the stragglers behind. Johansen is a seasoned explorer who traveled in the Arctic with Nansen. The mood in the party is heavy.`,
      rep: [
        { f: `A Crew Member`, t: `Johansen has a point. But if the leader's authority falls apart, the journey to the pole will not hold together.` },
        { f: `Medical Officer`, t: `Several men have frostbite. We can't set out again until everyone has recovered.` },
        { f: `Another Crew Member`, t: `If all eight of us go, we'll have plenty of hands, and it'll be safe. Just start over with the party as it is.`, why: `The more people, the more food and dogs you need. With conflict inside the party, judgments in the extreme cold would no longer line up.` }
      ],
      inv: `You recalculated the food and the number of dogs. The party going to the pole would have more margin if it were cut to about five.`,
      adv: {
        c: `Admit the mistake, and talk with Johansen too. Then split into a polar party and a separate survey party.`,
        a: `You need to show your authority. Take Johansen off the polar party and give him another task.`,
        d: `The more people, the more help there is in an accident. Taking all eight is the safe choice.`
      },
      flawWhy: `Laplace saw a larger party only as "safe." He left out the extra food and dogs it needed, and the danger of moving forward with the conflict unresolved.`,
      opt: [
        { l: `Admit the mistake, talk it out, and split the party`, d: `Admit that the early start was your own error. Listen to Johansen too, then cut the polar party to five and send the rest to survey the land to the east.`,
          ok: `The party split, but with little resentment. The survey team set out proud of its own mission.`,
          ng: `The talks dragged on, but in the end everyone accepted the new plan.`,
          tl: `The leader admits his mistake, and the party is reorganized after a frank talk.` },
        { l: `Drop Johansen and head for the pole with five`, d: `Take Johansen off the polar party and send him with Prestrud and others to survey the land to the east. Five men will go to the pole.`,
          ok: `With the polar party cut to five, it moved more lightly. But Johansen was left deeply wounded.`,
          ng: `The party split, but a heavy mood lingered at the base.` },
        { l: `Start over with all eight`, d: `Leave the conflict alone, and head for the pole again with everyone.`,
          ok: `The party set out again. But at every decision, the leader and Johansen disagreed.`,
          ng: `Opinions split along the way, and the party hesitated. Food and dogs were used up faster too.`,
          tl: `Sets out again with eight men and an open conflict. Food and dogs run down faster.` }
      ],
      hist: `Amundsen took Johansen off the polar party. Johansen was sent with Prestrud and Stubberud to survey King Edward VII Land to the east. Five men would go to the pole. This treatment is said to have left lasting bad feeling between Johansen and Amundsen.`,
      lesson: `A leader's true worth shows most when he is criticized. Admitting a mistake and pulling the team together is stronger in the long run than silencing people with authority.`,
      histTl: `Dropped Johansen. Five men set out for the pole.`
    },
    {
      clock: `December 1911`,
      title: `The Pole`,
      sit: `Around October 20, five men set out with four sledges and 52 dogs. They crossed the Ross Ice Shelf, climbed a glacier through the mountains, and reached the polar plateau. There, as planned, they killed 24 dogs and named the place "the Butcher's Shop." It is now mid-December, and by dead reckoning the pole is just ahead. But if you cannot show that this is truly the pole, your claim may be doubted later, as happened with the North Pole.`,
      rep: [
        { f: `Navigator`, t: `If we measure the sun's height with a sextant several times, we can shrink the error in our position. If a few men ski around the area, we can be sure of boxing in the pole.` },
        { f: `A Crew Member`, t: `We don't need observations. Dead reckoning is enough. We should hurry back and tell the world.`, why: `Claims to have reached the North Pole had been called into question. Without a record of observations, the South Pole claim might be doubted too.` },
        { f: `Dog Handler`, t: `The dogs that are left are in good shape. We have enough food to reach the depots on the way back.` }
      ],
      inv: `You checked the remaining food and fuel. Even after a few days of observations, there is plenty to reach the depots on the way back.`,
      adv: {
        c: `Take repeated observations and leave a solid record. We should also leave a tent and a letter for Scott's party.`,
        a: `We've reached our goal. Let's turn back right away and get the news out a day sooner.`,
        d: `To cut the error to the absolute minimum, we should wait as many days as it takes for the best weather and observe then.`
      },
      flawWhy: `Ares looked only at how fast the news would travel. A claim with no proof means nothing if it is doubted later.`,
      opt: [
        { l: `Take repeated observations, leave a tent and letter, and go home`, d: `Have a few men ski around the area, and repeat the sun observations. Pitch a tent, raise the flag, and leave a letter for Scott. On the way back, follow the flag markers.`,
          ok: `On December 14, five men stood at the South Pole. They left the flag and letters in the tent "Polheim," and on the way back they found every depot without fail.`,
          ng: `The observations took longer than planned. Even so, every depot on the way back was found.` },
        { l: `Plant the flag at the dead-reckoning point and turn back`, d: `Skip the observations and get the news out as fast as possible.`,
          ok: `The party got back quickly. But there was little proof of the arrival, and doubts were raised.`,
          ng: `After the return home, the lack of observation records became an issue. The arrival itself was called into doubt.`,
          tl: `Skips the observations and turns back. The arrival is doubted.` },
        { l: `Wait for the best possible weather`, d: `Stay at the pole as many days as it takes to remove all error.`,
          ok: `The record was perfect. But the remaining food began to look thin.`,
          ng: `The weather turned, and food and fuel ran down while you waited. The trip back became a fight against hunger.`,
          tl: `Waits at the pole for days, and food and fuel nearly run out.` }
      ],
      hist: `On December 14, 1911, Amundsen and four companions reached the South Pole. The men skied around the area and repeated their observations to confirm the position. They raised the flag at the tent "Polheim" and left letters for Scott and for the King of Norway. On January 25, 1912, all five returned to Framheim together. Scott's party of five, who reached the pole about a month later, all died on the way back.`,
      lesson: `The moment you reach the goal is when you must secure the proof and the way home. Success is complete only when you return alive and the news can be trusted.`,
      histTl: `Reached the South Pole on December 14. All returned to base.`
    }
  ]
};
