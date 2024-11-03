<template>
    <ArkFrame legend="calendar">
        <VDatePicker v-model.range="calendarStore.range" mode="date" is-dark="true" color="pink" :first-day-of-week="2"
            show-iso-weeknumbers :min-date="calendarStore.today" :max-date="new Date(2030, 1, 1)"
            :attributes="attributes" :columns="calendar_columns" />
    </ArkFrame>
</template>

<script setup>
import login from '~/data/login';
import { useCalendarStore } from '~/stores/calendar';
const viewport = useViewport();
const attributes = ref(login);
const calendar_columns = ref(2);
const calendarStore = useCalendarStore();

const choose_columns = (bp) => {
    if (bp === 'xs') {
        return calendar_columns.value = 1;
    } else if (bp === 'sm' || bp === 'xl') {
        return calendar_columns.value = 2;
    } else if (bp === 'lg') {
        return calendar_columns.value = 4;
    } else if (bp === 'md' || bp === '2xl') {
        return calendar_columns.value = 3;
    }
};

onMounted(() => {
    choose_columns(viewport.breakpoint.value);
    watch(viewport.breakpoint, (newBreakpoint) => {
        choose_columns(newBreakpoint);
    })
});
</script>