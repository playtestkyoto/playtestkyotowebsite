<template><div></div></template>

<script setup lang="ts">
import * as c from '~/assets/common'
import * as appState from '~/assets/state'
import * as Tone from 'tone'

onMounted(() => {
  window.addEventListener('keydown', keyListener)
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', keyListener)
})
async function keyListener(e: KeyboardEvent) {
  if (e.key === ' ') {
    // const audio = new Audio('/sounds/talk.wav')
    // // adjust audio pitch
    // audio.playbackRate = c.randomBetween(0.8, 1.2)
    // audio.
    // audio.play()
    await Tone.start()
    const player = new Tone.Player({
      url: '/sounds/talk.wav',
      autostart: false,
    })
    await Tone.loaded()
    const pitchShift = new Tone.PitchShift({
      pitch: c.randomBetween(0, 4),
    }).toDestination()
    player.connect(pitchShift)
    player.start()

    setTimeout(() => {
      player.stop()
      player.dispose()
    }, 1000)
  }
}
</script>

<style lang="scss" scoped></style>
