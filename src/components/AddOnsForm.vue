<template>
  <div class="step">
    <h2 class="step-title">Pick add-ons</h2>
    <p class="text-grey-300">
      Add-ons help enhance your gaming experience.
    </p>
    <div class="flex flex-col gap-4 mt-8">
      <AddOnsCard v-for="(plan, index) in addOnsPlan" :key="index" :plan="plan" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AddOnsCard from './AddOnsCard.vue';
import { addOnsPlan } from "../../services/formData"
</script>

<style scoped></style>
