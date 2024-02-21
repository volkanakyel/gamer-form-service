<template>
  <div class="">
    <div class="form-container">
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
      <div class="step-content">
        <h2 class="text-4xl mb-3 mt-10 text-l font-bold">Personal info</h2>
        <p class="text-grey-300">
          Please provide your name, email address, and phone number.
        </p>
        <div class="mt-8">
          <div class="relative">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="e.g. Stephen King"
              class="border border-grey-100 rounded pl-4 py-2 w-full focus:outline-none focus:border-gray-500" />
          </div>
          <div class="relative mt-6">
            <label for="name">Email Address</label>
            <input type="email" id="name" placeholder="e.g. Stephen King"
              class="border border-grey-100 rounded pl-4 py-2 w-full focus:outline-none focus:border-gray-500" />
          </div>
          <div class="relative mt-6">
            <label for="name">Phone Number</label>
            <input type="text" id="name" placeholder="e.g. Stephen King"
              class="border border-grey-100 rounded pl-4 py-2 w-full focus:outline-none focus:border-gray-500" />
          </div>
        </div>
        <button
          class="bg-dark text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-900 transition duration-300 mt-20 mb-2 self-end">
          Next Step
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
