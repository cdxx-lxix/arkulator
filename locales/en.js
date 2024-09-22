export default {
  lang: "en",
  title: "Arkulator",
  description: "A tool to calculate your resources up to a certain date and budget your pulls in Arknights",
  keywords: "Arknights, mobile game, calculator, tool, operator, pull, luck, resources, management",
  calendar: "Magic calendar",

  controls: {
    header: "Controls",
    subtext: "These buttons are responsible for EXCLUSION of stated entities.",
    today: "Today",
    week: "Week",
    annih: "Annih.",
    month: "Month",
    help: {
      full: "These settings affects most of the calculations. These buttons are responsible for EXCLUSION of stated entities for CURRENT time. The button(s) will be disabled if the setting is not appicable.",
      today: "Affects all of the rewards for today: missions, monthly card, recruits, sign-in. Calculations will start from the next day if it's present.",
      week: "Excludes current week's orundum and green certificates missions rewards. Calculations will start from the next week if it's present.",
      annih: "Excludes current week's orundum reward from annihilation. Calculations will start from the next week if it's present.",
      month: "Excludes shop rewards for current month. Calculations will start from the next month if it's present."
    },
    calculations: {
      today: "Today's rewards excluded",
      annih: "This week's annihilation rewards excluded",
      week: "This week's rewards excluded",
      month: "This month's rewards & shops excluded",
    }
  },

  guaranteed: {
    header: "Guaranteed",
    subtext: "Possesions and rewards that are more or less 'guaranteed' as long as you log in and play every day.",
    monthlycard: "Monthly Card",
    currentorundum: "Current Orundum",
    currentpermits: "Current HH permits",
    currentprime: "OP to spend",
    currentshards: "Current Originium Shards",
    annihilation: "Annihilation reward",
    help: {
      full: "This section contains your possesions and rewards that are more or less 'guaranteed' as long as you log in and play every day. All of the calculations are pure math. That's why it is called the 'guaranteed' section. Just be consistent and play every day, and these calculations will be correct 100%.",
      monthlycard: "Check this if you already have a monthly card or are willing to purchase one for the duration of set dates.",
      currentorundum: "Includes orundum that you currently have in your calculations. Leave it empty if unnecessary.",
      currentpermits: "Includes permit(s) that you currently have in your calculations. Leave it empty if unnecessary.",
      currentprime: "If you are willing to spend originium prime for pulls, enter the amount you are willing to sacrifice. Leave it empty if unnecessary.",
      currentshards: "If you have originium shards and are willing to convert them into orundum, enter the amount you are willing to convert. Leave it empty if unnecessary.",
      annihilation: "Sets your current annihilation reward for weekly farming. Affects week-based calculations and exclusion of the current week.",
    },
    calculations: {
      header: "Guaranteed",
      monthlycard: "From monthly card",
      currentorundum: "Current orundums",
      currentpermits: "Current permit(s)",
      currentprime: "From OP exchange",
      currentshards: "From originium shards",
      daily: "From daily missions",
      weekly: "From weekly missions",
      annihilation: "From annihilation(s)",
      loginpermit: "Every 17th day login permit",
    }
  },

  advanced: {
    header: "Advanced",
    subtext: "This section consists of resources that can't be taken for granted and are most likely out of your control, but it's still possible to calculate with some degree of accuracy.",
    gcs: "Green Cert Shop",
    greens: "Current GC amount",
    recruits: "Recruitments daily",
    strategy: "Recruitment strategy",
    strategies: {
      minimum: "Minimum",
      average: "Average",
      maximum: "Maximum",
    },
    phase: "Target shop page",
    gcs_phases: {
      budget: "Page 1",
      normal: "Page 2",
    },
    infinite: "Infinite buyout",
    ycs: "Yellow Cert Shop",
    yellows: "Current YC amount",
    ycsrecs: "Include recruitment?",
    ycsbuys: "Purchase strategy",
    permitphases: {
      one: "Phase 1",
      two: "Phase 2 Greedy",
      twos: "Phase 2 Strict",
      three: "Phase 3 Greedy",
      threes: "Phase 3 Strict",
      four: "Phase 4 Greedy",
      fours: "Phase 4 Strict",
      five: "Phase 5 Greedy",
      fives: "Phase 5 Strict",
    },
    rerun: "Rerun Cert Shop",
    reruncerts: "Current IC amount",
    rerunstock: "Orundum in stock",
    rerunencounters: "Expected reruns",
    calculations: {
      header: "Advanced",
      infinite: "From Infinite buyout",
      greenshoporundum: "From Green cert shop (orundum)",
      greenshoppermits: "From Green cert shop (permits)",
      yellowshoppermits: "From Yellow cert shop",
      rerunshop: "From Rerun(s)",
    },
    help: {
      full: "This section consists of resources that can't be taken for granted and are most likely out of your control, but it's still possible to calculate with some degree of accuracy. Some values may vary (due to you or randomness), for example, recruitment.",
      greentab: "Green Certs",
      yellowtab: "Yellow Certs",
      reruntab: "Rerun Certs",
      green: {
        toggle: "Toggle this checkbox to include the Green Certificate Shop in your calculations.",
        buyout: "Toggle this to calculate Green Certificates DIRECTLY into ORUNDUM. This option WON'T include your path to the third page. You need to be on the third page already.",
        current: "Input your current Green Certificates possession. If 'INFINITE BUYOUT,' it's mandatory; otherwise, it's optional.",
        recruit: "Input the amount of recruitments you do daily. It's not capped, but if you do it daily, it's impossible to do more than 6 a day.",
        strategy:
          "Responsible for the outcome of your recruitment. Minimal - counts ALL recruitments as 3* ops. Average (Predicted) - counts every 4th op as 4* and others as 3*. Maximum - counts ALL recruitments as 4*. My condolences if you waste your recruitments on 1* and 2*. 5* and 6* are not included because they are too random and unreliable for calculations.",
        target:
          "Your purchasing goal for the duration of set dates. Page 1 - simulates the purchase of ONLY orundum and permits from the first page. Page 2 - simulates the purchase of the WHOLE page 1 and HH permits on the second page ONLY.",
      },
      yellow: {
        toggle: "Toggle this checkbox to include the Yellow Certificate Shop in your calculations.",
        current: "Input your current Yellow Certificates possession. OPTIONAL.",
        recruit:
          "Works only in conjunction with the toggled Green Shop and chosen strategy. Yields certificates only with 'average' and 'maximum' strategies. Adds potential Yellow Certificates from recruitment to your possession and uses it for calculations. OPTIONAL.",
        strategy: "GREEDY - tries to purchase as fast as possible and dries your certificates. STRICT - or 'smart' strategy tries to purchase as much as possible and saves certificates if it can't buy choosen set in full.",
        condition: "EXAMPLE // Condition: 3-month duration, starting YC - 546, no recruitment, 15YC for daily login x3.",
        exampleone: "GREEDY + Phase 5 will result in 79 HH permits, 17 YC left. x2 full sets for 258YC and 3 extra HH for 28YC.",
        exampletwo: "STRICT + Phase 5 will result in 76 HH permits, 45 YC left. x2 full sets for 258YC.",
        phases: "PHASES: #1 - 1HH for 10YC, #2 - 2HH for 18YC, #3 - 5HH for 40YC, #4 - 10HH for 70YC, #5 - 20HH for 120YC. Total: 38HH for 258YC."
      },
      rerun: {
        toggle: "Toggle this if you have some purple certificates or expect a rerun during the calculation dates",
        current: "How many purple certificates currently in your possesion. Purple certificates gain may vary but it is always enough to buy all orundums. Calculator always adds 1700 purple certificates (median gain per rerun). Excess will be counted towards orundums in stock and ignored if there is nothing to buy anymore.",
        stock: "How many orundum packs left to purchase. HG adds 20 every rerun, it adds automatically to calculations so ignore if you have nothing in stock.",
        reruns: "If you know or expect rerun(s) during set period enter a number here. This will automatically add 20 orundum packs in stock per rerun."
      }
    },
  },

  maybe: {
    header: "Maybe",
    subtext: "This section is 'unstable' calculations.",
    limitedevent: "Limited event",
    lottery: "Orundum lottery",
    anniversary: "Anniversary",
    collab: "Collaboration",
    paradox: "Paradox Simulations",
    newannih: "New Annihilations",
    normalevents: "Normal Events",
    shards: "Shards/Day",
    calculations: {
      header: "Maybe",
      limited: "LIMITED PERMITS",
      lottery: "Orundum lottery",
      paradox: "Paradox Simulation(s) reward",
      events: "Event shop permits",
      newannih: "Annihilation first time reward",
      shards: "Origium shards farming"
    },
    help: {
      full: "This section consists of something personal, rare, unpredictable, etc. Inaccurate and speculative, just something that you want to throw into the pool for some reason.",
      limited: "Check this if there is a limited event along the way. INCLUDES ONLY ONE EVENT.",
      annicolab: "Can't choose both. Anniversary gives 24 free pulls^ 10 on login and 1 each day. Collab gives 20 pulls: 10 on login and 10 later on 8th day. THESE PERMITS ARE FOR LIMITED BANNER ONLY, THEY WILL EXPIRE LATER AND UNUSABLE ON ANY OTHER BANNER.",
      lottery: "Adds 7000 orundums into calculations (median winnings). Only during anniversaries, so disabled if collab is checked.",
      paradox: "Put a number of operators that will receive a paradox with an update or your upgrade. Each paradox gives 200 orundums.",
      events: "Each normal event has 3 HH permits on sale.",
      newannih: "Except for the first three annihilations (Chernobog, Lungmen Downtown and Outskirts) each first time full completition gives 1500 orundums.",
      shards: "Exchange is 2 shards for 20 orundums. You can exchange only 2 shards at a time, so any odd number is floored."
    }
  },

  hopium: {
    header: "Additional hope",
    subtext: "This section consists of random stuff that may occur and give you some extra pulls. Just info because it's impossible to predict the amount and occurrence.",
    textone: "Maintanance compensation",
    texttwo: "Mail delivery (For some achievements or events)",
    textthree: "Codes (They have a system but no one uses it. At least for now.)",
    textfour: "Web events",
    textfive: "Discord events and competitions rewards (if you participate of course)",
    textsix: "Your donations (Thank you for your service Doctor Whale)",
    textseven: "YC from duplicates to purchase HH permits"
  },

  budget: {
    header: "Budget",
    subtext: "Distribute your budget",
    operator_field: "Operator",
    banner_type: "Banner type",
    banner_standard: "Standard/Kernel",
    banner_collab: "Collaboration",
    banner_anniversary: "Anniversary",
    banner_joint: "Joint Operation",
    banner_debut: "Debut",
    banner_special: "Special",
    pulls_expected: "Pulls"
  },

  calculations: {
    header: "Calculations",
    days: "Day(s): {days}",
    weeks: "Week(s): {weeks}",
    months: "Month(s): {months}",
    subtotal: "Subtotal: {pulls}",
    total: "Total pulls: {pulls}",
  },
  
  help: {
    modaltitle: "Help"
  },
};
