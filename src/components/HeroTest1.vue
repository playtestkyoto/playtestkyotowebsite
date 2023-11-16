<template>
  <div
    class="heroContainer"
    ref="container"
    @click="recalcD"
    :style="{ '--highlight': currentHighlight }"
    :key="id"
  >
    <svg
      :style="{
        '--illustrationWidth': `${width}px`,
        '--illustrationHeight': `${height}px`,
      }"
      class="absolute"
      :width="width"
      :height="height"
      :viewBox="`0 0 ${width} ${height}`"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask :id="'negativeMask' + id">
        <!-- Everything under a white pixel will be visible -->
        <rect
          :width="width"
          :height="height"
          fill="white"
        />
        <path :d="d" fill="black" />
      </mask>
      <mask :id="'positiveMask' + id">
        <path :d="d" fill="white" />
      </mask>

      <!-- <g :mask="`url(#negativeMask${id})`">
      <rect
        :width="width"
        :height="height"
        fill="var(--pageBg)"
      />
    </g>

    <g :mask="`url(#positiveMask${id})`">
      <rect
        :width="width"
        :height="height"
        fill="rgba(255,255,255,.1)"
      />
    </g> -->

      <defs>
        <path :id="'textPath' + id" :d="d" />
      </defs>

      <image
        class="fadeImage"
        :x="0"
        :y="0"
        :width="width"
        :height="height"
        :style="imageStyleOverride"
        :xlink:href="currentImagePath"
      />

      <path
        :d="d"
        class="dashedLine"
        :stroke-width="10 * (height / 500)"
        :stroke-dasharray="`${30 * (height / 500)} ${
          30 * (height / 500)
        }`"
        :stroke-dashoffset="dashOffset"
      />

      <g :mask="`url(#positiveMask${id})`">
        <image
          class="bgImage"
          :x="0"
          :y="0"
          :width="width"
          :height="height"
          :style="imageStyleOverride"
          :xlink:href="currentImagePath"
        />
        <rect
          :width="width"
          :height="height"
          class="imageOverlay"
        />
        <!-- <text
          class="inProgress"
          :x="width / 2"
          :y="height / 2"
        >
          工事中
        </text> -->
      </g>

      <path
        :d="d"
        class="thickLine"
        :stroke-width="50 * (height / 500)"
        :stroke-dasharray="`${
          (text?.length || 0) *
          ((width + height) / 2) *
          0.056 *
          thickLineLengthMultiplier
        } 9999999`"
        :stroke-dashoffset="-startOffset + width * 0.015"
      />

      <text
        dominant-baseline="middle"
        :style="{
          fill: textColor,
          stroke: textColor,
        }"
      >
        <textPath
          :xlink:href="`#textPath${id}`"
          :startOffset="startOffset"
        >
          <template v-if="iterationCount % 40 === 39">
            {{ text?.split('').reverse().join('') }}
          </template>
          <template v-else>{{ text }}</template>
        </textPath>
      </text>
    </svg>
  </div>
</template>

<script setup lang="ts">
import * as c from '~/assets/common'
import * as appState from '~/assets/state'

const {
  text,
  images,
  highlight,
  changeEvery,
  thickLineLengthMultiplier,
  textColor,
} = defineProps({
  text: String,
  images: {
    type: Object as PropType<string[]>,
    default: [],
  },
  highlight: {
    type: Object as PropType<string[]>,
    default: [],
  },
  changeEvery: {
    type: Number,
    default: 0,
  },
  thickLineLengthMultiplier: {
    type: Number,
    default: 1,
  },
  textColor: {
    type: String,
    default: 'var(--text)',
  },
})

const id = c.id()

const d: Ref<string> = ref('')
const offsetD: Ref<string> = ref('')
const dashOffset: Ref<number> = ref(0)

const container = ref<HTMLElement | null>(null)
const height = ref(500)
const width = ref(500)
const startOffset = ref(0)
const iterationCount = ref(0)
const currentImagePath = ref(images[0])
const imageStyleOverride = ref('')
const currentHighlight = ref('')

onMounted(() => {
  recalcD()
})

setInterval(() => {
  dashOffset.value -= 0.8
}, 10)

if (changeEvery > 0) setInterval(recalcD, changeEvery)

function recalcD() {
  height.value = container.value?.clientHeight ?? 500
  width.value = container.value?.clientWidth ?? 500
  iterationCount.value++

  const topBuffer =
    Math.min(width.value, height.value) * 0.4
  const buffer = Math.min(width.value, height.value) * 0.2
  const minX = buffer,
    minY = topBuffer,
    maxX = width.value - buffer,
    maxY = height.value - buffer,
    centerOffset = Math.min(width.value, height.value) * 0.3

  const points: [number, number][] = []
  // top left
  points.push([
    c.randomIntBetweenInclusive(
      minX,
      maxX / 2 - centerOffset,
    ),
    c.randomIntBetweenInclusive(
      minY,
      maxY / 2 - centerOffset,
    ),
  ])
  // top right
  points.push([
    c.randomIntBetweenInclusive(
      maxX / 2 + centerOffset,
      maxX,
    ),
    c.randomIntBetweenInclusive(
      minY,
      maxY / 2 - centerOffset,
    ),
  ])
  // bottom right
  points.push([
    c.randomIntBetweenInclusive(
      maxX / 2 + centerOffset,
      maxX,
    ),
    c.randomIntBetweenInclusive(
      maxY / 2 + centerOffset,
      maxY,
    ),
  ])
  // bottom left
  points.push([
    c.randomIntBetweenInclusive(
      minX,
      maxX / 2 - centerOffset,
    ),
    c.randomIntBetweenInclusive(
      maxY / 2 + centerOffset,
      maxY,
    ),
  ])
  const rotateAngle = c.randomIntBetweenInclusive(-25, 25)
  points.forEach(([x, y], i) => {
    const [x2, y2] = c.rotatePoint(
      [x, y],
      [width.value / 2, height.value / 2],
      rotateAngle,
    )
    points[i] = [x2, y2]
  })

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

  const prevImage = currentImagePath.value
  currentImagePath.value = c.randomFromArray(images)
  if (images.length > 1) {
    while (currentImagePath.value === prevImage) {
      currentImagePath.value = c.randomFromArray(images)
    }
  }
  imageStyleOverride.value = `transform: rotate(${c.randomBetween(
    -10,
    10,
  )}deg) scale(${c.randomBetween(1, 1.1)})`

  const prevHighlight = currentHighlight.value
  currentHighlight.value = c.randomFromArray(highlight)
  if (highlight.length > 1) {
    while (currentHighlight.value === prevImage) {
      currentHighlight.value = c.randomFromArray(highlight)
    }
  }
}

onMounted(() => {
  window.addEventListener('keydown', keyListener)

  // preload all images
  images.forEach((src) => {
    const img = new Image()
    img.src = src
  })
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
  user-select: none;
}
text {
  font-size: calc(
    (var(--illustrationWidth) + var(--illustrationHeight)) /
      2 * 0.1
  );
  font-family: var(--fontStack);
  stroke: var(--text);
  stroke-width: calc(var(--illustrationHeight) * 0.004);

  // transform: translateY(
  //   calc(var(--illustrationWidth) * -0.05)
  // );
}

.dashedLine,
.thickLine {
  stroke: var(--highlight, var(--text));
}

.bgImage,
.fadeImage {
  transform-origin: center;
}
.fadeImage {
  display: none;
  filter: saturate(0) blur(2px);
  opacity: 0.4;
}

.imageOverlay {
  fill: var(--highlight, white);
  mix-blend-mode: soft-light;
  opacity: 0.5;
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
