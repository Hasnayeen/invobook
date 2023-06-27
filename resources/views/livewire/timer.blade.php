<div x-data="{
    time: 0,
    timerId: null,
    saveTimerId: null,
    timerRunning: false,
    start () {
        this.timerRunning = true
        this.timerId = setInterval(() => {
            this.time += 1
        }, 1000);
        this.saveTimerId = setInterval(() => {
            this.$wire.call('save')
        }, 1000 * 10);
    },
    stop () {
        if(this.timerRunning) {
            clearInterval(this.timerId)
            clearInterval(this.saveTimerId)
            this.time = 0
            this.timerRunning = false
        }
    },
    hours () {
        return Math.floor(this.time / 3600).toString().padStart(2, 0)
    },
    mins () {
        return Math.floor(this.time % 3600 / 60).toString().padStart(2, 0)
    },
    secs () {
        return Math.floor(this.time % 3600 % 60).toString().padStart(2, 0)
    },
}">
    <div class="mb-6" @timer-start.window="start" @timer-stop.window="stop" @close-modal.window="stop" wire:ignore>
        <div class="flex justify-center space-x-4 col-span-2 text-2xl font-bold px-4">
            <span class="border-primary-600 border-2 text-center w-16 py-2 rounded" x-text="hours()"></span>
            <span class="py-2">:</span>
            <span class="border-primary-600 border-2 text-center w-16 py-2 rounded" x-text="mins()"></span>
            <span class="py-2">:</span>
            <span class="border-primary-600 border-2 text-center w-16 py-2 rounded" x-text="secs()"></span>
        </div>
    </div>
        {{ $this->form }}

    <x-filament-actions::modals />
</div>
