<template>
    <p class="text-base leading-relaxed text-gray-400">
        {{ $t("maybe.help.full") }}
    </p>
    <ul>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("maybe.limitedevent") }}</span> - {{ $t("maybe.help.limited") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("maybe.lottery") }}</span> - {{ $t("maybe.help.lottery") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("maybe.anniversary") }} / {{ $t("maybe.collab") }}</span> - {{ $t("maybe.help.annicolab") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("maybe.paradox") }}</span> - {{ $t("maybe.help.paradox") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("maybe.newannih") }}</span> - {{ $t("maybe.help.newannih") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("maybe.normalevents") }}</span> - {{ $t("maybe.help.events") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("maybe.shards") }}</span> - {{ $t("maybe.help.shards") }}</li>
    </ul>
</template>