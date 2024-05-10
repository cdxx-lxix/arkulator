<template>
    <p class="text-base leading-relaxed text-gray-400">
        {{ $t("help.maybe.full") }}
    </p>
    <ul>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("maybe.limitedevent") }}</span> - {{ $t("help.maybe.limited") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("maybe.lottery") }}</span> - {{ $t("help.maybe.lottery") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("maybe.anniversary") }} / {{ $t("maybe.collab") }}</span> - {{ $t("help.maybe.annicolab") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("maybe.paradox") }}</span> - {{ $t("help.maybe.paradox") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("maybe.newannih") }}</span> - {{ $t("help.maybe.annih") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("maybe.normalevents") }}</span> - {{ $t("help.maybe.events") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("maybe.shards") }}</span> - {{ $t("help.maybe.shards") }}</li>
    </ul>
</template>