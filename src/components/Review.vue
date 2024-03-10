<template>
  <div class="step">
    <h2 class="step-title">
      Finishing up
    </h2>
    <p class="text-grey-300">
      Double-check everything looks OK before confirming.
    </p>
    <div class="bg-grey-200 p-6 rounded-lg w-full md:max-w-addons mt-8">
      <!-- Title and Price -->
      <div class="flex justify-between items-center mb-4">
        <div>
          <h1 class="text-2xl text-dark font-semibold">{{ activePlan?.name }} ({{ planDuration }})</h1>
          <button class="text-blue-500 hover:underline">Change</button>
        </div>
        <p class="text-2xl font-semibold text-dark">${{ totalPlanPrice }} /mo</p>
      </div>

      <div class="border-t border-grey-300 my-4"></div>

      <!-- Services List -->
      <div v-for="(addOn, index) in planAdded" :key="index" class="flex justify-between items-center mb-4">
        <p>{{ addOn.title }}</p>
        <p class="text-dark">+${{ yearlyPlan ? addOn.yearlyPrice : addOn.monthlyPrice }} /mo</p>
      </div>
    </div>

    <div class="flex justify-between items-center mt-6">
      <h2 class="">Total (per month)</h2>
      <p class="text-2xl font-semibold text-purple">+${{ totalPrice }}/mo</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from "vue";
import { AddOnPlan, Plan } from "../../services/formData"

const planSelection = inject('planSelection') as Plan[];
const yearlyPlan = inject<boolean>('yearlyPlan');
const addedPlan = inject('addOnsPlan') as AddOnPlan[];

const activePlan = computed(() => planSelection?.find((plan: Plan) => plan.active));
const planAdded = computed(() => addedPlan.filter((plan: AddOnPlan) => plan.active));

const planDuration = yearlyPlan?.value ? 'Yearly' : 'Monthly';

// Total plan price
const totalPlanPrice = computed(() => yearlyPlan?.value ? activePlan.value?.yearlyPrice : activePlan.value?.price);
const totalAddedOnPrice = computed(() => {
  return planAdded.value.reduce((total, addOn) => {
    if (addOn.active) {
      return yearlyPlan?.value ? total + addOn.yearlyPrice : total + addOn.monthlyPrice;
    }
    return total;
  }, 0)
})
const totalPrice = computed(() => {
  return (totalPlanPrice?.value ?? 0) + totalAddedOnPrice.value;
});
</script>

<style scoped></style>
