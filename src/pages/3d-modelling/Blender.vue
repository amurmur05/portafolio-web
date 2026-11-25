<script setup lang="ts">
import { ref } from 'vue'

const setView = ref<'front' | 'angle'>('front')
const showTableAngle = ref(false)
const showBookshelfAngle = ref(false)

const setViews = {
  front: {
    src: '/projects/blender/scenographic-set.png',
    alt: 'Front view of the scenographic set with cream arches and olive panels',
  },
  angle: {
    src: '/projects/blender/scenographic-set-angle.png',
    alt: 'Three-quarter view of the scenographic set with the staircase in the foreground',
  },
}
</script>

<template>
  <section>
    <h2 class="text-2xl font-bold">Blender</h2>

    <figure class="mt-6">
      <div class="relative aspect-video bg-stone-100">
        <Transition
          enter-active-class="transition-opacity duration-300 motion-reduce:transition-none"
          leave-active-class="transition-opacity duration-300 motion-reduce:transition-none"
          enter-from-class="opacity-0"
          leave-to-class="opacity-0"
        >
          <img
            :key="setView"
            :src="setViews[setView].src"
            :alt="setViews[setView].alt"
            class="absolute inset-0 h-full w-full object-contain"
          />
        </Transition>
      </div>

      <figcaption class="mt-4 flex flex-wrap items-center justify-between gap-3">
        <span class="text-xl font-bold">Scenographic Set</span>

        <div class="flex flex-wrap gap-4 text-sm">
          <button
            type="button"
            :aria-pressed="setView === 'front'"
            :class="{ underline: setView === 'front' }"
            class="cursor-pointer underline-offset-4 hover:underline"
            @click="setView = 'front'"
          >
            Front View
          </button>

          <button
            type="button"
            :aria-pressed="setView === 'angle'"
            :class="{ underline: setView === 'angle' }"
            class="cursor-pointer underline-offset-4 hover:underline"
            @click="setView = 'angle'"
          >
            Three-Quarter View
          </button>
        </div>
      </figcaption>
    </figure>

    <div class="mt-12 grid items-start gap-8 md:grid-cols-2">
      <div>
        <h3 class="mb-4 text-2xl font-bold">Coffee Table</h3>

        <figure>
          <img
            :src="showTableAngle
              ? '/projects/blender/coffee-table-angle.png'
              : '/projects/blender/coffee-table-front.png'"
            :alt="showTableAngle
              ? 'Three-quarter view of the coffee table'
              : 'Front view of the coffee table'"
            width="1920"
            height="1080"
            loading="lazy"
            class="aspect-video w-full bg-stone-100 object-contain"
          />

          <figcaption class="mt-2 flex flex-wrap justify-between gap-2 text-sm">
            <span>{{ showTableAngle ? 'Three-Quarter View' : 'Front View' }}</span>

            <button
              type="button"
              class="cursor-pointer underline underline-offset-4"
              @click="showTableAngle = !showTableAngle"
            >
              {{ showTableAngle ? 'Show front view' : 'Show three-quarter view' }}
            </button>
          </figcaption>
        </figure>
      </div>

      <div>
        <h3 class="mb-4 text-2xl font-bold">Wall Bookshelf</h3>

        <figure>
          <img
            :src="showBookshelfAngle
              ? '/projects/blender/wall-bookshelf-angle.png'
              : '/projects/blender/wall-bookshelf-front.png'"
            :alt="showBookshelfAngle
              ? 'Three-quarter view of the wooden bookshelf'
              : 'Front view of the wooden bookshelf'"
            width="1920"
            height="1080"
            loading="lazy"
            class="aspect-video w-full bg-stone-100 object-contain"
          />

          <figcaption class="mt-2 flex flex-wrap justify-between gap-2 text-sm">
            <span>{{ showBookshelfAngle ? 'Three-Quarter View' : 'Front View' }}</span>

            <button
              type="button"
              class="cursor-pointer underline underline-offset-4"
              @click="showBookshelfAngle = !showBookshelfAngle"
            >
              {{ showBookshelfAngle ? 'Show front view' : 'Show three-quarter view' }}
            </button>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>