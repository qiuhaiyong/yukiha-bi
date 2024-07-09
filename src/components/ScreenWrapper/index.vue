<template>
  <div class="screen-wrapper-container">
    <div class="screen-wrapper" :style="wrapperOptions">
      <VueDragResize
        v-for="(rect, index) in rects"
        :key="index"
        :w="rect.width"
        :h="rect.height"
        :x="rect.left"
        :y="rect.top"
        :isActive="rect.active"
        :parentScaleX="0.6"
        :parentScaleY="0.6"
        :parentLimitation="true"
        @activated="activateEv(index)"
        @deactivated="deactivateEv(index)"
        @dragging="changeDimensions($event, index)"
        @resizing="changeDimensions($event, index)"
      >
        <div
          :style="{
            width: '100%',
            height: '100%',
            backgroundColor: rect.color
          }"
        ></div>
      </VueDragResize>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VueDragResize from 'vue-drag-resize/src/component/vue-drag-resize.vue'
import useRectStore from '@/stores/rect'

// 画布样式配置
const wrapperOptions = ref({
  width: '1920px',
  height: '1080px',
  transform: 'scale(0.6)'
})

const rectSotre = useRectStore()

// 元素
const rects = rectSotre.$state.rects

// 点击设置为活跃状态
const activateEv = (index) => {
  rectSotre.enableActive(index)
}

// 点击拖拽元素以外的地方将元素设置为不活跃状态
const deactivateEv = (index) => {
  rectSotre.disableActive(index)
}

// 改变尺寸、位置
const changeDimensions = (newRect) => {
  rectSotre.changeTop(newRect.top)
  rectSotre.changeLeft(newRect.left)
  rectSotre.changeWidth(newRect.width)
  rectSotre.changeHeight(newRect.height)
}
</script>

<style>
.screen-wrapper-container {
  flex: 1;
  overflow: auto;
  position: relative;
  border: 1px solid black;
  .screen-wrapper {
    border: 1px solid black;
    transform-origin: left top;
    position: absolute;
    left: 45px;
    top: 60px;
  }
}
</style>
