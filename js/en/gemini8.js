window.SCENARIOS_EN = window.SCENARIOS_EN || {};
window.SCENARIOS_EN.gemini8 = {
  title: `Gemini 8`,
  sub: `The Spin That Would Not Stop`,
  year: `March 1966`,
  place: `Earth orbit, aboard Gemini 8`,
  role: `Commander of Gemini 8`,
  roleNote: `In Neil Armstrong's position (with David Scott aboard)`,
  meters: [`Crew Safety`, `Spacecraft Control`, `Mission Results`],
  intro: [
    `March 1966. On the road to the Apollo Moon landings, the United States is testing new techniques with the two-man Gemini spacecraft.`,
    `To reach the Moon, two spacecraft must join together in space. This is called docking. No one has done it yet.`,
    `On March 16, an unmanned Agena target vehicle launched first. About 1 hour and 40 minutes later, Gemini 8 followed it into orbit.`,
    `You are Commander Neil Armstrong. In the seat next to you is your pilot, David Scott.`
  ],
  endings: [
    { title: `Both Men Come Home`, text: `The spin stopped, and the two of you waited safely on the sea for rescue. The mission ended early, but you never got the order of priorities wrong.` },
    { title: `Home, Just Barely`, text: `You both made it back. But delays and doubts pushed you close to the limit again and again.` },
    { title: `Still Spinning`, text: `The means to stop the spin came too late.` }
  ],
  epilogue: `In history, Armstrong and Scott returned safely. Gemini 8 achieved the first docking in space, but the planned three-day flight was cut short after about 10 hours and 40 minutes. The cause of the failure is thought to have been an electrical short in the system for thruster No. 8. Three years later, Armstrong set foot on the Moon as commander of Apollo 11. Scott later flew on Apollo 9 and Apollo 15.`,
  turns: [
    {
      clock: `March 16, about 6 hours after launch`,
      title: `The First Docking`,
      sit: `Gemini 8 has caught up with the unmanned Agena target vehicle, which was already in orbit. It is only a short distance away. No two spacecraft have ever joined in space. The ground has given you a go for docking. Later in the flight, Scott is scheduled to make a spacewalk.`,
      rep: [
        { f: `Agena Status`, t: `The Agena is holding a steady attitude. Checks from the ground have found no major problems.` },
        { f: `Flight Plan`, t: `Dock slowly. Hitting hard could damage the docking collar.` },
        { f: `Propellant Officer`, t: `There is plenty of OAMS fuel. If you close in fast and save time, the rest of the schedule gets easier.`, why: `Closing in fast could damage the docking collar or knock the spacecraft out of position in a collision. Spare fuel was meant for the unexpected. In fact, the trouble that followed would drain the OAMS fuel heavily.` }
      ],
      inv: `You flew alongside the Agena and inspected it. The docking collar is undamaged, and its attitude is steady. A slow approach should be fine.`,
      adv: {
        c: `This is a first. We could stop at flying side by side today and save the docking for another time.`,
        a: `We can't waste fuel or time. Go straight in and dock. The schedule is tight.`,
        d: `Inspecting first and then docking slowly gives the best balance of success rate and fuel use.`
      },
      flawWhy: `Ares only looked at the schedule in front of him. Rushing a first docking risks damaging the collar and burns fuel you may need in an emergency.`,
      opt: [
        { l: `Fly alongside and inspect, then dock slowly`, d: `Spend some time near the Agena checking its condition and attitude. Then close in slowly and dock.`,
          ok: `The nose slid into the Agena's docking collar, and the two vehicles locked together. It was the first docking in space. Cheers broke out in Mission Control.`,
          ng: `The docking succeeded. But lining up took longer than you expected.` },
        { l: `Dock right away to save time`, d: `Keep the checks to a minimum and go straight in.`,
          ok: `You docked. But you hit hard, and you are worried about the docking collar.`,
          ng: `You came in too fast and bounced off the collar. It took fuel to get back into position.`,
          tl: `A rushed docking with no checks damages the collar and wastes fuel.` },
        { l: `Skip docking and only practice flying side by side`, d: `Don't push a first attempt. Just test the formation flying.`,
          ok: `You flew safely side by side. But the biggest goal, docking, was not achieved.`,
          ng: `The flight ended with formation flying alone, and the ground worried about falling behind schedule.`,
          tl: `Docking is skipped, and the first joining of spacecraft in space is put off.` }
      ],
      hist: `Armstrong flew alongside the Agena for a while and inspected it. About six and a half hours after launch, he closed in slowly and docked. It was the first time two spacecraft had ever docked in space.`,
      lesson: `The more new a task is, the more you should doubt the reasons to hurry. The margin you keep matters more later than the minutes you save.`,
      histTl: `Achieved the first docking in space`
    },
    {
      clock: `About 30 minutes after docking`,
      title: `The Spacecraft Starts to Turn`,
      sit: `Still docked with the Agena, the spacecraft has slowly started to roll. You are out of contact with the ground stations. When you use the OAMS (Orbit Attitude and Maneuvering System) to correct it, the roll starts again a little later. After docking, the ground had told you, in effect, "If the Agena's controls act up, turn them off and fly with the Gemini."`,
      rep: [
        { f: `Attitude Display`, t: `The roll comes back every time you stop it. It is getting a little faster.` },
        { f: `Communications`, t: `You are out of range of the ground. You cannot get advice until you pass over the next station.` },
        { f: `First Impression`, t: `The Agena's command system has gone wild. If we don't undock now, it will throw the whole spacecraft around.`, why: `At this point, there was no evidence that the Agena was the cause. The real cause was a thruster on the Gemini. Undocking in a hurry while spinning, without knowing the cause, also risked a collision between the two vehicles.` }
      ],
      inv: `You checked the Agena's status display. There is no clear sign that the Agena is responding to commands. You still cannot tell which vehicle is the cause.`,
      adv: {
        c: `First, do what the ground said and turn off the Agena's controls. Undock only after we know the cause.`,
        a: `Silence the Agena and hold it down with the Gemini's controls. We are the ones in charge.`,
        d: `There were concerns about the Agena's control system before the flight. Since the Agena is the most likely cause, the best move is to undock now.`
      },
      flawWhy: `Laplace confused "there were concerns before the flight" with "the probability that it is the cause." Skipping the checks means a big loss if the guess is wrong.`,
      opt: [
        { l: `Turn off the Agena's controls and recover with the Gemini`, d: `As the ground advised, shut off the Agena's attitude control. Use the Gemini's OAMS to cancel the roll.`,
          ok: `When you turned off the Agena's controls, the roll started to ease. But after a while, it started again.`,
          ng: `Even with the Agena off, the roll does not stop. Only the OAMS fuel keeps going down.` },
        { l: `Undock from the Agena at once`, d: `Treat the Agena as the cause and get away as fast as possible.`,
          ok: `You undocked safely. But you still don't know the cause, and the roll goes on.`,
          ng: `Undocking while spinning, the two vehicles nearly touched. The roll got even faster.`,
          tl: `The crew undocks from the Agena while spinning, with the cause still unknown.` },
        { l: `Wait until you can talk to the ground`, d: `You can't get advice out of range. Hold on with the controls until the next station.`,
          ok: `You managed to hold your attitude until you neared the next station. But you used a lot of fuel.`,
          ng: `While you waited, the roll grew faster and the fuel kept dropping.`,
          tl: `The roll speeds up while the crew waits for instructions from the ground.` }
      ],
      hist: `The crew turned off the Agena's attitude control and tried to steady the spacecraft with the Gemini's OAMS. The roll eased for a moment, but soon grew stronger again.`,
      lesson: `An advance warning helps you decide what to suspect first. But it does not decide the cause by itself.`,
      histTl: `Turned off the Agena's controls and tried to recover with the Gemini`
    },
    {
      clock: `A few minutes after the roll began`,
      title: `Undock or Not?`,
      sit: `The roll will not stop. The two docked vehicles are being thrown around, putting strain on the docking collar. The Agena carries a large load of fuel. If it breaks, no one knows what could happen. Then you notice that the Gemini's OAMS fuel has dropped to about 30 percent.`,
      rep: [
        { f: `OAMS Fuel Gauge`, t: `About 30 percent left. That is far faster than planned.` },
        { f: `Docking Collar`, t: `The forces from the spinning could damage the collar or the spacecraft.` },
        { f: `Ground Advice`, t: `There are concerns about the Agena's controls. The cause must be the Agena. Undock and the roll will stop.`, why: `The way the fuel was dropping showed that a thruster on the Gemini was still firing. The cause was the Gemini's thruster No. 8, which was stuck firing. After undocking, the Gemini was lighter and began to spin even faster.` }
      ],
      inv: `With the Agena's controls still off, you watched the fuel. Only the Gemini's fuel keeps dropping. The cause is most likely on the Gemini.`,
      adv: {
        c: `We should get away before the spacecraft breaks. The Agena is full of fuel. Putting distance between us is the safest move.`,
        a: `Turn the Agena's controls back on and use both to force the roll down.`,
        d: `The fuel use points to thrusters firing on the Gemini. Stay docked, shut off our thrusters, and check.`
      },
      flawWhy: `Minerva thought getting away would be safe. But the fuel readings showed that the cause was the Gemini itself. Undocking with the problem still on board would not stop the roll.`,
      opt: [
        { l: `Undock and back away from the Agena`, d: `Get away from the Agena before the structure fails.`,
          ok: `The undocking worked, and the two vehicles did not collide. But the Gemini was now lighter, and it began to spin even faster.`,
          ng: `Right after you backed away, the spin suddenly sped up. The gauges are getting hard to read.` },
        { l: `Stay docked and shut off the Gemini's OAMS to check`, d: `Cut power to the Gemini's thrusters. See whether the force driving the roll goes away.`,
          ok: `With the OAMS off, the force driving the roll disappeared. You learned the cause was on the Gemini, and the two vehicles slowly settled.`,
          ng: `With the OAMS off, the roll eased. But the docking collar had already taken a lot of strain.`,
          tl: `The OAMS is shut off, showing the cause is on the Gemini. The roll settles while still docked.` },
        { l: `Turn the Agena back on and force the roll down with both`, d: `Use the Agena's attitude control too, and cancel the roll with both vehicles.`,
          ok: `The roll eased for a moment. But the cause is still there, and the fuel keeps going down.`,
          ng: `The two control systems fought each other, and the roll became even more erratic.`,
          tl: `The crew turns the Agena's controls back on to force the roll down and runs out of fuel.` }
      ],
      hist: `Afraid the spinning would break the spacecraft apart, Armstrong and Scott undocked from the Agena. But the Gemini was now lighter, and the spin grew even faster.`,
      lesson: `Before you move away from a danger, make sure you know where the danger is. Sometimes the clue is in how fast a gauge is dropping.`,
      histTl: `Undocked from the Agena. The spin got even faster.`
    },
    {
      clock: `Just after undocking`,
      title: `One Turn per Second`,
      sit: `The Gemini is now spinning at close to one turn per second. Your vision is blurring, and the gauges are getting impossible to read. If this goes on, you could black out. Contact is back with a tracking ship, and Scott reports, "We have serious problems here." The tool within reach is the RCS (Reentry Control System), meant for reentry. But under the rules, once the RCS is used, the mission must end and the crew must come home as soon as possible.`,
      rep: [
        { f: `Rate Gauge`, t: `The spin is close to one turn per second. It is still speeding up.` },
        { f: `RCS`, t: `The two rings of reentry thrusters have not been used yet. Their fuel is full.` },
        { f: `Training Assumptions`, t: `Even if one thruster sticks on, the rest of the OAMS can cancel it out. Keep working the hand controller and you can stop it.`, why: `The stuck thruster No. 8 kept firing, and little OAMS fuel was left. The spin had reached close to one turn per second, past the point where the hand controller could cancel it out.` }
      ],
      inv: `You checked the OAMS fuel gauge. Very little is left, and the spin does not slow even with the hand controller all the way over. It is too late to stop it with the OAMS.`,
      adv: {
        c: `Use the sure thing while you are both still conscious. It's all right to give up the mission.`,
        a: `If we just find the bad thruster, we can keep the mission going. Shut them off one at a time.`,
        d: `Using the RCS ends the mission under the rules. The expected chance of continuing the mission is higher if you hold on with the OAMS.`
      },
      flawWhy: `Laplace's only goal was to keep the mission going. He left out the heaviest variable of all: the chance that the crew would black out.`,
      opt: [
        { l: `Shut off the OAMS and stop the spin with the RCS`, d: `Cut power to the OAMS and switch on the RCS reentry thrusters. Accept that the mission will end.`,
          ok: `With the RCS on, the spin slowed bit by bit, then stopped. Testing the OAMS thrusters one at a time, you found that thruster No. 8 had been stuck firing.`,
          ng: `The spin stopped. But you used a large share of the RCS fuel.` },
        { l: `Hold on with the OAMS controls`, d: `Using the RCS ends the mission. Keep fighting the spin with the OAMS.`,
          ok: `The spin slowed a little. But the OAMS fuel is nearly gone.`,
          ng: `Everything is going dark. You can no longer see the switches in front of you.`,
          tl: `Holding on with the OAMS, the spin speeds up and the crew nearly blacks out.` },
        { l: `Shut thrusters off one at a time to find the bad one`, d: `Find out which thruster is stuck firing and shut off only that one.`,
          ok: `By luck, you found thruster No. 8 early. You stopped the spin without using the RCS.`,
          ng: `While you searched for the switch, the spin got even faster, and you started to lose consciousness.`,
          tl: `The crew searches for the bad thruster while spinning and loses precious time.` }
      ],
      hist: `Armstrong shut off the OAMS and switched on the RCS reentry thrusters to stop the spin. He then tested the OAMS thrusters one by one and found that thruster No. 8 had not stopped firing. At the fastest point of the spin, the two men are said to have been close to blacking out.`,
      lesson: `Using the tool that saves lives may cost you another goal. Even so, keep your priorities in the right order.`,
      histTl: `Stopped the spin with the RCS and found the failed thruster No. 8`
    },
    {
      clock: `After the spin stopped`,
      title: `Coming Home Early`,
      sit: `The spin has stopped. But much of the RCS fuel is gone. Mission rules say that once the RCS has been used, the crew must return as soon as possible. The plan was a three-day flight, with a spacewalk by Scott still ahead. If you come down now, you will land in the backup recovery area in the western Pacific, not the main recovery area in the Atlantic.`,
      rep: [
        { f: `Mission Control`, t: `We confirm the RCS has been used. Per the rules, we are preparing for an early return.` },
        { f: `Recovery Forces`, t: `We can send ships and aircraft to the backup area in the western Pacific. But it will take longer than in the main recovery area.` },
        { f: `Spacewalk Planner`, t: `There is still plenty of RCS fuel. Fly a little longer, do the spacewalk, and then come down.`, why: `The RCS was the lifeline for holding attitude during reentry. A large share of its fuel was gone, and the OAMS had failed. Flying on with no backup could have led to a failed reentry.` }
      ],
      inv: `You checked the RCS fuel with Mission Control. It is enough for reentry, but there is almost nothing to spare. The cause of the OAMS failure is still unknown.`,
      adv: {
        c: `This is exactly what the rules are for. Let's come down now.`,
        a: `We know where the failure is. It would be a waste to give up the spacewalk after coming this far.`,
        d: `Recovery is more reliable in the main area. Fly a little longer and land in the Atlantic to lower the recovery risk.`
      },
      flawWhy: `Ares did not want to lose the mission's results. He took too lightly the fact that the RCS fuel needed for reentry was low and the OAMS was still broken.`,
      opt: [
        { l: `Follow the rules and come down in the western Pacific at the next chance`, d: `End the mission and reenter toward the backup recovery area.`,
          ok: `Reentry went safely. A rescue plane flew over the floating spacecraft, and swimmers attached a flotation collar. About three hours later, a destroyer picked up both men.`,
          ng: `The recovery took a long time, and the two of you waited, rocking on the waves. But you were both safe.` },
        { l: `Keep flying until you can land in the Atlantic`, d: `Aim for the main recovery area, where the recovery forces are ready.`,
          ok: `You landed safely in the Atlantic. But flying on with a failure on board kept the ground on edge for hours.`,
          ng: `As the flight went on, the RCS fuel dropped further. Almost no margin was left for reentry.`,
          tl: `The crew passes up the backup recovery area and keeps flying with the failure on board.` },
        { l: `Keep the bad thruster off and do the spacewalk`, d: `You know which thruster failed. Carry out as much of the remaining plan as you can.`,
          ok: `The spacewalk was short. But Mission Control strongly objected to breaking the rules.`,
          ng: `The spacecraft's attitude slipped during the spacewalk. The RCS fuel fell to barely enough for reentry.`,
          tl: `The crew keeps going with little RCS fuel left and forces the spacewalk through.` }
      ],
      hist: `Mission Control decided on an early return. About 10 hours and 40 minutes after launch, Gemini 8 splashed down in the western Pacific, east of Okinawa. About three hours later, the destroyer USS Leonard F. Mason picked up both men. The planned three-day flight and the spacewalk were canceled.`,
      lesson: `Rules are decisions that were thought through in calm times. Right after chaos is when they are most worth trusting.`,
      histTl: `Returned early by the rules and splashed down in the western Pacific`
    }
  ]
};
