<template>
  <footer class="bg-black text-white py-10">
    <div class="container mx-auto px-4">
      <!-- Section supérieure -->
      <div class="text-center mb-6">
        <p class="text-lg font-semibold">
          Les meilleures entreprises choisissent Udemy Business pour développer
          les compétences professionnelles dont elles ont besoin.
        </p>
        <div class="flex justify-center space-x-6 mt-4">
          <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"/>
          <img src="/volkswagen-logo.png" alt="Volkswagen" class="h-8" />
          <img src="/box-logo.png" alt="Box" class="h-8" />
          <img src="/netapp-logo.png" alt="NetApp" class="h-8" />
          <img src="/eventbrite-logo.png" alt="Eventbrite" class="h-8" />
        </div>
      </div>

      <!-- Grille des catégories -->
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <!-- Certification par émetteur -->
        <div>
          <h3 class="text-lg font-bold mb-4">Certifications par émetteur</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:underline">Certifications AWS</a></li>
            <li><a href="#" class="hover:underline">Certifications Six Sigma</a></li>
            <li><a href="#" class="hover:underline">Certifications Microsoft</a></li>
            <li><a href="#" class="hover:underline">Certifications Cisco</a></li>
            <li><a href="#" class="hover:underline">Certifications Tableau</a></li>
            <li><a href="#" class="hover:underline">Voir l'ensemble des certifications</a></li>
          </ul>
        </div>

        <!-- Autres colonnes -->
        <!-- Ajoutez les autres sections ici de la même manière -->
      </div>

      <!-- Lien bas de page -->
      <div class="mt-10 text-sm text-gray-400 text-center border-t border-gray-700 pt-6">
        <div class="flex justify-between items-center">
          <p>&copy; 2025 Udemy, Inc.</p>
          <div>
            <a href="#" class="hover:underline">Déclaration d'accessibilité</a> ·
            <a href="#" class="hover:underline">Politique de confidentialité</a> ·
            <a href="#" class="hover:underline">Conditions</a>
          </div>
          <button class="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700">Français</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
/* Ajoutez ici les styles supplémentaires si nécessaire */
</style>
