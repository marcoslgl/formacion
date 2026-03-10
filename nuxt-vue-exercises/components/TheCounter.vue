<script setup lang="ts">
import { ref } from "vue";
const { count, increment, decrement, reset } = useCounter();
const isMax = computed(() => count.value >= 10);
</script>

<template>
  <TheTitle
    >Count: <span :class="isMax ? 'text-green-500' : 'text-slate-800'">{{ count }}</span></TheTitle
  >
  <p class="text-gray-600 mb-4">This is a simple counter component.</p>

  <div class="flex items-center space-x-4">
    <button
      v-if="count > 0"
      @click="decrement()"
      class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-800 transition"
    >
      Decrease
    </button>
    <button
      v-if="count < 10"
      @click="increment()"
      class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800 transition"
    >
      Increase
    </button>
    <button
      v-if="count !== 0"
      @click="reset()"
      class="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition"
    >
      Reset
    </button>
  </div>
</template>
