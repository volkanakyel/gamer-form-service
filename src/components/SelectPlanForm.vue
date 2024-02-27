<template>
  <div class="step">
    <h2 class="step-title">Select your plan</h2>
    <p class="text-grey-300">
      You have the option of monthly or yearly billing.
    </p>
    <div class="mt-8 flex flex-col md:flex-row justify-start gap-5">
      <div class="plan-selection">
        <div class="plan-image">
          <img src="../assets/images/arcade-icon.svg" alt="" />
        </div>
        <div class="md:mt-9 text-left">
          <p class="text-sm text-dark font-semibold">Arcade</p>
          <p class="text-grey-300 mt-2">$9/mo</p>
          <p v-show="planStatus" class="text-grey-300 mt-2 text-base">2 months free</p>
        </div>
      </div>
      <div class="plan-selection">
        <div class="plan-image">
          <img src="../assets/images/advanced-icon.svg" alt="" />
        </div>
        <div class="md:mt-9 text-left">
          <p class="text-sm text-dark font-semibold">Advanced</p>
          <p class="text-grey-300 mt-2">$12/mo</p>
          <p v-show="planStatus" class="text-grey-300 mt-2 text-base">2 months free</p>
        </div>
      </div>
      <div class="plan-selection">
        <div class="plan-image">
          <img src="../assets/images/pro-icon.svg" alt="" />
        </div>
        <div class="md:mt-9 text-left">
          <p class="text-sm text-dark font-semibold">Pro</p>
          <p class="text-grey-300 mt-2">$15/mo</p>
          <p v-show="planStatus" class="text-grey-300 mt-2 text-base">2 months free</p>
        </div>
      </div>
    </div>
    <PlanComparisonToggle @toggleEvent="updatePlanType" />
  </div>
</template>

<script setup lang="ts">
import PlanComparisonToggle from './PlanComparisonToggle.vue';
import { ref } from "vue";
const planStatus = ref<boolean>(false);
const updatePlanType = (planState: boolean): void => {
  planStatus.value = planState;
}

</script>

<style scoped></style>
