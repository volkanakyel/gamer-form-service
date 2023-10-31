<template>
  <div class="">
    <div
      class="bg-white flex max-w-container shadow-md m-auto mt-20 p-4 gap-6 rounded-2xl"
    >
      <div
        class="bg-[url('/public/bg-sidebar-desktop.svg')] bg-auto bg-no-repeat flex flex-col text-white p-8 gap-8 max-w-background w-full rounded-xl"
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
        <h2 class="text-4xl text-dark mb-3 mt-10 text-l font-bold">
          Finishing up
        </h2>
        <p class="text-grey-300">
          Double-check everything looks OK before confirming.
        </p>
        <div class="bg-grey-200 p-6 rounded-lg w-full max-w-addons mt-8">
          <!-- Title and Price -->
          <div class="flex justify-between items-center mb-4">
            <div>
              <h1 class="text-2xl text-dark font-semibold">Arcade (Monthly)</h1>
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
        <div class="flex justify-between mt-20 items-center mb-2">
          <button class="text-grey-300">Go Back</button>

          <button
            class="bg-purple text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-900 transition duration-300 self-end"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
