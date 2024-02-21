<template>
  <div class="">
    <div
      class="form-container"
    >
      <div
        class="bg-[url('/bg-sidebar-desktop.svg')] bg-auto bg-no-repeat flex flex-col text-white p-8 gap-8 max-w-background w-full rounded-xl"
      >
        <div class="flex items-center gap-4">
          <div
            class="bg-light text-dark w-9 h-9 flex items-center justify-center rounded-full"
          >
            <span class="font-bold">1</span>
          </div>
          <div class="uppercase">
            <p class="font-normal text-xs">Step 1</p>
            <p class="font-bold">Your info</p>
          </div>
        </div>
        <div class="flex align-center gap-4">
          <div
            class="border-2 border-white w-9 h-9 flex items-center justify-center rounded-full"
          >
            <span class="font-bold text-white">2</span>
          </div>
          <div class="uppercase">
            <p class="text-xs">Step 2</p>
            <p class="font-bold">Select Plan</p>
          </div>
        </div>
        <div class="flex align-center gap-4">
          <div
            class="border-2 border-white w-9 h-9 flex items-center justify-center rounded-full"
          >
            <span class="font-bold text-white">3</span>
          </div>
          <div class="uppercase">
            <p class="text-xs">Step 3</p>
            <p class="font-bold">Add-ons</p>
          </div>
        </div>
        <div class="flex align-center gap-4">
          <div
            class="border-2 border-white w-9 h-9 flex items-center justify-center rounded-full"
          >
            <span class="font-bold text-white">4</span>
          </div>
          <div class="uppercase">
            <p class="text-xs">Step 4</p>
            <p class="font-bold">Summary</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col text-blue-400 m-auto">
        <h2 class="text-4xl mb-3 mt-10 text-l font-bold">Select your plan</h2>
        <p class="text-grey-300">
          You have the option of monthly or yearly billing.
        </p>
        <div class="mt-8 flex justify-start gap-5">
          <div
            class="bg-white p-4 rounded-lg border-2 border-grey-100 max-w-card w-full"
          >
            <div class="text-left rounded-full">
              <img src="../assets/images/arcade-icon.svg" alt="" />
            </div>
            <div class="mt-9 text-left">
              <p class="text-sm text-dark font-semibold">Advanced</p>
              <p class="text-grey-300 mt-2">$12/mo</p>
            </div>
          </div>
          <div
            class="bg-white p-4 rounded-lg border-2 border-grey-100 max-w-card w-full"
          >
            <div class="text-left rounded-full">
              <img src="../assets/images/advanced-icon.svg" alt="" />
            </div>
            <div class="mt-9 text-left">
              <p class="text-sm text-dark font-semibold">Advanced</p>
              <p class="text-grey-300 mt-2">$12/mo</p>
            </div>
          </div>
          <div
            class="bg-white p-4 rounded-lg border-2 border-grey-100 max-w-card w-full"
          >
            <div class="text-left rounded-full">
              <img src="../assets/images/pro-icon.svg" alt="" />
            </div>
            <div class="mt-9 text-left">
              <p class="text-sm text-dark font-semibold">Advanced</p>
              <p class="text-grey-300 mt-2">$12/mo</p>
            </div>
          </div>
        </div>
        <div
          class="flex justify-center gap-6 mt-8 w-full bg-grey-200 rounded-lg p-3"
        >
          <p class="font-bold">Monthly</p>
          <label
            for="toggleFour"
            class="flex items-center cursor-pointer select-none text-dark dark:text-white"
          >
            <div class="relative">
              <input type="checkbox" id="toggleFour" class="peer sr-only" />
              <div
                class="block h-8 rounded-full box bg-dark dark:bg-dark-2 w-14 peer-checked:bg-primary"
              ></div>
              <div
                class="absolute flex items-center justify-center w-6 h-6 transition bg-white rounded-full dot left-1 top-1 dark:bg-dark-5 peer-checked:translate-x-full peer-checked:dark:bg-white"
              ></div>
            </div>
          </label>
          <p class="text-grey-300">Yearly</p>
        </div>
        <div class="flex justify-between mt-20 items-center mb-2">
          <button class="text-grey-300">Go Back</button>

          <button
            class="bg-dark text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-900 transition duration-300 self-end"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
