<template>
  <div class="top">
    <div
      class="heroBg"
      :class="{
        animating: imageAnimating,
      }"
    >
      <div class="imageholder">
        <div
          class="image"
          :style="{
            backgroundImage: `url('/images/hero/${imageIndex}.jpg')`,
          }"
        ></div>
      </div>
      <!-- <div class="colorOverlay2"></div> -->
    </div>

    <div class="colorOverlay"></div>

    <div class="heroContents">
      <div
        class="vogueLazy abs z3 fullwidth fullheight nopointer"
      >
        <img
          src="/images/hero/particlesBehind.svg"
          class="abs absCenterY"
          style="width: 110%; right: -5%"
        />
      </div>
      <div
        class="vogueLazy3 abs z3 fullwidth fullheight nopointer"
      >
        <img
          src="/images/hero/particlesBehind2.svg"
          class="abs absCenterY"
          style="width: 90%; left: 5%"
        />
      </div>

      <div
        class="vogueLazy2 abs z6 fullwidth fullheight nopointer"
      >
        <img
          src="/images/hero/particlesFront.svg"
          style="width: 60%; right: 15%; top: 45%"
          class="abs absCenterY"
        />
      </div>

      <img
        src="/images/hero/linesLR.svg"
        style="width: calc(100% - 2em); left: 1em"
        class="abs absCenterY z3 mult"
      />

      <img
        src="/images/hero/linesTB.svg"
        style="height: calc(100% - 2em); top: 1em"
        class="abs absCenterX z3 mult"
      />

      <div
        class="fullwidth fullheight mult z3 flexcenter flexcolumn"
      >
        <img
          src="/images/hero/leftIcons.svg"
          style="
            width: 2em;
            right: 2em;
            top: calc(50% - 15.5vw);
          "
          class="abs absCenterY z3 nomobile"
        />

        <div class="spinSlow abs fullwidth fullheight">
          <img
            src="/images/hero/ring.svg"
            class="abs absCenter"
            style="width: 80%"
          />
        </div>

        <img
          src="/images/hero/ringArrows.svg"
          class="abs absCenter"
          style="width: 66.5%"
        />
        <img
          src="/images/hero/ringDashes.svg"
          class="abs absCenter"
          style="width: 61.5%"
        />

        <img
          class="dates z6 abs absCenter nomobile"
          src="/images/hero/dateTimeOutlined.svg"
          style="width: calc(min(80vw, 20em)); top: 10%"
        />

        <img
          src="/images/logos/playtestOutlined.svg"
          class="heroLogo z5 abs absCenter"
        />
        <div
          class="z6 marqueeBox flexcolumn flexcenter abs absCenter"
        >
          <div class="fullwidth nooverflow">
            <Marquee class="">
              <h3 class="nowrap marnone">
                <span v-if="locale === 'ja'">
                  都市空間における”遊び”のフェスティバル
                </span>
                <span v-else
                  >A Playground for Experimental Urban
                  Games</span
                >
                &nbsp;&nbsp; ・ &nbsp;&nbsp;
              </h3>
            </Marquee>
          </div>
        </div>
      </div>

      <div
        class="z6 abs absCenter socialButtons flex gapsmall"
      >
        <a
          href="https://www.instagram.com/playtestkyoto/"
          class="button black"
          target="_blank"
        >
          <img
            src="/images/social/instagram.svg"
            class="socialIcon"
          />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61553576586398"
          class="button black"
          target="_blank"
        >
          <img
            src="/images/social/facebook.svg"
            class="socialIcon"
          />
        </a>
      </div>

      <div class="z6 abs absCenter ticketButton">
        <a
          href="https://peatix.com/group/15427896/events"
          class="button big white insetLine"
          target="_blank"
          style="--insetOffset: 0.3em"
        >
          <span v-if="locale === 'ja'">チケット購入</span>
          <span v-else>Get Tickets</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as c from '~/assets/common'
import * as appState from '~/assets/state'
const i18n = useI18n()
const locale = computed(() => i18n.locale.value)

const imageIndex = ref(1)
const imageAnimating = ref(false)

onMounted(() => {
  // preload images
  for (let i = 1; i <= 4; i++) {
    const img = new Image()
    img.src = `/images/hero/${i}.jpg`
  }

  setInterval(async () => {
    imageAnimating.value = true

    await c.sleep(300)
    imageIndex.value = (imageIndex.value % 4) + 1

    await c.sleep(300)
    imageAnimating.value = false
  }, 7000)
})
</script>

<style lang="scss" scoped>
.top {
  position: relative;
  z-index: 5;
  color: var(--bg);
  width: 100%;
  overflow: hidden;
  background-color: var(--c1);

  --height: 90vh;

  height: var(--height);

  @media (max-width: 768px) {
    --height: 400px;
  }
}

.fullheight {
  height: var(--height);
}

.heroBg {
  width: 100%;
  height: 100%;

  position: absolute !important;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 1;
  // background-blend-mode: multiply;

  .imageholder {
    width: 80%;
    height: 80%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-size: cover;
    background-position: center;
    perspective: 100em;
    border-radius: 50%;
    overflow: hidden;

    // @media (max-width: 768px) {
    //   width: 110%;
    //   height: 110%;
    // }

    .image {
      background-size: cover;
      background-position: center;
      width: 100%;
      height: 100%;

      animation: zoomOut 7s;
    }
  }

  &.animating {
    animation: blurMid 0.6s;

    .imageholder {
      animation: lensShutter 0.6s;

      .image {
        animation: zoomIn 0.6s;
      }
    }
  }
}
@keyframes lensShutter {
  0% {
    transform: translate(-50%, -50%);
  }
  45%,
  55% {
    transform: translate(-50%, -50%) scale(0.7, 0);
  }
  100% {
    transform: translate(-50%, -50%);
  }
}
@keyframes blurMid {
  0% {
    filter: blur(0);
  }
  45%,
  55% {
    filter: blur(10px);
  }
  100% {
    filter: blur(0);
  }
}
@keyframes zoomOut {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes zoomIn {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

.colorOverlay {
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--c1);

  mask: radial-gradient(
    calc(min(30vw, 35vh)) at 50% 50%,
    #0002 30%,
    #0002 50%,
    #000
  );

  @media (max-width: 768px) {
    mask: radial-gradient(
      calc(min(40vw, var(--height) * 0.5)) at 50% 50%,
      #0002 30%,
      #0002 50%,
      #000
    );
  }
}

.heroContents {
  height: var(--height);
  width: 100%;
  position: absolute;

  @media (max-width: 768px) {
    width: 120%;
    left: -10%;
  }
}

.heroLogo {
  width: 100%;
  max-width: calc(min(95vw, var(--height), 1600px));

  @media (max-width: 768px) {
    top: 45% !important;
  }
}

.abs {
  position: absolute !important;
  z-index: 1;
  // max-width: 100%;
  // max-height: 100%;

  &.absCenterX {
    left: 50%;
    transform: translateX(-50%);
  }
  &.absCenterY {
    top: 50%;
    transform: translateY(-50%);
  }
  &.absCenter {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.mult {
  mix-blend-mode: multiply;
}

.marqueeBox {
  position: relative;
  width: 600px;
  max-width: 90vw;
  top: 73% !important;
  // border-right: 2px solid var(--text);
  // border-left: 2px solid var(--text);
  color: var(--text);
  // text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);

  padding: 0.5em 3px;
  &:before,
  &:after {
    position: absolute;
    z-index: 2;
    right: 1px;
    background-image: url('/images/home/portalBlack.png');
    width: 35px;
    height: 68px;
    content: '';
    background-size: contain;
    background-repeat: no-repeat;
  }
  &::after {
    right: auto;
    left: 1px;
    transform: rotate(180deg);
  }

  @media (max-width: 768px) {
    top: 63% !important;
    max-width: 80vw;

    h3 {
      font-size: 1.3rem;
    }

    &:before,
    &:after {
      width: calc(35px * 0.75);
      height: calc(68px * 0.75);
    }
  }
}

.socialButtons {
  top: 80% !important;

  .button {
    padding: 1em;
  }

  @media (max-width: 768px) or (max-height: 1200px) {
    top: 0.6em !important;
    left: calc(10% + 1em) !important;
    transform: none !important;

    .button {
      padding: 0.7em;
    }
  }
}
.ticketButton {
  white-space: nowrap;
  border-radius: 2em;
  top: 89% !important;

  &:after {
    border-radius: 2em;
  }

  @media (max-width: 768px) {
    top: 85% !important;
  }
}
</style>
