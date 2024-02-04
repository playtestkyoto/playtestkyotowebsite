<template>
  <div class="grid">
    <div class="row">
      <div v-if="locale === 'ja'">会期 📆</div>
      <div v-else><span class="todo"></span></div>

      <div v-if="locale === 'ja'">
        2024年3月15日（金）〜17日（日）計3日間
      </div>
      <div v-else></div>
    </div>

    <div class="row">
      <div v-if="locale === 'ja'">会場 🎪</div>
      <div v-else></div>

      <div v-if="locale === 'ja'">京都市内随所</div>
      <div v-else></div>
    </div>

    <div class="row">
      <div v-if="locale === 'ja'">時間 ⏰</div>
      <div v-else></div>

      <div v-if="locale === 'ja'">12:00 — 18:00</div>
      <div v-else></div>
    </div>

    <div class="row">
      <div v-if="locale === 'ja'">入場料 🎟️</div>
      <div v-else></div>

      <div v-if="locale === 'ja'">
        1日券：1000円 3日共通券：1500円 全会場共通
        <br />
        チケットの購入はオンラインのみ
        <br />
        リンクはこちら：🔴🔴🔴
      </div>
      <div v-else></div>
    </div>

    <div class="row">
      <div v-if="locale === 'ja'">主宰 👨‍👩‍👧‍👦</div>
      <div v-else></div>

      <div v-if="locale === 'ja'">
        Playtest 実行委員会（代表：杉田真理子）
      </div>
      <div v-else></div>
    </div>

    <div class="row">
      <div v-if="locale === 'ja'">問い合わせ 💭</div>
      <div v-else></div>

      <div v-if="locale === 'ja'">
        <a href="mailto:playtestkyoto@gmail.com"
          >playtestkyoto@gmail.com</a
        >
      </div>
      <div v-else>
        <a href="mailto:playtestkyoto@gmail.com"
          >playtestkyoto@gmail.com</a
        >
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
.grid {
  --border: 2px dashed rgba(0, 0, 0, 0.2);
  margin: -8em auto;
  font-size: 1.4em;
  // border: var(--border);
  border-bottom: none;
  max-width: 700px;
  // background: var(--bg-d);
  // color: var(--text);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
}
.row {
  display: grid;
  grid-template-columns: 180px 1fr;
  border-bottom: var(--border);

  &:first-child {
    & > div {
      padding-top: 10em;
    }
  }
  &:last-child {
    & > div {
      padding-bottom: 10em;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  & > * {
    padding: 0.8em 0.5em;
  }

  & > div:nth-child(1) {
    font-weight: bold;
    text-align: right;
    border-right: var(--border);
    padding-left: 0;

    @media (max-width: 768px) {
      text-align: left;
      border: none;
    }
  }
  & > div:nth-child(2) {
    padding-left: 0.75em;
    padding-right: 0;

    @media (max-width: 768px) {
      padding: 0.5em;
      padding-top: 0;
    }
  }
}
</style>
