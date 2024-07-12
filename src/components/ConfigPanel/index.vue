<template>
  <div class="config-panel-container" @mousedown.stop>
    <el-tabs v-model="tabOneActiveName" stretch v-show="activeRect">
      <el-tab-pane label="配置" name="config">
        <!-- 基础配置 -->
        <BasicConfig v-model="configModel"></BasicConfig>
        <!-- 视图模式 -->
        <div class="view-model" v-if="configModel === 'view'">
          <EchartsConfig></EchartsConfig>
        </div>
        <!-- js模式 -->
        <div class="js-model" v-else>js模式</div>
      </el-tab-pane>
      <el-tab-pane label="数据" name="data">数据</el-tab-pane>
    </el-tabs>
    <el-tabs v-model="tabTowActiveName" stretch v-show="!activeRect">
      <el-tab-pane label="大屏配置" name="screenConfig">大屏配置</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import BasicConfig from '@/components/BasicConfig/index.vue'
import EchartsConfig from '@/components/EchartsConfig/EchartsConfig.vue'
import useRectStore from '@/stores/rect'
import { computed, ref } from 'vue'

defineOptions({
  name: 'ConfigPanel'
})
const rectSotre = useRectStore()

const tabOneActiveName = ref('config')

const tabTowActiveName = ref('screenConfig')

// view：视图模式 js：js模式
const configModel = ref('view')

const activeRect = computed(() => rectSotre.activeRect)
</script>

<style scoped>
.config-panel-container {
  width: var(--config-panel-width);
  height: calc(100vh - var(--tool-bar-height));
  border-left: 1px solid var(--el-border-color-light);

  :deep(.el-tabs__content) {
    padding: 0 10px;
    height: calc(100vh - 55px - var(--tool-bar-height));
    overflow-y: auto;
  }
  :deep(.el-tabs__content::-webkit-scrollbar) {
    display: none;
  }
}
</style>
