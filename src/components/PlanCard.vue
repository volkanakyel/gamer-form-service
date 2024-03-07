<template>
  <div :class="plan.active ? 'plan-selection-active' : 'plan-selection-inactive'">
    <div class="plan-image">
      <img :src="dynamicSrc" alt="" />
    </div>
    <div class="md:mt-9 text-left">
      <p class="text-sm text-dark font-semibold">{{ plan.name }}</p>
      <p class="text-grey-300 mt-2">${{ plan.price }}/mo</p>
      <p v-show="plan.yearlyPlan" class="text-grey-300 mt-2 text-base">2 months free</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Plan } from "../../services/formData";
const props = defineProps<{
  plan: Plan;
}>();

const dynamicSrc = computed(() => {
  try {
    return `/${props.plan.image}`;
  } catch (e) {
    console.error(e);
    return '';
  }
});

const emit = defineEmits(['planActive']);

</script>

<style scoped></style>
