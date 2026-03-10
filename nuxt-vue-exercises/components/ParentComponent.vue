<script setup lang="ts">
const mesageReceived = ref("");
const manageMesage = (mesaje: string) => {
  mesageReceived.value = mesaje;
};
</script>

<template>
  <div class="py-10 px-10 bg-white rounded-lg shadow-md">
    <TheTitle>Parent Component</TheTitle>
    <p class="text-gray-600 mb-4">This is a parent component. It can receive events from the child component.</p>
    <ChildComponent @example="manageMesage" />
    <p v-if="mesageReceived" class="text-gray-600 mt-6">
      Message received from child: <span class="text-green-600">{{ mesageReceived }}</span>
    </p>
  </div>
</template>
