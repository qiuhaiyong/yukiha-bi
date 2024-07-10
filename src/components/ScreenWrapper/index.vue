<template>
  <div class="screen-wrapper-container">
    <div class="screen-wrapper" :style="wrapperOptions">
      <VueDragResize
        v-for="(rect, index) in rects"
        :key="rect.id"
        :w="rect.width"
        :h="rect.height"
        :x="rect.left"
        :y="rect.top"
        :z="rect.zIndex"
        :isActive="rect.active"
        :parentScaleX="0.6"
        :parentScaleY="0.6"
        :parentLimitation="true"
        @activated="activateEv(rect.id)"
        @deactivated="deactivateEv(rect.id)"
        @dragging="changeDimensions($event, rect.id)"
        @resizing="changeDimensions($event, rect.id)"
        @click.right.native.prevent="contextMenu"
        @mousedown.stop
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
import useRectStore from '@/stores/rect'
import { useThrottleFn } from '@vueuse/core'
import { ref } from 'vue'

import VueDragResize from 'vue-drag-resize/src/component/vue-drag-resize.vue'

// 画布样式配置
const wrapperOptions = ref({
  width: '1920px',
  height: '1080px',
  transform: 'scale(0.6) translate(-50%, -50%)'
})

const rectSotre = useRectStore()

// 元素
const rects = rectSotre.$state.rects

// 点击设置为活跃状态
const activateEv = (id) => {
  rectSotre.enableActive(id)
}

// 点击拖拽元素以外的地方将元素设置为不活跃状态
const deactivateEv = (id) => {
  rectSotre.disableActive(id)
}

// 改变尺寸、位置
const changeDimensions = useThrottleFn((newRect) => {
  rectSotre.changeTop(newRect.top)
  rectSotre.changeLeft(newRect.left)
  rectSotre.changeWidth(newRect.width)
  rectSotre.changeHeight(newRect.height)
}, 50)

// 右键
const contextMenu = (e) => {
  console.log(e)
}
</script>

<style scoped>
.screen-wrapper-container {
  flex: 1;
  overflow: auto;
  position: relative;
  .screen-wrapper {
    border: 1px solid var(--el-border-color-light);
    background-color: var(--el-border-color-light);
    border-radius: 12px;
    box-shadow: var(--el-box-shadow-light);
    transform-origin: left top;
    position: absolute;
    left: 50%;
    top: 50%;
  }
}
</style>
