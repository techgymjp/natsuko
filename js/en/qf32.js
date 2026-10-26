window.SCENARIOS_EN = window.SCENARIOS_EN || {};
window.SCENARIOS_EN.qf32 = {
  title: `Qantas Flight 32`,
  sub: `A Broken Giant and 469 People`,
  year: `November 2010`,
  place: `Cockpit of Qantas Flight 32 (Airbus A380)`,
  role: `Captain`,
  roleNote: `In Captain Richard de Crespigny's position`,
  meters: [`Margin of the Aircraft`, `Teamwork in the Cockpit`, `Passenger Safety and Calm`],
  intro: [
    `The morning of November 4, 2010. Changi Airport, Singapore.`,
    `Qantas Flight 32, flying from London to Sydney, takes off from Singapore. The aircraft is the largest passenger jet in the world, the Airbus A380.`,
    `There are 469 passengers and crew on board. In the cockpit sit five pilots, including captains who are on board for a routine check.`,
    `You are the captain. A few minutes into the climb, two loud bangs ring out from the direction of the left wing.`
  ],
  endings: [
    { title: `All 469 Safe`, text: `Every passenger and crew member walked off the aircraft on their own feet. One calm decision after another brought the broken giant back to the ground.` },
    { title: `A Battered Landing`, text: `Every life was saved. But hesitation ate into your margins, and things came close to going past the point of no return.` },
    { title: `No Margin Left`, text: `Decision by decision, you used up the margins you had left. The aircraft and its passengers ended up at the edge of disaster.` }
  ],
  epilogue: `In history, Flight 32 returned to Changi Airport about two hours after takeoff, and all 469 passengers and crew were safe. The Australian Transport Safety Bureau (ATSB) found that a thin oil pipe inside the engine had been made with a wall that was too thin because of a manufacturing error, and that it had cracked. The leaking oil caught fire, and a turbine disc broke apart and flew out of the engine. Qantas grounded its A380 fleet for a time, and the engine maker, Rolls-Royce, inspected engines of the same type and replaced parts.`,
  turns: [
    {
      clock: `About 4 minutes after takeoff`,
      title: `Two Bangs`,
      sit: `While climbing through about 7,000 feet, two loud bangs ring out from the direction of the left wing. A warning for the No. 2 engine (the inner engine on the left wing) goes off, and other warnings start to appear one after another on the cockpit screens. The aircraft is still flying normally. It is still carrying enough fuel to reach Sydney.`,
      rep: [
        { f: `First Officer`, t: `No. 2 engine has failed. Hydraulic, electrical and fuel warnings are coming up one after another.` },
        { f: `Flight Attendant`, t: `A passenger in a left-side window seat says there is a hole in the wing and something is pouring out.` },
        { f: `General Rule in the Operations Manual`, t: `The A380 is designed to fly safely on its remaining three engines after losing one. Once the engine failure procedure is done, we can turn back and land right away.`, why: `Debris from the engine had pierced the left wing and damaged the fuel tanks, the hydraulics and the electrical wiring. The damage went far beyond one engine.` }
      ],
      inv: `You sent a crew member into the cabin to look at the left wing through a window. There is a hole in the top of the wing, and something that looks like fuel is streaming out. The damage is not limited to the engine.`,
      adv: {
        c: `The aircraft is still stable. Let's hold our altitude, circle, and have everyone work out what is broken.`,
        a: `If it's just one engine, the best thing is to go straight back and land. The longer we stay in the air, the greater the danger.`,
        d: `Our landing weight is far over the limit. By the numbers, the safest first step is to dump fuel and bring the weight down.`
      },
      flawWhy: `Ares assumed that "only one engine is broken." In fact, the wing, fuel, hydraulics and electrics were all damaged. Landing without first finding out what still worked and what did not was dangerous.`,
      opt: [
        { l: `Turn back and land at once`, d: `Turn around, return to Changi Airport, and land straight away.`,
          ok: `The aircraft headed for the runway. But the approach was flown without knowing what had stopped working, and the cockpit was feeling its way the whole time.`,
          ng: `Partway through the approach, the crew realized they had been counting on equipment that no longer worked. They had to go around, and lost even more margin.`,
          tl: `The crew turns back without checking the damage and flies an approach in the dark about the aircraft's condition.` },
        { l: `Hold altitude and check the damage in a holding pattern`, d: `Stop climbing, level off, and tell air traffic control there is an emergency. Fly a holding pattern near the airport and work through the warnings one by one.`,
          ok: `Air traffic control set aside airspace for you to hold in. With time in hand, the cockpit split up the roles and got to work on the warnings.`,
          ng: `You entered the hold, but the warnings kept growing. With fuel leaking, the time you have is limited.` },
        { l: `Dump fuel first and think later`, d: `Make cutting the landing weight the top priority and start jettisoning fuel.`,
          ok: `Some fuel was dumped. But getting a full picture of the damage was delayed.`,
          ng: `The fuel system was damaged too, and the dump did not go as planned. You lost time.`,
          tl: `The crew starts dumping fuel before checking the damage and loses time.` }
      ],
      hist: `Captain de Crespigny stopped the climb, leveled off, and declared "PAN PAN" (an urgency call one step below a distress call) to air traffic control. The aircraft entered a holding pattern near Singapore, and the five pilots split up the roles to work out the damage.`,
      lesson: `The first report usually shows only part of the damage. If you have time to act, look at the whole picture first.`,
      histTl: `Leveled off and began checking the damage while holding`
    },
    {
      clock: `About 10 minutes after takeoff`,
      title: `Warnings Without End`,
      sit: `Checklists keep appearing on the cockpit screen (the ECAM). There are dozens of them. Fuel leaks, the loss of one hydraulic system, partial failure of the electrical system, problems with the brakes and landing gear. The first officer reads them out and works through them one at a time. Finishing them all looks like it will take a long time.`,
      rep: [
        { f: `First Officer`, t: `As soon as I clear one checklist, a new one appears. There is no end in sight.` },
        { f: `Cabin Manager`, t: `The passengers are calm. But the people who saw the wing through the windows are anxious.` },
        { f: `Fuel Imbalance Warning`, t: `There is an imbalance in fuel between the left and right sides. To fix it, transfer fuel from the right wing to the left wing.`, why: `The left wing tanks had been holed and were leaking fuel. Sending fuel to the leaking side could mean losing even more. The displays and procedures had to be checked against the real state of the aircraft.` }
      ],
      inv: `You checked how fast the fuel gauges were dropping. The left side is clearly falling faster. The most natural explanation for the imbalance is a leak from the left wing.`,
      adv: {
        c: `We can't skip procedures. Let's work through each one carefully and confirm it together as we go.`,
        a: `We can't wait until every last one is done. We should check the things we need for landing first.`,
        d: `If we leave the imbalance, the center of gravity will shift. The best move is to transfer fuel as the screen says and bring the imbalance to zero.`
      },
      flawWhy: `Laplace optimized only for "zero imbalance." He left out a fact the screen did not show: fuel was leaking from the left wing.`,
      opt: [
        { l: `Transfer fuel as displayed to fix the imbalance`, d: `To protect the center of gravity, send fuel from the right wing to the left.`,
          ok: `The imbalance got smaller. But the leak from the left wing grew, and the remaining fuel became a worry.`,
          ng: `The fuel you sent poured out through the hole in the left wing. The imbalance got even worse.`,
          tl: `The crew transfers fuel into the leaking left wing and loses extra fuel.` },
        { l: `Work through every checklist in the order shown`, d: `Skip nothing. Carry out the instructions on the screen in order and confirm each one.`,
          ok: `After a long time, every checklist was done. The procedures were followed, but the crew still did not have a full picture of the aircraft.`,
          ng: `The work moved forward, but the sheer number of warnings wore the cockpit down.` },
        { l: `Keep working the checklists while someone else builds the big picture`, d: `Leave the checklists to the first officer. Another pilot makes a list of "what works and what doesn't" and checks the items that matter for landing first.`,
          ok: `Alongside the checklists, a full picture of the aircraft began to emerge. The information needed to plan the landing started to come together.`,
          ng: `Splitting the roles added more checking. Even so, the full picture slowly came into view.`,
          tl: `The crew starts a list of working systems while still processing the warnings.` }
      ],
      hist: `The crew worked through the displayed checklists one by one. It is reported that finishing them all took about 50 minutes. The captains on board for the check also helped by sharing the work of checking and calculating.`,
      lesson: `Being faithful to procedure is a strength. But when there are too many procedures, giving someone the separate job of watching the whole picture gets you the facts you need sooner.`,
      histTl: `Worked through dozens of checklists one by one`
    },
    {
      clock: `About 1 hour after takeoff`,
      title: `Counting What Is Left`,
      sit: `The checklists are almost done. But the list of broken things is so long that no one can see how this aircraft will behave. One hydraulic system, part of the electrical system, and some of the brakes are out. Part of the landing gear will have to be lowered by gravity. Fuel is still leaking from the left wing.`,
      rep: [
        { f: `First Officer`, t: `We have three engines left. But Nos. 1 and 4 are not responding fully to some of their controls either.` },
        { f: `Air Traffic Control`, t: `You can hold for as long as you need. Let us know when you are ready to land.` },
        { f: `Failure List`, t: `Too many systems have failed. There is almost no chance of flying this aircraft properly in this state.`, why: `Counting what was broken made the aircraft look unflyable. But counting what was left showed that everything needed to fly it was still there.` }
      ],
      inv: `You had the crew write down every system still working. Working engines, the remaining hydraulic system, the flight controls needed to steer, some of the brakes. Nearly everything needed to fly and land is there.`,
      adv: {
        c: `So much is broken. Let's not rush. Keep holding and keep talking it through with the engineers on the ground.`,
        a: `Every minute we wait, more fuel leaks out. The aircraft is still flying, so let's just go and land.`,
        d: `Counting the systems we still have, most of what we need to fly is intact. It is worth confirming that in the air.`
      },
      flawWhy: `Minerva was swayed by how much was broken. She underestimated the cost of waiting: fuel kept leaking and the crew kept getting more tired.`,
      opt: [
        { l: `Keep holding and keep consulting the engineers on the ground`, d: `Check the effect of each failure with the ground before thinking about landing.`,
          ok: `The talks turned up some useful facts. But fuel kept dropping, and the cockpit grew more tired.`,
          ng: `The more you talked, the more worries piled up. A decision only got further away.`,
          tl: `The crew stays in the hold too long and loses margin to the fuel leak and fatigue.` },
        { l: `Rethink from what still works, and test the handling in the air`, d: `Change your way of thinking and rebuild the aircraft out of the systems that work. Before landing, set it up as if for landing at a safe altitude and test how it handles.`,
          ok: `The aircraft was heavy and slow to respond, but the test proved it could be flown. A sense that you could land it took hold in the cockpit.`,
          ng: `The test showed the aircraft responded even more slowly than you thought. Even so, it became clear what you could do.` },
        { l: `Skip the test and go straight into the approach`, d: `Trust the remaining autopilot and head for the runway now.`,
          ok: `The approach began. But only at low altitude did you notice how slowly the aircraft responded.`,
          ng: `Partway through the approach, the poor handling caught you by surprise, and you had to go around.`,
          tl: `The crew starts the approach without a handling test and finds out at low altitude how slowly the aircraft responds.` }
      ],
      hist: `Captain de Crespigny later said he changed his way of thinking. He stopped counting what was broken and started counting what was left. He has said that, looking only at what still worked, it was no different from flying a small Cessna. Before landing, the crew set the aircraft up as if for landing while still high in the air, and tested how it handled.`,
      lesson: `A list of what you have lost can freeze you in place. Count what you still have, and the moves open to you come into view.`,
      histTl: `Recounted the working systems and tested the handling in the air`
    },
    {
      clock: `About 1 hour 30 minutes after takeoff`,
      title: `Far Too Heavy`,
      sit: `The aircraft still has much of the fuel it needed to reach Sydney, and it is about 50 tonnes over its maximum landing weight. The landing performance calculation says that even on the longest runway at Changi, about 4,000 m long, the margin for stopping is only about 100 m. The touchdown speed will be much faster than normal.`,
      rep: [
        { f: `Performance Calculation`, t: `On paper, we can stop. But the margin is about 100 m. Some failures can't be fully entered into the calculation.` },
        { f: `Air Traffic Control`, t: `Runway 20C is clear and waiting for you. Fire crews will stand by beside the runway.` },
        { f: `Fuel Estimate`, t: `If we circle for a few more hours and burn fuel, we can get down to the allowed weight. That would be safer.`, why: `Fuel kept leaking from the left wing, and the imbalance between the two sides was growing. More systems could fail. Flying on for hours carried its own dangers, separate from the weight.` }
      ],
      inv: `You checked how the fuel gauges were changing. The leak from the left wing goes on, and the imbalance keeps growing. Circling for hours will be hard.`,
      adv: {
        c: `Let's land while the numbers still give us a margin. The longer we wait, the harder it gets to read the aircraft's condition.`,
        a: `If we slow down, the stopping distance gets shorter. We can make up the rest with skill.`,
        d: `Staying within the maximum landing weight is the surest path. In a few hours, the numbers will be within the limit.`
      },
      flawWhy: `Laplace was only trying to meet one number: the weight limit. He did not account for the danger that fuel would keep leaking and more systems might fail while the aircraft circled.`,
      opt: [
        { l: `Land heavy on the longest runway`, d: `Fly the approach fast, about 50 tonnes over the limit. Use the brakes as hard as possible to stop.`,
          ok: `The aircraft touched down much faster than normal. With maximum braking, it stopped with about 150 m of runway to spare.`,
          ng: `The touchdown was hard, and the brakes got as hot as they could go. Even so, the aircraft stopped on the runway.` },
        { l: `Circle for hours to burn fuel down to the allowed weight`, d: `Land only after the weight is within the limit.`,
          ok: `The weight came down. But while circling, the fuel imbalance grew, and the crew came close to the limit of their strength.`,
          ng: `A new warning came up while circling. With the fuel that leaked away, your margin actually shrank.`,
          tl: `The crew circles for hours to reach the weight limit and loses margin to the leak and fatigue.` },
        { l: `Fly the approach slower than calculated`, d: `Slow down to shorten the stopping distance.`,
          ok: `The aircraft stopped. But during the approach, the stall warning nearly went off.`,
          ng: `At too slow a speed, the aircraft sank, and the hard touchdown damaged the landing gear.`,
          tl: `The crew flies the approach too slowly and comes close to a stall.` }
      ],
      hist: `The crew chose to land heavy. The aircraft touched down on Runway 20C much faster than normal and stopped with about 150 m of runway left. It was about two hours after takeoff.`,
      lesson: `The numbers in the rules are guides for keeping things safe on a normal day. In an emergency, weigh the danger of waiting to meet the rules against the danger of acting beyond them.`,
      histTl: `Landed on the longest runway about 50 tonnes overweight`
    },
    {
      clock: `Just after landing`,
      title: `The Engine That Won't Stop`,
      sit: `The aircraft has stopped. But the No. 1 engine (the outer engine on the left wing) keeps running even after the shutdown command. Fuel is leaking from the left wing, and the brakes are extremely hot. Some of the tires have burst. Fire trucks surround the aircraft. There are 440 passengers in the cabin.`,
      rep: [
        { f: `Fire Crew`, t: `The fuel leak is from the left wing. We're worried about the heat from the brakes. We're starting to cool things with foam.` },
        { f: `Cabin Manager`, t: `The passengers are calm. Using the escape slides could injure people by itself.` },
        { f: `A Passenger`, t: `Before a fire starts, everyone should get out down the slides from every door at once.`, why: `On the left side were the leaking fuel and the No. 1 engine, still running. Deploying slides there would put passengers right in the middle of the danger. Evacuating down slides also tends to cause injuries on its own.` }
      ],
      inv: `You contacted the fire crew to check the situation. So far there is no fire. The leaking fuel and the No. 1 engine are on the left side. Stairs can be brought to a door on the right side.`,
      adv: {
        c: `There is no fire. Keeping the passengers on board and bringing them down the stairs on the right is the way with the fewest injuries.`,
        a: `The fuel and the hot brakes are right there. We should get everyone out through every door. Every second counts.`,
        d: `If everyone waits on board until the engine stops, the chance of an accident outside is at its lowest.`
      },
      flawWhy: `Ares looked only at speed. He missed that the left-side slides would land people right next to the leaking fuel and the running engine, and that the slides themselves cause injuries.`,
      opt: [
        { l: `Evacuate down the slides from every door`, d: `Get everyone off the aircraft as fast as possible, before any fire starts.`,
          ok: `Everyone was out in a short time. But passengers on the left side ran past the fuel, and some were hurt on the slides.`,
          ng: `Many people were injured on the slides. On the left side, passengers landed right next to the leaking fuel.`,
          tl: `Passengers evacuate down the slides from every door, and some are injured.` },
        { l: `Keep them on board, then bring them down the stairs on the right`, d: `Do not use the slides. With the fire crew standing by, bring stairs to a door on the right side, away from the leak, and let passengers off. Keep telling the passengers what is happening.`,
          ok: `The passengers came down the stairs on the right and rode buses to the terminal. All 469 people were safe.`,
          ng: `Getting the stairs ready took time, and the passengers waited on board for a long while. Anxiety spread, but no one was hurt.` },
        { l: `Keep everyone waiting until the No. 1 engine stops`, d: `No one leaves the aircraft until the source of the danger is gone.`,
          ok: `The danger was avoided. But the passengers waited in the cramped cabin for a long time until the engine stopped.`,
          ng: `While they waited, fear about the leaking fuel and the hot brakes spread through the cabin.`,
          tl: `Passengers are kept on board for hours until the No. 1 engine stops.` }
      ],
      hist: `Captain de Crespigny decided not to carry out an emergency evacuation down the slides. The passengers left the aircraft by stairs placed on the right side. It is reported that they began getting off about an hour after landing. The shutdown command could not reach the No. 1 engine, and it finally stopped hours after landing, after the fire crew poured huge amounts of water and foam into it.`,
      lesson: `"Get out fast" is not always the safest choice. Compare where the danger is with the danger of the escape itself.`,
      histTl: `Everyone left by the stairs on the right, without using the slides`
    }
  ]
};
