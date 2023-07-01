<template>
    <div class="w-screen overflow-hidden bg-[#f8f9fd] dark:bg-gray-900">
      <ul class=" p-[1.5vw] overflow-auto flex justify-between items-center menu">
        <template v-for="(item, index) in menu">
          <li v-if="true" :key="item.id" class="flex flex-col items-center mr-[5vw]">
            <Icon :icon="icon[index]" color="red" width="36" height="36" class="w-[5vw] h-[5vw]" />
            <p class="text-[#969aa3] text-[1.5vw] w-[15vw] text-center">{{ item.name }}</p>
          </li>
        </template>
      </ul>
    </div>
</template>
<script>
export default {
    props: ['menu'],
    data(){
        return {
            icon: ["tabler:calendar", "ph:radio-fill", "icon-park-outline:music-menu", "icon-park-solid:ranking-list", "mdi:audio-book", "ic:outline-live-tv", "vaadin:user-heart", "bi:file-earmark-music", "mdi:hammer-sickle", "solar:gamepad-bold"],
        }
    }
}
</script>