<script setup lang="ts">
import type { Product } from "~/data/mock";

defineProps<{
  product: Product;
}>();
</script>

<template>
  <div
    class="border rounded-lg p-4 shadow-sm hover:scale-105 hover:shadow-md transition-transform flex flex-col justify-between h-full"
  >
    <div>
      <h2 class="text-xl font-bold mb-2">{{ product.title }}</h2>
      <p class="text-gray-600 mb-4">{{ product.description }}</p>
    </div>
    <div class="text-lg font-semibold text-green-600 mt-auto self-end">{{ product.price }}€</div>
  </div>
</template>
