<script setup lang="ts">
const props = defineProps<{
  propTitle: string;
}>();
</script>

<template>
  <div class="mb-6">
    <h1 class="text-4xl font-extrabold text-slate-800 tracking-tight">
      {{ props.propTitle }}
    </h1>
    <div class="h-1 w-20 bg-primary mt-2 rounded-full"></div>
  </div>
</template>
