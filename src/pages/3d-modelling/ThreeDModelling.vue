<template>
  <main class="min-h-screen bg-white px-6 py-12 text-[#605545]">
    <RouterLink to="/" class="mb-6 inline-block hover:underline">
      ← Back to portfolio
    </RouterLink>

    <h1 class="text-4xl font-bold">3D Modelling</h1>
    <nav aria-label="3D modelling projects" class="my-6 flex gap-6 border-b border-black pb-3">
  <RouterLink
    to="/3d-modelling/blender"
    class="underline-offset-4 hover:underline"
    exact-active-class="font-bold underline"
  >
    Blender
  </RouterLink>

  <RouterLink
    to="/3d-modelling/sketchup"
    class="underline-offset-4 hover:underline"
    exact-active-class="font-bold underline"
  >
    SketchUp
  </RouterLink>
</nav>
    <RouterView />
  </main>
</template>