<template>
  <div class="tool-bar-container">
    <div class="back-btn-container">
      <el-button link icon="ArrowLeft" type="primary">返回</el-button>
    </div>
    <div class="piece-container">
      <div class="rect-menu-container">
        <el-popover
          placement="bottom-start"
          :width="280"
          :show-after="0"
          :hide-after="10"
          :offset="2"
          v-for="item in config"
        >
          <template #reference>
            <div class="rect-popover-item">
              <div class="item-icon">
                <font-awesome-icon :icon="item.icon" size="lg" />
              </div>
              <div class="item-title">{{ item.title }}</div>
            </div>
          </template>
          <template #>
            <div class="rect-list">
              <div class="rect-item" v-for="rect in item.rectList" @click="addRect(rect.key)">
                <div class="rect-icon">
                  <font-awesome-icon :icon="rect.icon" size="lg" />
                </div>
                <div class="rect-title">{{ rect.title }}</div>
              </div>
            </div>
          </template>
        </el-popover>
      </div>
      <div class="btn-group-container">
        <div class="tool-btn">
          <div class="btn-icon">
            <font-awesome-icon icon="fa-solid fa-expand" size="lg" />
          </div>
          <div class="btn-title">预览</div>
        </div>
        <div class="tool-btn">
          <div class="btn-icon">
            <font-awesome-icon icon="fa-solid fa-book" size="lg" />
          </div>
          <div class="btn-title">保存</div>
        </div>
        <div class="tool-btn">
          <div class="btn-icon">
            <font-awesome-icon icon="fa-regular fa-paper-plane" size="lg" />
          </div>
          <div class="btn-title">发布</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useRectStore from '@/stores/rect'
import { cloneDeep } from 'lodash'
import { nanoid } from 'nanoid'
import rectconfig from './rectconfig'
import config from './toolbarconfig.json'
defineOptions({
  name: 'ToolBar'
})
const rectSotre = useRectStore()

// 添加图形
const addRect = (key) => {
  const rect = cloneDeep(rectconfig[key])
  rect.id = nanoid()
  rect.zIndex = rectSotre.rects.length + 1
  rectSotre.addRect(rect)
}
</script>

<style scoped>
.tool-bar-container {
  width: 100vw;
  height: var(--tool-bar-height);
  border-bottom: 1px solid var(--el-border-color-light);
  display: flex;
  .back-btn-container {
    width: var(--zindex-panel-width);
    display: flex;
    align-items: center;
    padding-left: 20px;
  }

  .piece-container {
    width: 0;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .rect-menu-container {
      height: 100%;
      display: flex;
      .rect-popover-item {
        height: 100%;
        width: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
        cursor: pointer;
        &[aria-describedby] {
          background: linear-gradient(to bottom, var(--el-color-primary), #fff);
          transition: all 0.3s;
        }
        .item-title {
          font-size: 14px;
        }
      }
    }
    .btn-group-container {
      height: 100%;
      display: flex;
      .tool-btn {
        height: 100%;
        width: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        &:hover {
          color: var(--el-color-primary);
        }
      }
    }
  }
}

.rect-list {
  width: 100%;
  height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
  &::-webkit-scrollbar {
    display: none;
  }
  .rect-item {
    min-width: 81px;
    max-width: 81px;
    min-height: 71px;
    max-height: 71px;
    border: 1px solid var(--el-border-color-light);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    &:hover {
      border-color: var(--el-color-primary);
    }
  }
}
</style>
