<template>
  <button
    :class="[
      'p-2  rounded font-semibold border text-sm border-black transition-all duration-300',
      bgColor,
      hoverBgColor,
      textColor,
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  bgColor: {
    type: String,
    default: 'bg-blue-500',
  },
  hoverBgColor: {
    type: String,
    default: 'hover:bg-blue-600', 
  },
  textColor: {
    type: String,
    default: 'text-white',
  },
});
</script>

<style scoped>
</style>
