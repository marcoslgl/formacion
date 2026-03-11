<template>
  <header class="h-16 bg-white shadow-sm flex justify-between items-center">
    <h1 class="ml-4 text-xl font-bold text-green-600"><nuxt-link to="/">Nuxt and Vue exercises</nuxt-link></h1>
    <nav class="flex h-full">
      <nuxt-link to="/" class="hover:bg-green-200 flex items-center px-4" active-class="font-bold text-green-600">
        Home
      </nuxt-link>
      <nuxt-link
        to="/counter"
        class="hover:bg-green-200 flex items-center px-4"
        active-class="font-bold text-green-600"
      >
        Counter
      </nuxt-link>
      <nuxt-link
        to="/catalog"
        class="hover:bg-green-200 flex items-center px-4"
        active-class="font-bold text-green-600"
      >
        Catalog
      </nuxt-link>
      <nuxt-link
        to="/products"
        class="hover:bg-green-200 flex items-center px-4"
        active-class="font-bold text-green-600"
      >
        Products
      </nuxt-link>
      <nuxt-link to="/movies" class="hover:bg-green-200 flex items-center px-4" active-class="font-bold text-green-600">
        Movies
      </nuxt-link>
    </nav>
  </header>
</template>
