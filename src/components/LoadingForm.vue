<template>
  <div class="loader-overlay">
    <div class="fancy-spinner">
      <div class="ring"></div>
      <div class="ring"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>


<script setup lang="ts">
</script>

<style scoped>
.loader-overlay {
  position: fixed;
  /* Or 'absolute' if 'fixed' doesn't work well with your layout */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  /* Semi-transparent black */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  /* Ensure it's above other content */
}

.fancy-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 5rem;
  height: 5rem;
}

.fancy-spinner .ring {
  position: absolute;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border-width: 0.5rem;
  border-style: solid;
  border-color: transparent;
  animation: 2s fancy infinite alternate;
}

.fancy-spinner .ring:nth-child(1) {
  border-left-color: #979fd0;
  border-right-color: #979fd0;
}

.fancy-spinner .ring:nth-child(2) {
  border-top-color: #979fd0;
  border-bottom-color: #979fd0;
  animation-delay: 1s;
}

.fancy-spinner .dot {
  position: absolute;
  width: 1rem;
  height: 1rem;
  background: #979fd0;
  border-radius: 50%;
}

@keyframes fancy {
  to {
    transform: rotate(360deg) scale(0.5);
  }
}
</style>

