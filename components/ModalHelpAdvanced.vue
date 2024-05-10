<template>
    <p class="text-base leading-relaxed text-gray-400">
        {{ $t("help.advanced.full") }}
    </p>
    <ul>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("advanced.gcs") }}</span> - {{ $t("help.advanced.green.toggle") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("advanced.infinite") }}</span> - {{ $t("help.advanced.green.buyout") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("advanced.greens") }}</span> - {{ $t("help.advanced.green.current") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("advanced.strategy") }}</span> - {{ $t("help.advanced.green.strategy") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("advanced.recruits") }}</span> - {{ $t("help.advanced.green.recruit") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("advanced.phase") }}</span> - {{ $t("help.advanced.green.target") }}</li>
    </ul>
</template>