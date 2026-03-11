<script setup lang="ts">
import indexRedirect from "~/middleware/index-redirect";

definePageMeta({
  middleware: indexRedirect,
});
</script>

<template>
  <Card>
    <TheTitle>Products</TheTitle>
  </Card>
</template>
