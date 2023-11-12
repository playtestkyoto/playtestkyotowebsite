<template>
  <div>
    <h3>
      <span v-if="locale === 'ja'">チームメンバー</span>
      <span v-else>Team</span>
    </h3>

    <div>
      <span v-if="locale === 'ja'">杉田真理子</span>
      <span v-else>Mariko Sugita</span>
      <span v-if="locale === 'ja'" class="sub"
        >ディレクター</span
      >
      <span v-else class="sub">Director</span>
    </div>
    <div>
      <template v-if="locale === 'ja'">
        「都市体験の編集」をテーマに、場のデザインプロジェクトを、渋谷、池袋、神戸、アムステルダム、ナイロビ、カイロ、ホーチミンなど複数都市で手がける。都市・建築・まちづくり分野における執筆や編集、リサーチほか文化芸術分野でのキュレーションや新規プログラムのプロデュース、ディレクション、ファシリテーションなど国内外を横断しながら活動を行う。1年の半分は海外のさまざまな都市に滞在している。
      </template>
      <template v-else> </template>
    </div>

    <div>
      <span v-if="locale === 'ja'">William Zack Wood</span>
      <span v-else>William Zack Wood</span>
      <span v-if="locale === 'ja'" class="sub"
        >アドバイザー</span
      >
      <span v-else class="sub">Advisor</span>
    </div>
    <div>
      <template v-if="locale === 'ja'">
        京都精華大学芸術研究科博士後期課程。2014年からヨーロッパにて、ゲームデザイン・シアターゲーム指導・パフォーマンスを行う。その後、自作のゲームやマンガのキャラクターを元に、2020年からオリジナルのオラクルカードを作っている。
      </template>
      <template v-else>
        Zack has been developing his original deck of oracle
        cards since mid-2020. It uses characters from his
        video game Monster Garden (available in English and
        Japanese). The readings build on his experiences
        with game design, game facilitation, and performance
        since 2014. He has held workshops and shown his work
        throughout events in Europe and is currently
        enrolled in a PhD program at Kyoto Seika University.
      </template>
    </div>

    <div>
      <span v-if="locale === 'ja'">Jasper Stephenson</span>
      <span v-else>Jasper Stephenson</span>
      <span v-if="locale === 'ja'" class="sub"></span>
      <span v-else class="sub"></span>
    </div>
    <div>
      <template v-if="locale === 'ja'"> </template>
      <template v-else> </template>
    </div>

    <div>
      <span v-if="locale === 'ja'">坂東 拓海</span>
      <span v-else>Takumi Bando</span>
      <span v-if="locale === 'ja'" class="sub"
        >デザイナー</span
      >
      <span v-else class="sub">Designer</span>
    </div>
    <div>
      <template v-if="locale === 'ja'"
        >1999年札幌生まれ。2022年、クリエイティブ・ユニット****/commentsに加入。2023年、京都芸術大学情報デザイン学科クロステックデザインコース卒業。Daisuke
        Hasegawa Studioに加入。<br />
        クリエイティブプロデューサー/プロジェクトマネージャーとして京都を拠点に活動。個人、組織における「社会へ眺望」を基にそれらを現象として具現化することを考えの軸としながら
        多様な領域と大小異なる事業規模で戦略段階から制作段階まで行なっている。セルフプロジェクトとして音楽イベント「plysound」やリサーチプロジェクト「The
        Power of View」を行なっている。</template
      >
      <template v-else> </template>
    </div>

    <div>
      <span v-if="locale === 'ja'">貞雄 大</span>
      <span v-else>Yudai Sada</span>
      <span v-if="locale === 'ja'" class="sub"
        >デザイナー</span
      >
      <span v-else class="sub">Designer</span>
    </div>
    <div>
      <template v-if="locale === 'ja'"
        >1998年大阪府生まれ。2018年、スイスZürcher
        Hochschule der
        Künste交換留学。2021年、京都芸術大学情報デザイン学科卒業。2021年、アーティスト・ユニットphono/graphに加入。2022年、クリエイティブ・ユニット****/commentsに加入。2023年出版レーベルChuchichäschtliを設立。タイポグラフィを軸に、美術・写真・音楽・ファッションなどの展覧会や広報物、書籍、CDなどのグラフィック・デザインを手がける。</template
      >
      <template v-else> </template>
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
