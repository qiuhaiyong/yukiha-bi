<!--
 * @Author: Yuk1ha
 * @Date: 2024-07-09 22:48:39
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-07-10 00:41:35
 * @FilePath: \yukiha-bi\src\components\ToolBar\index.vue
-->
<template>
  <div class="tool-bar-container">
    <div class="back-btn">
      <el-button link icon="ArrowLeft" type="primary">返回</el-button>
    </div>
  </div>
</template>

<script setup></script>

<style>
.tool-bar-container {
  width: 100vw;
  height: var(--tool-bar-height);
  border-bottom: 1px solid var(--el-border-color-light);
  display: flex;
  .back-btn {
    width: var(--zindex-panel-width);
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
}
</style>
