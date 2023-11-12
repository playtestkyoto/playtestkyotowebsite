<template>
  <div class="footer">
    <div v-if="locale === 'ja'">
      <div class="grid2 gap">
        <div>主催</div>
        <div>
          Playtest Kyoto 実行委員会（代表: 杉田真理子）
        </div>

        <div>デザイン</div>
        <div>坂東拓海、貞雄大</div>

        <div>助成</div>
        <div>Arts Aid Kyoto</div>

        <div>お問合せ</div>
        <div>playtestkyoto@gmail.com</div>
      </div>
    </div>
    <div v-else>
      <div class="grid2 gap">
        <div>
          Organizer: Playtest Kyoto Executive Committee
          (Representative: Mariko Sugita)
        </div>
        <div>Creative Design: ○○○○○○</div>
        <div>Supported by Arts Aid Kyoto</div>
        <div>
          Inquiry:
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
  grid-template-columns: 100px 1fr;
}
</style>
