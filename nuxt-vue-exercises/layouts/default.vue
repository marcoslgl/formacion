<script setup lang="ts">
const icons = [
  { name: "GitHub", src: "/github.svg", href: "https://github.com/marcoslgl" },
  { name: "WhatsApp", src: "/whatsapp.svg", href: "/" },
];
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />

    <main class="flex-grow container mx-auto p-4">
      <slot />
    </main>

    <footer class="p-4 text-sm text-green-600 flex items-center justify-center">
      <span>Marcos Lopez</span>
      <div class="flex space-x-4 ml-4">
        <a v-for="icon in icons" :key="icon.name" :href="icon.href">
          <img :src="icon.src" :alt="icon.name" class="h-7 w-7" />
        </a>
      </div>
    </footer>
  </div>
</template>
