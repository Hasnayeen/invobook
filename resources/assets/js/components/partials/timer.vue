<template>
<div v-if="currentComponent === 'timer'">
  <div class="fixed top-0 text-lg mx-auto mt-16 md:mt-32 max-w-lg z-40 inset-x-0">
    <div class="flex flex-col bg-white shadow-lg relative rounded">
      <div class="pt-4 pr-4">
        <span>
          <font-awesome-icon :icon="faCog" class="float-right text-grey-dark cursor-pointer"></font-awesome-icon>
        </span>
      </div>
      <h1 class="text-center text-gray-700 font-semibold text-5xl py-4">{{ currentTime }}</h1>
      <div class="mx-8">
        <div class="h-1 bg-gray-400 rounded"></div>
        <div class="h-1 bg-teal-500 rounded -mt-1" style="width: 0%;"></div>
      </div>
      <div class="px-4 py-8">
        <button @click="startCountdown" class="px-4 py-2 mx-4 rounded border border-teal-500 font-semibold text-teal-700 start" type="button">Start</button>
        <button @click="pauseCountdown" class="px-4 py-2 mx-4 rounded border" type="button">Pause</button>
        <button @click="resetCountdown" class="px-4 py-2 mx-4 rounded border" type="button">Reset</button>
        <button @click="activateBreak" class="px-4 py-2 mx-4 rounded border" type="button">Break</button>
      </div>
      <div class="border-t w-full"></div>
      <div class="px-8 py-4">
        <span class="block py-2 text-gray-700">Total Time : 0H 0M</span>
        <span class="block py-2 text-gray-700">Completed Unit : 0</span>
      </div>
    </div>
  </div>

  <div @click="closeTimerModal" class="h-screen w-screen fixed inset-0 bg-gray-900 opacity-25 z-20"></div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog'

let sound = new Audio('./alarm_bell.mp3')

export default {
  data: () => ({
    faCog
  }),

  updated () {
    if (this.currentTime === '00 : 00') {
      sound.play()
    }
  },

  computed: {
    ...mapState({
      currentComponent: state => state.dropdown.currentComponent,
      currentTime: state => window.luxon.Duration.fromObject({ seconds: state.timer.time }).shiftTo('minutes', 'seconds').toFormat("mm ':' ss")
    })
  },

  methods: {
    ...mapActions([
      'closeComponent',
      'startTimer',
      'pauseTimer',
      'resetTimer',
      'startBreak'
    ]),
    closeTimerModal () {
      this.closeComponent()
    },
    startCountdown () {
      this.startTimer()
    },
    pauseCountdown () {
      this.pauseTimer()
      sound.pause()
    },
    resetCountdown () {
      this.resetTimer()
      sound.pause()
    },
    activateBreak () {
      this.startBreak()
    }
  }
}
</script>
