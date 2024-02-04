<template>
  <div class="top padbotbig insetLine">
    <div class="heroBg">
      <div class="colorOverlay"></div>
      <!-- <div class="colorOverlay2"></div> -->
    </div>

    <div
      class="contentcolumn padtop flexcolumn flexcenter relative z3 padbot"
      :class="{
        martopbig: !appState.mobile.value,
        padtopbig: !appState.mobile.value,
      }"
    >
      <div class="heroLogo flexcenter">
        <img src="/images/logos/playtest-2024.svg" />
      </div>

      <div class="marqueeBox flexcolumn flexcenter marbot">
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

      <img class="dates" src="/images/home/dates.png" />

      <div class="martopbig">
        <a
          href="#"
          class="button big white"
          target="_blank"
        >
          <span v-if="locale === 'ja'">切符をゲット</span>
          <span v-else>Buy Tickets</span>
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
</script>

<style lang="scss" scoped>
.top {
  position: relative;
  z-index: 5;
  color: var(--bg);
}

.heroBg {
  width: 100%;
  height: 100%;
  min-height: 60vh;
  background-image: url('/images/hero/1.jpg');
  background-size: cover;
  background-position: center;
  position: absolute !important;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 1;
  // background-blend-mode: multiply;
  background-color: #0005;
}

.colorOverlay,
.colorOverlay2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: multiply;
  background-color: var(--c1);

  // animation: rainbow 20s infinite alternate;

  --mask: radial-gradient(40vw at 50% 50%, #0000 50%, #000);
  -webkit-mask: var(--mask);
  mask: var(--mask);
}

.colorOverlay {
  mix-blend-mode: normal;
}
// .colorOverlay2 {
//   mix-blend-mode: screen;
//   animation: none;
//   background-color: white;
// }

.heroLogo {
  // padding: 15vh 0 7vh 0;
  margin: 0 auto;

  img {
    width: 100%;
    height: 30em;
    max-height: 30vh;
    max-width: 800px;
    // filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
  }
}

.marqueeBox {
  position: relative;
  padding: 0.5em 3px;
  width: 600px;
  max-width: 90vw;
  // border-right: 2px solid white;
  // border-left: 2px solid white;

  &:before,
  &:after {
    position: absolute;
    right: 1px;
    background-image: url('/images/home/portal.png');
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
}

.dates {
  width: 400px;
  // filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
}
</style>
