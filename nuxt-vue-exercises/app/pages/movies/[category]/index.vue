<script setup lang="ts">
import { mockMovies } from "@/data/mock";
import { useRoute } from "vue-router";
const route = useRoute();
const categoryName = route.params.category as string;
const movies = mockMovies.filter((movie) => movie.category === categoryName);
</script>

<template>
  <Card>
    <div>
      <TheTitle>{{ categoryName.charAt(0).toUpperCase() + categoryName.slice(1) }} Movies</TheTitle>
      <p>Explore the best {{ categoryName }} movies here!</p>
    </div>
    <div class="flex justify-between items-end mt-4">
      <ul class="list-disc pl-5 mt-2 text-slate-600 space-y-1">
        <li v-for="movie in movies" :key="movie.title">
          <nuxt-link
            :to="`/movies/${movie.category}/${movie.url}`"
            class="text-slate-600 hover:underline hover:text-green-700"
          >
            {{ movie.title }}
          </nuxt-link>
        </li>
      </ul>
      <nuxt-link to="/movies" class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800"> Back </nuxt-link>
    </div>
  </Card>
</template>
