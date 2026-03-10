<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <TheTitle>Count: {{ count }}</TheTitle>
  <p class="text-gray-600 mb-4">This is a simple counter component.</p>
  <div class="flex items-center space-x-4">
    <button @click="count--" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition">
      Decrease
    </button>
    <button @click="count++" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition">
      Increase
    </button>
  </div>
</template>
