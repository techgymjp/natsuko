window.SCENARIOS_EN = window.SCENARIOS_EN || {};
window.SCENARIOS_EN.delaware = {
  title: `Crossing the Delaware`,
  sub: `Across the Frozen River`,
  year: `December 1776`,
  place: `West Bank of the Delaware River, Pennsylvania`,
  role: `Commander in Chief of the Continental Army`,
  roleNote: `In George Washington's position`,
  meters: [`Army Preserved`, `Morale and Public Opinion`, `Initiative`],
  intro: [
    `December 1776. Six months after the Declaration of Independence, the Continental Army has lost battle after battle.`,
    `It lost New York, was driven out of New Jersey, and escaped across the Delaware River into Pennsylvania.`,
    `Many soldiers' enlistments run out on December 31. When the new year comes, the army itself may disappear.`,
    `You are the Commander in Chief of the Continental Army. Across the river, a garrison of Hessian soldiers holds Trenton.`
  ],
  endings: [
    { title: `The Flame of Independence Lives`, text: `One strike across a frozen river lit a fire in an army and a people who were close to giving up. The war goes on, but no one says "it's over" anymore.` },
    { title: `An Army That Held On`, text: `The army survived the winter. But the news of victory was small, and the spring campaign looks hard.` },
    { title: `By the Frozen River`, text: `The soldiers went home, and the army withered away. The hope of independence froze like the winter river.` }
  ],
  epilogue: `In history, at the Battle of Trenton on the morning of December 26, the Continental Army captured about 900 Hessian soldiers. American losses were very light. At the end of the year, Washington crossed the river again, promised a bounty, and asked his men to stay six more weeks. Many stayed. He went on to win at Assunpink Creek on January 2, 1777, and at Princeton on January 3, and the spirit of the fight for independence came back to life.`,
  turns: [
    {
      clock: `Mid-December 1776`,
      title: `A Winter Offensive`,
      sit: `On the Pennsylvania bank, the Continental Army is down to a few thousand men fit to fight. Winter is the season when armies rest. Most of the British army has gone into winter quarters, leaving small garrisons scattered across New Jersey. Across the river at Trenton, Colonel Johann Rall commands about 1,500 Hessians. The Continental Congress has left Philadelphia. The enlistments are about to run out.`,
      rep: [
        { f: `Militia Scouts`, t: `New Jersey militia are skirmishing around Trenton almost every night. The Hessians are always on alert and barely sleeping.` },
        { f: `Aide-de-Camp`, t: `Most of the men will stay on until spring even after their terms run out. There is no need to rush.`, why: `Soldiers at the time took it for granted that they would go home when their terms ended. They had little reason to stay with an army that kept losing. In fact, Washington only kept many of them by promising a bounty at the end of the year.` },
        { f: `Supply Officer`, t: `Some men have no shoes. We are short of blankets too.` }
      ],
      inv: `You talked with the commander of each regiment. Many soldiers say openly, "When my term is up, I'm going home." When the new year comes, most of the army could be gone.`,
      adv: {
        c: `The men are exhausted. We should rest the army in winter quarters and prepare for spring. Most of them will stay on even after their terms end.`,
        a: `Now is the time to attack. An enemy in winter quarters lets its guard down. Let's hit Trenton, the closest target.`,
        d: `A major battle has a low chance of success. More small militia raids, while we wait for the enemy to wear down, give a smaller expected loss.`
      },
      flawWhy: `Minerva relied on an optimistic report that "the men will stay." She missed the deadline: after the new year, there might be no army left to rest.`,
      opt: [
        { l: `Plan a winter surprise attack on Trenton`, d: `Cross the river at three points and strike the Trenton garrison before dawn. Share the plan only with your officers.`,
          ok: `It was decided: the army would cross on the night of December 25. The password was "Victory or Death." The men's faces changed a little.`,
          ng: `The plan was set, but preparing the boats and cannons is falling behind. Still, there is no turning back.` },
        { l: `Go into winter quarters and wait for spring`, d: `Rest the men and rebuild supplies. Wait for the thaw before fighting again.`,
          ok: `The men got some rest. But the mood of defeat did not change, and no new recruits came.`,
          ng: `When the new year came, soldiers whose terms had ended went home one after another. The army shrank to about half its size.`,
          tl: `The Continental Army goes into winter quarters. Many soldiers leave in the new year.` },
        { l: `Keep the militia raiding`, d: `Keep the main army in place and wear the enemy down with small militia raids.`,
          ok: `The enemy grew tired, but there was no news of a big victory. It was not enough to hold the men's hearts.`,
          ng: `The militia raids fizzled out. The British are preparing a spring offensive.`,
          tl: `The main army stays put. Only small militia skirmishes continue.` }
      ],
      hist: `Washington decided on a winter offensive. The plan was to cross the river at three points and attack the Trenton garrison. The password was "Victory or Death." Around this time, Thomas Paine's "The American Crisis" was published. It is said that the passage beginning "These are the times that try men's souls" was read aloud to the troops.`,
      lesson: `"Rest and rebuild" only works when time is on your side. Count the cost of waiting first.`,
      histTl: `Decided on a winter surprise attack on Trenton`
    },
    {
      clock: `December 25, 11:00 p.m.`,
      title: `The Frozen River`,
      sit: `At McConkey's Ferry, the main force of about 2,400 men has begun to cross. A regiment made up largely of fishermen from Marblehead, Massachusetts, is rowing the big flat-bottomed Durham boats. Chunks of ice are floating down the river, and as the night goes on, snow and sleet blow in. The plan was to finish crossing by midnight, but the 18 cannons and the horses are slowing everything down.`,
      rep: [
        { f: `Artillery Officer`, t: `It will take a few more hours to get every cannon across. But if the snow soaks the muskets, the cannons will be all we can count on.` },
        { f: `Boatman`, t: `The ice keeps slamming into the boats. Even so, we can still get them across.` },
        { f: `Local Resident`, t: `They say the enemy at Trenton knows about tonight's crossing and is waiting for you.`, why: `The Hessians had been put on alert again and again by militia raids, but they did not know about the crossing of the main army. Earlier that night, a small raid took place, and it is said the Hessians took it for the rumored attack and relaxed afterward.` }
      ],
      inv: `You sent scouts to the far bank. Around Trenton, there is no sign that the enemy is preparing for a large force. The snow also makes it hard to see.`,
      adv: {
        c: `Leave the cannons behind. The men alone can cross faster and arrive before dawn.`,
        a: `We should keep going even if we are late. In this snow, the cannons are the only weapons we can rely on.`,
        d: `There is a report that the enemy is waiting for us. Together with the delay, the chance of a successful surprise drops below 30%. I recommend calling it off tonight.`
      },
      flawWhy: `Laplace put an unconfirmed rumor straight into his probability estimate. He also left out the cost of losing the army at the end of the year.`,
      opt: [
        { l: `Finish the crossing with the cannons, even if late`, d: `The schedule has fallen apart, but get the whole army and the cannons across before marching.`,
          ok: `Around 3 a.m., the whole army and its 18 cannons were across. It was about three hours behind schedule, but the snow also blinds the enemy.`,
          ng: `By the time the crossing was done, dawn was near. The men were frozen, and some nearly fell into the river.` },
        { l: `Call it off tonight and go back`, d: `The surprise depends on things that have fallen apart. Bring the army back safely and wait for another chance.`,
          ok: `The army made it back safely. But the end of the year will come before another chance does.`,
          ng: `On the way back, the ice blocked the boats, and the army was split between the two banks.`,
          tl: `The crossing is called off halfway. The chance for a surprise attack is lost.` },
        { l: `Leave the cannons and rush the men across`, d: `Leave the heavy cannons and horses behind and try to arrive before dawn with the men alone.`,
          ok: `The men crossed quickly. But no one knows how many snow-soaked muskets will fire.`,
          ng: `The snow soaked the muskets, and many men could not fire. The cannons they could have relied on were left across the river.`,
          tl: `The army crosses without its cannons. Snow-soaked muskets fail in the fight.` }
      ],
      hist: `The crossing ran about three hours late. The whole army was across around 3 a.m. and began marching around 4 a.m. Colonel John Glover's Marblehead regiment rowed the boats, and Colonel Henry Knox of the artillery directed the crossing. All 18 cannons made it to the far bank.`,
      lesson: `When the schedule falls apart, go back to the purpose of the mission. Sometimes turning back costs more than the delay itself.`,
      histTl: `Crossed the Delaware with the cannons, about three hours late`
    },
    {
      clock: `December 26, 4:00 a.m.`,
      title: `No Help Is Coming`,
      sit: `Soon after the march began, news arrived. General James Ewing's force, which was to cross opposite Trenton, could not get over because of the ice. Farther south, Colonel John Cadwalader's force also seems to have turned back after failing to get its cannons across. Trenton is about 14 km (9 miles) away. The plan to arrive before dawn is gone. You will have to attack in daylight.`,
      rep: [
        { f: `Messenger from the Right Column`, t: `The snow and sleet have soaked the powder in many of the muskets.` },
        { f: `Scout`, t: `Last night, another of our patrols apparently attacked an outpost on the edge of Trenton. The enemy may be on higher alert.` },
        { f: `Local Guide`, t: `The Hessians in Trenton are passed out drunk from Christmas. They won't wake up until noon.`, why: `The story that "the Hessians were drunk" spread in later years, but the evidence for it is weak. Most historians believe the soldiers were worn out from days of alerts, not passed out drunk. In fact, the Hessians quickly tried to form ranks and fight back.` }
      ],
      inv: `You checked with militiamen who had come back from Trenton. The Hessians are tired from days of alerts, but no one has seen them passed out drunk. Sentries are posted.`,
      adv: {
        c: `There are no reinforcements, the muskets are wet, and dawn is coming. If we care about the men's lives, we should turn back now.`,
        a: `The enemy is passed out drunk. Forget about formations. Let's all rush into the town at once.`,
        d: `If we split into two columns and block the exits from the town, we can cut off their escape. If the muskets won't fire, relying on cannons and bayonets gives the highest expected value.`
      },
      flawWhy: `Ares based his advice on the guide's story that "the enemy is passed out drunk." This popular legend, which spread later, has no solid evidence behind it.`,
      opt: [
        { l: `Advance in two columns and attack with bayonets`, d: `Split the army between the northern road and the river road and close on the town from both sides. If the muskets won't fire, fight with bayonets and cannons.`,
          ok: `The two columns marched on silently through the snow. Around 8 a.m., they reached the edge of the town at almost the same time.`,
          ng: `The march fell even further behind, and some men collapsed from the cold. Still, the columns closed in on the town.` },
        { l: `Call off the attack since no help is coming`, d: `Two thirds of the plan have fallen apart. Take the tired men back to the river.`,
          ok: `The army returned unharmed. But the freezing march achieved nothing.`,
          ng: `On the way back, enemy cavalry spotted the army on a road now bright with daylight.`,
          tl: `The attack is called off after the other crossings fail. The tired army turns back.` },
        { l: `Rush the town with everyone, no formation`, d: `Strike while the enemy is drunk. Charge in at once without stopping to rest.`,
          ok: `The army got into the town. But the enemy was not drunk at all, and scattered American units ended up in gunfights in the alleys.`,
          ng: `The Hessians quickly formed ranks. The disorganized Americans were pushed back.`,
          tl: `The army charges into Trenton without forming up. The Hessians strike back.` }
      ],
      hist: `Washington split the army in two. General Nathanael Greene's column took the northern road, and General John Sullivan's column took the river road. When word came that the muskets were wet, Washington is said to have replied, in effect, that they should use the bayonet, because he was determined to take Trenton. It is also said that some soldiers died of the cold during the march.`,
      lesson: `The more convenient a rumor is, the more it is worth checking. Wanting to believe the enemy is weak leads to shortcuts in planning.`,
      histTl: `Marched on Trenton in two columns with no reinforcements`
    },
    {
      clock: `December 26, 8:00 a.m.`,
      title: `Trenton`,
      sit: `Around 8 a.m., the two columns reached the edge of the town at almost the same time. Hessian sentries shouted, and drums began to beat. If you take the high ground north of town, your cannons can look straight down King Street and Queen Street, the town's main streets. Colonel Rall is gathering his men to counterattack.`,
      rep: [
        { f: `Artillery Officer`, t: `If we put the cannons on the high ground to the north, we can fire down both streets from end to end.` },
        { f: `Scout on the Left`, t: `A large enemy force is coming to counterattack from across the bridge to the south. If we spread the encirclement too wide, we'll be caught in a pincer.`, why: `Because Ewing's force could not cross, there were no enemy reinforcements beyond the bridge. The men heading south were some of the Hessians trying to escape from the town.` },
        { f: `Captain at the Front`, t: `The Hessians are coming out into the streets and trying to form ranks.` }
      ],
      inv: `You sent a mounted messenger toward the bridge to the south. There are no enemy reinforcements across it. All that can be seen are small groups of Hessians running away.`,
      adv: {
        c: `There is a report that enemy reinforcements are coming from the south. Don't spread the encirclement. Let the fleeing enemy go and keep our losses down.`,
        a: `Let's storm the houses one by one and drive every last enemy out of town.`,
        d: `Firing from the high ground does the most damage to an enemy standing in the streets. If we also block the eastern exit, fewer of them will get away.`
      },
      flawWhy: `Minerva was swayed by an unconfirmed report of "reinforcements." Any enemy you let escape here is an enemy you will fight again another day.`,
      opt: [
        { l: `Put cannons on the high ground and block the exits`, d: `Fire down the streets from the high ground to the north, and send men around to the eastern exit to cut off the escape.`,
          ok: `Colonel Rall's counterattack broke apart under the cannon fire. He was mortally wounded, and the Hessians surrendered in an orchard east of town. The fighting was over in about an hour.`,
          ng: `You took the town, but several hundred Hessians escaped across the bridge to the south.` },
        { l: `Storm the houses and take them one by one`, d: `Take the buildings one at a time to drive every enemy out of town.`,
          ok: `You took the town, but lost many men fighting in the narrow alleys.`,
          ng: `The house-to-house fighting dragged on, and many of the Hessians escaped to the south.`,
          tl: `House-to-house fighting. The Continental Army suffers heavy casualties.` },
        { l: `Loosen the ring and let the fleeing enemy go`, d: `Keep your men close to meet reinforcements from the south, and focus on taking the town.`,
          ok: `You took the town with few losses. But many Hessians got away, and there are few prisoners.`,
          ng: `The escaped Hessians joined the British at Princeton and are getting ready to counterattack.`,
          tl: `The town is taken with an escape route left open. Many Hessians get away.` }
      ],
      hist: `The Continental Army placed its cannons on the high ground to the north and broke up the ranks the Hessians tried to form in the streets. Colonel Rall was mortally wounded, and the Hessians surrendered east of town. Some twenty Hessians were killed, and about 900 were taken prisoner. American casualties were very light. Among the wounded was James Monroe, a future president. Meanwhile, several hundred Hessians escaped across the bridge to the south.`,
      lesson: `Don't assume what the enemy will do. Block the moves they want to make before they make them. Using terrain and firepower can keep your own losses low.`,
      histTl: `Broke the counterattack with cannons on the high ground and took about 900 prisoners`
    },
    {
      clock: `December 26, Noon`,
      title: `After the Victory`,
      sit: `The town is yours. You have about 900 prisoners, along with cannons and supplies. But the men marched all night, are frozen, and are completely worn out. The other two forces never crossed, so yours is the only army on this side of the river. There are British troops at Princeton. You also have to decide how to treat the prisoners. There are stories that Continental soldiers who surrendered earlier were treated harshly by the enemy.`,
      rep: [
        { f: `Officer Guarding the Prisoners`, t: `Some of the men want to pay the prisoners back for what has been done to us.` },
        { f: `Army Surgeon`, t: `Many men have frostbitten feet. If they march any farther, some of them could die.` },
        { f: `Messenger`, t: `They say Colonel Cadwalader's and General Ewing's forces will cross the river and join us today.`, why: `Both forces still had not crossed that day. Cadwalader's force crossed on the 27th, and by then Washington's main army was already back in Pennsylvania.` }
      ],
      inv: `You checked where the messenger's story came from. The latest word from the southern forces is that they still have not crossed. There is no hope of joining up today.`,
      adv: {
        c: `The men are at their limit. Let's take the prisoners back to the safe bank. If we treat the prisoners decently, people will see that our cause is just.`,
        a: `Let's take Princeton too while we have the momentum. The enemy still doesn't know what happened.`,
        d: `If the reinforcements join us today, our strength will nearly double. Giving up a town we just took is inefficient.`
      },
      flawWhy: `Laplace ran his numbers on the report that "reinforcements are coming" without checking it. He also left out the state of the exhausted men and the movements of the British troops nearby.`,
      opt: [
        { l: `Take the prisoners back across the river and treat them humanely`, d: `Withdraw to Pennsylvania the same day. Forbid any revenge against the prisoners.`,
          ok: `The army crossed the river again with its prisoners. The prisoners were marched through the streets of Philadelphia, and people saw a victory for the first time in a long while.`,
          ng: `The crossing back was another struggle against ice and cold, and more men could no longer walk from frostbite.` },
        { l: `Hold Trenton and wait for reinforcements`, d: `Use the captured town as a foothold and wait for the other forces to join you.`,
          ok: `The reinforcements eventually came across. But holding the town with exhausted men was a tightrope walk.`,
          ng: `No reinforcements came, and the British closed in from Princeton. The exhausted men could not hold the town.`,
          tl: `The army holds Trenton, but no reinforcements arrive and the British close in.` },
        { l: `March straight on to Princeton`, d: `Ride the momentum and hit the next garrison too. Leave the prisoners behind the lines.`,
          ok: `The enemy at Princeton also fell back. But men collapsed one after another, and the army was pushed past its limit.`,
          ng: `The exhausted men could go no farther. A British counterattack wiped out the gains of the victory.`,
          tl: `The army marches on Princeton without rest. The exhausted troops are counterattacked.` }
      ],
      hist: `Washington took the prisoners back to Pennsylvania the same day. He is said to have ordered that they be treated humanely. The prisoners were marched through Philadelphia, and some of them later settled in America. At the end of the year, Washington crossed the river again, and on January 3 he won a victory at Princeton.`,
      lesson: `Right after a victory is when you most need to count your own limits. What secures a win is not the next move, but not losing what you have gained.`,
      histTl: `Withdrew with the prisoners and treated them humanely`
    }
  ]
};
