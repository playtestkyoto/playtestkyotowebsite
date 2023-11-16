<template>
  <div class="grid">
    <div class="row">
      <div v-if="locale === 'ja'">会期 📆</div>
      <div v-else></div>

      <div v-if="locale === 'ja'">
        2024年3月15日（金）〜17日（日）計3日間
      </div>
      <div v-else></div>
    </div>

    <div class="row">
      <div v-if="locale === 'ja'">会場 🎪</div>
      <div v-else></div>

      <div v-if="locale === 'ja'">問い合わせ</div>
      <div v-else></div>
    </div>

    <div class="row">
      <div v-if="locale === 'ja'">時間 ⏰</div>
      <div v-else></div>

      <div v-if="locale === 'ja'">11:00 — 18:00</div>
      <div v-else></div>
    </div>

    <div class="row">
      <div v-if="locale === 'ja'">入場料 🎟️</div>
      <div v-else></div>

      <div v-if="locale === 'ja'">
        1日券：1000円 3日共通券：1500円 全会場共通
        チケットの購入はオンラインのみ /
        リンクはこちら：🔴🔴🔴
      </div>
      <div v-else></div>
    </div>

    <div class="row">
      <div v-if="locale === 'ja'">主宰 👨‍👩‍👧‍👦</div>
      <div v-else></div>

      <div v-if="locale === 'ja'">
        Urban Play Festival Kyoto
        実行委員会（代表：杉田真理子）
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
  --border: 2px dashed var(--text-l2);
  margin: 0 auto;
  font-size: 1.5em;
  border: var(--border);
  border-bottom: none;
  max-width: 1200px;
}
.row {
  display: grid;
  grid-template-columns: 200px 1fr;
  border-bottom: var(--border);

  & > * {
    padding: 0.5em;
  }

  & > div:nth-child(1) {
    font-weight: bold;
    text-align: right;
    border-right: var(--border);
  }
  & > div:nth-child(2) {
    padding-left: 0.75em;
  }
}
</style>
