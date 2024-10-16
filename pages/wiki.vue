<template>
    <AppHeader />
    <main class="grid grid-cols-1 lg:grid-cols-2 gap-2 px-2 bg-mirage-950 text-gray-300">
        <section>
            <ArkFrame legend="wiki.basics.legend">
                <div class="w-full">
                    <div>
                        <div class="mb-3">{{ $t('wiki.basics.header') }}</div>
                        <ul class="grid grid-cols-2 gap-3">
                            <li class="flex flex-col items-center gap-3">
                                <div>{{ $t('wiki.basics.or') }}</div>
                                <OrundumIcon class="w-full sm:w-24" />
                            </li>
                            <li class="flex flex-col items-center gap-3">
                                <div>{{ $t('wiki.basics.op') }}</div>
                                <OPIcon class="w-full sm:w-24" />
                            </li>
                            <li class="flex flex-col items-center gap-3">
                                <div>{{ $t('wiki.basics.hh') }}</div>
                                <PermitIcon class="w-full sm:w-24" />
                            </li>
                            <li class="flex flex-col items-center gap-3">
                                <div>{{ $t('wiki.basics.rm') }}</div>
                                <MoneyIcon class="fill-white w-full sm:w-24" />
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div class="mb-3">{{ $t('wiki.basics.pull') }}</div>
                        <ul class="grid grid-cols-2 gap-3 text-center">
                            <li class="flex flex-col justify-center gap-3">{{ $t('wiki.basics.orundums') }}</li>
                            <li class="flex flex-col justify-center gap-3">{{ $t('wiki.basics.permits') }}</li>
                            <li class="flex flex-col justify-center gap-3">{{ $t('wiki.basics.primes') }}</li>
                            <li class="flex flex-col justify-center gap-3">{{ $t('wiki.basics.money') }}</li>
                        </ul>
                    </div>
                </div>
            </ArkFrame>

            <ArkFrame legend="wiki.general.legend">
                <div class="w-full">
                    <div>{{ $t('wiki.general.header') }}</div>
                    <ul>
                        <li v-for="i in 10" :key="i">{{ $t(`wiki.general.${i}`) }}</li>
                    </ul>
                </div>
            </ArkFrame>

            <ArkFrame legend="wiki.headhunt.legend">
                <div>
                    <div>{{ $t('wiki.headhunt.header') }}</div>
                    <ul class="grid grid-cols-3 gap-3">
                        <li class="flex flex-col justify-between items-center gap-3">
                            <div>{{ $t('wiki.headhunt.regular') }}</div> <img :src="regularhh"
                                :alt="$t('wiki.headhunt.regular')" class="w-20 h-16" />
                        </li>
                        <li class="flex flex-col items-center gap-3">
                            <div>{{ $t('wiki.headhunt.kernel') }}</div> <img :src="kernelhh"
                                :alt="$t('wiki.headhunt.kernel')" class="w-20 h-16" />
                        </li>
                        <li class="flex flex-col items-center gap-3">
                            <div>{{ $t('wiki.headhunt.exclusive') }}</div> <img :src="specialhh"
                                :alt="$t('wiki.headhunt.exclusive')" class="w-20 h-16" />
                        </li>
                    </ul>

                    <div class="header-text">{{ $t('wiki.headhunt.exclusive') }}</div>
                    <div class="subtext">{{ $t('wiki.headhunt.exclusivesub') }}</div>
                    <ul>
                        <li v-for="i in 2" :key="i">{{ $t(`wiki.headhunt.exclusive_content.${i}`) }}</li>
                    </ul>

                    <div class="header-text">{{ $t('wiki.headhunt.kernel') }}</div>
                    <div class="subtext">{{ $t('wiki.headhunt.kernelsub') }}</div>
                    <ul>
                        <li v-for="i in 3" :key="i">{{ $t(`wiki.headhunt.kernel_content.${i}`) }}</li>
                    </ul>

                    <div class="header-text">{{ $t('wiki.headhunt.regular') }}</div>
                    <div class="subtext">{{ $t('wiki.headhunt.regularsub') }}</div>
                    <ul>
                        <li v-for="i in 9" :key="i">{{ $t(`wiki.headhunt.regular_content.${i}`) }}</li>
                    </ul>
                </div>
            </ArkFrame>

        </section>

        <section>
            <ArkFrame legend="wiki.orundum.legend">
                <div>
                    <div>{{ $t('wiki.orundum.header') }}</div>
                    <ul>
                        <li v-for="i in 16" :key="i">{{ $t(`wiki.orundum.${i}`) }}</li>
                    </ul>
                </div>
            </ArkFrame>

            <ArkFrame legend="wiki.prime.legend">
                <div>
                    <div>{{ $t('wiki.prime.header') }}</div>
                    <ul>
                        <li v-for="i in 7" :key="i">{{ $t(`wiki.prime.${i}`) }}</li>
                    </ul>
                </div>
            </ArkFrame>

            <ArkFrame legend="wiki.money.legend">
                <div class="w-full">
                    <div>{{ $t('wiki.money.header') }}</div>

                    <div>
                        <div class="subtext mb-3">{{ $t('wiki.money.subheader') }}</div>
                        <ul class="grid sm:grid-cols-2 sm:gap-2 xl:grid-cols-3 lg:gap-3">
                            <li class="deal prime" v-for="item, index in prime_packs" :key="index">
                                <div class="flex flex-row justify-center w-full items-center gap-1">
                                    <span class="text-6xl">{{ item.primes }}</span>
                                    <OPIcon class="h-[3.75rem]" />
                                </div>
                                <div>{{ item.price }}$</div>
                                <div class="inline-flex gap-1">{{ getOrundums(item.primes) }}
                                    <OrundumIcon class="w-4" />
                                </div>
                                <div>{{ getPulls(item.primes) }} {{ $t('wiki.money.pulls') }} | {{ getPerPull(item.primes, item.price) }}$ {{ $t('wiki.money.ppulls') }}</div>
                                <div>{{ item.primes }} {{ $t('wiki.money.sanity') }} | {{ getPerSanity(item.price, item.primes) }}$ {{ $t('wiki.money.psanity') }}</div>
                            </li>
                            <li class="deal prime">
                                <div>{{ $t('wiki.money.calculate') }}</div>
                                <ArkInput class="w-1/2 md:w-8/12" id="usersprime" min="0" v-model:inputvalue="user_prime">
                                    <OPIcon class="w-6 h-6" />
                                </ArkInput>
                                <ArkInput class="w-1/2 md:w-8/12" id="usersprime" min="0" v-model:inputvalue="user_money">
                                    <MoneyIcon class="w-6 h-6 fill-white" />
                                </ArkInput>
                                <div class="inline-flex gap-1">{{ getOrundums(user_prime) }}
                                    <OrundumIcon class="w-4" />
                                </div>
                                <div>{{ getPulls(user_prime) }} {{ $t('wiki.money.pulls') }} | {{ getPerPull(user_prime, user_money) }} {{ $t('wiki.money.ppulls') }}</div>
                                <div>{{ user_prime }} {{ $t('wiki.money.sanity') }} | {{ getPerSanity(user_prime, user_money) }} {{ $t('wiki.money.psanity') }}</div>
                            </li>
                        </ul>
                    </div>

                    <div>{{ $t('wiki.money.ending') }}</div>
                </div>
            </ArkFrame>

        </section>

    </main>
</template>

<script setup>
import regularhh from '../assets/images/regularhh.webp';
import specialhh from '../assets/images/specialhh.webp';
import kernelhh from '../assets/images/kernelhh.webp';

const user_prime = ref(0)
const user_money = ref(0)

const prime_packs = [
    { primes: 1, price: 0.99 },
    { primes: 7, price: 4.99 },
    { primes: 24, price: 14.99 },
    { primes: 50, price: 29.99 },
    { primes: 90, price: 49.99 },
    { primes: 185, price: 99.99 },
]

const getOrundums = (primes) => {
    return primes * 180
}

const getPulls = (primes) => {
    if (!primes) return 0
    return getOrundums(primes) / 600
}

const getPerPull = (primes, price) => {
    if (!primes || !price) return 0
    return (price / getPulls(primes)).toFixed(2)
}

const getPerSanity = (primes, price) => {
    if (!primes || !price) return 0
    return (price / primes).toFixed(2)
}
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
    @apply flex flex-col items-center text-center gap-3 py-2;
}

.prime:last-child {
    @apply xl:col-start-2 xl:col-end-2 col-span-1 sm:col-span-2 xl:col-span-1;
}
</style>