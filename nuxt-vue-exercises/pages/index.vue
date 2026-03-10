<script setup lang="ts">
// Composition API
const message = ref("¡Hola desde Nuxt 4!");

// Esto le dice a Nuxt que use el archivo layouts/default.vue
definePageMeta({
  layout: "default",
});
</script>

<template>
  <section class="py-10">
    <div class="bg-white p-8 rounded-lg shadow-md border-t-4 border-green-500">
      <h2 class="text-2xl font-bold mb-4">{{ message }}</h2>
      <p class="text-gray-600">
        Si ves este recuadro con sombra y el borde verde, **Tailwind** está funcionando. Si ves el Header y Footer, el
        **Layout** está funcionando.
      </p>
    </div>
  </section>
</template>
