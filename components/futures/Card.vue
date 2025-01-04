<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: any
  badge?: string
  link?: string
  linkText?: string
}>()
</script>
<template>
  <div class="p-6 border rounded-lg hover:shadow-lg transition-shadow">
    <div class="flex gap-4">
      <div class="w-12 h-12 flex-shrink-0">
        <component :is="icon" class="w-full h-full text-gray-700" />
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