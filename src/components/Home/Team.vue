<template>
  <div class="team">
    <h2 class="marbotsmall textcenter">
      <span v-if="locale === 'ja'">Playtestのチーム</span>
      <span v-else>Playtest Team</span>
    </h2>

    <div class="teamMembers flexcenter">
      <component
        :is="member.url ? 'a' : 'div'"
        v-for="member in teamMembers"
        :key="member.name"
        :href="member.url"
        target="_blank"
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
      </component>
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
  url?: string
  z?: number
}[] = [
  {
    name: 'Mariko Sugita',
    role: 'Director',
    url: 'https://linktr.ee/MarikoSugita',
    image: '/images/people/mariko_trans.png',
    imageHeightMod: 1.2,
    z: 3,
  },
  {
    name: 'Jasper Stephenson',
    role: 'Generalist',
    url: 'https://www.jasperstephenson.com/',
    image: '/images/people/jasper_trans.png',
  },
  {
    name: 'William Zack Wood',
    role: 'Planner',
    url: 'http://wzackw.com/',
    image: '/images/people/zack_trans.png',
    imageHeightMod: 1.3,
  },
  {
    name: 'Chisato Tanaka',
    role: 'Planner',
    image: '/images/people/chisato_trans.png',
    imageHeightMod: 1,
  },
]
</script>

<style lang="scss" scoped>
.teamMembers {
  margin-bottom: -5em;
  mix-blend-mode: multiply;

  a {
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

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
