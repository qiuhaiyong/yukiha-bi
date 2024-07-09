<template>
  <div class="container">
    <div id="app">
      <VueDragResize :isActive="true" :w="200" :h="200">
        <h3>Hello World!</h3>
      </VueDragResize>
    </div>
  </div>
</template>

<script setup>
import VueDragResize from 'vue-drag-resize/src/component/vue-drag-resize.vue'
</script>

<style>
.container {
  width: 100vw;
  height: 100vh;
}
</style>
