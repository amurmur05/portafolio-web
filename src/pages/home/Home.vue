<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'

const previewImage = ref('')
</script>

<template>
  <main class="relative flex min-h-screen flex-col border border-black bg-warm-white">
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

      <header class="relative z-10 ml-6 mt-24 w-fit self-start justify-self-start pr-6 md:ml-16 md:mt-0 md:self-center md:-translate-y-6 md:pr-24">
        <h1
class="text-4xl font-bold sm:text-6xl md:text-8xl lg:text-[clamp(6rem,9vw,10rem)] leading-none"
  :class="previewImage ? 'text-white' : 'text-deep-wine'"
>
  PORTFOLIO
</h1>

        <hr
          class="my-3 -ml-6 -mr-6 md:-ml-16 md:-mr-24"
          :class="previewImage ? 'border-white' : 'border-black'"
        />

        <p
          class="-mr-2 text-right text-lg font-medium"
          :class="previewImage ? 'text-white' : 'text-deep-brown'"
        >
          by Aurora Murrocu
        </p>
      </header>

      <h2
        class="absolute bottom-1 left-10 z-10 text-2xl font-bold leading-none"
        :class="previewImage ? 'text-white' : 'text-deep-brown'"
      >
        MY PROJECTS
      </h2>
    </section>

   <div class="grid w-full grid-cols-3 border-t border-deep-brown bg-soft-olive px-2 [&>a]:text-warm-white [&>a:hover]:bg-deep-brown [&>a:hover]:text-warm-white max-md:[&>a]:px-1 max-md:[&>a]:text-xs md:gap-x-6 md:px-4">
      <Button
        variant="ghost"
        as-child
        class="h-10 px-1 text-xs text-deep-brown underline-offset-4 hover:underline focus-visible:underline md:px-4 md:text-lg"
      >
        <RouterLink
          to="/autocad"
          @mouseenter="previewImage = '/images/autocad-preview.png.jpeg'"
          @mouseleave="previewImage = ''"
          @focus="previewImage = '/images/autocad-preview.png.jpeg'"
          @blur="previewImage = ''"
        >
          AutoCAD
        </RouterLink>
      </Button>

      <Button
        variant="ghost"
        as-child
        class="h-10 px-1 text-xs text-deep-brown underline-offset-4 hover:underline focus-visible:underline md:px-4 md:text-lg"
      >
        <RouterLink
          to="/3d-modelling"
          @mouseenter="previewImage = '/images/3d-modelling-preview.png'"
          @mouseleave="previewImage = ''"
          @focus="previewImage = '/images/3d-modelling-preview.png'"
          @blur="previewImage = ''"
        >
          3D Modelling
        </RouterLink>
      </Button>

      <Button
        variant="ghost"
        as-child
        class="h-10 px-1 text-xs text-deep-brown underline-offset-4 hover:underline focus-visible:underline md:px-4 md:text-lg"
      >
        <RouterLink
          to="/graphic-design"
          @mouseenter="previewImage = '/images/graphic-design-preview.png'"
          @mouseleave="previewImage = ''"
          @focus="previewImage = '/images/graphic-design-preview.png'"
          @blur="previewImage = ''"
        >
          Graphic Design
        </RouterLink>
      </Button>
    </div>

  <div class="absolute right-0 top-6 z-20 flex h-10 items-center justify-end bg-soft-olive pl-4 pr-6 md:left-[65%] md:pr-24">
  <Button
    variant="ghost"
    as-child
    class="h-full rounded-none text-warm-white hover:bg-deep-brown hover:text-warm-white md:text-lg"
  >
    <RouterLink to="/about-me">ABOUT ME</RouterLink>
  </Button>
</div>
  </main>
</template>