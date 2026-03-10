<script setup lang="ts">
// Aquí irá la lógica global del layout si la necesitas
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="p-4 bg-white shadow-sm">
      <nav class="container mx-auto">
        <h1 class="text-xl font-bold text-green-600">Nuxt and Vue exercises</h1>
      </nav>
    </header>

    <main class="flex-grow container mx-auto p-4">
      <slot />
    </main>

    <footer class="p-4 text-center text-sm text-green-600">&copy; 2026 - My project</footer>
  </div>
</template>
