import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);

  const increment = () => {
    if (count.value < 10) count.value++;
  };

  const decrement = () => {
    if (count.value > 0) count.value--;
  };

  const reset = () => {
    if (count.value !== 0) count.value = 0;
  };

  const stateMessage = computed(() => {
    if (count.value === 0) return "Minimum value";
    if (count.value === 10) return "Maximum value";
    return "Intermediate value";
  });

  const isMax = computed(() => count.value >= 10);

  return { count, increment, decrement, reset, stateMessage, isMax };
});
