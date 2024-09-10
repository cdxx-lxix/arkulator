<template>
    <p class="text-base leading-relaxed text-gray-400">
        {{ $t("controls.help.full") }}
    </p>
    <ul>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("controls.today") }}</span> - {{ $t("controls.help.today") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("controls.week") }}</span> - {{ $t("controls.help.week") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("controls.annih") }}</span> - {{ $t("controls.help.annih") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("controls.month") }}</span> - {{ $t("controls.help.month") }}</li>
    </ul>
</template>