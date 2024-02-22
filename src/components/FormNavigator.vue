<template>
  <div class="flex justify-between mt-20 items-center mb-2">
    <button v-if="hasPreviousStep" class="text-grey-300">Go Back</button>

    <button v-if="hasNextStep" @click="updateStep" class="next-btn">
      Next Step
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, computed } from 'vue'
type Emits = (event: 'updateStep') => void
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
const updateStep = () => {
  emit('updateStep')
}
</script>

<style scoped></style>
