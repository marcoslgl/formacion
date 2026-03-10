<script setup lang="ts">
import { mockProducts } from "~/data/mock";
definePageMeta({ layout: "default" });
</script>

<template>
  <section class="py-10 px-10 bg-white rounded-lg shadow-md">
    <TheTitle>Catalog</TheTitle>
    <p class="text-gray-600">This is the catalog page. Where the products are listed.</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      <ProductCard v-for="product in mockProducts" :key="product.id" :product="product" />
    </div>
  </section>
</template>
º
