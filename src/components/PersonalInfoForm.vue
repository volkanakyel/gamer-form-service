<template>
  <div class="step">
    <h2 class="step-title">Personal info</h2>
    <p class="text-grey-300">
      Please provide your name, email address, and phone number.
    </p>
    <div class="mt-8">
      <label for="name">Name</label>
      <input v-model="formData.name" type="text" id="name" placeholder="e.g. Stephen King" class="form-input" />
    </div>
    <div class="mt-6">
      <label for="email">Email Address</label>
      <input v-model="formData.email" type="email" id="email" placeholder="e.g. stephenking@lorem.com" class="form-input" />
    </div>
    <div class=" mt-6">
      <label for="tel">Phone Number</label>
      <input v-model="formData.phone" type="tel" id="tel" placeholder="e.g. +1 234 567 890" class="form-input" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue"
import { UserInfo } from '../../services/formData';

const formData = inject('formData') as UserInfo;
</script>

<style scoped></style>
