<template>
  <div>
    <div v-if="locale === 'ja'">
      <h3>
        Playtest Kyoto
        は、都市空間を舞台としたゲームや遊びを行う3日間のイベントです。
      </h3>

      京都に縁のあるゲームデザイナー、クリエイター、アーティストと共に、京都市内の広場や公園などの公共空間や、文化創造拠点や未活用の遊休不動産などを舞台に、子供から高齢者まで誰でも参加可能なゲームを制作します。街区全体を活用したトレジャーハンティングや、チームに分かれてミッションをクリアしていくストリート版借り物競争、アプリを活用した街中でのAR体験など、デジタルからフィジカルまでを横断しながら、京都という街を捉え直し、遊び尽くす3日間です。
    </div>
    <div v-else>
      <h3>
        Urban Playtest Kyoto is a three-day event for games
        and play in urban spaces.
      </h3>

      Together with game designers, creators, and artists
      with ties to Kyoto, we will create games that anyone
      from children to the elderly can participate in, using
      public spaces such as plazas and parks, cultural and
      creative centers, and underutilized real estate in
      Kyoto City as stages. The three-day event will include
      treasure hunting using the entire city block, a street
      version of scavenger hunts where teams are divided to
      complete missions, and AR experiences in the city
      using apps, traversing the digital and physical worlds
      to recapture and play out the city of Kyoto.
    </div>
  </div>
</template>

<script setup lang="ts">
import * as c from '~/assets/common'
import * as appState from '~/assets/state'
const i18n = useI18n()
const locale = computed(() => i18n.locale.value)
</script>

<style lang="scss" scoped></style>
