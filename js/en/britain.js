window.SCENARIOS_EN = window.SCENARIOS_EN || {};
window.SCENARIOS_EN.britain = {
  title: `Battle of Britain`,
  sub: `Hold the Skies over Britain`,
  year: `May to September 1940`,
  place: `Fighter Command Headquarters, Bentley Priory, England`,
  role: `Commander-in-Chief, RAF Fighter Command`,
  roleNote: `In Air Chief Marshal Hugh Dowding's position`,
  meters: [`Fighters and Pilots`, `Air Defense Network`, `Trust of Government and Public`],
  intro: [
    `May 1940. German forces have invaded the Netherlands, Belgium, and France all at once.`,
    `Britain's skies are guarded by the RAF's Fighter Command. Its commander has held the post for about four years and has built a system that guides fighters by radar and telephone.`,
    `But there are not enough fighters. New Spitfires and Hurricanes are arriving only a few at a time.`,
    `You are the Commander-in-Chief of Fighter Command. A summons to a meeting of the War Cabinet has just arrived.`
  ],
  endings: [
    { title: `The Skies Held`, text: `The Luftwaffe could not take Britain's skies. The fighters and pilots you preserved closed the road to invasion.` },
    { title: `A Narrow Defense`, text: `Britain's skies were defended, just barely. But Fighter Command was badly wounded, and the government's trust was shaken.` },
    { title: `The Skies Lost`, text: `Fighter Command has used up its strength. Britain's skies are falling to the Luftwaffe.` }
  ],
  epilogue: `In history, the Luftwaffe never won control of the skies over Britain, and on September 17, Hitler postponed the invasion of Britain indefinitely. In August, Prime Minister Churchill praised the fighter pilots: "Never in the field of human conflict was so much owed by so many to so few." Dowding left his command in November, but he later came to be recognized as the man who won the battle.`,
  turns: [
    {
      clock: `May 15, 1940`,
      title: `France Asks for More`,
      sit: `On May 10, German forces attacked in the west. German tanks came through the Ardennes forest and broke the French defenses. On the 15th, French Prime Minister Paul Reynaud telephoned Prime Minister Churchill and said, "We are beaten." France is asking Britain for many more fighters. Many Hurricanes have already been lost on the Continent. The War Cabinet is leaning toward saying yes.`,
      rep: [
        { f: `Fighter Command Operations`, t: `Home defense is estimated to need 52 squadrons. We are now down to the equivalent of 36.` },
        { f: `French Army Liaison Officer`, t: `With 10 more fighter squadrons, we can stop the German breakthrough.`, why: `German tanks had already broken deep through the French lines and were heading for the Channel. Fighters could not stop a breakthrough on the ground. France surrendered in June. Many of the fighters that fought on the Continent never came back. They were shot down or left behind in the retreat.` },
        { f: `Foreign Office`, t: `If we refuse to help now, the alliance with France may not survive.` }
      ],
      inv: `You gathered reports from the front. German tanks have already crossed the Meuse and are heading for the Channel. No number of fighter squadrons looks able to stop the breakthrough on the ground.`,
      adv: {
        c: `If we weaken home defense, this country is next. Show the numbers and stop any more squadrons from going.`,
        a: `If France falls, we are next. Give it everything here and stop them on the Continent.`,
        d: `Sending half of what they ask keeps expected losses low for both the alliance and home defense.`
      },
      flawWhy: `Ares relied on the report that sending fighters could stop the breakthrough. The battle on the ground was already nearly decided.`,
      opt: [
        { l: `Send the 10 squadrons France asks for`, d: `Do not abandon an ally. Give everything on the Continent.`,
          ok: `France was grateful. But the squadrons were lost one after another on the Continent, and home defense grew visibly thinner.`,
          ng: `The squadrons were lost along with their airfields in the chaos of the retreat. France's collapse did not stop.`,
          tl: `Britain sends 10 more fighter squadrons to France. Most are lost on the Continent.` },
        { l: `Put the numbers in writing and ask to stop sending fighters`, d: `Write down how many squadrons home defense needs and how many are left. Show the line beyond which the defense will break. Keep the Spitfires out of France.`,
          ok: `The War Cabinet cut back. Many of the fighters supporting France would fly across the Channel from bases in England.`,
          ng: `The flow was cut back, but the French were furious, and some friction with the Prime Minister remained.` },
        { l: `Send half of what France asks for`, d: `Keep face with the ally while keeping some defense at home.`,
          ok: `France accepted it with reluctance. Some of the squadrons made it back home during the retreat.`,
          ng: `The squadrons could not save France, and many never came back. Home defense was weakened too.`,
          tl: `Britain sends 5 more fighter squadrons. France cannot be saved, and home defense is weakened.` }
      ],
      hist: `On May 15, Dowding attended the War Cabinet and argued against sending more fighters. The next day, the 16th, he wrote to the Air Ministry. Home defense had been judged to need 52 squadrons, he pointed out, and he was down to the equivalent of 36. If more were sent, he warned, the defense of the country would be lost. After that, fewer new fighters went to France, and no Spitfires were sent to the Continent.`,
      lesson: `Keep your wish to help an ally separate from the line you must hold. When you show with numbers where things will break, the debate moves away from emotion.`,
      histTl: `Wrote to the Air Ministry opposing more fighters for France`
    },
    {
      clock: `Mid-July 1940`,
      title: `The Invisible Net`,
      sit: `France surrendered in June. In July, the Luftwaffe began attacking convoys passing through the English Channel. Radar stations called Chain Home line the south coast. They can spot formations more than 100 km away, but their readings of height and numbers are uncertain. Reports flow to headquarters at Bentley Priory, are sorted on a map, and go out to the group and sector control rooms. Once enemy planes cross the coast, the Observer Corps tracks them by eye and ear. The Navy wants fighters kept over the convoys at all times.`,
      rep: [
        { f: `Radar Station`, t: `We can see enemy planes forming up over the French coast. That gives us time to get fighters into the air.` },
        { f: `Navy`, t: `Keep fighters over the convoys all day and the enemy cannot touch them. You must have enough fuel and pilots for that.`, why: `Constant patrols wear down fuel, aircraft, and above all the pilots. Fighter Command had only so many pilots. The enemy could also wait for the patrol to run low on fuel and head home.` },
        { f: `No. 11 Group Headquarters`, t: `If we fight over the Channel, our pilots who are shot down will land in the sea. Our sea rescue is still weak.` }
      ],
      inv: `You checked the pilot rosters and flying hours. If constant patrols continue, many squadrons will be worn out in less than a month. The new pilots coming in are not fully trained.`,
      adv: {
        c: `Young pilots lost over the Channel cannot be replaced. Trust the radar and send them up only when needed.`,
        a: `Now that the enemy is coming out over the Channel, it is time to hit them in strength.`,
        d: `With constant patrols, the chance of meeting the enemy over the convoy is close to 100%.`
      },
      flawWhy: `Laplace maximized only the chance of meeting the enemy. He left out fuel, aircraft, and pilot fatigue, the things that wear down a little more every day.`,
      opt: [
        { l: `Keep standing patrols over the convoys`, d: `Fly fighters in shifts so the sky over the convoys is never empty.`,
          ok: `Convoy losses fell, and the Navy was satisfied. But pilot fatigue is piling up for all to see.`,
          ng: `The enemy struck in the gaps between patrols. The convoys were hit, and you were left with exhausted pilots.`,
          tl: `Fighter Command begins standing patrols over the convoys. The pilots are soon worn out.` },
        { l: `Leave it to radar and control, and scramble only when needed`, d: `Give the convoys only a few fighters. Take off after radar finds the enemy, and save the main force.`,
          ok: `Guided by radio from the control rooms, fighters appeared in front of the enemy formations again and again. The main force is being spared.`,
          ng: `Some convoys took heavy losses, and the Navy protested that "the RAF has abandoned the ships."` },
        { l: `Meet the enemy over the Channel in large formations`, d: `When the enemy comes out over the Channel, hit them with the main force all at once.`,
          ok: `You dealt the enemy a blow over the Channel. But many of your pilots who were shot down never came back from the sea.`,
          ng: `Enemy fighters were waiting. You lost many planes and pilots over the Channel.`,
          tl: `A large RAF formation seeks a decisive battle over the Channel. Many pilots are lost at sea.` }
      ],
      hist: `Dowding refused to commit his main force to guarding the Channel convoys. Radar, the Observer Corps, the headquarters operations room, and the sector controllers were all linked by telephone and radio. This network later became known as the "Dowding System." Fighters took off only once the enemy's position was known, so a limited force could guard a wide sky.`,
      lesson: `A defense that is sure to meet the enemy wears you down a little every day. If you have a way to find the enemy, save your strength for the moment you need it.`,
      histTl: `Saved the main force by using radar and ground control to intercept`
    },
    {
      clock: `Mid-August 1940`,
      title: `The Numbers Trap`,
      sit: `In August, the Luftwaffe stepped up its attacks on airfields and radar stations in the south. Every night, the squadrons send in their claims. Added together, they say the Luftwaffe must already have suffered huge losses. No. 11 Group, which guards the southeast, is exhausted. Meanwhile, No. 13 Group, which guards northern England and Scotland, has had fairly quiet days.`,
      rep: [
        { f: `No. 11 Group Headquarters`, t: `The fighting is too heavy. We want to swap our tired squadrons for squadrons from quiet areas.` },
        { f: `Intelligence`, t: `Adding up the claims, the Luftwaffe has little left. It has no strength to attack the north. We can send every northern squadron south.`, why: `In air combat, several pilots often claim the same enemy plane. Both sides counted far more kills than really happened. On August 15, the Luftwaffe attacked northeast England from bases in Norway and Denmark.` },
        { f: `Northern Air Defense`, t: `Across the North Sea, there are Luftwaffe units in Norway and Denmark too.` }
      ],
      inv: `You compared the claims with the number of enemy wrecks found on land. Far fewer wrecks have been found than claimed. The claims are very likely too high.`,
      adv: {
        c: `The young pilots in the south are at their limit. Bring down the squadrons from the quiet north and let them rest.`,
        a: `The enemy is already weak. Fly more sorties and settle this in one stroke.`,
        d: `Comparing claims with wrecks, the claims may be several times too high. We should discount the numbers.`
      },
      flawWhy: `Minerva cared so much for the pilots in the south that she took the report "the enemy has no strength to attack the north" at face value. That report was built on inflated claims.`,
      opt: [
        { l: `Send every northern squadron south`, d: `Pull strength out of the quiet north and gather it in No. 11 Group.`,
          ok: `The southern squadrons got a breather. But the northern sky was left empty, and you were simply lucky that the enemy did not come.`,
          ng: `On August 15, bombers from Norway and Denmark hit factories and airfields in the thinly defended northeast.`,
          tl: `Northern squadrons are moved south. On August 15, the thinly defended northeast is bombed.` },
        { l: `Keep the north defended and rotate the squadrons`, d: `Leave a set force in every region. Send tired squadrons north and bring northern squadrons south. Discount the kill claims.`,
          ok: `On August 15, Luftwaffe bombers came from Norway and Denmark to the northeast. The northern squadrons were waiting for them, and the enemy turned back after heavy losses.`,
          ng: `The northern defense worked, but No. 11 Group in the south grew even more exhausted.` },
        { l: `Trust the claims and go on the offensive in the south`, d: `The enemy is already weak. Fly more sorties and settle it in one stroke.`,
          ok: `You flew more sorties and hurt the enemy. But the next day, the enemy formations came back in the same numbers.`,
          ng: `The enemy's strength had not faded. Pilots who flew sortie after sortie were lost one by one.`,
          tl: `Trusting the kill claims, the RAF flies more sorties. The enemy is not worn down, and it becomes a war of attrition.` }
      ],
      hist: `Dowding kept some strength in the north and swapped tired squadrons with squadrons from quiet areas. On August 15, the Luftwaffe attacked northeast England from bases in Norway and Denmark. It was met in the air and took heavy losses. For the rest of the battle, the Luftwaffe never again made a large daylight raid on the north. Both sides had claimed far more kills than really happened.`,
      lesson: `The more a number flatters you, the more you should check it against other numbers. Plan as if the reports may be bigger than reality.`,
      histTl: `Kept the north defended and beat off the August 15 raid on the northeast`
    },
    {
      clock: `Early September 1940`,
      title: `The Airfields Burn`,
      sit: `Since late August, the Luftwaffe has been hammering No. 11 Group's sector airfields. Biggin Hill, Kenley, Hornchurch, and others have been bombed again and again, and operations rooms and telephone lines have been damaged. New aircraft are coming from the factories, but there are not enough experienced pilots. Many of the new pilots reached the front after only short training.`,
      rep: [
        { f: `No. 11 Group Headquarters`, t: `The airfields are battered, but we are filling the craters in the runways and working from emergency operations rooms.` },
        { f: `Fighter Command Personnel`, t: `The less experienced the pilot, the more likely he is shot down in his first few sorties.` },
        { f: `A Squadron Leader at the Front`, t: `Even new pilots can fight if we have enough of them. Cut training short and send them all south now.`, why: `In the summer of 1940, new pilots with short training were often shot down in their first few sorties. Numbers without experience did not make a fighting force.` }
      ],
      inv: `You checked the losses squadron by squadron. Most of the losses are pilots who have only just reached the front. The shorter the training, the more are lost.`,
      adv: {
        c: `We cannot keep losing young men along with the airfields. Pull back north of the Thames and regroup.`,
        a: `This is the decisive moment. Send everyone who can fly south, including those still in training.`,
        d: `Comparing losses and experience by squadron, losses are lowest when experienced pilots are concentrated at the front.`
      },
      flawWhy: `Ares measured strength only in numbers. Inexperienced pilots filled the line on paper but were quickly lost.`,
      opt: [
        { l: `Cut training short and send everyone south`, d: `Gather everyone who can fly, including pilots still in training, at the southeastern front.`,
          ok: `The front-line squadrons are up to strength. But losses among the new pilots keep rising.`,
          ng: `The new pilots were shot down one after another. Even the next generation that should have been trained was lost.`,
          tl: `New pilots still in training are rushed to the front. Losses soar, and Fighter Command nearly breaks.` },
        { l: `Sort the squadrons into three grades and put experience at the front`, d: `Squadrons full of experienced pilots hold the southeast. Squadrons in other areas train new pilots and send them forward once they are ready.`,
          ok: `The front-line squadrons held on. On September 7, the Luftwaffe switched its main target to London, and the airfields gained time to recover.`,
          ng: `The burden on the experienced pilots grew even heavier. Even so, the front did not break.` },
        { l: `Pull back to airfields north of the Thames`, d: `Leave the battered southern airfields and regroup in the north, where enemy fighters can barely reach.`,
          ok: `The pilots got some rest. But over the southeast, it now took longer to reach the enemy bombers.`,
          ng: `The airfields and radar stations in the southeast were bombed with almost no defense.`,
          tl: `No. 11 Group pulls back north of the Thames. The southeastern skies and airfields are left to the Luftwaffe.` }
      ],
      hist: `In early September, Dowding set up a scheme that sorted squadrons into three grades: A, B, and C. A squadrons held the southeastern front. C squadrons trained new pilots in quieter areas, and their experienced pilots were sent to the front. On September 7, the Luftwaffe switched its main target to London. Londoners paid a heavy price, but No. 11 Group's airfields gained time to recover.`,
      lesson: `When people are short, think less about filling the numbers and more about where you place the experienced ones.`,
      histTl: `Sorted squadrons into A, B, and C and put experienced pilots at the front`
    },
    {
      clock: `Mid-September 1940`,
      title: `The Big Wing`,
      sit: `The bombing of London has begun. Air Vice-Marshal Keith Park of No. 11 Group sends up small formations of one or two squadrons quickly, to hit the enemy before the bombs fall. Air Vice-Marshal Trafford Leigh-Mallory of No. 12 Group, just to the north, has formed a large wing of three to five squadrons at Duxford, the "Big Wing." He argues for dealing a big blow all at once. The Big Wing takes time to form up, and when No. 11 Group has asked it to guard its airfields, it has sometimes arrived too late. The quarrel between the two men has reached the Air Ministry. Reports keep coming in that the Germans are preparing an invasion in the Channel ports.`,
      rep: [
        { f: `No. 11 Group Headquarters`, t: `The enemy can reach London from the French coast in a short time. There is no time to form a big wing.` },
        { f: `No. 12 Group Headquarters`, t: `The Big Wing is shooting down several times as many enemy planes as the small formations.`, why: `The Big Wing's claims were especially prone to inflation, because many pilots reported hitting the same enemy plane. Later studies found the real results were far smaller than claimed.` },
        { f: `Air Ministry`, t: `Some in the Ministry say the Commander-in-Chief is letting the quarrel between the two men run on.` }
      ],
      inv: `You compared the Big Wing's combat reports with enemy wrecks. Many of the claimed kills could not be confirmed. The Big Wing took a long time to form up, and it often caught the enemy only on the way home after the bombs had fallen.`,
      adv: {
        c: `No. 11 Group's method is holding the front. You should state clearly that the Big Wing's job is to guard the places No. 11 Group asks it to.`,
        a: `A big fist hits hardest. Switch No. 11 Group to big wings too.`,
        d: `Both methods are getting results. Until we have the data to compare them, the rational choice is not to change anything.`
      },
      flawWhy: `Laplace treated "waiting for the data" as neutral. But not deciding is also a decision, and the quarrel kept damaging teamwork at the front.`,
      opt: [
        { l: `Adopt the Big Wing everywhere`, d: `All fighters, including No. 11 Group, form large wings before engaging.`,
          ok: `The big wings hurt the enemy. But while they were forming up, the bombs had already fallen.`,
          ng: `Before the big wings could gather, the enemy bombers hit London and the airfields and flew home.`,
          tl: `Fighter Command switches entirely to big wings. Interceptions come late, and the bombers reach London unopposed.` },
        { l: `Call in both men and set their roles clearly`, d: `No. 11 Group's small formations lead the interceptions. No. 12 Group's Big Wing guards the airfields and north London when No. 11 Group asks. Issue it as a written order.`,
          ok: `No. 12 Group began guarding the skies over No. 11 Group's airfields. On September 15, the two groups worked together to meet the enemy over London.`,
          ng: `Leigh-Mallory obeyed the order, but resented it. Criticism of the Commander-in-Chief at the Air Ministry grew stronger.`,
          tl: `The Commander-in-Chief sets both groups' roles by order. Teamwork improves, and the quarrel dies down.` },
        { l: `Leave each man to his own methods`, d: `Each group commander knows his own front. Let each fight his own way.`,
          ok: `On September 15, No. 11 Group met the enemy with one small formation after another, and in the afternoon the Duxford Big Wing also appeared over London. The Luftwaffe lost about 60 aircraft, and it became clear it could not take Britain's skies.`,
          ng: `The battle of September 15 was won. But the quarrel kept smoldering, and the Air Ministry began to doubt the Commander-in-Chief's leadership.` }
      ],
      hist: `Dowding did not step in firmly to settle the quarrel. On September 15, the Luftwaffe launched two large daylight attacks on London. No. 11 Group's small formations met them again and again, and the Duxford Big Wing joined in. At the time, Britain announced 185 kills, but actual German losses were about 60 aircraft. Even so, it was clear the Luftwaffe could not take Britain's skies. The day is now marked as "Battle of Britain Day." The quarrel went on, and Dowding left his command in November. Park also left No. 11 Group in December.`,
      lesson: `If you settle a quarrel between subordinates by "leaving it to the front," the organization is scarred even when you win. Setting roles is the commander's job.`,
      histTl: `Won the great air battle over London on September 15`
    }
  ]
};
