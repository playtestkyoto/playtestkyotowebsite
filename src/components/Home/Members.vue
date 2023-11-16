<template>
  <div>
    <h2 class="marbot">
      <span v-if="locale === 'ja'">チームメンバー</span>
      <span v-else>Team</span>
    </h2>

    <div class="members">
      <div
        class="member"
        :style="{
          transform: `rotate(${c.randomIntBetweenInclusive(
            -15,
            15,
          )}deg) translateX(${c.randomIntBetweenInclusive(
            -20,
            20,
          )}px) translateY(${c.randomIntBetweenInclusive(
            -50,
            50,
          )}px)`,
        }"
      >
        <HeroTest1
          class="personImage"
          :text="
            locale === 'ja' ? '杉田真理子' : 'Mariko Sugita'
          "
          :images="['/images/hero/1.jpg']"
          :highlight="['#666']"
          textColor="white"
          :thickLineLengthMultiplier="
            locale === 'ja' ? 1.9 : 1
          "
        />

        <div class="nameAndTitle">
          <span v-if="locale === 'ja'">杉田真理子</span>
          <span v-else>Mariko Sugita</span>
          <span v-if="locale === 'ja'" class="sub"
            >ディレクター</span
          >
          <span v-else class="sub">Director</span>
        </div>
        <div class="body">
          <template v-if="locale === 'ja'">
            「都市体験の編集」をテーマに、場のデザインプロジェクトを、渋谷、池袋、神戸、アムステルダム、ナイロビ、カイロ、ホーチミンなど複数都市で手がける。都市・建築・まちづくり分野における執筆や編集、リサーチほか文化芸術分野でのキュレーションや新規プログラムのプロデュース、ディレクション、ファシリテーションなど国内外を横断しながら活動を行う。1年の半分は海外のさまざまな都市に滞在している。
          </template>
          <template v-else> </template>
        </div>
      </div>

      <div
        class="member"
        :style="{
          transform: `rotate(${c.randomIntBetweenInclusive(
            -15,
            15,
          )}deg) translateX(${c.randomIntBetweenInclusive(
            -20,
            20,
          )}px) translateY(${c.randomIntBetweenInclusive(
            -50,
            50,
          )}px)`,
        }"
      >
        <HeroTest1
          class="personImage"
          :text="
            locale === 'ja'
              ? 'William Zack Wood'
              : 'William Zack Wood'
          "
          :images="['/images/hero/2.jpg']"
          :highlight="['#666']"
          textColor="white"
          :thickLineLengthMultiplier="0.95"
        />

        <div class="nameAndTitle">
          <span v-if="locale === 'ja'"
            >William Zack Wood</span
          >
          <span v-else>William Zack Wood</span>
          <span v-if="locale === 'ja'" class="sub"
            >アドバイザー</span
          >
          <span v-else class="sub">Advisor</span>
        </div>
        <div class="body">
          <template v-if="locale === 'ja'">
            京都精華大学芸術研究科博士後期課程。2014年からヨーロッパにて、ゲームデザイン・シアターゲーム指導・パフォーマンスを行う。その後、自作のゲームやマンガのキャラクターを元に、2020年からオリジナルのオラクルカードを作っている。
          </template>
          <template v-else>
            Zack has held workshops and shown his work
            throughout events in Europe and is currently
            enrolled in a PhD program at Kyoto Seika
            University. He has been developing an original
            deck of oracle cards since mid-2020, which uses
            characters from his video game Monster Garden
            (available in English and Japanese). His
            readings build on his experiences with game
            design, game facilitation, and performance since
            2014.
          </template>
        </div>
      </div>

      <div
        class="member"
        :style="{
          transform: `rotate(${c.randomIntBetweenInclusive(
            -15,
            15,
          )}deg) translateX(${c.randomIntBetweenInclusive(
            -20,
            20,
          )}px) translateY(${c.randomIntBetweenInclusive(
            -50,
            50,
          )}px)`,
        }"
      >
        <HeroTest1
          class="personImage"
          :text="
            locale === 'ja'
              ? 'Jasper Stephenson'
              : 'Jasper Stephenson'
          "
          :images="['/images/hero/3.jpg']"
          :highlight="['#666']"
          textColor="white"
          :thickLineLengthMultiplier="0.95"
        />

        <div class="nameAndTitle">
          <span v-if="locale === 'ja'"
            >Jasper Stephenson</span
          >
          <span v-else>Jasper Stephenson</span>
          <span v-if="locale === 'ja'" class="sub"
            >総合者</span
          >
          <span v-else class="sub">Generalist</span>
        </div>
        <div class="body">
          <template v-if="locale === 'ja'">
            京都左京区にベースされたクリエーターです。チームの総合者として必要に応じて開発やビジュアルデザインやUXやゲームデザインを行います。最近開発したゲームはコラボ形の展示会の<a
              href="https://www.differentstrokes.xyz"
              target="_blank"
              >Different Strokes</a
            >です。以前は東京のCygamesでゲーム研究や開発を行いました。
          </template>
          <template v-else
            >Jasper is a creator based in Sakyoku, Kyoto. As
            the team's generalist, he does development,
            visual design, UX, game design, and any other
            required tasks as needed. The most well-known of
            his recent games is the online collaborative
            gallery
            <a
              href="https://www.differentstrokes.xyz"
              target="_blank"
              >Different Strokes</a
            >. Previously, he conducted game research and
            development with Cygames in Tokyo.
          </template>
        </div>
      </div>

      <div
        class="member"
        :style="{
          transform: `rotate(${c.randomIntBetweenInclusive(
            -15,
            15,
          )}deg) translateX(${c.randomIntBetweenInclusive(
            -20,
            20,
          )}px) translateY(${c.randomIntBetweenInclusive(
            -50,
            50,
          )}px)`,
        }"
      >
        <HeroTest1
          class="personImage"
          :text="
            locale === 'ja' ? '坂東拓海' : 'Takumi Bando'
          "
          :images="['/images/hero/4.jpg']"
          :highlight="['#666']"
          textColor="white"
          :thickLineLengthMultiplier="
            locale === 'ja' ? 1.9 : 1
          "
        />

        <div class="nameAndTitle">
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
      </div>

      <div
        class="member"
        :style="{
          transform: `rotate(${c.randomIntBetweenInclusive(
            -15,
            15,
          )}deg) translateX(${c.randomIntBetweenInclusive(
            -20,
            20,
          )}px) translateY(${c.randomIntBetweenInclusive(
            -50,
            50,
          )}px)`,
        }"
      >
        <HeroTest1
          class="personImage"
          :text="locale === 'ja' ? '貞雄大' : 'Yudai Sada'"
          :images="['/images/hero/1.jpg']"
          :highlight="['#666']"
          textColor="white"
          :thickLineLengthMultiplier="
            locale === 'ja' ? 1.9 : 1
          "
        />

        <div class="nameAndTitle">
          <span v-if="locale === 'ja'">貞 雄大</span>
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
.members {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5em 5em;

  .personImage {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 15em;
    transform: scale(1.4);
    margin-bottom: -3em;
  }
  .nameAndTitle {
    position: relative;
    z-index: 3;
    // margin-bottom: 1em;

    *:first-child {
      font-size: 1.3em;
      font-weight: bold;
    }
    .sub {
      margin-left: 1em;
    }
  }

  .body {
    position: relative;
    z-index: 3;
  }
}
</style>
