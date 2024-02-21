<script setup lang="ts">
import { ref, computed } from 'vue';
import PersonalInfoForm from "./components/PersonalInfoForm.vue";
import SelectPlanForm from "./components/SelectPlanForm.vue";
import AddOnsForm from "./components/AddOnsForm.vue";
import Review from "./components/Review.vue";
import ConfirmationBanner from "./components/ConfirmationBanner.vue";
import FormStepper from "./components/FormStepper.vue";
import type { DefineComponent } from 'vue';

type StepComponentMap = {
  [key: number]: DefineComponent<{}, {}, any>;
};

const stepComponents: StepComponentMap = {
  1: PersonalInfoForm,
  2: SelectPlanForm,
  3: AddOnsForm,
  4: Review,
  5: ConfirmationBanner,
};

const currentStep = ref<number>(1);
const currentComponent = computed<DefineComponent<{}, {}, any>>(() => stepComponents[currentStep.value]);
const updateFormStep = (): void => {
  currentStep.value++
}
</script>

<template>
  <div class="form-container">
    <FormStepper />
    <component :is="currentComponent" @updateStep="updateFormStep" />
  </div>
</template>
