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
          <span class="hl3">ゲーム</span>や<span class="hl3"
            >遊び</span
          >を行う
          <br />
          <span class="hl4">3日間のイベント</span>です。
        </h2>

        <!--京都に縁のあるゲームデザイナー、クリエイター、アーティストと共に、京都市内の広場や公園
      などの公共空間や、文化創造拠点や未活用の遊休不動産などを舞台に、子供から高齢者まで誰でも参加可能なゲームを制作します。街区全体を活用したトレジャーハンティングや、チームに分かれてミッションをクリアしていくストリート版借り物競争、アプリを活用した街中でのAR体験など、デジタルからフィジカルまでを横断しながら、京都という街を捉え直し、遊び尽くす3日間です。 -->

        <img
          class="doodad"
          style="transform: translateY(-50%) rotate(-90deg)"
          src="/images/home/doodad1.svg"
        />

        <img
          class="doodad right"
          src="/images/home/doodad2.svg"
          style="transform: translateY(100%)"
        />

        <div>
          「Urban Play
          Festival」は、都市空間を舞台とした「ゲームと遊び」を行う3日間のフェスティバルです。京都に縁のあるゲームデザイナー、クリエイター、アーティスト数名をアサインし、京都の具体的な都市空間（広場や公園などの公共空間や、文化創造拠点や未活用の遊休不動産など）をお題に、市民誰でも参加可能なゲームを制作し、フェスティバル期間中に発表してもらいます。具体的には、街区全体を活用したトレジャーハンティングや、チームに分かれてミッションをクリアしていくストリート版借り物競争、アプリを活用した街中でのAR体験など、1人だけでなく複数人で遊べるゲームを想定しています。
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
          class="doodad"
          style="transform: translateY(-50%) rotate(-90deg)"
          src="/images/home/doodad1.svg"
        />

        <img
          class="doodad right"
          src="/images/home/doodad2.svg"
          style="transform: translateY(100%)"
        />

        <div>
          Together with game designers, creators, and
          artists with ties to Kyoto, we will create games
          that anyone from children to the elderly can
          participate in, using spaces such as plazas and
          parks, cultural and creative centers, and
          underutilized real estate in Kyoto City as stages.
          The three-day event will include
          <span class="todo">X Y and Z</span>, traversing
          the digital and physical worlds to play across the
          city of Kyoto.
        </div>
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
