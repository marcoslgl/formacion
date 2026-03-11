<script setup lang="ts">
/* import { watch, ref } from "vue";
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
); */
const counterStore = useCounterStore();
</script>

<template>
  <TheTitle
    >Count: <span :class="counterStore.isMax ? 'text-green-500' : 'text-slate-800'">{{ counterStore.count }}</span>
  </TheTitle>
  <p class="text-gray-600">
    Double Count: <span>{{ counterStore.count * 2 }}</span>
  </p>
  <p class="text-gray-600 mb-4">{{ counterStore.stateMessage }}</p>

  <div class="flex items-center space-x-4">
    <button
      v-if="counterStore.count > 0"
      @click="counterStore.decrement()"
      class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-800 transition"
    >
      Decrease
    </button>
    <button
      v-if="counterStore.count < 10"
      @click="counterStore.increment()"
      class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800 transition"
    >
      Increase
    </button>
    <button
      v-if="counterStore.count !== 0"
      @click="counterStore.reset()"
      class="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition"
    >
      Reset
    </button>
  </div>
</template>
