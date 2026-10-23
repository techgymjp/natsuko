window.SCENARIOS_EN = window.SCENARIOS_EN || {};
window.SCENARIOS_EN.hudson = {
  title: 'Miracle on the Hudson',
  sub: '208 seconds to touchdown',
  year: 'January 2009',
  place: 'Cockpit of US Airways Flight 1549',
  role: 'Captain',
  roleNote: 'In the position of Captain Chesley "Sully" Sullenberger',
  meters: ['Altitude and speed margin', 'Aircraft control', 'Survival of passengers and crew'],
  intro: [
    'January 15, 2009, 3:25 p.m. LaGuardia Airport, New York.',
    'US Airways Flight 1549, an Airbus A320, took off for Charlotte, North Carolina.',
    'The captain is Chesley Sullenberger. The first officer is Jeffrey Skiles. There are 155 people on board.',
    'You are in the captain\'s seat. In this scenario, you have only 30 seconds for each decision.'
  ],
  endings: [
    { title: 'Miracle on the Hudson', text: 'All 155 people were pulled from the cold river. 208 seconds of decisions kept every one of them alive.' },
    { title: 'Survival, but...', text: 'Many people were saved. But not all of them.' },
    { title: 'The end of 208 seconds', text: 'The aircraft never reached a place where it could come down safely.' }
  ],
  epilogue: 'In history, all 155 passengers and crew of Flight 1549 survived. About 208 seconds passed from engine failure to touchdown on the water. The US National Transportation Safety Board (NTSB) credited the decisions and teamwork of the captain and first officer, the work of the flight attendants and the fast rescue for saving everyone.',
  turns: [
    {
      clock: '3:27:11 p.m.', title: 'Bird strike',
      sit: 'About two minutes after takeoff, at about 850 m (2,800 ft), the plane flies into a flock of Canada geese. After a dull thud, both engines lose thrust. A burning smell fills the cabin. First Officer Skiles is flying the plane.',
      rep: [
        { f: 'Engine gauges', t: 'Both engines spooling down fast. Thrust is almost zero.' },
        { f: 'Checklist', t: 'The dual engine failure checklist runs three pages. It assumes the failure happens at high altitude.' },
        { f: 'Some engine gauges', t: 'The engines are still turning. A restart might bring back thrust.', why: 'The engines had swallowed many birds and were damaged inside. They were only windmilling in the airflow. The restart attempts failed.' }
      ],
      inv: 'You checked the engine sound and vibration. The engines are only windmilling in the airflow. They are producing no thrust.',
      adv: {
        c: 'Stick to the roles in the procedure. Let him keep flying. You take the checklist, Captain.',
        a: 'You have the best view of the ground outside, Captain. Take the controls now.',
        d: 'Restoring thrust solves every problem. A restart is the top priority.'
      },
      flawWhy: 'Laplace started from sound logic: "If thrust comes back, the problem is solved." But he never checked whether a restart was actually possible.',
      opt: [
        { l: 'Take control and start the APU now', d: '"My aircraft." Start the auxiliary power unit (APU) without waiting for the checklist, to secure electrical power and flight controls. Leave the checklist to the first officer.',
          ok: 'The APU came on, securing backup power and flight controls. The aircraft is firmly in your hands.',
          ng: 'The handover cost a few seconds. But control of the aircraft is maintained.' },
        { l: 'Let him fly and read the checklist yourself', d: 'Keep the division of roles you trained for.',
          ok: 'The procedure went by the book. But the long checklist is eating up time.',
          ng: 'Partway through the checklist, altitude keeps slipping away.',
          tl: 'Roles stay the same and the checklist comes first. The altitude margin is lost' },
        { l: 'Put everything into restarting the engines', d: 'If thrust comes back, you can return to the airport.',
          ok: 'The restart failed. But you quickly moved on to the next decision.',
          ng: 'After repeated restart attempts, the plane dropped below 300 m (1,000 ft).',
          tl: 'Fixated on restarting the engines, the crew loses altitude' }
      ],
      hist: 'Captain Sullenberger said "My aircraft" and took control at once. He started the auxiliary power unit (APU) without waiting for the checklist. This was later judged to be key to keeping control of the aircraft.',
      lesson: 'Procedures are written for the situations they expect. When things go beyond that, you must go back to the purpose of the procedure and be willing to change the order.',
      histTl: 'The captain takes control and starts the APU at once'
    },
    {
      clock: '3:28:05 p.m.', title: 'Where to land?',
      sit: 'The controller asks: "Can you make it back to LaGuardia, runway 13?" You are at about 500 m (1,600 ft) and still descending. Below are the towers of Manhattan and the Hudson River. Teterboro Airport lies on the New Jersey side.',
      rep: [
        { f: 'Controller', t: 'LaGuardia runway 13 is available. Teterboro runway 1 is available too.' },
        { f: 'The captain\'s eyes', t: 'LaGuardia is rising in the windshield. That is a sign you do not have enough altitude.' },
        { f: 'Flight management system', t: 'At the current altitude and speed, the numbers say you can make it back to LaGuardia.', why: 'In simulations after the accident, pilots only made it back to an airport if they turned back the instant the engines failed. When time to understand the situation (about 35 seconds) was added, every attempt failed.' }
      ],
      inv: 'You checked how the airport looks through the window. The runway keeps rising in the windshield. You will not make it.',
      adv: {
        c: 'We cannot risk crashing into the city. In the river, at least we will not take people on the ground with us.',
        a: 'A runway gives us the best chance of survival. Let us go back.',
        d: 'According to the flight management system, a return to LaGuardia is possible.'
      },
      flawWhy: 'Laplace\'s calculation assumed that deciding takes no time at all. It left out the tens of seconds a human needs to understand the situation.',
      opt: [
        { l: 'Return to LaGuardia', d: 'On a runway, you can stop most safely.',
          ok: 'You slipped onto the end of the runway with nothing to spare. It was a miracle.',
          ng: 'Not enough altitude. Short of the runway lie homes and a highway.',
          tl: 'A return to LaGuardia is attempted. The plane runs out of altitude short of it, over the city' },
        { l: 'Head for Teterboro', d: 'Turn toward the airport on the New Jersey side.',
          ok: 'By some miracle, you reached the runway.',
          ng: 'Neighborhoods stretch all the way to Teterboro. Not enough altitude.',
          tl: 'The plane heads for Teterboro and runs out of altitude over homes' },
        { l: 'Land in the Hudson', d: '"We\'re gonna be in the Hudson." Rather than gamble on a runway you cannot reach, choose a place you can surely land.',
          ok: 'You turned the nose south. The gray Hudson River spreads out ahead.',
          ng: 'You have committed to the water, but it is hard to judge the height above the river.' }
      ],
      hist: 'The captain told the controller "We\'re unable" and said, "We\'re gonna be in the Hudson." In simulations run for the NTSB investigation, pilots only made it back to an airport if they turned back the instant the engines failed. Once about 35 seconds for decision-making were added, every attempt failed.',
      lesson: 'Something possible on paper still takes human reaction time in reality. Tell apart "success under ideal conditions" from "success under the conditions I am in now."',
      histTl: '"We\'re gonna be in the Hudson"'
    },
    {
      clock: '3:29 p.m.', title: 'A word to the cabin',
      sit: 'About 90 seconds until touchdown. The passengers do not know what is happening. The flight attendants are waiting for the captain\'s instructions. There is very little time to say anything.',
      rep: [
        { f: 'First officer', t: 'There is no time to get to the ditching checklist.' },
        { f: 'Flight attendants', t: 'We can give the brace commands the short way we trained.' },
        { f: 'A voice in your head', t: 'If you explain things in detail, the passengers will calm down.', why: 'Under extreme stress, long explanations do not get through. Short, concrete commands move passengers and crew far more reliably.' }
      ],
      inv: 'You recalled the flight attendants\' training. One command is enough for them to start getting passengers into the brace position.',
      adv: {
        c: 'The passengers have a right to know. Explain the situation carefully and reassure them.',
        a: 'Every second should go to flying the plane. Skip the announcement.',
        d: 'A trained command gets the most action out of the fewest words.'
      },
      flawWhy: 'Minerva\'s concern is right. But in an extreme situation, a long explanation does not get through, and it takes time away from flying.',
      opt: [
        { l: 'Say only "Brace for impact"', d: '"This is the captain. Brace for impact." Say nothing more.',
          ok: 'The flight attendants repeat the command together: "Heads down! Stay down!"',
          ng: 'Some passengers panicked, but they took the position when the crew called the commands.' },
        { l: 'Explain the situation in detail', d: 'Tell them the engines have failed and that you will land in the river.',
          ok: 'The passengers understood. But while you talked, your focus on flying slipped.',
          ng: 'The explanation ran long, and your exchange with the first officer broke off.',
          tl: 'A cabin announcement explains the situation, and focus on flying slips' },
        { l: 'Say nothing and just fly', d: 'Use every second for flying.',
          ok: 'The flight attendants sensed something was wrong and got passengers into position on their own.',
          ng: 'Most passengers will meet the impact without bracing.',
          tl: 'No announcement. Most passengers are not braced for impact' }
      ],
      hist: 'The captain said only, "This is the captain. Brace for impact." The flight attendants at once began repeating, "Heads down, stay down."',
      lesson: 'In an extreme situation, keep messages short, concrete and tied directly to action.',
      histTl: '"This is the captain. Brace for impact."'
    },
    {
      clock: '3:30 p.m.', title: 'Ditching attitude',
      sit: 'The river is rushing up. You must set your speed and attitude. Too fast, and the aircraft breaks apart. Too slow, and it stalls and drops. If the wings are tilted, one wing will catch the water first and the aircraft will cartwheel.',
      rep: [
        { f: 'First officer', t: 'Flaps are down. I am calling out the airspeed.' },
        { f: 'Training records', t: 'There are almost no cases of an airliner ditching successfully.' },
        { f: 'Your gut', t: 'Lower the nose to gain speed and the plane will be more stable.', why: 'Touching down with the nose low can drive the nose into the water and break the aircraft apart. The ideal was wings level, nose slightly up, at the lowest speed that avoids a stall.' }
      ],
      inv: 'You checked the speed and attitude the first officer is calling out. There is still some margin above the stall.',
      adv: {
        c: 'Wings level. Nose up a little, and as slow as you can.',
        a: 'Above all, we must avoid a stall. Hold your speed.',
        d: 'A level attitude combined with minimum speed keeps damage to the aircraft lowest on touchdown.'
      },
      flawWhy: '',
      opt: [
        { l: 'Wings level, nose slightly up, minimum speed', d: 'Touch down level and as slowly as you can without stalling.',
          ok: 'At 3:31 p.m., the aircraft slid onto the water. It stayed in one piece and is floating.',
          ng: 'The impact damaged the rear of the aircraft, and water began to come in. Still, it is floating.' },
        { l: 'Lower the nose and hold speed', d: 'Make avoiding a stall the top priority.',
          ok: 'The aircraft hit the water with a violent jolt. It was badly damaged, but it is floating.',
          ng: 'The nose plowed into the water, and the front of the aircraft was badly broken.',
          tl: 'The plane hits the water too fast and is badly damaged' },
        { l: 'Touch one wing down first to slow down', d: 'Use the drag of the wing to bleed off speed.',
          ok: 'The aircraft spun hard, but by some miracle it stayed afloat.',
          ng: 'The moment one wing caught the water, the aircraft cartwheeled and broke apart.',
          tl: 'One wing hits the water first, and the aircraft cartwheels' }
      ],
      hist: 'The captain kept the wings level, raised the nose slightly and touched down at the lowest speed that avoided a stall. It was 3:31 p.m., about 208 seconds after the engines failed.',
      lesson: 'When two dangers (stall and impact) pull in opposite directions, do not minimize just one. Look for the single point where both stay within limits.',
      histTl: 'Touchdown on the Hudson River'
    },
    {
      clock: '3:31 p.m.', title: 'Taking on water',
      sit: 'The aircraft is floating. But water has started coming in at the rear. The Hudson in winter is about 2°C (36°F), and the air is below freezing. You can see a commuter ferry heading your way.',
      rep: [
        { f: 'Flight attendants', t: 'The evacuation has started through the forward doors and the overwing exits.' },
        { f: 'Rear of the cabin', t: 'Water is coming in around the rear doors.' },
        { f: 'A passenger', t: 'If we open the rear doors, everyone can get out faster.', why: 'The rear doors were close to the waterline. Opening them would let in a flood of water. In fact, one rear door was partly opened, and the water came in faster.' }
      ],
      inv: 'You checked the rear of the cabin. The bottom edge of the rear doors is close to the waterline. Open them, and the flooding will speed up fast.',
      adv: {
        c: 'Making sure everyone is out is the captain\'s responsibility.',
        a: 'More exits means a faster evacuation. Open them all.',
        d: 'Directing the rescue boats raises overall survival the most. The captain belongs outside.'
      },
      flawWhy: 'Ares calculated evacuation time from the number of exits alone. He missed that the rear doors were close to the waterline, and that opening them would speed up the flooding.',
      opt: [
        { l: 'Evacuate forward and over the wings. Check the cabin last', d: 'Keep the rear doors shut. See with your own eyes that everyone is out, then leave the aircraft last.',
          ok: 'The captain walked the flooded cabin twice to make sure no one was left, then left the aircraft last. All 155 passengers and crew were rescued.',
          ng: 'Some people suffered hypothermia. But everyone was rescued.' },
        { l: 'Get out first and direct the rescue boats', d: 'Take command of the whole scene from outside.',
          ok: 'The rescue went smoothly. But no one made a final check that everyone was out.',
          ng: 'A passenger who could not move was left behind at the back of the cabin.',
          tl: 'The captain gets out first, and no one makes a final check of the cabin' },
        { l: 'Open the rear doors too and hurry everyone out', d: 'More exits, so everyone gets out even a second sooner.',
          ok: 'The evacuation went faster, but so did the flooding.',
          ng: 'Water poured in through the rear doors, and the back of the cabin filled to chest height.',
          tl: 'The rear doors are opened, and the cabin floods fast' }
      ],
      hist: 'The captain had people evacuate through the forward doors and over the wings. He walked the flooded cabin twice to make sure no one was left, then left the aircraft last. A passenger partly opened a rear door, which sped up the flooding. Commuter ferries and other boats rushed to the scene one after another, and all 155 people were saved.',
      lesson: 'Do not let your guard down at the last step of a crisis. Your responsibility lasts until you have confirmed that everyone is safe.',
      histTl: 'All 155 rescued. "Miracle on the Hudson"'
    }
  ]
};
