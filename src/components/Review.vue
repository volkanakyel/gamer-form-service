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
          <h1 class="text-2xl text-dark font-semibold">{{ activePlanName }} ({{ planDuration }})</h1>
          <button class="text-blue-500 hover:underline">Change</button>
        </div>
        <p class="text-2xl font-semibold text-dark">$9/mo</p>
      </div>

      <!-- Divider -->
      <div class="border-t border-grey-300 my-4"></div>

      <!-- Services List -->
      <div class="flex justify-between items-center mb-4">
        <p>Online service</p>
        <p class="text-dark">+$1/mo</p>
      </div>
      <div class="flex justify-between items-center mb-4">
        <p>Larger storage</p>
        <p class="text-dark">+$2/mo</p>
      </div>

      <!-- Total Price -->
    </div>

    <div class="flex justify-between items-center mt-6">
      <h2 class="">Total (per month)</h2>
      <p class="text-2xl font-semibold text-purple">+$12/mo</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, Ref, computed } from "vue";
import { Plan } from "../../services/formData"

const planSelection = inject('planSelection') as Plan[];
const yearlyPlan = inject<Ref<boolean>>('yearlyPlan');

const activePlanName = computed(() => planSelection?.find((plan: Plan) => plan.active)?.name);
const planDuration = yearlyPlan?.value ? 'Yearly' : 'Monthly';
</script>

<style scoped></style>
