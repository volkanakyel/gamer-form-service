<template>
  <div class="step">
    <h2 class="step-title">Pick add-ons</h2>
    <p class="text-grey-300">
      Add-ons help enhance your gaming experience.
    </p>
    <div class="flex flex-col gap-4 mt-8">
      <AddOnsCard v-for="(plan, index) in addOnsPlan" :key="index" :plan="plan"
        @updatePlanActive="updatePlanActive(index, $event)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AddOnsCard from './AddOnsCard.vue';
import { addOnsPlan as planList, AddOnPlan } from "../../services/formData"

const addOnsPlan = ref<AddOnPlan[]>(planList);
const updatePlanActive = (index: number, newActive: boolean) => {
  addOnsPlan.value[index].active = newActive;
};
</script>

<style scoped></style>
