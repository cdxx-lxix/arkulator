<template>
    <AppHeader />
    <main class="grid grid-cols-2 gap-2 px-2 bg-mirage-950 text-white">
        <section>
            <ArkFrame legend="basics">
                <div class="mb-3">There are 4 currencies used for gacha:</div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-2">

                    <ArkFancyCheckbox variant="dummy" label="Orundum" id="orundum">
                        <OrundumIcon class="w-full sm:w-24" />
                    </ArkFancyCheckbox>

                    <ArkFancyCheckbox variant="dummy" label="Originium Prime" id="op">
                        <OPIcon class="w-full sm:w-24" />
                    </ArkFancyCheckbox>

                    <ArkFancyCheckbox variant="dummy" label="Headhunting Permit" id="hh">
                        <PermitIcon class="w-full sm:w-24" />
                    </ArkFancyCheckbox>

                    <ArkFancyCheckbox variant="dummy" label="Real money" id="money">
                        <svg viewBox="0 0 76 76" class="fill-white w-full sm:w-24" xmlns="http://www.w3.org/2000/svg"
                            baseProfile="full" xml:space="preserve">
                            <path
                                d="m16.4 47.981 1.66-1.187 7.444 12.496 30.852-18.604 1.661 1.979L25.504 62.06zm.626-6.776 1.265-.791 7.444 12.892 30.852-18.209 1.265 2.375-32.117 19zm-.401-7.163 32.909-19 9.5 16.454-32.909 19zM38 25.333a7.125 7.125 0 1 0 0 14.25 7.125 7.125 0 0 0 0-14.25m3.278 11.625-1.083.625-.596-1.03-1.138.443-.952.14-.418-1.466.991-.119 1.075-.422q.486-.285.704-.649t.04-.699q-.18-.31-.628-.354l-1.181.11q-1.044.218-1.837.044-.795-.174-1.267-.963-.43-.752-.251-1.547.178-.795.987-1.494l-.601-1.041 1.075-.62.557.963.997-.41.792-.14.399 1.428-.733.097-1.121.454q-.52.314-.624.627-.104.312.045.552.144.264.59.294l1.32-.137q1.174-.222 1.887.03.712.254 1.136 1.01.435.753.256 1.585-.18.834-1.067 1.57z" />
                        </svg>
                    </ArkFancyCheckbox>

                </div>
                <div>
                    One pull equals:
                    <ul class="list-disc ml-4">
                        <li>600 Orundums</li>
                        <li>~3.33... Originium Primes</li>
                        <li>1 Headhunting permit</li>
                        <li>??? Your currency (uncountable)</li>
                    </ul>
                </div>
            </ArkFrame>

            <ArkFrame legend="headhunting permit">
                <div>Precious tickets that you can exchange for your waifu\husbando, meta ultra killer destroyer 9000 or
                    most commonly disappointment. There are 3 types of it:</div>
                <hr class="w-full my-2">
                <ul class="list-disc ml-4">
                    <li>Headhunting Permit (Yellow)</li>
                    <li>Kernel Headhunting Permit (Blue)</li>
                    <li>Special Headhunting Permit (Whatever color)</li>
                </ul>
                <hr class="w-full my-2">
                <div>Special Headhunting Permit: </div>
                <div>Tied to a specific banner and can be used only on it. Expires when the banner ends.</div>
                <ul class="list-disc ml-4">
                    <li>24 given on Anniversary, 10 on login + 1 each day. 20 given on collaboration, 10 on login and 10
                        on the 7-8th day.</li>
                    <li>Store purchase (since Babel). You can buy 2 and 10, once each.</li>
                </ul>
                <hr class="w-full my-2">
                <div>Kernel Headhunting Permit:</div>
                <div>Can be used only on Kernel banner. Operators from this banner grant ONLY Blue Certificates. Does
                    not expire.</div>
                <ul class="list-disc ml-4">
                    <li>Purchased from Blue Certificate shop. Each month you can purchase up to 38 for 2580 BC total.
                    </li>
                    <li>Purchased from Yellow Certificate shop. Each month you can purchase up to 38 for 216 YC total.
                    </li>
                    <li>Occasionally used as rewards in the mail or login event.</li>
                </ul>
                <hr class="w-full my-2">
                <div>Headhunting Permit: </div>
                <div>The OG. Can be used anywhere. Does not expire.</div>
                <ul class="list-disc ml-4">
                    <li>1 rewarded each month on 17th login.</li>
                    <li>Green Certificate Shop. Each month you can purchase: 2 for 480 GC on the first page, 2 for 900
                        GC on the second page. </li>
                    <li>Yellow Certificate Shop. Each month you can purchase up to 38 for 258 YC total.</li>
                    <li>Normal, Anniversary, Collaboration and their reruns have 3 in the event shop.</li>
                    <li>Trials for Navigator rewards 1 on 15th level.</li>
                    <li>Login events. There may be some in login event but it's not a 100%.</li>
                    <li>Web events. They are rare and may contain it, not a 100%.</li>
                    <li>Store purchase for your local currency. Starting from 10 and only sky is the limit. With the
                        exception of special event packs most of the time it's better to buy OP instead of them. </li>
                    <li>Store packs. Some contain Headhunting Permits.</li>
                </ul>
            </ArkFrame>

        </section>

        <section>
            <ArkFrame legend="orundum">
                <div>Most common resource for a fellow Doctor. There are a lot of ways to obtain it:</div>
                <ul class="list-disc ml-4">
                    <li>Daily mission yelds you 100</li>
                    <li>Weekly mission yelds you 500</li>
                    <li>Monthly card yelds you 200 daily (still have to login)</li>
                    <li>Annihilation farming yelds you 1200 - 1800 weekly. 1200 For new players and increaces with each
                        map for the first 3 annihilations. Chernobog, Lungmen Outskirts and Lungmen Downtown. </li>
                    <li>Annihilation first time completion yelds a total of 1500 once for all of the milestones (400/400
                        enemies). Except for the first 3.</li>
                    <li>Paradox Simulation yelds 200</li>
                    <li>Exchange Originium Prime. 1 OP = 180 Orundums. </li>
                    <li>Exchange Originium Shard. 2 Shards = 20 Orundums. You can't exchange 1 for 10, only by 2.</li>
                    <li>Intelligence Certificate exchange. 20 IC = 100 Orundums. Every rerun HG adds 20 stacks (2000
                        Orundums) and possibility to obtain ~1700 IC.</li>
                    <li>Green Certificate Shop. You can buy 600 on the first page each month for 240 GC and unlimited
                        amount on the third page 100 orundums for 50 GC.</li>
                    <li>Continuous support. Just play Arknights and HG will occasionally send you some in the mailbox.
                    </li>
                    <li>Maintenance compensation. Short maintenance usually compensated in for of 200 orundums.</li>
                    <li>Annivesary's orundum lottery. Usually this lottery lasts for 14 days and yelds approximately
                        ~7000 orundums. That's just a math average and it depends on your luck. </li>
                    <li>Login events. There may be some orundum in login event but it's not a 100%.</li>
                    <li>Web events. They are rare and may contain it, not a 100%.</li>
                    <li>Store packs. Some contain orundum.</li>
                </ul>
            </ArkFrame>

            <ArkFrame legend="originium prime">
                <div>Funny shiny rocks. Not that many ways to obtain not that many ways to spend. You can buy skins,
                    restore sanity and of course spin the gacha wheel for it. New players may purchase pro packs for it
                    and mad lads may use it for furniture.</div>
                <ul class="list-disc ml-4">
                    <li>First time 3 star map completition yelds 1 OP and 1 more for challenge mode. Interludes and
                        tutorials grant 1 OP.</li>
                    <li>Maintenance compensation. Long maintenance usually compensated in form of 5 OP.</li>
                    <li>Monthly card yelds 6 OP on each purchase. Limited to 90 days of subscription.</li>
                    <li>Login events. There may be some OP in login event but it's not a 100% and rarely more than 2.
                    </li>
                    <li>Web events. They are rare and may contain it, not a 100%.</li>
                    <li>OP store purchase for your local currency. Starting from 1 OP and only sky is the limit.</li>
                    <li>Store packs. Besides direct OP purchase some packs contain it.</li>
                </ul>
            </ArkFrame>

            <ArkFrame legend="real money">
                <div>Work or beg, I dunno.</div>
                <a href="https://linkedin.com">LinkedIn</a>
                <a href="https://onlyfans.com">OnlyFans</a>
            </ArkFrame>

        </section>

    </main>
</template>