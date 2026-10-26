window.SCENARIOS_EN = window.SCENARIOS_EN || {};
window.SCENARIOS_EN.edo = {
  title: `The Bloodless Surrender of Edo Castle`,
  sub: `Save a City of a Million from War`,
  year: `1868`,
  place: `Edo: Edo Castle and Katsu's residence`,
  role: `Army Commissioner of the Former Shogunate`,
  roleNote: `In Katsu Kaishū's position`,
  meters: [`The City and Its People`, `Survival of the Tokugawa House`, `Room to Negotiate`],
  intro: [
    `January 1868. At Toba-Fushimi, south of Kyoto, the shogunate's army was defeated by the forces of the new imperial government.`,
    `The former shogun, Tokugawa Yoshinobu, left Osaka Castle and returned to Edo by warship. The new government has branded him an "enemy of the court" and is marching east.`,
    `More than a million people live in Edo. If it becomes a battlefield, the city will burn.`,
    `You are Katsu Kaishū, Army Commissioner of the former shogunate. Dates follow the old Japanese lunar calendar of the time.`
  ],
  endings: [
    { title: `A Bloodless Surrender`, text: `Edo Castle was handed over without a single shot. The city of a million did not burn, and the Tokugawa house survived.` },
    { title: `The City Spared, the War Goes On`, text: `Most of Edo escaped the fighting. But former retainers with nothing left to lose fought on across the country for a long time.` },
    { title: `Edo in Flames`, text: `Decision by decision, you turned Edo into a battlefield. The city burned, and many lives were lost.` }
  ],
  epilogue: `In history, Edo Castle was handed over to the new government without a fight on the 11th day of the 4th month, 1868. That same day, Yoshinobu left Edo for confinement in Mito. In the 5th month, the Shōgitai, who had barricaded themselves at Ueno, were defeated, and the war moved on to the northeast and to Hakodate. Tayasu Kamenosuke, later Tokugawa Iesato, became head of the Tokugawa house, which survived as a domain of 700,000 koku at Sunpu. Later that year, Edo was renamed Tokyo.`,
  turns: [
    {
      clock: `Late in the 1st month, 1868`,
      title: `Fight or Submit?`,
      sit: `Day after day, councils are held in Edo Castle. Finance Commissioner Oguri Tadamasa and others argue for meeting the imperial army at Hakone and trapping it with the shogunate's fleet from Suruga Bay. The shogunate's navy is thought to be stronger than the new government's. But Yoshinobu says he has no wish to defy the court, and Oguri has been dismissed. You have just become Army Commissioner. Now it falls to you to set the course.`,
      rep: [
        { f: `A navy officer`, t: `With the Kaiyō Maru and the rest, our warships outclass anything the new government has. At sea, we cannot lose.` },
        { f: `A hard-line retainer`, t: `Every domain in the east is on the Tokugawa side. The imperial army is just a patchwork of Satsuma and Chōshū men. It cannot get past Hakone.`, why: `After the defeat at Toba-Fushimi, many domains moved to side with the new government. The imperial army advanced along three highways, and most domains along the way let it pass without a fight.` },
        { f: `An interpreter at the French legation`, t: `Minister Léon Roches says France is ready to help if the shogunate fights.` }
      ],
      inv: `You had the domains watched. Most of the domains along the Tōkaidō are already preparing to let the imperial army through. "The east is all on our side" was only wishful thinking.`,
      adv: {
        c: `If we fight, Edo and its people will be the first to burn. Show submission and open the way to talks.`,
        a: `The eastern domains are with us, and we rule the sea. If we meet them at Hakone, we can still win.`,
        d: `Comparing weapons, French support would greatly raise the former shogunate's odds of winning.`
      },
      flawWhy: `Ares took the retainer's claim that "the east is all on our side" as fact. In reality, many domains were already siding with the new government.`,
      opt: [
        { l: `Advise all-out resistance`, d: `The army holds Hakone while the fleet strikes from Suruga Bay.`,
          ok: `The defenses at Hakone are in place. But the new government calls it "rebellion by an enemy of the court" and speeds up plans for an all-out attack.`,
          ng: `Domain after domain joins the new government, and the Hakone line is turned from the flank. The war is closing in on Edo.`,
          tl: `The former shogunate makes a stand at Hakone. The Tōkaidō becomes a battlefield.` },
        { l: `Advise submission and look for a way to negotiate`, d: `Make Yoshinobu's submission known and tell the new government he will not fight. Then look for someone to talk to.`,
          ok: `In the 2nd month, Yoshinobu moved to Kan'ei-ji temple in Ueno and placed himself in confinement. The hard-liners seethed, but a path to talks had opened.`,
          ng: `You have shown that you will not fight. But the imperial army keeps marching, and the hard-liners call you a coward behind your back.` },
        { l: `Fight back with French support`, d: `Accept French military advisers and weapons and take on the imperial army.`,
          ok: `You have the weapons. But Britain is leaning harder toward the new government, and the civil war is turning into a contest between foreign powers.`,
          ng: `By relying on foreigners, the former shogunate lost support at home. The new government vowed to crush "the enemy of the court who sided with foreigners."`,
          tl: `The former shogunate fights on with French help. The rivalry between Britain and France spills into the civil war.` }
      ],
      hist: `Yoshinobu rejected the call to fight and dismissed Oguri Tadamasa. He is also said to have turned down the French minister Roches's offer of help. In the 2nd month, he moved to Kan'ei-ji in Ueno and placed himself in confinement as a sign of submission. As Army Commissioner, Katsu set out to find a way to negotiate with the new government.`,
      lesson: `When you count your allies, separate hope from fact. The louder someone says "everyone is with us," the more it is worth checking.`,
      histTl: `Yoshinobu chose submission and went into confinement at Kan'ei-ji`
    },
    {
      clock: `Early in the 3rd month, 1868`,
      title: `An Envoy to Sunpu`,
      sit: `The imperial army has reached Sunpu, today's Shizuoka. The all-out attack on Edo is said to be set for the 15th. The man really running the campaign at headquarters is Saigō Takamori of Satsuma. Other envoys have gone before with appeals, but no clear answer has come back. Yamaoka Tetsutarō (Tesshū), one of Yoshinobu's guards, has asked to be sent to Sunpu. At your house, you are holding Masumitsu Kyūnosuke, a Satsuma samurai captured the year before.`,
      rep: [
        { f: `From the inner palace`, t: `Princess Kazu (Seikan'in-no-miya) is also appealing to the court to let the Tokugawa house survive.` },
        { f: `An inspector`, t: `Yamaoka is a fine swordsman, but he has never negotiated anything. No one knows if he can even get through enemy lines to Sunpu.` },
        { f: `A hard-line captain`, t: `Saigō will not stop until he has Lord Yoshinobu's head. Any envoy we send will just be cut down.`, why: `Saigō met Yamaoka at Sunpu and set out terms for surrender. He was ready to negotiate. Refusing to send an envoy on that assumption would have thrown the chance away.` }
      ],
      inv: `You had people look into the mood at Sunpu. Some at headquarters seem to want to take Edo without a fight, if the terms are right. There is no solid word that Saigō refuses to talk.`,
      adv: {
        c: `Yamaoka's resolve is real. If Masumitsu of Satsuma goes with him, it will be easier to pass through the enemy camp.`,
        a: `Send an envoy and they will only see our weakness. Strengthen our defenses and give them no reason to attack.`,
        d: `Based on the imperial army's strength and speed of advance, the probability that talks succeed is low. Resources should go to defense.`
      },
      flawWhy: `Laplace calculated the odds of talks from the difference in troops alone. He left out that Saigō also had reasons to take Edo without a fight.`,
      opt: [
        { l: `Send Yamaoka with a letter, and Masumitsu with him`, d: `Write a letter to Saigō and give it to Yamaoka. Send the Satsuma man Masumitsu along to help him through the enemy lines.`,
          ok: `On the 9th, Yamaoka met Saigō at Sunpu. Saigō set out terms for surrender and showed he was willing to meet you.`,
          ng: `Yamaoka reached Sunpu, but nothing was fully settled. Still, you now have a way to reach Saigō directly.` },
        { l: `Send a formal mission of senior officials`, d: `Put high-ranking officials at its head and send it to headquarters as an official mission.`,
          ok: `The mission reached headquarters. But time went to questions of protocol, and the terms themselves made no progress.`,
          ng: `The large mission was stopped on the road and lost days before it reached Sunpu.`,
          tl: `A formal mission is stopped on the road and loses precious time.` },
        { l: `Send no envoy and strengthen the defenses`, d: `Expect nothing from talks. Fortify Edo and wait to see what the other side does.`,
          ok: `Edo's defenses are stronger. But headquarters is starting to think the submission is only words.`,
          ng: `Word of the new defenses reached the new government and hardened its resolve to attack.`,
          tl: `No envoy is sent and Edo is fortified. The new government grows more determined to attack.` }
      ],
      hist: `Katsu met Yamaoka for the first time and, trusting his resolve, gave him a letter for Saigō. With Masumitsu Kyūnosuke at his side, Yamaoka passed through the imperial army's camps and reached Sunpu. According to tradition, he announced himself as "Yamaoka Tetsutarō, retainer of Tokugawa Yoshinobu, enemy of the court, coming through." On the 9th, Yamaoka met Saigō.`,
      lesson: `Negotiation starts with finding out whether the other side is willing to listen. Deciding "it's no use" is a gamble in itself.`,
      histTl: `Yamaoka Tesshū met Saigō at Sunpu`
    },
    {
      clock: `Around the 10th day of the 3rd month, 1868`,
      title: `Preparing for Failure`,
      sit: `Yamaoka is back. Saigō has set out seven conditions, including handing Yoshinobu over to the Bizen domain, surrendering Edo Castle, and giving up warships and weapons. Yamaoka argued hard that one condition, handing Yoshinobu over to another domain, could never be accepted. Saigō agreed to hold it open and to meet you. The meeting is on the 13th. The attack is set for the 15th. If the talks fail, Edo will be a battlefield two days later.`,
      rep: [
        { f: `A fire brigade boss`, t: `Edo's fire brigades move on the word of their bosses. Tell us what you need, and we can move at once.` },
        { f: `The head of the boatmen`, t: `If we gather the boats in the harbor and along the rivers, we can carry the townspeople across the bay to Bōsō.` },
        { f: `A retainer`, t: `The imperial army has promised not to harm the townspeople of Edo. You don't need to worry about the city.`, why: `No such promise had been confirmed. An all-out attack would have meant street fighting and fires, with heavy harm to the townspeople.` }
      ],
      inv: `You had the new government's proclamations checked. There is no promise anywhere not to harm the townspeople. The retainer had only heard a rumor.`,
      adv: {
        c: `I hear the imperial army will not harm the townspeople. Preparing fires would only put people in danger. Let us stake everything on the talks.`,
        a: `Announce across Edo that we are ready to burn it, and let them know it. That is the strongest card we can play.`,
        d: `The chance that the talks fail is not zero. Preparing to limit the damage in the worst case pays off in expected value too.`
      },
      flawWhy: `Minerva trusted a "promise" no one had confirmed. Out of concern for lives, she was ready to give up the one plan that would protect the townspeople if the talks failed.`,
      opt: [
        { l: `Quietly prepare a scorched-earth plan and an evacuation`, d: `If the talks fail, block the imperial army's path with fire and carry the townspeople away by boat. Quietly bring the fire brigade bosses and the boatmen into the plan.`,
          ok: `The preparations were made without anyone noticing. At the meeting, you will have a last resort.`,
          ng: `The preparations are ready, but word leaked to parts of the city and unease is spreading.` },
        { l: `Make no preparations and stake everything on talks`, d: `No fires, no boats. Take no step that puts the city at risk.`,
          ok: `The city stayed calm. But you go into the meeting with few cards to play.`,
          ng: `The new government saw that the former shogunate had no options left. You are at a disadvantage before the talks even start.`,
          tl: `No plan is made for failure, and Katsu loses his leverage in the talks.` },
        { l: `Openly announce you are ready to burn the city`, d: `Proclaim across Edo that the city will burn if the talks fail, to pressure the new government.`,
          ok: `The new government grew wary. But the city fell into chaos, and the roads filled with people fleeing.`,
          ng: `The proclamation threw the city into panic, and fires broke out in the confusion. The new government accused the former shogunate of holding Edo hostage.`,
          tl: `The former shogunate announces it will burn Edo. The city falls into panic.` }
      ],
      hist: `It is said that Katsu prepared a plan in case of an all-out attack: set fires in the imperial army's path to stop its advance, and carry the townspeople to safety by boat. He is also said to have spoken with the fire brigade boss Shinmon Tatsugorō and others. The plan was never made public and never used.`,
      lesson: `Go into a negotiation with a plan for what you will do if it fails. With a fallback in hand, you do not have to accept terms you cannot live with.`,
      histTl: `Quietly prepared a scorched-earth plan and an evacuation in case talks failed`
    },
    {
      clock: `The 14th day of the 3rd month, 1868`,
      title: `The Meeting at the Satsuma Residence`,
      sit: `Yesterday, you met Saigō at the Satsuma domain's residence in Edo. Today is the second meeting. You must give your answer to the seven conditions. Many former retainers say they would rather fight than give up the castle and the warships. The attack is set for tomorrow.`,
      rep: [
        { f: `A source close to the British legation`, t: `Minister Harry Parkes is said to be strongly against attacking a side that has already submitted. He seems to have told an envoy of the new government as much.` },
        { f: `One of your attendants at the meeting`, t: `Saigō spoke as if there might still be room to discuss how Lord Yoshinobu himself would be treated.` },
        { f: `A hard-line captain`, t: `Saigō can't call off the attack in front of his army. The talks are a trap to buy time. Our only move is to threaten him with the fire plan.`, why: `After this meeting, Saigō called off the attack and went back to Kyoto himself to discuss the terms. The talks were no trap. A threat could have wrecked a deal that was nearly done.` }
      ],
      inv: `You sounded out someone who knows the inside of headquarters. There is talk that they are prepared to hold off the attack. Nothing suggests a trap.`,
      adv: {
        c: `Do not break from submission. Ask politely only for the points we cannot give up, such as how Lord Yoshinobu will be treated. Saigō must have his own reasons to avoid a fight.`,
        a: `The talks are a trap. Reveal the fire plan and make him withdraw every condition.`,
        d: `If we accept every condition, the probability of failure drops to zero. It is the surest choice.`
      },
      flawWhy: `Ares built his advice on the report that the talks were a trap. Saigō was already prepared to call off the attack.`,
      opt: [
        { l: `Accept all seven conditions as they are`, d: `Accept everything, including handing Yoshinobu over to the Bizen domain.`,
          ok: `The attack was stopped. But when the retainers learned their lord would be handed to another domain, they were furious, and many deserted.`,
          ng: `Accepting the terms set off the hard-liners, and scuffles broke out across Edo.`,
          tl: `The former shogunate accepts all seven conditions. Retainers desert in large numbers.` },
        { l: `Hold to submission and ask for milder treatment of Yoshinobu`, d: `Show you are ready to hand over the castle and weapons. Then ask for leniency, such as letting Yoshinobu live in confinement in his home domain of Mito.`,
          ok: `Saigō called off the next day's attack. He set out for Kyoto with your answer.`,
          ng: `Saigō put off the attack, but how the terms would be handled now depends on talks in Kyoto. The outcome is still unclear.` },
        { l: `Reveal the fire plan and demand the conditions be withdrawn`, d: `Tell him you are ready to burn Edo, and make him take back every condition.`,
          ok: `Saigō put off the attack. But voices in the new government grew louder that it must not give in to threats.`,
          ng: `The talks broke down. The attack began, and fires rose across Edo.`,
          tl: `Katsu threatens Saigō with the scorched-earth plan. The talks collapse, and the attack begins.` }
      ],
      hist: `On the 13th and 14th, Katsu and Saigō met at the Satsuma residences in Edo. Katsu is said to have asked for lenient treatment, such as letting Yoshinobu live in confinement in Mito, and raised how the castle and weapons would be handed over. Saigō called off the next day's attack and returned to Kyoto to confer. Word that British Minister Parkes opposed the attack is also said to have reached Saigō, but historians debate how much it affected his decision.`,
      lesson: `Narrow down the one point you cannot give up, and give ground on the rest. Accepting everything and rejecting everything both wreck a negotiation.`,
      histTl: `Katsu and Saigō met. The attack on Edo was called off.`
    },
    {
      clock: `Early in the 4th month, 1868`,
      title: `The Day the Castle Is Handed Over`,
      sit: `After the talks in Kyoto, the new government has announced its terms. Yoshinobu will live in confinement in Mito. Edo Castle will be handed over on the 11th of the 4th month. The warships and weapons will be handed over too. But there are rumors that part of the army plans to leave the castle and fight somewhere else. Enomoto Takeaki of the navy is reluctant to give up the warships. How much land the Tokugawa house will keep has not been decided.`,
      rep: [
        { f: `An army officer`, t: `Soldiers who want to fight are gathering around Ōtori Keisuke, the infantry commissioner.` },
        { f: `A finance official`, t: `Until the Tokugawa lands and the retainers' future are settled, tens of thousands of former retainers have no way to make a living. That is the root of the anger.` },
        { f: `A hard-line captain`, t: `Give me one more month before the handover, and I will win every one of them over.`, why: `This captain had no power over the other units. In fact, Ōtori Keisuke and others led their troops out of Edo around the time of the handover. A delay would only have told the new government that the promise would not be kept.` }
      ],
      inv: `You had the units watched. Plans to desert are already well along, far past anything one captain could stop. The soldiers are angry because they cannot see a future for the Tokugawa house or for themselves.`,
      adv: {
        c: `Keep the promise on the handover, and press the new government hard to settle the Tokugawa house's future soon. If the retainers can see a way forward, their anger will cool.`,
        a: `Hand over the castle as promised. Leave the hard-liners to themselves.`,
        d: `The hard-liners are many. Delaying the handover until they are persuaded minimizes the probability of a clash.`
      },
      flawWhy: `Laplace treated the captain's promise that a delay would bring everyone around as if it were data. He left out that a delay would cost the new government's trust, and that there was no real way to persuade them.`,
      opt: [
        { l: `Hand over the castle as promised and keep talking to the hard-liners`, d: `Hand over the castle on the 11th. Keep trying to persuade the hard-liners, but do not force them.`,
          ok: `Edo Castle was handed over without bloodshed. But Ōtori Keisuke and others left Edo with their troops, and Enomoto's fleet kept most of its ships. The war will go on somewhere else.`,
          ng: `The castle was handed over, but the Shōgitai gathered at Ueno, and sparks of conflict remained inside Edo.` },
        { l: `Delay the handover and persuade them first`, d: `Ask for the handover date to be put off until the hard-liners are won over.`,
          ok: `The delay was granted, but the new government's distrust deepened. Persuading the hard-liners is going nowhere.`,
          ng: `The new government saw the delay as a broken promise and prepared again for an all-out attack.`,
          tl: `Katsu asks to delay the handover. The new government prepares again for an all-out attack.` },
        { l: `Hand over the castle as promised and press for an early decision on the Tokugawa house`, d: `Keep the promise on the handover. At the same time, press the new government to settle the Tokugawa house's survival and lands soon, and use that to show the retainers a way to live.`,
          ok: `The castle was handed over without bloodshed. Because the Tokugawa house's future was settled early, fewer former retainers joined the fighting.`,
          ng: `The castle was handed over, but the new government was in no hurry to decide. Still, a path for the Tokugawa house to survive was set early.`,
          tl: `With the castle handed over, the Tokugawa settlement is decided early, and fewer retainers take up arms.` }
      ],
      hist: `On the 11th of the 4th month, Edo Castle was handed over to the new government, and Yoshinobu left for Mito. But around the same time, Ōtori Keisuke and others led their troops out of Edo and fought on from the northern Kantō into the northeast. Enomoto Takeaki did not hand over most of the warships and later sailed north. The Shōgitai, who had gathered at Ueno, were attacked by the imperial army on the 15th of the 5th month and defeated in a single day. The Tokugawa lands were only formally set at 700,000 koku at Sunpu later, at the end of the 5th month.`,
      lesson: `Even when you keep a big promise, unrest remains if the people left behind cannot see their future. An agreement is only complete when it covers how people will live afterward.`,
      histTl: `Edo Castle was handed over without bloodshed. Some hard-liners left Edo.`
    }
  ]
};
