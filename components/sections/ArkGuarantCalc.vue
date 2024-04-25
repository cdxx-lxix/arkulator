<template>
    <ArkFrame legend="guaranteed.header">
        <ArkFrameHelp description="guaranteed.subtext" :isbutton="true" modalid="guaranteed-help" />
        <div class="grid grid-cols-4 px-6 gap-4 flex-grow-1">
            <div class="col-span-1">
                <ArkCheckboxListGroup>
                    <ArkCheckboxListElement id="monthlycard" label="guaranteed.monthlycard"
                        v-model:boxvalue="pullStore.user_data.is_monthly_card_active" />
                    <ArkCheckboxListElement id="todayrewards" label="guaranteed.todaytasks"
                        v-model:boxvalue="calendarStore.calendar_data.is_excluded_today"
                        :disabled="(calendarStore.today.getTime() === calendarStore.range.start.getTime() && calendarStore.getDays <= 1)" />
                    <ArkCheckboxListElement id="weeklyrewards" label="guaranteed.thisweektask"
                        v-model:boxvalue="calendarStore.calendar_data.is_excluded_week" />
                    <ArkCheckboxListElement id="annihilation" label="guaranteed.thisweekannihilation"
                        v-model:boxvalue="calendarStore.calendar_data.is_excluded_annihilation" />
                </ArkCheckboxListGroup>
            </div>
            <div class="grid grid-cols-2 gap-2 mb-3 col-span-3">
                <ArkInput class="w-full" id="currentorundum" min="0"
                    v-model:inputvalue="pullStore.user_data.current_orundums" label="guaranteed.currentorundum">
                    <OrundumIcon class="w-6 h-6" />
                </ArkInput>
                <ArkInput class="w-full" id="currenpermits" min="0"
                    v-model:inputvalue="pullStore.user_data.current_permits" label="guaranteed.currentpermits">
                    <PermitIcon class="w-6 h-6" />
                </ArkInput>
                <ArkInput class="w-full" id="opsacrifice" min="0" v-model:inputvalue="pullStore.user_data.current_prime"
                    label="guaranteed.opsacrifice">
                    <OPIcon class="w-6 h-6" />
                </ArkInput>
                <ArkInput class="w-full" id="currentshards" min="0"
                    v-model:inputvalue="pullStore.user_data.current_shards" label="guaranteed.currentshards">
                    <OShardIcon class="w-6 h-6" />
                </ArkInput>
                <ArkRange class="col-span-2" v-model:rangevalue="pullStore.user_data.current_annihilation_reward"
                    label="guaranteed.annihilation" min="1200" max="1800" step="50" />
            </div>
        </div>
    </ArkFrame>
</template>

<script setup>
import { usePullsStore } from '#imports';
import { useCalendarStore } from '~/stores/calendar';

const pullStore = usePullsStore()
const calendarStore = useCalendarStore()
</script>