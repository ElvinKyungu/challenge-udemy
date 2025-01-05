<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: any
  badge?: string
  link?: string
  linkText?: string
  isActive?: boolean
}>()
</script>

<template>
  <div
    class="p-6 border rounded-lg relative hover:bg-gray-200 cursor-pointer transition-colors"
    :class="{'bg-gray-100 border-purple-500': isActive}"
  >
    <!-- Bord violet seulement si actif -->
    <div
      v-if="isActive"
      class="h-full w-1 absolute bg-purple-400 top-0 left-0 rounded-l-lg"
    ></div>
    <div class="flex gap-4">
      <div class="w-12 h-12 flex-shrink-0">
        <img :src="icon" class="w-full h-full text-gray-700" />
      </div>
      <div>
        <h3 class="font-bold mb-2 flex items-center gap-2">
          {{ title }}
          <span 
            v-if="badge"
            class="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700"
          >
            {{ badge }}
          </span>
        </h3>
        <p class="text-gray-600 text-sm mb-4">{{ description }}</p>
        <NuxtLink
          v-if="link"
          :to="link"
          class="text-purple-700 hover:text-purple-800 text-sm font-medium inline-flex items-center"
        >
          {{ linkText }}
          <IconsArrowLeft class="h-4 w-4 ml-1" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
