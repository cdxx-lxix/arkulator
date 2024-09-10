<template>
    <p class="text-base leading-relaxed text-gray-400">
        {{ $t("advanced.help.full") }}
    </p>
    <div class="mb-4 border-b border-gray-700">
        <ul class="flex flex-row flex-nowrap text-lg font-semibold text-center justify-between w-full">
            <li class="me-2 w-full">
                <button
                    class="flex flex-row gap-2 items-center justify-center w-full py-2 border-b-2 text-gray-300 hover:text-blue-ribbon-700"
                    type="button" @click="changeActive('gcs')">
                    <GreenCertIcon class="w-6 h-6" /><span :class="activeTab === 'gcs' ? 'text-blue-ribbon-400' : ''">{{
                        $t("advanced.help.greentab") }}</span>
                </button>
            </li>
            <li class="me-2 w-full">
                <button
                    class="flex flex-row gap-2 items-center justify-center w-full py-2 border-b-2 text-gray-300 hover:text-blue-ribbon-700"
                    type="button" @click="changeActive('ycs')">

                    <YellowCertIcon class="w-6 h-6" /><span :class="activeTab === 'ycs' ? 'text-blue-ribbon-400' : ''">{{
                        $t("advanced.help.yellowtab") }}</span>

                </button>
            </li>
            <li class="me-2 w-full">
                <button
                    class="flex flex-row gap-2 items-center justify-center w-full py-2 border-b-2 text-gray-300 hover:text-blue-ribbon-700"
                    type="button" @click="changeActive('rcs')">
                    <RerunCertIcon class="w-6 h-6" /><span :class="activeTab === 'rcs' ? 'text-blue-ribbon-400' : ''">{{
                        $t("advanced.help.reruntab") }}</span>
                </button>
            </li>
        </ul>
    </div>

    <ul v-if="activeTab === 'gcs'">
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("advanced.gcs")
                }}</span> - {{ $t("advanced.help.green.toggle") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("advanced.infinite")
                }}</span> - {{ $t("advanced.help.green.buyout") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("advanced.greens")
                }}</span> - {{ $t("advanced.help.green.current") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("advanced.strategy")
                }}</span> - {{ $t("advanced.help.green.strategy") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("advanced.recruits")
                }}</span> - {{ $t("advanced.help.green.recruit") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("advanced.phase")
                }}</span> - {{ $t("advanced.help.green.target") }}</li>
    </ul>

    <ul v-if="activeTab === 'ycs'">
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("advanced.ycs")
                }}</span> - {{ $t("advanced.help.yellow.toggle") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("advanced.yellows")
                }}</span> - {{ $t("advanced.help.yellow.current") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("advanced.ycsrecs")
                }}</span> - {{ $t("advanced.help.yellow.recruit") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("advanced.ycsbuys")
                }}</span> - {{ $t("advanced.help.yellow.strategy") }}</li>
        <li class="text-gray-400 font-light mb-2">{{ $t("advanced.help.yellow.condition") }}</li>
        <li class="text-gray-400 font-light mb-2">{{ $t("advanced.help.yellow.exampleone") }}</li>
        <li class="text-gray-400 font-light mb-2">{{ $t("advanced.help.yellow.exampletwo") }}</li>
        <li class="text-gray-400 font-light mb-2">{{ $t("advanced.help.yellow.phases") }}</li>
    </ul>

    <ul v-if="activeTab === 'rcs'">
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("advanced.rerun")
                }}</span> - {{ $t("advanced.help.rerun.toggle") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("advanced.reruncerts")
                }}</span> - {{ $t("advanced.help.rerun.current") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("advanced.rerunstock")
                }}</span> - {{ $t("advanced.help.rerun.stock") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("advanced.rerunencounters")
                }}</span> - {{ $t("advanced.help.rerun.reruns") }}</li>
    </ul>
</template>

<script setup>
const activeTab = ref('gcs')

const changeActive = (tab) => {
    if (!tab) return
    return activeTab.value = tab
}
</script>