<script setup lang="ts">
import { gsap } from 'gsap'

import future1 from '@/assets/images/future/future1.jpg'
import future2 from '@/assets/images/future/future2.jpg'
import future3 from '@/assets/images/future/future3.jpg'
import future4 from '@/assets/images/future/future4.jpg'

import french1 from '@/assets/images/future/french1.png'
import french2 from '@/assets/images/future/french2.png'
import french3 from '@/assets/images/future/french3.png'
import french4 from '@/assets/images/future/french4.png'

const frenchImages = [french1, french2, french3, french4]

const currentImage = ref(french1)
const activeCardIndex = ref(0)

const futureCards = [
  {
    title: "Formation pratique",
    description: "Perfectionnez vos compétences de manière efficace grâce à des exercices de codage, des exercices pratiques, des quiz et des espaces de travail alimentés par l'IA.",
    icon: future1,
    badge: "",
    link: "",
    linkText: "",
  },
  {
    title: "Préparation aux certifications",
    description: "Préparez-vous à obtenir des certifications reconnues par le secteur en relevant des défis concrets et décrochez des badges au passage.",
    icon: future2,
  },
  {
    title: "Informations et analyses",
    description: "Atteignez rapidement vos objectifs grâce à des informations avancées et à une équipe dédiée à la réussite des clients qui vous aidera à mettre en place un apprentissage efficace.",
    icon: future3,
    badge: "Abonnement Enterprise",
    link: "#",
    linkText: "En savoir plus",
  },
  {
    title: "Contenu personnalisable",
    description: "Créez des parcours d'apprentissage personnalisés en fonction des objectifs de l'équipe et de l'organisation, et hébergez même votre propre contenu ainsi que vos propres ressources.",
    icon: future4,
    badge: "Abonnement Enterprise",
    link: "#",
    linkText: "En savoir plus",
  }
]

function handleCardClick(index: number) {
  activeCardIndex.value = index
  gsap.to('.image-container', { opacity: 0, duration: 0.5, onComplete: () => {
    currentImage.value = frenchImages[index]
    gsap.to('.image-container', { opacity: 1, duration: 0.5 })
  }})
}
</script>

<template>
  <section class="py-16 px-4">
    <div class="container mx-auto max-w-7xl">
      <h2 class="text-3xl font-bold mb-12 font-garamond">Un apprentissage axé sur vos objectifs</h2>
      <div class="grid grid-cols-12 gap-20">
        <div class="col-span-5 space-y-5">
          <FuturesCard
            v-for="(card, index) in futureCards"
            :key="index"
            :title="card.title"
            :description="card.description"
            :icon="card.icon"
            :badge="card.badge"
            :link="card.link"
            :linkText="card.linkText"
            :isActive="index === activeCardIndex"
            @click="handleCardClick(index)"
          />
        </div>
        <div class="col-span-7">
          <div class="image-container w-full h-full">
            <img :src="currentImage" alt="Future" class="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
