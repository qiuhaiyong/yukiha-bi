/*
 * @Author: Yuk1ha
 * @Date: 2024-07-09 22:48:39
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-07-10 23:40:09
 * @FilePath: \yukiha-bi\src\stores\rect.js
 */
import { ElMessage } from 'element-plus'
import { defineStore } from 'pinia'
import ChartsActions from './rect-charts-actions'
export const useRectStore = defineStore('RectStore ', {
  state: () => {
    return {
      activeRectId: null,
      rects: []
    }
  },
  actions: {
    updateRects(rects) {
      this.rects = rects
    },
    // 设置为活跃状态
    enableActive(id) {
      if (this.activeRectId !== null) {
        this.disableActive(this.activeRectId)
      }
      this.activeRectId = id
      const index = this.rects.findIndex((item) => item.id === id)
      this.rects[index].active = true
    },

    // 设置为不活跃状态
    disableActive(id) {
      if (id === this.activeRectId) {
        this.activeRectId = null
      }
      const index = this.rects.findIndex((item) => item.id === id)
      this.rects[index].active = false
    },
    changeTop(top) {
      const id = this.activeRectId
      if (id === null) {
        return
      }
      const index = this.rects.findIndex((item) => item.id === id)
      this.rects[index].top = top
    },
    changeLeft(left) {
      const id = this.activeRectId
      if (id === null) {
        return
      }
      const index = this.rects.findIndex((item) => item.id === id)
      this.rects[index].left = left
    },
    changeWidth(width) {
      const id = this.activeRectId
      if (id === null) {
        return
      }
      const index = this.rects.findIndex((item) => item.id === id)
      this.rects[index].width = width
    },
    changeHeight(height) {
      const id = this.activeRectId
      if (id === null) {
        return
      }
      const index = this.rects.findIndex((item) => item.id === id)
      this.rects[index].height = height
    },

    changeName(name) {
      const id = this.activeRectId
      if (id === null) {
        return
      }
      const index = this.rects.findIndex((item) => item.id === id)
      this.rects[index].name = name
    },
    changeZIndex() {
      for (let index = 0; index < this.rects.length; index++) {
        this.rects[index].zIndex = this.rects.length - index
      }
    },
    // 上移一层
    upZIndex(id) {
      const index = this.rects.findIndex((item) => item.id === id)
      if (index - 1 < 0) {
        ElMessage.info('已经为最顶层！')
        return
      }
      const temp = this.rects[index]
      this.rects[index] = this.rects[index - 1]
      this.rects[index - 1] = temp
      this.changeZIndex()
      ElMessage.success('修改成功！')
    },
    // 下移一层
    downZIndex(id) {
      const index = this.rects.findIndex((item) => item.id === id)
      if (index + 1 > this.rects.length - 1) {
        ElMessage.info('已经为最底层！')
        return
      }
      const temp = this.rects[index]
      this.rects[index] = this.rects[index + 1]
      this.rects[index + 1] = temp
      this.changeZIndex()
      ElMessage.success('修改成功！')
    },
    // 置顶
    toppingZindex(id) {
      const index = this.rects.findIndex((item) => item.id === id)
      if (index === 0) {
        ElMessage.info('已经为最顶层！')
        return
      }
      const temp = this.rects[index]
      this.rects[index] = this.rects[0]
      this.rects[0] = temp
      this.changeZIndex()
      ElMessage.success('修改成功！')
    },
    // 置底
    bottomZindex(id) {
      const index = this.rects.findIndex((item) => item.id === id)
      if (index === this.rects.length - 1) {
        ElMessage.info('已经为最底层！')
        return
      }
      const temp = this.rects[index]
      this.rects[index] = this.rects[this.rects.length - 1]
      this.rects[this.rects.length - 1] = temp
      this.changeZIndex()
      ElMessage.success('修改成功！')
    },
    // 添加图形
    addRect(rect) {
      this.rects.unshift(rect)
      this.enableActive(rect.id)
      ElMessage.success('添加成功!')
    },
    // 删除图形
    deleteRect() {
      if (!this.activeRectId) {
        ElMessage.error('删除失败！')
        return
      }
      const index = this.rects.findIndex((item) => item.id === this.activeRectId)
      this.rects.splice(index, 1)
      this.activeRectId = null
      ElMessage.success('删除成功!')
    },
    // 通过id删除图形
    deleteRectById(id) {
      if (!id) {
        ElMessage.error('删除失败！')
        return
      }
      const index = this.rects.findIndex((item) => item.id === id)
      if (id === this.activeRectId) {
        this.activeRectId = null
      }
      this.rects.splice(index, 1)
      ElMessage.success('删除成功!')
    },
    ...ChartsActions
  },
  getters: {
    activeRect: (state) => {
      return state.rects.find((item) => item.id === state.activeRectId) ?? null
    }
  }
})

export default useRectStore
