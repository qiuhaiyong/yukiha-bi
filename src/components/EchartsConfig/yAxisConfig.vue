<template>
  <el-collapse-item title="y轴" name="yAxis">
    <div class="gird-config-container config-container">
      <el-form :label-position="'left'" label-width="100px">
        <el-form-item label="类型">
          <el-select v-model="yAxisType">
            <el-option
              v-for="item in configOptions.axisTypeOptions"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <el-collapse v-model="activeNames">
        <el-collapse-item title="轴标签" name="axisLabel">
          <div class="config-container">
            <el-form :label-position="'left'" label-width="100px">
              <el-form-item label="编辑">
                <el-switch v-model="yAxisLabelShow"></el-switch>
              </el-form-item>
              <div v-if="yAxisLabelShow">
                <el-form-item label="文字字体">
                  <el-select v-model="yAxisLabelFontFamily">
                    <el-option
                      v-for="item in configOptions.fontFamliyOptions"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
                <el-form-item label="文字大小">
                  <el-input-number v-model="yAxisLabelFontSize" :min="1" />
                </el-form-item>
                <el-form-item label="文字粗细">
                  <el-select v-model="yAxisLabelFontWight">
                    <el-option
                      v-for="item in configOptions.fontWeightOptions"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
                <el-form-item label="文字颜色">
                  <el-color-picker v-model="yAxisLabelColor" />
                </el-form-item>
              </div>
            </el-form>
          </div>
        </el-collapse-item>
        <el-collapse-item title="轴单位" name="name">
          <div class="config-container">
            <el-form :label-position="'left'" label-width="100px">
              <el-form-item label="单位">
                <el-input v-model="yAxisName"></el-input>
              </el-form-item>
              <el-form-item label="文字字体">
                <el-select v-model="yAxisNameFontFamily">
                  <el-option
                    v-for="item in configOptions.fontFamliyOptions"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="文字大小">
                <el-input-number v-model="yAxisNameFontSize" :min="1" />
              </el-form-item>
              <el-form-item label="文字粗细">
                <el-select v-model="yAxisNameFontWight">
                  <el-option
                    v-for="item in configOptions.fontWeightOptions"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="文字颜色">
                <el-color-picker v-model="yAxisNameColor" />
              </el-form-item>
            </el-form>
          </div>
        </el-collapse-item>
        <el-collapse-item title="轴刻度" name="axisTick">
          <div class="config-container">
            <el-form :label-position="'left'" label-width="100px">
              <el-form-item label="显示">
                <el-switch v-model="yAxisTickShow"></el-switch>
              </el-form-item>
              <el-form-item label="是否朝内">
                <el-switch v-model="yAxisTickInside"></el-switch>
              </el-form-item>
              <el-form-item label="长度">
                <el-input-number v-model="yAxisTickLength" :min="0" />
              </el-form-item>
            </el-form>
          </div>
        </el-collapse-item>
        <el-collapse-item title="轴线" name="axisLine">
          <div class="config-container">
            <el-form :label-position="'left'" label-width="100px">
              <el-form-item label="显示">
                <el-switch v-model="yAxisLineShow"></el-switch>
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

const yAxisType = computed({
  get: () => activeRect.value?.options?.yAxis?.type,
  set: (val) => rectSotre.changeYAxis(val, 'type')
})
const activeNames = ref([])

const yAxisLabelShow = computed({
  get: () => activeRect.value?.options?.yAxis?.axisLabel?.show,
  set: (val) => rectSotre.changeYAxisLabel(val, 'show')
})

const yAxisLabelFontFamily = computed({
  get: () => activeRect.value?.options?.yAxis?.axisLabel?.fontFamily,
  set: (val) => rectSotre.changeYAxisLabel(val, 'fontFamily')
})

const yAxisLabelFontSize = computed({
  get: () => activeRect.value?.options?.yAxis?.axisLabel?.fontSize,
  set: (val) => rectSotre.changeYAxisLabel(val, 'fontSize')
})

const yAxisLabelFontWight = computed({
  get: () => activeRect.value?.options?.yAxis?.axisLabel?.fontWeight,
  set: (val) => rectSotre.changeYAxisLabel(val, 'fontWeight')
})

const yAxisLabelColor = computed({
  get: () => activeRect.value?.options?.yAxis?.axisLabel?.color,
  set: (val) => rectSotre.changeYAxisLabel(val, 'color')
})

const yAxisName = computed({
  get: () => activeRect.value?.options?.yAxis?.name,
  set: (val) => rectSotre.changeYAxis(val, 'name')
})
const yAxisNameFontFamily = computed({
  get: () => activeRect.value?.options?.yAxis?.nameTextStyle?.fontFamily,
  set: (val) => rectSotre.changeYAxisNameTextStyle(val, 'fontFamily')
})

const yAxisNameFontSize = computed({
  get: () => activeRect.value?.options?.yAxis?.nameTextStyle?.fontSize,
  set: (val) => rectSotre.changeYAxisNameTextStyle(val, 'fontSize')
})

const yAxisNameFontWight = computed({
  get: () => activeRect.value?.options?.yAxis?.nameTextStyle?.fontWeight,
  set: (val) => rectSotre.changeYAxisNameTextStyle(val, 'fontWeight')
})

const yAxisNameColor = computed({
  get: () => activeRect.value?.options?.yAxis?.nameTextStyle?.color,
  set: (val) => rectSotre.changeYAxisNameTextStyle(val, 'color')
})

const yAxisTickShow = computed({
  get: () => activeRect.value?.options?.yAxis?.axisTick?.show,
  set: (val) => rectSotre.changeYAxisTick(val, 'show')
})

const yAxisTickInside = computed({
  get: () => activeRect.value?.options?.yAxis?.axisTick?.inside,
  set: (val) => rectSotre.changeYAxisTick(val, 'inside')
})

const yAxisTickLength = computed({
  get: () => activeRect.value?.options?.yAxis?.axisTick?.length,
  set: (val) => rectSotre.changeYAxisTick(val, 'length')
})

const yAxisLineShow = computed({
  get: () => activeRect.value?.options?.yAxis?.axisLine?.show,
  set: (val) => rectSotre.changeYAxisLine(val, 'show')
})
</script>

<style scoped>
.config-container {
  padding: 0 10px;
}
</style>
