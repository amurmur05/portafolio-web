<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
const previewImage = ref('')
</script>

<template>
  <main class="min-h-screen bg-white px-6 py-12 md:px-16">
    <section class="relative mx-auto mt-12 max-w-5xl border-1 border-black">
      <div class="pointer-events-none absolute -bottom-px -left-18 -right-0 border-t border-black"></div>
      <div class="pointer-events-none absolute -top-24 -bottom-0 -left-px border-l border-black"></div>
      <div class="pointer-events-none absolute -top-0 -bottom-76 -right-px border-r border-black"></div>
      <div class="pointer-events-none absolute -top-px -left-0 -right-18 border-t border-black"></div>
      <img
  v-if="previewImage"
  :src="previewImage"
  alt=""
 class="absolute inset-0 h-full w-full object-cover opacity-80 blur-sm"
/>
      <h2 class="absolute bottom-1 left-10 z-10 text-2xl font-bold leading-none" :class="previewImage ? 'text-white' : 'text-[#605545]'">
      
        MY PROJECTS
      </h2>

      <header class="relative z-10 mx-auto w-fit max-w-full px-4 py-20 md:py-28">
        <h1
          class="text-4xl font-bold sm:text-6xl md:text-8xl" :class="previewImage ? 'text-white' : 'text-[#605545]'">
      
          PORTFOLIO
        </h1>

       <hr class="my-3" :class="previewImage ? 'border-white' : 'border-black'" />

        <p class="text-right text-xl font-bold" :class="previewImage ? 'text-white' : 'text-[#605545]'">
  by Aurora Murrocu
</p>
      </header>
    </section>

    <div
      class="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-3"
    >
      <Button
        variant="outline"
        @mouseenter="previewImage = '/images/autocad-preview.png.jpeg'"
@mouseleave="previewImage = ''"
        class="h-24 border-[#605545] text-lg text-[#605545]"
      >
        AutoCAD
      </Button>

      <Button
        variant="outline"
        @mouseenter="previewImage = '/images/3d-modelling-preview.png'"
@mouseleave="previewImage = ''"
        class="h-24 border-[#605545] text-lg text-[#605545]"
      >
       3D Modelling
      </Button>

      

      <Button
        variant="outline"
        @mouseenter="previewImage = '/images/graphic-design-preview.png'"
@mouseleave="previewImage = ''"
        class="h-24 border-[#605545] text-lg text-[#605545]"
      >
        Graphic Design
      </Button>
    </div>

    <div class="mt-16 flex justify-center">
      <Button
        variant="outline"
        class="h-14 border-[#605545] px-12 text-lg text-[#605545]"
      >
        ABOUT ME
      </Button>
      
    </div>
  </main>
</template>