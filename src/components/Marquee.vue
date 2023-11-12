<template>
  <div class="marquee" :class="{ on }">
    <div
      class="marquee__inner"
      :style="{ 'animation-duration': `${15 / speed}s` }"
    >
      <slot></slot>
      <slot></slot>
      <slot></slot>
      <slot></slot>
      <slot></slot>
      <slot></slot>
      <slot></slot>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as c from '~/assets/common'
import * as appState from '~/assets/state'

const i18n = useI18n()

const { on, speed } = defineProps({
  on: Boolean,
  speed: {
    type: Number,
    default: 1,
  },
})
</script>

<style lang="scss" scoped>
.marquee {
  position: relative;
  overflow: hidden;
  --offset: 20%;
  --move-initial: calc(-25% + var(--offset));
  --move-final: calc(-50% + var(--offset));
}

.marquee__inner {
  width: fit-content;
  display: flex;
  position: relative;
  transform: translate3d(var(--move-initial), 0, 0);
  animation: marquee 5s linear infinite;
  // animation-play-state: paused;

  & > * {
    padding: 0 2vw;
    white-space: nowrap;
  }
}

// .marquee:hover .marquee__inner {
//   animation-play-state: paused;
// }

@keyframes marquee {
  0% {
    transform: translate3d(var(--move-initial), 0, 0);
  }

  100% {
    transform: translate3d(var(--move-final), 0, 0);
  }
}
</style>
