<template>
  <span class="languagePicker">
    <span
      v-for="locale in (i18n.locales.value as string[])"
      :key="locale"
    >
      <nuxt-link
        :to="switchLocalePath(locale)"
        class="smallcaps"
        :class="{
          current: i18n.locale.value === locale,
        }"
        >{{ locale }}</nuxt-link
      >
    </span>
  </span>
</template>

<script setup lang="ts">
import * as c from '~/assets/common'
import * as appState from '~/assets/state'

const i18n = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<style lang="scss" scoped>
.languagePicker {
  position: absolute;
  top: 2em;
  right: 2em;
  --bg: #000;
}
a {
  border: 2px solid var(--bg);
  padding: 0.5rem;
  background: var(--text);
  color: var(--bg) !important;

  &.current {
    background: var(--bg);
    color: var(--text) !important;
  }
}
</style>
