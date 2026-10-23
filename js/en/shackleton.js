window.SCENARIOS_EN = window.SCENARIOS_EN || {};
window.SCENARIOS_EN.shackleton = {
  title: "The Endurance",
  sub: "Bring All 28 Home Alive",
  year: "1915–1916",
  place: "Weddell Sea, Antarctica",
  role: "Expedition Leader",
  roleNote: "In Ernest Shackleton's position",
  meters: ["Team morale", "Food and supplies", "Physical strength"],
  intro: [
    "In August 1914, the Imperial Trans-Antarctic Expedition, led by Ernest Shackleton, left Britain.",
    "The goal: the first crossing of the Antarctic continent.",
    "But before it could reach land, the expedition ship Endurance was trapped in the pack ice of the Weddell Sea.",
    "You are the leader of 28 men. There is no contact with the outside world. No one is coming to help."
  ],
  endings: [
    { title: "All Men Home", text: "All 28 men came home. Not one was lost. The goal was not reached, but you did your duty as their leader." },
    { title: "Home, But at a Cost", text: "Many of the men came home alive. But you left a loss that can never be undone in that frozen land." },
    { title: "White Silence", text: "When the rescue ship finally arrived, hardly anyone was left on the island." }
  ],
  epilogue: "Historically, all 28 men of the Endurance party came home alive. Not one was lost. The crossing of the continent never happened, but Shackleton is still remembered as a model of leadership in extreme conditions. On the other side of the continent, however, three men of the Ross Sea party, who were laying supply depots, lost their lives.",
  turns: [
    {
      clock: "October 27, 1915",
      title: "Abandon Ship?",
      sit: "Endurance has been trapped in the Weddell Sea pack ice for nine months. The pressure of the ice is crushing the hull, and water has finally started coming in. There are 28 men. The nearest land is hundreds of kilometers away. There is no way to contact the outside world.",
      rep: [
        { f: "Captain Frank Worsley", t: "The keel is twisted, and water keeps pouring in at the stern. The pumps can't keep up." },
        { f: "A crew member", t: "If we brace the bulkheads, the ship can hold out a bit longer.", why: "The ship was being crushed by the pressure of the ice. About a month later, on November 21, Endurance sank completely." },
        { f: "Meteorologist", t: "Spring has come and the ice is starting to break up. But the broken ice is pressing on the ship even harder." }
      ],
      inv: "You inspect the ship with Captain Worsley. The hull is twisted by the ice. No amount of bracing can keep up.",
      adv: {
        c: "The ship won't last. We should leave while we can still get the supplies and boats off.",
        a: "Sitting around on the ice won't bring a rescue. Let's start walking toward land right now.",
        d: "The ship has warmth and a food store. Survival time is longest on board."
      },
      flawWhy: "Laplace calculated survival time assuming the ship would stay as it is. The time until the ship sinks was missing from the model.",
      opt: [
        { l: "Abandon ship and move supplies and boats onto the ice", d: "Haul out the three lifeboats, food, and tents, and set up camp on the ice.", ok: "The men moved the supplies out quickly and efficiently. Shackleton is said to have told them, \"Ship and stores have gone, so now we'll go home.\"", ng: "The supplies got out in time. But the men are downcast after losing the ship that was their home." },
        { l: "Stay aboard and keep bracing and pumping", d: "The ship is still afloat. Hold out as long as you can.", ok: "The ship held for a while, but a few days later there was no choice but to escape. Few supplies were saved.", ng: "In the night the hull collapsed all at once, and the men fled onto the ice, leaving most of the supplies behind.", tl: "Stays aboard too long and escapes after losing most of the supplies" },
        { l: "Set out across the ice for land at once", d: "Load the boats onto sledges and start walking toward the nearest land.", ok: "The march began, but jumbled pressure ice blocked the way. In three days they covered only a few kilometers.", ng: "Hauling the heavy boats wore the men out within days. Their strength was badly drained.", tl: "Forces a march across the ice toward land and exhausts the men" }
      ],
      hist: "Shackleton abandoned ship on October 27 and set up camp on the ice. Endurance sank on November 21. He also tried a march toward land, but gave it up when the pressure ice blocked the way.",
      lesson: "Check whether your reason for thinking \"we're still fine\" rests only on the assumption that things will stay as they are.",
      histTl: "Abandons ship and sets up camp on the ice"
    },
    {
      clock: "October 30, 1915",
      title: "What to Carry",
      sit: "To move with the boats on sledges, the load must be cut to the bare minimum. Food, tents, cooking gear, boats. The men's personal belongings add weight too.",
      rep: [
        { f: "Second-in-command Frank Wild", t: "The men's personal belongings add up to several hundred kilograms." },
        { f: "Dr. Macklin", t: "If the drift drags on, a broken spirit will be more dangerous than any injury." },
        { f: "A crew member", t: "Luxuries won't keep anyone alive. We should throw them all out.", why: "In extreme conditions, morale was directly tied to survival. Shackleton had the banjo kept as \"vital mental medicine.\"" }
      ],
      inv: "You talk it over with the doctor. He says that when monotony and despair drag on, sleeplessness and quarrels spread easily.",
      adv: {
        c: "Cut the weight, but don't cut away what holds the men together.",
        a: "Make even one exception and discipline will crumble. The same rule for everyone.",
        d: "The optimal weight for items that do not aid survival is zero."
      },
      flawWhy: "Laplace defined \"things that aid survival\" as physical necessities only. It left out morale, an invisible resource.",
      opt: [
        { l: "Limit personal items to about 2 pounds, with exceptions for morale", d: "The leader throws away his own gold coins first. But Hussey's banjo goes along as \"mental medicine.\"", ok: "Shackleton was the first to toss his gold coins into the snow. The men followed his example. At night, the sound of the banjo rang through the camp.", ng: "Some grumbled, but seeing the leader throw away his own things, most of the men went along." },
        { l: "Leave it to each man", d: "Trust the men as adults.", ok: "There were more personal items, but few complaints. The load is heavy.", ng: "A sense of unfairness grew between men with lots of gear and men with little, and arguments broke out.", tl: "Leaves packing to each man and suffers a heavy load and resentment" },
        { l: "The bare minimum for all. No luxuries at all", d: "No exceptions. Be strict about fairness and keeping the load light.", ok: "The load got lighter. But the long nights in camp grew silent, and the men talked less and less.", ng: "With nothing to enjoy, the men grew more irritable and quarreled more.", tl: "Bans all luxuries. Morale sinks during the long drift" }
      ],
      hist: "Shackleton limited personal items to about 2 pounds (about 900 g), and threw away his own gold coins and pages from a Bible to set an example. But he had meteorologist Leonard Hussey's banjo taken along as \"vital mental medicine.\"",
      lesson: "Put invisible resources like morale and trust on the same ledger as the visible ones when you decide.",
      histTl: "Limits personal items to about 2 pounds. The banjo is the exception"
    },
    {
      clock: "April 9, 1916",
      title: "The Ice Breaks Up",
      sit: "The drift has lasted five months. The ice under the camp has started to break apart. The time has come to take to the sea in the three boats: the James Caird, the Dudley Docker, and the Stancomb Wills. You must decide which island to make for.",
      rep: [
        { f: "Captain Frank Worsley", t: "Given the currents and winds, Elephant Island to the north is the easiest to reach. But it's uninhabited, and rescue ships almost never pass by." },
        { f: "Second-in-command Frank Wild", t: "Deception Island to the west may have a hut and supplies for visiting whalers. But it's far." },
        { f: "A crew member", t: "On the ice, at least we won't sink. Going to sea is more dangerous.", why: "The ice underfoot kept breaking into smaller and smaller pieces. Staying on it meant being thrown into the sea sooner or later." }
      ],
      inv: "You and Worsley measure the currents again. The westward current is weak. Reaching Deception Island will be very hard.",
      adv: {
        c: "We should go for land we can surely reach. We can think about rescue after that.",
        a: "Reaching an uninhabited island won't save us. Let's bet on Deception Island, where there may be supplies.",
        d: "Once you factor in the chance of rescue, Deception Island, where whalers call, has the higher expected value."
      },
      flawWhy: "Laplace compared only the chance of rescue if the boats arrived. It did not multiply in the chance of the men giving out before they got there.",
      opt: [
        { l: "Make for nearby Elephant Island", d: "First, get onto land for certain. Work out the rescue from there.", ok: "After seven days at sea, the party landed on Elephant Island. It was the first land they had stood on in 497 days.", ng: "Many of the men got frostbite on the freezing voyage. Still, every one of them landed on Elephant Island." },
        { l: "Make for distant Deception Island", d: "Bet on the supplies and the chance of rescue.", ok: "After a brutal voyage, they reached the island. But there was little in the hut.", ng: "The current pushed them back, and the boats wandered the rough sea for days. The men are near their limit.", tl: "Heads for Deception Island but is pushed back by the current" },
        { l: "Stay on the ice", d: "Wait for a better chance on the ice rather than go to sea.", ok: "The ice held for a while, but in the end there was no choice but to go to sea.", ng: "In the night the ice split, and men nearly fell into the sea along with their tent.", tl: "Stays on the ice and barely escapes when it breaks apart" }
      ],
      hist: "The party took to the boats on April 9. After seven days at sea, they landed on Elephant Island on April 15. It was the first time they had stood on land in 497 days.",
      lesson: "Don't compare only the chance of the best outcome. Multiply in the chance of failing before you get there.",
      histTl: "Lands on Elephant Island. First land in 497 days"
    },
    {
      clock: "April 24, 1916",
      title: "Choosing the Six",
      sit: "No rescue will come to Elephant Island. About 1,300 km away, South Georgia has a whaling station. The only way is to cross the roughest sea in the world in the James Caird, a boat about 7 m long. You can take five men. The lives of the 22 left behind also depend on whom you choose.",
      rep: [
        { f: "Second-in-command Frank Wild", t: "I'll take charge of the men who stay behind." },
        { f: "Captain Frank Worsley", t: "I'm the only one who can navigate by the stars." },
        { f: "A crew member", t: "McNish the carpenter once defied the Boss's orders. He shouldn't go.", why: "McNish was a skilled carpenter, and he was essential for refitting the boat. Shackleton is thought to have wanted to keep the discontented men where he could watch them, to prevent trouble among those left behind." }
      ],
      inv: "You check on the men who will stay on the island. If the grumblers stay together, it looks like it will be hard for Wild to keep order.",
      adv: {
        c: "If you stay, the 22 on the island will feel safe. Leave the voyage to Worsley, the expert.",
        a: "It's a brutal voyage. Take only strong men who follow orders.",
        d: "The combination that maximizes both the voyage's chance of success and the stability of those staying behind is to take the discontented men along."
      },
      flawWhy: "Minerva focused on the peace of mind of the 22 on the island. But she played down the risk of the leader sitting out the most dangerous voyage, the one that needed the strongest will.",
      opt: [
        { l: "Take the skilled men and the grumblers", d: "Worsley the navigator, the loyal Tom Crean, McNish the carpenter, Vincent, and McCarthy. Keep the discontented men where you can watch them.", ok: "McNish decked over the boat and refitted it to survive the heavy seas. On the island, the 22 kept order under Wild.", ng: "The voyage was brutal beyond words. Even so, the men who had been grumbling worked as hard as anyone." },
        { l: "Choose only strong, obedient men", d: "On a dangerous voyage, being easy to manage matters most.", ok: "The voyage got off to a good start. But the malcontents left on the island are souring the mood of the group.", ng: "The boat was not properly refitted, and they fought constant flooding. On the island, quarrels have broken out.", tl: "Sails with only obedient men. Discord spreads among those left on the island" },
        { l: "Stay on the island and hand over the voyage", d: "Having the leader beside them will be the 22 men's greatest support.", ok: "Worsley guided the boat brilliantly. But organizing a rescue needed the leader's powers of persuasion.", ng: "The boat party wavered at every hard decision and chose the wrong landing place.", tl: "The leader stays on the island and entrusts the voyage to his men" }
      ],
      hist: "Shackleton went on the voyage himself. With him were Worsley, Crean, McNish, Vincent, and McCarthy. Taking McNish and Vincent, who had shown discontent, is thought to have been partly meant to prevent discord on the island. On the island, Wild held the 22 men together.",
      lesson: "When choosing people, look beyond ability. Think about what will happen to the group left behind if you take that person out.",
      histTl: "The James Caird sets sail. Six men begin a voyage of about 1,300 km"
    },
    {
      clock: "May 10, 1916",
      title: "The Wrong Side of the Island",
      sit: "After a 16-day voyage, they reached South Georgia. But they landed at King Haakon Bay on the south coast, opposite the north coast where the whaling stations are. The boat is battered, and two men are too weak to move. Between them and the whaling station at Stromness rise glaciers and mountains no one has ever crossed.",
      rep: [
        { f: "Captain Frank Worsley", t: "Going around the island by sea is about 240 km. This boat can't do it anymore." },
        { f: "Map", t: "The interior of the island is almost blank on the map." },
        { f: "A crew member", t: "Whalers must come into this bay too. If we wait, they'll find us.", why: "The south coast was off the whalers' routes. Winter was coming, and there was almost no chance of being found by waiting." }
      ],
      inv: "You check around the bay. There is no sign of people, and no trace of whalers ever calling here.",
      adv: {
        c: "Taking on unknown mountains in this exhausted state is reckless. Let's recover our strength and wait for rescue.",
        a: "Those who can move will have to cross the mountains. There's no other way.",
        d: "The chance of crossing unknown mountains cannot be estimated. The known sea route is a risk we can calculate."
      },
      flawWhy: "Laplace mistook \"a risk you can calculate\" for \"a small risk.\" Sailing a battered boat 240 km around the island through rough seas could be calculated, but it was extremely dangerous.",
      opt: [
        { l: "Cross the mountains with three men", d: "You, Worsley, and Crean set out with only the barest gear. The weakened men stay in the bay.", ok: "After 36 hours of walking, they heard the steam whistle of the Stromness whaling station. The three men reached the station.", ng: "Along the way, to get down before dark, the three sat on a coiled rope and slid down a slope. Battered all over, they reached the station." },
        { l: "Sail around the island", d: "Patch up the battered boat and head for the whaling station by sea.", ok: "By a miracle the weather held, and they reached the whaling station in a few days.", ng: "A storm hit as soon as they reached open water, and they had to turn back to the bay.", tl: "Tries to sail the battered boat around the island and is stopped by a storm" },
        { l: "Wait in the bay for rescue", d: "Rest and recover while waiting for a passing ship.", ok: "A few weeks later, a ship passing by chance found them. But the 22 on Elephant Island were left waiting through the winter.", ng: "No ship came. Winter is closing in, and food is running out.", tl: "Keeps waiting in the bay for rescue. Winter closes in" }
      ],
      hist: "On May 19, Shackleton, Worsley, and Crean set out to cross the mountains. They walked for 36 hours and reached the Stromness whaling station on May 20. Pack ice blocked the rescue of the 22 men on Elephant Island, and only the fourth attempt succeeded. On August 30, 1916, the Chilean Navy's Yelcho brought every one of them out.",
      lesson: "Standing still is a choice too. Measure the odds of waiting and the odds of moving with the same yardstick.",
      histTl: "The Yelcho rescues the 22 on Elephant Island. Everyone comes home alive"
    }
  ]
};
