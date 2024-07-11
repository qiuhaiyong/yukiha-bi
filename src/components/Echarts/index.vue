<template>
  <div ref="chartsContainer" :style="{ width, height }"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { cloneDeep } from 'lodash'
import { onMounted, onUnmounted, ref, watchEffect } from 'vue'
defineOptions({
  name: 'Echarts'
})
const props = defineProps({
  options: {
    type: Object,
    required: false
  },
  width: {
    type: [Number, String],
    required: false,
    default: '100%'
  },
  height: {
    type: [Number, String],
    required: false,
    default: '100%'
  }
})
const chartsContainer = ref()

let chartInstance = null

let observer = null // dom 监听

const handleResize = (entries) => {
  for (const entry of entries) {
    const { width, height } = entry.contentRect
    // console.log(`宽度：${width}px，高度：${height}px`);
    // 这里可以执行针对宽高变化的操作
    chartInstance?.resize()
  }
}

onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  chartInstance = echarts.init(chartsContainer.value)
  // 绘制图表
  watchEffect(() => {
    let handleOptions = cloneDeep(props.options)
    chartInstance?.setOption(handleOptions)
  })
  observer = new ResizeObserver(handleResize)
  observer.observe(chartsContainer.value)
})

onUnmounted(() => {
  chartInstance?.dispose()
  chartInstance = null

  // 在组件销毁前取消观察
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style></style>
