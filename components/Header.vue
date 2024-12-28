<template>
  <header class="border-b">
    <div class="mx-auto px-4 py-4 flex items-center justify-between">
      <div class="flex md:hidden">
        <IconsBars class="w-7 h-7"/>
      </div>
      <div class="flex items-center space-x-4">
        <button class="lg:hidden">
          <Bars3Icon class="h-6 w-6" />
        </button>
        <img src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy" class="h-8" />
        <div class="hidden lg:block">
          <button class="text-sm font-medium">Catégories</button>
        </div>
      </div>
      <div class="flex md:hidden space-x-4">
        <IconsSearch class="w-6 h-6"/>
        <IconsCart class="w-6 h-6"/>
      </div>
      <div class="hidden lg:flex flex-1 mx-8">
        <div class="relative flex-1">
          <input
            type="text"
            placeholder="Rechercher"
            class="w-full px-4 py-2 border rounded-full pl-12 focus:outline-none focus:border-udemy-purple border-black/70"
          />
          <IconsSearch class="h-5 w-5 absolute left-5 top-2.5  text-gray-600" />
        </div>
      </div>

      <div class=" items-center space-x-4 hidden md:flex">
        <ul class="flex space-x-4 items-center">
          <li class="">
            <nuxt-link to="" class="cursor-pointer">Udemy for Business</nuxt-link>
          </li>
          <li class="">
            <nuxt-link to="" class="cursor-pointer">Teach on Udemy</nuxt-link>
          </li>
          <li class="">
            <nuxt-link to="" class="cursor-pointer"><IconsCart/></nuxt-link>
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
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>