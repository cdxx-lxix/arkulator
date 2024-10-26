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
      week: "Excludes current week's Orundum and Green Certificate mission rewards. Calculations will start from the next week if applicable.",
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
    header: "Advanced",
    subtext: "This section consists of resources that can't be taken for granted and are most likely out of your control, but it's still possible to calculate them with some degree of accuracy.",
    gcs: "Green Cert Shop",
    greens: "Current GC Amount",
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
    ycs: "Yellow Cert Shop",
    yellows: "Current YC Amount",
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
    rerun: "Rerun Cert Shop",
    reruncerts: "Current IC Amount",
    rerunstock: "Orundum in Stock",
    rerunencounters: "Expected Reruns",
    calculations: {
      header: "Advanced",
      infinite: "From Infinite Buyout",
      greenshoporundum: "From Green Cert Shop (Orundum)",
      greenshoppermits: "From Green Cert Shop (Permits)",
      yellowshoppermits: "From Yellow Cert Shop",
      rerunshop: "From Rerun(s)",
    },
    help: {
      full: "This section consists of resources that can't be taken for granted and are most likely out of your control, but it's still possible to calculate them with some degree of accuracy. Some values may vary (due to you or randomness), for example, recruitment.",
      greentab: "Green Certs",
      yellowtab: "Yellow Certs",
      reruntab: "Rerun Certs",
      green: {
        toggle: "Toggle this checkbox to include the Green Certificate Shop in your calculations.",
        buyout: "Toggle this to calculate Green Certificates DIRECTLY into ORUNDUM. This option WON'T include your path to the third page; you need to be on the third page already.",
        current: "Input your current Green Certificates amount. If 'INFINITE BUYOUT,' it's mandatory; otherwise, it's optional.",
        recruit: "Input the number of recruitments you do daily. It's not capped, but if you do it daily, it's impossible to do more than 6 a day.",
        strategy:
          "This affects the outcome of your recruitment. Minimum - counts ALL recruitments as 3* ops. Average (Predicted) - counts every 4th op as 4*, and others as 3*. Maximum - counts ALL recruitments as 4*. My condolences if you waste your recruitments on 1* and 2*. 5* and 6* are not included because they are too random and unreliable for calculations.",
        target:
          "Your purchasing goal for the set duration. Page 1 - simulates the purchase of ONLY Orundum and permits from the first page. Page 2 - simulates the purchase of the WHOLE page 1 and HH permits on the second page ONLY.",
      },
      yellow: {
        toggle: "Toggle this checkbox to include the Yellow Certificate Shop in your calculations.",
        current: "Input your current Yellow Certificates amount. OPTIONAL.",
        recruit:
          "Works only in conjunction with the toggled Green Shop and chosen strategy. Yields certificates only with 'average' and 'maximum' strategies. Adds potential Yellow Certificates from recruitment to your possession and uses them for calculations. OPTIONAL.",
        strategy:
          "GREEDY - tries to purchase as fast as possible and uses up your certificates. STRICT - or 'smart' strategy tries to purchase as much as possible and saves certificates if it can't buy the chosen set in full.",
        condition: "EXAMPLE // Condition: 3-month duration, starting YC - 546, no recruitment, 15 YC for daily login x3.",
        exampleone: "GREEDY + Phase 5 will result in 79 HH permits, 17 YC left. x2 full sets for 258 YC and 3 extra HH for 28 YC.",
        exampletwo: "STRICT + Phase 5 will result in 76 HH permits, 45 YC left. x2 full sets for 258 YC.",
        phases: "PHASES: #1 - 1 HH for 10 YC, #2 - 2 HH for 18 YC, #3 - 5 HH for 40 YC, #4 - 10 HH for 70 YC, #5 - 20 HH for 120 YC. Total: 38 HH for 258 YC.",
      },
      rerun: {
        toggle: "Toggle this if you have some Purple Certificates or expect a rerun during the calculation dates.",
        current:
          "Enter the number of Purple Certificates currently in your possession. Purple Certificate gain may vary, but it is always enough to buy all Orundum. The calculator always adds 1700 Purple Certificates (median gain per rerun). Excess will be counted towards Orundum in stock and ignored if there is nothing left to buy.",
        stock: "Enter how many Orundum packs are left to purchase. HG adds 20 every rerun; it adds automatically to calculations, so ignore if you have nothing in stock.",
        reruns: "If you know or expect rerun(s) during the set period, enter a number here. This will automatically add 20 Orundum packs in stock per rerun.",
      },
    },
  },

  maybe: {
    header: "Maybe",
    subtext: "This section is for 'unstable' calculations.",
    limitedevent: "Limited Event",
    lottery: "Orundum Lottery",
    anniversary: "Anniversary",
    collab: "Collaboration",
    paradox: "Paradox Simulations",
    newannih: "New Annihilations",
    normalevents: "Normal Events",
    shards: "Shards/Day",
    calculations: {
      header: "Maybe",
      limited: "LIMITED PERMITS",
      lottery: "Orundum Lottery",
      paradox: "Paradox Simulation(s) Reward",
      events: "Event Shop Permits",
      newannih: "Annihilation First-Time Reward",
      shards: "Originium Shards Farming",
    },
    help: {
      full: "This section is for things that are personal, rare, unpredictable—basically, anything that's kinda out there. Inaccurate and speculative, just stuff you wanna throw into the pool for the heck of it.",
      limited: "Check this if there's a limited event happening. INCLUDES ONLY ONE EVENT.",
      annicolab:
        "Can’t have both at the same time. Anniversary gives 24 free pulls—10 on login, 1 a day. Collab gives 20 pulls: 10 on login, 10 on the 8th day. THESE PULLS ARE FOR LIMITED BANNERS ONLY, AND THEY EXPIRE AFTERWARD.",
      lottery: "Adds 7000 orundums to your calculations (average winnings). Only available during anniversaries, so it's turned off if you pick collab.",
      paradox: "Enter how many operators are getting a paradox update. Each paradox gives you 200 orundums.",
      events: "Each normal event puts 3 HH permits up for grabs in the shop.",
      newannih: "Except for the first three (Chernobog, Lungmen Downtown, Outskirts), every new annihilation’s first full completion gives 1500 orundums.",
      shards: "Exchange rate is 2 shards for 20 orundums. You can only exchange them in pairs, so any odd numbers get rounded down.",
    },
  },

  hopium: {
    header: "Additional Hope",
    subtext: "This section covers random bonuses that might happen and net you some extra pulls. Just info here, since it’s impossible to know when or how much you'll get.",
    1: "Maintenance Compensation",
    2: "Mail Delivery (For some achievements or events)",
    3: "Codes (They’ve got a system, but no one really uses it... yet.)",
    4: "Web Events",
    5: "Discord Events and Competition Rewards (if you join in, of course)",
    6: "Your Donations (Thank you for your service, Doctor Whale)",
    7: "YC from duplicates to buy HH permits",
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
    home: "home",
    wiki: "wiki",
    contact: "contact",
    changelog: "changelog",
    language: "Change language:"
  },

  // WIKI PAGE
  wiki: {
    basics: {
      legend: "Basics",
      header: "There are 4 currencies used for gacha:",
      or: "Orundum",
      op: "Originium Prime",
      hh: "Headhunting Permit",
      rm: "Real Money",
      pull: "One pull equals:",
      orundums: "600 Orundums",
      permits: "1 Headhunting Permit",
      primes: "~3.33... Originium Primes",
      money: "Vary or uncountable"
    },
    headhunt: {
      legend: "Headhunting Permits",
      header: "Precious tickets that you can exchange for your waifu\husbando, meta ultra killer destroyer 9000 or most commonly disappointment. There are 3 types of it:",

      regular: "Headhunting Permit",
      regularsub: "The OG. Can be used anywhere. Does not expire.",
      regular_content: {
        1: "1 rewarded each month on 17th login.",
        2: "Green Certificate Shop. Each month you can purchase: 2 for 480 GC on the first page, 2 for 900 GC on the second page",
        3: "Yellow Certificate Shop. Each month you can purchase up to 38 for 258 YC total.",
        4: "Normal, Anniversary, Collaboration events and their reruns have 3 in the event shop. 150 event currency each.",
        5: "Trials for Navigator rewards 1 on 15th level.",
        6: "Login events. There may be some in login event but it's not a 100%.",
        7: "Web events. They are rare and may contain it, not a 100%.",
        8: "Store purchase for your local currency. Starting from 10 and only sky is the limit. With the exception of special event packs most of the time it's better to buy OP instead of them. ",
        9: "Store packs. Some contain Headhunting Permits.",
      },

      kernel: "Kernel Headhunting Permit",
      kernelsub: "Can be used only on Kernel banner. Operators from this banner grant ONLY Blue Certificates. Does not expire.",
      kernel_content: {
        1: "Purchased from Blue Certificate shop. Each month you can purchase up to 38 for 2580 Blue Certificates total. ",
        2: "Purchased from Yellow Certificate shop. Each month you can purchase up to 38 for 216 Yellow Certificates total. ",
        3: "Occasionally used as rewards in the mail or login event.",
      },

      exclusive: "Exclusive Headhunting Permit",
      exclusivesub: "Tied to a specific banner and can be used only on it. Expires when the banner ends.",
      exclusive_content: {
        1: "24 given on Anniversary, 10 on login + 1 each day. 20 given on collaboration, 10 on login and 10 on the 7-8th day.",
        2: "Store purchase (since Babel). You can buy 2 and 10, once each.",
      }
    },

    general: {
      legend: "General Advise",
      header: "Just some stuff accumulated in the community through the years.",
      1: "HG resets OP double deal on yearly anniversary.",
      2: "To get the most out of your Yellow Certificates buy Headhunting permits in full batch of 38 permits for 258 Yellow Certificates.",
      3: "Monthly card is the best deal in the store. Can't have more than 90 days.",
      4: "At the end of anniversary event spend your sparks on a featured 5*, especially if you have them full pot or near it. 5* dupes yeld a good amount of Yellow Certificates. They are rare and useful, you can farm a material any time but you can't farm YC.",
      5: "Shop operator for 180YC is way cheaper option than pulling for them. 180YC roughly equals to 18 pulls (42YC leftover). Do you think you can get this operator in this amount of pulls? Not to mention that it's a 100% option.",
      6: "When you are really tight on a budget but still want to test your luck on anniversary event, wait for the last day and then use your resources. That way you've depleted all of the free pulls and got the results of orundum lottery, login event (if present), event shop and other stuff.",
      7: "Special banners have their own pity so it doesn't matter how many pulls you've spent on standard.",
      8: "Collaboration banners have 120 pulls pity + 20 free pulls, so you need only 100 pull.",
      9: "Anniversary banners have 300 pulls pity + 24 free pulls + ~11 orundum lottery, so you need around 265 pulls.",
      10: "Rate up is a lie"
    },

    orundum: {
      legend: "Orundum",
      header: "Most common resource for a fellow Doctor. There are a lot of ways to obtain it:",
      1: "Daily mission yelds you 100",
      2: "Weekly mission yelds you 500",
      3: "Monthly card yelds you 200 daily (still have to login)",
      4: "Annihilation farming yelds you 1200 - 1800 weekly. 1200 For new players and increaces with each map for the first 3 annihilations. Chernobog, Lungmen Outskirts and Lungmen Downtown. ",
      5: "Annihilation first time completion yelds a total of 1500 once for all of the milestones (400/400 enemies). Except for the first 3.",
      6: "Paradox Simulation yelds 200",
      7: "Exchange Originium Prime. 1 OP = 180 Orundums.",
      8: "Exchange Originium Shard. 2 Shards = 20 Orundums. You can't exchange 1 for 10, only by 2. ",
      9: "Intelligence Certificate exchange. 20 IC = 100 Orundums. Every rerun HG adds 20 stacks (2000 Orundums) and possibility to obtain ~1700 IC.",
      10: "Green Certificate Shop. You can buy 600 on the first page each month for 240 GC and unlimited amount on the third page 100 orundums for 50 GC.",
      11: "Continuous support. Just play Arknights and HG will occasionally send you some in the mailbox. ",
      12: "Maintenance compensation. Short maintenance usually compensated in for of 200 orundums.",
      13: "Annivesary's orundum lottery. Usually this lottery lasts for 14 days and yelds approximately ~7000 orundums. That's just a math average and it depends on your luck. ",
      14: "Login events. There may be some orundum in login event but it's not a 100%.",
      15: "Web events. They are rare and may contain it, not a 100%.",
      16: "Store packs. Some contain orundum.",
    },

    prime: {
      legend: "Originium Prime",
      header: "Funny shiny rocks. Not that many ways to obtain not that many ways to spend. You can buy skins, restore sanity and of course spin the gacha wheel for it. New players may purchase pro packs for it and mad lads may use it for furniture.",
      1: "First time 3 star map completition yelds 1 OP and 1 more for challenge mode. Interludes and tutorials grant 1 OP.",
      2: "Maintenance compensation. Long maintenance usually compensated in form of 5 OP.",
      3: "Monthly card yelds 6 OP on each purchase. Limited to 90 days of subscription.",
      4: "Login events. There may be some OP in login event but it's not a 100% and rarely more than 2. ",
      5: "Web events. They are rare and may contain it, not a 100%.",
      6: "OP store purchase for your local currency. Starting from 1 OP and only sky is the limit. ",
      7: "Store packs. Besides direct OP purchase some packs contain it.",
    },

    money: {
      legend: "Real Money",
      header: "It's hard to tell what is the best deal because of local currencies, but here is a general ideas and calculations.",
      subheader: "Double deals can be purchased only once. Calculations here based on standard deal.",
      pulls: "Pulls",
      ppulls: "per pull",
      sanity: "full sanity",
      psanity: "per refresh",
      calculate: "Calculate your expenses",
      ending: "Everything else, like anniversary and special event packs and deals aren't covered in here. They have a lot of additional stuff that adds value to it so calculating them in terms of pulls is incorrect. Plus you can buy them on anniversary events only and just once per event."
    }
  },

  // CONTACT PAGE
  contact: {
    form: {
      legend: "Contact form",
      email: "Email",
      message: "Message",
      message_placeholder: "Closure ripped me off again",
      files: "Attachments",
      files_help: "Image or .pdf only",
      submit: "Submit",
      type: "Message type",
      type_placeholder: "Select a topic",
      types: {
        1: "Bug",
        2: "Translation",
        3: "Request",
        4: "Help",
        5: "Other"
      }
    },
    notice: {
      1: "Required fields.",
      2: "Email is optional in case you don't need an answer.",
      3: "Please use one of these languages: English, Serbian, Ukrainian or Russian. Other languages will be autotranslated.",
      4: "Regardless of the initial messages reply will be in English.",
      5: "Except for English version, Arkulator uses GPT translations. Please report any problems."
    }
  }
};
