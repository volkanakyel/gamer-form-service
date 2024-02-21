<template>
  <div class="">
    <div class="step-infos">
      <div class="flex items-center gap-4">
        <div class="bg-light text-dark w-9 h-9 flex items-center justify-center rounded-full">
          <span class="font-bold">1</span>
        </div>
        <div class="uppercase">
          <p class="font-normal text-xs">Step 1</p>
          <p class="font-bold">Your info</p>
        </div>
      </div>
      <div class="flex align-center gap-4">
        <div class="border-2 border-white w-9 h-9 flex items-center justify-center rounded-full">
          <span class="font-bold text-white">2</span>
        </div>
        <div class="uppercase">
          <p class="text-xs">Step 2</p>
          <p class="font-bold">Select Plan</p>
        </div>
      </div>
      <div class="flex align-center gap-4">
        <div class="border-2 border-white w-9 h-9 flex items-center justify-center rounded-full">
          <span class="font-bold text-white">3</span>
        </div>
        <div class="uppercase">
          <p class="text-xs">Step 3</p>
          <p class="font-bold">Add-ons</p>
        </div>
      </div>
      <div class="flex align-center gap-4">
        <div class="border-2 border-white w-9 h-9 flex items-center justify-center rounded-full">
          <span class="font-bold text-white">4</span>
        </div>
        <div class="uppercase">
          <p class="text-xs">Step 4</p>
          <p class="font-bold">Summary</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['updateStep'])
</script>

<style scoped></style>
