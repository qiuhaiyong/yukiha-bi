<template>
  <div class="demo-collapse">
    <el-collapse v-model="activeNames">
      <!-- 公共配置 -->
      <CommonConfig></CommonConfig>
      <!-- 颜色配置 -->
      <ColorConfig></ColorConfig>
      <!-- 图例配置 -->
      <LegendConfig
        v-show="['Echarts-Pie', 'Echarts-Line', 'Echarts-Bar'].includes(activeRect?.type)"
      >
      </LegendConfig>
      <!-- Grid配置 -->
      <GridConfig v-show="['Echarts-Line', 'Echarts-Bar'].includes(activeRect?.type)"></GridConfig>
      <!-- x轴配置 -->
      <XAxisConfig v-show="['Echarts-Line', 'Echarts-Bar'].includes(activeRect?.type)">
      </XAxisConfig>
      <!-- 饼图系列配置 -->
      <PieSeriesConfig v-show="['Echarts-Pie'].includes(activeRect?.type)"></PieSeriesConfig>

      <el-collapse-item title="Feedback" name="2">
        <div>
          Operation feedback: enable the users to clearly perceive their operations by style updates
          and interactive effects;
        </div>
        <div>
          Visual feedback: reflect current state by updating or rearranging elements of the page.
        </div>
      </el-collapse-item>
      <el-collapse-item title="Efficiency" name="3">
        <div>Simplify the process: keep operating process simple and intuitive;</div>
        <div>
          Definite and clear: enunciate your intentions clearly so that the users can quickly
          understand and make decisions;
        </div>
        <div>
          Easy to identify: the interface should be straightforward, which helps the users to
          identify and frees them from memorizing and recalling.
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import useRectStore from '@/stores/rect'
import { computed, ref } from 'vue'
import ColorConfig from './ColorConfig.vue'
import CommonConfig from './CommonConfig.vue'
import GridConfig from './GridConfig.vue'
import LegendConfig from './LegendConfig.vue'
import PieSeriesConfig from './PieSeriesConfig.vue'
import XAxisConfig from './XAxisConfig.vue'
const rectSotre = useRectStore()

const activeNames = ref([])

const activeRect = computed(() => rectSotre.activeRect)
</script>

<style scoped></style>
