<template>
  <el-collapse-item title="x轴" name="xAxis">
    <div class="gird-config-container config-container">
      <el-form :label-position="'left'" label-width="auto">
        <el-form-item label="类型">
          <el-select v-model="xAxisType">
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
            <el-form :label-position="'left'" label-width="auto">
              <el-form-item label="编辑">
                <el-switch v-model="xAxisLabelShow"></el-switch>
              </el-form-item>
              <div v-if="xAxisLabelShow">
                <el-form-item label="文字字体">
                  <el-select v-model="xAxisLabelFontFamily">
                    <el-option
                      v-for="item in configOptions.fontFamliyOptions"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
                <el-form-item label="文字大小">
                  <el-input-number v-model="xAxisLabelFontSize" :min="1" />
                </el-form-item>
                <el-form-item label="文字粗细">
                  <el-select v-model="xAxisLabelFontWight">
                    <el-option
                      v-for="item in configOptions.fontWeightOptions"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
                <el-form-item label="文字颜色">
                  <el-color-picker v-model="xAxisLabelColor" />
                </el-form-item>
              </div>
            </el-form>
          </div>
        </el-collapse-item>
        <el-collapse-item title="轴单位" name="name">
          <div class="config-container">
            <el-form :label-position="'left'" label-width="auto">
              <el-form-item label="单位">
                <el-input v-model="xAxisName"></el-input>
              </el-form-item>
              <el-form-item label="文字字体">
                <el-select v-model="xAxisNameFontFamily">
                  <el-option
                    v-for="item in configOptions.fontFamliyOptions"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="文字大小">
                <el-input-number v-model="xAxisNameFontSize" :min="1" />
              </el-form-item>
              <el-form-item label="文字粗细">
                <el-select v-model="xAxisNameFontWight">
                  <el-option
                    v-for="item in configOptions.fontWeightOptions"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="文字颜色">
                <el-color-picker v-model="xAxisNameColor" />
              </el-form-item>
            </el-form>
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
import configOptions from './configOptions'

const rectSotre = useRectStore()

const activeRect = computed(() => rectSotre.activeRect)

const xAxisType = computed({
  get: () => activeRect.value?.options?.xAxis?.type,
  set: (val) => rectSotre.changeXAxis(val, 'type')
})
const activeNames = ref([])

const xAxisLabelShow = computed({
  get: () => activeRect.value?.options?.xAxis?.axisLabel?.show,
  set: (val) => rectSotre.changeXAxisLabel(val, 'show')
})

const xAxisLabelFontFamily = computed({
  get: () => activeRect.value?.options?.xAxis?.axisLabel?.fontFamily,
  set: (val) => rectSotre.changeXAxisLabel(val, 'fontFamily')
})

const xAxisLabelFontSize = computed({
  get: () => activeRect.value?.options?.xAxis?.axisLabel?.fontSize,
  set: (val) => rectSotre.changeXAxisLabel(val, 'fontSize')
})

const xAxisLabelFontWight = computed({
  get: () => activeRect.value?.options?.xAxis?.axisLabel?.fontWeight,
  set: (val) => rectSotre.changeXAxisLabel(val, 'fontWeight')
})

const xAxisLabelColor = computed({
  get: () => activeRect.value?.options?.xAxis?.axisLabel?.color,
  set: (val) => rectSotre.changeXAxisLabel(val, 'color')
})

const xAxisName = computed({
  get: () => activeRect.value?.options?.xAxis?.name,
  set: (val) => rectSotre.changeXAxis(val, 'name')
})
const xAxisNameFontFamily = computed({
  get: () => activeRect.value?.options?.xAxis?.nameTextStyle?.fontFamily,
  set: (val) => rectSotre.changeXAxisNameTextStyle(val, 'fontFamily')
})

const xAxisNameFontSize = computed({
  get: () => activeRect.value?.options?.xAxis?.nameTextStyle?.fontSize,
  set: (val) => rectSotre.changeXAxisNameTextStyle(val, 'fontSize')
})

const xAxisNameFontWight = computed({
  get: () => activeRect.value?.options?.xAxis?.nameTextStyle?.fontWeight,
  set: (val) => rectSotre.changeXAxisNameTextStyle(val, 'fontWeight')
})

const xAxisNameColor = computed({
  get: () => activeRect.value?.options?.xAxis?.nameTextStyle?.color,
  set: (val) => rectSotre.changeXAxisNameTextStyle(val, 'color')
})
</script>

<style scoped>
.config-container {
  padding: 0 10px;
}
</style>
