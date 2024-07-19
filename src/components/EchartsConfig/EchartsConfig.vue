<template>
  <div class="echarts-config-container">
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
      <!-- y轴配置 -->
      <YAxisConfig v-show="['Echarts-Line', 'Echarts-Bar'].includes(activeRect?.type)">
      </YAxisConfig>
      <!-- 饼图系列配置 -->
      <PieSeriesConfig v-show="['Echarts-Pie'].includes(activeRect?.type)"></PieSeriesConfig>
      <!-- 折线图系列配置 -->
      <LineSeriesConfig v-show="['Echarts-Line'].includes(activeRect?.type)"></LineSeriesConfig>
      <!-- 柱状图系列配置 -->
      <BarSeriesConfig v-show="['Echarts-Bar'].includes(activeRect?.type)"></BarSeriesConfig>
    </el-collapse>
  </div>
</template>

<script setup>
import useRectStore from '@/stores/rect'
import { computed, ref, watch } from 'vue'
import BarSeriesConfig from './BarSeriesConfig.vue'
import ColorConfig from './ColorConfig.vue'
import CommonConfig from './CommonConfig.vue'
import GridConfig from './GridConfig.vue'
import LegendConfig from './LegendConfig.vue'
import LineSeriesConfig from './LineSeriesConfig.vue'
import PieSeriesConfig from './PieSeriesConfig.vue'
import XAxisConfig from './XAxisConfig.vue'
import YAxisConfig from './yAxisConfig.vue'
const rectSotre = useRectStore()

const activeNames = ref([])

const activeRect = computed(() => rectSotre.activeRect)

watch(
  () => activeRect.value?.id,
  () => {
    activeNames.value = []
  }
)
</script>

<style scoped></style>
