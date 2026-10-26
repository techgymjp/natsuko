window.SCENARIOS_EN = window.SCENARIOS_EN || {};
window.SCENARIOS_EN.tmi = {
  title: `Three Mile Island Accident`,
  sub: `The Valve That Should Have Closed`,
  year: `March 1979`,
  place: `Three Mile Island Nuclear Generating Station, Unit 2, Pennsylvania, USA`,
  role: `Unit 2 Shift Supervisor`,
  roleNote: `In the position of the operators on shift. Later, in the position of Governor Thornburgh and the Nuclear Regulatory Commission (NRC)`,
  meters: [`Core Safety`, `Public Safety`, `Trust in Information`],
  intro: [
    `March 28, 1979, 4:00 a.m. An island in the Susquehanna River, near Harrisburg, the capital of Pennsylvania.`,
    `Unit 2 at the Three Mile Island plant is a pressurized water reactor. It began commercial operation only about three months ago.`,
    `In the control room, the night shift operators are watching the gauges.`,
    `You are the shift supervisor for Unit 2. The quiet night is about to be shattered.`
  ],
  endings: [
    { title: `The Worst Was Prevented`, text: `The core was damaged, but the containment building held. Even in the chaos, decision by decision, you protected the people around the plant.` },
    { title: `Shaken Trust`, text: `A large release was prevented. But the core was badly damaged, and public fear and distrust lingered for years.` },
    { title: `Out of Control`, text: `Decision by decision, you exposed the core and the people around it to even greater danger.` }
  ],
  epilogue: `In history, about half of Unit 2's core melted, but the containment building did not fail, and the radioactive material that escaped was limited. Official investigations, including the President's Commission (the Kemeny Commission), concluded that the average dose to people near the plant was very small and that few, if any, health effects were expected. Later epidemiological studies have not found a clear increase in cancer caused by the accident, although some studies have argued otherwise. The commission named the severe mental stress felt by residents as the largest health effect. The accident led to major changes in operator training, control room design, and emergency planning. Unit 2 never operated again.`,
  turns: [
    {
      clock: `March 28, around 4:00 a.m.`,
      title: `The Feedwater Pumps Stop`,
      sit: `The main feedwater pumps in the turbine building have stopped. With no water going to the steam generators, the turbine has tripped. Pressure in the primary coolant rose, and the pilot-operated relief valve on the pressurizer opened automatically. Moments later, the reactor shut down automatically. Once the pressure drops, the relief valve should close by itself. The indicator light on the control panel shows "closed."`,
      rep: [
        { f: `Emergency Feedwater System`, t: `The emergency feedwater pumps started. But no water is reaching the steam generators.` },
        { f: `Relief Valve Outlet Thermometer`, t: `The pipe downstream of the relief valve is still hot. But this valve has leaked a little for some time.` },
        { f: `Control Panel Indicator Light`, t: `Relief valve: closed.`, why: `This light only showed that a "command" to close the valve had been sent. It did not measure the position of the valve itself. In fact, the valve was stuck open, and primary coolant kept pouring out.` }
      ],
      inv: `You checked the temperature downstream of the relief valve and the pressure in the tank that collects its discharge. The temperature stays high and does not fall. The tank pressure is rising too. The valve may not have closed.`,
      adv: {
        c: `It bothers me that the pipe past a closed valve is still hot. Closing the block valve would cost us very little.`,
        a: `Getting the lost feedwater back comes first. Let's restore the emergency feedwater.`,
        d: `The light says "closed." The downstream temperature can be explained by the old leak. Trusting the indicator is the rational choice.`
      },
      flawWhy: `Laplace treated the indicator light as if it showed the valve's actual position. He never checked what the light measured, and he brushed off the conflicting temperature as "the old leak."`,
      opt: [
        { l: `Trust the indicator and deal with the other problems`, d: `Assume the relief valve has closed and turn to the other problems, such as the emergency feedwater.`,
          ok: `You noticed the emergency feedwater valves had been left closed and opened them. Water reached the steam generators again. But checking the relief valve was put off.`,
          ng: `While you trusted the indicator, primary coolant kept pouring out through the open valve.` },
        { l: `Check the downstream temperature and close the relief valve's block valve`, d: `The indicator and the temperature disagree. To be safe, close the block valve upstream of the relief valve.`,
          ok: `When you closed the block valve, the pressure stopped falling. The loss of coolant was stopped early.`,
          ng: `It took a little while to close the block valve. Even so, the leak was stopped early.`,
          tl: `The stuck-open relief valve is caught early and the block valve is closed. The loss of coolant stops.` },
        { l: `The reactor is shut down. Keep watching`, d: `The reactor shut down automatically. Don't rush into anything. Keep an eye on the gauges.`,
          ok: `The gauges looked calm. But coolant was being lost the whole time.`,
          ng: `While the checks were put off, primary coolant kept pouring out.`,
          tl: `Checks are put off, and coolant keeps pouring out.` }
      ],
      hist: `The operators trusted the indicator light and believed the relief valve had closed. They noticed that the downstream pipe was hot, but they put it down to the old leak. About eight minutes in, they noticed that the emergency feedwater valves had been left closed, and opened them. The relief valve stayed open, and primary coolant kept pouring out.`,
      lesson: `Know what an indicator actually shows. "A command to close was sent" is not the same as "it closed."`,
      histTl: `Trusted the indicator light and missed the stuck-open relief valve`
    },
    {
      clock: `Just after 4:00 a.m.`,
      title: `The Pressurizer Level`,
      sit: `With the primary coolant pressure dropping, high-pressure injection from the emergency core cooling system has started automatically. But the pressurizer level gauge keeps rising and is close to full. The operators have been strictly trained to keep the pressurizer from filling completely with water, known as "going solid." If it goes solid, pressure control is lost and the piping could be damaged.`,
      rep: [
        { f: `Primary System Pressure Gauge`, t: `Pressure keeps dropping. If there were more water, the pressure should not be falling.` },
        { f: `Primary System Thermometer`, t: `The primary coolant is nearing the boiling point for its pressure.` },
        { f: `Pressurizer Level Gauge`, t: `The level keeps rising. There is plenty of water in the primary system. Unless injection is cut back, it will go solid.`, why: `The level rose because coolant was boiling near the core, and the steam bubbles pushed water up into the pressurizer. Water was still being lost through the open relief valve. The level gauge did not show how much water was really in the core.` }
      ],
      inv: `You compared the pressure and the temperature. The primary coolant is near the boiling point for its pressure. Boiling may be happening near the core. The rising level does not have to mean more water.`,
      adv: {
        c: `The level gauge and the pressure gauge disagree. When they disagree, we should lean toward keeping the core cool.`,
        a: `If it goes solid, we lose control. Cut back the injection, just as we were trained.`,
        d: `Splitting the difference between the two gauges minimizes the error. Cut the injection by half.`
      },
      flawWhy: `Ares only saw the danger he had been trained to fear. He dismissed, without checking, the contradiction that the level gauge and pressure gauge were moving in opposite directions.`,
      opt: [
        { l: `Throttle back high-pressure injection to avoid going solid`, d: `As trained, make keeping the pressurizer from filling the top priority.`,
          ok: `The pressurizer level rose more slowly. But the water in the core kept slowly dropping.`,
          ng: `With the injection cut back, not enough water was reaching the core.` },
        { l: `Keep high-pressure injection at full`, d: `Trust the pressure and temperature over the level gauge. Accept the risk of going solid, and keep water flowing to the core.`,
          ok: `The pressurizer came close to full, but the core stayed covered with water.`,
          ng: `The pressurizer went solid, and pressure control got harder. Even so, the core stayed cooled.`,
          tl: `High-pressure injection is kept at full, and the core stays cooled.` },
        { l: `Cut injection by half and watch`, d: `Don't throw out either gauge. Split the difference.`,
          ok: `The water in the core dropped more slowly. But the leak itself was not stopped.`,
          ng: `The water in the core kept slowly dropping.`,
          tl: `High-pressure injection is cut by half. The water in the core slowly drops.` }
      ],
      hist: `The operators trusted the pressurizer level gauge and sharply cut back high-pressure injection to keep it from going solid. In the core, the coolant kept dropping. The President's Commission (the Kemeny Commission) later named this decision as one of the main reasons the accident became so serious. But the commission also pointed to problems not only with the operators, but with their training, procedures, and the design of the instruments.`,
      lesson: `When two gauges contradict each other, look for an explanation that makes both right before you throw one out.`,
      histTl: `Trusted the pressurizer level gauge and throttled back high-pressure injection`
    },
    {
      clock: `Around 6:00 a.m.`,
      title: `A Flood of Alarms`,
      sit: `Since the accident began, more than a hundred alarms have been sounding in the control room, and indicator lights keep flashing. The printer that logs the alarms has fallen far behind. In the 5 a.m. hour, the reactor coolant pumps began to shake violently, and the operators shut them off. No one is sure what is happening inside the reactor. Just after 6:00 a.m., the supervisor for the next shift arrives in the control room.`,
      rep: [
        { f: `Alarm Printer`, t: `The printer can't keep up. The records coming out now are from quite a while ago.` },
        { f: `Containment Building`, t: `The pressure and temperature inside the containment building are rising a little.` },
        { f: `Shift Operator`, t: `Most of these alarms are instrument errors. If we clear them one by one by the procedures, things will settle down.`, why: `The alarms were not errors. They showed that coolant was still being lost. Chasing more than a hundred alarms one by one, the crew had lost sight of the whole picture.` }
      ],
      inv: `You compared the temperature downstream of the relief valve with the temperatures in the pipes of the nearby safety valves. Only the relief valve's pipe is clearly hot. The valve is open.`,
      adv: {
        c: `We should deal with each alarm carefully, one at a time. Rushing to move valves could cause new problems.`,
        a: `Restart the pumps and force water into the core.`,
        d: `The temperature downstream of the relief valve has been high since the start of the accident. That single fact explains many of the other problems.`
      },
      flawWhy: `Minerva confused caution with working through the procedures one step at a time. Faced with more than a hundred alarms, stepping back to review everything from the start was the truly cautious choice.`,
      opt: [
        { l: `Have fresh eyes review everything, and close the relief valve's block valve`, d: `Ask the newly arrived staff to look at all the gauges, not the alarms. Suspect the relief valve and close its block valve.`,
          ok: `At 6:22 a.m., the block valve was closed. The loss of coolant finally stopped. But the core was already badly damaged.`,
          ng: `Closing the block valve stopped the leak. But the core temperature is slow to come down.` },
        { l: `Work through the alarms one by one by the procedures`, d: `Check each sounding alarm in order, from the top.`,
          ok: `Some alarms were cleared. But the relief valve stayed open.`,
          ng: `While the crew was busy with the alarms, the water in the core dropped further.`,
          tl: `Busy with the alarms, the crew lets time pass without noticing the stuck-open relief valve.` },
        { l: `Restart the reactor coolant pumps`, d: `Run the pumps you shut off and circulate water through the core.`,
          ok: `The pumps moved water for a while. But the cause of the leak is still there.`,
          ng: `The pumps shook violently, and you had to shut them off again right away.`,
          tl: `The reactor coolant pumps are restarted with the cause still unknown. The violent shaking goes on.` }
      ],
      hist: `At 6:22 a.m., the relief valve's block valve was closed. The supervisors who arrived for the next shift are said to have realized that the relief valve might be stuck open. About two hours and twenty minutes had passed since the accident began. Later investigations found that about half of the core had melted.`,
      lesson: `When there are too many alarms, each one becomes noise instead of information. Make a point of bringing in eyes that will review everything from the start.`,
      histTl: `The next shift spotted the stuck-open relief valve and closed the block valve`
    },
    {
      clock: `March 30 (Friday), morning`,
      title: `Pregnant Women and Children`,
      sit: `It is the third day of the accident. The reactor is still being cooled, but it is not stable. This morning, to lower the pressure, radioactive gas from a tank was vented outside. A helicopter measured a high radiation level directly above the vent stack. As the number spread, calls to evacuate residents began to grow. From here on, you decide in the position of Governor Thornburgh.`,
      rep: [
        { f: `State Radiation Officer`, t: `The levels measured outside the plant are much lower than the reading directly above the stack.` },
        { f: `NRC Expert`, t: `Pregnant women and young children are more sensitive to radiation. As a precaution, it would be good for them to move away from the area.` },
        { f: `NRC Headquarters Official`, t: `Based on the measurement, residents within 10 miles (about 16 km) of the plant should be evacuated.`, why: `That reading was taken directly above the vent stack. It was not the dose that people around the plant would receive. The recommendation was made without fully checking what the number meant.` }
      ],
      inv: `State officials gathered the readings actually measured around the plant. The levels outside the plant are much lower. The helicopter's reading was taken directly above the vent stack.`,
      adv: {
        c: `Let's protect the most vulnerable first. That causes far less confusion than moving everyone.`,
        a: `NRC headquarters is recommending evacuation. There's no time to hesitate. We should get ahead of this and move the whole area.`,
        d: `The measured levels around the plant are low. Statistically, the risk of traffic accidents during an evacuation is greater.`
      },
      flawWhy: `In his rush to "get ahead," Ares never checked where the number had been measured. Moving large numbers of people on a false premise means the evacuation itself can hurt people.`,
      opt: [
        { l: `Advise pregnant women and preschool children within 5 miles to leave, and ask people within 10 miles to stay indoors`, d: `Ask only those most sensitive to radiation to move away. Ask other residents to stay indoors.`,
          ok: `Nearby schools closed, and shelters opened. Far more residents than the advisory covered left the area on their own.`,
          ng: `The advisory got out, but people it did not cover also began leaving town all at once. The roads clogged, and fear spread.` },
        { l: `Order everyone within 10 miles to evacuate`, d: `Follow NRC headquarters' recommendation and move the entire area at once.`,
          ok: `The evacuation went forward. But when the number behind it turned out to be a misunderstanding, trust in the state was shaken.`,
          ng: `The roads jammed. Some people fell ill while being moved from hospitals and care homes.`,
          tl: `An evacuation order covers 10 miles. Traffic and confusion make moving hospitals and care homes difficult.` },
        { l: `Say there is no danger and issue no advice`, d: `The measured levels around the plant are low. Wait and see, so as not to stir up fear.`,
          ok: `There was no major confusion. But once the release was reported, no one believed the state's announcements.`,
          ng: `News of the release spread first, and residents were angry at the state's silence.`,
          tl: `The state issues no advice. When the release comes out later, trust collapses.` }
      ],
      hist: `Governor Thornburgh advised pregnant women and preschool children within 5 miles (about 8 km) of the plant to leave, and nearby schools were closed. He asked residents within 10 miles to stay indoors. The advisory covered only a small group, but well over a hundred thousand people are said to have left the area on their own.`,
      lesson: `Before you use a number, check where it was measured and what it measured. A decision that targets who to protect can protect people better than one that moves everyone.`,
      histTl: `Governor Thornburgh advised pregnant women and preschool children to leave`
    },
    {
      clock: `March 31 (Saturday)`,
      title: `The Hydrogen Bubble`,
      sit: `A large bubble of hydrogen has been found in the top of the reactor vessel. It formed when the overheated fuel cladding reacted with water. On the afternoon of the first day, hydrogen burned inside the containment building, and the pressure briefly spiked. Some NRC experts fear that if oxygen builds up in the bubble, it could explode. The news media are giving this fear heavy coverage, and anxiety around the plant is at its peak.`,
      rep: [
        { f: `Plant Engineers`, t: `If we adjust the pressure and the water flow little by little, we can shrink the bubble.` },
        { f: `Outside Research Lab`, t: `There are calculations showing that hydrogen dissolved in the water combines with oxygen, so oxygen is unlikely to build up in the bubble.` },
        { f: `NRC Estimate`, t: `Oxygen in the bubble keeps increasing. Within a few days, it will reach a concentration that could explode.`, why: `The reactor water held a large amount of dissolved hydrogen, and any oxygen made by radiation quickly combined with it to form water again. There was no way for oxygen to build up in the bubble, and there was no danger of an explosion. Within a few days, the NRC reached the same conclusion.` }
      ],
      inv: `You had several research organizations check the calculations. There is no way for oxygen to build up in the bubble. Their conclusion is that there is almost no danger of an explosion.`,
      adv: {
        c: `We should move residents away in case it does explode.`,
        a: `We need to get rid of the bubble now. The longer we wait, the greater the danger.`,
        d: `According to the estimate, the oxygen concentration will enter the explosive range within a few days. The rational move is to rush evacuation preparations.`
      },
      flawWhy: `Laplace's estimate left out a basic chemical fact: hydrogen dissolved in the water combines with oxygen. Even if the math is right, a wrong premise gives a wrong answer.`,
      opt: [
        { l: `Have the calculations checked and shrink the bubble little by little`, d: `Compare calculations from several organizations. Meanwhile, shrink the bubble by adjusting the pressure gradually. Keep a single point of contact for information.`,
          ok: `The conclusion came in: there was no danger of an explosion. Within a few days, the bubble had shrunk greatly. On April 1, President Carter visited the plant.`,
          ng: `The bubble shrank. But until the fear was ruled out, news reports kept spreading anxiety.` },
        { l: `Announce the danger of an explosion and prepare to evacuate within 20 miles`, d: `Just in case, act on the assumption of the worst.`,
          ok: `The evacuation plans were ready. But once it was clear there had been no danger, the announcement was seen as a false alarm.`,
          ng: `After the announcement, large numbers of people within 20 miles started moving all at once. Confusion spread.`,
          tl: `The danger of a hydrogen explosion is announced. A mass evacuation within 20 miles begins, and confusion spreads.` },
        { l: `Lower the pressure quickly and remove the bubble all at once`, d: `Before the bubble grows, drop the pressure sharply to get rid of it.`,
          ok: `The bubble got smaller. But the quick pressure drop briefly raised the core temperature.`,
          ng: `The quick pressure drop made the bubble expand, and part of the core was uncovered again.`,
          tl: `A quick pressure drop makes the bubble expand, and the core is uncovered again.` }
      ],
      hist: `Harold Denton of the NRC came to the site, and the plant's and the federal government's information was brought together through a single point of contact. Calculations from several organizations showed there was no danger of the bubble exploding. Within a few days, the bubble had shrunk greatly. On April 1, President Carter visited the plant.`,
      lesson: `The more frightening a calculation is, the more you should have someone else check its premises. While it is being checked, keep a single point of contact for information.`,
      histTl: `The hydrogen bubble was found to pose no danger of explosion. President Carter visited the site.`
    }
  ]
};
