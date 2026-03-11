<script setup lang="ts">
import { mockMovies } from "@/data/mock";

const categories = [...new Set(mockMovies.map((movie) => movie.category))];
</script>

<template>
  <Card>
    <TheTitle>Movies</TheTitle>
    <p class="text-slate-600">List of categories:</p>
    <ul class="list-disc pl-5 mt-2 text-slate-600 space-y-1">
      <li class="hover:underline hover:text-green-700" v-for="category in categories" :key="category">
        <nuxt-link :to="`/movies/${category}`">{{ category.charAt(0).toUpperCase() + category.slice(1) }}</nuxt-link>
      </li>
    </ul>
  </Card>
</template>
