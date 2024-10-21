<template>
  <div class="videoEmbed contentcolumn martop flexcenter">
    <iframe
      width="100%"
      height="auto"
      src="https://www.youtube.com/embed/mF9YKfflbKE?si=yyIe7HOGmLR5wMVA"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import * as c from '~/assets/common'
import * as appState from '~/assets/state'
const i18n = useI18n()
const locale = computed(() => i18n.locale.value)
</script>

<style lang="scss" scoped>
.videoEmbed {
  iframe {
    aspect-ratio: 16 / 9;
  }
  @media (max-width: 768px) {
  }
}
</style>
