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
      <div
        class="flex h-banner max-w-addons m-auto flex-col justify-center items-center text-blue-400"
      >
        <img
          src="../assets/images/confirmation-icon.svg"
          alt=""
          width="80"
          height="80"
        />
        <h2 class="text-4xl text-dark mb-3 mt-8 text-l font-bold">
          Thank you!
        </h2>
        <p class="text-gray-300 text-s text-center">
          Thanks for confirming your subscription! We hope you have fun using
          this platform. If you ever need support, please feel free to email us
          at
          <a href="mailto:volkan@uikelle.com" class="hover:text-purple"
            >volkan@uikelle.com</a
          >.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
