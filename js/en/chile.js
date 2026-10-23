window.SCENARIOS_EN = window.SCENARIOS_EN || {};
window.SCENARIOS_EN.chile = {
  title: 'The Chilean Mine Collapse',
  sub: '33 men, 700 m underground',
  year: 'August 2010',
  place: 'San José mine, Atacama Desert, Chile',
  role: 'Head of the rescue operation',
  roleNote: 'In the position of Mining Minister Golborne and on-site commander Sougarret',
  meters: ['Miners\' health', 'Speed of rescue', 'Trust of families and the public'],
  intro: [
    'August 5, 2010. The Atacama Desert in northern Chile.',
    'The San José mine digs for gold and copper. People had warned about its safety for years.',
    'That afternoon, a massive collapse deep in the tunnels sealed the way to the surface.',
    'You are in charge of the rescue operation. You have just arrived at the site.'
  ],
  endings: [
    { title: 'All 33 come home', text: 'When the last man stood on the surface, cheers rang out at the mine entrance. The whole world was watching.' },
    { title: 'A long road', text: 'The miners were rescued. But it took far too long, and it left deep scars on their minds and bodies.' },
    { title: 'Help that never arrived', text: 'In the end, the rescue never reached every man underground.' }
  ],
  epilogue: 'In history, all 33 miners were rescued on October 13, 2010, the 69th day after they were trapped. The rescue was broadcast live around the world, and some say more than a billion people watched.',
  turns: [
    {
      clock: 'August 6, 2010', title: 'The collapse',
      sit: '33 miners are trapped about 700 m underground. No one knows if they are alive. The company that runs the mine is small. It has little rescue technology and little money. Families have begun to gather at the mine entrance.',
      rep: [
        { f: 'Mining company', t: 'We want to run the rescue ourselves. There is no need for the government to step in.' },
        { f: 'Mining expert', t: 'There is a shelter deep in the tunnels with a small store of emergency food. If everyone made it there, they may be alive.' },
        { f: 'Local engineer', t: 'Given the scale of the collapse, the chance of survival is extremely low.', why: 'All 33 men had made it to the shelter and the tunnels around it, and they were alive. Pessimism without solid grounds drains the speed and drive out of a rescue.' }
      ],
      inv: 'You had the mine plans brought in. The shelter lies deeper than the collapse point. If the tunnels down to it are still intact, there is a real chance the men are alive.',
      adv: {
        c: 'Lives are at stake. Those with the responsibility and the resources should step forward.',
        a: 'The state should go all in. Let us gather every technology we can find, at home and abroad.',
        d: 'Statistics from past collapses of this size show a very low survival rate. We should be careful how we allocate resources.'
      },
      flawWhy: 'Laplace applied the average from past accidents. He left out the condition unique to this one: the shelter.',
      opt: [
        { l: 'Have the government lead the rescue', d: 'The Mining Minister goes to the site and hands the operation to engineers from the state copper company, Codelco. The state pays the costs.',
          ok: 'Codelco engineer André Sougarret took command at the site. The families\' tent village began to be called "Camp Esperanza" (Camp Hope).',
          ng: 'The government stepped forward, but the chain of command was confused for the first few days.' },
        { l: 'Leave it to the company and support it', d: 'The company is responsible for the accident. The government backs it up from behind.',
          ok: 'The company tried hard, but its lack of technology and money was obvious.',
          ng: 'The company was slow to act, and the families\' anger boiled over.',
          tl: 'The rescue is left to the mining company, and the first response is slow' },
        { l: 'Proceed carefully, expecting to recover bodies', d: 'Dig slowly to avoid a second disaster.',
          ok: 'The work went safely, but far too slowly. The families protested: "Are you abandoning them?"',
          ng: 'Underground, the miners were losing hope as help never came.',
          tl: 'Work proceeds slowly on the assumption of recovering bodies. The rescue starts very late' }
      ],
      hist: 'President Piñera decided the government would lead the rescue, and Mining Minister Golborne went to the site. Codelco engineer André Sougarret took command on the ground.',
      lesson: 'Past statistics are only a starting point. A condition unique to this case (the shelter) can overturn them.',
      histTl: 'The government leads the rescue. A Codelco engineer commands the site'
    },
    {
      clock: 'August 8, 2010', title: 'A second collapse',
      sit: 'A rescue team tried to climb down a ventilation shaft, but a second collapse blocked it. The route through the tunnels is gone. The only option is to drill narrow holes from the surface to find the 33 men. But hitting a shelter 700 m down with a drill hole is extremely hard.',
      rep: [
        { f: 'Driller A', t: 'The deeper a borehole goes, the more it drifts off target. Miss by a few meters and it will not reach the shelter.' },
        { f: 'Mine survey map', t: 'The plans showing the shelter are old. They may not be accurate.' },
        { f: 'Driller B', t: 'Put all our technology into one hole and we will hit it for sure.', why: 'In the real search, many holes missed. The plans had errors too. If they had bet on a single hole, every miss would have cost days.' }
      ],
      inv: 'You checked past drilling records. Drifting a few meters off at 700 m is common. The plan should assume holes will miss.',
      adv: {
        c: 'We should assume some will miss and drill many holes at once.',
        a: 'Forget holes. Open the tunnel. Once it is clear, we can save everyone at once.',
        d: 'Driller B is highly confident. If we focus resources on one hole, we reach them in the shortest time.'
      },
      flawWhy: 'Laplace treated the driller\'s "confidence" as if it were a probability. He did not count the time lost if the hole missed.',
      opt: [
        { l: 'Drill many search holes at once', d: 'Assume some will miss, and drill many holes in parallel.',
          ok: 'Many holes missed. But on August 22, one finally reached a tunnel near the shelter.',
          ng: 'Hole after hole missed, and despair began to spread among the families. Still, the drilling went on.' },
        { l: 'Focus on one hole and make it precise', d: 'Give the best driller the best equipment and have them drill one hole.',
          ok: 'By some miracle, the single hole hit. The thought of a miss still makes you sweat.',
          ng: 'The hole missed the shelter by a few meters. Redrilling cost a week.',
          tl: 'The search narrows to one hole, which misses. A week is lost' },
        { l: 'Resume clearing the collapsed tunnel', d: 'If the tunnel opens, everyone can be saved at once.',
          ok: 'The clearing inched forward. But the rock is still falling, and the danger is high.',
          ng: 'Another collapse struck during the clearing, and the work was called off.',
          tl: 'Tunnel clearing resumes, but the collapses continue' }
      ],
      hist: 'The rescue team drilled many search holes at once. Most missed, but on August 22, a drill broke into a tunnel. When it was pulled up, a note in red ink was tied to the bit: "Estamos bien en el refugio los 33" ("We are well in the shelter, the 33").',
      lesson: 'When uncertainty is high, trying more times can be surer than making one attempt more precise.',
      histTl: 'A search hole breaks through. "We are well in the shelter, the 33"'
    },
    {
      clock: 'August 22, 2010', title: 'First meal in 17 days',
      sit: 'All 33 men are confirmed alive. The shelter held only a few days of emergency food. They made it last 17 days, sharing a few spoonfuls of canned tuna at a time. Their only link to the surface is a hole a little over 10 cm wide. Supplies can go down it in long, thin capsules called "palomas" (doves).',
      rep: [
        { f: 'Medical team', t: 'Giving a lot of food suddenly after long starvation can cause "refeeding syndrome," which can be fatal.' },
        { f: 'Families', t: 'Please let them eat their fill, as soon as possible.' },
        { f: 'Group offering aid', t: 'Send plenty of solid food right away and they will regain their strength quickly.', why: 'Sudden heavy nutrition after starvation can shift the electrolytes in the blood and cause heart failure and other problems. The medical team restarted feeding in stages.' }
      ],
      inv: 'You also asked NASA experts for advice (NASA really did help with medical and psychological support). They agreed: feeding should restart in stages.',
      adv: {
        c: 'They held out for 17 days. As the families wish, let us send them a proper meal right away.',
        a: 'Rescue is a long way off. Save supplies and have them get by on the minimum.',
        d: 'The medical literature shows that a staged restart carries the lowest risk of complications.'
      },
      flawWhy: 'Minerva put the families\' feelings and good intentions first. She missed a medical danger that good intentions alone cannot see.',
      opt: [
        { l: 'Restart slowly with glucose and water', d: 'Start with fluids, glucose solution and nutrition gel. Move to solid food over several days.',
          ok: 'The miners began to slowly regain weight. No one suffered complications.',
          ng: 'Recovery was slow, but serious complications were avoided.' },
        { l: 'Send plenty of solid food now', d: 'Reward them for 17 days of hunger.',
          ok: 'Most recovered, but a few fell ill, and the medical team rushed to limit their food.',
          ng: 'Several men became seriously ill. The sudden meals were the cause.',
          tl: 'A sudden flood of food leaves several men seriously ill' },
        { l: 'Keep them on minimum rations until rescue', d: 'Supplies are limited. Save them.',
          ok: 'The miners held on, but their strength is slow to return.',
          ng: 'Among the weakened miners, illness and irritation spread.',
          tl: 'Supplies are kept to a minimum, and the miners do not regain strength' }
      ],
      hist: 'The medical team first gave glucose solution and fluids, then moved to solid food over several days. NASA doctors and psychologists joined in with advice. The palomas carried letters, medicine and even small video devices underground.',
      lesson: 'Decisions made out of kindness are the ones most likely to skip a check of expert risks.',
      histTl: 'Feeding restarts in stages. NASA helps on the medical side'
    },
    {
      clock: 'Late August 2010', title: 'Three rescue plans',
      sit: 'To bring the men out, you must drill a hole wide enough for a person. There are three options. Plan A uses a large-diameter drill to bore straight down. It is sure but slow. Plan B widens an existing search hole with a hammer drill. It might be fast. Plan C uses a huge oil-drilling rig. It might be the fastest, but it takes time to assemble. All of them cost enormous sums. The families want to know: "When will they get out?"',
      rep: [
        { f: 'Plan A team', t: 'It is reliable, but it will be finished in November or December at the earliest.' },
        { f: 'Plan B team', t: 'If we hit the steel supports underground, the drill could break.' },
        { f: 'Finance officer', t: 'Running all three plans at once triples the cost. One plan is enough.', why: 'In reality, Plan B got there first, even after its drill broke on the way. If they had picked only one plan, losing it would have cost weeks or months.' }
      ],
      inv: 'You checked the basis for each team\'s estimate. Every plan has several things that could stop it partway.',
      adv: {
        c: 'No one knows which will succeed. As the price of lives, three times the cost is not too much.',
        a: 'Put everything into the fastest plan, and get them out even one day sooner.',
        d: 'For the best cost-effectiveness, we should focus on Plan A, which has the highest chance of success.'
      },
      flawWhy: 'Laplace put cutting costs first. He did not multiply the chance that each plan would stall by the time that would be lost if it did.',
      opt: [
        { l: 'Focus on Plan A, the surest', d: 'Keep costs down and drill the reliable way.',
          ok: 'Plan A moved forward steadily. But the rescue now looks likely to slip into December.',
          ng: 'Even Plan A hit unexpectedly hard rock, causing more delays.',
          tl: 'The rescue is narrowed to one plan and slips to the end of the year' },
        { l: 'Run all three plans at once', d: 'It triples the cost, but only one has to succeed. Tell the families modestly: "It may take until Christmas."',
          ok: 'Plan B\'s drill hit a steel support and broke partway down. It was repaired and kept going, and broke through on October 9. That was more than two months earlier than the modest date you gave.',
          ng: 'Every plan ran into trouble. But because they ran in parallel, the work never stopped.' },
        { l: 'Bet on Plan C, maybe the fastest', d: 'Put everything into getting them out even one day sooner.',
          ok: 'Plan C took a long time to assemble, but once it started drilling, it was fast.',
          ng: 'Assembling Plan C\'s giant rig took far longer than expected.',
          tl: 'A bet on Plan C backfires. Assembly delays hold up the rescue' }
      ],
      hist: 'The government ran all three plans at once. At first, it told the families the rescue "might take until Christmas." Plan B\'s drill broke along the way, but it was the first to break through, on October 9.',
      lesson: 'When failure is not an option, choose backups over efficiency. Giving a modest forecast is also a choice that protects trust.',
      histTl: 'Three plans in parallel. Plan B breaks through first'
    },
    {
      clock: 'October 12, 2010', title: 'Who comes up first?',
      sit: 'The rescue capsule "Fénix" (Phoenix) is ready. It is about 53 cm wide. It will haul the men up one at a time, each trip taking more than ten minutes. First, a rescuer goes down. The question is the order in which to bring up the 33. Underground, shift foreman Luis Urzúa has kept the food rationed and the group in order for 69 days.',
      rep: [
        { f: 'Medical team', t: 'If someone falls ill inside the capsule, there is nothing we can do. The first few should be men who can handle trouble.' },
        { f: 'Technical team', t: 'The first few runs are the most likely to reveal problems with the capsule.' },
        { f: 'Public opinion', t: 'The whole world is watching the broadcast. Many say the weakest should come out first.', why: 'The first few runs were also test runs of the capsule. If something went wrong, a weakened man could not handle it. The medical team decided the first men should be strong and calm.' }
      ],
      inv: 'You went over the procedure with the technical team. If something fails in the first few runs, what matters is whether the man inside can report what is happening and deal with it himself.',
      adv: {
        c: 'We should save the weakest first. That is the natural, humane order.',
        a: 'The first runs double as capsule tests. Send the men who can still move well first.',
        d: 'In terms of fairness, drawing lots is the choice least likely to draw objections.'
      },
      flawWhy: 'Minerva\'s instinct feels right. But she missed the technical risk: the first few runs were also test runs of the capsule.',
      opt: [
        { l: 'Strong and calm first. The leader last', d: 'First, men who are fit and can report clearly. Then the weaker men. Urzúa, the leader, comes up last.',
          ok: 'Florencio Ávalos was the first to reach the surface. About 22 hours later, Urzúa, the last, stood on the surface and embraced the President. All 33 men were rescued.',
          ng: 'The capsule needed adjusting partway through. Even so, everyone reached the surface safely.' },
        { l: 'Bring up the weakest first', d: 'Save the lives most at risk, and save them for sure.',
          ok: 'The capsule worked without a problem, and the weaker men reached the surface safely.',
          ng: 'On the first run, the capsule stopped partway up, and the miner inside fell ill.',
          tl: 'The weakest come up first, and a capsule fault creates a dangerous situation' },
        { l: 'Draw lots', d: 'Use a fair method no one can complain about.',
          ok: 'No one complained about the order. Everyone reached the surface.',
          ng: 'The miner who drew first was unwell and could not handle a small fault in the capsule.',
          tl: 'The rescue order is decided by drawing lots' }
      ],
      hist: 'Late on the night of October 12, rescuer Manuel González went down first. The first miner brought up was Florencio Ávalos, who was fit and calm. The last was shift foreman Luis Urzúa. On October 13, all 33 men were rescued in about 22 hours. It was the 69th day since they were trapped.',
      lesson: 'The "right order" is not decided by values alone. It depends on what the biggest risk is at that moment.',
      histTl: 'Day 69: all 33 men rescued'
    }
  ]
};
