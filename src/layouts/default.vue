<template>
  <div class="bg"></div>
  <div class="relative">
    <LanguagePicker />
    <SoundPlayer />
    <slot />
  </div>
</template>

<script setup lang="ts">
import * as c from '~/assets/common'
import * as appState from '~/assets/state'

onMounted(async () => {
  updateWindowSizeVars()
  window.addEventListener('resize', updateWindowSizeVars)
})

function updateWindowSizeVars() {
  appState.winSize.value.width = window.innerWidth
  appState.winSize.value.height = window.innerHeight
}
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 100%;
  background: url('/images/bg2.svg');
  background-size: 500px;
  opacity: 0.2;
  pointer-events: none;
  position: absolute;
  z-index: 0;
}
</style>
