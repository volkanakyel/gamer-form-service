<script setup lang="ts">
import PersonalInfoForm from "./components/PersonalInfoForm.vue";
import SelectPlanForm from "./components/SelectPlanForm.vue";
import AddOnsForm from "./components/AddOnsForm.vue";
import Review from "./components/Review.vue";
import { ref } from "vue";

const currentStep = ref(4);
</script>

<template>
  <PersonalInfoForm v-if="currentStep === 1" />
  <SelectPlanForm v-if="currentStep === 2" />
  <AddOnsForm v-if="currentStep === 3" />
  <Review v-if="currentStep === 4" />
</template>

<style scoped></style>
