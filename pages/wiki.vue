<template>
    <AppHeader />
    <main class="grid grid-cols-2 gap-2 px-2 bg-mirage-950 text-gray-300">
        <section>
            <ArkFrame legend="basics">
                <div class="w-full">
                    <div>
                        <div class="mb-3">There are 4 currencies used for gacha:</div>
                        <ul class="grid grid-cols-2 gap-3">
                            <li class="flex flex-col items-center gap-3">
                                <div>Orundum</div>
                                <OrundumIcon class="w-full sm:w-24" />
                            </li>
                            <li class="flex flex-col items-center gap-3">
                                <div>Originium Prime</div>
                                <OPIcon class="w-full sm:w-24" />
                            </li>
                            <li class="flex flex-col items-center gap-3">
                                <div>Headhunting Permit</div>
                                <PermitIcon class="w-full sm:w-24" />
                            </li>
                            <li class="flex flex-col items-center gap-3">
                                <div>Real Money</div> <svg viewBox="0 0 76 76" class="fill-white w-full sm:w-24"
                                    xmlns="http://www.w3.org/2000/svg" baseProfile="full" xml:space="preserve">
                                    <path
                                        d="m16.4 47.981 1.66-1.187 7.444 12.496 30.852-18.604 1.661 1.979L25.504 62.06zm.626-6.776 1.265-.791 7.444 12.892 30.852-18.209 1.265 2.375-32.117 19zm-.401-7.163 32.909-19 9.5 16.454-32.909 19zM38 25.333a7.125 7.125 0 1 0 0 14.25 7.125 7.125 0 0 0 0-14.25m3.278 11.625-1.083.625-.596-1.03-1.138.443-.952.14-.418-1.466.991-.119 1.075-.422q.486-.285.704-.649t.04-.699q-.18-.31-.628-.354l-1.181.11q-1.044.218-1.837.044-.795-.174-1.267-.963-.43-.752-.251-1.547.178-.795.987-1.494l-.601-1.041 1.075-.62.557.963.997-.41.792-.14.399 1.428-.733.097-1.121.454q-.52.314-.624.627-.104.312.045.552.144.264.59.294l1.32-.137q1.174-.222 1.887.03.712.254 1.136 1.01.435.753.256 1.585-.18.834-1.067 1.57z" />
                                </svg>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div class="mb-3">One pull equals:</div>
                        <ul class="grid grid-cols-2 gap-3">
                            <li class="flex flex-col items-center gap-3">600 Orundums</li>
                            <li class="flex flex-col items-center gap-3">~3.33... Originium Primes</li>
                            <li class="flex flex-col items-center gap-3">1 Headhunting permit</li>
                            <li class="flex flex-col items-center gap-3">??? Your currency (uncountable)</li>
                        </ul>
                    </div>
                </div>
            </ArkFrame>

            <ArkFrame legend="headhunting permit">
                <div>
                    <div>Precious tickets that you can exchange for your waifu\husbando, meta ultra killer destroyer
                        9000 or
                        most commonly disappointment. There are 3 types of it:</div>
                    <ul class="grid grid-cols-3 gap-3">
                        <li class="flex flex-col items-center gap-3">
                            <div>Headhunting Permit</div> <img :src="regularhh" alt="" class="w-20 h-16" />
                        </li>
                        <li class="flex flex-col items-center gap-3">
                            <div>Kernel Headhunting Permit</div> <img :src="kernelhh" alt="" class="w-20 h-16" />
                        </li>
                        <li class="flex flex-col items-center gap-3">
                            <div>Special Headhunting Permit</div> <img :src="specialhh" alt="" class="w-20 h-16" />
                        </li>
                    </ul>

                    <div class="header-text">Special Headhunting Permit: </div>
                    <div class="subtext">Tied to a specific banner and can be used only on it. Expires when the banner
                        ends.</div>
                    <ul>
                        <li>24 given on Anniversary, 10 on login + 1 each day. 20 given on collaboration, 10 on login
                            and 10
                            on the 7-8th day.</li>
                        <li>Store purchase (since Babel). You can buy 2 and 10, once each.</li>
                    </ul>

                    <div class="header-text">Kernel Headhunting Permit:</div>
                    <div class="subtext">Can be used only on Kernel banner. Operators from this banner grant ONLY Blue
                        Certificates. Does
                        not expire.</div>
                    <ul>
                        <li>Purchased from Blue Certificate shop. Each month you can purchase up to 38 for 2580 BC
                            total.
                        </li>
                        <li>Purchased from Yellow Certificate shop. Each month you can purchase up to 38 for 216 YC
                            total.
                        </li>
                        <li>Occasionally used as rewards in the mail or login event.</li>
                    </ul>

                    <div class="header-text">Headhunting Permit: </div>
                    <div class="subtext">The OG. Can be used anywhere. Does not expire.</div>
                    <ul>
                        <li>1 rewarded each month on 17th login.</li>
                        <li>Green Certificate Shop. Each month you can purchase: 2 for 480 GC on the first page, 2 for
                            900
                            GC on the second page. </li>
                        <li>Yellow Certificate Shop. Each month you can purchase up to 38 for 258 YC total.</li>
                        <li>Normal, Anniversary, Collaboration and their reruns have 3 in the event shop.</li>
                        <li>Trials for Navigator rewards 1 on 15th level.</li>
                        <li>Login events. There may be some in login event but it's not a 100%.</li>
                        <li>Web events. They are rare and may contain it, not a 100%.</li>
                        <li>Store purchase for your local currency. Starting from 10 and only sky is the limit. With the
                            exception of special event packs most of the time it's better to buy OP instead of them.
                        </li>
                        <li>Store packs. Some contain Headhunting Permits.</li>
                    </ul>
                </div>
            </ArkFrame>

            <ArkFrame legend="general advise">
                <div class="w-full">
                    <div>Just some stuff accumulated in the community through the years:</div>
                    <ul>
                        <li>HG resets OP double deal on yearly anniversary</li>
                        <li>To get the most out of your Yellow Certificates buy Headhunting permits in full batch of 38 permits for 258 YC</li>
                        <li>Monthly card yelds you 200 daily (still have to login)</li>
                        <li>At the end of anniversary event spend your sparks on a featured 5*, especially if you have them full pot or near it. 5* dupes yeld a good amount of Yellow Certificates. They are rare and useful, you can farm a material any time but you can't farm YC.</li>
                        <li>Shop operator for 180YC is way cheaper option than pulling for them. 180YC roughly equals to 18 pulls (42YC leftover). Do you think you can get this operator in this amount of pulls? Not to mention that it's a 100% option.</li>
                        <li>When you are really tight on a budget but still want to test your luck on anniversary event, wait for the last day and then use your resources. That way you've depleted all of the free pulls and got the results of orundum lottery, login event (if present), event shop and other stuff.</li>
                        <li>Special banners have their own pity so it doesn't matter how many pulls you've spent on standard</li>
                        <li>Collaboration banners have 120 pulls pity + 20 free pulls, so you need only 100 pull</li>
                        <li>Anniversary banners have 300 pulls pity + 24 free pulls + ~11 orundum lottery, so you need around 265 pulls</li>
                    </ul>
                </div>
            </ArkFrame>

        </section>

        <section>
            <ArkFrame legend="orundum">
                <div>
                    <div>Most common resource for a fellow Doctor. There are a lot of ways to obtain it:</div>
                    <ul>
                        <li>Daily mission yelds you 100</li>
                        <li>Weekly mission yelds you 500</li>
                        <li>Monthly card yelds you 200 daily (still have to login)</li>
                        <li>Annihilation farming yelds you 1200 - 1800 weekly. 1200 For new players and increaces with
                            each
                            map for the first 3 annihilations. Chernobog, Lungmen Outskirts and Lungmen Downtown. </li>
                        <li>Annihilation first time completion yelds a total of 1500 once for all of the milestones
                            (400/400
                            enemies). Except for the first 3.</li>
                        <li>Paradox Simulation yelds 200</li>
                        <li>Exchange Originium Prime. 1 OP = 180 Orundums. </li>
                        <li>Exchange Originium Shard. 2 Shards = 20 Orundums. You can't exchange 1 for 10, only by 2.
                        </li>
                        <li>Intelligence Certificate exchange. 20 IC = 100 Orundums. Every rerun HG adds 20 stacks (2000
                            Orundums) and possibility to obtain ~1700 IC.</li>
                        <li>Green Certificate Shop. You can buy 600 on the first page each month for 240 GC and
                            unlimited
                            amount on the third page 100 orundums for 50 GC.</li>
                        <li>Continuous support. Just play Arknights and HG will occasionally send you some in the
                            mailbox.
                        </li>
                        <li>Maintenance compensation. Short maintenance usually compensated in for of 200 orundums.</li>
                        <li>Annivesary's orundum lottery. Usually this lottery lasts for 14 days and yelds approximately
                            ~7000 orundums. That's just a math average and it depends on your luck. </li>
                        <li>Login events. There may be some orundum in login event but it's not a 100%.</li>
                        <li>Web events. They are rare and may contain it, not a 100%.</li>
                        <li>Store packs. Some contain orundum.</li>
                    </ul>
                </div>
            </ArkFrame>

            <ArkFrame legend="originium prime">
                <div>
                    <div>Funny shiny rocks. Not that many ways to obtain not that many ways to spend. You can buy skins,
                        restore sanity and of course spin the gacha wheel for it. New players may purchase pro packs for
                        it
                        and mad lads may use it for furniture.</div>
                    <ul>
                        <li>First time 3 star map completition yelds 1 OP and 1 more for challenge mode. Interludes and
                            tutorials grant 1 OP.</li>
                        <li>Maintenance compensation. Long maintenance usually compensated in form of 5 OP.</li>
                        <li>Monthly card yelds 6 OP on each purchase. Limited to 90 days of subscription.</li>
                        <li>Login events. There may be some OP in login event but it's not a 100% and rarely more than
                            2.
                        </li>
                        <li>Web events. They are rare and may contain it, not a 100%.</li>
                        <li>OP store purchase for your local currency. Starting from 1 OP and only sky is the limit.
                        </li>
                        <li>Store packs. Besides direct OP purchase some packs contain it.</li>
                    </ul>
                </div>
            </ArkFrame>

            <ArkFrame legend="real money">
                <div class="w-full">
                    <div>It's hard to tell what is the best deal because of local currencies, but here is a general
                        ideas and calculations: </div>

                    <div>
                        <div>Sanity and Pull calculations per OP</div>
                        <div class="subtext mb-3">Double deals can be purchased only once. Calculations here based on
                            standard deal.</div>
                        <ul class="grid grid-cols-3 gap-3">
                            <li class="deal">
                                <div class="flex flex-row justify-center w-full items-center gap-1">
                                    <span class="text-6xl">1</span>
                                    <OPIcon class="h-[3.75rem]" />
                                </div>
                                <div>0.99$</div>
                                <div class="inline-flex gap-1">180
                                    <OrundumIcon class="w-4" />
                                </div>
                                <div>0.33 Pulls | 3.3$ per pull</div>
                                <div>1 full sanity | 0.99$ per refresh</div>
                            </li>

                            <li class="deal">
                                <div class="inline-flex gap-1">
                                    <span class="text-6xl">7</span>
                                    <OPIcon class="w-12" />
                                </div>
                                <div>4.99$</div>
                                <div class="inline-flex gap-1">1260
                                    <OrundumIcon class="w-4" />
                                </div>
                                <div>2.1 Pulls | 2.38$ per pull</div>
                                <div>7 full sanity | 0.71$ per refresh</div>
                            </li>

                            <li class="deal">
                                <div class="inline-flex gap-1">
                                    <span class="text-6xl">24</span>
                                    <OPIcon class="w-12" />
                                </div>
                                <div>14.99$</div>
                                <div class="inline-flex gap-1">4320
                                    <OrundumIcon class="w-4" />
                                </div>
                                <div>7.2 Pulls | 2.08$ per pull</div>
                                <div>24 full sanity | 0.62$ per refresh</div>
                            </li>

                            <li class="deal">
                                <div class="inline-flex gap-1">
                                    <span class="text-6xl">50</span>
                                    <OPIcon class="w-12" />
                                </div>
                                <div>29.99$</div>
                                <div class="inline-flex gap-1">9000
                                    <OrundumIcon class="w-4" />
                                </div>
                                <div>15 Pulls | 1.99$ per pull</div>
                                <div>50 full sanity | 0.60$ per refresh</div>
                            </li>

                            <li class="deal">
                                <div class="inline-flex gap-1">
                                    <span class="text-6xl">90</span>
                                    <OPIcon class="w-12" />
                                </div>
                                <div>49.99$</div>
                                <div class="inline-flex gap-1">16200
                                    <OrundumIcon class="w-4" />
                                </div>
                                <div>27 Pulls | 1.85$ per pull</div>
                                <div>90 full sanity | 0.56$ per refresh</div>
                            </li>

                            <li class="deal">
                                <div class="inline-flex gap-1">
                                    <span class="text-6xl">185</span>
                                    <OPIcon class="w-12" />
                                </div>
                                <div>99.99$</div>
                                <div class="inline-flex gap-1">33300
                                    <OrundumIcon class="w-4" />
                                </div>
                                <div>55.5 Pulls | 1.80$ per pull</div>
                                <div>185 full sanity | 0.54$ per refresh</div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div>Other packs worth mentioning:</div>
                        <ul class="grid grid-cols-3 gap-3">
                            <li class="deal">
                                <div>Monthly Card</div>
                                <div class="inline-flex gap-1">
                                    <span class="text-6xl">6</span>
                                    <OPIcon class="w-12" />
                                </div>
                                <div>4.99$</div>
                                <div class="inline-flex gap-1">7080
                                    <OrundumIcon class="w-4" />
                                </div>
                                <div>11.8 Pulls | 0.42$ per pull</div>
                                <div>23.7 full sanity | 0.21$ per refresh</div>
                            </li>

                            <li class="deal">
                                <div>Monthly Headhunting</div>
                                <div class="inline-flex gap-1">
                                    <span class="text-6xl">42</span>
                                    <OPIcon class="w-12" />
                                </div>
                                <div>25.99$</div>
                                <div class="inline-flex gap-1">10
                                    <PermitIcon class="w-4" /> +
                                    7560
                                    <OrundumIcon class="w-4" />
                                </div>
                                <div>22.6 Pulls | 1.15$ per pull</div>
                                <div>42 full sanity | 0.61$ per refresh</div>
                            </li>

                            <li class="deal">
                                <div>Starter Headhunting</div>
                                <div class="inline-flex gap-1">
                                    <span class="text-6xl">-</span>
                                    <OPIcon class="w-12" />
                                </div>
                                <div>19.99$</div>
                                <div class="inline-flex gap-1">20
                                    <PermitIcon class="w-4" />
                                </div>
                                <div>20 Pulls | 0.99$ per pull</div>
                                <div>0 full sanity | 0.00$ per refresh</div>
                            </li>
                        </ul>
                    </div>
                    <div>Everything else, like anniversary and special event packs and deals aren't covered in here.
                        They have a lot of additional stuff that adds value to it so calculating them in terms of pulls
                        is incorrect. Plus you can buy them on anniversary events only and just once per event.</div>
                </div>
            </ArkFrame>

        </section>

    </main>
</template>

<script setup>
import regularhh from '../assets/images/regularhh.webp';
import specialhh from '../assets/images/specialhh.webp';
import kernelhh from '../assets/images/kernelhh.webp';
</script>

<style scoped>
.subtext {
    @apply text-gray-500 text-sm;
}

.header-text {
    @apply text-xl;
}

li {
    @apply border border-gray-300 px-2 py-1 my-2 hover:border-blue-ribbon-700 hover:text-white rounded-sm;
}

.deal {
    @apply flex flex-col items-center gap-3 py-2;
}
</style>