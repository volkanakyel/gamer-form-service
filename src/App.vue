<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import PersonalInfoForm from "./components/PersonalInfoForm.vue";
import SelectPlanForm from "./components/SelectPlanForm.vue";
import AddOnsForm from "./components/AddOnsForm.vue";
import Review from "./components/Review.vue";
import ConfirmationBanner from "./components/ConfirmationBanner.vue";
import FormStepper from "./components/FormStepper.vue";
import FormNavigator from "./components/FormNavigator.vue";
import LoadingForm from './components/LoadingForm.vue';
import type { DefineComponent } from 'vue';
import { mockFormLoader } from '../services/mockFormLoader';

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
const updateFormStep = (targetStep: number): void => {
  targetStep > 0 ? currentStep.value++ : currentStep.value--;
}

const showNavigator = computed(() => {
  return currentStep.value > 0 && currentStep.value < 5;
})
const loading = ref<boolean>(true);
onMounted(() => {
  mockFormLoader().then(() => {
    loading.value = false; // Hide loading form and show the real form content after the promise resolves
  });
});
</script>

<template>
  <LoadingForm v-if="loading" />
  <div v-else class="form-container">
    <FormStepper :currentStep="currentStep" />
    <div class="step-content">
      <transition name="fade" mode="out-in">
        <KeepAlive>
          <component :is="currentComponent" :key="currentStep" />
        </KeepAlive>
      </transition>
      <FormNavigator v-show="showNavigator" @updateStep="updateFormStep" :currentStep="currentStep" class="" />
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>
