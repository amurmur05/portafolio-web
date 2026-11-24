<script setup lang="ts">

</script>

<template>
  <div class="grid overflow-clip">
    <RouterView v-slot="{ Component, route }">
      <Transition
        enter-active-class="transition-transform duration-700 ease-in-out motion-reduce:transition-none"
        leave-active-class="transition-transform duration-700 ease-in-out motion-reduce:transition-none"
       :enter-from-class="route.path === '/' ? '-translate-y-[100dvh]' : 'translate-y-[100dvh]'"
:leave-to-class="route.path === '/' ? 'translate-y-[100dvh]' : '-translate-y-[100dvh]'"
      >
        <div :key="route.path" class="col-start-1 row-start-1 min-w-0">
          <component :is="Component" />
        </div>
      </Transition>
    </RouterView>
  </div>
</template>