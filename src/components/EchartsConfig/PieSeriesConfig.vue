<template>
  <el-collapse-item title="数据系列" name="pieSeries">
    <div class="pieseries-config-container config-container">
      <el-form :label-position="'left'" label-width="auto">
        <el-form-item label="选择系列">
          <el-select v-model="activeSeriesIndex">
            <el-option v-for="item in seriesOptions" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="系列名称">
          <el-input v-model="seriesName"></el-input>
        </el-form-item>
        <el-form-item label="内半径">
          <el-slider v-model="seriesInsideRadius" :marks="marks" />
        </el-form-item>
        <el-form-item label="外半径">
          <el-slider v-model="seriesOutSideRadius" :marks="marks" />
        </el-form-item>
        <el-form-item label="圆心横坐标">
          <el-slider v-model="seriesCenterX" :marks="marks" />
        </el-form-item>
        <el-form-item label="圆心纵坐标">
          <el-slider v-model="seriesCenterY" :marks="marks" />
        </el-form-item>
        <el-form-item label="南丁格尔图">
          <el-switch v-model="seriesRoseType"></el-switch>
        </el-form-item>
      </el-form>
      <el-collapse v-model="activeNames">
        <el-collapse-item title="标签" name="label">
          <div class="config-container">
            <el-form :label-position="'left'" label-width="auto">
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
                    v-for="item in configOptions.positionOptions"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-form>
          </div>
        </el-collapse-item>
        <el-collapse-item title="标签线" name="labelLine">
          <div class="config-container">
            <el-form :label-position="'left'" label-width="auto">
              <el-form-item label="编辑">
                <el-switch v-model="seriesLabelLineShow"></el-switch>
              </el-form-item>
              <el-form-item label="第一段长度">
                <el-input-number v-model="seriesLabelLineLength" :min="1" />
              </el-form-item>
              <el-form-item label="第二段长度">
                <el-input-number v-model="seriesLabelLineLength2" :min="1" />
              </el-form-item>
              <el-form-item label="平滑">
                <el-switch v-model="seriesLabelLineSmooth"></el-switch>
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

const activeNames = ref([])

const activeSeriesIndex = ref(0)

const activeSeries = computed(
  () => activeRect.value?.options?.series?.[activeSeriesIndex.value] || []
)

const seriesName = computed({
  get: () => activeSeries.value?.name,
  set: (val) => rectSotre.changeSeriesNormal(activeSeriesIndex.value, val, 'name')
})

const seriesLableShow = computed({
  get: () => activeSeries.value?.label?.show,
  set: (val) => rectSotre.changeSeriesLabel(activeSeriesIndex.value, val, 'show')
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

const seriesLabelLineShow = computed({
  get: () => activeSeries.value?.labelLine?.show,
  set: (val) => rectSotre.changeSeriesLabelLine(activeSeriesIndex.value, val, 'show')
})
const seriesLabelLineLength = computed({
  get: () => activeSeries.value?.labelLine?.length,
  set: (val) => rectSotre.changeSeriesLabelLine(activeSeriesIndex.value, val, 'length')
})
const seriesLabelLineLength2 = computed({
  get: () => activeSeries.value?.labelLine?.length2,
  set: (val) => rectSotre.changeSeriesLabelLine(activeSeriesIndex.value, val, 'length2')
})

const seriesLabelLineSmooth = computed({
  get: () => activeSeries.value?.labelLine?.smooth,
  set: (val) => rectSotre.changeSeriesLabelLine(activeSeriesIndex.value, val, 'smooth')
})

const marks = ref({
  50: {
    style: {
      color: '#1989FA'
    },
    label: '50%'
  }
})

const seriesInsideRadius = computed({
  get: () => parseInt(activeSeries.value?.radius?.[0]),
  set: (val) => rectSotre.changeSeriesRadius(activeSeriesIndex.value, 0, val + '%')
})

const seriesOutSideRadius = computed({
  get: () => parseInt(activeSeries.value?.radius?.[1]),
  set: (val) => rectSotre.changeSeriesRadius(activeSeriesIndex.value, 1, val + '%')
})

const seriesCenterX = computed({
  get: () => parseInt(activeSeries.value?.center?.[0]),
  set: (val) => rectSotre.changeSeriesCenter(activeSeriesIndex.value, 0, val + '%')
})
const seriesCenterY = computed({
  get: () => parseInt(activeSeries.value?.center?.[1]),
  set: (val) => rectSotre.changeSeriesCenter(activeSeriesIndex.value, 1, val + '%')
})

const seriesRoseType = computed({
  get: () => activeSeries.value?.roseType,
  set: (val) => rectSotre.changeSeriesNormal(activeSeriesIndex.value, val, 'roseType')
})
</script>

<style scoped>
.config-container {
  padding: 0 10px;
}
</style>
