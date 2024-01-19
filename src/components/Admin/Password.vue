<template>
  <div class="relative marbot">
    <input
      v-model="password"
      placeholder="type admin password here then refresh if nothing loads"
    />
  </div>
</template>

<script setup lang="ts">
import * as c from '~/assets/common'
import * as appState from '~/assets/state'
import { set } from '~/assets/storage'

const password = ref('')

watch(password, setPassword)

function setPassword() {
  set('adminPassword', password.value)
}
</script>

<style lang="scss" scoped></style>
