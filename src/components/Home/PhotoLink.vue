<template>
  <div class="photos z6">
    <div class="ticketButton marbotbig">
      <a
        href="https://photos.app.goo.gl/FmP4d6mE9hzzSKeb8"
        class="button big white insetLine"
        target="_blank"
        style="--insetOffset: 0.3em"
      >
        <span v-if="locale === 'ja'"
          >📸 Playtest 2024の写真はこちら</span
        >
        <span v-else>📸 Photos of Playtest 2024</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as c from '~/assets/common'
import * as appState from '~/assets/state'
const i18n = useI18n()
const locale = computed(() => i18n.locale.value)
</script>

<style lang="scss" scoped>
.photos {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  margin: -3em 0;
  // background-color: var(--c4);
}
.ticketButton {
  white-space: nowrap;
  border-radius: 2em;

  &:after {
    border-radius: 2em;
  }

  @media (max-width: 768px) {
    top: 85%;
  }
}
</style>
