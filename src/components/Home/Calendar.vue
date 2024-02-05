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

const calendarText = `3/29 (Fri) | Jam [10:00-15:00], X [12:00-19:00]
3/30 (Sat) | Jam [8:00-15:00], X [17:00-19:00]
3/31 (Sun) | Jam [10:00-15:00], X [14:00-19:00]`
</script>

<style lang="scss" scoped></style>
