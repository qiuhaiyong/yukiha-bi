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
          @contextmenu.native.prevent="contextMenu($event, element.id)"
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
  <!-- 右键元素显示的菜单 -->
  <ContextMenu v-model:show="showContextMenu" :options="contextMenuOptions">
    <ContextMenuItem label="上移一层" @click="upZIndex">
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-arrow-up" />
      </template>
    </ContextMenuItem>
    <ContextMenuItem label="下移一层" @click="downZIndex">
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-arrow-down" />
      </template>
    </ContextMenuItem>
    <ContextMenuItem label="置顶" @click="toppingZindex">
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-arrows-up-to-line" />
      </template>
    </ContextMenuItem>
    <ContextMenuItem label="置底" @click="bottomZindex">
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-arrows-down-to-line" />
      </template>
    </ContextMenuItem>
    <ContextMenuSperator></ContextMenuSperator>
    <ContextMenuItem label="删除" @click="deleteRect">
      <template #icon>
        <font-awesome-icon :icon="['fas', 'trash']" />
      </template>
    </ContextMenuItem>
    <ContextMenuItem label="复制">
      <template #icon>
        <font-awesome-icon :icon="['fas', 'copy']" />
      </template>
    </ContextMenuItem>
  </ContextMenu>
</template>

<script setup>
import useRectStore from '@/stores/rect'
import { Delete } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { computed, markRaw, reactive, ref } from 'vue'
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

// 是否能拖拽
const enabled = ref(true)

// 是否展示右键菜单
const showContextMenu = ref(false)
// 右键菜单配置项
const contextMenuOptions = reactive({
  zIndex: 99999,
  x: 0,
  y: 0,
  theme: 'mac'
})

const contextId = ref(null)

// 点击设置为活跃状态
const activateEv = (id) => {
  rectSotre.enableActive(id)
}

// 拖拽改变图层位置
const change = (event) => {
  rectSotre.changeZIndex()
  ElMessage.success('修改成功!')
}

// 右键
const contextMenu = (e, id) => {
  // 显示组件菜单
  contextMenuOptions.x = e.x
  contextMenuOptions.y = e.y
  // Show menu
  showContextMenu.value = true
  // 设置右键元素的id
  contextId.value = id
}

// 删除图形
const deleteRect = () => {
  ElMessageBox.confirm('请确认是否删除?', '提示', {
    type: 'warning',
    icon: markRaw(Delete),
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  }).then(() => {
    rectSotre.deleteRectById(contextId.value)
  })
}

const upZIndex = () => {
  rectSotre.upZIndex(contextId.value)
}

const downZIndex = () => {
  rectSotre.downZIndex(contextId.value)
}

const toppingZindex = () => {
  rectSotre.toppingZindex(contextId.value)
}

const bottomZindex = () => {
  rectSotre.bottomZindex(contextId.value)
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
    &::-webkit-scrollbar {
      display: none;
    }
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
