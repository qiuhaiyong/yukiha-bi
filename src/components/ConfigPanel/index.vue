<!--
 * @Author: Yuk1ha
 * @Date: 2024-07-09 22:48:39
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-07-10 00:37:50
 * @FilePath: \yukiha-bi\src\components\ConfigPanel\index.vue
-->
<template>
  <div class="config-panel-container">
    <el-tabs v-model="activeName" stretch @tab-click="handleClick">
      <el-tab-pane label="User" name="first">11111</el-tab-pane>
      <el-tab-pane label="Config" name="second">2222</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>

<style>
.config-panel-container {
  width: var(--config-panel-width);
  height: calc(100vh - var(--tool-bar-height));
  border-left: 1px solid var(--el-border-color-light);
}
</style>
