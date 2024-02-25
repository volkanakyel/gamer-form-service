<template>
  <div class="step">
    <h2 class="step-title">Pick add-ons</h2>
    <p class="text-grey-300">
      Add-ons help enhance your gaming experience.
    </p>
    <div class="flex flex-col gap-4 mt-8">
      <div class="flex gap-4">
        <div
          class="p-4 border bg-grey-200 border-purple rounded-lg flex items-center justify-between max-w-addons w-full">
          <div class="flex items-center space-x-4">
            <div class="flex items-center gap-6">
              <input id="checked-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-purple rounded focus:bg-purple dark:focus:bg-purple dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-grey-300" />

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
          class="p-4 border bg-grey-200 border-purple rounded-lg flex items-center justify-between max-w-addons w-full">
          <div class="flex items-center space-x-4">
            <div class="flex items-center gap-6">
              <input id="checked-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-purple rounded focus:bg-purple dark:focus:bg-purple dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-grey-300" />

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
          class="p-4 border bg-grey-200 border-purple rounded-lg flex items-center justify-between max-w-addons w-full">
          <div class="flex items-center space-x-4">
            <div class="flex items-center gap-6">
              <input id="checked-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-purple rounded focus:bg-purple dark:focus:bg-purple dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-grey-300" />

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
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
