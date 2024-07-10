<!--
 * @Author: Yuk1ha
 * @Date: 2024-07-09 22:48:39
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-07-10 00:22:00
 * @FilePath: \yukiha-bi\src\components\ZIndexPanel\index.vue
-->
<template>
  <div class="zindex-bar-container">zindex-bar-container</div>
</template>

<script setup></script>

<style scoped>
.zindex-bar-container {
  width: var(--zindex-panel-width);
  height: calc(100vh - var(--tool-bar-height));
  border-right: 1px solid var(--el-border-color-light);
}
</style>
