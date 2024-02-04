<template>
  <div>
    <div
      class="vogue"
      :style="{
        '--vogue-speed': speed,
      }"
    >
      <div class="vogue2">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as c from '~/assets/common'

const { speed } = defineProps({
  speed: {
    type: Number,
    default: 1,
  },
})
</script>

<style lang="scss" scoped>
.vogue {
  position: relative;
  transform-origin: center;
  animation: vogue calc(1s / var(--vogue-speed)) ease-in-out
    infinite alternate;
}
.vogue2 {
  position: relative;
  transform-origin: center;
  animation: vogue2 calc(1.3s / var(--vogue-speed))
    ease-in-out infinite alternate;
}

@keyframes vogue {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.1);
  }
}

@keyframes vogue2 {
  0% {
    transform: rotate(-5deg);
  }

  100% {
    transform: rotate(5deg);
  }
}
</style>
