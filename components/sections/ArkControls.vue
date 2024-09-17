<template>
    <ArkFrame legend="controls.header">
        <ArkFrameHelp description="controls.subtext" :isbutton="true" modalid="controls-help" />
        <div class="grid grid-cols-2 sm:grid-cols-4 px-6 gap-4 w-full mb-3 max-h-28 sm:max-h-16">
            <ArkFancyCheckbox label="controls.today" id="exclude-today"
                v-model:boxvalue="calendarStore.calendar_data.is_excluded_today" variant="rect" :disabled="calendarStore.calendar_data.is_today_locked">
                <CalendarDayIcon class="w-12 h-12" />
            </ArkFancyCheckbox>
            <ArkFancyCheckbox label="controls.week" id="exclude-week"
                v-model:boxvalue="calendarStore.calendar_data.is_excluded_week" variant="rect" :disabled="calendarStore.calendar_data.is_week_locked">
                <CalendarWeekIcon class="w-12 h-12" />
            </ArkFancyCheckbox>
            <ArkFancyCheckbox label="controls.annih" id="exclude-annihilation"
                v-model:boxvalue="calendarStore.calendar_data.is_excluded_annihilation" variant="rect" :disabled="calendarStore.calendar_data.is_week_locked">
                <CalendarAnnihIcon class="w-12 h-12" />
            </ArkFancyCheckbox>
            <ArkFancyCheckbox label="controls.month" id="exclude-month"
                v-model:boxvalue="calendarStore.calendar_data.is_excluded_month" variant="rect" :disabled="calendarStore.calendar_data.is_month_locked">
                <CalendarMonthIcon class="w-12 h-12" />
            </ArkFancyCheckbox>
        </div>
    </ArkFrame>
</template>

<script setup>
import { useCalendarStore } from '#imports';
const calendarStore = useCalendarStore();
</script>