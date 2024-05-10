<template>
    <p class="text-base leading-relaxed text-gray-400">
        {{ $t("help.controls.full") }}
    </p>
    <ul>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("controls.today") }}</span> - {{ $t("help.controls.day") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("controls.week") }}</span> - {{ $t("help.controls.week") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("controls.annih") }}</span> - {{ $t("help.controls.annihilation") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("controls.month") }}</span> - {{ $t("help.controls.month") }}</li>
    </ul>
</template>