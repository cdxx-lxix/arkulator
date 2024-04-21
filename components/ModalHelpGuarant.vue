<template>
    <p class="text-base leading-relaxed text-gray-400">
        {{ $t("help.guaranteed.full") }}
    </p>
    <ul>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("guaranteed.monthlycard") }}</span> - {{ $t("help.guaranteed.monthlycard") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("guaranteed.todaytasks") }}</span> - {{ $t("help.guaranteed.excludetoday") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("guaranteed.thisweektask") }}</span> - {{ $t("help.guaranteed.excludeweek") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("guaranteed.thisweekannihilation") }}</span> - {{ $t("help.guaranteed.excludeannihilation") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("guaranteed.currentorundum") }}</span> - {{ $t("help.guaranteed.currentorundum") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("guaranteed.currentpermits") }}</span> - {{ $t("help.guaranteed.currentpermits") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("guaranteed.opsacrifice") }}</span> - {{ $t("help.guaranteed.currentprime") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("guaranteed.currentshards") }}</span> - {{ $t("help.guaranteed.currentshards") }}</li>
        <li class="text-gray-400 font-light mb-2"><span class="font-semibold text-gray-50">{{ $t("guaranteed.annihilation") }}</span> - {{ $t("help.guaranteed.annihilationreward") }}</li>
    </ul>
</template>