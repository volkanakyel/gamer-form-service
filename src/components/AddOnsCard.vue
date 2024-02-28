<template>
  <div class="flex gap-4">
    <div :class="plan.active ? 'active-plan' : 'inactive-plan'">
      <div class="flex items-center space-x-4">
        <div class="flex items-center gap-6">
          <input id="checked-checkbox" type="checkbox" :checked="plan.active" @change="toggleActive"
            class="add-ons-checkbox" />
          <div>
            <h4 class="text-s font-semibold">{{ plan.title }}</h4>
            <p class="text-grey-300 text-base">
              {{ plan.description }}
            </p>
          </div>
        </div>
      </div>
      <div>
        <p class="add-ons-price">
          +${{ plan.monthlyPrice }}/mo
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AddOnPlan } from "../../services/formData";

const props = defineProps<{
  plan: AddOnPlan;
}>();

const emit = defineEmits(['updatePlanActive']);

const toggleActive = (): void => {
  emit('updatePlanActive', !props.plan.active);
};
</script>
