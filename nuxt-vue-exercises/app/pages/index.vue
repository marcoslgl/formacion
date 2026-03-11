<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>

<template>
  <Card>
    <TheTitle>Welcome to My Page</TheTitle>
    <p class="text-lg text-gray-600">This is the main content area of the page.</p>
  </Card>
  <Card class="mt-4">
    <ParentComponent />
  </Card>
</template>
