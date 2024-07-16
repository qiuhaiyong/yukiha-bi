<template>
  <el-collapse-item title="图例配置" name="legend">
    <div class="legend-config-container config-container">
      <el-form :label-position="'left'" label-width="auto">
        <el-form-item label="显示图例">
          <el-switch v-model="showLegend"></el-switch>
        </el-form-item>
        <div v-show="showLegend">
          <el-form-item label="图例字体">
            <el-select v-model="legendFontFamily">
              <el-option
                v-for="item in configOptions.fontFamliyOptions"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="图例字号">
            <el-input-number v-model="legendFontSize" :min="1" />
          </el-form-item>
          <el-form-item label="文字粗细">
            <el-select v-model="legendFontWight">
              <el-option
                v-for="item in configOptions.fontWeightOptions"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="文字颜色">
            <el-color-picker v-model="legendColor" />
          </el-form-item>
          <el-form-item label="图例水平位置">
            <el-select v-model="legendHorizontal">
              <el-option
                v-for="item in configOptions.horizontalOptions"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="图例垂直位置">
            <el-select v-model="legendVertical">
              <el-option
                v-for="item in configOptions.verticalOptions"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="图例布局朝向">
            <el-select v-model="legendOrient">
              <el-option
                v-for="item in configOptions.orientOptions"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="图例间距">
            <el-input-number v-model="legendItemGap" :min="1" />
          </el-form-item>
          <el-form-item label="图例宽度">
            <el-input-number v-model="legendItemWidth" :min="1" />
          </el-form-item>
          <el-form-item label="图例高度">
            <el-input-number v-model="legendItemHeight" :min="1" />
          </el-form-item>
          <el-form-item label="图例图形">
            <el-select v-model="legendIcon">
              <el-option
                v-for="item in configOptions.iconOptions"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </el-collapse-item>
</template>

<script setup>
import useRectStore from '@/stores/rect'
import { computed } from 'vue'
import configOptions from './configOptions'

const rectSotre = useRectStore()

const activeRect = computed(() => rectSotre.activeRect)

const showLegend = computed({
  get: () => activeRect.value?.options?.legend?.show,
  set: (val) => rectSotre.changeLegendNormal(val, 'show')
})

const legendFontFamily = computed({
  get: () => activeRect.value?.options?.legend?.textStyle?.fontFamily,
  set: (val) => rectSotre.changLegendTextStyle(val, 'fontFamily')
})

const legendFontSize = computed({
  get: () => activeRect.value?.options?.legend?.textStyle?.fontSize,
  set: (val) => rectSotre.changLegendTextStyle(val, 'fontSize')
})

const legendFontWight = computed({
  get: () => activeRect.value?.options?.legend?.textStyle?.fontWeight,
  set: (val) => rectSotre.changLegendTextStyle(val, 'fontWeight')
})

const legendColor = computed({
  get: () => activeRect.value?.options?.legend?.textStyle?.color,
  set: (val) => rectSotre.changLegendTextStyle(val, 'color')
})

const legendHorizontal = computed({
  get: () => activeRect.value?.options?.legend?.left,
  set: (val) => rectSotre.changeLegendNormal(val, 'left')
})

const legendVertical = computed({
  get: () => activeRect.value?.options?.legend?.top,
  set: (val) => rectSotre.changeLegendNormal(val, 'top')
})

const legendOrient = computed({
  get: () => activeRect.value?.options?.legend?.orient,
  set: (val) => rectSotre.changeLegendNormal(val, 'orient')
})

const legendItemGap = computed({
  get: () => activeRect.value?.options?.legend?.itemGap,
  set: (val) => rectSotre.changeLegendNormal(val, 'itemGap')
})
const legendItemWidth = computed({
  get: () => activeRect.value?.options?.legend?.itemWidth,
  set: (val) => rectSotre.changeLegendNormal(val, 'itemWidth')
})
const legendItemHeight = computed({
  get: () => activeRect.value?.options?.legend?.itemHeight,
  set: (val) => rectSotre.changeLegendNormal(val, 'itemHeight')
})
const legendIcon = computed({
  get: () => activeRect.value?.options?.legend?.icon,
  set: (val) => rectSotre.changeLegendNormal(val, 'icon')
})
</script>

<style scoped>
/* common style */
.config-container {
  padding: 0 10px;
}
</style>
