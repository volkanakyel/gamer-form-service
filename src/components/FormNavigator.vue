<template>
  <div
    class="flex justify-between mt-20 items-center mb-2 bg-white p-4 rounded-lg md:p-0 md:static fixed bottom-0 w-full">
    <button v-if="hasPreviousStep" @click="updateStep(-1)" class="text-grey-300">Go Back</button>

    <button v-if="hasNextStep" @click="updateStep(1)" class="next-btn">
      Next Step
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, computed } from 'vue'
type Emits = (event: 'updateStep', targetStep: number) => void
const props = defineProps({
  currentStep: {
    type: Number,
    default: 1,
  }
})

const hasPreviousStep = computed(() => {
  return props.currentStep > 1;
})

const hasNextStep = computed(() => {
  return props.currentStep < 5;
})

const emit: Emits = defineEmits(['updateStep'])
const updateStep = (targetStep: number) => {
  emit('updateStep', targetStep)
}
</script>

<style scoped></style>
