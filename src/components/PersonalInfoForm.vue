<template>
  <div class="step-content">
    <h2 class="text-4xl mb-3 mt-10 text-l font-bold">Personal info</h2>
    <p class="text-grey-300">
      Please provide your name, email address, and phone number.
    </p>
    <div class="mt-8">
      <div class="relative">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="e.g. Stephen King"
          class="border border-grey-100 rounded pl-4 py-2 w-full focus:outline-none focus:border-gray-500" />
      </div>
      <div class="relative mt-6">
        <label for="name">Email Address</label>
        <input type="email" id="name" placeholder="e.g. Stephen King"
          class="border border-grey-100 rounded pl-4 py-2 w-full focus:outline-none focus:border-gray-500" />
      </div>
      <div class="relative mt-6">
        <label for="name">Phone Number</label>
        <input type="text" id="name" placeholder="e.g. Stephen King"
          class="border border-grey-100 rounded pl-4 py-2 w-full focus:outline-none focus:border-gray-500" />
      </div>
    </div>
    <button @click="updateStep"
      class="bg-dark text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-900 transition duration-300 mt-20 mb-2 self-end">
      Next Step
    </button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['updateStep'])
const updateStep = () => {
  emit('updateStep')
}
</script>

<style scoped></style>
