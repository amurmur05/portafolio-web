<script setup lang="ts">
import { computed, ref } from 'vue'

const project = ref<'table' | 'bookshelf'>('table')
const detail = ref<'assembly' | 'joinery'>('assembly')

const isTable = computed(() => project.value === 'table')

const sheet = computed(() => {
  if (isTable.value) return 6
  return detail.value === 'assembly' ? 4 : 2
})

const title = computed(() =>
  isTable.value ? 'Coffee Table' : 'Interlocking Wall Bookshelf',
)

const description = computed(() =>
  isTable.value
    ? 'A technical study of a round coffee table, from its overall form to the assembly of its crossed supports.'
    : 'A wall bookshelf made of interlocking components. Explore the assembled structure, then look closer at how the pieces fit together.',
)
</script>

<template>
  <main class="relative isolate min-h-screen overflow-hidden bg-black px-[8%] pb-8 pt-24 text-warm-white md:pt-28">

    <!-- Sfondo AutoCAD -->
    <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black">
      <img
        src="/images/autocad-background.png"
        alt=""
        class="h-full w-full scale-125 object-cover object-[25%_center] md:object-center"
      />
    </div>

    
    <!-- Back to portfolio -->
<div class="absolute right-0 top-0 z-20 h-16 w-full md:h-24 md:w-[36%]">

  <!-- Geometria desktop -->
  <svg
    viewBox="0 0 400 96"
    preserveAspectRatio="none"
    class="pointer-events-none absolute inset-0 hidden h-full w-full text-warm-white md:block"
    aria-hidden="true"
  >
    <path
      d="M 28 -80 V 12 A 56 56 0 0 0 84 68 H 400"
      fill="none"
      stroke="currentColor"
      stroke-width="40"
      vector-effect="non-scaling-stroke"
    />
  </svg>

  <!-- Geometria mobile -->
  <svg
    viewBox="0 0 320 100"
    preserveAspectRatio="none"
    class="pointer-events-none absolute right-0 top-0 h-24 w-full text-warm-white md:hidden"
    aria-hidden="true"
  >
    <path
      d="M -20 45 H 275 A 65 65 0 0 0 340 -20"
      fill="none"
      stroke="currentColor"
      stroke-width="32"
      vector-effect="non-scaling-stroke"
    />
  </svg>

  <RouterLink
    to="/"
    class="absolute right-8 top-[65%] -translate-y-1/2 text-sm font-medium text-black hover:underline md:right-16 md:top-[71%] md:text-lg"
  >
    ← BACK TO PORTFOLIO
  </RouterLink>

</div>

    <!-- Titolo -->
    <h1 class="mb-0 mt-8 text-left text-[14vw] font-bold leading-none text-warm-white md:text-[10vw]">
      AUTOCAD
    </h1>

    <!-- Barra dei progetti -->
    <nav
      aria-label="AutoCAD projects"
      class="relative -mx-[9.52%] h-14 md:h-16"
    >

      <svg
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
       class="pointer-events-none absolute bottom-0 left-0 hidden h-[100vh] w-full overflow-visible text-warm-white md:block"
        aria-hidden="true"
      >
        <path
          d="M -30 580
   H 727.27
   C 840 580 900 425 863.63 300
   C 840 180 790 80 727.27 -100"
          fill="none"
          stroke="currentColor"
          stroke-width="22"
          vector-effect="non-scaling-stroke"
        />
      </svg>
      <!-- Curva mobile -->
<svg
  viewBox="0 0 320 220"
  preserveAspectRatio="none"
  class="pointer-events-none absolute bottom-0 left-0 h-[220px] w-full overflow-visible text-warm-white md:hidden"
  aria-hidden="true"
>
  <path
    d="M -20 192 H 233
       C 290 192 305 125 305 65
       V -100"
    fill="none"
    stroke="currentColor"
    stroke-width="22"
    vector-effect="non-scaling-stroke"
  />
</svg>

      <div class="absolute bottom-[calc(100vh/30)] left-0 grid h-[22px] w-[72.7%] -translate-y-[-50%] grid-cols-2">

        <button
          type="button"
          :aria-pressed="isTable"
          :class="isTable ? 'bg-deep-wine text-white font-bold' : 'text-black'"
          class="cursor-pointer border-r border-black/30 text-xs text-black md:text-base leading-none"
          @click="project = 'table'"
        >
          01 Coffee Table
        </button>

        <button
          type="button"
          :aria-pressed="!isTable"
         :class="!isTable ? 'bg-deep-wine text-white font-bold' : 'text-black'"
          class="cursor-pointer text-xs text-black md:text-base leading-none"
          @click="project = 'bookshelf'; detail = 'assembly'"
        >
          02 Wall Bookshelf
        </button>

      </div>

    </nav>

    <!-- Tavole tecniche -->
    <section class="-mx-[5%] mt-8 max-w-4xl md:mx-auto">
      <div v-if="!isTable" class="mb-4 flex justify-center gap-6 text-sm">

        <button
          type="button"
          class="cursor-pointer px-5 py-2 transition-colors hover:bg-deep-wine"
          :class="detail === 'assembly' ? 'bg-deep-wine font-bold text-white' : 'text-warm-white'"
          :aria-pressed="detail === 'assembly'"
          @click="detail = 'assembly'"
        >
          Assembly
        </button>

        <button
          type="button"
          class="cursor-pointer px-5 py-2 transition-colors hover:bg-deep-wine"
          :class="detail === 'joinery' ? 'bg-deep-wine font-bold text-white' : 'text-warm-white'"
          :aria-pressed="detail === 'joinery'"
          @click="detail = 'joinery'"
        >
          Joinery details
        </button>

      </div>

      <Transition
        mode="out-in"
        enter-active-class="transition-opacity duration-300 motion-reduce:transition-none"
        leave-active-class="transition-opacity duration-150 motion-reduce:transition-none"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
      >
        <a
          :key="sheet"
          :href="`/projects/autocad/tavola%20${sheet}.pdf`"
          target="_blank"
          rel="noopener"
          class="block border border-stone-200 bg-white p-2 md:p-4"
          aria-label="Open drawing as a PDF in a new tab"
        >
          <img
            :src="`/projects/autocad/tavola-${sheet}.png`"
            :alt="`${title} — ${isTable ? 'technical drawing' : detail}`"
            class="mx-auto h-auto w-full"
          />
        </a>
      </Transition>

      <div class="mt-4 flex flex-col gap-4 border-t border-warm-white pt-4 md:flex-row md:justify-between">

        <div>
          <p class="text-sm uppercase tracking-widest">
            {{ isTable ? '01 / Object Study' : '02 / Joinery Study' }}
          </p>
          <h2 class="mt-1 text-2xl font-bold">{{ title }}</h2>
        </div>

        <div class="max-w-sm text-sm leading-relaxed md:text-right">
          <p>{{ description }}</p>
          <a
            :href="`/projects/autocad/tavola%20${sheet}.pdf`"
            target="_blank"
            rel="noopener"
            class="mt-2 inline-block underline underline-offset-4"
          >
            Open drawing (PDF) ↗
          </a>
        </div>

      </div>

    </section>

  </main>
</template>