<template>
  <div class="flex justify-center gap-6 mt-8 w-full bg-grey-200 rounded-lg p-3">
    <p :class="[activePlan ? 'text-grey-300' : 'font-bold']">Monthly</p>
    <label for="toggleFour" class="flex items-center cursor-pointer select-none text-dark dark:text-white">
      <div class="relative">
        <input v-model="activePlan" type="checkbox" id="toggleFour" class="peer sr-only" @change="toggleEvent"
          aria-label="Toggle between Monthly and Yearly plans" />
        <div class="block h-8 rounded-full box bg-dark dark:bg-dark-2 w-14 peer-checked:bg-primary"></div>
        <div
          class="absolute flex items-center justify-center w-6 h-6 transition bg-white rounded-full dot left-1 top-1 dark:bg-dark-5 peer-checked:translate-x-full peer-checked:dark:bg-white">
        </div>
      </div>
    </label>
    <p :class="[!activePlan ? 'text-grey-300' : 'font-bold']">Yearly</p>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const emit = defineEmits<{
  (event: 'toggleEvent', value: boolean): void;
}>()
const activePlan = ref<boolean>(false);

const toggleEvent = (): void => {
  emit("toggleEvent", activePlan.value);
}
</script>

<style scoped></style>

