<template>
<div :class="{'hidden': (activeTab != 'files')}" class="w-full">
  <div>
    <div class="flex justify-center pb-4">
      <button class="bg-teal text-white p-3 shadow-lg rounded">Upload File</button>
    </div>

    <div class="">
      <ul class="flex flex-row flex-wrap justify-center list-reset">
        <li class="rounded-lg w-48 h-48 flex flex-col justify-center items-center m-4 shadow-md cursor-pointer">
          <div class="bg-grey-lighter w-full h-32 flex justify-center items-center rounded-lg">
            <img src="https://cdn.dribbble.com/users/1838892/screenshots/4916282/image_manager_and_bulk_editor.gif" alt="" class="rounded-lg">
          </div>
          <div class="bg-white w-full h-16 text-center rounded-b-lg pt-4 px-4 text-sm text-grey-darker">Files section design.jpg</div>
        </li>
        <li class="rounded-lg w-48 h-48 flex flex-col justify-center items-center m-4 shadow-md cursor-pointer">
          <div class="bg-grey-lighter w-full h-32 flex justify-center items-center rounded-lg">
            <font-awesome-icon :icon="faFileAlt" class="text-teal text-5xl"></font-awesome-icon>
          </div>
          <div class="bg-white w-full h-16 text-center rounded-b-lg pt-4 px-4 text-sm text-grey-darker">Files section design.sketch</div>
        </li>
        <li class="rounded-lg w-48 h-48 flex flex-col justify-center items-center m-4 shadow-md cursor-pointer">
          <div class="bg-grey-lighter w-full h-32 flex justify-center items-center rounded-lg">
            <font-awesome-icon :icon="faFilePdf" class="text-teal text-5xl"></font-awesome-icon>
          </div>
          <div class="bg-white w-full h-16 text-center rounded-b-lg pt-4 px-4 text-sm text-grey-darker">Files section requirements.pdf</div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import {
  faEllipsisH,
  faFileAlt,
  faFileImage,
  faFilePdf
} from '@fortawesome/free-solid-svg-icons'

export default {
  props: {
    resource: {
      required: true,
      type: Object
    },
    resourceType: {
      required: true,
      type: String
    },
    activeTab: {
      required: true,
      type: String
    }
  },
  data: () => ({
    faEllipsisH,
    faFileAlt,
    faFileImage,
    faFilePdf
  })
}
</script>
