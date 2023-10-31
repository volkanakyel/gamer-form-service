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
        <h2 class="text-4xl mb-3 mt-10 text-l font-bold">Pick add-ons</h2>
        <p class="text-grey-300">
          Add-ons help enhance your gaming experience.
        </p>
        <div class="flex flex-col gap-4 mt-8">
          <div class="flex gap-4">
            <div
              class="p-4 border bg-grey-200 border-purple rounded-lg flex items-center justify-between max-w-addons w-full"
            >
              <div class="flex items-center space-x-4">
                <div class="flex items-center gap-6">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-purple rounded focus:bg-purple dark:focus:bg-purple dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-grey-300"
                  />

                  <div>
                    <h4 class="text-s font-semibold">Online service</h4>
                    <p class="text-grey-300 text-base">
                      Access to multiplayer games
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p class="text-blue-500 text-base text-purple font-light">
                  +$1/mo
                </p>
              </div>
            </div>
          </div>
          <div class="flex">
            <div
              class="p-4 border bg-grey-200 border-purple rounded-lg flex items-center justify-between max-w-addons w-full"
            >
              <div class="flex items-center space-x-4">
                <div class="flex items-center gap-6">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-purple rounded focus:bg-purple dark:focus:bg-purple dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-grey-300"
                  />

                  <div>
                    <h4 class="text-s font-semibold">Larger storage</h4>
                    <p class="text-grey-300 text-base">
                      Extra 1TB of cloud save
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p class="text-purple font-light text-base">+$1/mo</p>
              </div>
            </div>
          </div>
          <div class="flex">
            <div
              class="p-4 border bg-grey-200 border-purple rounded-lg flex items-center justify-between max-w-addons w-full"
            >
              <div class="flex items-center space-x-4">
                <div class="flex items-center gap-6">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-purple rounded focus:bg-purple dark:focus:bg-purple dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-grey-300"
                  />

                  <div>
                    <h4 class="text-s font-semibold">Customizable Profile</h4>
                    <p class="text-grey-300 text-base">
                      Custom theme on your profile
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p class="text-blue-500 text-base text-purple font-light">
                  +$1/mo
                </p>
              </div>
            </div>
          </div>
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
