<script setup lang="ts">
import { watch, ref } from "vue";
const { count, increment, decrement, reset } = useCounter();
const isMax = computed(() => count.value >= 10);

const stateMessage = ref("");
watch(
  count,
  (newValue) => {
    if (newValue === 0) {
      stateMessage.value = "Minimum value";
    } else if (newValue === 10) {
      stateMessage.value = "Maximum value";
    } else {
      stateMessage.value = "Intermedium value";
    }
  },
  { immediate: true },
);
</script>

<template>
  <TheTitle
    >Count: <span :class="isMax ? 'text-green-500' : 'text-slate-800'">{{ count }}</span>
  </TheTitle>
  <p class="text-gray-600">
    Double Count: <span>{{ count * 2 }}</span>
  </p>
  <p class="text-gray-600 mb-4">{{ stateMessage }}</p>

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
