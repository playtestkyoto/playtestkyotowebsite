<template>
  <div class="footer">
    <div v-if="locale === 'ja'">
      <div class="grid2 gap">
        <div class="bold">主催</div>
        <div>
          Playtest Kyoto 実行委員会（代表: 杉田真理子）
        </div>

        <div class="bold">デザイン</div>
        <div>綱島卓也</div>

        <div class="bold">助成</div>
        <div>Arts Aid Kyoto</div>

        <div class="bold">お問合せ</div>
        <div>playtestkyoto@gmail.com</div>
      </div>
    </div>
    <div v-else>
      <div class="grid2 gap">
        <div class="bold">Organizer</div>
        <div>
          Playtest Kyoto Executive Committee
          (Representative: Mariko Sugita)
        </div>

        <div class="bold">Creative Design</div>
        <div>Takuya Tsunashima</div>

        <div class="bold">Supported by</div>
        <div>Arts Aid Kyoto</div>

        <div class="bold">Inquiry</div>
        <div>
          <a href="mailto:playtestkyoto@gmail.com"
            >playtestkyoto@gmail.com</a
          >
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
.grid2 {
  grid-template-columns: 150px 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;

    & > *:nth-child(even) {
      margin-bottom: 1em;
    }
  }
}
</style>
