<template>
  <div>
    <h3>
      <span v-if="locale === 'ja'">Open Call</span>
      <span v-else>Open Call</span>
    </h3>
    <h4>
      <span v-if="locale === 'ja'"
        >開催にあたり、ゲームの制作と発表を行うゲームデザイナー、クリエイター、アーティストを募集します。</span
      >
      <span v-else></span>
    </h4>
  </div>
</template>

<script setup lang="ts">
import * as c from '~/assets/common'
import * as appState from '~/assets/state'
const i18n = useI18n()
const locale = computed(() => i18n.locale.value)
</script>

<style lang="scss" scoped></style>
