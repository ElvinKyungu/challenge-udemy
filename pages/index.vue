<script setup lang="ts">
import gsap from 'gsap';

type Banner = {
  title: string;
  subtitle: string;
  image: string;
};

const banners = ref<Banner[]>([
  {
    title: "Un apprentissage qui vous ressemble",
    subtitle: "Des compétences pour aujourd'hui (et demain). Nous vous accompagnons dans vos premiers pas.",
    image: "https://img-c.udemycdn.com/notices/web_carousel_slide/image/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg",
  },
  {
    title: "Toutes les compétences dont vous avez besoin",
    subtitle: "La technologie et le monde du travail évoluent rapidement. Avec nous, vous êtes plus rapide. Obtenez les compétences pour atteindre vos objectifs et rester compétitif.",
    image: "https://img-c.udemycdn.com/notices/web_carousel_slide/image/10ca89f6-811b-400e-983b-32c5cd76725a.jpg",
  },
]);

const activeIndex = ref<number>(0);
const slides = ref<Element[]>([]);

const nextSlide = (): void => {
  activeIndex.value = (activeIndex.value + 1) % banners.value.length;
  animateSlides();
};

const prevSlide = (): void => {
  activeIndex.value = (activeIndex.value - 1 + banners.value.length) % banners.value.length;
  animateSlides();
};

const animateSlides = (): void => {
  gsap.to(slides.value, {
    x: `-${activeIndex.value * 100}%`,
    duration: 0.7,
    ease: "power2.inOut",
  });
};

onMounted(() => {
  slides.value = Array.from(document.querySelectorAll('[ref="slides"]'));
});
</script>
<template>
  <div>
    <div class="notification bg-[#5022c3] flex justify-center items-center relative text-white text-center p-4">
      <p class="text-lg"><span class="font-bold">Prêt à vous mettre à la page ? </span>| Obtenez les compétences qu'il vous faut avec Udemy Business. 🚨</p>
      <IconsClose class="absolute right-5 cursor-pointer"/>
    </div>
    <header class="flex justify-between items-center p-5 bg-white shadow-lg relative z-40 w-full">
      <nav class="flex items-center space-x-4 w-3/5">
        <img 
          src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg" 
          class="w-24" 
          alt="logo udemy"
        >
        <nuxt-link to="">Categories</nuxt-link>
        <div class="w-full relative px-5 border border-black outline-none py-2 rounded-full">
          <IconsSearch class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"/>
          <input type="text" placeholder="Search" class="outline-none w-full px-5">
        </div>
      </nav>
      <nav>
        <ul class="flex space-x-4 items-center">
          <li>
            <nuxt-link to="">Udemy for Business</nuxt-link>
          </li>
          <li>
            <nuxt-link to="">Teach on Udemy</nuxt-link>
          </li>
          <li>
            <nuxt-link to=""><IconsCart/></nuxt-link>
          </li>
          <li>
            <nuxt-link to="">
              <Btn bgColor="bg-white" textColor="text-black" hoverBgColor="hover:bg-gray-200">
                Sign In
              </Btn>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="">
              <Btn bgColor="bg-black" textColor="text-white" hoverBgColor="hover:bg-black/70">
                Sign Up
              </Btn>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="">
              <Btn bgColor="bg-white" textColor="text-black" hoverBgColor="hover:bg-gray-200">
                <IconsGlobe class="w-5 h-5"/>
              </Btn>
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
    <!-- Bannière principale -->
    <div class="relative overflow-hidden">
      <div class="flex items-center space-x-4 w-full h-80 md:h-[400px] lg:h-[400px]">
        <div
          v-for="(banner, index) in banners"
          :key="index"
          ref="slides"
          class="absolute w-full h-full flex items-center justify-center transition-transform ease-in-out duration-700"
          :style="{ transform: `translateX(${(index - activeIndex) * 100}%)` }"
        >
          <div class="w-full h-full flex items-center md:w-3/4  relative">
            <div class=" p-8 max-w-lg absolute z-20 bg-white flex flex-col left-20 shadow-lg">
              <h2 class="text-3xl font-garamond md:text-4xl font-bold mb-4">{{ banner.title }}</h2>
              <p class="text-sm md:text-base text-gray-600">{{ banner.subtitle }}</p>
            </div>
            <div class="relative w-full h-full ">
              <img
                :src="banner.image"
                alt="Banner Image"
                class="hidden md:block h-full absolute w-full object-cover"
              />
              <button
                @click="prevSlide"
                class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
              >
                <IconsLeft/>
              </button>
              <button
                @click="nextSlide"
                class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
              >
                <IconsRight/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <main class="px-64">
      <div class="mt-10">
        <h1 class="font-garamond text-5xl font-semibold">Toutes les compétences dont vous avez besoin au même endroit</h1>
        <p class="text-gray-500 text-lg mt-3">Des compétences essentielles aux sujets techniques, Udemy contribue à votre développement professionnel.      </p>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Tailwind classes are used for styling. Additional CSS here if needed. */
</style>
