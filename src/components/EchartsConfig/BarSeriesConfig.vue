<template>
  <el-collapse-item title="数据系列" name="barSeries">
    <div class="pieseries-config-container config-container">
      <el-form :label-position="'left'" label-width="auto">
        <el-form-item label="选择系列">
          <el-select v-model="activeSeriesIndex">
            <el-option v-for="item in seriesOptions" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
      </el-form>
      <el-collapse v-model="activeNames">
        <el-collapse-item title="标签" name="tag">
          <div>
            Operation feedback: enable the users to clearly perceive their operations by style
            updates and interactive effects;
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
  </el-collapse-item>
</template>

<script setup>
import useRectStore from '@/stores/rect'
import { computed, ref } from 'vue'

const rectSotre = useRectStore()

const activeRect = computed(() => rectSotre.activeRect)

const seriesOptions = computed(() => {
  let series = activeRect.value?.options?.series
  if (series && series.length) {
    return series.map((item, index) => ({ label: item.name, value: index }))
  } else {
    return []
  }
})

const activeSeriesIndex = ref(0)

const activeSeries = computed(
  () => activeRect.value?.options?.series?.[activeSeriesIndex.value] || []
)
const activeNames = ref([])
</script>

<style scoped>
.config-container {
  padding: 0 10px;
}
</style>
