<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'

const previewImage = ref('')
</script>

<template>
  <main class="relative flex min-h-screen flex-col overflow-hidden border border-deep-brown bg-warm-white">

    <section class="relative flex flex-1 overflow-hidden">

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

      <!-- Geometrie -->

      <svg
        viewBox="0 0 660 444"
        preserveAspectRatio="none"
        class="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
        aria-hidden="true"
      >

        <g
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          :class="previewImage ? 'text-white' : 'text-deep-brown'"
        >

          <path
            d="M -27 444
               V 53
               A 90 90 0 0 1 153 53
               V 444"
            vector-effect="non-scaling-stroke"
          />

          <path
            d="M 0 223
               H 335
               A 52 107 0 0 1 335 437
               H 0"
            vector-effect="non-scaling-stroke"
          />

          <path
            d="M 0 374
               H 480
               A 90 90 0 0 1 570 464"
            fill="none"
            stroke="currentColor"
            stroke-width="22"
            vector-effect="non-scaling-stroke"
            :class="previewImage ? 'text-white' : 'text-soft-olive'"
          />

        </g>

        <!-- Arco verticale principale -->

        <path
          d="M 104 444
             V 150
             A 90 90 0 0 1 284 150
             V 444"
          fill="none"
          stroke="currentColor"
          stroke-width="21"
          vector-effect="non-scaling-stroke"
          :class="previewImage ? 'text-white' : 'text-soft-olive'"
        />

      </svg>

      <!-- Firma con proporzioni indipendenti -->

      <svg
        viewBox="0 0 280 180"
        preserveAspectRatio="xMinYMin meet"
        class="pointer-events-none absolute left-[45.45%] top-[50.23%] z-10 hidden w-[15%] overflow-visible md:block"
        :class="previewImage ? 'text-white' : 'text-deep-brown'"
        role="img"
        aria-label="by Aurora Murrocu"
      >

        <defs>
          <path
            id="signature"
            d="M 0 23
               H 82
               C 145 23 185 70 196 135"
          />
        </defs>

        <text
          fill="currentColor"
          font-size="20"
          font-weight="500"
          style="font-family: inherit;"
        >
          <textPath
            href="#signature"
            startOffset="0%"
          >
            by Aurora Murrocu
          </textPath>
        </text>

      </svg>

<!-- Geometrie mobile -->
<svg
  viewBox="0 0 320 500"
  preserveAspectRatio="none"
  class="pointer-events-none absolute inset-0 h-full w-full md:hidden"
  aria-hidden="true"
>
  <!-- P monumentale -->
  <path
  d="M -30 -20
     H 85
     A 75 90 0 0 1 85 180
     H -30"
  fill="none"
  stroke="currentColor"
  stroke-width="65"
  :class="previewImage ? 'text-white' : 'text-soft-olive'"
/>
  <!-- Linea verticale sottile -->
  <path
    d="M 40 0 V 500"
    fill="none"
    stroke="currentColor"
    stroke-width="10"
    vector-effect="non-scaling-stroke"
    :class="previewImage ? 'text-white' : 'text-deep-brown'"
  />
</svg>
      <!-- Titolo principale -->
    

     <header
  class="absolute left-[14%] top-[43%] z-10
         md:bottom-[50%] md:left-[2%] md:top-auto"
>

 <h1
  class="text-[16vw] font-bold leading-none md:text-8xl lg:text-[clamp(6rem,9vw,10rem)]"
  :class="previewImage ? 'text-white' : 'text-deep-wine'"
  aria-label="Portfolio"
>
  <span class="hidden md:inline">PORTFOLIO</span>
  <span class="md:hidden">ORTFOLIO</span>
</h1>

  <p
    class="mt-3 text-right text-sm font-medium md:hidden"
    :class="previewImage ? 'text-white' : 'text-deep-brown'"
  >
    by Aurora Murrocu
  </p>

</header>

      <h2
       class="absolute bottom-3 left-[14%] z-10 text-lg font-bold leading-none md:bottom-2 md:left-[2%] md:text-2xl"
        :class="previewImage ? 'text-white' : 'text-deep-brown'"
      >
        MY PROJECTS
      </h2>

    </section>

    <!-- Barra inferiore -->

    <div class="relative z-20 grid w-full grid-cols-1 md:grid-cols-3 border-t border-deep-brown bg-soft-olive px-2 [&>a]:text-warm-white [&>a:hover]:bg-deep-brown [&>a:hover]:text-warm-white md:gap-x-6 md:px-4 divide-y divide-deep-brown/40 md:divide-y-0">
      

      <Button
        variant="ghost"
        as-child
        class="h-12 px-1 text-base hover:underline md:h-10 md:px-4 md:text-lg"
        
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
       class="h-12 px-1 text-base hover:underline md:h-10 md:px-4 md:text-lg"
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
        class="h-12 px-1 text-base hover:underline md:h-10 md:px-4 md:text-lg"
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

    <!-- About Me -->

    <div class="absolute right-0 top-0 z-50 h-16 w-40 md:h-24 md:w-[36%]">

      <!-- Geometria About Me desktop -->
<svg
  viewBox="0 0 400 96"
  preserveAspectRatio="none"
  class="pointer-events-none absolute inset-0 hidden h-full w-full text-soft-olive md:block"
  aria-hidden="true"
>
  <path
    d="M 28 -80
       V 12
       A 56 56 0 0 0 84 68
       H 400"
    fill="none"
    stroke="currentColor"
    stroke-width="40"
    vector-effect="non-scaling-stroke"
  />
</svg>

<!-- Geometria About Me mobile -->
<svg
  viewBox="0 0 320 100"
  preserveAspectRatio="none"
  class="pointer-events-none absolute right-0 top-0 h-24 w-screen text-soft-olive md:hidden"
  aria-hidden="true"
>
  <path
    d="M -20 45
       H 275
       A 65 65 0 0 0 340 -20"
    fill="none"
    stroke="currentColor"
    stroke-width="32"
    vector-effect="non-scaling-stroke"
  />
</svg>

      <Button
        variant="ghost"
        as-child
        class="absolute right-6 top-[65%] md:top-[71%] z-10 h-10 -translate-y-1/2 rounded-none text-warm-white hover:bg-deep-brown hover:text-warm-white md:right-24 md:text-lg"
      >
        <RouterLink to="/about-me">
          ABOUT ME
        </RouterLink>
      </Button>

    </div>

  </main>
</template>