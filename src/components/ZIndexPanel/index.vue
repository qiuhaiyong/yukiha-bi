<template>
  <div class="zindex-bar-container">
    <Draggable
      v-model="rectList"
      :disabled="!enabled"
      item-key="id"
      class="list-group"
      ghost-class="ghost"
      @change="change"
    >
      <template #item="{ element }">
        <div
          class="list-group-item"
          :class="{
            'not-draggable': !enabled,
            'is-active': element.id === rectSotre.activeRectId
          }"
          @click="activateEv(element.id)"
        >
          <div class="item-icon">
            <font-awesome-icon :icon="element.icon" size="xl" />
          </div>
          <div class="item-title">
            {{ element.name }}
          </div>
        </div>
      </template>
    </Draggable>
  </div>
</template>

<script setup>
import useRectStore from '@/stores/rect'
import { ElMessage } from 'element-plus'
import { computed, ref } from 'vue'
import Draggable from 'vuedraggable'
defineOptions({
  name: 'ZIndexPanel'
})
const rectSotre = useRectStore()

const rectList = computed({
  get() {
    return rectSotre.rects
  },
  set(rects) {
    rectSotre.updateRects(rects)
  }
})

const enabled = ref(true)

// 点击设置为活跃状态
const activateEv = (id) => {
  rectSotre.enableActive(id)
}

// 改变图层位置
const change = (event) => {
  rectSotre.changeZIndex()
  ElMessage.success('修改成功!')
}
</script>

<style scoped>
.zindex-bar-container {
  width: var(--zindex-panel-width);
  height: calc(100vh - var(--tool-bar-height));
  border-right: 1px solid var(--el-border-color-light);
  .list-group {
    height: 100%;
    overflow: auto;
    .list-group-item {
      height: 50px;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px;
      cursor: pointer;
      &.is-active {
        background: linear-gradient(to right, var(--el-color-primary), #fff);
      }
      &.sortable-chosen {
        background: linear-gradient(to right, var(--el-color-primary), #fff);
      }
      .item-title {
        flex: 1;
        width: 0;
        overflow: hidden;
        text-wrap: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
