<template>
  <div>
    <h2 class="marbot">
      <span v-if="locale === 'ja'">スポンサー</span>
      <span v-else>Sponsors</span>
    </h2>

    <div class="sponsors">
      <div
        v-for="sponsor in sponsors"
        :key="sponsor.name"
        class="flexcenter flexstretch textcenter"
      >
        {{ sponsor }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as c from '~/assets/common'
import * as appState from '~/assets/state'
const i18n = useI18n()
const locale = computed(() => i18n.locale.value)

const sponsors: {
  name: string
  image: string
}[] = [
  {
    name: 'Sponsor 1',
    image: '/images/sponsors/asdf.jpg',
  },
]
</script>

<style lang="scss" scoped>
.sponsors {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5em 5em;
}
</style>
