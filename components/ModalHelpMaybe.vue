<template>
    <p class="text-base leading-relaxed text-gray-400">
        {{ $t("maybe.help.full") }}
    </p>
    <ul>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("maybe.paradox") }}</span> - {{ $t("maybe.help.paradox") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("maybe.newannih") }}</span> - {{ $t("maybe.help.newannih") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("maybe.shards") }}</span> - {{ $t("maybe.help.shards") }}</li>
        <hr class="mt-3">
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("maybe.sequence") }}</span> - {{ $t("maybe.help.sequence") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("maybe.event_name") }}</span> - {{ $t("maybe.help.event_name") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("maybe.event_type") }}</span> - {{ $t("maybe.help.event_type") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("maybe.use_op") }}</span> - {{ $t("maybe.help.use_op") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("maybe.lottery") }}</span> - {{ $t("maybe.help.lottery") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("maybe.free_pulls") }}</span> - {{ $t("maybe.help.free_pulls") }}</li>
    </ul>
</template>