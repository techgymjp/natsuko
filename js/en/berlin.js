window.SCENARIOS_EN = window.SCENARIOS_EN || {};
window.SCENARIOS_EN.berlin = {
  title: `Berlin Airlift`,
  sub: `Feeding Two Million from the Air`,
  year: `1948 to 1949`,
  place: `U.S. Military Government Headquarters, Berlin, Germany`,
  role: `U.S. Military Governor in Germany`,
  roleNote: `In the position of General Lucius D. Clay and Major General William H. Tunner, who ran the airlift`,
  meters: [`Supplies in West Berlin`, `Trust of Berliners`, `Room to Avoid War`],
  intro: [
    `In 1945, defeated Germany was divided into four zones, occupied by the United States, Britain, France, and the Soviet Union.`,
    `The capital, Berlin, lay deep inside the Soviet zone, and the city itself was split among the four powers. About two million people live in West Berlin, the part held by the three Western powers.`,
    `In June 1948, the Western powers brought a new currency into their zones. The Soviets reacted with fury.`,
    `You are the U.S. Military Governor in Germany. Word has just come in that the railway to Berlin has stopped.`
  ],
  endings: [
    { title: `The Blockade Is Broken`, text: `The blockade ended without a single shot. The days of holding up a city from the air bound the people of West Berlin and the West tightly together.` },
    { title: `A Frozen Victory`, text: `West Berlin was saved. But the winter of scarce supplies was long, and it left deep scars on the people and their lives.` },
    { title: `A City Let Go`, text: `You could not hold up West Berlin. Its people stopped believing the West's promises.` }
  ],
  epilogue: `In history, the Soviet Union lifted the blockade on May 12, 1949. The airlift went on until the end of September to build up stockpiles, and about 2.3 million tons of supplies were flown in all. About 100 people, including American and British aircrew and German workers, died in accidents connected with the airlift. Within 1949, the West founded the North Atlantic Treaty Organization (NATO), and Germany was divided into two states, East and West.`,
  turns: [
    {
      clock: `June 24, 1948`,
      title: `The Blockade`,
      sit: `Citing "technical difficulties," the Soviets have cut every railway, road, and canal from the Western zones to West Berlin. Electricity from power plants in the Soviet sector has been cut too. West Berlin has only about a month's worth of food and about a month and a half of coal. With the land routes closed, all that remains are three air corridors linking the Western zones and Berlin. Their use is set down in writing in an agreement the four powers made after the war.`,
      rep: [
        { f: `U.S. Air Forces in Europe`, t: `We have about 100 twin-engine C-47 transports in Europe. Each one can carry about 3 tons.` },
        { f: `A Senior Official in Washington`, t: `Feeding a city of two million from the air is impossible, no matter how many planes we gather. We should pull out of West Berlin while we can.`, why: `The airlift brought in big C-54 transports and improved its methods. By the next spring, it was flying in about 8,000 tons a day on average. The official had judged the limit by the starting capacity alone.` },
        { f: `West Berlin City Government`, t: `The city needs several thousand tons of food and coal a day.` }
      ],
      inv: `You had transport experts run the numbers again. A big four-engine C-54 can carry about 10 tons. If planes are gathered from around the world and flown day and night, it may be possible to come close to what the city needs.`,
      adv: {
        c: `Pulling out hands two million people to the Soviets, and sending tanks risks war. In the air, there is no clash unless they open fire.`,
        a: `We have the right to use the roads. Push through with an armed convoy and show that the blockade is pointless.`,
        d: `Compared with what the city needs, our current capacity can cover less than 10% by air. The rational choice is to prepare to withdraw.`
      },
      flawWhy: `Laplace plugged in the number of transports on hand today. He did not consider that gathering planes and changing methods could multiply capacity many times over.`,
      opt: [
        { l: `Prepare to withdraw from West Berlin`, d: `An airlift cannot work. Avoid war and pull out Western staff and supplies.`,
          ok: `Fighting was avoided. But the people of West Berlin felt abandoned.`,
          ng: `Rumors of withdrawal spread, and West Berlin fell into chaos. Countries across Western Europe began to doubt America's promises.`,
          tl: `The West announces it will leave West Berlin. All of Berlin comes under Soviet control.` },
        { l: `Start an airlift`, d: `Fly the transports on hand at once. At the same time, gather bigger planes from around the world.`,
          ok: `On June 26, American transports began flying to Berlin. Britain started its own airlift too. The drone of transport planes over West Berlin never stopped.`,
          ng: `The airlift began, but in the first few days it carried only a small part of what the city needed.` },
        { l: `Break through by road with an armed convoy`, d: `Send a column of trucks down the road, guarded by combat troops.`,
          ok: `The convoy reached Berlin. But the Soviets massed troops at the zone border and made it clear the next convoy would not get through.`,
          ng: `Soviet troops blocked the road, and the convoy was stuck, with guns pointed on both sides.`,
          tl: `An armed U.S. convoy drives into the Soviet zone. It faces Soviet troops, and tension soars.` }
      ],
      hist: `Clay decided to start flying supplies in by air. On June 26, American transports began flying to Berlin, and Britain started its own airlift. It is said that when Clay called General Curtis LeMay of the Air Force and asked, "Can you haul coal?", LeMay answered, "We can haul anything."`,
      lesson: `Do not judge only by whether your current strength is enough. First ask whether there is a way to multiply it.`,
      histTl: `Started the airlift to Berlin on June 26`
    },
    {
      clock: `July 1948`,
      title: `Tanks or Wings?`,
      sit: `The airlift goes on, but it still cannot carry what the city needs. Clay had long believed that if a convoy went down the road with combat troops as escort, the Soviets would not interfere. In Washington, the debate over whether to try it continues. A meeting with the President is coming up.`,
      rep: [
        { f: `Joint Chiefs of Staff`, t: `Soviet forces around Germany far outnumber Western forces. If there is a clash on the ground, U.S. forces in Berlin cannot hold out.` },
        { f: `Local Intelligence`, t: `The Soviets will never fire on a convoy. They will just block the road a little for show.`, why: `No one knew how far the Soviets would go. A convoy stopped at a blocked bridge or road would have to choose between pushing through and turning back. Pushing through meant fighting. Turning back would show Western weakness.` },
        { f: `Air Force`, t: `If we bring big C-54s from the Pacific and from home, we can carry far more. But we will need to expand the bases and find the crews.` }
      ],
      inv: `You had Soviet movements checked. There are engineer units along the road. They could close a bridge by declaring it "under repair." No one can say for sure whether they would open fire.`,
      adv: {
        c: `Once a convoy goes, there is no turning back. An airlift can be kept going or stopped.`,
        a: `Show strength and they will back down. Break the blockade with a convoy.`,
        d: `By my estimates, if we gather C-54s, we have a good chance of nearing the required tonnage by winter.`
      },
      flawWhy: `Ares assumed the Soviets would not shoot. That assumption was only a hope, and if it was wrong, the price was war.`,
      opt: [
        { l: `Press Washington hard to send an armed convoy`, d: `Argue that the convoy is not a replacement for the airlift. It is a move to break the blockade head-on.`,
          ok: `At the meeting in Washington, President Truman rejected the convoy. Instead, he decided to send more big C-54 transports and to expand the airlift in earnest.`,
          ng: `The convoy debate strained relations with Washington. Even so, the expansion of the airlift was approved.` },
        { l: `Focus on expanding the airlift and ask for big planes`, d: `Drop the convoy idea. Ask Washington for large numbers of C-54s and bigger bases.`,
          ok: `Washington quickly decided to send more C-54s. The time that would have gone into debate went into improving the bases.`,
          ng: `More planes were approved, but it took time for the aircraft and crews to arrive.`,
          tl: `The Military Governor drops the convoy idea and asks only for more transports.` },
        { l: `Negotiate with the Soviets and withdraw the new currency in Berlin`, d: `Remove the cause of the blockade and get them to reopen the roads.`,
          ok: `Some supplies began to arrive by land. But the people of West Berlin saw it as the West giving in to pressure.`,
          ng: `Withdrawing the currency did not satisfy the Soviets. They demanded a halt to building a West German state altogether.`,
          tl: `The West withdraws the new currency in Berlin. The Soviets make their next demand.` }
      ],
      hist: `In July, Clay pressed Washington hard to send an armed convoy down the road. At a meeting in late July, President Truman rejected it. Instead, he decided to send many more big C-54 transports to Europe and expand the airlift in earnest. The policy of staying in Berlin did not change.`,
      lesson: `The stronger the move, the less you should assume how the other side will react. Compare whether you can turn back if you are wrong.`,
      histTl: `The convoy was rejected, and the airlift expanded with more C-54s`
    },
    {
      clock: `August 13, 1948`,
      title: `Black Friday`,
      sit: `At the end of July, Major General William Tunner arrived to rebuild the airlift. During the war, he had run the airlift over the Himalayas, known as "the Hump." Now it is Friday, August 13. Low clouds and rain cover Tempelhof Airport. A C-54 overshot the runway and burst into flames, and another plane crashed on landing. More transports keep arriving over Berlin, circling one above another at different heights. Tunner himself is aboard one of them.`,
      rep: [
        { f: `Tempelhof Control`, t: `If we hold them overhead, the clouds will break soon. We can bring them down one by one.`, why: `The weather did not improve soon. Transports with limited fuel, circling stacked in a narrow sky, only made a midair collision more likely.` },
        { f: `Weather Office`, t: `The low clouds are expected to last for some time.` },
        { f: `A Transport Pilot`, t: `The sky is crowded. The radio is full of planes waiting for instructions from control.` }
      ],
      inv: `You checked the latest weather reports. There is no sign that the clouds will break. The planes waiting overhead have only so much fuel.`,
      adv: {
        c: `There have been accidents. Stop the whole airlift until we know it is safe.`,
        a: `We should land as many planes as we can. Hold them overhead and bring them down in turn.`,
        d: `The more planes waiting overhead, the faster the risk of collision rises. Send them all back to base and rebuild the flow.`
      },
      flawWhy: `Minerva focused on the accidents themselves. The real danger was a system that let transports pile up overhead in bad weather. Stopping the airlift would let Berlin run out of supplies.`,
      opt: [
        { l: `Hold them overhead and land them in turn`, d: `Wait for the clouds to break, then land them one at a time.`,
          ok: `Some planes got down, but the chaos overhead went on. It was luck that there was no major accident.`,
          ng: `Near misses piled up among the waiting planes, and planes low on fuel had to divert to other airfields.`,
          tl: `Transports pile up over Berlin, and the risk of an accident reaches its limit.` },
        { l: `Send every waiting plane back to base and rewrite the flying rules`, d: `Send every plane that cannot land back to its base in the West. From now on, fly at fixed intervals and never try a second landing. A plane that cannot land goes straight home.`,
          ok: `Tunner sent every plane overhead back to base. From then on, transports flew a few minutes apart at the same speed and landed on instruments in any weather. During unloading, crews stayed with their planes, and trucks brought them snacks.`,
          ng: `Until everyone got used to the new rules, the tonnage dropped for a while.` },
        { l: `Stop the airlift on days of bad weather`, d: `Put safety first. Fly the cargo on clear days.`,
          ok: `There were fewer accidents. But clear days alone could not carry enough.`,
          ng: `In the fall, foggy days went on and on, and the transports did not fly for days.`,
          tl: `The airlift stops on bad-weather days. Autumn fog cuts the flying days sharply.` }
      ],
      hist: `On August 13, Tunner sent every transport waiting overhead back to base. He then set a rule that each plane would try to land only once and return to base if it could not. Transports flew in an unbroken stream at fixed intervals and landed on instruments in any weather. Unloading times were also cut, and the tonnage rose sharply.`,
      lesson: `When an accident happens, do not think only in terms of stop or continue. Rebuild the system that is creating the danger.`,
      histTl: `Sent every waiting plane back and rebuilt the airlift's procedures`
    },
    {
      clock: `November 1948`,
      title: `Coal for the Winter`,
      sit: `Winter is coming, and Berlin is wrapped in thick fog more and more often. The tonnage is falling. Most of what the airlift carries is coal. If there is not enough coal for heating, power, and factories, people will not only freeze but also lose their jobs. In September, the West Berlin politician Ernst Reuter spoke to a rally of hundreds of thousands: "People of the world, look upon this city." The Soviets are urging West Berliners to come to the eastern sector to collect rations.`,
      rep: [
        { f: `West Berlin City Government`, t: `We are building a new airfield at Tegel. Many citizens are working by hand, and it should be ready soon.` },
        { f: `Soviet Announcement`, t: `Large numbers of West Berliners are registering for rations in the East.`, why: `Only a small share of West Berliners registered for rations in the East. Most chose to endure the cold and the meager food.` },
        { f: `Power Supply Office`, t: `If coal runs low, we will have to limit electricity to homes to a few hours a day.` }
      ],
      inv: `You checked with officials in each district. Only a small share of West Berliners have registered for rations in the East.`,
      adv: {
        c: `People are starting to turn to Soviet rations. Even if only for the winter, we should accept the Soviet terms and reopen the roads.`,
        a: `Bring in more transports and fly in the coal, and we can get through the winter. There is no reason to back down now.`,
        d: `Per ton, food does the most to keep people alive. Cut the coal and put food first.`
      },
      flawWhy: `Laplace compared only the calories in food. If the coal stops, power, water, sewage, and factories stop too, and the whole life of the city collapses.`,
      opt: [
        { l: `Put food first and keep coal to a minimum`, d: `Make sure no one goes hungry. Ask people to endure the cold.`,
          ok: `There was enough food. But blackouts grew, factories stopped, and more people lost their jobs.`,
          ng: `The power plants nearly ran out of coal, and even hospitals and the water system came close to shutting down.`,
          tl: `Coal flights are cut. Power fails, and factories and hospitals suffer in the winter cold.` },
        { l: `Add more transports and fly in coal first`, d: `Ask Washington for even more C-54s. Give most of the cargo to coal and limit power to homes to a few hours a day. Rush the new airfield to completion.`,
          ok: `The new airfield at Tegel came into use. Homes had power for only a few hours a day, but people endured the cold and began to get through the winter.`,
          ng: `Foggy days went on, and the tonnage fell short of the plan. People are living through a dark, cold winter.` },
        { l: `Accept the Soviet terms and reopen the roads for the winter`, d: `Allow the Soviet zone currency in West Berlin, and get the roads reopened.`,
          ok: `Trucks began to run again. But West Berlin's economy is slipping into Soviet hands.`,
          ng: `The roads opened only a little, and the Soviets tightly restricted traffic. People felt the West had betrayed them.`,
          tl: `The West accepts the Soviet terms. The Soviet zone currency spreads through West Berlin.` }
      ],
      hist: `Through the winter, most of what the airlift carried was coal. Power to homes was limited to a few hours a day, and people endured the cold with little heat. At Tegel, citizens built a new airfield by hand and had it ready in about three months. The Truman administration approved still more C-54s. Only a small share of West Berliners registered for rations in the East.`,
      lesson: `What you must hold up is not each number on its own but the whole system of daily life. First find the part that brings everything down when it stops.`,
      histTl: `Put coal first and built a new airfield at Tegel`
    },
    {
      clock: `April 1949`,
      title: `The End of the Blockade`,
      sit: `By spring, the airlift is carrying about 8,000 tons a day on average. On April 16, it flew in about 13,000 tons in a single day. The West is also keeping up a counter-blockade that stops goods bound for the Soviet zone. At the United Nations, the Soviet representative has begun to hint at lifting the blockade. Some think the Soviets will demand a halt to the West's plans for a West German state.`,
      rep: [
        { f: `State Department`, t: `It seems that in return for lifting the blockade, the Soviets are only asking for a meeting of the four foreign ministers.` },
        { f: `A Senior Official in Washington`, t: `The Soviets will never lift the blockade unless we stop the founding of a West German state.`, why: `In the end, the Soviets lifted the blockade without the founding of West Germany being stopped. The deal was that both sides would lift their blockades and the foreign ministers would meet.` },
        { f: `Air Force`, t: `Even if the blockade is lifted, there is no guarantee the land routes will work normally right away.` }
      ],
      inv: `You had diplomatic channels sound out the Soviets. Their representative does not seem to be making a halt to the West German state a condition for lifting the blockade.`,
      adv: {
        c: `Removing the risk of war comes first. Delay the West German state if we must, and make sure the blockade ends.`,
        a: `The airlift is winning. We do not need to negotiate. Just wait for the blockade to collapse.`,
        d: `Little is lost by negotiating. But in case the roads stop again, the best course is to keep the airlift going for a while.`
      },
      flawWhy: `Minerva relied on the report that "there will be no lifting unless the state is stopped." In fact, the blockade ended with a much smaller concession.`,
      opt: [
        { l: `Delay the West German state to make sure the blockade ends`, d: `Make a big concession if needed, but be sure to end the blockade.`,
          ok: `The blockade was lifted. But West Germans saw it as the West giving in to pressure.`,
          ng: `Seeing the concession, the Soviets made another demand. The talks dragged on.`,
          tl: `The West delays the West German state. The Soviets demand more, and the talks drag on.` },
        { l: `Agree to lift the blockade in return for a foreign ministers' meeting, and keep the airlift going for now`, d: `Agree that both sides lift their blockades and that the four foreign ministers will meet. Keep building stockpiles by air until the land routes are clearly working.`,
          ok: `Just after midnight on May 12, the blockade was lifted. When the first vehicles bound for Berlin passed the checkpoint, crowds cheered. The airlift went on until the end of September to build up stockpiles.`,
          ng: `The blockade was lifted, but the Soviets slowed traffic on the roads with petty procedures. Keeping the airlift going paid off.` },
        { l: `Refuse to negotiate and wait for the blockade to collapse`, d: `The airlift is running well enough. There is no need to meet them halfway.`,
          ok: `The airlift went on. But no one could say anymore when the blockade would end.`,
          ng: `Not wanting to lose face, the Soviets hardened their stance. The blockade dragged on even longer.`,
          tl: `The West refuses to negotiate. The blockade and the airlift go on even longer.` }
      ],
      hist: `In early May 1949, the United States and the Soviet Union agreed to end the blockade. On May 12, the Soviets lifted the blockade, and the West lifted its counter-blockade. The deal was that both blockades would end and the four foreign ministers would meet. The founding of West Germany was not stopped, and in late May the Basic Law of the Federal Republic of Germany was proclaimed. The airlift went on until the end of September to build up stockpiles. Clay stepped down as Military Governor soon after the blockade ended.`,
      lesson: `When victory is in sight, that is when to offer the other side an exit it can accept. But do not trust the deal completely. Keep your guard up.`,
      histTl: `The blockade was lifted on May 12`
    }
  ]
};
