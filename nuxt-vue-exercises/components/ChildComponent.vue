<script setup lang="ts">
const emit = defineEmits<{
  (e: "example", mesaje: string): void;
}>();

const sayHi = () => {
  emit("example", "Hello from child component");
};
</script>

<template>
  <div class="py-10 px-10 bg-white border rounded-lg shadow-sm">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Child Component</h2>
    <p class="text-gray-600 mb-4">This is a child component. It can emit events to the parent component.</p>
    <button @click="sayHi" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
      Say Hi
    </button>
  </div>
</template>
