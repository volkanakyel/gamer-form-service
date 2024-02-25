<template>
  <div class="step">
    <h2 class="step-title">Select your plan</h2>
    <p class="text-grey-300">
      You have the option of monthly or yearly billing.
    </p>
    <div class="mt-8 flex flex-col md:flex-row justify-start gap-5">
      <div class="plan-selection">
        <div class="text-left rounded-full">
          <img src="../assets/images/arcade-icon.svg" alt="" />
        </div>
        <div class="md:mt-9 text-left">
          <p class="text-sm text-dark font-semibold">Advanced</p>
          <p class="text-grey-300 mt-2">$12/mo</p>
        </div>
      </div>
      <div class="plan-selection">
        <div class="text-left rounded-full">
          <img src="../assets/images/advanced-icon.svg" alt="" />
        </div>
        <div class="md:mt-9 text-left">
          <p class="text-sm text-dark font-semibold">Advanced</p>
          <p class="text-grey-300 mt-2">$12/mo</p>
        </div>
      </div>
      <div class="plan-selection">
        <div class="text-left rounded-full">
          <img src="../assets/images/pro-icon.svg" alt="" />
        </div>
        <div class="md:mt-9 text-left">
          <p class="text-sm text-dark font-semibold">Advanced</p>
          <p class="text-grey-300 mt-2">$12/mo</p>
        </div>
      </div>
    </div>
    <div class="flex justify-center gap-6 mt-8 w-full bg-grey-200 rounded-lg p-3">
      <p class="font-bold">Monthly</p>
      <label for="toggleFour" class="flex items-center cursor-pointer select-none text-dark dark:text-white">
        <div class="relative">
          <input type="checkbox" id="toggleFour" class="peer sr-only" />
          <div class="block h-8 rounded-full box bg-dark dark:bg-dark-2 w-14 peer-checked:bg-primary"></div>
          <div
            class="absolute flex items-center justify-center w-6 h-6 transition bg-white rounded-full dot left-1 top-1 dark:bg-dark-5 peer-checked:translate-x-full peer-checked:dark:bg-white">
          </div>
        </div>
      </label>
      <p class="text-grey-300">Yearly</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
