<template>
  <div class="calendar">
    <h2 class="marbotsmall bold textcenter">
      <span v-if="locale === 'ja'"> カレンダー </span>
      <span v-else>Calendar</span>
    </h2>

    <CalendarFromText :text="calendarText" />
  </div>
</template>

<script setup lang="ts">
import * as c from '~/assets/common'
import * as appState from '~/assets/state'
const i18n = useI18n()
const locale = computed(() => i18n.locale.value)

const calendarText = `3/29 (Fri) | Physical Game Jam [13:00-18:00], Warp and Weft [12:00-13:00], Touch [12:00-18:00], Urban Lens [12:00-18:00]
3/30 (Sat) | PLAY SESSION (Group 1) [13:00-15:00], PLAY SESSION (Group 2) [16:00-18:00], Warp and Weft [12:00-13:00], Touch [12:00-18:00], Urban Lens [12:00-18:00]
3/31 (Sun) | Unmapping (Group 1) [13:00-15:00], Unmapping (Group 2) [16:00-18:00], Warp and Weft [12:00-13:00], Touch [12:00-18:00], DIY Hanafuda Workshop [13:00-16:00], Urban Lens [12:00-18:00]`
</script>
