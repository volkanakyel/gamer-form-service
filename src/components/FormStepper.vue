<template>
  <div class="step-infos">
    <div class="flex items-center gap-4">
      <div :class="activateStep(1)">
        <span class="font-bold">1</span>
      </div>
      <div class="uppercase hidden md:block">
        <p class="font-normal text-xs">Step 1</p>
        <p class="font-bold">Your info</p>
      </div>
    </div>
    <div class="flex align-center gap-4">
      <div :class="activateStep(2)">
        <span class="font-bold ">2</span>
      </div>
      <div class="uppercase hidden md:block">
        <p class="text-xs">Step 2</p>
        <p class="font-bold">Select Plan</p>
      </div>
    </div>
    <div class="flex align-center gap-4">
      <div :class="activateStep(3)">
        <span class="font-bold ">3</span>
      </div>
      <div class="uppercase hidden md:block">
        <p class="text-xs">Step 3</p>
        <p class="font-bold">Add-ons</p>
      </div>
    </div>
    <div class="flex align-center gap-4">
      <div :class="activateStep(4)">
        <span class="font-bold">4</span>
      </div>
      <div class="uppercase hidden md:block">
        <p class="text-xs">Step 4</p>
        <p class="font-bold">Summary</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  currentStep: number;
}>();

const activateStep = (step: number): string => {
  return props.currentStep === step || step === 4 && props.currentStep > 3 ? 'active-step' : 'inactive-step';
};

</script>

<style scoped></style>
