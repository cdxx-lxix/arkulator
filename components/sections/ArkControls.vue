<template>
    <ArkFrame legend="Controls">
        <ArkFrameHelp description="Nothing for now" :isbutton="true" modalid="controls-help" />
        <div class="grid grid-cols-4 px-6 gap-4 w-full mb-3">
            <ArkFancyCheckbox label="Exclude Today" id="exclude-today"
                v-model:boxvalue="calendarStore.calendar_data.is_excluded_today" variant="rect">
                <CalendarIcon class="w-6 h-6" variant="day" />
            </ArkFancyCheckbox>
            <ArkFancyCheckbox label="Exclude Week" id="exclude-week"
                v-model:boxvalue="calendarStore.calendar_data.is_excluded_week" variant="rect">
                <CalendarIcon class="w-6 h-6" variant="week" />
            </ArkFancyCheckbox>
            <ArkFancyCheckbox label="Exclude Annih." id="exclude-annihilation"
                v-model:boxvalue="calendarStore.calendar_data.is_excluded_annihilation" variant="rect">
                <CalendarIcon class="w-6 h-6" variant="annihilation" />
            </ArkFancyCheckbox>
            <ArkFancyCheckbox label="Exclude Month" id="exclude-month"
                v-model:boxvalue="calendarStore.calendar_data.is_excluded_month" variant="rect">
                <CalendarIcon class="w-6 h-6" variant="month" />
            </ArkFancyCheckbox>
        </div>
    </ArkFrame>
</template>

<script setup>
import { useCalendarStore } from '#imports';
const calendarStore = useCalendarStore();
</script>