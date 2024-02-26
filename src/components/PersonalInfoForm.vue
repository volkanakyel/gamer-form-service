<template>
  <div class="step">
    <h2 class="step-title">Personal info</h2>
    <p class="text-grey-300">
      Please provide your name, email address, and phone number.
    </p>
    <div class="mt-8">
      <label for="name">Name</label>
      <input type="text" id="name" placeholder="e.g. Stephen King" class="form-input" />
    </div>
    <div class="mt-6">
      <label for="email">Email Address</label>
      <input type="email" id="email" placeholder="e.g. stephenking@lorem.com" class="form-input" />
    </div>
    <div class=" mt-6">
      <label for="tel">Phone Number</label>
      <input type="tel" id="tel" placeholder="e.g. +1 234 567 890" class="form-input" />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
