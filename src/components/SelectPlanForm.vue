<template>
  <div class="step">
    <h2 class="step-title">Select your plan</h2>
    <p class="text-grey-300">
      You have the option of monthly or yearly billing.
    </p>
    <div class="mt-8 flex flex-col md:flex-row justify-start gap-5">
      <PlanCard v-for="plan in planSelection" :key="plan.id" :plan="plan" @selectPlan="getSelectedPlan" />
    </div>
    <PlanComparisonToggle @toggleEvent="updatePlanType" />
  </div>
</template>

<script setup lang="ts">
import PlanComparisonToggle from './PlanComparisonToggle.vue';
import { Plan } from "../../services/formData"
import PlanCard from './PlanCard.vue';
import { inject, Ref } from "vue";

const planSelection = inject('planSelection') as Plan[];
const yearlyPlan = inject<Ref<boolean>>('yearlyPlan');

const updatePlanType = (): void => {
  planSelection.forEach((plan: Plan) => {
    plan.yearlyPlan = !plan.yearlyPlan
  })
  if (yearlyPlan) {
    yearlyPlan.value = !yearlyPlan.value;
  }
}

const getSelectedPlan = (planId: number): void => {
  planSelection.forEach((plan: Plan) => {
    plan.active = false;
    if (plan.id == planId) {
      plan.active = true;
    }
  })
}

</script>

<style scoped></style>
