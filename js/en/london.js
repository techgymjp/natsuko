window.SCENARIOS_EN = window.SCENARIOS_EN || {};
window.SCENARIOS_EN.london = {
  title: `The Great Fire of London`,
  sub: `Four Days of Fire`,
  year: `September 1666`,
  place: `Whitehall Palace, London, England`,
  role: `King of England`,
  roleNote: `In Charles II's position. You can also hand command of the firefighting to your brother, James, Duke of York.`,
  meters: [`Limiting the Damage`, `Safety of the People`, `Order and Trust`],
  intro: [
    `September 1666. London is only just recovering from the Great Plague of the year before.`,
    `Inside the old walls of the City, houses of wood and plaster are packed along narrow lanes. After a dry summer, the whole town is bone-dry.`,
    `England is at war with the Dutch and the French, and Londoners are growing suspicious of foreigners.`,
    `You are King Charles II. On Sunday, September 2, word arrives that a fire has broken out in the east of the City.`
  ],
  endings: [
    { title: `Rising from the Ashes`, text: `Many homes were lost. But the fire was stopped, and the people, trusting the King's word, began to rise from the ruins.` },
    { title: `A Capital in Ashes`, text: `The fire is finally out. But the losses are huge, and the people's fear and anger are still smoldering.` },
    { title: `Trust Burned Away`, text: `The fire burned the city to the ground. All that remained in the hearts of the survivors was suspicion of their King and their neighbors.` }
  ],
  epilogue: `In history, the fire broke out in the early hours of September 2 and was mostly out by around the 6th. About 13,000 houses, 87 parish churches, and St Paul's Cathedral burned. It is said that about 70,000 people lost their homes. Very few deaths were recorded, but the deaths of poor people were rarely written down, so the true number is not known. When the city was rebuilt, new rules required houses to be built of brick or stone. St Paul's Cathedral was rebuilt to a design by Christopher Wren.`,
  turns: [
    {
      clock: `Sunday, September 2, Morning`,
      title: `The Fire in Pudding Lane`,
      sit: `Around 1 a.m., a fire started at the shop of the baker Thomas Farriner in Pudding Lane, near London Bridge. The Lord Mayor, Sir Thomas Bloodworth, came to the scene. It is said that he made light of the fire and was reluctant to pull down houses to stop it from spreading. Pulling down houses could mean paying the owners for them. Driven by a strong east wind, the fire is spreading into the warehouses along the Thames. By custom, fires in the City are the job of the Lord Mayor and the City's officials.`,
      rep: [
        { f: `Navy Board Official`, t: `The fire has spread nearly to London Bridge. Unless houses downwind are pulled down to cut off its path, it will not stop.` },
        { f: `City Official`, t: `The Lord Mayor says it is nothing much. Leave the City's business to the City, and it will be out by noon.`, why: `Lord Mayor Bloodworth is said to have made light of the fire. But among dry wooden houses and in a strong east wind, the fire was already too strong for hand pumps and buckets to stop.` },
        { f: `Officer of the Guards`, t: `If you send the Guards, they can help pull down houses. But that means stepping on the City's authority.` }
      ],
      inv: `You had someone look at the eastern sky from a high point in the palace. The smoke stretches far along the river, and the fire has spread across several streets. This does not look like a fire that will be out by noon.`,
      adv: {
        c: `Respect the City's authority, but as King, order the houses pulled down. It is wise to avoid a clash with the City.`,
        a: `The Lord Mayor cannot be relied on. Put the Duke of York and the Guards in charge of fighting the fire right now.`,
        d: `The officials on the scene expect it to be out by noon. There seems to be no need for the Crown to act.`
      },
      flawWhy: `Laplace used the officials' optimism as his estimate without question. He left out what was special about this fire: a town of dry wooden houses and a strong wind.`,
      opt: [
        { l: `Order the Lord Mayor to pull down houses and offer soldiers`, d: `Send a messenger to order the houses pulled down in the King's name. Offer soldiers to help, but leave the command to the Lord Mayor.`,
          ok: `The King's order reached the Lord Mayor. Houses began to come down, but there were not enough hands, and the work was too slow.`,
          ng: `The Lord Mayor complained that people would not obey him. The demolition could not keep up with the fire.` },
        { l: `Have your brother, the Duke of York, take command now`, d: `Send the Guards and have them pull down houses in the fire's path under the Duke of York's command. Ask the City's officials to cooperate.`,
          ok: `The Guards joined the demolition, and work to cut off the fire's path began on the very first day.`,
          ng: `The City's officials resented the royal interference. Command split in two, and there was confusion on the scene.`,
          tl: `The Duke of York takes command on the first day. The Guards begin pulling down houses.` },
        { l: `Leave it to the City and watch from the palace`, d: `A fire in the City is the City's job. Wait for reports.`,
          ok: `The fire was still burning past noon. The Crown only acted after it had spread widely.`,
          ng: `Overnight, the fire swallowed the eastern part of the City. People began to whisper, "What is the King doing?"`,
          tl: `The King only watches the City's response. The fire spreads widely overnight.` }
      ],
      hist: `Charles II heard about the fire from Samuel Pepys, a Navy Board official who came to the palace. Through Pepys, the King ordered the Lord Mayor to pull down houses to stop the fire and said he would send soldiers. But on the first day, the response was left to the Lord Mayor. It is said that the Lord Mayor complained that people would not obey him, and the demolition could not keep up with the fire.`,
      lesson: `Protecting turf and precedent can slow the first response to a crisis. Let the speed of the fire, not the lines of authority, set the pace.`,
      histTl: `Ordered the Lord Mayor to pull down houses, but left the first day's command to the City`
    },
    {
      clock: `Monday, September 3`,
      title: `One Command`,
      sit: `The fire spread overnight. Oil, tallow, and timber in the warehouses along the Thames are burning, and the strong east wind carries sparks to the west. The Lord Mayor's command has collapsed, and the streets are jammed with people trying to carry out their belongings. You have decided to put your brother, James, Duke of York, in charge of fighting the fire. The question is how to stop it.`,
      rep: [
        { f: `Officer of the Guards`, t: `The streets are full of carts loaded with belongings. The men who should be pulling down houses can't get to the scene.` },
        { f: `Boatman`, t: `The river is crowded with boats loaded with people's goods. The price of a boat has shot up.` },
        { f: `Spokesman for the Householders`, t: `Who will pay us for the houses you pull down? The fire will stop just short of here. Only pull down the houses that are about to burn.`, why: `The fire jumped across the narrow lanes. Gaps made just in front of the fire were often overtaken before the demolition was finished.` }
      ],
      inv: `You had the places pulled down yesterday checked. The gaps made just in front of the fire had been crossed by sparks before the demolition was finished.`,
      adv: {
        c: `Pulling down homes will make the people who live in them resent us. Let's limit it to the houses that are about to burn.`,
        a: `We should unite the command under the Duke of York, gather workers, and pull down houses all at once.`,
        d: `The crowded streets are holding up the work. If we move the people out first, the work will go faster too.`
      },
      flawWhy: `Minerva put avoiding the householders' anger first. She missed the danger that the demolition could not keep up with the speed of the fire.`,
      opt: [
        { l: `Set up fire posts and gather workers to pull down houses`, d: `Under the Duke of York, set up fire posts around the town. Station courtiers and officials at them, and draw in workers with food and pay.`,
          ok: `The Duke of York kept riding from post to post. The scattered efforts of the people began to come together.`,
          ng: `The posts were set up, but the fire was so fierce that it jumped the gaps one after another.` },
        { l: `Pull down only the houses about to burn`, d: `Avoid angering the householders and limit the work to the houses just in front of the fire.`,
          ok: `The householders' complaints were kept down. But the fire crossed the narrow gaps again and again.`,
          ng: `The fire caught up before the gaps were finished. The houses pulled down and the houses left standing both burned.`,
          tl: `Demolition is kept to a minimum, but the fire jumps one gap after another.` },
        { l: `Evacuate first and pull down houses later`, d: `Use soldiers and officials to clear the streets and get people and their goods outside the walls.`,
          ok: `The jams in the streets cleared, and many people escaped safely. But meanwhile, the fire moved further west.`,
          ng: `The evacuation went forward, but the delay in pulling down houses let the fire grow stronger.`,
          tl: `Evacuation comes first and demolition is delayed. The fire spreads further west.` }
      ],
      hist: `On September 3, Charles II put James, Duke of York, in charge of fighting the fire. Fire posts were set up around the town, and workers were gathered. It is said that the Duke went around the scene himself. Even so, the fire did not stop, and the Royal Exchange burned down that day.`,
      lesson: `When command is split, unite it first. A system that brings in workers moves people more strongly than orders do.`,
      histTl: `The Duke of York took command of the firefighting and set up fire posts`
    },
    {
      clock: `Tuesday, September 4`,
      title: `Gunpowder`,
      sit: `The fire is moving into the western part of the City and threatens to reach St Paul's Cathedral. Pulling down houses by hand is not fast enough. To the east, the fire is getting close to the Tower of London, where a large store of gunpowder is kept. Down the Thames, the Navy's dockyards have workmen who know how to handle gunpowder.`,
      rep: [
        { f: `Foreman from the Navy Dockyard`, t: `If we blow up houses with gunpowder, we can make wide gaps many times faster than pulling them down by hand.` },
        { f: `Garrison of the Tower of London`, t: `If the fire reaches the Tower's powder magazine, the whole area around it will be blown apart.` },
        { f: `City Alderman`, t: `Blowing up houses will destroy homes that are not even burning. The cost of compensation would be enormous. Keep pulling them down by hand, and the fire will stop soon.`, why: `That day, the fire grew stronger in the west of the City, and that night St Paul's Cathedral burned down. Pulling down houses by hand could no longer keep up with the speed of the fire.` }
      ],
      inv: `You had the dockyard workmen blow up one house as a test. A gap that would take half a day to clear by hand opened all at once.`,
      adv: {
        c: `We may not be able to stop the fire anymore. We should put all our strength into getting people out.`,
        a: `Use the gunpowder. If we blow up the area around the Tower first, we can protect the magazine too.`,
        d: `If you calculate the cost of blasting and the compensation, pulling houses down by hand gives a smaller loss.`
      },
      flawWhy: `Laplace compared only the visible cost of compensation. He did not count the houses that would burn because the demolition came too late.`,
      opt: [
        { l: `Blow up houses with the Navy's gunpowder to make wide firebreaks`, d: `Call workmen and gunpowder from the Navy dockyards, and blow up houses around the Tower of London and in the fire's path. The King and the Duke of York stand at the scene.`,
          ok: `The fire could not cross the wide gaps opened by the blasts. The Tower of London was saved.`,
          ng: `The first blasts left gaps too narrow, and the fire crossed them. Even so, the area around the Tower held.` },
        { l: `Keep pulling down houses by hand`, d: `Stick with the method so far, so that houses that are not burning are not destroyed.`,
          ok: `The demolition continued, but it could barely keep up with the fire.`,
          ng: `The fire caught up before the demolition was done, and the gaps were broken one after another.`,
          tl: `No gunpowder is used, and demolition by hand continues. The fire keeps spreading west.` },
        { l: `Abandon the city and get the people outside the walls`, d: `Give up on stopping the fire and use soldiers and officials to guide the evacuation.`,
          ok: `Many people escaped safely. But with no one to stop it, the fire moved deep into the city.`,
          ng: `The lines of evacuees fell into confusion, and meanwhile the fire reached the western suburbs.`,
          tl: `Firefighting is abandoned for evacuation alone. The fire spreads beyond the City.` }
      ],
      hist: `Around this time, blasting with gunpowder came into use. Around the Tower of London, workmen from the Navy dockyards blew up houses and saved the powder magazine. It is said that Charles II and the Duke of York went to the scene, passed buckets by hand, and encouraged the workers. That night, St Paul's Cathedral burned down. Then the east wind died down, and the firebreaks began to hold the fire back.`,
      lesson: `If you compare only the losses you can see, you miss the losses of standing by. Weigh the pain of tearing down against the pain of burning on the same scale.`,
      histTl: `Blew up houses with the Navy's gunpowder to make firebreaks`
    },
    {
      clock: `Wednesday, September 5`,
      title: `The People in the Fields`,
      sit: `The fire is starting to weaken. But tens of thousands of people who lost their homes are crowded into Moorfields, just north of the walls, and the fields farther north at Islington and Highgate. There are not enough tents or food. The bread ovens and the markets have burned too. Autumn nights are cold.`,
      rep: [
        { f: `Justice of the Peace`, t: `If we have food brought in from the nearby villages and towns, we can open markets outside the walls.` },
        { f: `Parish Priest`, t: `The churches that survived have offered to store people's belongings.` },
        { f: `Officer of the Guards`, t: `The crowds in the fields are about to riot. The only way to keep them down is to surround them with soldiers.`, why: `Most of the people in the fields were barely managing to guard their belongings and huddle together. There was fear and anger, but most of it came from having no food and no place to sleep.` }
      ],
      inv: `You sent someone to the fields to see how things were. People are sitting on the ground, exhausted. They are restless because they have no food and no place to sleep.`,
      adv: {
        c: `What the people lack is food. Let's have bread brought in from the nearby counties and open markets.`,
        a: `A confused crowd could be the spark for the next disaster. Put soldiers on watch first and keep order.`,
        d: `The royal stores hold enough for a few days. Handing it out directly is the fastest way to get food to them.`
      },
      opt: [
        { l: `Open markets nearby and have bread brought in`, d: `Have the nearby counties send bread, and open temporary markets outside the walls. Order other towns to take in the homeless and let them work at their trades.`,
          ok: `Bread arrived from the countryside, and lines formed at the markets. A little calm returned to people's faces.`,
          ng: `The food arrived, but the system for handing it out could not keep up, and people fought over it in the fields.` },
        { l: `Open the royal stores and hand out food directly`, d: `Have officials hand out food from the palace stores to the people in the fields.`,
          ok: `People were grateful for the King's food. But there is only so much, and it will not last long.`,
          ng: `Crowds rushed the places where food was handed out, and people were hurt. Anger over the shortfall remained.`,
          tl: `The Crown hands out food directly, but there is not enough, and chaos follows.` },
        { l: `Surround the crowds in the fields with soldiers`, d: `To prevent a riot, ring the fields with soldiers and limit people's comings and goings.`,
          ok: `There was no riot. But in fields where no food arrived, people grew weaker.`,
          ng: `The anger of the people surrounded by soldiers boiled over, and scuffles broke out here and there.`,
          tl: `The homeless are fenced in by soldiers. Anger and sickness spread.` }
      ],
      hist: `The King ordered the nearby counties to send bread and to open markets outside the walls. He also allowed people to store their belongings in churches and other buildings. He asked other towns to take in the homeless and let them work at their trades. Even so, many people lived for a long time in the fields or in makeshift huts.`,
      lesson: `When great numbers of people are in need, deliver what they lack before you try to control them. Most anger is born from shortage.`,
      histTl: `Had bread sent in from the countryside and opened temporary markets`
    },
    {
      clock: `Wednesday, September 5 to Thursday, September 6`,
      title: `Rumors`,
      sit: `The fire is almost out. But rumors are spreading through the town: "The French and the Dutch set the fire." "It's a Catholic plot." Foreigners are being attacked by mobs in the streets, and some are said to have nearly been killed. You are about to head to Moorfields, where the homeless have gathered.`,
      rep: [
        { f: `Justice of the Peace for Westminster`, t: `Foreigners are being attacked by mobs. Officials have taken some of them into custody to keep them safe.` },
        { f: `Militia Captain`, t: `There's definitely a gang of foreigners who set the fire. If we round up all the foreigners at once, we can stop the next fire.`, why: `No evidence of arson was found. A later inquiry by Parliament also found no evidence of a plot. The fire is believed to have started by accident at the bakery.` },
        { f: `Foreign Embassy`, t: `Our merchants are shut up in their houses, shaking with fear. We ask for the King's protection.` }
      ],
      inv: `You had the questioning of people arrested on suspicion of arson checked. In every case there was no evidence. All of them had nearly been handed over to mobs.`,
      adv: {
        c: `The King himself should stand before the people and tell them it was no plot. Let's protect the foreigners who have been attacked.`,
        a: `Let's round up all the foreigners at once. If there is a culprit, that will stop the next fire.`,
        d: `Rumors tend to fade within a few days if left alone. If the King acts, it will only give the rumors more weight.`
      },
      flawWhy: `Ares treated the militia captain's word "definitely" as if it were evidence. Arresting innocent people would only give the rumors an official stamp.`,
      opt: [
        { l: `Stand before the homeless and tell them it was no plot`, d: `At Moorfields, tell the crowd that the fire was the hand of God and not a plot. Promise that the King will protect them, and have the foreigners who were attacked placed under protection.`,
          ok: `The King's words softened the mood of the crowd. Attacks on foreigners slowly died down.`,
          ng: `The King's words were heard, but the rumors did not go away. Talk of a plot went on for years.` },
        { l: `Round up all the foreigners at once`, d: `To flush out the arsonists, detain and question the foreigners in the town.`,
          ok: `The crowds calmed down for a while. But innocent people were thrown in jail, and relations with foreign countries cooled.`,
          ng: `The arrests gave the rumors an official stamp, and attacks in the streets actually increased.`,
          tl: `All foreigners are detained at once. Innocent people are jailed.` },
        { l: `Ignore the rumors and wait for them to die down`, d: `The King stays silent and focuses on firefighting and food supplies.`,
          ok: `The rumors slowly faded. But the wounds of the foreigners who were attacked remained.`,
          ng: `The silence was taken as "hiding something," and the rumors grew even bigger.`,
          tl: `The King stays silent. Attacks on foreigners continue.` }
      ],
      hist: `On September 5, Charles II is said to have spoken to the homeless at Moorfields and told them the fire was the hand of God, not a plot. Some of the foreigners who were attacked were taken into custody by officials for their own protection. Even so, the plot theory lived on. Robert Hubert, a French watchmaker, confessed to setting the fire and was hanged. It was later found that he had not even arrived in London when the fire started.`,
      lesson: `After a crisis, people cry out for someone to blame. Don't put a name on anger that has no evidence behind it. That too is a leader's job.`,
      histTl: `Spoke to the homeless at Moorfields and denied the plot theory`
    }
  ]
};
