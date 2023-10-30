<script setup lang="ts"></script>

<template>
  <div class="">
    <div
      class="bg-white flex max-w-5xl shadow-md m-auto mt-20 p-4 gap-6 rounded-2xl"
    >
      <div
        class="bg-[url('/public/bg-sidebar-desktop.svg')] bg-auto bg-no-repeat flex flex-col p-8 gap-8 max-w-xs w-full rounded-xl"
      >
        <div class="flex items-center gap-4">
          <div
            class="bg-blue-300 w-9 h-9 flex items-center justify-center rounded-full"
          >
            <span class="text-lg font-bold">1</span>
          </div>
          <div class="uppercase">
            <p class="">Step 1</p>
            <p class="">Your info</p>
          </div>
        </div>
        <div class="flex align-center gap-4">
          <div
            class="border-2 border-white w-9 h-9 flex items-center justify-center rounded-full"
          >
            <span class="text-lg font-bold text-white">2</span>
          </div>
          <div class="uppercase">
            <p>Step 2</p>
            <p>Your info</p>
          </div>
        </div>
        <div class="flex align-center gap-4">
          <div
            class="border-2 border-white w-9 h-9 flex items-center justify-center rounded-full"
          >
            <span class="text-lg font-bold text-white">3</span>
          </div>
          <div class="uppercase">
            <p>Step 3</p>
            <p>Your info</p>
          </div>
        </div>
        <div class="flex align-center gap-4">
          <div
            class="border-2 border-white w-9 h-9 flex items-center justify-center rounded-full"
          >
            <span class="text-lg font-bold text-white">4</span>
          </div>
          <div class="uppercase">
            <p>Step 4</p>
            <p>Your info</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col text-blue-400 m-auto">
        <h2 class="text-4xl mb-5 mt-6">Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
        <div class="mt-9">
          <div class="relative">
            <label for="name" class="text-lg font-semibold">Name</label>
            <input
              type="text"
              id="name"
              placeholder="e.g. Stephen King"
              class="border border-gray-300 rounded pl-4 py-2 w-full focus:outline-none focus:border-gray-500"
            />
          </div>
          <div class="relative mt-6">
            <label for="name" class="text-lg font-semibold"
              >Email Address</label
            >
            <input
              type="text"
              id="name"
              placeholder="e.g. Stephen King"
              class="border border-gray-300 rounded pl-4 py-2 w-full focus:outline-none focus:border-gray-500"
            />
          </div>
          <div class="relative mt-6">
            <label for="name" class="text-lg font-semibold">Phone Number</label>
            <input
              type="text"
              id="name"
              placeholder="e.g. Stephen King"
              class="border border-gray-300 rounded pl-4 py-2 w-full focus:outline-none focus:border-gray-500"
            />
          </div>
        </div>
        <button
          class="bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-900 transition duration-300 mt-24 mb-6 self-end"
        >
          Next Step
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
