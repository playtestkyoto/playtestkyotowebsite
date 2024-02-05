<template>
  <div class="main flexcolumn fullheight">
    <HomeIntro />

    <div class="marbotbig">
      <HomeAbout />
    </div>

    <div class="relative bg5 wavyMask2">
      <div class="z2">
        <HomeInfoGrid />
      </div>
    </div>

    <!-- <div
      class="bg2 nooverflow wavyMask"
      style="animation: rainbow 20s infinite alternate"
    >
      <div class="flexcenter padtop padbot">
        <Vogue :speed="0.7">
          <Marquee :speed="0.7">
            <h1
              class="nowrap marnone padrightsmall padleftsmall textcenter bold"
            >
              <span>
                <span v-if="locale === 'ja'"
                  >3月29日開催！</span
                >
                <span v-else
                  >Starting from March 29th!</span
                >
                <a
                  href="#"
                  class="button small marnone secondary"
                  target="_blank"
                >
                  <span v-if="locale === 'ja'"
                    >切符をゲット</span
                  >
                  <span v-else>Buy Tickets</span>
                </a>
                &nbsp;
              </span>
            </h1></Marquee
          >
        </Vogue>
      </div>
    </div> -->

    <!-- <div class="relative martop padtopbig padbotbig">
      <BoxInText
        class="bold caps"
        :offset="appState.mobile.value ? '.2em' : '2em'"
      >
        <span style="color: var(--color1x)"
          >Playtest Kyoto 2024 ・ OPEN CALL受付中 ・</span
        >
        <span style="color: var(--color2x)"
          >Playtest Kyoto 2024 ・ OPEN CALL受付中 ・</span
        >
        <span style="color: var(--color3x)"
          >Playtest Kyoto 2024 ・ OPEN CALL受付中 ・</span
        >
        <span style="color: var(--color4x)"
          >Playtest Kyoto 2024 ・ OPEN CALL受付中 ・</span
        >
      </BoxInText>

      <div
        class="textcolumn marbotbig"
        :class="{
          martopbig: !appState.mobile.value,
        }"
      >
        <HomeOpenCall
          :class="{
            padleftsmall: appState.mobile.value,
            padrightsmall: appState.mobile.value,
          }"
        />
      </div>
    </div> -->

    <div class="padtopbig bgd">
      <div
        class="contentcolumn padtopbig padbotbig marbotbig"
      >
        <HomeGames class="" />
      </div>
    </div>

    <!-- <div class="homeBg3">
      <div
        class="contentcolumn padtopbig padbotbig marbotbig"
      >
        <HomeSponsors class="padbotbig" />
      </div>
    </div> -->

    <div class="z1 wavyMask bg">
      <div
        class="contentcolumn padtopbig padbotbig marbotbig"
      >
        <HomeCalendar class="z3" />
      </div>
    </div>

    <div class="bg3 z1 wavyMask2">
      <div class="contentcolumn padtop">
        <HomeTeam />
      </div>
    </div>

    <div class="homeBg1 z3">
      <div class="contentcolumn padtopbig padbotbig">
        <HomeFooter />
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
.main {
  // padding-top: 100px;
  min-height: 100vh;
  margin: 0 auto;
}

// .hero1 {
//   position: relative;
//   z-index: 0;
//   width: 100%;
//   height: calc(min(90vh, 1000px, 70vw));
//   margin-bottom: calc(-1 * (min(200px, 20vw)));

//   @media (max-width: 768px) {
//     margin-top: 5em;
//     transform: scale(1.4);
//     margin-bottom: calc(-1 * (min(100px, 10vw)));
//   }
// }

.homeBg1 {
  background: var(--text);
  color: var(--bg);
}
.homeBg2 {
  color: var(--text);
  animation: rainbow 5s infinite alternate;
}

.homeBg3 {
  position: relative;
  background: var(--bg);
  color: var(--text);

  // &:after {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   // diagonal black lines
  //   background: linear-gradient(
  //     10deg,
  //     rgba(0, 0, 0, 1) 25%,
  //     transparent 25%,
  //     transparent 50%,
  //     rgba(0, 0, 0, 1) 50%,
  //     rgba(0, 0, 0, 1) 75%,
  //     transparent 75%,
  //     transparent
  //   );
  //   background-size: 200px 200px;
  //   opacity: 0.05;
  //   z-index: 0;
  //   pointer-events: none;
  // }
}
</style>
