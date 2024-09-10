<template>
    <ArkStat class="text-red-700" text="controls.calculations.today"
        :condition="calendarStore.calendar_data.is_excluded_today" />
    <ArkStat class="text-red-700" text="controls.calculations.annih"
        :condition="calendarStore.calendar_data.is_excluded_annihilation" />
    <ArkStat class="text-red-700" text="controls.calculations.week"
        :condition="calendarStore.calendar_data.is_excluded_week" />
    <ArkStat class="text-red-700" text="controls.calculations.month"
        :condition="calendarStore.calendar_data.is_excluded_month" />
</template>

<script setup>
import { useCalendarStore } from '#imports';
const calendarStore = useCalendarStore();
</script>