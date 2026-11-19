<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'

const previewImage = ref('')
</script>

<template>
  <main class="relative flex min-h-screen flex-col border border-black bg-white">
    <section class="relative grid w-full flex-1 place-items-center">
      
<Transition
  enter-active-class="transition-opacity duration-700"
  enter-from-class="opacity-0!"
  leave-active-class="transition-opacity duration-300"
leave-to-class="opacity-0!"
>
      <img
        v-if="previewImage"
        :src="previewImage"
        alt=""
        class="pointer-events-none absolute inset-0 h-full w-full object-cover brightness-75"
      />
      </Transition>

      <header class="relative z-10 ml-6 mt-24 w-fit self-start justify-self-start pr-6 md:ml-16 md:mt-20 md:pr-24">
        <h1
          class="text-4xl font-bold sm:text-6xl md:text-8xl"
          :class="previewImage ? 'text-white' : 'text-[#605545]'"
        >
          PORTFOLIO
        </h1>

        <hr
          class="my-3 -ml-6 -mr-6 md:-ml-16 md:-mr-24"
          :class="previewImage ? 'border-white' : 'border-black'"
        />

        <p
          class="-mr-22 text-right text-xl font-medium"
          :class="previewImage ? 'text-white' : 'text-[#605545]'"
        >
          by Aurora Murrocu
        </p>
      </header>

      <h2
        class="absolute bottom-1 left-10 z-10 text-2xl font-bold leading-none"
        :class="previewImage ? 'text-white' : 'text-[#605545]'"
      >
        MY PROJECTS
      </h2>
    </section>

    <div class="grid w-full grid-cols-3 border-t border-black bg-white px-2 max-md:[&>button]:px-1 max-md:[&>button]:text-xs md:gap-x-6 md:px-4">
      <Button
        variant="ghost"
       class="h-10 text-lg text-[#605545] underline-offset-4 hover:underline focus-visible:underline"
        @mouseenter="previewImage = '/images/autocad-preview.png.jpeg'"
        @mouseleave="previewImage = ''"
        @focus="previewImage = '/images/autocad-preview.png.jpeg'"
@blur="previewImage = ''"
      >
        AutoCAD
      </Button>

      <Button
        variant="ghost"
        class="h-10 text-lg text-[#605545] underline-offset-4 hover:underline focus-visible:underline"
        @mouseenter="previewImage = '/images/3d-modelling-preview.png'"
        @mouseleave="previewImage = ''"
        @focus="previewImage = '/images/3d-modelling-preview.png'"
@blur="previewImage = ''"
      >
        3D Modelling
      </Button>

      <Button
        variant="ghost"
        class="h-10 text-lg text-[#605545] underline-offset-4 hover:underline focus-visible:underline"
        @mouseenter="previewImage = '/images/graphic-design-preview.png'"
        @mouseleave="previewImage = ''"
        @focus="previewImage = '/images/graphic-design-preview.png'"
@blur="previewImage = ''"
      >
        Graphic Design
      </Button>
    </div>

    <div
  class="absolute right-0 top-6 z-20 border-b pr-12 md:pr-24"
  :class="previewImage ? 'border-white' : 'border-black'"
>
  <Button
    variant="ghost"
    class="h-10 text-lg"
    :class="previewImage ? 'text-white' : 'text-[#605545]'"
  >
    ABOUT ME
  </Button>
</div>
    
  </main>
</template>