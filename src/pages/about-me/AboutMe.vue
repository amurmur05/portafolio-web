<template>
  <main class="relative isolate min-h-dvh overflow-hidden border border-deep-brown bg-soft-olive px-[12%] pb-32 pt-24 text-warm-white md:pb-40 md:pt-28">

    <!-- Geometrie bianche -->
    <svg
      viewBox="0 0 660 444"
      preserveAspectRatio="none"
      class="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full md:block"
      aria-hidden="true"
    >

      <!-- Arco orizzontale -->
      <path
        d="M -20 150 H 510 A 150 150 0 0 1 660 300"
        fill="none"
        stroke="currentColor"
        stroke-width="22"
        vector-effect="non-scaling-stroke"
        class="text-warm-white"
      />

      <!-- Arco verticale sottile -->
      <path
        d="M 460 464 V 230 A 200 170 0 0 1 660 60 H 680"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        vector-effect="non-scaling-stroke"
        class="text-warm-white"
      />

    </svg>

    <!-- Grande curva bordeaux -->
    <svg
      viewBox="0 0 660 444"
      preserveAspectRatio="none"
      class="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full text-deep-wine md:block"
      aria-hidden="true"
    >
      <path
        d="M 35 -30 V 190 A 180 205 0 0 0 215 395 H 680"
        fill="none"
        stroke="currentColor"
        stroke-width="32"
        vector-effect="non-scaling-stroke"
      />
    </svg>
<!-- Geometrie mobile -->
<svg
  viewBox="0 0 320 700"
  preserveAspectRatio="none"
  class="pointer-events-none absolute inset-0 -z-10 h-full w-full md:hidden"
  aria-hidden="true"
>
  <!-- Curva bianca -->
  <path
   d="M -20 140 H 230 A 120 120 0 0 1 350 260"
    fill="none"
    stroke="currentColor"
    stroke-width="1"
    vector-effect="non-scaling-stroke"
    class="text-warm-white"
  />

  <!-- Curva bordeaux -->
  <path
    d="M 15 -20 V 480 A 143 143 0 0 0 158 623 H 340"
    fill="none"
    stroke="currentColor"
    stroke-width="26"
    vector-effect="non-scaling-stroke"
    class="text-deep-wine"
  />
</svg>
    <!-- Contenuto -->
    <section class="relative w-full">

      <!-- Titolo -->
      <header class="w-fit pb-3">
        <h1 class="text-[13vw] font-bold leading-none text-warm-white md:text-[9vw]">
          ABOUT ME
        </h1>
      </header>

      <!-- Presentazione personale -->
      <div class="mt-12 max-w-[58ch] space-y-6 leading-relaxed text-warm-white md:ml-[8%] md:mt-20 md:text-lg">

        <p>
          My name is Aurora Murrocu, and I am a third-year Design student
          at the University of Sassari, currently completing an Erasmus
          experience at the Universitat Politècnica de València.
        </p>

        <p>
          I am particularly interested in interior design, spatial
          composition and 3D modelling. I enjoy exploring the relationship
          between shapes, materials and spaces, combining technical
          precision with creative experimentation.
        </p>

        <p>
          This portfolio brings together a selection of my academic
          projects and represents my ongoing development as a designer.
        </p>

      </div>

    </section>

    <!-- Back to portfolio -->
    <RouterLink
      to="/"
      class="absolute right-8 top-[88.96%] z-20 -translate-y-1/2 text-sm font-medium text-warm-white hover:underline md:right-16 md:text-lg"
    >
      ← BACK TO PORTFOLIO
    </RouterLink>

  </main>
</template>