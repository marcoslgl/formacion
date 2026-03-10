<script setup lang="ts">
import { inject, type Ref } from "vue";

const emit = defineEmits<{
  (e: "example", message: string): void;
}>();

const sayHi = () => {
  emit("example", "Hello from child component");
};
</script>

<template>
  <div class="py-10 px-10 bg-white border rounded-lg shadow-sm">
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Child Component</h2>
    <p class="text-gray-600 mb-4">This is a child component. It can emit events to the parent component.</p>
    <template v-if="inject('message') && (inject('message') as Ref<string>).value.trim() !== ''">
      <p class="text-gray-600 mb-4">
        Message from parent: <span class="text-green-600">{{ inject('message') as Ref<string> }}</span>
      </p>
    </template>
    <button @click="sayHi" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
      Say Hi
    </button>
  </div>
</template>
