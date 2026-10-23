window.SCENARIOS_EN = window.SCENARIOS_EN || {};
window.SCENARIOS_EN.cuba = {
  title: `Cuban Missile Crisis`,
  sub: `13 Days to Nuclear War`,
  year: `October 1962`,
  place: `The White House, Washington, D.C.`,
  role: `President of the United States`,
  roleNote: `In John F. Kennedy's position`,
  meters: [`Room for Peace`, `Support at Home and Abroad`, `Negotiating Room`],
  intro: [
    `October 1962. The Cold War between the United States and the Soviet Union has become a race to build nuclear weapons.`,
    `The year before, an invasion by Cuban exiles backed by the United States, the Bay of Pigs, ended in failure.`,
    `Fidel Castro's government in Cuba has moved closer to the Soviet Union. Moscow says it is sending only "defensive" weapons.`,
    `You are the President of the United States. A single reconnaissance photo has just been placed on your desk.`
  ],
  endings: [
    { title: `The Crisis Has Passed`, text: `The world stepped back from the brink of nuclear war. Your decisions left the other side a way to step back too.` },
    { title: `A Fragile Peace`, text: `The worst was avoided. But the price was deep damage to the trust of your allies and your own people.` },
    { title: `Over the Brink`, text: `Decision by decision, you pushed the world to the threshold of nuclear war.` }
  ],
  epilogue: `In history, the Soviet Union announced the removal of its missiles on October 28. The following year, 1963, the United States removed its Jupiter missiles from Turkey. The crisis led to a hotline between the American and Soviet leaders, and the Partial Test Ban Treaty was signed that same year. After the Cold War, it came to light that many nuclear warheads, including tactical nuclear weapons, had been brought into Cuba.`,
  turns: [
    {
      clock: `October 16, 8:45 a.m.`,
      title: `The Reconnaissance Photos`,
      sit: `Photos taken by a U-2 spy plane show a medium-range ballistic missile (MRBM) site near San Cristóbal in western Cuba. The range is about 1,800 km. Most of the eastern United States, including Washington, is within reach. The Soviets have insisted all along that they have brought in no offensive weapons. The midterm elections are three weeks away.`,
      rep: [
        { f: `CIA Photographic Interpretation Center`, t: `What we have confirmed are launch facilities for SS-4 missiles. They could be ready to fire in as little as 10 days to two weeks. The location of the nuclear warheads is unconfirmed.` },
        { f: `Joint Chiefs of Staff`, t: `A surprise air strike can wipe out every confirmed missile site with certainty. The sooner, the better.`, why: `The commander of the Air Force's Tactical Air Command later told the President, "We can be sure of destroying about 90% of the known missiles. We cannot guarantee all of them." A single missile that survived could still have been launched at an American city.` },
        { f: `State Department`, t: `Soviet Ambassador Dobrynin does not yet seem to realize that we have the photos.` }
      ],
      inv: `You contacted the Air Force's Tactical Air Command directly. The answer: "We can destroy most of the confirmed sites, but we cannot guarantee all of them. There may also be sites we have not found."`,
      adv: {
        c: `They don't know we have the photos yet. That silence is a weapon. We should take a few days to work through every option.`,
        a: `We have to strike before the missiles are operational. The Joint Chiefs say they can destroy every site with certainty.`,
        d: `In past international crises, the side that won world opinion early tended to negotiate more successfully. I recommend going public.`
      },
      flawWhy: `Ares based his advice on the very report that promised to "wipe out every site with certainty." That report was far too optimistic.`,
      opt: [
        { l: `Order an immediate air strike`, d: `Launch a surprise attack on the missile sites, as the Joint Chiefs have planned.`,
          ok: `The air strike destroyed most of the sites. But the Soviets hinted at retaliation in Berlin, and the world stood at the edge of a chain of reprisals.`,
          ng: `The air strike failed to destroy every site. Many Soviet soldiers were killed, and Moscow openly vowed to retaliate.`,
          tl: `U.S. forces bomb the missile sites in Cuba without warning. Soviet soldiers are killed.` },
        { l: `Form a secret working group`, d: `Gather a dozen or so trusted advisers to study the options without going public or attacking. Keep the President's schedule as normal so no one suspects anything.`,
          ok: `The Executive Committee of the National Security Council (ExComm) began meeting in secret. Air strike, blockade, invasion, diplomacy: now there was time to debate every option.`,
          ng: `The work moved forward, but reporters started to sense that something was going on. There is not much time left.` },
        { l: `Go public now and appeal to the UN`, d: `Show the photos to the world and expose the Soviet lie to the international community.`,
          ok: `World opinion sided with the United States. But by showing your hand, you pushed the Soviets to rush the missiles into place.`,
          ng: `The Soviets dismissed the photos as "fabricated" and sped up the deployment. Your options for the next move have narrowed.`,
          tl: `The United States releases the photos at once. The Soviets speed up the deployment.` }
      ],
      hist: `On October 16, Kennedy secretly convened the Executive Committee of the National Security Council (ExComm). At first, many favored an air strike, but the group spent about a week weighing the options. Meanwhile, the President kept campaigning as scheduled so that no one would suspect anything.`,
      lesson: `If you have even a little time, use it to widen your options before you act. The first idea on the table is not always the best one.`,
      histTl: `Set up the secret ExComm to weigh the options`
    },
    {
      clock: `October 20, 2:30 p.m.`,
      title: `Air Strike or Blockade?`,
      sit: `The options have narrowed to two: an air strike on the missile sites, or a blockade that stops ships bound for Cuba at sea. The Joint Chiefs also have a plan for a full-scale invasion after the air strike. New photos show construction at the missile sites going on day and night.`,
      rep: [
        { f: `State Department Legal Adviser`, t: `Under international law, a "blockade" is an act of war. If we call it a "quarantine" and stop only the delivery of offensive weapons, we can keep our legal and diplomatic standing.` },
        { f: `CIA`, t: `We estimate about 10,000 Soviet troops in Cuba. No tactical nuclear weapons have been found. An invasion could be completed quickly.`, why: `In fact, there were about 40,000 Soviet troops in Cuba. Short-range tactical nuclear weapons had also been brought in, and they might have been used if U.S. forces landed. These facts only came to light after the Cold War.` },
        { f: `Secretary of Defense`, t: `A blockade will not remove the missiles already in Cuba. But it gives the other side time to think.` }
      ],
      inv: `You had the sources checked again. The troop estimate was a rough figure worked out from the reconnaissance photos, with no confirmation on the ground. No one knows the full extent of the weapons brought in.`,
      adv: {
        c: `A quarantine leaves them a way to back down. Don't corner them with your very first move.`,
        a: `Only 10,000 troops and no tactical nukes. This is our chance to invade and pull the problem out by the roots.`,
        d: `Judged by military effect alone, an air strike has the highest probability of eliminating the missiles.`
      },
      flawWhy: `Ares took the CIA estimate as fact. In reality, four times as many Soviet troops and tactical nuclear weapons were waiting.`,
      opt: [
        { l: `Declare a "quarantine" and keep the military on standby`, d: `Stop only ships carrying offensive weapons. Keep preparing for an air strike and invasion, and buy time to negotiate.`,
          ok: `On October 22, you announced the quarantine in a televised address. The Organization of American States backed it unanimously, and the world held its breath to see what would happen next.`,
          ng: `You announced the quarantine, but hard-liners at home erupted, calling it "weak."` },
        { l: `Bomb the missile sites`, d: `Remove the missiles with an attack limited to military targets.`,
          ok: `The air strike destroyed most of the sites. The Soviets are hinting at retaliation against U.S. bases in Turkey.`,
          ng: `Some launch pads survived the air strike. The Soviets declared they would retaliate, and the U.S. military raised its alert level.`,
          tl: `U.S. forces bomb Cuba. The Soviets hint at retaliation in Turkey.` },
        { l: `Follow the air strike with a full invasion`, d: `Remove the missiles and the Castro government together.`,
          ok: `The landing went forward, but four times as many Soviet troops as expected were waiting. Casualties keep mounting.`,
          ng: `Tactical nuclear weapons that were not supposed to exist were used against the landing force. The world stood at the threshold of nuclear war.`,
          tl: `U.S. forces land in Cuba. Soviet tactical nuclear weapons may be used.` }
      ],
      hist: `Kennedy chose the word "quarantine" instead of "blockade" and announced it in a televised address on October 22. He kept the military ready to strike and invade at any moment, while leaving the other side time to think.`,
      lesson: `Before you make a strong move, question your own assumptions. Weigh the best plan if your information is right against the damage if it is wrong.`,
      histTl: `Announced a naval "quarantine" in a televised address`
    },
    {
      clock: `October 25, 7:00 a.m.`,
      title: `The Quarantine Line`,
      sit: `The quarantine took effect on the 24th. Most Soviet cargo ships stopped short of the line or turned back. But the tanker MV Bucharest is approaching the quarantine line. The Navy is asking for permission to board and search it.`,
      rep: [
        { f: `Office of Naval Operations`, t: `The Bucharest appears to be a tanker carrying oil. It has no hold large enough for missiles.` },
        { f: `Patrol Aircraft`, t: `Large cargo is visible on the Bucharest's deck. It looks like it could be covering missiles.`, why: `A second check found that the deck cargo was ordinary freight. Visual reports from a distance are often wrong.` },
        { f: `UN Secretary-General U Thant`, t: `He is urging both the United States and the Soviet Union to hold back for a while and negotiate.` }
      ],
      inv: `You had another patrol plane take a second look. The deck cargo is ordinary freight, and nothing that looks like a missile can be seen.`,
      adv: {
        c: `There is nothing to gain from stopping a ship with no weapons. But we still need some other move to show the quarantine is serious.`,
        a: `There's suspicious cargo on that deck. If we back off now, the quarantine is a paper tiger.`,
        d: `Applying the rules consistently maximizes the credibility of the quarantine. I recommend boarding.`
      },
      flawWhy: `Laplace optimized only for "consistency of the rules." He left out the most important variable in any negotiation: giving the other leader room to back down.`,
      opt: [
        { l: `Board and search the Bucharest`, d: `Stop the ship by the book, board it, and inspect the cargo.`,
          ok: `The cargo was nothing but oil. The Soviets denounced it as "piracy," but there was no clash.`,
          ng: `A scuffle broke out with the crew during the boarding. The Soviets announced that warships would escort their ships from now on.`,
          tl: `The U.S. Navy boards a Soviet tanker. The Soviets denounce it as "piracy."` },
        { l: `Let it pass and make a show of boarding another ship`, d: `Identify the unarmed tanker and let it through. The next day, choose a cargo ship that is not Soviet-flagged and board it peacefully to prove the quarantine is real.`,
          ok: `On the 26th, the Lebanese-flagged Marucla was boarded peacefully. You showed the quarantine was serious without costing the Soviets face.`,
          ng: `Congress attacked the response as "too soft." Even so, a clash was avoided.` },
        { l: `Fire warning shots if it does not stop`, d: `Show that any ship crossing the quarantine line will get no mercy.`,
          ok: `The tanker stopped. But anger at "American provocation" is growing inside the Soviet Union.`,
          ng: `A warning shot landed close to the ship, and crew members were injured. The Soviet fleet began to move.`,
          tl: `A U.S. warship fires warning shots at a Soviet tanker. Crew members are injured.` }
      ],
      hist: `Kennedy let the Bucharest pass after identifying it. The next day, the 26th, he chose the Marucla, a Lebanese-flagged cargo ship chartered by the Soviets, had it boarded, confirmed there were no weapons, and let it go. It showed the quarantine was serious without humiliating the other side.`,
      lesson: `Consistent rules and an exit for the other side can go together. There is more than one way to send a message.`,
      histTl: `Peacefully boarded the Lebanese-flagged Marucla`
    },
    {
      clock: `October 27, 4:00 p.m.`,
      title: `Black Saturday`,
      sit: `This has become the worst day yet. Khrushchev's private letter last night said, "If the United States promises not to invade Cuba, we will remove the missiles." But this morning, Radio Moscow changed the terms and also demanded the removal of the American Jupiter missiles in Turkey. Then, just now, a U-2 spy plane was shot down over Cuba. The pilot, Major Rudolf Anderson, was killed.`,
      rep: [
        { f: `Department of Defense`, t: `The U-2 shootdown is a deliberate escalation ordered by Khrushchev himself.`, why: `The plane was shot down on the decision of Soviet forces in Cuba, without approval from Moscow. Khrushchev himself was shaken by it.` },
        { f: `Navy`, t: `Near the quarantine line, we are dropping practice depth charges on a Soviet submarine to signal it to surface.` },
        { f: `State Department`, t: `The Jupiter missiles are outdated, and their removal was already under consideration. But if it becomes a public deal, our NATO allies will see it as "America selling out its allies to save itself."` }
      ],
      inv: `You had diplomatic channels look into how the plane was shot down. There are signs of confusion on the Soviet side too. Moscow most likely did not approve it in advance.`,
      adv: {
        c: `In public, answer only the first offer, and handle Turkey through a channel no one sees. Both sides need a way to say they won.`,
        a: `The shootdown is Khrushchev sending a message. We should hit the surface-to-air missile sites, just as we decided in advance.`,
        d: `The missiles in Turkey are outdated and have almost no strategic value. To minimize expected losses, the rational choice is to accept the trade officially.`
      },
      flawWhy: `Laplace counted only the military value of the weapons. He left out what a public deal would cost in NATO unity and domestic politics.`,
      opt: [
        { l: `Retaliate against the surface-to-air missile sites`, d: `You decided in advance to retaliate if a U-2 was shot down. Carry it out.`,
          ok: `The surface-to-air missile sites were destroyed. The Soviets have not struck back yet, but the door to negotiation is closing.`,
          ng: `Soviet forces fired back at the retaliatory strike. Word came in that local commanders are in a position to use tactical nuclear weapons.`,
          tl: `U.S. forces bomb surface-to-air missile sites in Cuba. Soviet forces fire back.` },
        { l: `Answer only the first letter officially and promise Turkey in private`, d: `Officially accept "removal in exchange for a promise not to invade." Have your brother Robert tell Ambassador Dobrynin in person that the missiles in Turkey will be removed, on the condition that it is never made public.`,
          ok: `That night, Robert Kennedy met with Ambassador Dobrynin. Now all you can do is wait for Moscow's answer.`,
          ng: `The offer was delivered, but there is no answer from Moscow. The military is moving ahead with preparations for an air strike.` },
        { l: `Officially accept removal from Turkey`, d: `Weigh some outdated missiles against avoiding nuclear war, and the answer is obvious.`,
          ok: `The crisis eased. But Turkey and the NATO allies protested strongly that "America used its allies as bargaining chips."`,
          ng: `At home, the public deal was attacked as "surrender." Hard-liners in Congress are demanding an air strike.`,
          tl: `The United States officially announces the removal of the missiles in Turkey. NATO is divided.` }
      ],
      hist: `Kennedy effectively ignored the second message and replied to the first. That same night, his brother Robert privately told Ambassador Dobrynin that the missiles in Turkey would be removed within a few months. That same day, aboard the Soviet submarine B-59, which was under depth charges from U.S. ships, officers discussed using a nuclear torpedo. Vasily Arkhipov, a senior officer on board, objected, and the torpedo was not fired.`,
      lesson: `When information is most confused, do not assume that everything the other side does is intentional. Consider that people on the ground in their organization may be acting on their own.`,
      histTl: `Replied to the first letter. Promised the removal of the missiles in Turkey in private.`
    },
    {
      clock: `October 28, 9:00 a.m.`,
      title: `The Removal Announcement`,
      sit: `Radio Moscow has read out a statement from Khrushchev. The missiles in Cuba will be dismantled and shipped back to the Soviet Union. Relief spreads through ExComm. But Air Force Chief of Staff Curtis LeMay insists, "This is the greatest defeat in our history. We should attack today."`,
      rep: [
        { f: `Air Force Chief of Staff`, t: `The Soviets are just buying time. The removal is a lie, and the missiles are still ready to launch.`, why: `Later reconnaissance confirmed that the Soviets were in fact dismantling the sites. In November, missiles were also photographed being shipped out.` },
        { f: `State Department`, t: `Khrushchev may face harsh criticism from hard-liners at home.` },
        { f: `United Nations`, t: `Cuba's Prime Minister Castro is refusing on-site inspections to verify the removal.` }
      ],
      inv: `You checked the latest photos from the reconnaissance planes. At several sites, dismantling has already begun.`,
      adv: {
        c: `If we gloat, Khrushchev will be cornered at home. Protecting his dignity is the best way to make sure he keeps the deal.`,
        a: `Our advantage is overwhelming right now. Let's use this chance to settle the Cuba problem for good.`,
        d: `To maximize approval ratings, now is the time to claim victory clearly. The midterm elections are nine days away.`
      },
      flawWhy: `Laplace optimized for short-term approval ratings. He missed the long-term variable: the other side's reason to keep honoring the deal.`,
      opt: [
        { l: `Declare victory with a big announcement`, d: `Tell the nation that American resolve forced the Soviets to back down.`,
          ok: `Approval ratings soared. But in a humiliated Moscow, the dismantling began to fall behind.`,
          ng: `The victory claim emboldened Soviet hard-liners. The promise to remove the missiles is starting to waver.`,
          tl: `The United States declares "victory." Hard-liners gain ground in the Soviet Union.` },
        { l: `Do not gloat, and focus on verifying the removal`, d: `Order your administration not to talk about "victory," and issue a statement praising Khrushchev's decision as "statesmanlike."`,
          ok: `The Soviets went ahead with removing the missiles. The next year, a hotline between the American and Soviet leaders was set up, and the Partial Test Ban Treaty was signed.`,
          ng: `The removal went forward, but hard-liners kept calling you "weak." Even so, the deal held.` },
        { l: `Keep up the pressure until Castro falls`, d: `Continue the quarantine and keep the attack preparations in place.`,
          ok: `The Soviets kept removing the missiles, but Cuba hardened its stance. Tension in the region will last a long time.`,
          ng: `Cornered, the Soviets halted the removal. The crisis is back where it started.`,
          tl: `The quarantine continues. The Soviets halt the removal, and the crisis flares up again.` }
      ],
      hist: `Kennedy told his administration not to speak of "victory" and issued a statement praising Khrushchev's decision. In November, the two sides also agreed on removing the Soviet IL-28 bombers, and the quarantine was lifted on November 20.`,
      lesson: `When you win a negotiation, take special care that the other side does not lose too badly at home. They need a reason to keep the deal too.`,
      histTl: `Khrushchev announced the removal. The United States did not gloat.`
    }
  ]
};
