<template>
  <div class="step">
    <h2 class="step-title">Select your plan</h2>
    <p class="text-grey-300">
      You have the option of monthly or yearly billing.
    </p>
    <div class="mt-8 flex flex-col md:flex-row justify-start gap-5">
      <PlanCard v-for="plan in planSection" :key="plan.id" :plan="plan" />
    </div>
    <PlanComparisonToggle @toggleEvent="updatePlanType" />
  </div>
</template>

<script setup lang="ts">
import PlanComparisonToggle from './PlanComparisonToggle.vue';
import { planSelection, Plan } from "../../services/formData"
import PlanCard from './PlanCard.vue';
import { ref } from "vue";

const planSection = ref<Plan[]>(planSelection);

const updatePlanType = (): void => {
  planSection.value.forEach(plan => {
    plan.yearlyPlan = !plan.yearlyPlan
  })
}

</script>

<style scoped></style>
