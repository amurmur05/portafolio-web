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
  <main class="mx-auto min-h-screen max-w-7xl px-6 py-8 text-[#605545] md:px-12">
    <RouterLink to="/" class="text-sm hover:underline">
      ← Back to portfolio
    </RouterLink>

    <h1 class="mb-4 mt-8 text-right text-4xl font-bold">AutoCAD</h1>

    <img
      src="/images/autocad-preview.png.jpeg"
      alt="AutoCAD wireframe of the assembled bookshelf and its components"
      class="h-28 w-full border-y border-black object-cover md:h-44"
    />

    <nav aria-label="AutoCAD projects" class="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-b border-black pb-4">
      <button
        type="button"
        :aria-pressed="isTable"
        :class="{ 'font-bold underline underline-offset-4': isTable }"
        class="cursor-pointer hover:underline"
        @click="project = 'table'"
      >
        01 Coffee Table
      </button>

      <button
        type="button"
        :aria-pressed="!isTable"
        :class="{ 'font-bold underline underline-offset-4': !isTable }"
        class="cursor-pointer hover:underline"
        @click="project = 'bookshelf'; detail = 'assembly'"
      >
        02 Wall Bookshelf
      </button>
    </nav>

   <section class="mx-auto mt-8 max-w-4xl">
  <div v-if="!isTable" class="mb-4 flex flex-wrap justify-center gap-6 text-sm">
    <button
      type="button"
      class="cursor-pointer underline-offset-4 hover:underline"
      :class="{ underline: detail === 'assembly' }"
      :aria-pressed="detail === 'assembly'"
      @click="detail = 'assembly'"
    >
      Assembly
    </button>

    <button
      type="button"
      class="cursor-pointer underline-offset-4 hover:underline"
      :class="{ underline: detail === 'joinery' }"
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

  <div class="mt-4 flex flex-col gap-4 border-t border-[#605545] pt-4 md:flex-row md:justify-between">
    <div>
      <p class="text-xs uppercase tracking-widest">
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