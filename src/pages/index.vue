<template>
  <div class="main flexcolumn fullheight">
    <HeroTest1
      class="hero1"
      text="PLAYTEST KYOTO 2024"
      :images="[
        '/images/hero/1.jpg',
        '/images/hero/2.jpg',
        '/images/hero/3.jpg',
        '/images/hero/4.jpg',
      ]"
      :highlight="[
        'lightgreen',
        'yellow',
        'magenta',
        'cyan',
        // 'lightgray',
      ]"
      :changeEvery="2000"
    />

    <Marquee class="padbot">
      <h3 class="nowrap marnone">
        <span v-if="locale === 'ja'">
          都市空間における”遊び”のフェスティバル
        </span>
        <span v-else></span> 👉&nbsp;
      </h3>
    </Marquee>
    <div class="contentcolumn martopbig padtopbig">
      <HomeAbout />
    </div>

    <div class="bg1 martopbig">
      <div
        class="padleftbig padrightbig padtopbig padbotbig martop marbot"
      >
        <HomeInfoGrid />
      </div>
    </div>

    <div class="bg2">
      <div class="flexcenter padtopbig padbotbig">
        <Vogue>
          <Marquee>
            <h1
              class="nowrap marnone padrightsmall padleftsmall textcenter"
            >
              <u> 2024年3月15日だよ！</u>
            </h1></Marquee
          >
        </Vogue>
      </div>
    </div>
    <div class="bg3">
      <div class="contentcolumn padtopbig padbotbig">
        <HomeMembers />
      </div>
    </div>
    <div class="textcolumn martopbig">
      <HomeOpenCall />
    </div>
    <div class="bg1 martopbig">
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

.hero1 {
  position: relative;
  z-index: 0;
  width: 100%;
  height: calc(min(70vh, 900px, 90vw));
  margin-bottom: calc(-1 * (min(200px, 20vw)));
}

.contentcolumn {
  width: 100%;
  max-width: 1000px;
  padding-left: 2em;
  padding-right: 2em;
  margin: 0 auto;
}
.textcolumn {
  width: 100%;
  max-width: 700px;
  padding-left: 2em;
  padding-right: 2em;
  margin: 0 auto;
}

.bg1 {
  background: var(--text);
  color: var(--bg);
}
.bg2 {
  color: var(--text);
  animation: rainbow 5s infinite alternate;
}

.bg3 {
  position: relative;
  background: var(--color3);
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

@keyframes rainbow {
  0% {
    background: var(--color1);
  }
  30% {
    background: var(--color2);
  }
  70% {
    background: var(--color3);
  }
  100% {
    background: var(--color4);
  }
}
</style>
