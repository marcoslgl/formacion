<script setup lang="ts">
// Aquí irá la lógica global del layout si la necesitas
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="p-4 bg-white shadow-sm">
      <nav class="container mx-auto">
        <h1 class="text-xl font-bold text-slate-800">Nuxt 4 Exercises</h1>
      </nav>
    </header>

    <main class="flex-grow container mx-auto p-4">
      <slot />
    </main>

    <footer class="p-4 text-center text-sm text-gray-500">&copy; 2026 - Mi Proyecto Nuxt</footer>
  </div>
</template>
