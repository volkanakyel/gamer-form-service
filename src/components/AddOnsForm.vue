<template>
  <div class="step">
    <h2 class="step-title">Pick add-ons</h2>
    <p class="text-grey-300">
      Add-ons help enhance your gaming experience.
    </p>
    <div class="flex flex-col gap-4 mt-8">
      <AddOnsCard v-for="(plan, index) in addedPlan" :key="index" :yearlyPlan="yearlyPlan" :plan="plan"
        @updatePlanActive="updatePlanActive(index, $event)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import AddOnsCard from './AddOnsCard.vue';
import { AddOnPlan } from "../../services/formData"

const addedPlan = inject('addOnsPlan') as AddOnPlan[];
const updatePlanActive = (index: number, newActive: boolean) => {
  addedPlan[index].active = newActive;
};

const yearlyPlan = inject<boolean>('yearlyPlan');
</script>

<style scoped></style>
