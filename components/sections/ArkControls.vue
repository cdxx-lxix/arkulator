<template>
    <ArkFrame legend="controls.header">
        <ArkFrameHelp description="controls.subtext" :isbutton="true" modalid="controls-help" />
        <div class="grid grid-cols-4 px-6 gap-4 w-full mb-3">
            <ArkFancyCheckbox label="controls.today" id="exclude-today"
                v-model:boxvalue="calendarStore.calendar_data.is_excluded_today" variant="rect" :disabled="calendarStore.calendar_data.is_today_locked">
                <CalendarIcon class="w-6 h-6" variant="day" />
            </ArkFancyCheckbox>
            <ArkFancyCheckbox label="controls.week" id="exclude-week"
                v-model:boxvalue="calendarStore.calendar_data.is_excluded_week" variant="rect" :disabled="calendarStore.calendar_data.is_week_locked">
                <CalendarIcon class="w-6 h-6" variant="week" />
            </ArkFancyCheckbox>
            <ArkFancyCheckbox label="controls.annih" id="exclude-annihilation"
                v-model:boxvalue="calendarStore.calendar_data.is_excluded_annihilation" variant="rect" :disabled="calendarStore.calendar_data.is_week_locked">
                <CalendarIcon class="w-6 h-6" variant="annihilation" />
            </ArkFancyCheckbox>
            <ArkFancyCheckbox label="controls.month" id="exclude-month"
                v-model:boxvalue="calendarStore.calendar_data.is_excluded_month" variant="rect" :disabled="calendarStore.calendar_data.is_month_locked">
                <CalendarIcon class="w-6 h-6" variant="month" />
            </ArkFancyCheckbox>
        </div>
    </ArkFrame>
</template>

<script setup>
import { useCalendarStore } from '#imports';
const calendarStore = useCalendarStore();
</script>