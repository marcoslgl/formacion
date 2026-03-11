<script setup lang="ts">
import { mockMovies } from "@/data/mock";
import { useRoute } from "vue-router";
const route = useRoute();
const { category, title } = route.params;
const movie = mockMovies.find((m) => m.url === title);
</script>

<template>
  <Card v-if="movie">
    <div class="flex justify-between items-center mt-4">
      <TheTitle>{{ movie.title }}</TheTitle>
      <nuxt-link
        :to="`https://www.youtube.com`"
        class="text-green-600 underline hover:text-green-800 hover:scale-110 transition-transform"
      >
        Trailer of the movie
      </nuxt-link>
    </div>
    <div class="flex justify-between items-end mt-4">
      <p class="text-slate-600">
        {{ movie.description }}
      </p>

      <nuxt-link :to="`/movies/${movie.category}`" class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800">
        Back
      </nuxt-link>
    </div>
  </Card>
</template>
