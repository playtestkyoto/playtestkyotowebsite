<template>
  <div class="team">
    <h2 class="marbotsmall textcenter">
      <span v-if="locale === 'ja'">Playtestのチーム</span>
      <span v-else>Playtest Team</span>
    </h2>

    <div class="teamMembers flexcenter">
      <div
        v-for="member in teamMembers"
        :key="member.name"
        class="member flexcolumn flexbetween textcenter"
        :style="{
          zIndex: member.z ? member.z : 1,
        }"
      >
        <div class="padleft padright">
          <h3 class="marnone">
            {{ member.name }}
          </h3>
        </div>
        <div class="memberImage">
          <img
            :src="member.image"
            :style="{
              height: member.imageHeightMod
                ? member.imageHeightMod * 100 + '%'
                : '100%',
            }"
          />
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

const teamMembers: {
  name: string
  role: string
  image: string
  imageHeightMod?: number
  z?: number
}[] = [
  {
    name: 'Mariko Sugita',
    role: 'Director',
    image: '/images/people/mariko_trans.png',
    imageHeightMod: 1.2,
    z: 3,
  },

  {
    name: 'Jasper Stephenson',
    role: 'Generalist',
    image: '/images/people/jasper_trans.png',
  },
  {
    name: 'William Zack Wood',
    role: 'Planner',
    image: '/images/people/zack_trans.png',
    imageHeightMod: 1.3,
  },
]
</script>

<style lang="scss" scoped>
.teamMembers {
  margin-bottom: -5em;
  mix-blend-mode: multiply;

  .member {
    width: 25%;
  }

  h3 {
    line-height: 1.1;
  }
  .memberImage {
    padding-top: 1em;
    height: 20em;
    margin: 0 -30%;

    img {
      height: 100%;
      max-width: 1000%;
    }
  }
}
</style>
