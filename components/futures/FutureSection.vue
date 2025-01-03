<template>
  <section class="py-16 px-4">
    <div class="container mx-auto max-w-7xl">
      <h2 class="text-3xl font-bold mb-12">Un apprentissage axé sur vos objectifs</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureCard
          title="Formation pratique"
          description="Perfectionnez vos compétences de manière efficace grâce à des exercices de codage, des exercices pratiques, des quiz et des espaces de travail alimentés par l'IA."
          :icon="AcademicCapIcon"
        />
        
        <FeatureCard
          title="Préparation aux certifications"
          description="Préparez-vous à obtenir des certifications reconnues par le secteur en relevant des défis concrets et décrochez des badges au passage."
          :icon="DocumentCheckIcon"
        />
        <FeatureCard
          title="Informations et analyses"
          description="Atteignez rapidement vos objectifs grâce à des informations avancées et à une équipe dédiée à la réussite des clients qui vous aidera à mettre en place un apprentissage efficace."
          :icon="ChartBarIcon"
          badge="Abonnement Enterprise"
          link="#"
          linkText="En savoir plus"
        />
        <FeatureCard
          title="Contenu personnalisable"
          description="Créez des parcours d'apprentissage personnalisés en fonction des objectifs de l'équipe et de l'organisation, et hébergez même votre propre contenu ainsi que vos propres ressources."
          :icon="Cog6ToothIcon"
          badge="Abonnement Enterprise"
          link="#"
          linkText="En savoir plus"
        />
      </div>
    </div>
  </section>
</template>

