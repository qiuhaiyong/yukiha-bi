<template>
  <el-collapse-item title="数据系列" name="barSeries">
    <div class="pieseries-config-container config-container">
      <el-form :label-position="'left'" label-width="100px">
        <el-form-item label="选择系列">
          <el-select v-model="activeSeriesIndex">
            <el-option v-for="item in seriesOptions" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="系列名称">
          <el-input v-model="seriesName"></el-input>
        </el-form-item>
        <el-form-item label="图形宽度">
          <el-input-number v-model="seriesBarWidth" :min="1" />
        </el-form-item>
      </el-form>
      <el-collapse v-model="activeNames">
        <el-collapse-item title="标签" name="tag">
          <div class="config-container">
            <el-form :label-position="'left'" label-width="100px">
              <el-form-item label="编辑">
                <el-switch v-model="seriesLableShow"></el-switch>
              </el-form-item>
              <el-form-item label="字体">
                <el-select v-model="seriesLabelFontFamily">
                  <el-option
                    v-for="item in configOptions.fontFamliyOptions"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="字号">
                <el-input-number v-model="seriesLabelFontSize" :min="1" />
              </el-form-item>
              <el-form-item label="字体粗细">
                <el-select v-model="seriesLabelFontWeight">
                  <el-option
                    v-for="item in configOptions.fontWeightOptions"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="标签位置">
                <el-select v-model="seriesLabelPostion">
                  <el-option
                    v-for="item in configOptions.barPositionOptions"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-form>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </el-collapse-item>
</template>

<script setup>
import useRectStore from '@/stores/rect'
import { computed, ref } from 'vue'
import configOptions from './configOptions'

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

const seriesLableShow = computed({
  get: () => activeSeries.value?.label?.show,
  set: (val) => rectSotre.changeSeriesLabel(activeSeriesIndex.value, val, 'show')
})

const seriesName = computed({
  get: () => activeSeries.value?.name,
  set: (val) => rectSotre.changeSeriesNormal(activeSeriesIndex.value, val, 'name')
})

const seriesBarWidth = computed({
  get: () => activeSeries.value?.barWidth,
  set: (val) => rectSotre.changeSeriesNormal(activeSeriesIndex.value, val, 'barWidth')
})

const seriesLabelFontFamily = computed({
  get: () => activeSeries.value?.label?.fontFamily,
  set: (val) => rectSotre.changeSeriesLabel(activeSeriesIndex.value, val, 'fontFamily')
})

const seriesLabelFontSize = computed({
  get: () => activeSeries.value?.label?.fontSize,
  set: (val) => rectSotre.changeSeriesLabel(activeSeriesIndex.value, val, 'fontSize')
})

const seriesLabelFontWeight = computed({
  get: () => activeSeries.value?.label?.fontWeight,
  set: (val) => rectSotre.changeSeriesLabel(activeSeriesIndex.value, val, 'fontWeight')
})

const seriesLabelPostion = computed({
  get: () => activeSeries.value?.label?.position,
  set: (val) => rectSotre.changeSeriesLabel(activeSeriesIndex.value, val, 'position')
})
</script>

<style scoped>
.config-container {
  padding: 0 10px;
}
</style>
