<template>
  <section class="py-16 px-4">
    <div class="container mx-auto max-w-7xl">
      <!-- Section 1: Témoignages -->
      <div>
        <h2 class="text-2xl font-bold mb-6 font-garamond md:text-3xl">
          Voir ce que d'autres réalisent grâce à l'apprentissage
        </h2>
        <div class="grid gap-6 md:grid-cols-4">
          <!-- Card 1 -->
          <div class="p-6 border rounded-lg shadow-md">
            <IconsCitation/>
            <blockquote class="text-gray-700">
              <p class="text-sm">
                Udemy a été désigné comme le
                <strong>cours en ligne ou le programme de certification le plus populaire</strong>
                pour apprendre à coder, selon l’enquête 2023 de StackOverflow auprès des développeurs.
              </p>
            </blockquote>
            <p class="mt-4 text-sm text-gray-500">
             <img 
                src="https://cms-images.udemycdn.com/96883mtakkm8/2PBcNgsQa3SvYWklkiN27r/5b8707cc79c8cae5774d5eb3b88b4001/logo_stackoverflow.svg"
              /> 
              <span> 076 réponses recueillies</span>
            </p>
            <a
              href="#"
              class="text-purple-700 mt-4  text-sm inline-block hover:underline"
            >
              Voir les cours sur le développement Web
            </a>
          </div>
  
          <!-- Card 2 -->
          <div class="p-6 border rounded-lg shadow-md">
            <IconsCitation/>
            <blockquote class="text-gray-700 text-sm">
              <p>
                Udemy a réellement changé la donne et a été un vrai guide pour moi dans la
                création de Dimensional.
              </p>
            </blockquote>
            <div class="flex items-center gap-4">
              <img 
                src="https://cms-images.udemycdn.com/96883mtakkm8/1Djz6c0gZLaCG5SQS3PgUY/54b6fb8c85d8da01da95cbb94fa6335f/Alvin_Lim.jpeg" 
                alt=""
                class="w-10 h-10 object-cover rounded-full"
              >
              <p class="mt-4 text-sm text-gray-500">
                Alvin Lim<br />Cofondateur technique, directeur technique chez Dimensional
              </p>
            </div>
            
            <a
              href="#"
              class="text-purple-700 text-sm mt-4 inline-block hover:underline"
            >
              Afficher ce cours iOS & Swift
            </a>
          </div>
          <!-- Card 3 -->
          <div class="p-6 border rounded-lg shadow-md">
            <IconsCitation/>
            <blockquote class="text-gray-700">
              <p class="text-sm">
                Udemy vous donne la possibilité d’être persévérant. J’ai appris exactement ce que j’avais
                besoin de savoir dans la vraie vie. La plate-forme m’a aidé à me mettre en valeur pour
                <strong>trouver un nouveau poste</strong>.
              </p>
            </blockquote>
            <div class="flex items-center gap-4">
              <img 
                src="https://cms-images.udemycdn.com/96883mtakkm8/6dT7xusLHYoOUizXeVqgUk/4317f63fe25b2e07ad8c70cda641014b/William_A_Wachlin.jpeg"
                alt=""
                class="w-10 h-10 object-cover rounded-full"
              >
              <p class="mt-4 text-sm text-gray-500">
                William A. Wachlin<br />Responsable des comptes partenaires chez Amazon Web Services
              </p>
            </div>
            <a
              href="#"
              class="text-purple-700 text-sm mt-4 inline-block hover:underline"
            >
              Afficher ce cours sur AWS
            </a>
          </div>
          <div class="p-6 border rounded-lg shadow-md">
            <IconsCitation/>
            <blockquote class="text-gray-700">
              <p class="text-sm">
                Udemy vous donne la possibilité d’être persévérant. J’ai appris exactement ce que j’avais
                besoin de savoir dans la vraie vie. La plate-forme m’a aidé à me mettre en valeur pour
                <strong>trouver un nouveau poste</strong>.
              </p>
            </blockquote>
            <div class="flex items-center gap-4">
              <img 
                src="https://cms-images.udemycdn.com/96883mtakkm8/4w9dYD4F64ibQwsaAB01Z4/c4610e9b1ac65589d8b1374ad10714e2/Ian_Stevens.png"
                alt=""
                class="w-10 h-10 object-cover rounded-full"
              >
              <p class="mt-4 text-sm text-gray-500">
                William A. Wachlin<br />Responsable des comptes partenaires chez Amazon Web Services
              </p>
            </div>
            <a
              href="#"
              class="text-purple-700 text-sm mt-4 inline-block hover:underline"
            >
              Afficher ce cours sur AWS
            </a>
          </div>
        </div>
      </div>
  
      <!-- Section 2: Rapport -->
      <div class="mt-16 grid gap-6 lg:grid-cols-2 items-center">
        <!-- Text Section -->
        <div>
          <h3 class="text-2xl font-bold mb-4 md:text-3xl font-garamond">
            Principales tendances pour l’avenir du travail
          </h3>
          <p class="text-gray-600 mb-6">
            L’IA générative et le leadership sont au cœur de l’économie actuelle basée sur les compétences.
            Pour en savoir plus, consultez le rapport 2024 sur les tendances mondiales en matière
            d’apprentissage et de compétences.
          </p>
          <Btn bg-color="bg-white" class="px-5 flex items-center gap-5" hover-bg-color="hover:bg-gray-200" text-color="text-black">
            <span>
              Obtenir le rapport
            </span>
            <IconsArrowRight class="w-5 h-5"/>
          </Btn>
        </div>
        <div>
          <img
            src="https://cms-images.udemycdn.com/96883mtakkm8/1qvvR0FDKv9chruIpia6Sc/b2af22a0097e47de4e4354237e3f378c/Onsite_Desktop_GLSTR25.png"
            alt="Rapport Global 2025"
            class="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  </section>
</template>