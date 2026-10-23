window.SCENARIOS_EN = window.SCENARIOS_EN || {};
window.SCENARIOS_EN.apollo = {
  title: `Apollo 13`,
  sub: `320,000 km from Earth`,
  year: `April 1970`,
  place: `Mission Control, Manned Spacecraft Center, Houston`,
  role: `Flight Director`,
  roleNote: `In Gene Kranz's position`,
  meters: [`Power and Supplies`, `Crew Life Support`, `Return Trajectory`],
  intro: [
    `On April 11, 1970, Apollo 13 launched on a mission to land on the Moon.`,
    `The crew was three men: Commander Jim Lovell, Fred Haise, and Jack Swigert.`,
    `Apollo 11 had landed on the Moon the year before, and public interest was fading. Only a few networks carried the broadcasts.`,
    `You are the flight director leading the team in Mission Control in Houston.`
  ],
  endings: [
    { title: `A Successful Failure`, text: `All three came home alive. They never landed on the Moon, but Mission Control pulled off a return that was close to impossible.` },
    { title: `Home, Just Barely`, text: `The crew made it back. But there was almost no margin left. Several of your decisions had cut into their chances of survival.` },
    { title: `Silence on the Line`, text: `After reentry, no reply ever came back to Mission Control.` }
  ],
  epilogue: `In history, Apollo 13 splashed down in the South Pacific on April 17, and all three crew members survived. The Moon landing was lost, but the mission has been called "a successful failure." The cause of the accident was wiring around a heater inside an oxygen tank that had been damaged during work before launch.`,
  turns: [
    {
      clock: `April 13, 9:08 p.m. (55 hours 55 min into flight)`,
      title: `"Houston, We've Had a Problem"`,
      sit: `About 320,000 km from Earth, with the Moon just ahead, a call comes in from Apollo 13: "Houston, we've had a problem." Right away, the gauges on the command module Odyssey start showing abnormal readings. Oxygen tank 2 reads zero pressure. Two of the three fuel cells have stopped.`,
      rep: [
        { f: `Electrical and Environmental (EECOM)`, t: `Oxygen tank 2 pressure is zero. Tank 1 is still dropping. Fuel cells 1 and 3 are down.` },
        { f: `Instrumentation`, t: `It isn't natural for this many failures to show up at once. Most likely the instruments themselves have failed.`, why: `At first, many in Mission Control suspected an instrument failure. But the "gas venting" the crew saw was real, and an oxygen tank really had burst. When several independent pieces of evidence agree, the "bad instruments" explanation should be the first thing you doubt.` },
        { f: `Spacecraft Communicator (CAPCOM)`, t: `Commander Lovell: "We can see something venting out the window. Some kind of gas is leaking out into space."` }
      ],
      inv: `You compared the crew's own observations, the acceleration records, and several pressure gauges. All of them changed at the same moment. This is real damage, not an instrument failure.`,
      adv: {
        c: `Before we hunt for the cause, we have to secure the crew's lifeline. Power up the lunar module right now.`,
        a: `We can't throw away the Moon landing over an instrument glitch. Stay calm and keep monitoring.`,
        d: `The most probable source of the leak is the fuel cell system. Closing the reactant valves will test that.`
      },
      flawWhy: `Ares took the "instrument failure" report as fact. He ignored independent evidence: what the crew saw with their own eyes.`,
      opt: [
        { l: `Treat it as an instrument failure and keep monitoring`, d: `Continue to the Moon as planned until you can confirm the abnormal readings are real.`,
          ok: `The numbers got worse more slowly than feared. But precious time was lost.`,
          ng: `The oxygen kept draining away. By the time anyone realized it, the command module's power was nearly gone.`,
          tl: `Mission Control decides it is an instrument failure, and the response is badly delayed.` },
        { l: `Close the fuel cell reactant valves to stop the leak`, d: `Try to cut off the source of the leak. Once closed, the fuel cells can never be used again, and the Moon landing becomes impossible.`,
          ok: `Closing the valves did not stop the oxygen leak. Now it is clear the fuel cells were not the source. Next comes the lunar module.`,
          ng: `Closing the valves did not stop the leak. Tracking down the cause took too long and ate into the power margin.` },
        { l: `Power up the lunar module Aquarius immediately`, d: `Leave the cause for later. Start preparing the lunar module as a lifeboat right now.`,
          ok: `The lunar module came online early, and there was plenty of time to transfer the guidance data from the command module.`,
          ng: `In the rush, steps were skipped, and part of the procedure had to be redone.`,
          tl: `Soon after the failure, the lunar module begins powering up.` }
      ],
      hist: `At first, Mission Control suspected an instrument problem. Kranz told his team, "Let's not make things worse by guessing," and had them confirm the situation. The fuel cell reactant valves were closed to stop the leak, but it did not work, and at that point the Moon landing was abandoned. The crew soon moved into the lunar module Aquarius.`,
      lesson: `When several independent pieces of evidence point the same way, be suspicious of the hope that "it's just the instruments."`,
      histTl: `An oxygen tank burst. Closing the reactant valves did not stop the leak, and the crew retreated to the lunar module.`
    },
    {
      clock: `April 13, 11:00 p.m. (57 hours into flight)`,
      title: `The Way Home`,
      sit: `The three crew members have moved into the lunar module Aquarius. The command module Odyssey has been powered down to save its batteries for reentry. Now the question is how to get home. There are two plans. One is a "direct abort": fire the command module's main engine (the SPS engine) to turn back before reaching the Moon. The other is to put the ship on a "free-return trajectory" that swings around the far side of the Moon and back to Earth.`,
      rep: [
        { f: `Flight Dynamics (FIDO)`, t: `A direct abort would bring splashdown about a day and a half sooner.` },
        { f: `Propulsion`, t: `The main engine is attached to the service module, where the explosion happened. We have not confirmed whether it is damaged.` },
        { f: `Engineering Support Room`, t: `The main engine's pressure system shows normal readings. Firing it should be no problem.`, why: `No one knew the full extent of the damage to the service module until it was cast off and photographed just before reentry. An entire outer panel had been blown away. Firing the engine could have caused even more damage.` }
      ],
      inv: `Some of the sensors around the main engine are not returning any data. The normal readings come only from the sensors that are still working.`,
      adv: {
        c: `We should not bet three lives on an engine that may be damaged.`,
        a: `We need to get them back to Earth as fast as possible. A direct abort saves a day and a half.`,
        d: `Based on the remaining oxygen and power, a shorter return time gives the highest probability of survival. The main engine reads normal.`
      },
      flawWhy: `Laplace's calculation assumed the main engine would work normally. He treated sensors that returned no data as if they showed "no problem."`,
      opt: [
        { l: `Use the main engine for a direct abort`, d: `Get back to Earth by the fastest route. But that means firing the main engine on the damaged service module.`,
          ok: `The main engine held. The return was much faster, but it was a gamble on very thin ice.`,
          ng: `Right after ignition, the service module shook violently and the engine shut down. The trajectory was thrown badly off.`,
          tl: `They attempt a direct abort with the damaged service module's main engine.` },
        { l: `Loop around the Moon and correct course with the lunar module engine`, d: `Use the lunar module's descent engine to return to a free-return trajectory. After rounding the far side of the Moon, burn again (the PC+2 burn) to speed up the return.`,
          ok: `The descent engine burn worked. The second burn after passing the far side of the Moon moved splashdown up by about 10 hours.`,
          ng: `The burn worked, but a small error in the trajectory remained. It will need correcting later.` },
        { l: `Enter lunar orbit and regroup`, d: `Circle the Moon and take time to work out a plan.`,
          ok: `The ship made it into orbit, but getting out again will use up precious fuel and power.`,
          ng: `There is not enough fuel to break out of lunar orbit. Things have gotten worse.`,
          tl: `They enter lunar orbit but lack the fuel to leave it.` }
      ],
      hist: `Kranz decided not to use the main engine, which might be damaged. The lunar module's descent engine put the ship back on a free-return trajectory, and about two hours after passing the far side of the Moon, a second burn (the PC+2 burn) sped up the return.`,
      lesson: `Tell the difference between a "normal" reading that comes from actually confirming things are normal and one that only means a problem has not been detected.`,
      histTl: `Took a free-return trajectory around the Moon. The PC+2 burn shortened the return.`
    },
    {
      clock: `April 14 (80 hours into flight)`,
      title: `Rationing Power`,
      sit: `The lunar module Aquarius was built for two people for about two days. Now three people must live in it for nearly four days. There is nowhere near enough power or cooling water. The command module's batteries are the only power source for reentry into Earth's atmosphere.`,
      rep: [
        { f: `Lunar Module Systems (TELMU)`, t: `At the current rate, power will run out a dozen or so hours before splashdown. We need to cut consumption drastically.` },
        { f: `Electrical and Environmental`, t: `The command module's batteries have power to spare. We can shift a little to the lunar module and still be fine for reentry.`, why: `The command module's batteries had barely enough for reentry. In fact, the opposite turned out to be necessary: a procedure to recharge the command module's batteries from the lunar module.` },
        { f: `Medical Team`, t: `If the cabin gets too cold, the crew's strength will drop and their judgment will suffer.` }
      ],
      inv: `You compared what is left in the command module's batteries with what the reentry procedure needs. There is almost no margin.`,
      adv: {
        c: `The crew's strength and judgment are resources too. We can't let the cold wear them down too far.`,
        a: `If they can't get home, nothing else matters. Shut down everything that isn't needed to stay alive.`,
        d: `If we balance the remaining charge across all power sources, total operating time is maximized.`
      },
      flawWhy: `Laplace optimized power as a simple "quantity." He left out the constraint that the command module's batteries were reserved for reentry and could not be replaced.`,
      opt: [
        { l: `Shut down every system not needed for survival`, d: `Turn off the guidance computer and the heaters too. The cabin will get freezing cold, but the power will last until the return.`,
          ok: `Power use dropped to about one-fifth of normal. The cabin temperature is around 3°C. The crew is shivering and holding on.`,
          ng: `The power now looks like it will last. But the cold and lack of sleep are wearing the crew down badly.` },
        { l: `Save power while keeping some comfort`, d: `Leave a minimum of heaters on to protect the crew's strength.`,
          ok: `The crew stayed in good shape, but the power margin is dangerously thin.`,
          ng: `Consumption was higher than calculated. Power is now expected to run out before splashdown.`,
          tl: `Some heaters stay on, and power is expected to run short.` },
        { l: `Shift command module battery power to the lunar module`, d: `Share the spare power and give the lunar module some breathing room.`,
          ok: `The lunar module now has some margin. But there is not enough power left for reentry.`,
          ng: `The command module's batteries dropped below the level needed for reentry. The final stage of the return is in danger.`,
          tl: `Command module battery power is diverted, leaving too little for reentry.` }
      ],
      hist: `Mission Control cut the lunar module's power use to about one-fifth of normal. The cabin temperature fell to around 3°C, and condensation froze on the windows. The crew barely slept.`,
      lesson: `First identify the resources that cannot be replaced, and do not touch them. Make every other adjustment after that.`,
      histTl: `Cut power use to about one-fifth. The cabin dropped to around 3°C.`
    },
    {
      clock: `April 14 (85 hours into flight)`,
      title: `Carbon Dioxide`,
      sit: `Now the problem is carbon dioxide. The lunar module's absorbent (lithium hydroxide) is only enough for two people for two days. The level is nearing danger. The command module has plenty of spare absorbent cartridges. But the command module's cartridges are square, and the lunar module's system only takes round ones.`,
      rep: [
        { f: `Crew Systems`, t: `At this rate, carbon dioxide will reach dangerous levels in about a day.` },
        { f: `Engineering`, t: `On board there are plastic bags, duct tape, the cardboard covers of the flight plan, socks, hoses, and so on.` },
        { f: `A Member of the Medical Team`, t: `Raising the allowable carbon dioxide limit will not cause any serious harm to the crew's health.`, why: `Higher carbon dioxide levels cause headaches, poor judgment, and confusion. During a return that requires precise handwork and calculations, that could be fatal.` }
      ],
      inv: `You checked the aerospace medicine data. As levels rise, headaches, poor judgment, and clouded thinking follow. It is too dangerous for a crew about to perform precise maneuvers.`,
      adv: {
        c: `Gather on the ground exactly the same items they have on board, and have our people figure out how to build something.`,
        a: `We should shorten the problem itself. Cut the time it takes to get home.`,
        d: `According to the medical team's data, raising the limit carries little health risk. And it avoids the risk of a failed improvised fix.`
      },
      flawWhy: `Laplace fed one medical team member's statement straight into his calculation. He never checked it against other data.`,
      opt: [
        { l: `Have them build an adapter from only what is on board`, d: `Gather the same items on the ground and have engineers figure out how to connect a square cartridge to the round system. Read the steps up by radio.`,
          ok: `The engineers came up with a device called the "mailbox." When the crew built it step by step, the carbon dioxide level dropped fast.`,
          ng: `The first attempt failed because of an air leak. Redoing it cost time, but in the end it worked.` },
        { l: `Raise the allowable limit and have them endure it`, d: `Avoid the risk of a failed fix and have the crew put up with high levels.`,
          ok: `The crew held on. But they complained of headaches, and calculation mistakes began to increase.`,
          ng: `The crew's judgment visibly declined, and an error was made during a course correction.`,
          tl: `The carbon dioxide limit is raised, and the crew's judgment suffers.` },
        { l: `Make an unplanned burn to speed up the return`, d: `Shorten the time to get home so the absorbent will last.`,
          ok: `The return came a few hours sooner. But it used extra fuel and power, and the trajectory drifted off course.`,
          ng: `An error in the burn made the reentry angle too shallow. Now there is a risk of skipping off the atmosphere.`,
          tl: `An unplanned burn is made, and the return trajectory drifts off course.` }
      ],
      hist: `Using only items that were also on board, the engineers came up with the "mailbox," which connected the square cartridges to the round system. Mission Control spent about an hour reading up the steps for building it from plastic bags, cardboard, duct tape, and socks. The carbon dioxide level began to fall.`,
      lesson: `When you define your constraints precisely as "what is already on hand," the search for a solution gets clearer. Recreating the same conditions on the ground was the key.`,
      histTl: `A homemade "mailbox" removed the carbon dioxide`
    },
    {
      clock: `April 16 (125 hours into flight)`,
      title: `The Frozen Command Module`,
      sit: `One day until reentry. The ice-cold command module Odyssey has to be powered back up. No one has ever restarted a command module after shutting it down in space. The standard startup procedure needs more power than the batteries have left. And moisture on the equipment could cause short circuits.`,
      rep: [
        { f: `Simulator Team`, t: `Backup crew member Mattingly can test a new startup procedure in the simulator on the ground. But it will take several hours.` },
        { f: `Electrical and Environmental`, t: `There is a risk of short circuits from condensation. But most of the equipment is moisture-proofed.` },
        { f: `Flight Planning`, t: `Trimming the standard procedure a little will be more than enough. There's no need to rebuild it from scratch.`, why: `The standard startup procedure was written on the assumption that there was power to spare. Unless each step to be cut was checked one by one, no one could know where the power would run out.` }
      ],
      inv: `You added up the power used by each step of the standard procedure. Trimming it a little is not enough. The batteries would run out before reentry.`,
      adv: {
        c: `The crew is exhausted. Let them rest now, and do the whole startup at the very end.`,
        a: `There's no time. Trimming the standard procedure will be enough.`,
        d: `We cannot estimate the failure probability of an untested procedure. It should be verified in the simulator.`
      },
      flawWhy: `Minerva put concern for the crew first and missed the biggest risk: an exhausted crew running an untested procedure with only one chance to get it right.`,
      opt: [
        { l: `Send up a new procedure verified in the simulator`, d: `Mattingly tests each step of a new startup procedure on the ground. It takes time, but you send it up only after confirming it fits within the power budget.`,
          ok: `The new procedure stayed within the power budget. The command module Odyssey came back to life, and its gauges lit up again.`,
          ng: `The procedure worked, but checking it took a long time, and the crew never got to rest.` },
        { l: `Trim the standard procedure and start up early`, d: `Rely on experience to cut unneeded steps, and start up right away.`,
          ok: `The startup worked. But almost no power is left. Reentry will be a prayer.`,
          ng: `Power ran short partway through the startup, and setting up the guidance computer was a struggle.`,
          tl: `The command module is started with a shortened procedure. Low power puts reentry at risk.` },
        { l: `Wait until the last moment, then start up all at once`, d: `Let the crew rest, and do the full startup just before reentry.`,
          ok: `The crew got a little rest. But there was no time to catch mistakes in the procedure, and reentry was nerve-racking.`,
          ng: `The startup took longer than expected, and reentry preparations may not be finished in time.`,
          tl: `The command module startup is put off until the last minute, and preparations fall behind.` }
      ],
      hist: `Backup crew member Ken Mattingly and others tested a new startup procedure step by step in the simulator on the ground. It stayed within the power budget, and the command module started up safely. On April 17, Odyssey splashed down in the South Pacific, and all three crew members survived.`,
      lesson: `The less time you have, the more tempting it is to cut the time for checking. But a procedure you only get one chance at is exactly the one most worth testing in advance.`,
      histTl: `Started the command module with a verified procedure. Splashed down in the South Pacific with all three alive.`
    }
  ]
};
