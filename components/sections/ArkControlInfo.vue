<template>
    <ArkStat class="text-red-700" text="calculations.controls.todayexcluded"
        :condition="calendarStore.calendar_data.is_excluded_today" />
    <ArkStat class="text-red-700" text="calculations.controls.annihilationexcluded"
        :condition="calendarStore.calendar_data.is_excluded_annihilation" />
    <ArkStat class="text-red-700" text="calculations.controls.weekexcluded"
        :condition="calendarStore.calendar_data.is_excluded_week" />
    <ArkStat class="text-red-700" text="calculations.controls.monthexcluded"
        :condition="calendarStore.calendar_data.is_excluded_month" />
</template>

<script setup>
import { useCalendarStore } from '#imports';
const calendarStore = useCalendarStore();
</script>