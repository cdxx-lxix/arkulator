<template>
    <p class="text-base leading-relaxed text-gray-400">
        {{ $t("help.guaranteed.full") }}
    </p>
    <ul>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("guaranteed.monthlycard") }}</span> - {{ $t("help.guaranteed.monthlycard") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("guaranteed.currentorundum") }}</span> - {{ $t("help.guaranteed.currentorundum") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("guaranteed.currentpermits") }}</span> - {{ $t("help.guaranteed.currentpermits") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("guaranteed.opsacrifice") }}</span> - {{ $t("help.guaranteed.currentprime") }}</li>
    </ul>
</template>