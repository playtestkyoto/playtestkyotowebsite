<template>
  <div>
    <h2 class="marbotsmall textcenter bold">
      <span v-if="locale === 'ja'">Games</span>
      <span v-else>Games</span>
    </h2>

    <div class="games">
      <ClientOnly>
        <div
          v-for="(game, index) in shuffledGames"
          :key="game.name + game.designer?.name"
          class="game"
          :style="{
            '--color': `var(--c${index + 1})`,
          }"
        >
          <div class="bgbox">
            <a
              :href="game.designer?.url || '#'"
              target="_blank"
              class="designer"
              v-if="game.designer"
              :key="game.designer.name"
            >
              <div
                class="avatar"
                v-if="game.designer.image"
              >
                <img
                  :src="game.designer.image"
                  :key="game.designer.image"
                />
              </div>
              <div
                class="nameAndTitle"
                v-if="game.designer.name"
              >
                <!-- <div class="normal fade small">
                Game Designer
              </div> -->
                <span class="name">{{
                  game.designer.name
                }}</span>
                <div class="normal fade small">
                  presents...
                </div>
              </div>
            </a>

            <div class="imageholder">
              <img
                v-if="game.image"
                :src="game.image"
                :key="game.image"
                :style="{
                  transform: `rotate(${c.randomBetween(
                    -3,
                    3,
                  )}deg)`,
                }"
                class="image"
              />
            </div>
            <div class="ticketLink" v-if="game.ticketUrl">
              <a
                class="button black insetLine"
                :class="{
                  displaynone:
                    game.ticketUrl === 'coming soon',
                }"
                style="
                  --insetOffset: 3px;
                  --insetColor: white;
                  --insetWidth: 2px;
                "
                :href="game.ticketUrl"
              >
                <span class="padtiny">
                  <span
                    v-if="game.ticketUrl === 'coming soon'"
                    >Coming Soon!</span
                  >
                  <span v-else-if="locale === 'ja'"
                    >チケット予約 👈</span
                  >
                  <span v-else>Get Tickets 👈</span>
                </span>
              </a>
            </div>
            <div class="ticketLink" v-else>
              <div class="button nopointer black">
                <span class="padtiny">
                  <span v-if="locale === 'ja'"
                    >他のチケットに含まれる</span
                  >
                  <span v-else
                    >Included with other tickets!</span
                  >
                </span>
              </div>
            </div>

            <div class="body padbot">
              <h3 class="marbottiny">
                {{ game.name }}
              </h3>
              <div class="small">
                <template v-if="locale === 'ja'">{{
                  game.descriptionJa
                }}</template>
                <template v-else>{{
                  game.description
                }}</template>
              </div>
            </div>
          </div>

          <div
            class="location"
            :class="{
              nopointer: !game.venue.mapUrl,
            }"
            v-if="game.venue"
            :key="game.venue.name"
            :style="{
              '--color': game.venue.color,
            }"
          >
            <div
              class="locationBg"
              :style="{
                backgroundImage: `url(${game.venue.image})`,
              }"
            ></div>
            <div class="locationBubble">
              📍 {{ game.venue.name }}
            </div>

            <div class="links" v-if="game.venue.mapUrl">
              <a
                :href="game.venue.url || '#'"
                target="_blank"
              >
                <span>🌐 Web</span>
              </a>
              <a
                :href="game.venue.mapUrl || '#'"
                target="_blank"
              >
                <span>🗺️ Map</span>
              </a>
            </div>
          </div>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as c from '~/assets/common'
import * as appState from '~/assets/state'
const i18n = useI18n()
const locale = computed(() => i18n.locale.value)

const shuffledGames = c.shuffleArray(c.games)
</script>

<style lang="scss" scoped>
.games {
  --pad: 2em;
  --overflow: 1.5em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 7em 7em;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 4em;
    --pad: 1em;
    --overflow: 1em;
    grid-gap: 2em;
  }

  .game {
    padding: 1em;
    position: relative;

    .bgbox {
      position: relative;
      z-index: 3;
      background: var(--bg);
      // box-shadow: inset -5px 0 0 0 var(--color);
      // box-shadow: 0 0 4em -2em var(--color);
      box-shadow: 0 0 1em rgba(black, 0.1);
    }
  }

  .avatar {
    position: absolute;
    z-index: 2;
    width: 4em;
    height: 4em;
    object-fit: cover;
    overflow: hidden;
    border-radius: 50%;

    top: 0em;
    left: calc(-1 * var(--overflow) * 1.5);
  }

  .designer {
    font-weight: 600;
    font-size: 1.2em;
    text-decoration: none;

    &:hover .name {
      text-decoration: underline;
    }
  }

  .nameAndTitle {
    padding-left: 3em;
    padding-top: 1em;
    line-height: 1.2;
  }

  .imageholder {
    filter: drop-shadow(0 0 0.2em rgba(0, 0, 0, 0.1));
  }
  .image {
    margin: 1em 0;
    clip-path: polygon(0% 10%, 100% 0%, 100% 100%, 0% 95%);
    width: calc(100% + var(--overflow) * 2);
    max-width: 200%;
    position: relative;
    left: calc(-1 * var(--overflow));
  }

  .ticketLink {
    position: absolute;
    right: calc(var(--pad) * 0.3);
    transform: translateY(-110%) rotate(5deg);

    a {
      box-shadow: 0 0.2em 0.5em rgba(black, 0.3);
    }
  }

  .body {
    margin-top: 0.3em;
    padding-inline: var(--pad);
    font-size: 1.1em;

    h3 {
      font-weight: 900;
      line-height: 1.2;
    }

    div {
      line-height: 1.4;
    }
  }

  .location {
    display: flex;
    align-items: center;
    justify-content: center;

    width: calc(100% - var(--overflow) * 4);
    position: relative;
    z-index: 2;
    transform: translateY(-50%);
    margin-bottom: calc(-1 * 50%);
    left: calc(var(--overflow) * 2);
    // background: var(--text);
    aspect-ratio: 1;
    clip-path: circle(50% at 50% 50%);

    @media (max-width: 768px) {
      width: calc(100% - var(--overflow) * 2);
      left: calc(var(--overflow));
    }

    .locationBg {
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      transition: all 0.15s ease;

      &:after {
        content: '';
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--color);
        mix-blend-mode: color;
      }
    }

    .links {
      position: relative;
      opacity: 0;
      transition: all 0.15s ease;
      width: 100%;
      font-weight: 700;
      height: 50%;
      margin-top: 50%;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        text-decoration: none !important;
        transition: all 0.15s ease;
        background-color: rgba(0, 0, 0, 0.4);
        color: rgba(white, 1);
        font-size: 0.8em;

        &:hover {
          background-color: rgba(0, 0, 0, 0.9);
          // color: rgba(white, 1);
        }

        span {
          padding-top: 1em;
          padding-left: 3em;
        }

        &:last-child {
          left: 50%;

          span {
            padding-left: initial;
            padding-right: 3em;
          }
        }
      }
    }

    .locationBubble {
      pointer-events: none;
      position: absolute;
      z-index: 5;
      top: 65%;
      left: 50%;
      transform: translate(-50%, -50%);
      white-space: nowrap;
      padding: 0.3em 0.5em;
      background: var(--bg);
      border-radius: 0.5em;
      font-size: 0.8em;
      font-weight: 600;
      color: var(--text);
      transition: all 0.15s ease;
      // filter: drop-shadow(0 0 0.5em rgba(0, 0, 0, 0.2));

      background-size: cover;
      background-position: bottom;

      // down caret in center
      &:after {
        content: '';
        position: absolute;
        z-index: 4;
        top: 100%;
        left: 50%;
        transition: all 0.15s ease;
        transform: translate(-50%, -50%);
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid var(--bg);
        width: 0;
      }
    }

    &:not(.nopointer):hover {
      .locationBg {
        // background-color: rgba(0, 0, 0, 0.4);
        transform: scale(1.02);
        filter: blur(2px);
      }

      .locationBubble {
        transform: translate(-50%, -80%);

        // &:after {
        //   opacity: 0;
        // }
      }

      .links {
        opacity: 1;
      }
    }

    @media (max-width: 768px) {
      &:not(.nopointer) {
        .locationBg {
          // background-color: rgba(0, 0, 0, 0.4);
          transform: scale(1.02);
          filter: blur(2px);
        }

        .locationBubble {
          transform: translate(-50%, -80%);

          // &:after {
          //   opacity: 0;
          // }
        }
      }

      .links {
        opacity: 1;

        &:after {
          content: '';
          position: absolute;
          top: 45%;
          left: 50%;
          width: 1px;
          transform: translateX(-50%);
          height: 20%;
          background: var(--bg);
          opacity: 0.3;
          z-index: 4;
        }

        a:hover {
          background-color: rgba(0, 0, 0, 0.4);
        }
      }
    }
  }
}
</style>
