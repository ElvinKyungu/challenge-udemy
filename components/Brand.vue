<script setup>
const brands = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  ''
]
</script>
<template>
  <section class="py-12 bg-gray-50">
    <div class="container mx-auto px-4 text-center">
      <p class="text-gray-600 mb-8">
        Plus de 16 000 entreprises et des millions de participants nous font confiance dans le monde entier
      </p>
      <div class="flex flex-wrap justify-center items-center gap-8">
        <img v-for="brand in brands" :key="brand" :src="brand" :alt="brand" class="h-12 grayscale opacity-60" />
      </div>
    </div>
  </section>
</template>