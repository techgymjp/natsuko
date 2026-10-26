window.SCENARIOS_EN = window.SCENARIOS_EN || {};
window.SCENARIOS_EN.armada = {
  title: `The Spanish Armada`,
  sub: `Ten Days in the Channel`,
  year: `July 1588`,
  place: `From Plymouth, southwest England, up the English Channel`,
  role: `Lord High Admiral of England`,
  roleNote: `In the position of Lord Howard of Effingham (Charles Howard)`,
  meters: [`Fleet Strength`, `Safety of England`, `Lives and Morale of the Men`],
  intro: [
    `1588. King Philip II of Spain has decided to invade England.`,
    `About 130 ships of the Armada, carrying some 30,000 soldiers and sailors, are heading north. The plan is to join the Duke of Parma's army in Flanders and carry it across the Channel.`,
    `England's fleet is made up of Queen Elizabeth I's warships and merchant ships gathered for the fight.`,
    `You are Lord Howard of Effingham, Lord High Admiral of England. Dates follow the Julian calendar used in England at the time.`
  ],
  endings: [
    { title: `The Channel Held`, text: `The Armada never came near the English shore again. Not one of your ships was sunk, and no enemy soldier landed on English soil.` },
    { title: `A Narrow Defense`, text: `You stopped the invasion. But your fleet was battered, and much of the Armada sailed away unharmed. Fear of another attack remains.` },
    { title: `An Army Crosses the Channel`, text: `Decision by decision, you handed the Channel to the enemy. The Duke of Parma's army is closing in on the English coast.` }
  ],
  epilogue: `In history, the Armada tried to sail home around Scotland and Ireland and lost many ships to storms and wrecks. Only about half the ships that set out are said to have made it back to Spain, and thousands of soldiers and sailors died. Apart from the fireships, England lost no ships in the fighting. But after the battle, many English sailors died of disease and hunger. Howard is said to have kept pressing the government to treat his men better.`,
  turns: [
    {
      clock: `July 19, afternoon`,
      title: `In Plymouth Harbor`,
      sit: `Word has come that the Armada has appeared off the Lizard in Cornwall. Beacons are being lit one after another along the coast. But the main English fleet is inside Plymouth harbor. The wind is blowing from the southwest straight into the harbor, and the tide is against you. If you stay, the enemy could trap you inside. Your vice admiral, Francis Drake, and the other captains are waiting for your orders.`,
      rep: [
        { f: `Captain of a scout ship`, t: `The enemy fleet is huge, and it is sailing east in a very tight formation.` },
        { f: `A harbor pilot`, t: `If we warp the ships out tonight by hauling on the anchors, we can get out of the harbor even against the wind. But it is brutal work.` },
        { f: `A coastal lookout`, t: `The enemy is coming straight for Plymouth. If we go out, the great fleet will surround us.`, why: `The Spanish fleet held its formation and kept sailing east up the Channel. Joining the Duke of Parma was its top priority. If the English fleet had stayed in port, it would have been trapped downwind and lost the chance to chase the enemy from behind.` }
      ],
      inv: `You had another lookout post check. The enemy shows no sign of turning toward the harbor. It is keeping its formation and heading east.`,
      adv: {
        c: `If that great fleet surrounds us outside the harbor, we cannot win. We should stay here and fight alongside the harbor's guns.`,
        a: `We must get out tonight and work around to windward of them. If we get behind them, we become the attackers.`,
        d: `The enemy outnumbers our main fleet. Joining up with the eastern squadron first gives a higher probability of victory.`
      },
      flawWhy: `Minerva believed the lookout's report that the enemy would charge into the harbor. In fact, the enemy was sailing east. Staying in port would have cost the fleet its fighting position.`,
      opt: [
        { l: `Stay in port and defend with the harbor guns`, d: `Meet the enemy inside the bay, covered by the harbor's guns.`,
          ok: `The enemy never came. It sailed east in formation, and your fleet fell far behind.`,
          ng: `While you sat trapped downwind in port, the enemy moved deep into the Channel. You have no way to catch up.`,
          tl: `The English fleet stays in Plymouth. The Armada sails east unopposed.` },
        { l: `Leave port tonight and get to windward`, d: `Haul the ships out of the harbor all night. Turn at sea and come out behind the enemy, upwind of them.`,
          ok: `By the morning of the 21st, most of the fleet was upwind of the enemy. Your fleet was now the one giving chase.`,
          ng: `Some ships struggled to get out of the harbor. Still, the main fleet worked around behind the enemy.` },
        { l: `Fall back east and join the other squadron`, d: `Join the squadron guarding the Strait of Dover, then fight with your full numbers.`,
          ok: `Your numbers are complete. But you have handed the western half of the Channel to the enemy.`,
          ng: `Hurrying east, you ended up ahead of the enemy. They took the wind from you, and you were left in a poor position to fight.`,
          tl: `The English fleet falls back east. The Armada moves freely through the western Channel.` }
      ],
      hist: `Howard and Drake's ships were hauled out of the harbor through the night of the 19th and the next day. Making a wide turn at sea, they were upwind of the enemy by the morning of the 21st. A famous story says that when the enemy was sighted, Drake finished his game of bowls before setting sail. But the tale spread in later times, and no one knows if it is true.`,
      lesson: `When you hear what the enemy is doing, think about what it means for your own position. Choosing to play it safe can mean giving up the very ground you need to fight from.`,
      histTl: `Hauled out of port overnight and got upwind of the enemy`
    },
    {
      clock: `July 23, off Portland Bill`,
      title: `Close In or Keep Away?`,
      sit: `Fighting has gone on in the Channel since the 21st. The enemy will not break its tight, crescent-like formation. The big Spanish ships stand high out of the water and carry many soldiers. If it comes to grappling and boarding, they have the edge. Your ships are smaller and faster and can fire their guns from a distance. But at long range, your cannon have not done enough damage to sink anything. Ammunition is running low too.`,
      rep: [
        { f: `Master gunner`, t: `At this range the shot reaches them, but it can't punch through those thick hulls. We need to get closer for it to work.` },
        { f: `One of Drake's men`, t: `From the night of the 21st into the next morning, we took the Rosario, a big Spanish ship that fell behind the line. We got the gunpowder she carried too.` },
        { f: `Captain of a boarding party`, t: `The Spanish ships are slow, and their soldiers are weak from seasickness. Board them and they are easy prizes.`, why: `The big Spanish ships carried large numbers of soldiers used to fighting on land. Boarding was exactly the kind of fight the Spanish did best.` }
      ],
      inv: `You questioned the crew of the captured Rosario. They say the big ships each carry hundreds of soldiers. In a boarding fight, you would be at a disadvantage.`,
      adv: {
        c: `We are nearly out of ammunition. Let us pull back for now and wait for supplies before we fight again.`,
        a: `The enemy is weak. Close in at once, board them, and take their flagship.`,
        d: `Keeping our distance minimizes expected losses. If we target only ships that fall out of line, we can steadily cut their numbers.`
      },
      flawWhy: `Ares took the report that "their soldiers are weak" at face value. On the Spanish decks, crowds of soldiers were waiting for a boarding fight.`,
      opt: [
        { l: `Close in fast and board them`, d: `Grapple and storm aboard to capture the big enemy ships.`,
          ok: `You took one ship, but many of the men who boarded were killed or wounded. You learned the hard way how many soldiers they had.`,
          ng: `Enemy soldiers swarmed back across onto your ship. The ship was taken.`,
          tl: `The English fleet tries to board and loses ships to the Spanish.` },
        { l: `Keep your distance and pick off stragglers`, d: `Use your speed to stay out of reach, and concentrate fire on ships that fall out of line.`,
          ok: `You have taken no serious losses. The enemy formation holds, but the invasion is slowing down.`,
          ng: `The enemy formation is solid, and your guns are doing little. Your ammunition is lower still.` },
        { l: `Pull back and wait for ammunition`, d: `Stop fighting and wait for powder and shot to arrive from shore.`,
          ok: `Your ammunition was restocked. But in the meantime, the enemy moved far up the Channel.`,
          ng: `The supplies were late, and you nearly lost sight of the enemy. Fear is spreading that they will land off the Isle of Wight.`,
          tl: `The English fleet stops its pursuit. The Armada reaches the Isle of Wight unopposed.` }
      ],
      hist: `The English fleet fought off Plymouth on the 21st, off Portland Bill on the 23rd, and off the Isle of Wight on the 25th. It kept fighting at a distance with its guns. It could not sink the big enemy ships, but it kept steady pressure on their formation. On the night of the 21st, Drake, who was supposed to lead the pursuit, left his post, and the next morning he captured the Rosario, which had fallen behind.`,
      lesson: `Don't fight on the ground your opponent knows best. Hold the distance where your own strengths work.`,
      histTl: `Kept up pressure on the enemy with long-range gunfire`
    },
    {
      clock: `July 28, night, off Calais`,
      title: `Fireships`,
      sit: `On the 27th, the Armada dropped anchor off Calais in France. It seems to be waiting there for the Duke of Parma's army. If Parma's men finish boarding and put to sea, they will cross the Channel. The enemy fleet is anchored and packed close together. Tonight the wind and tide are running from you toward the enemy.`,
      rep: [
        { f: `Drake`, t: `Pack some worn-out ships with things that burn, set them alight, and let them drift in. I'll give one of my own ships.` },
        { f: `News from Holland`, t: `A fleet of small Dutch boats is watching the shallows of Flanders and blocking the way out for Parma's ships.` },
        { f: `A spy`, t: `The Spanish fleet has lined up small boats against fireships. Every fireship will be towed away. Sending them is pointless.`, why: `The Spanish did try to tow some fireships away with small boats, but they could not stop them all. More important, the fleet was so afraid of the fireships that ships cut their anchor cables and scattered. The real power of the fireships lay less in burning ships than in breaking the formation.` }
      ],
      inv: `You sent a small boat out to watch the enemy. They do have boats on guard, but not many. There is also talk that, remembering the exploding ships at Antwerp a few years ago, Spanish soldiers are terrified of fireships.`,
      adv: {
        c: `Fireships put none of our men at risk. We should not let tonight's wind go to waste.`,
        a: `They are at anchor. Now is the time to charge in with every ship and settle this here.`,
        d: `According to the spy, the probability that the fireships reach the enemy is low. We would lose more by burning our own ships. Watching Parma is the rational move.`
      },
      flawWhy: `Laplace calculated only the odds that the fireships would set enemy ships alight. He did not count the effect of an enemy so afraid of them that it would abandon its anchors and break formation.`,
      opt: [
        { l: `Send in fireships tonight`, d: `Fill about eight ships with things that burn and gunpowder, set them on fire, and let the wind and tide carry them in.`,
          ok: `As the blazing fireships drew near, the enemy fleet cut its anchor cables and fled. In a single night, that tight formation fell apart.`,
          ng: `Some of the fireships were towed away. Even so, the enemy fleet was thrown into confusion and its formation broke up.` },
        { l: `Charge the anchored enemy with every ship`, d: `Attack the enemy while they are packed together and cannot maneuver.`,
          ok: `You damaged several ships, but the massed enemy guns cost you heavily too.`,
          ng: `The ships that charged in were surrounded by big enemy ships and boarded.`,
          tl: `The English fleet charges the enemy off Calais and suffers heavy losses.` },
        { l: `Hold back the fireships and watch Parma`, d: `Burn no ships. Wait for the enemy to move.`,
          ok: `Parma's army did not come out. But off Calais, the enemy fleet regrouped.`,
          ng: `The enemy fleet kept its formation and went on preparing to meet Parma's army.`,
          tl: `No fireships are sent, and the Armada holds its formation off Calais.` }
      ],
      hist: `On the night of the 28th, the English fleet sent in eight fireships. Drake is said to have given one of his own ships. The Spanish tried to tow some away, but many ships cut their anchor cables and fled out to sea, and the fleet was scattered. Parma's army is thought to have still been unready to put to sea at that point.`,
      lesson: `Don't judge a tool only by the damage it does directly. Drawing out the other side's fear and confusion can be its biggest effect.`,
      histTl: `Fireship attack off Calais broke the Armada's formation`
    },
    {
      clock: `July 29, dawn`,
      title: `The Stranded Galleass`,
      sit: `The night of the fireships is over. The scattered enemy fleet is trying to regroup off Gravelines. If you strike now, you can hit them before they re-form. Meanwhile, in front of Calais harbor, the enemy galleass San Lorenzo has lost her rudder and run aground in the shallows. She is a large ship with both great oars and sails, and is said to carry many soldiers and money. She is the ship closest to your flagship, the Ark Royal.`,
      rep: [
        { f: `Lookout`, t: `The enemy's main fleet is heading northeast toward Gravelines. They have not re-formed yet.` },
        { f: `Master gunner`, t: `We are low on ammunition. There is a limit to how much we can fire.` },
        { f: `An officer on the flagship`, t: `Take the galleass and you knock out a pillar of their fleet. The rest will lose heart. There will be no need to chase the main fleet.`, why: `The San Lorenzo was aground and already out of the fight. Taking her did nothing to the enemy's main fleet. The only chance to strike that fleet before it re-formed was this morning.` }
      ],
      inv: `You had a small boat check the galleass. She is heeling over badly and cannot move. Whether you take her or not, she will never rejoin the battle.`,
      adv: {
        c: `A stranded ship is a sure prize. Better a certain gain in front of us than chasing a scattered enemy.`,
        a: `Leave the galleass to the small boats and send every ship, flagship included, after the main fleet. This morning is our only chance.`,
        d: `Based on the ammunition we have left, a pursuit would sink few ships. We should resupply first.`
      },
      flawWhy: `Minerva put a "certain gain" first. Taking a ship that could no longer move would not change the outcome. The real danger was the enemy's main fleet re-forming.`,
      opt: [
        { l: `Take your flagship's squadron to capture the galleass`, d: `Leave the pursuit of the main fleet to Drake and the others, and lead your flagship's squadron to take the San Lorenzo.`,
          ok: `You took the galleass. Meanwhile, Drake and the others caught the enemy's main fleet off Gravelines, and a fierce gun battle began. You joined it only hours after it started.`,
          ng: `Capturing the galleass took longer than expected and led to trouble with the French guns on shore. You arrived very late for the main battle.` },
        { l: `Leave the galleass to small boats and chase the main fleet`, d: `Have a few small boats watch the ship that cannot move. Lead every ship, your own squadron included, against the enemy off Gravelines.`,
          ok: `The whole fleet fell on the enemy as it tried to re-form. Even more enemy ships were driven onto the shallows.`,
          ng: `The whole fleet gave chase, but the ammunition ran out quickly. Still, you did heavy damage to the enemy.`,
          tl: `Howard's flagship joins the pursuit from the start, and Spanish losses at Gravelines rise.` },
        { l: `Stop the pursuit and wait for supplies`, d: `Do not fight while ammunition is low. Resupply first, then give chase.`,
          ok: `The supplies arrived. But the enemy fleet re-formed and is once again ready to wait for Parma's army.`,
          ng: `While you waited for supplies, the enemy rebuilt its formation. The formation you worked so hard to break is whole again.`,
          tl: `No pursuit at Gravelines. The Armada rebuilds its formation.` }
      ],
      hist: `Howard first attacked the San Lorenzo with his flagship's squadron and captured her. Meanwhile, Drake and the others caught the enemy's main fleet off Gravelines and fired on it at close range. Howard joined the battle several hours later. Several enemy ships were sunk or driven aground, but the weather turned toward evening and the fighting stopped. His decision to spend time on the galleass was later criticized.`,
      lesson: `A sure prize in front of you is tempting. But ask whether it decides the outcome. The decisive moment is usually short.`,
      histTl: `Captured the galleass first, then joined the Battle of Gravelines`
    },
    {
      clock: `August 2, the North Sea`,
      title: `Chase or Turn Back?`,
      sit: `After Gravelines, the wind shifted, and the Armada, which had nearly been driven onto the shallows, escaped north. You have kept up the chase across the North Sea and are now somewhere off the Firth of Forth in Scotland. The enemy shows no sign of returning to the Channel and is heading farther north. Your ammunition is almost gone, and food and water are short. Disease has started to spread through the ships. The Duke of Parma's army is still in Flanders.`,
      rep: [
        { f: `Purser`, t: `We have only a few days of food left. The beer is starting to go bad.` },
        { f: `Ship's surgeon`, t: `More and more sailors are coming down with fever and dysentery. At this rate we will lose men before we ever fight.` },
        { f: `A young captain`, t: `The enemy is finished. Chase them a few more days and we can sink every last one.`, why: `The English fleet had almost no ammunition left. Even if it caught up, it had no power to sink big ships. Most of the enemy ships could still fight, and a longer chase risked having hunger and disease bring down the English fleet first.` }
      ],
      inv: `You had every ship count its ammunition and food. Hardly any ship has enough powder left for a real fight. The enemy keeps sailing north.`,
      adv: {
        c: `The enemy shows no sign of returning to the Channel. Let us stop the chase, go back to port, rest the men, and prepare for Parma.`,
        a: `The enemy is finished. A few more days of chase and we can sink the rest.`,
        d: `The shortages can be fixed with supplies. Resupply and we can keep up the chase. The nearest place is a Scottish port.`
      },
      flawWhy: `Ares believed the young captain who said the enemy was finished. The fleet that was really running out of strength was yours, short of ammunition and food.`,
      opt: [
        { l: `Scrape together ammunition and keep chasing`, d: `Chase them a few more days and sink what is left.`,
          ok: `You caught up with a few ships, but you had no shot to fire. All the while, more men fell sick.`,
          ng: `The food ran out and disease spread through the fleet. It limped into port unable to fight.`,
          tl: `The English fleet keeps chasing in the North Sea and is worn down by disease and hunger.` },
        { l: `Stop the chase and head back to port`, d: `Break off the pursuit off the Firth of Forth and turn south. Rebuild the fleet in case Parma moves.`,
          ok: `The fleet turned south. The Armada sailed around the north of Scotland and never came back to the Channel.`,
          ng: `The fleet made it back, but many sailors fell sick in port. Food and pay for the men are slow in coming.` },
        { l: `Resupply in a Scottish port and keep chasing`, d: `Put into a Scottish port for food and water, get the fleet in order, then go after the enemy.`,
          ok: `You got water and food. But meanwhile the enemy got far away, and the Channel to the south was left thinly guarded.`,
          ng: `The Scottish king gave no clear answer, and the supplies did not come. More men fell sick, and you were far from the Channel.`,
          tl: `The English fleet tries to resupply in Scotland and leaves the Channel unguarded for a long time.` }
      ],
      hist: `Around August 2, Howard broke off the pursuit off the Firth of Forth and turned south. The Armada made a long voyage around Scotland and Ireland to get home, and many ships were lost to storms and wrecks along the way. Around August 9, Queen Elizabeth I is said to have addressed her troops at Tilbury: "I know I have the body of a weak and feeble woman; but I have the heart and stomach of a king, and of a king of England too."`,
      lesson: `When victory is in sight, count your own weaknesses. Knowing when to stop the chase is also a commander's job.`,
      histTl: `Broke off the chase off the Firth of Forth and turned south`
    }
  ]
};
