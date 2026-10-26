window.SCENARIOS_EN = window.SCENARIOS_EN || {};
window.SCENARIOS_EN.tylenol = {
  title: `The Tylenol Poisonings`,
  sub: `The 31 Million Bottle Decision`,
  year: `September to November 1982`,
  place: `Johnson & Johnson Headquarters, New Brunswick, New Jersey`,
  role: `Chairman of Johnson & Johnson`,
  roleNote: `In James Burke's position`,
  meters: [`Consumer Safety`, `Public Trust`, `Company Survival`],
  intro: [
    `1982. The painkiller Tylenol is one of the most widely used medicines in American homes.`,
    `It holds more than a third of its market and is a pillar of the company's profits.`,
    `The company has a document called "Our Credo," written by a member of the founding family. The first responsibility it names is to the people who use its products.`,
    `You are the chairman. Unbelievable news has just arrived from the Chicago area.`
  ],
  endings: [
    { title: `Trust Restored`, text: `Tylenol returned to store shelves, and customers came back. The way you handled the crisis deepened public trust in the company.` },
    { title: `A Damaged Name`, text: `The company survived. But consumers long remembered how you hesitated.` },
    { title: `Trust Collapses`, text: `The Tylenol name stayed linked with poison until it faded away.` }
  ],
  epilogue: `In history, over a few days starting at the end of September 1982, seven people in the Chicago area died after taking Tylenol capsules laced with cyanide. The company recalled about 31 million bottles nationwide, at a reported cost of about $100 million. In November, it relaunched Tylenol in new packaging with three seals, and its market share recovered strongly within about a year. The incident made tamper-resistant packaging the industry standard, and a federal law against product tampering followed. When another tampering case occurred in 1986, the company stopped selling capsules altogether. The person responsible for the 1982 poisonings has never been found.`,
  turns: [
    {
      clock: `September 30, 1982`,
      title: `The First Report`,
      sit: `Over the past two days or so, several people near Chicago have died suddenly. They include a 12-year-old girl and three members of one family. Officials looking into the deaths noticed that every victim had taken Extra-Strength Tylenol capsules. Cyanide has reportedly been found in the capsules. Reporters will not stop calling.`,
      rep: [
        { f: `Public Relations`, t: `The capsules in question appear to come from the same lot number. TV stations across the country have started running the story.` },
        { f: `Sales`, t: `It is not settled that Tylenol caused these deaths. Most likely it is just a coincidence. Making noise about it will only hurt sales.`, why: `Capsules containing cyanide had been found in the bottles near the victims. It was far too late to explain this as a coincidence.` },
        { f: `Medical Affairs`, t: `Even a small amount of cyanide can kill within minutes. If people take the bottles in their homes now, more will die.` }
      ],
      inv: `You checked directly with officials in Chicago. Capsules containing cyanide were found in the bottles the victims took from. This is not a coincidence.`,
      adv: {
        c: `Even if we don't know the cause, people are dying. First tell everyone to stop taking it, and recall that lot.`,
        a: `Let's move first. If the company issues its own warning, we control the story.`,
        d: `This medicine sells tens of millions of bottles a year. Statistically, a handful of deaths could easily be a coincidence. We should wait until the facts are firm.`
      },
      flawWhy: `Laplace calculated the odds from total sales. He left out what made this case different: the victims had taken the same product in the same area.`,
      opt: [
        { l: `Issue a warning and recall the lot`, d: `Form a crisis team. Tell consumers to stop taking the product, recall the affected lot, and pull the TV ads.`,
          ok: `The company issued its own warning and opened a phone line for questions. The press reported that the company was hiding nothing.`,
          ng: `The warning went out, but the information was confused, and stores in many places were thrown into disorder.` },
        { l: `Say nothing until the facts are firm`, d: `Wait for the official investigation, and answer only "under investigation" until then.`,
          ok: `The investigation moved forward. But the bottles stayed on shelves in people's homes the whole time.`,
          ng: `The silence was taken as a sign the company was hiding something. Consumers stayed anxious, and rumors spread.`,
          tl: `The company stays silent, and the bottles left in homes are not recalled.` },
        { l: `Announce that "there is nothing wrong with the product"`, d: `Stress that quality control at the plants is flawless, and limit the damage to sales.`,
          ok: `Sales held up for a while. But later reports criticized the statement as premature.`,
          ng: `Right after the statement, a new victim was reported. The company's word lost all credibility.`,
          tl: `The company says the product is safe. A new victim is reported right after.` }
      ],
      hist: `Burke set up a crisis team inside the company. The company told consumers to stop taking the product, recalled the affected lot, and pulled its Tylenol advertising. It also answered questions from the press and the authorities.`,
      lesson: `When you don't yet know the cause, first block the paths that let the harm spread. Some situations do not allow you to confirm first and act later.`,
      histTl: `Issued a warning, recalled the lot, and stopped the ads`
    },
    {
      clock: `Early October 1982`,
      title: `The Plant or the Store?`,
      sit: `The death toll has reached seven. Every bottle found with poisoned capsules was sold in stores around Chicago. The biggest question is where the poison got in. If it happened inside a plant, bottles all over the country are in danger. If it happened after the bottles reached the stores, someone bought them, added poison, and put them back on the shelves. A press conference is coming up.`,
      rep: [
        { f: `Manufacturing`, t: `The bottles with poison include ones made at two separate plants, one in Pennsylvania and one in Texas.` },
        { f: `Plant Manager`, t: `There is no cyanide at all in our plants. At the press conference, you can state flatly that the poison got in outside the plant.`, why: `In fact, a small amount of cyanide was used in a quality control lab at the plant. It was kept away from production, but the claim of "no cyanide at all" was wrong, and the company later had to correct it.` },
        { f: `Outside Counsel`, t: `Avoid saying anything that could be taken as admitting the company is responsible. There is a risk of lawsuits.` }
      ],
      inv: `You had the plant inventory records checked one by one. The quality control lab had a small amount of cyanide for testing. It was kept away from the production area.`,
      adv: {
        c: `Say only what we know, and correct any mistake ourselves. If even one lie is found, every word we say will be doubted.`,
        a: `The plant manager says there is none at all. Make a strong statement that the plant has nothing to do with it, and protect the company's name.`,
        d: `To minimize the risk of lawsuits, the rational choice is to say less. We should stay silent until the investigation is done.`
      },
      flawWhy: `Ares wanted to use the plant manager's words without checking them. If "none at all" turned out to be false, every other statement from the company would be doubted too.`,
      opt: [
        { l: `Declare that the plant had nothing to do with it`, d: `State flatly at the press conference: "There is no cyanide at all in our plants. The poison got in outside."`,
          ok: `The press conference looked strong. But reporters want to see the inside of the plant for themselves.`,
          ng: `A few days later, it was reported that the plant lab had cyanide. The company was accused of lying.`,
          tl: `The company says there is no cyanide at its plants. Reports later reveal it was kept in a lab.` },
        { l: `Disclose the facts and correct mistakes yourself`, d: `Open the plants to the investigators. Explain that products from two plants are involved, and announce the cyanide in the lab yourself.`,
          ok: `The products came from separate plants, and the victims were only in the Chicago area. The investigation leaned toward someone tampering after the bottles reached the stores. The press praised the company's candor.`,
          ng: `The lab news raised suspicion for a while. But because the company announced it first, it did not turn into deep distrust.` },
        { l: `Stay silent until the results are in`, d: `Prepare for lawsuits and keep press conferences to a minimum.`,
          ok: `There were no legal missteps. But the press began to report that the company was nowhere to be seen.`,
          ng: `During the silence, a rumor spread that the plant itself was to blame.`,
          tl: `The company avoids the press, and a rumor of an accident at the plant spreads.` }
      ],
      hist: `The company cooperated with the investigation. The poisoned bottles had been made at separate plants, and the victims were concentrated around Chicago. This pointed to someone tampering with the bottles after they reached the stores. The company is reported to have corrected its first statement and revealed on its own that a plant lab had a small amount of cyanide.`,
      lesson: `In the middle of a crisis, accuracy matters more than speed in winning trust. When you find a mistake, correct it yourself before someone else points it out.`,
      histTl: `Opened the plants to investigators and corrected its own mistake`
    },
    {
      clock: `October 5, 1982`,
      title: `A Nationwide Recall`,
      sit: `The tampering most likely happened in stores. The victims were all in the Chicago area. But in California, what appears to be a copycat tampering of Tylenol has been reported. Pulling the capsules from every store in the country would mean about 31 million bottles and a cost on the order of $100 million. Some officials were reportedly wary of a national recall, saying it would make the poisoner feel he had won.`,
      rep: [
        { f: `Finance`, t: `A nationwide recall would take a big bite out of the company's annual profit. If we limit it to one region, the loss would be a fraction of that.` },
        { f: `Government Liaison`, t: `A nationwide recall is an overreaction. There is almost no chance of the same thing happening outside Chicago.`, why: `What appeared to be a copycat case had already been reported outside Chicago. Once the method was known from the news, it could happen at any store.` },
        { f: `Consumer Hotline`, t: `Calls are pouring in from all over the country asking if the bottles at home are safe. Many people want to trade their capsules for tablets.` }
      ],
      inv: `You had reports gathered from around the country. The California case appears to be a copycat, and the method is widely known from the news. There is no basis for saying that places outside Chicago are safe.`,
      adv: {
        c: `The authorities are cautious too. Let's recall only in the Chicago area where the victims were, and keep up the warnings elsewhere.`,
        a: `Recall nationwide and promise to trade capsules for tablets. A half measure will cost us even more trust.`,
        d: `All the victims were in the Chicago area. On cost and benefit, a regional recall is optimal.`
      },
      flawWhy: `Minerva thought that following the authorities' caution was the careful choice. With copycats appearing, the bottles left in homes were now the greatest danger.`,
      opt: [
        { l: `Recall the capsules nationwide`, d: `Pull Tylenol capsules from every store in the country. Ask people to trade the capsules at home for tablets, free of charge.`,
          ok: `About 31 million bottles were recalled. The loss was huge, but the company was seen as putting consumers first.`,
          ng: `The recall cost more than expected, and the stock price fell. Even so, consumers were kept safe.` },
        { l: `Recall only in the Chicago area`, d: `Pull the product from stores in the affected region, and keep up the warnings elsewhere.`,
          ok: `The loss was kept down. But consumers in other regions eye the bottles in their stores with worry.`,
          ng: `Tampering was found in another state. The company was sharply asked why it had not recalled nationwide.`,
          tl: `The recall is limited to the Chicago area. Tampering is found in another state.` },
        { l: `Skip the recall and rely on warnings and checks`, d: `Step up inspections in stores and tell consumers to look closely at their bottles.`,
          ok: `Luckily, there were no new victims. But the company's stance drew heavy criticism.`,
          ng: `A bottle slipped past the store checks, and new harm followed.`,
          tl: `No recall, only store checks. New harm follows.` }
      ],
      hist: `Around October 5, the company decided to recall Tylenol capsules nationwide. The recall is reported to have covered about 31 million bottles at a cost of about $100 million. The company asked people to trade the capsules at home for tablets.`,
      lesson: `When you weigh lives against costs, compare what you would lose in the worst case. In a crisis where copycats can appear, the area where harm occurred is not the only area at risk.`,
      histTl: `Recalled about 31 million bottles of capsules nationwide`
    },
    {
      clock: `Mid-October 1982`,
      title: `Abandon the Brand?`,
      sit: `The recall is over. But Tylenol's market share is reported to have fallen from more than a third to under 10 percent. Many in the advertising business say the name will never sell again. Do you start over with a new name, or come back as Tylenol? The poisoner has not been caught.`,
      rep: [
        { f: `Ad Agency`, t: `A name tied to poison never recovers. You should start over with a new name.`, why: `The company's research showed that many consumers did not blame the company, and many said they would come back once the product was safe. In fact, Tylenol won back much of its share without changing its name.` },
        { f: `Market Research`, t: `Most consumers see the company as a victim. Many say they will come back once safety is shown.` },
        { f: `Public Relations`, t: `TV news programs are asking the chairman himself to appear.` }
      ],
      inv: `You looked closely at the market research. Many former users say they will buy again once the packaging is safe.`,
      adv: {
        c: `Keeping the name shows we are not running away. You should appear in public yourself and explain.`,
        a: `If we drop the name now, the poisoner wins. Let's win it back head-on.`,
        d: `The brand's favorability has dropped sharply. Past data shows a new name recovers faster.`
      },
      flawWhy: `Laplace looked only at the drop in favorability. He left out the research showing that consumers saw the company as a victim, not a culprit.`,
      opt: [
        { l: `Keep the Tylenol name and speak out in public`, d: `Go on TV yourself and explain what happened and how the company responded. Keep the name, and promise it will come back in a safe form.`,
          ok: `Burke appeared on news programs and spoke frankly. Among consumers, a feeling grew that they were waiting for Tylenol's comeback.`,
          ng: `His appearances were well received, but sales did not come back right away.` },
        { l: `Start over with a new name`, d: `Drop a name tied to the memory of poison.`,
          ok: `The new name was accepted without confusion. But many longtime customers drifted away.`,
          ng: `No one knew the new name, and all that remained was the sense that the company changed its name to run away.`,
          tl: `The Tylenol name is dropped for a new brand.` },
        { l: `Stay out of sight until the uproar dies down`, d: `Wait for the press to cool off, and come back quietly over time.`,
          ok: `The uproar died down. But rival painkillers had filled the shelves.`,
          ng: `While the company stayed silent, rivals took Tylenol's customers.`,
          tl: `The company stays silent, and rival painkillers take over the shelves.` }
      ],
      hist: `Burke did not give up the Tylenol name. He appeared on TV news programs and elsewhere to explain the company's response. The company's own research also showed many consumers would come back once safety was shown.`,
      lesson: `"Everyone says so" is not the same as what the data shows. Before you decide, check what the customers themselves are saying.`,
      histTl: `Kept the Tylenol name. The chairman explained on TV himself.`
    },
    {
      clock: `November 1982`,
      title: `The Relaunch`,
      sit: `The time has come to put Tylenol back in stores. The question is whether you can bring it back in a form that never allows the same method again. Making the packaging tamper-proof will take effort and money. Rival painkillers have gained share in the meantime.`,
      rep: [
        { f: `Packaging Engineer`, t: `Glue the box flaps, wrap the neck of the bottle in plastic, and seal the mouth with foil. With three seals, any opening always leaves a trace.` },
        { f: `Sales`, t: `Consumers are already forgetting the incident, even without new packaging. Put it back on the shelves in its old form right away, and sales will return.`, why: `Consumers had not forgotten. Many said they would not buy unless they could see for themselves that it was safe.` },
        { f: `Government Official`, t: `The Food and Drug Administration is preparing rules that would require tamper-resistant packaging.` }
      ],
      inv: `You had shoppers interviewed in stores. Most of them remember the incident and say they will not buy unless the packaging shows if it has been opened.`,
      adv: {
        c: `Make safety something people can see. Three seals cost money, but they are the fastest way to win back trust.`,
        a: `Rivals are taking our shelves. We should come back in the old form as soon as possible.`,
        d: `We should wait for the rules to be set. If the whole industry bears the same cost, our competitive disadvantage is zero.`
      },
      flawWhy: `Ares looked only at how fast to win back the shelves. He left out what the company would lose if the same method were used again.`,
      opt: [
        { l: `Relaunch with triple-sealed packaging`, d: `Come back in tamper-resistant packaging. Hand out discount coupons, and have the sales force explain the changes directly to doctors and pharmacies.`,
          ok: `Tylenol in its new packaging returned to stores, and its share recovered strongly within about a year. Packaging that shows if it has been opened soon became the industry standard.`,
          ng: `The packaging was costly, and the recovery took time. Even so, customers came back little by little.` },
        { l: `Bring it back right away in the old packaging`, d: `Put winning back the shelves first.`,
          ok: `The shelves came back quickly. But many shoppers picked up a bottle and put it back down.`,
          ng: `What appeared to be another copycat tampering struck a bottle in the old packaging.`,
          tl: `Relaunched in the old packaging. Another copycat tampering occurs.` },
        { l: `Wait for the government rules`, d: `Come back once the industry standard exists, in packaging that meets it.`,
          ok: `It came back in packaging that met the standard. But it was now level with its rivals, and the late start hurt.`,
          ng: `While you waited, rivals locked in their share, and Tylenol's shelf space shrank.`,
          tl: `Waiting for the rules delays the relaunch. Rivals take market share.` }
      ],
      hist: `In November 1982, the company relaunched Tylenol in packaging with three seals: glued box flaps, a seal around the neck of the bottle, and a foil seal over the mouth. It handed out discount coupons, and its sales force visited medical professionals to explain. Its share is reported to have recovered strongly within about a year.`,
      lesson: `To win back trust, making safety visible is stronger than saying "it is safe."`,
      histTl: `Relaunched in triple-sealed, tamper-resistant packaging`
    }
  ]
};
