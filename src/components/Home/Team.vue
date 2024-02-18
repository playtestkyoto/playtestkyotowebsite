<template>
  <div class="team">
    <h2 class="marbotsmall bold textcenter">
      <span v-if="locale === 'ja'">Playtestのチーム</span>
      <span v-else>Playtest Team</span>
    </h2>

    <div class="teamMembers">
      <div
        class="mobileList nodesktop flexcenter flexcolumn"
      >
        <component
          :is="member.url ? 'a' : 'div'"
          v-for="member in teamMembers"
          :key="member.name"
          :href="member.url"
          target="_blank"
        >
          {{ member.name }}
        </component>
      </div>
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
        <div class="padleft padright nomobile">
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
    name: 'Zack Wood',
    role: 'Planner',
    url: 'http://wzackw.com/',
    image: '/images/people/zack_trans.png',
    imageHeightMod: 1.4,
  },
  {
    name: 'Chisato Tanaka',
    role: 'Planner',
    image: '/images/people/chisato_trans.png',
    imageHeightMod: 1,
    z: 3,
  },
]
</script>

<style lang="scss" scoped>
.teamMembers {
  margin-bottom: -5em;
  mix-blend-mode: multiply;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-bottom: -2em;
    padding-top: 6em;
  }

  .mobileList {
    position: absolute;
    width: 100%;
    top: 7.5em;
    z-index: 10;
  }

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

    @media (max-width: 768px) {
      text-align: center;
      font-size: 1rem;
    }
  }
  .memberImage {
    padding-top: 1em;
    height: 20em;
    margin: 0 -30%;

    img {
      height: 100%;
      max-width: 1000%;
    }

    @media (max-width: 768px) {
      height: calc(15vw + 5em);
      padding-top: 1em;
      margin: 0 0;

      img {
        transform: translateX(-25%);
      }
    }
  }
}
</style>
