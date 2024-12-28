<script setup lang="ts">
import type { SubscriptionPlan } from '~/types/subscription'

defineProps<{
  plan: SubscriptionPlan
}>()
</script>
<template>
  <div class="p-6 bg-white rounded-lg relative border">
    <div class="h-2 w-full absolute bg-blue-400 left-0 top-0 rounded-t-lg"></div>
    <div class="mb-8">
      <h3 class="text-xl font-bold mb-2">{{ plan.title }}</h3>
      <p class="text-xs font-medium text-gray-600 mb-2">{{ plan.subtitle }}</p>
      <div class="flex items-center gap-2 mb-4">
        <IconsUser class="h-5 w-5 text-gray-600" />
        <span class="text-sm text-gray-600 font-medium">{{ plan.audience }}</span>
      </div>
      <div class="mb-4">
        <p class="font-bold text-lg">{{ plan.price }}</p>
        <p class="text-sm text-gray-600">{{ plan.billingInfo }}</p>
      </div>
      <NuxtLink
        :to="plan.buttonLink"
        class="w-full text-center flex items-center justify-center space-x-4 py-3 px-4 rounded bg-black text-white hover:bg-gray-800 transition-colors"
      >
        <span>{{ plan.buttonText }}</span>
        <IconsArrowRight class="h-5 w-5 ml-1" />
      </NuxtLink>
    </div>
    <ul class="space-y-3">
      <li v-for="feature in plan.features" :key="feature.text" class="flex items-start gap-2">
        <IconsCheckCircle class="h-5 w-5 text-udemy-green flex-shrink-0 text-green-600 mt-0.5" />
        <span class="text-sm">{{ feature.text }}</span>
      </li>
    </ul>
  </div>
</template>