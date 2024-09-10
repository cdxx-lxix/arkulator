<template>
    <p class="text-base leading-relaxed text-gray-400">
        {{ $t("guaranteed.help.full") }}
    </p>
    <ul>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("guaranteed.monthlycard") }}</span> - {{ $t("guaranteed.help.monthlycard") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("guaranteed.currentorundum") }}</span> - {{ $t("guaranteed.help.currentorundum") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("guaranteed.currentpermits") }}</span> - {{ $t("guaranteed.help.currentpermits") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("guaranteed.currentprime") }}</span> - {{ $t("guaranteed.help.currentprime") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("guaranteed.currentshards") }}</span> - {{ $t("guaranteed.help.currentshards") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("guaranteed.annihilation") }}</span> - {{ $t("guaranteed.help.annihilation") }}</li>
    </ul>
</template>