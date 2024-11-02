export default {
  // META DATA
  nuxtSiteConfig: {
    name: "Arkulator",
    description: "A tool to calculate your resources for pulling up to a certain date and manage your gacha budget in Arknights",
  },
  calendar: "Magic Calendar",

  // ARKULATOR (HOME) PAGE
  controls: {
    header: "Controls",
    subtext: "These buttons are responsible for EXCLUDING the specified entities.",
    today: "Today",
    week: "Week",
    annih: "Annih.",
    month: "Month",
    help: {
      full: "These settings affect most of the calculations. These buttons exclude the specified entities for the CURRENT time. The button(s) will be disabled if the setting is not applicable.",
      today: "Affects all rewards for today: missions, monthly card, recruits, sign-in. Calculations will start from the next day if applicable.",
      week: "Excludes current week's Orundum and Commendation Certificate mission rewards. Calculations will start from the next week if applicable.",
      annih: "Excludes this week's Orundum reward from Annihilation. Calculations will start from the next week if applicable.",
      month: "Excludes shop rewards for the current month. Calculations will start from the next month if applicable.",
    },
    calculations: {
      today: "Today's rewards excluded",
      annih: "This week's Annihilation rewards excluded",
      week: "This week's rewards excluded",
      month: "This month's rewards and shop items excluded",
    },
  },
  guaranteed: {
    header: "Guaranteed",
    subtext: "Possessions and rewards that are more or less 'guaranteed' as long as you log in and play every day.",
    monthlycard: "Monthly Card",
    currentorundum: "Current Orundum",
    currentpermits: "Current HH Permits",
    currentprime: "Originium Prime to spend",
    currentshards: "Current Originium Shards",
    annihilation: "Annihilation Reward",
    help: {
      full: "This section contains your possessions and rewards that are more or less 'guaranteed' as long as you log in and play every day. All of the calculations are based on pure math, which is why it is called the 'guaranteed' section. As long as you remain consistent and play daily, these calculations will be 100% accurate.",
      monthlycard: "Check this if you already have a Monthly Card or are willing to purchase one for the duration of the set dates.",
      currentorundum: "Includes the Orundum you currently have in your calculations. Leave it empty if not necessary.",
      currentpermits: "Includes Head Hunting Permit(s) you currently have in your calculations. Leave it empty if not necessary.",
      currentprime: "If you are willing to spend Originium Prime for pulls, enter the amount you plan to sacrifice. Leave it empty if not necessary.",
      currentshards: "If you have Originium Shards and are willing to convert them into Orundum, enter the amount you plan to convert. Leave it empty if not necessary.",
      annihilation: "Sets your current Annihilation reward for weekly farming. Affects week-based calculations and excludes the current week.",
    },
    calculations: {
      header: "Guaranteed",
      monthlycard: "From Monthly Card",
      currentorundum: "Current Orundum",
      currentpermits: "Current Permit(s)",
      currentprime: "From Originium Prime Exchange",
      currentshards: "From Originium Shards",
      daily: "From Daily Missions",
      weekly: "From Weekly Missions",
      annihilation: "From Annihilation(s)",
      loginpermit: "Every 17th-day Login Permit",
    },
  },

  advanced: {
    header: "Certificate stores",
    subtext: "This section consists of resources that can't be taken for granted and are most likely out of your control, but it's still possible to calculate them with some degree of accuracy.",
    gcs: "Commendation",
    greens: "Current CCs",
    recruits: "Daily Recruitments",
    strategy: "Recruitment Strategy",
    strategies: {
      minimum: "Minimum",
      average: "Average",
      maximum: "Maximum",
    },
    phase: "Target Shop Page",
    gcs_phases: {
      budget: "Page 1",
      normal: "Page 2",
    },
    infinite: "Infinite Buyout",
    ycs: "Distinction",
    yellows: "Current DCs",
    ycsrecs: "Include Recruitment?",
    ycsbuys: "Purchase Strategy",
    permitphases: {
      one: "Phase 1",
      two: "Phase 2 (Greedy)",
      twos: "Phase 2 (Strict)",
      three: "Phase 3 (Greedy)",
      threes: "Phase 3 (Strict)",
      four: "Phase 4 (Greedy)",
      fours: "Phase 4 (Strict)",
      five: "Phase 5 (Greedy)",
      fives: "Phase 5 (Strict)",
    },
    rerun: "Intelligence",
    reruncerts: "Current ICs",
    rerunstock: "Orundum in Stock",
    rerunencounters: "Expected Reruns",
    calculations: {
      header: "Certificate stores",
      infinite: "From Infinite Buyout",
      greenshoporundum: "From Commendation Cert. store (Orundum)",
      greenshoppermits: "From Commendation Cert. store (Permits)",
      yellowshoppermits: "From Distinction Cert. store",
      rerunshop: "From Rerun(s)",
      detailed: {
        user_gc: "User's Commendations",
        recruit_gc: "Commendations for recruitment",
        weekly_gc: "Commendations for weekly mission",
        login_gc: "Commendations for login on 11th day",
        user_yc: "User's Distinctions",
        recruit_yc: "Distinctions for recruitment",
        login_yc: "Distinctions for login on 11th day",
      },
    },
    help: {
      full: "This section consists of resources that can't be taken for granted and are most likely out of your control, but it's still possible to calculate them with some degree of accuracy. Some values may vary (due to you or randomness), for example, recruitment.",
      greentab: "Commendation",
      yellowtab: "Distinction",
      reruntab: "Intelligence",
      green: {
        toggle: "Toggle this checkbox to include the Commendation Certificate Shop in your calculations.",
        buyout: "Toggle this to calculate Commendation Certificates DIRECTLY into ORUNDUM. This option WON'T include your path to the third page; you need to be on the third page already.",
        current: "Input your current Commendation Certificates amount. If 'INFINITE BUYOUT,' it's mandatory; otherwise, it's optional.",
        recruit: "Input the number of recruitments you do daily. It's not capped, but if you do it daily, it's impossible to do more than 6 a day.",
        strategy:
          "This affects the outcome of your recruitment. Minimum - counts ALL recruitments as 3* ops. Average (Predicted) - counts every 4th op as 4*, and others as 3*. Maximum - counts ALL recruitments as 4*. My condolences if you waste your recruitments on 1* and 2*. 5* and 6* are not included because they are too random and unreliable for calculations.",
        target:
          "Your purchasing goal for the set duration. Page 1 - simulates the purchase of ONLY Orundum and permits from the first page. Page 2 - simulates the purchase of the WHOLE page 1 and HH permits on the second page ONLY.",
      },
      yellow: {
        toggle: "Toggle this checkbox to include the Distinction Certificate Shop in your calculations.",
        current: "Input your current Distinction Certificates amount. OPTIONAL.",
        recruit:
          "Works only in conjunction with the toggled Commendation Shop and chosen strategy. Yields certificates only with 'average' and 'maximum' strategies. Adds potential Distinction Certificates from recruitment to your possession and uses them for calculations. OPTIONAL.",
        strategy:
          "GREEDY - tries to purchase as fast as possible and uses up your certificates. STRICT - or 'smart' strategy tries to purchase as much as possible and saves certificates if it can't buy the chosen set in full.",
        condition: "EXAMPLE // Condition: 3-month duration, starting DC - 546, no recruitment, 15 DC for daily login x3.",
        exampleone: "GREEDY + Phase 5 will result in 79 HH permits, 17 DC left. x2 full sets for 258 DC and 3 extra HH for 28 DC.",
        exampletwo: "STRICT + Phase 5 will result in 76 HH permits, 45 DC left. x2 full sets for 258 DC.",
        phases: "PHASES: #1 - 1 HH for 10 DC, #2 - 2 HH for 18 DC, #3 - 5 HH for 40 DC, #4 - 10 HH for 70 DC, #5 - 20 HH for 120 DC. Total: 38 HH for 258 DC.",
      },
      rerun: {
        toggle: "Toggle this if you have some Intelligence Certificates or expect a rerun during the calculation dates.",
        current:
          "Enter the number of Intelligence Certificates currently in your possession. Intelligence Certificate gain may vary, but it is always enough to buy all Orundum. The calculator always adds 1700 Intelligence Certificates (median gain per rerun). Excess will be counted towards Orundum in stock and ignored if there is nothing left to buy.",
        stock: "Enter how many Orundum packs are left to purchase. HG adds 20 every rerun; it adds automatically to calculations, so ignore if you have nothing in stock.",
        reruns: "If you know or expect rerun(s) during the set period, enter a number here. This will automatically add 20 Orundum packs in stock per rerun.",
      },
    },
  },

  maybe: {
    header: "Speculations",
    subtext: "This section is for 'unstable' calculations.",
    lottery: "Orundum Lottery",
    standard: "Standard/Rerun",
    anniversary: "Anniversary",
    collab: "Collaboration",
    trials: "Trials for Navigator",
    story: "Story/Episode",
    paradox: "Paradox Simulations",
    newannih: "New Annihilations",
    shards: "Shards/Day",
    sequence: "Event sequence:",
    event_name: "Event name",
    event_type: "Event type",
    use_op: "Use OP from event",
    lottery: "Include orundum lottery?",
    free_pulls: "Include free pulls?",
    calculations: {
      header: "Speculations",
      paradox: "Paradox Simulation(s) Reward",
      newannih: "Annihilation First-Time Reward",
      shards: "Originium Shards Farming",
      detailed: {
        permits: "Event Store",
        limited: "Exclusive Headhunting",
        lottery: "Orundum Lottery",
        prime: "OP conversion",
      },
    },
    help: {
      full: "This section is for things that can't be calculated in a repeating way as 'Guaranteed' and 'Certificate Stores' do and it has more fluctuations. Things here are less predictable thus 'Speculations.'",
      paradox: "Enter how many operators are getting a paradox update. Each paradox gives you 200 orundums.",
      newannih: "Except for the first three (Chernobog, Lungmen Downtown, Outskirts), every new annihilation’s first full completion gives 1500 orundums.",
      shards: "Exchange rate is 2 shards for 20 orundums. You can only exchange them in pairs, so any odd numbers get rounded down.",
      sequence: "You can create a chain of events that you want to rely on. Each event will be displayed individually in the 'Calculations' section with detailed stats on each option provided.",
      event_name: "By default each event is given a name 'Event #it's number in the chain' but you can change it for readability. Purely cosmetical for your convenience when reading 'Calculations'",
      event_type:
        "There are only 4 types of events with pulls. Event store Headhunting Permits assigned by default (Except for Story/Episode). Affects active input fields (e.g. in Trials for Navigator all field are disabled because the only thing there is 1 Headhunting Permit).",
      use_op:
        "If you want to spend OP which can be earned during event, type there how many of them. 1 Week events (Story events) - 14-18, 2 Week events (Most of Standard events and Collaborations) - 27-30 OP, 3 Week events (Some Standard events and most of Anniversaries) - 38-41 OP. Episodes vary a lot, check individually.",
      lottery: "Orundum lottery adds 7000 orundums. 500 is an arithmetic mean of 200 ... 800 * 14 days of lottery. Pity isn't accounted for.",
      free_pulls:
        "Exclusive Headhunting marked with orange color in detailed stats to remind you about its limited lifespan. Anniversaries have 10-pull on 1st login and 14 days of 1 free pull => 24 pulls. Collabs have 10-pull on 1st login and 10-pull on 7-8th day login => 20 pulls.",
    },
  },

  hopium: {
    header: "Additional Hope",
    subtext: "This section covers random bonuses that might happen and net you some extra pulls. Just info here, since it’s impossible to know when or how much you'll get.",
    1: "Maintenance Compensation",
    2: "Mail Delivery (For some achievements or events)",
    3: "Redeemable Codes (Used mostly with merch)",
    4: "Web Events",
    5: "Discord Events and Competition Rewards (if you join in, of course)",
    6: "Your Donations (Thank you for your service, Doctor Whale)",
    7: "DCs & CCs from duplicates to buy HH permits",
  },

  budget: {
    header: "Budget",
    subtext: "Manage your budget",
    operator_field: "Operator",
    banner_type: "Banner Type",
    banner_standard: "Standard/Kernel",
    banner_collab: "Collaboration",
    banner_anniversary: "Anniversary",
    banner_joint: "Joint Operation",
    banner_debut: "Debut",
    banner_special: "Special",
    pulls_expected: "Expected Pulls",
  },

  calculations: {
    header: "Calculations",
    days: "Day(s): {days}",
    weeks: "Week(s): {weeks}",
    months: "Month(s): {months}",
    subtotal: "Subtotal: {pulls}",
    total: "Total Pulls: {pulls}",
  },

  help: {
    modaltitle: "Help",
  },

  // SIDEBAR MENU
  menu: {
    home: "arkulator",
    wiki: "knowledge",
    contact: "contact",
    changelog: "changelog",
  },

  // KNOWLEDGE (WIKI) PAGE
  wiki: {
    basics: {
      legend: "Basics",
      header: "There are 4 currencies used for gacha:",
      or: "Orundum",
      op: "Originium Prime",
      hh: "Headhunting Permit",
      rm: "Real Money",
    },

    headhunt: {
      legend: "Headhunting Permits",
      header: "Precious tickets used to try for your waifu/husbando, ultra meta destroyer 9000, or more commonly, disappointment. There are 3 types:",

      regular: "Headhunting Permit",
      regularsub: "The OG permit. Usable anywhere and does not expire.",
      regular_content: {
        1: "1 awarded on 17th login each month.",
        2: "Commendation Certificate Shop: 2 available for 480 CC, and another 2 for 900 CC monthly.",
        3: "Distinction Certificate Shop: Up to 38 available monthly for 258 DC total.",
        4: "Normal, Anniversary, Collaboration events, and reruns have 3 available in event shops, costing 150 event currency each.",
        5: "Trials for Navigator: 1 awarded at level 15.",
        6: "Login events: Occasionally, though not always, available.",
        7: "Web events: Rarely offered, so not a guarantee.",
        8: "Store purchase: Available for local currency; typically better to buy OP instead of these, except for special event packs.",
        9: "Store packs: Some include Headhunting Permits.",
      },

      kernel: "Kernel Headhunting Permit",
      kernelsub: "Usable only on Kernel banners; operators here yield only Universal Certificates. Does not expire.",
      kernel_content: {
        1: "Available in Universal Certificate shop: up to 38 per month for 2580 Universal Certificates.",
        2: "Available in Distinction Certificate shop: up to 38 per month for 216 Distinction Certificates.",
        3: "Occasionally awarded in mail or login events.",
      },

      exclusive: "Exclusive Headhunting Permit",
      exclusivesub: "Tied to a specific banner and expires when the banner ends.",
      exclusive_content: {
        1: "24 awarded on Anniversary (10 on login + 1 each day); 20 awarded on Collaboration (10 on login, 10 on 7th-8th day).",
        2: "Store purchase (since Babel): Limited to 2 and 10 permits, once each.",
      },
    },

    general: {
      legend: "General Advice",
      header: "Community-tested tips accumulated over the years.",
      1: "HG resets the OP double deal on the yearly anniversary.",
      2: "To maximize Distinction Certificates, buy Headhunting Permits in a batch of 38 for 258 DCs.",
      3: "Monthly card is the best value in the store, limited to 90 days at a time.",
      4: "At the end of anniversary events, spend your leftover sparks on a featured 5*, especially if you have them nearly maxed out. 5* duplicates yield significant Distinction Certificates.",
      5: "180 DC shop operator is a better deal than pulling for them. 180 DC roughly equals 18 pulls, making it a guaranteed option.",
      6: "If you’re on a tight budget but want to try your luck at an anniversary event, wait until the last day. This way, you’ve used all free pulls and gained results from orundum lotteries, login events, and event shops.",
      7: "Special banners have their own pity counter, so pulls on standard banners don’t count toward it.",
      8: "Collaboration banners have 120 pull pity with 20 free pulls, so only 100 pulls are needed.",
      9: "Anniversary banners have 300 pull pity with 24 free pulls + ~11 from orundum lotteries, so around 265 pulls are required.",
      10: "Rate up is a lie.",
    },

    orundum: {
      legend: "Orundum",
      header: "The most common resource for a fellow Doctor, with many ways to obtain it:",
      1: "Daily missions yield 100 Orundums.",
      2: "Weekly missions yield 500 Orundums.",
      3: "Monthly card yields 200 Orundums daily (login required).",
      4: "Annihilation farming yields 1200 - 1800 weekly. New players start with 1200, increasing with each map for the first 3 Annihilations.",
      5: "First-time Annihilation completion yields a total of 1500 Orundums for each milestone, except for the first 3 Annihilations.",
      6: "Paradox Simulation rewards 200 Orundums.",
      7: "Originium Prime exchange: 1 OP = 180 Orundums.",
      8: "Originium Shard exchange: 2 Shards = 20 Orundums (only in pairs).",
      9: "Intelligence Certificate exchange: 20 IC = 100 Orundums. Every rerun adds 2000 Orundums and ~1700 IC.",
      10: "Commendation Certificate Shop: 600 Orundums available for 240 CC, with unlimited 100 Orundums for 50 CC.",
      11: "Continuous play rewards: HG occasionally sends Orundums in the mailbox.",
      12: "Maintenance compensation: Short maintenance typically gives 200 Orundums.",
      13: "Anniversary orundum lottery: Lasts ~14 days, yielding around 7000 Orundums on average, though results vary.",
      14: "Login events: Occasionally include Orundum.",
      15: "Web events: Rarely offer Orundum.",
      16: "Store packs: Some contain Orundum.",
    },

    prime: {
      legend: "Originium Prime",
      header: "Rare shiny rocks with limited ways to earn and spend. Can be used for skins, sanity restoration, and gacha. New players may use it on pro packs, and some may use it for furniture.",
      1: "First-time 3-star map completion: 1 OP for normal, 1 more for challenge mode; interludes and tutorials grant 1 OP.",
      2: "Maintenance compensation: Extended maintenance typically grants 5 OP.",
      3: "Monthly card: Grants 6 OP with each purchase (limited to 90 days of subscription).",
      4: "Login events: Occasionally grant OP, though rarely more than 2.",
      5: "Web events: Rarely grant OP.",
      6: "Store purchase: Available in local currency, starting from 1 OP.",
      7: "Store packs: Some packs include OP.",
    },

    money: {
      legend: "Real Money",
      header: "Best deals depend on local currency rates, but here are some general guidelines:",
      subheader: "Double deals are a one-time purchase. Calculations below are based on standard deals.",
      pulls: "Pulls",
      ppulls: "per pull",
      sanity: "Full sanity",
      psanity: "per refresh",
      calculate: "Calculate your expenses",
      ending:
        "Special event packs, anniversary packs, and other one-time deals are excluded here as they add unique value, making it hard to calculate in terms of pulls. Most are only available during anniversary events and once per event.",
    },
  },

  // CONTACT PAGE
  contact: {
    form: {
      legend: "Contact Form",
      email: "Email",
      message: "Message",
      message_placeholder: "Closure ripped me off again",
      files: "Attachments",
      files_help: "Images or PDFs only",
      submit: "Submit",
      type: "Message Type",
      type_placeholder: "Select a Topic",
      types: {
        1: "Bug",
        2: "Translation",
        3: "Request",
        4: "Help",
        5: "Other",
      },
    },

    notice: {
      1: "Fields marked with * are required.",
      2: "Email is optional if you don’t need a reply.",
      3: "Please use one of the following languages: English, Serbian, Ukrainian, or Russian. Other languages will be auto-translated.",
      4: "Replies will be in English, regardless of the initial message language.",
      5: "Arkulator uses GPT translations for non-English versions. Report any translation issues.",
    },

    her_highness: {
      legend: "Theresa’s Supremacy",
      message: "This app was crafted by a loyalist of Theresa. Enjoy the presence of Her Highness while reaching out.",
    },

    socials: {
      legend: "Social Media",
      tg: "Telegram",
      ds: "Discord",
    },
  },

  // FOOTER
  footer: {
    hard_truth: "Sponsored by unemployment and excessive free time.",
  },
};
