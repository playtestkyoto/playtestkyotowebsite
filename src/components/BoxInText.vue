<template>
  <div class="boxInText" ref="el">
    <div
      class="top"
      :style="{
        top: offset,
        left: '50%',
        width: `calc(100% - ${offset} * 2)`,
      }"
    >
      <slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot />
    </div>

    <div
      class="right"
      :style="{
        top: `calc(50% - ${offset} * .4)`,
        right: `calc(${offset}  + .4em)`,
        width: `calc(${height}px - ${offset} * 2 - 3em)`,
      }"
    >
      <slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot />
    </div>

    <div
      class="bottom"
      :style="{
        bottom: offset,
        left: '50%',
        width: `calc(100% - ${offset} * 2)`,
      }"
    >
      <slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot />
    </div>

    <div
      class="left"
      :style="{
        top: `calc(50% - ${offset} * .4)`,
        left: `calc(${offset}  + .4em)`,
        width: `calc(${height}px - ${offset} * 2 - 3em)`,
      }"
    >
      <slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot /><slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import * as c from '~/assets/common'

const { offset } = defineProps({
  offset: {
    type: String,
    default: '2em',
  },
})

const el = ref<HTMLElement | null>(null)
const height = ref(500)
let observer: ResizeObserver | null = null
onMounted(() => {
  height.value = el.value?.offsetHeight || 500
  observer = new ResizeObserver(heightListener)
  observer.observe(el.value!)
})
onUnmounted(() => {
  observer?.disconnect()
})
function heightListener() {
  height.value = el.value?.offsetHeight || 500
}
</script>

<style lang="scss" scoped>
.boxInText {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;

  & > * {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    transform-origin: center;
    position: absolute;
    transform: translateX(-50%);
  }

  .right {
    transform: translateX(50%) rotate(90deg);
  }
  .bottom {
    transform: translateX(-50%) rotate(180deg);
  }
  .left {
    transform: translateX(-50%) rotate(270deg);
  }
}
</style>
