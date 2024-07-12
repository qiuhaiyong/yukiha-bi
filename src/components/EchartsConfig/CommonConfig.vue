<template>
  <el-collapse-item title="标题配置" name="title">
    <div class="title-config-container config-container">
      <el-form :label-position="'left'" label-width="auto">
        <el-form-item label="显示标题">
          <el-switch v-model="showTitle"></el-switch>
        </el-form-item>
        <div v-show="showTitle">
          <el-form-item label="文本">
            <el-input v-model="titleText"></el-input>
          </el-form-item>
          <el-form-item label="字体">
            <el-select v-model="titleFontFamily">
              <el-option
                v-for="item in configOptions.fontFamliyOptions"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="大小">
            <el-input-number v-model="titleFontSize" :min="1" />
          </el-form-item>
          <el-form-item label="粗细">
            <el-select v-model="titleFontWight">
              <el-option
                v-for="item in configOptions.fontWeightOptions"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="颜色">
            <el-color-picker v-model="titleColor" />
          </el-form-item>
          <el-form-item label="距顶部距离">
            <el-input-number v-model="titlePadding" :min="1" />
          </el-form-item>
          <el-form-item label="水平位置">
            <el-select v-model="titleHorizontal">
              <el-option
                v-for="item in configOptions.horizontalOptions"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="垂直位置">
            <el-select v-model="titleVertical">
              <el-option
                v-for="item in configOptions.verticalOptions"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </el-collapse-item>
  <el-collapse-item title="提示框配置" name="tooltip">
    <div class="tooltip-config-container config-container">
      <el-form :label-position="'left'" label-width="auto">
        <el-form-item label="显示提示框">
          <el-switch v-model="showTooltip"></el-switch>
        </el-form-item>
        <div v-show="showTooltip">
          <el-form-item label="触发类型">
            <el-select v-model="tooltipTrigger">
              <el-option
                v-for="item in configOptions.triggerOptions"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="触发条件">
            <el-select v-model="tooltipTriggerOn">
              <el-option
                v-for="item in configOptions.triggerOnOptions"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="消失延迟">
            <el-input-number v-model="tooltipHideDelay" :min="0" />
          </el-form-item>
          <el-form-item label="背景颜色">
            <el-color-picker v-model="tooltipBackgroundColor" show-alpha />
          </el-form-item>
          <el-form-item label="边框颜色">
            <el-color-picker v-model="tooltipBorderColor" show-alpha />
          </el-form-item>
          <el-form-item label="边框宽度">
            <el-input-number v-model="tooltipBorderWidth" :min="0" />
          </el-form-item>
          <el-form-item label="文字字体">
            <el-select v-model="tooltipFontFamily">
              <el-option
                v-for="item in configOptions.fontFamliyOptions"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="文字大小">
            <el-input-number v-model="tooltipFontSize" :min="1" />
          </el-form-item>
          <el-form-item label="文字粗细">
            <el-select v-model="tooltipFontWight">
              <el-option
                v-for="item in configOptions.fontWeightOptions"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="文字颜色">
            <el-color-picker v-model="tooltipColor" />
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

// title
const showTitle = computed({
  get: () => activeRect.value?.options?.title?.show,
  set: (val) => rectSotre.changeTitleNormal(val, 'show')
})

const titleText = computed({
  get: () => activeRect.value?.options?.title?.text,
  set: (val) => rectSotre.changeTitleNormal(val, 'text')
})

const titleFontFamily = computed({
  get: () => activeRect.value?.options?.title?.textStyle?.fontFamily,
  set: (val) => rectSotre.changeTitleTextStyle(val, 'fontFamily')
})

const titleFontSize = computed({
  get: () => activeRect.value?.options?.title?.textStyle?.fontSize,
  set: (val) => rectSotre.changeTitleTextStyle(val, 'fontSize')
})

const titleFontWight = computed({
  get: () => activeRect.value?.options?.title?.textStyle?.fontWeight,
  set: (val) => rectSotre.changeTitleTextStyle(val, 'fontWeight')
})

const titleColor = computed({
  get: () => activeRect.value?.options?.title?.textStyle?.color,
  set: (val) => rectSotre.changeTitleTextStyle(val, 'color')
})

const titlePadding = computed({
  get: () => activeRect.value?.options?.title?.padding,
  set: (val) => rectSotre.changeTitleNormal(val, 'padding')
})

const titleHorizontal = computed({
  get: () => activeRect.value?.options?.title?.left,
  set: (val) => rectSotre.changeTitleNormal(val, 'left')
})

const titleVertical = computed({
  get: () => activeRect.value?.options?.title?.top,
  set: (val) => rectSotre.changeTitleNormal(val, 'top')
})

// tooltip
const showTooltip = computed({
  get: () => activeRect.value?.options?.tooltip?.show,
  set: (val) => rectSotre.changeTooltipNormal(val, 'show')
})

const tooltipTrigger = computed({
  get: () => activeRect.value?.options?.tooltip?.trigger,
  set: (val) => rectSotre.changeTooltipNormal(val, 'trigger')
})

const tooltipTriggerOn = computed({
  get: () => activeRect.value?.options?.tooltip?.triggerOn,
  set: (val) => rectSotre.changeTooltipNormal(val, 'triggerOn')
})

const tooltipHideDelay = computed({
  get: () => activeRect.value?.options?.tooltip?.hideDelay,
  set: (val) => rectSotre.changeTooltipNormal(val, 'hideDelay')
})

const tooltipBackgroundColor = computed({
  get: () => activeRect.value?.options?.tooltip?.backgroundColor,
  set: (val) => rectSotre.changeTooltipNormal(val, 'backgroundColor')
})

const tooltipBorderColor = computed({
  get: () => activeRect.value?.options?.tooltip?.borderColor,
  set: (val) => rectSotre.changeTooltipNormal(val, 'borderColor')
})

const tooltipBorderWidth = computed({
  get: () => activeRect.value?.options?.tooltip?.borderWidth,
  set: (val) => rectSotre.changeTooltipNormal(val, 'borderWidth')
})

const tooltipFontFamily = computed({
  get: () => activeRect.value?.options?.tooltip?.textStyle?.fontFamily,
  set: (val) => rectSotre.changeTooltipTextStyle(val, 'fontFamily')
})

const tooltipFontSize = computed({
  get: () => activeRect.value?.options?.tooltip?.textStyle?.fontSize,
  set: (val) => rectSotre.changeTooltipTextStyle(val, 'fontSize')
})

const tooltipFontWight = computed({
  get: () => activeRect.value?.options?.tooltip?.textStyle?.fontWeight,
  set: (val) => rectSotre.changeTooltipTextStyle(val, 'fontWeight')
})

const tooltipColor = computed({
  get: () => activeRect.value?.options?.tooltip?.textStyle?.color,
  set: (val) => rectSotre.changeTooltipTextStyle(val, 'color')
})
// tooltip
</script>

<style scoped>
/* common style */
.config-container {
  padding: 0 10px;
}
</style>
