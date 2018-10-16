<template>
    <div class="bg-white shadow-md w-64 h-64 flex flex-row flex-wrap justify-center text-center rounded m-4">
        <header class="w-full relative border-b h-12 pt-4">
            <a :href="'/projects/' + resource.id + '/schedules'" class="text-grey-darker font-medium no-underline">
                Schedules
            </a>
            <span class="text-grey-darker absolute pin-r mr-2">
                <font-awesome-icon :icon="faEllipsisH"></font-awesome-icon>
            </span>
        </header>
        <div class="w-full h-48 self-start">
            <div class="px-2 py-4">
                <a href="#" class="no-underline text-grey-dark text-lg">
                    <span>
                        <font-awesome-icon :icon="faCalendar"></font-awesome-icon>
                        25 Feb, 2017
                    </span>
                    <p>
                        <span>Review Meeting</span>
                    </p>
                </a>
            </div>
            <div class="px-2 py-4">
                <a href="#" class="no-underline text-grey-dark text-lg">
                    <span>
                        <font-awesome-icon :icon="faCalendar"></font-awesome-icon>
                        26 Feb, 2017
                    </span>
                    <p>
                        <span>Landing Page Release</span>
                    </p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import {
  faCalendar,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons'

export default {
  props: ['resource'],
  data: () => ({
    faCalendar,
    faEllipsisH,
  })
}
</script>
