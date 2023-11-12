<template>
  <div class="heroContainer" ref="container">
    <svg
      :style="{
        '--illustrationWidth': `${width}px`,
      }"
      class="absolute"
      :width="width"
      :height="height"
      :viewBox="`0 0 ${width} ${height}`"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="negativeMask">
        <!-- Everything under a white pixel will be visible -->
        <rect
          :width="width"
          :height="height"
          fill="white"
        />
        <path :d="d" fill="black" />
      </mask>
      <mask id="positiveMask">
        <path :d="d" fill="white" />
      </mask>

      <!-- <g mask="url(#negativeMask)">
      <rect
        :width="width"
        :height="height"
        fill="var(--pageBg)"
      />
    </g>

    <g mask="url(#positiveMask)">
      <rect
        :width="width"
        :height="height"
        fill="rgba(255,255,255,.1)"
      />
    </g> -->

      <defs>
        <path id="textPath" :d="offsetD" />
      </defs>

      <path
        :d="d"
        stroke="var(--text)"
        :stroke-width="2 * (height / 500)"
        stroke-dasharray="10 20"
        :stroke-dashoffset="dashOffset"
      />

      <text dominant-baseline="top">
        <textPath
          xlink:href="#textPath"
          :startOffset="startOffset"
        >
          <template v-if="iterationCount % 40 === 39">
            4202 otoyk tsetyalp
          </template>
          <template v-else>playtest kyoto 2024</template>
        </textPath>
      </text>

      <g mask="url(#positiveMask)">
        <text
          class="inProgress"
          :x="width / 2"
          :y="height / 2"
        >
          工事中
        </text>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import * as c from '~/assets/common'
import * as appState from '~/assets/state'

const d: Ref<string> = ref('')
const offsetD: Ref<string> = ref('')
const dashOffset: Ref<number> = ref(0)

const container = ref<HTMLElement | null>(null)
const height = ref(500)
const width = ref(500)
const startOffset = ref(0)
const iterationCount = ref(0)

onMounted(() => {
  height.value = container.value?.clientHeight ?? 500
  width.value = container.value?.clientWidth ?? 500
  recalcD()
})

setInterval(() => {
  dashOffset.value -= 0.5
}, 10)
setInterval(recalcD, 2000)

function recalcD() {
  iterationCount.value++

  const topBuffer = 30
  const buffer = 10
  const minX = buffer,
    minY = topBuffer,
    maxX = width.value - buffer,
    maxY = height.value - buffer

  const points: [number, number][] = []
  points.push([
    c.randomIntBetweenInclusive(minX, maxX / 2),
    c.randomIntBetweenInclusive(minY, maxY / 2),
  ])
  points.push([
    c.randomIntBetweenInclusive(maxX / 2, maxX),
    c.randomIntBetweenInclusive(minY, maxY / 2),
  ])
  points.push([
    c.randomIntBetweenInclusive(maxX / 2, maxX),
    c.randomIntBetweenInclusive(maxY / 2, maxY),
  ])
  points.push([
    c.randomIntBetweenInclusive(minX, maxX / 2),
    c.randomIntBetweenInclusive(maxY / 2, maxY),
  ])

  d.value =
    `M ${points[0][0]} ${points[0][1]} ` +
    points
      .slice(1)
      .map(([x, y]) => `L ${x} ${y}`)
      .join(' ') +
    ' Z'

  // offsetD is d but expanded outwards from the center by 10px
  const offset = 10 // Offset distance in pixels

  const centerX = (maxX - minX) / 2 + minX
  const centerY = (maxY - minY) / 2 + minY

  const offsetPoints = points.map(([x, y]) => [
    x + (x < centerX ? -offset : offset),
    y + (y < centerY ? -offset : offset),
  ])

  offsetD.value =
    `M ${offsetPoints[0][0]} ${offsetPoints[0][1]} ` +
    offsetPoints
      .slice(1)
      .map(([x, y]) => `L ${x} ${y}`)
      .join(' ') +
    ' Z'

  startOffset.value = c.randomIntBetweenInclusive(
    0,
    width.value * 0.1,
  )
}

onMounted(() => {
  window.addEventListener('keydown', keyListener)
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', keyListener)
})
function keyListener(e: KeyboardEvent) {
  recalcD()
}
</script>

<style lang="scss" scoped>
.heroContainer {
  width: 700px;
  height: 300px;
}
text {
  fill: var(--text);
  font-size: calc(var(--illustrationWidth) * 0.05);
  font-family: var(--fontStack);

  // transform: translateY(
  //   calc(var(--illustrationWidth) * -0.05)
  // );
}

.inProgress {
  font-size: 150px;
  font-weight: 900;
  // center
  transform: rotate(-10deg) translateX(-10%) translateY(35%);
  text-anchor: middle;
  fill: #e2ff24;
}
</style>
