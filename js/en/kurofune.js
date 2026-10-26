window.SCENARIOS_EN = window.SCENARIOS_EN || {};
window.SCENARIOS_EN.kurofune = {
  title: `The Black Ships`,
  sub: `The Ships That Woke a Sleeping Realm`,
  year: `1853 to 1854`,
  place: `Edo Castle, Uraga and Yokohama`,
  role: `Senior Councilor of the Tokugawa Shogunate`,
  roleNote: `In Abe Masahiro's position`,
  meters: [`Room to Avoid War`, `Authority of the Shogunate`, `Coastal Defense`],
  intro: [
    `1853. For more than 200 years, Japan has kept contact with only a few foreign countries.`,
    `The shogunate knows that Qing China lost the Opium War to Britain.`,
    `The year before, the Dutch trading post in Nagasaki sent word that an American fleet was heading for Japan.`,
    `You are Abe Masahiro, the senior member of the shogun's council. On July 8, 1853, an urgent report arrives: strange black ships have appeared off Uraga.`
  ],
  endings: [
    { title: `Protected Without a Shot`, text: `Without a single shot fired, the country stood at the door of a new age. You bought time, and you used that time to prepare.` },
    { title: `Shaken Authority`, text: `War was avoided. But many people began to doubt the way the shogunate made its decisions.` },
    { title: `A Bay on Fire`, text: `Cannon fire echoed across Edo Bay. A conflict that began with no preparation left deep scars on the country.` }
  ],
  epilogue: `In history, after the Treaty of Kanagawa, Japan made similar agreements with Britain, Russia and the Netherlands. Abe Masahiro pushed ahead with the Shinagawa sea batteries, the promotion of capable officials and the founding of the Nagasaki Naval Training Center. He died in 1857, still in his thirties. The following year, under Chief Minister Ii Naosuke, the shogunate signed the Treaty of Amity and Commerce with the United States, which allowed trade.`,
  turns: [
    {
      clock: `July 8, 1853, night`,
      title: `Black Ships off Uraga`,
      sit: `Four American warships have dropped anchor off Uraga. Two of them are steamships, moving under their own smoke. The squadron is led by Commodore Perry, commander of the East India Squadron. He says he carries a letter from the President, and he refuses requests to go to Nagasaki. The Uraga magistrate's office is asking for orders. Eleven years ago, the shogunate gave up its order to drive off foreign ships. The current policy is to give them firewood and water and send them away peacefully.`,
      rep: [
        { f: `Uraga Magistrate's Office`, t: `One of our officers approached the flagship, but Perry says he will meet only with a high-ranking official.` },
        { f: `Domain Guarding Edo Bay`, t: `We have sent troops to guard the coast, but we do not have enough cannons, and the ones we have are poor.` },
        { f: `Coastal Defense Official`, t: `The guns of our Edo Bay batteries can drive them off easily. There is nothing to fear from foreign ships.`, why: `The Edo Bay batteries of the time were far weaker than the American ships' guns, in both range and power. In an exchange of fire, the batteries and the coastal towns would likely have taken one-sided damage.` }
      ],
      inv: `You had the guns of the Uraga batteries compared with those of the black ships. The ships' guns have longer range and are far more numerous. The answer: in a gunfight, there is no chance of winning.`,
      adv: {
        c: `If it comes to war, the towns on Edo Bay will burn first. We should handle this calmly and buy time.`,
        a: `I hear our batteries can drive them off easily. If we show weakness now, they will take advantage of it.`,
        d: `By precedent, foreign ships have obeyed when told to go to Nagasaki. Following the rules is the safest course.`
      },
      flawWhy: `Ares trusted the claim that the batteries could "drive them off easily." No one had actually compared the batteries with the guns on the black ships.`,
      opt: [
        { l: `Order the ships driven off`, d: `Order the batteries to fire on the black ships and force them to leave.`,
          ok: `Startled by the gunfire, the squadron pulled back out to sea for a while. But Perry announced he would retaliate and moved his ships deeper into Edo Bay.`,
          ng: `Return fire from the black ships silenced the batteries, and fires broke out in the coastal villages.`,
          tl: `The shogunate fires on the black ships. The American return fire damages the coast.` },
        { l: `Handle it calmly and strengthen the coastal guard`, d: `Order the magistrate's office to avoid any clash and buy time to decide what to do about the letter. Have the domains reinforce the guard along Edo Bay.`,
          ok: `The magistrate's office handled the Americans calmly and bought time. Guards lined the shores of Edo Bay.`,
          ng: `Talks went calmly, but a rumor spread through Edo that "foreign ships are going to attack," and the city was in an uproar.` },
        { l: `Keep insisting that they go to Nagasaki`, d: `Explain that Nagasaki is the only port for dealing with foreign countries, and demand by the rules that they go there.`,
          ok: `The magistrate's office repeated its demand that the ships go to Nagasaki. Perry refused and sent survey boats deeper into Edo Bay.`,
          ng: `Perry hardened his stance, signaling that if the letter was not accepted, he would take it to Edo himself.`,
          tl: `The shogunate keeps insisting on Nagasaki. The American squadron pushes deeper into Edo Bay.` }
      ],
      hist: `An officer from the Uraga magistrate's office approached the flagship Susquehanna, but Perry would meet only a high-ranking official and refused to go to Nagasaki. The shogunate chose to avoid a clash and ordered the domains to guard the coast.`,
      lesson: `If you take a hard line without checking the other side's strength, you can end up where there is no turning back. First, measure the gap between their power and yours.`,
      histTl: `Avoided a clash and strengthened the guard on Edo Bay`
    },
    {
      clock: `Around July 11, 1853`,
      title: `Accept the Letter?`,
      sit: `Perry is signaling that if the letter is not accepted, he will sail toward Edo and deliver it himself. His ships have entered deep into Edo Bay and begun surveying. Shogun Tokugawa Ieyoshi is sick in bed. Some in the shogunate say that simply accepting the letter would mean agreeing to open the country.`,
      rep: [
        { f: `Uraga Magistrate's Office`, t: `Perry says the answer does not have to come right away. What he wants first is for us to accept the letter.` },
        { f: `Edo City Magistrate's Office`, t: `Edo is in an uproar. Some people are going out to see the black ships, and others are fleeing the city.` },
        { f: `Official Who Studied the Precedents`, t: `Seven years ago, Biddle's ships simply left when we refused to accept anything. If we refuse firmly, this one will leave too.`, why: `Unlike Biddle, Perry was ready to stay even if refused. He came with steamships and surveyed deep into Edo Bay. If the shogunate had kept refusing, a clash could have broken out right in front of Edo.` }
      ],
      inv: `You asked the Uraga magistrate's office for details about Perry. Unlike Biddle, he shows no sign of backing down if refused. His survey boats keep moving deeper into Edo Bay.`,
      adv: {
        c: `Let's accept the letter and tell them we will take our time with the answer. Avoiding a clash comes first right now.`,
        a: `If we accept it, let's throw their demands back at them on the spot. We should say clearly that we will allow neither trade nor ports.`,
        d: `By precedent, Biddle's ships left when refused. If we respond the same way, I believe that gives the highest probability they will leave.`
      },
      flawWhy: `Laplace applied the last case as it was. The nature of the squadron and the resolve of its commander were both different this time.`,
      opt: [
        { l: `Accept the letter at Kurihama and answer next year`, d: `Set up a meeting place at Kurihama near Uraga and accept the letter. Say the answer will come later, and promise nothing on the spot.`,
          ok: `On July 14, the Uraga magistrate accepted the letter at Kurihama. Perry said he would come back next year for the answer, and the squadron sailed away.`,
          ng: `The letter was accepted, but voices in Edo cried that "the shogunate has bowed to foreigners."` },
        { l: `Refuse the letter and send them to Nagasaki`, d: `Keep to the country's rules and refuse to accept it here.`,
          ok: `Perry showed his displeasure but pulled back out to sea for now. He has not dropped his plan to move deeper into Edo Bay.`,
          ng: `The squadron moved deeper into the bay, close enough to be seen from Edo. The city fell into chaos.`,
          tl: `The shogunate refuses the letter. The American squadron closes in on Edo.` },
        { l: `Accept it, then flatly reject the demands on the spot`, d: `Accept the letter, but tell them right there that you will allow neither trade nor open ports.`,
          ok: `The shogunate's position was clear. But Perry left saying, "Next time I will come with a larger fleet."`,
          ng: `Perry hardened his attitude after the rejection and widened his survey of Edo Bay.`,
          tl: `The shogunate rejects the demands as it accepts the letter. The Americans harden their stance.` }
      ],
      hist: `The shogunate decided to accept the letter. On July 14, the Uraga magistrates received President Fillmore's letter at Kurihama. The answer was put off until the next year, and Perry left Edo Bay on July 17. Soon after, on July 27, Shogun Ieyoshi died.`,
      lesson: `What worked before will not always work again. Before you rely on a precedent, check whether the other side and the situation are the same as last time.`,
      histTl: `Accepted the letter at Kurihama and put off the answer until the next year`
    },
    {
      clock: `August 1853`,
      title: `Ask for Opinions?`,
      sit: `Shogun Ieyoshi has died, and his successor Iesada is in poor health. Perry will return next year for an answer. Should the shogunate decide alone, or ask the daimyo and its own officials for their views? Until now, the shogun's council has handled foreign affairs. Asking even the outside daimyo, the lords outside the Tokugawa inner circle, would be unheard of.`,
      rep: [
        { f: `Envoy from Mito Domain`, t: `Tokugawa Nariaki, the former lord of Mito, is urging a firm stance toward the foreigners.` },
        { f: `Finance Office`, t: `Building sea batteries and large ships will cost an enormous amount. It cannot be done without the domains' help.` },
        { f: `One of Your Aides`, t: `The great majority of the daimyo want the ships driven off next year. That is the will of the nation.`, why: `The opinions actually received were varied. Many said Japan should avoid war while delaying its answer, and only some called for driving the ships off at once. Speaking of "the will of the nation" before the opinions were even collected was premature.` }
      ],
      inv: `You read and compared the letters that had already come in from the daimyo. Their views are scattered, and not many clearly call for driving the ships off.`,
      adv: {
        c: `This is a matter of national importance. We should ask the daimyo and our officials for their views. If everyone helps decide, everyone will follow.`,
        a: `The great majority of the daimyo want the ships driven off. We should follow the will of the nation and decide to drive them off next year.`,
        d: `If the question is vague, the answers tend to be vague too. It is more efficient to present a draft policy, ask for views on it, and prepare our defenses at the same time.`
      },
      flawWhy: `Ares was sure that opinions not yet collected were "the will of the nation." A policy built on that assumption leads straight to a clash next year.`,
      opt: [
        { l: `Ask the daimyo and officials for their views`, d: `Show them a translation of the letter, and accept written opinions even from the outside daimyo and shogunate officials.`,
          ok: `Several hundred written opinions came in. Having a say in a national matter made many want to help the shogunate.`,
          ng: `Opinions were divided, and no decisive plan emerged. It also opened the way for outside daimyo to have a voice in the shogunate's politics.` },
        { l: `Present a draft policy first, then ask for views and speed up defenses`, d: `First present the shogunate's plan: "avoid war and delay the answer." Ask for views on it. At the same time, begin building sea batteries and large ships.`,
          ok: `The daimyo built their views around the shogunate's plan, and the debate came together more easily. Work on the sea batteries began.`,
          ng: `Some daimyo grumbled that "the conclusion was decided in advance." Even so, the defenses moved forward.`,
          tl: `The shogunate presents a draft policy before asking for views. The debate comes together, and coastal defense moves forward.` },
        { l: `Declare that the ships will be driven off next year`, d: `Follow the will of the nation and decide to drive Perry off when he returns.`,
          ok: `Those who wanted to drive off the foreigners welcomed the strong policy. But the coastal defense officials knew best that the strength to do it was lacking.`,
          ng: `Word of the policy reached the Americans, and a larger fleet was expected on the next visit.`,
          tl: `The shogunate declares it will drive off the ships next year. The danger of war rises.` }
      ],
      hist: `Abe Masahiro showed a translation of the letter to the daimyo and asked for views widely, even from the outside daimyo and shogunate officials. Opinions are said to have come in from townspeople as well. Most of the opinions said Japan should avoid war while delaying its answer. That same year, Abe began building the Shinagawa sea batteries and lifted the ban on building large ships. Asking for opinions so widely made the response look like a national effort. Some historians also see it as a turning point that weakened the system in which the shogunate alone decided national affairs.`,
      lesson: `Gathering views widely matters. But a question with no draft to react to can simply scatter the answers.`,
      histTl: `Asked the daimyo and shogunate officials widely for their views`
    },
    {
      clock: `February 1854`,
      title: `Perry Returns`,
      sit: `Perry has come back earlier than he said. His squadron has grown to seven ships, and later nine. This time he has anchored off Koshiba, closer to Edo than before. The shogunate told him it wants to meet at Uraga, but Perry insists on a place closer to Edo.`,
      rep: [
        { f: `Reception Commissioners`, t: `Perry rejects Uraga and wants to negotiate somewhere closer to Edo.` },
        { f: `Shinagawa Battery Works Official`, t: `Work on the sea batteries is moving forward, but they are not finished yet.` },
        { f: `Uraga Magistrate's Official`, t: `If we firmly tell Perry to go back to Uraga, he will obey. Last time, in the end, he handed over the letter at Kurihama, where we chose.`, why: `This time Perry refused to negotiate at Uraga and kept insisting on a place closer to Edo. If the shogunate had held out for Uraga, the squadron might have sailed right up to Edo.` }
      ],
      inv: `You had the reception commissioners report in detail on their talks with Perry. Perry has said flatly that he has no intention of going back to Uraga.`,
      adv: {
        c: `Last time, the handover was done near Uraga. We should follow procedure and keep insisting on Uraga.`,
        a: `There is no need to give them a place to negotiate at all. Tell them the answer is "no" and send them home at once.`,
        d: `Yokohama, a village between Uraga and Edo, meets both sides' conditions. It is the optimal compromise.`
      },
      flawWhy: `Minerva held on to last time's procedure. She never checked whether the other side would accept the same procedure again.`,
      opt: [
        { l: `Build a reception hall at Yokohama and agree to negotiate`, d: `Build a reception hall in the village of Yokohama, between Uraga and Edo. Put Hayashi Fukusai, head of the shogunate's Confucian academy, in charge of the talks.`,
          ok: `A reception hall was built at Yokohama, and talks began in March. Hayashi faced Perry calmly.`,
          ng: `Talks began at Yokohama, but there was harsh criticism for letting foreigners come so close to Edo.` },
        { l: `Keep insisting on meeting at Uraga`, d: `Follow the same procedure as last time, and say you will meet nowhere but Uraga.`,
          ok: `While messages went back and forth, the squadron stayed at anchor. The talks did not start, and time simply passed.`,
          ng: `Perry lost patience and moved the squadron right up to Edo. The city was thrown into turmoil.`,
          tl: `The shogunate insists on Uraga. The American squadron closes in on Edo.` },
        { l: `Refuse to negotiate and hand over only a letter of refusal`, d: `Give them a written reply saying you will allow neither trade nor open ports, and demand that they leave.`,
          ok: `You handed over the reply, but Perry refused to accept it and moved the squadron deeper into Edo Bay.`,
          ng: `Perry signaled that he might close off Edo Bay. If the sea lanes were cut, rice and goods would stop reaching Edo.`,
          tl: `The shogunate refuses to negotiate. The American squadron tightens the pressure on Edo Bay.` }
      ],
      hist: `The talks were set for the village of Yokohama, between Uraga and Edo. The shogunate appointed a team of reception commissioners led by Hayashi Fukusai, and negotiations began in March.`,
      lesson: `Separate the lines you cannot cross from the points you can give up. Do not put what you really want to protect at risk just to save face over places and procedures.`,
      histTl: `Built a reception hall at Yokohama and agreed to negotiate`
    },
    {
      clock: `March 1854`,
      title: `What the Treaty Will Say`,
      sit: `The talks at Yokohama go on. Perry is asking for three things: protection for shipwrecked American sailors, supplies of firewood, water, food and coal for his ships, and trade. Hayashi, the chief negotiator, wants to hold the line against trade. You must decide how much to give.`,
      rep: [
        { f: `Reception Commissioners`, t: `Perry is very firm about protecting shipwrecked sailors and getting supplies. On trade, he is listening to our explanation.` },
        { f: `Nagasaki Magistrate's Office`, t: `Qing China lost its war with Britain, gave up Hong Kong, and was forced to open its ports.` },
        { f: `Edo Bay Defense Officer`, t: `If we do not allow trade as well, Perry plans to start a war at once.`, why: `When Hayashi refused trade during the talks, Perry did not press hard and agreed to a treaty without trade. There was no need to allow trade all at once.` }
      ],
      inv: `You reread the reception commissioners' records. Even after trade was refused, Perry did not walk out. Supplies and the protection of shipwrecked sailors seem to be what he cares about most.`,
      adv: {
        c: `We grant protection for the shipwrecked and supplies as a matter of simple humanity, and we refuse trade. On that line, we can protect the country too.`,
        a: `We do not need to grant anything. Give them one thing and they will demand one thing after another.`,
        d: `In China's case, the cost of refusing to the end was war and the loss of territory. To bring the probability of conflict to zero, the rational choice is to allow trade too.`
      },
      flawWhy: `Laplace fed the report that "refusing trade means war" straight into his probabilities. He never worked out what the other side truly could not give up.`,
      opt: [
        { l: `Open Shimoda and Hakodate, and refuse trade`, d: `Agree to protect shipwrecked sailors and to supply firewood, water, food and coal. Open Shimoda and Hakodate as ports for that purpose. Do not allow trade.`,
          ok: `On March 31, the Treaty of Kanagawa was signed. Shimoda and Hakodate were opened, and trade was not included.`,
          ng: `The treaty was signed. But those who wanted to drive out the foreigners blamed the shogunate for "opening the country."` },
        { l: `Allow trade as well`, d: `To be sure of avoiding war, accept every demand, including trade.`,
          ok: `War was avoided. But trade began with no preparation, and prices and public opinion at home were badly shaken.`,
          ng: `The daimyo protested the decision to allow trade, and some domains began to ignore the shogunate's orders.`,
          tl: `The shogunate allows trade as well. Strong protests break out at home.` },
        { l: `Reject every demand`, d: `Give them one thing and they will demand another. Grant nothing.`,
          ok: `Perry broke off the talks and said he would ask his government for instructions. Next time he may come prepared for war.`,
          ng: `The talks collapsed. The squadron moved deeper into Edo Bay and turned its guns toward Edo.`,
          tl: `The shogunate rejects every demand, and the talks collapse.` }
      ],
      hist: `On March 31, 1854, the Treaty of Kanagawa, formally the Treaty of Peace and Amity between Japan and the United States, was signed at Yokohama. It opened Shimoda and Hakodate to supply ships with firewood, water, food, coal and other goods, and promised help for shipwrecked sailors. Trade was not included. The treaty also allowed the United States to station a consul at Shimoda, which opened the way to a later commercial treaty.`,
      lesson: `Work out what the other side wants most and what you most want to protect. Do not reduce it to a choice between refusing everything and accepting everything.`,
      histTl: `Signed the Treaty of Kanagawa without allowing trade`
    }
  ]
};
