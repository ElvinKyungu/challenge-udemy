<script setup lang="ts">

const categories = [
  { name: 'ChatGPT', count: '+3 M de participants', active: true },
  { name: 'Science des données', count: '+7 M de participants' },
  { name: 'Python', count: '+40.0 M de participants' },
  { name: 'Machine Learning', count: '+8 M de participants' },
  { name: 'Deep Learning', count: '+2 M de participants' },
  { name: 'Artificial Intelligence (AI)', count: '+3 M de participants' },
  { name: 'Artificial Intelligence (AI)', count: '+3 M de participants' },
  // { name: 'Artificial Intelligence (AI)', count: '+3 M de participants' },
]

const courses = [
  {
    id: 1,
    title: 'ChatGPT, GPT4, Midjourney | Formation IA Complète 2024',
    author: 'Jonathan Roux | IA ChatGPT | Python',
    rating: 4.6,
    reviews: 2019,
    price: 19.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZUUAiN7ep8xxc0qca6wTIOpgXyco5roW4A&s'
  },
  {
    id: 2,
    title: 'ChatGPT & IA : Formation complète ChatGPT, Dall-e',
    author: 'Yassine Rochd',
    rating: 4.6,
    reviews: 238,
    price: 19.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAZ7GtxqWOADwMHNYPZvbWr-U45I7SXAxQw&s'
  },
  {
    id: 3,
    title: 'ChatGPT Hacking Éthique : Le Cours Complet',
    author: 'Dr. First | Europe Innovation',
    rating: 4.5,
    reviews: 63,
    price: 19.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJcSO_9m5rwR3C5XeVRH0ue1N9XlOZvTiNjQ&s'
  },
  {
    id: 4,
    title: 'Guide ChatGPT : Prompts, Bots et Automatisation (MAJ 2024)',
    author: 'Dr. First | Europe Innovation',
    rating: 4.4,
    reviews: 72,
    price: 19.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlIejnm-lcyLCYrDyxBBvNRf6qWlBEWkk8nw&s'
  }
]
</script>
<template>
  <section class="py-12">
    <div class="container mx-auto max-w-7xl px-4">
      <h2 class="text-2xl lg:text-4xl font-bold mb-4 font-garamond">
        Toutes les compétences dont vous avez besoin au même endroit
      </h2>
      <p class="text-gray-600 mb-8">
        Des compétences essentielles aux sujets techniques, Udemy contribue à votre développement professionnel.
      </p>

      <div class="flex overflow-x-auto space-x-4 pb-4">
        <button
          v-for="category in categories"
          :key="category.name"
          class="px-4 py-2 rounded-full bg-gray-100 flex flex-col whitespace-nowrap text-sm"
          :class="{ 'bg-black ': category.active }"
        >
          <span class="font-medium">{{ category.name }}</span>
          <span class="text-xs ml-1 text-gray-500">{{ category.count }}</span>
        </button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <div v-for="course in courses" :key="course.id" class="border rounded-lg overflow-hidden">
          <img :src="course.image" :alt="course.title" class="w-full h-44 object-cover" />
          <div class="w-full h-[1px] bg-slate-300"></div>
          <div class="p-4">
            <h3 class="font-bold mb-2">{{ course.title }}</h3>
            <p class="text-sm text-gray-600 mb-2">{{ course.author }}</p>
            <div class="flex items-center mb-2">
              <span class="text-yellow-400 font-bold">{{ course.rating }}</span>
              <div class="flex text-yellow-400 ml-1">
                <IconsStar v-for="i in 5" :key="i" class="h-4 w-4" :class="{ 'text-gray-300': i > course.rating }" />
              </div>
              <span class="text-sm text-gray-600 ml-1">({{ course.reviews }})</span>
            </div>
            <p class="font-bold">{{ course.price }} €</p>
          </div>
        </div>
      </div>
      <div class="mt-10">
        <Btn bg-color="bg-white" hover-bg-color="hover:bg-gray-200" class="text-lg py-3" text-color="text-black px-5">
          Afficher tous les cours de la categorie Science des données
        </Btn>
      </div>
    </div>
  </section>
</template>

