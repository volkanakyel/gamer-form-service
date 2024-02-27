<template>
  <div class="step">
    <h2 class="step-title">Pick add-ons</h2>
    <p class="text-grey-300">
      Add-ons help enhance your gaming experience.
    </p>
    <div class="flex flex-col gap-4 mt-8">
      <div class="flex gap-4">
        <div class="add-ons-plan">
          <div class="flex items-center space-x-4">
            <div class="flex items-center gap-6">
              <input id="checked-checkbox" type="checkbox" value="" class="add-ons-checkbox" />
              <div>
                <h4 class="text-s font-semibold">Online service</h4>
                <p class="text-grey-300 text-base">
                  Access to multiplayer games
                </p>
              </div>
            </div>
          </div>
          <div>
            <p class="add-ons-price">
              +$10/mo
            </p>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="add-ons-plan">
          <div class="flex items-center space-x-4">
            <div class="flex items-center gap-6">
              <input id="checked-checkbox" type="checkbox" value="" class="add-ons-checkbox" />
              <div>
                <h4 class="text-s font-semibold">Larger storage</h4>
                <p class="text-grey-300 text-base">
                  Extra 1TB of cloud save
                </p>
              </div>
            </div>
          </div>
          <div>
            <p class="text-purple font-light text-base">+$20/mo</p>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="add-ons-plan">
          <div class="flex items-center space-x-4">
            <div class="flex items-center gap-6">
              <input id="checked-checkbox" type="checkbox" value="" class="add-ons-checkbox" />
              <div>
                <h4 class="text-s font-semibold">Customizable Profile</h4>
                <p class="text-grey-300 text-base">
                  Custom theme on your profile
                </p>
              </div>
            </div>
          </div>
          <div>
            <p class="add-ons-price">
              +$20/mo
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
