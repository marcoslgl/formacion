<script setup lang="ts">
import { provide, ref } from "vue";

const message = ref("");
provide("message", message);

const messageReceived = ref("");
const manageMessage = (message: string) => {
  messageReceived.value = message;
};
</script>

<template>
  <Card class="border">
    <TheTitle>Parent Component</TheTitle>
    <p class="text-gray-600 mb-4">This is a parent component. It can receive events from the child component.</p>
    <input
      v-model="message"
      class="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
      placeholder="Type a message to provide to child component"
    />
    <ChildComponent @example="manageMessage" />
    <p v-if="messageReceived" class="text-gray-600 mt-6">
      Message received from child: <span class="text-green-600">{{ messageReceived }}</span>
    </p>
  </Card>
</template>
