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
  z-index: 100;
  top: 2em;
  right: 2em;

  @media (max-width: 768px) {
    top: 1em;
    right: 1em;
  }
}
a {
  border: 2px solid var(--text);
  padding: 0.5rem 0.6rem 0.4rem 0.6rem;
  line-height: 1;
  background: var(--text);
  color: var(--bg) !important;
  text-decoration: none;

  &.current {
    background: var(--bg);
    color: var(--text) !important;
  }

  &:not(.current):hover {
    background: var(--bg);
    color: var(--text) !important;
  }
}
</style>
