<script setup lang="ts">
import { mockProducts } from "~/data/mock";
definePageMeta({
  layout: "custom",
});
const counterStore = useCounterStore();
</script>

<template>
  <Card>
    <TheTitle>Catalog</TheTitle>
    <p class="text-gray-600">Global counter:{{ counterStore.count }}</p>
    <p class="text-gray-600">This is the catalog page. Where the products are listed.</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      <ProductCard v-for="product in mockProducts" :key="product.id" :product="product" />
    </div>
  </Card>
  <Card class="mt-4">
    <TheTitle>Global Count: {{ counterStore.count }}</TheTitle>
    <div class="flex items-center justify-between">
      <p class="text-gray-600">{{ counterStore.stateMessage }}</p>
      <button
        v-if="counterStore.count !== 0"
        @click="counterStore.reset()"
        class="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition"
      >
        Reset
      </button>
    </div>
  </Card>
</template>
