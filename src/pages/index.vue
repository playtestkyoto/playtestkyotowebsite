<template>
  <div class="main flexcolumn fullheight gap">
    <h1>Playtest Kyoto</h1>

    <h2>
      <span v-if="locale === 'ja'">
        都市空間における”遊び”のフェスティバル
      </span>
      <span v-else></span>
    </h2>

    <HomeInfoGrid />
    <HomeAbout />
    <HomeMembers />
    <HomeOpenCall />
  </div>
  <HomeFooter />
</template>

<script setup lang="ts">
import * as c from '~/assets/common'
import * as appState from '~/assets/state'
const i18n = useI18n()
const locale = computed(() => i18n.locale.value)
</script>

<style lang="scss" scoped>
.main {
  padding-top: 100px;
  min-height: 100vh;
  max-width: 700px;
  margin: 0 auto;
}
</style>
