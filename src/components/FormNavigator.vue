<template>
  <div class="flex justify-between mt-20 items-center mb-2">
    <button class="text-grey-300">Go Back</button>

    <button @click="updateStep" class="next-btn">
      Next Step
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
type Emits = (event: 'updateStep') => void
const emit: Emits = defineEmits(['updateStep'])
const updateStep = () => {
  emit('updateStep')
}
</script>

<style scoped></style>
