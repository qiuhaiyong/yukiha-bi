<template>
  <div class="screen-editor-container">
    <ToolBar></ToolBar>
    <div class="screen-editor-content">
      <ZIndexBar></ZIndexBar>
      <ScreenWrapper></ScreenWrapper>
      <ConfigPanel></ConfigPanel>
    </div>
  </div>
</template>

<script setup>
import ConfigPanel from '@/components/ConfigPanel/index.vue'
import ScreenWrapper from '@/components/ScreenWrapper/index.vue'
import ToolBar from '@/components/ToolBar/index.vue'
import ZIndexBar from '@/components/ZIndexPanel/index.vue'
</script>

<style>
.screen-editor-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .screen-editor-content {
    width: 100vw;
    height: 0;
    flex: 1;
    display: flex;
    gap: 5px;
  }
}
</style>
