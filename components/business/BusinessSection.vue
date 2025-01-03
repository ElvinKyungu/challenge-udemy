<script setup lang="ts">
import type { SubscriptionPlan } from '~/types/subscription'
import SubscriptionCard from './SubscriptionCard.vue';

const subscriptionPlans: SubscriptionPlan[] = [
  {
    title: 'Abonnement Personal',
    subtitle: 'Pour vous',
    audience: 'Individuel',
    price: 'À partir de $15.00 par mois',
    billingInfo: 'Facturation mensuelle ou annuelle. Annulez à tout moment.',
    buttonText: 'Bénéficiez d\'un essai gratuit',
    buttonLink: '#',
    features: [
      { text: 'Accès à plus de 12 000 cours parmi les meilleurs' },
      { text: 'Préparation aux certifications' },
      { text: 'Recommandations basées sur les objectifs' },
      { text: 'Exercices de codage optimisés par l\'IA' }
    ]
  },
  {
    title: 'Abonnement Team',
    subtitle: 'Pour votre équipe',
    audience: '2 à 20 personnes',
    price: '€28.00 par mois, par utilisateur',
    billingInfo: 'Facturation annuelle. Annulez à tout moment.',
    buttonText: 'Bénéficiez d\'un essai gratuit',
    buttonLink: '#',
    features: [
      { text: 'Accès à plus de 12 000 cours parmi les meilleurs' },
      { text: 'Préparation aux certifications' },
      { text: 'Recommandations basées sur les objectifs' },
      { text: 'Exercices de codage optimisés par l\'IA' },
      { text: 'Rapports d\'analytique et d\'adoption' }
    ]
  },
  {
    title: 'Abonnement Enterprise',
    subtitle: 'Pour l\'ensemble de votre entreprise',
    audience: 'Plus de 20 personnes',
    price: 'Contacter le service commercial pour obtenir la tarification',
    billingInfo: '',
    buttonText: 'Demander une démonstration',
    buttonLink: '#',
    features: [
      { text: 'Access to 27,000+ top courses' },
      { text: 'Préparation aux certifications' },
      { text: 'Recommandations basées sur les objectifs' },
      { text: 'Exercices de codage optimisés par l\'IA' },
      { text: 'Analyses et informations avancées' },
      { text: 'Équipe dédiée à la réussite des clients' },
      { text: 'Sélection internationale en 15 langues' },
      { text: 'Contenu personnalisable' }
    ]
  }
]
</script>
<template>
  <section class="py-16 px-4">
    <div class="container mx-auto max-w-7xl">
      <div class="text-left mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 font-garamond">
          Accélérez votre évolution ou celle de votre entreprise
        </h2>
        <p class="text-gray-600 max-w-3xl ">
          Atteignez plus rapidement vos objectifs grâce à l'un de nos abonnements ou programmes. 
          Essayez-en un gratuitement aujourd'hui, ou contactez le service commercial pour en savoir plus.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SubscriptionCard
          v-for="plan in subscriptionPlans"
          :key="plan.title"
          :plan="plan"
        />
      </div>
    </div>
  </section>
</template>