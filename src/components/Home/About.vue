<template>
  <div class="about marbotbig">
    <!-- <div
      class="flexcenter flexstretch textcenter marbotbig"
    >
      <div class="horizpane bgt3">
        <div>
          <div class="illust">🧑‍🔬🧪</div>
          <div>A 3-day experimental event</div>
        </div>
      </div>
      <div class="horizpane bgt2">
        <div>
          <div class="illust">👉🌳</div>
          <div>
            Play unique games that interact with the real
            world
          </div>
        </div>
      </div>
      <div class="horizpane bgt1">
        <div>
          <div class="illust">🌸🏛️</div>
          <div>In multiple venues across Kyoto</div>
        </div>
      </div>
    </div> -->

    <div class="textcolumn relative martopbig">
      <!-- <img class="doodle" src="/images/home/doodle1.svg" /> -->
      <div v-if="locale === 'ja'">
        <h2>
          <span class="hl1">Playtest Kyoto</span>は、<br />
          <span class="hl2">都市空間</span>を舞台とした
          <br />
          <span class="hl3">ゲーム</span>や<span class="hl3">遊び</span>を行う
          <br />
          <span class="hl4">3日間のイベント</span>です。
        </h2>

        <!--京都に縁のあるゲームデザイナー、クリエイター、アーティストと共に、京都市内の広場や公園
      などの公共空間や、文化創造拠点や未活用の遊休不動産などを舞台に、子供から高齢者まで誰でも参加可能なゲームを制作します。街区全体を活用したトレジャーハンティングや、チームに分かれてミッションをクリアしていくストリート版借り物競争、アプリを活用した街中でのAR体験など、デジタルからフィジカルまでを横断しながら、京都という街を捉え直し、遊び尽くす3日間です。 -->

        <img
          class="doodad nomobile"
          style="transform: translateY(-50%) rotate(-90deg)"
          src="/images/home/doodad1.svg"
        />

        <img
          class="doodad nomobile right"
          src="/images/home/doodad2.svg"
          style="transform: translateY(100%)"
        />

        <div>
          2006年、ニューヨークで「Come Out &
          Play」フェスティバルが開催され、ゲームデザイナーと市民が公共空間に集まり、さまざまな遊びのアクティビティが行われました。その後、ギリシャのPlaythonやポーランドのPlaypublikなど、街中の公共空間を活用した遊び、デジタルとアナログの垣根を越えたゲームに焦点を当てたフェスティバルが相次いでいます。
          <br />
          <br />
          Playtest Kyoto
          は、都市空間を舞台としたゲームや遊びを行う3日間のイベントです。京都に縁のあるゲームデザイナー、クリエイター、アーティストと共に、京都市内の広場や公園などの公共空間や、文化創造拠点や未活用の遊休不動産などを舞台に、子供から高齢者まで誰でも参加可能なゲームを制作・発表します。デジタルからフィジカルまでを横断しながら、京都という街を捉え直し、遊び尽くす3日間です。
        </div>
      </div>
      <div v-else>
        <h2>
          <span class="hl1">Playtest Kyoto</span> is a
          <br />
          <span class="hl2">three-day event</span> for
          <br />
          <span class="hl3">games</span> and
          <span class="hl3">play</span>
          <br />
          in <span class="hl4">urban spaces</span>.
        </h2>
        <img
          class="doodad nomobile"
          style="transform: translateY(-50%) rotate(-90deg)"
          src="/images/home/doodad1.svg"
        />

        <img
          class="doodad nomobile right"
          src="/images/home/doodad2.svg"
          style="transform: translateY(100%)"
        />

        <div>
          In 2006 the “Come Out & Play” festival was held in New York City,
          bringing together game designers and residents of the city in public
          spaces with a wide variety of playful activities. The next 15 years
          saw a wave of festivals focused on playful art, play in public spaces,
          and games across the digital-analog spectrum, such as Plaython in
          Greece and Playpublik in Poland, fueled in part by the growing indie
          game community. While diverse in theme and structure, these events
          shared an embrace of playfulness as a key to engagement, connection,
          and activation of the city―in a sense, they were simply gathering
          points for people seeking fun, new experiences.
          <br />
          <br />
          COVID-19 restrictions brought a sudden end to in-person festivals, but
          in the last year they have finally begun to re-emerge. What would an
          urban play festival in Kyoto look like? What fun, new experiences
          could be found there? Join game designers, artists, and residents of
          Kyoto on March 29th-31st as they answer these questions through
          interactive installations, team-based games, and playful art tailored
          to specific locations throughout the city.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as c from "~/assets/common";
import * as appState from "~/assets/state";
const i18n = useI18n();
const locale = computed(() => i18n.locale.value);
</script>

<style lang="scss" scoped>
h2 {
  @media (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 1.4;
  }
}
.horizpane {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  padding: 6rem 5rem;
  transform: skewX(-10deg);

  font-weight: 600;
  // text-transform: uppercase;
  font-size: 1.4rem;
  line-height: 1.2;

  &:first-of-type {
    margin-left: -2em;
    padding-left: 7em;
  }

  &:last-of-type {
    margin-right: -2em;
    padding-right: 7em;
  }

  & > * {
    transform: skewX(10deg);
  }

  .illust {
    line-height: 1;
    font-size: 5rem;
    white-space: nowrap;
    margin-bottom: 1rem;
  }
}

.doodad {
  opacity: 0.4;
  position: absolute;
  display: block;
  max-width: 110px;
  max-height: 100px;
  right: 100%;

  &.right {
    left: 100%;
    right: auto;
  }
}
</style>
