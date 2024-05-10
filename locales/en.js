export default {
    test: "test",
    calendar: "Magic calendar",
    controls: {
        header: "Controls",
        subtext: "This settings affects most of the calculations. These buttons are responsible for EXCLUSION of stated entities.",
        today: "Today",
        week: "Week",
        annih: "Annih.",
        month: "Month"
    },
    guaranteed : {
        header: "Guaranteed",
        subtext: "This section contains rewards that are more or less 'guaranteed' as long as you login and play everyday.",
        monthlycard: "Monthly Card",
        currentorundum: "Current Orundum",
        currentpermits: "Current HH permits",
        opsacrifice: "OP to spend",
        currentshards: "Current Originium Shards",
        annihilation: "Annihilation reward"
    },
    advanced: {
        header: "Advanced",
        subtext: "This section consists of resources that can't be taken for granted and most likely out of your control but it's still possible to calculate with some degree of accuracy.",
        gcs: "Green Cert Shop",
        greens: "Current GC amount",
        recruits: "Recruitments daily",
        strategy: "Choose recruitment outcome",
        strategies: {
            minimum: "Minimum",
            average: "Average",
            maximum: "Maximum"
        },
        phase: "Target shop page",
        gcs_phases: {
            budget: "Page 1",
            normal: "Page 2"
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
            fives: "Phase 5 Strict"
        },
        rerun: "Rerun Shop",
        reruncerts: "Current IC amount",
        rerunstock: "Orundum in stock",
        rerunencounters: "Expected reruns"
    },
    maybe: {
        header: "Maybe",
        subtext: "This section consists of something personal, rare, unpredictable, etc. Inaccurate and speculative, just something that you want to throw into the pool for some reason.",
        limitedevent: "Limited event",
        lottery: "Orundum lottery",
        anniversary: "is it Anniversary?",
        collab: "is it Collaboration?",
        paradox: "Paradox Simulations",
        newannih: "New Annihilations",
        normalevents: "Normal Events",
        shards: "Originium Shards Daily"
    },
    hopium: {
        header: "Additional hope",
        subtext: "This section consists of random stuff that may occur and give you some extra pulls. Just info because it's impossible to predict the amount and occurance.",
    },
    calculations: {
        header: "Calculations",
        days: "Day(s): {days}",
        weeks: "Week(s): {weeks}",
        months: "Month(s): {months}",
        controls: {
            todayexcluded: "Today's rewards excluded",
            annihilationexcluded: "This week's annihilation rewards excluded",
            weekexcluded: "This week's rewards excluded",
            monthexcluded: "This month's rewards & shops excluded"
        },
        guaranteed: {
            header: "guaranteed",
            orundums: "Current orundums",
            permits: "Current permit(s)",
            prime: "From OP exchange",
            shards: "From originium shards",
            daily: "From daily missions",
            weekly: "From weekly missions",
            subscription: "From monthly card",
            annihilation: "From annihilation(s)",
            loginpermit: "Every 17th day login permit",
        },
        advanced: {
            header: "advanced",
            infinite: "From Infinite buyout",
            greenshoporundum: "From Green cert shop (orundum)",
            greenshoppermits: "From Green cert shop (permits)",
            yellowshoppermits: "From Yellow cert shop",
            rerunshop: "From Rerun(s)"
        },
        maybe: {
            header: "maybe",
            limited: "LIMITED PERMITS",
            lottery: "Orundum lottery",
            paradox: "Paradox Simulation(s) reward",
            events: "Event shop permits",
            newannih: "Annihilation first time reward",
            shards: "Origium shards farming"
        },
        subtotal: "Subtotal: {pulls}",
        total: "Total pulls: {pulls}"
    },
    help: {
        modaltitle: "Help",
        guaranteed: {
            full: "This section contains rewards that are more or less 'guaranteed' as long as you login and play everyday. All of the calculation are pure math. That's why it is called 'guaranteed' section. Just be a good boy/girl and play everyday then these calculation will be correct 100%.",
            monthlycard: "Check it if you have it already or willing to purchase FOR THE DURATION OF SET DATES.",
            excludetoday: "Excludes today's rewards from calculations. Affects all of the rewards for today: missions, monthly card, recruits, sign-in.",
            excludeweek: "Excludes current week's missions rewards: orundum, green certificates.",
            excludeannihilation: "Excludes current week's orundum reward from annihilation.",
            currentorundum: "Includes orundum that you have now into calculations. Just leave it empty if it's unnessesary.",
            currentpermits: "Includes permit(s) that you have now into calculations. Just leave it empty if it's unnessesary.",
            currentprime: "If you are willing to spend originium prime for pulls then write the amount you are willing to sacrifice to the Gacha God. Just leave it empty if it's unnessesary.",
            currentshards: "If you have originium shards and willing to convert them into orundum write the amount you are willing to convert. Just leave it empty if it's unnessesary.",
            annihilationreward: "Sets your current annihilation reward for weekly farm. Affects week-based calculation and exclusion of current week."
        },
        advanced: {
            full: "This section consists of resources that can't be taken for granted and most likely out of your control but it's still possible to calculate with some degree of accuracy. Some values may vary (the cause maybe you or just random), for example recruitment.",
            green: {
                toggle: "Toggle this checkbox to include Green Certificate Shop into your calculations.",
                buyout: "Toggle this to calculate Green Certificates DIRECTLY into ORUNDUM. This option WON'T include your path to the third page. It needs you to be on the third page already.",
                current: "Input your current Green Certificate possetion. If 'INFINITE BUYOUT' - mandatory, else - optional.",
                recruit: "Input the amount of recruitments you do DAILY. It's not capped but if you do it daily, it's impossible to do more than 6 a day.",
                strategy: "Responsible for the outcome of your recruitment. Minimal - counts ALL of the recruitments as 3* ops. (predicted) Average - counts every 4th op as 4* and others as 3*. Maximum - counts ALL of the recruitments as 4*. My condolences if you waste your recruitments on 1* and 2*. 5* and 6* are not included because they are too random and unrelyable for calculations.",
                target: "Your purchasing goal for the duration of set dates. Page 1 - simulates purchase of ONLY orundum and permits of the first page. Page 2 - simulates purchase of WHOLE page 1 and HH permits on the second page ONLY."
            }
        },
        maybe: {
            full: "This section consists of something personal, rare, unpredictable, etc. Inaccurate and speculative, just something that you want to throw into the pool for some reason.",
            limited: "Activates fields and includes 'limited event' type into calculations.",
            lottery: "Adds 7000 orundums into calculations. It counts every encounter as 500 orundums which is an arithmetic mean of possible rewards.",
            annicolab: "Adds 24 LIMITED HH permits if ANNIVERSARY. Adds 10 LIMITED HH permits if COLLAB. Collabs are shorter and rewards are lower because hard pity on 120th pull.",
            paradox: "Enter an amount of paradoxes that you'll be able to complete and get rewards for during the set period of time.",
            annih: "Enter an amount of new annihilations that will be released during the set period of time. If you want to add that into the calculations. Some of the annihilation release dates are in the calendar. Look for purple underscores.",
            events: "Enter an amount of possible new events along your set period. Don't add STORY events, only normal two weeks long events.",
            shards: "If you farm shards here is the place to add your DAILY harvest."
        },
        controls: {
            full: "These settings affects most of the calculations. These buttons are responsible for EXCLUSION of stated entities.",
            day: "This option excludes today from calculations. Affects both guaranteed and advanced calculations. Removes daily missions, login rewards, recruitment. If today is the last day of the month/week other calculations will be affected accordingly.",
            week: "EXCLUDES CURRENT week's missions rewards ONLY and doesn't affect any other calculations",
            annihilation: "EXCLUDES annihilation rewards for CURRENT WEEK. Annihilation rewards ONLY, nothing else is afftected",
            month: "EXCLUDES the whole CURRENT month from calculations. Affects ONLY advanced calculations related to green and yellow certificate shops."
        }
    }
}