<script setup>
const assets = `${import.meta.env.BASE_URL}projects/graphic-design/`
</script>

<template>
  <main class="min-h-screen bg-warm-white px-6 py-8 text-deep-brown md:px-12">

    <RouterLink to="/" class="text-sm hover:underline">
      ← Back to portfolio
    </RouterLink>

    <h1 class="mt-8 border-b border-deep-brown pb-4 text-4xl font-bold text-deep-wine md:text-6xl">
      Graphic Design
    </h1>

    <section class="mt-12">

      <div class="grid items-start gap-6 md:grid-cols-2">

        <div>
          <p class="mb-3 text-sm uppercase tracking-widest text-soft-olive">
            01 / Visual Communication
          </p>

          <h2 class="text-3xl font-bold text-deep-wine md:text-4xl">
            Sustainable Soil Management
          </h2>
        </div>

        <p class="max-w-xl leading-relaxed md:pt-8">
          A visual communication project exploring soil degradation
          and sustainable land management through infographics,
          illustrations and social media content.
        </p>

      </div>

      <div class="mx-auto mt-10 grid max-w-6xl items-center gap-8 md:grid-cols-3">
        <figure class="md:col-span-2">
          <a
            :href="assets + 'suolo-fronte.png'"
            target="_blank"
            rel="noopener"
          >
            <img
              :src="assets + 'suolo-fronte.png'"
              alt="Sustainable soil management infographic"
              class="h-auto w-full"
            />
          </a>

          <figcaption class="mt-3 border-b border-soft-olive pb-2 text-sm">
            01 — Main Infographic
          </figcaption>
        </figure>

        <figure>
          <a
            :href="assets + 'suolo-retro.png'"
            target="_blank"
            rel="noopener"
          >
            <img
              :src="assets + 'suolo-retro.png'"
              alt="Foldable brochure layout"
              class="h-auto w-full"
            />
          </a>

          <figcaption class="mt-3 border-b border-soft-olive pb-2 text-sm">
            02 — Foldable Brochure
          </figcaption>

          <p class="mt-4 text-sm leading-relaxed">
            A printed layout designed to be folded,
            connecting environmental issues with sustainable solutions.
          </p>
        </figure>

      </div>

    </section>

    <section class="mt-20 border-t border-deep-brown pb-16 pt-8">

      <div class="grid items-start gap-10 md:grid-cols-3">

        <div class="md:pt-12">

          <p class="mb-3 text-sm uppercase tracking-widest text-soft-olive">
            02 / Social Media
          </p>

          <h2 class="text-3xl font-bold text-deep-wine md:text-4xl">
            Instagram Carousel
          </h2>

          <div class="my-6 h-px w-24 bg-soft-olive"></div>

          <p class="max-w-xs leading-relaxed">
            A visual narrative showing the contrast between
            degraded environments and sustainable practices,
            adapted for digital communication.
          </p>

        </div>

        <div class="grid max-w-3xl grid-cols-2 gap-1 md:col-span-2">

          <figure>
            <a
              :href="assets + 'suolo-slide-2.png'"
              target="_blank"
              rel="noopener"
            >
              <img
                :src="assets + 'suolo-slide-2.png'"
                alt="Soil degradation"
                class="h-auto w-full"
              />
            </a>

            <figcaption class="mt-3 text-xs md:text-sm">
              01 — Soil Degradation
            </figcaption>
          </figure>

          <figure>
            <a
              :href="assets + 'suolo-slide-1.png'"
              target="_blank"
              rel="noopener"
            >
              <img
                :src="assets + 'suolo-slide-1.png'"
                alt="Sustainable solutions"
                class="h-auto w-full"
              />
            </a>

            <figcaption class="mt-3 text-xs md:text-sm">
              02 — Sustainable Solutions
            </figcaption>
          </figure>

        </div>

      </div>

    </section>

  </main>
</template>