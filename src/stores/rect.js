/*
 * @Author: Yuk1ha
 * @Date: 2024-07-09 22:48:39
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-07-10 23:40:09
 * @FilePath: \yukiha-bi\src\stores\rect.js
 */
import { ElMessage } from 'element-plus'
import { defineStore } from 'pinia'
export const useRectStore = defineStore('RectStore ', {
  state: () => {
    return {
      activeRectId: null,
      rects: [
        {
          id: 1,
          width: 200,
          height: 150,
          top: 10,
          left: 10,
          zIndex: 1,
          color: '#EF9A9A',
          active: false
        },
        {
          id: 2,
          width: 200,
          height: 150,
          top: 10,
          left: 220,
          zIndex: 2,
          color: '#AED581',
          active: false
        },
        {
          id: 3,
          width: 200,
          height: 150,
          top: 170,
          left: 10,
          zIndex: 3,
          color: '#81D4FA',
          active: false
        },
      ]
    }
  },
  actions: {
    // 设置为活跃状态
    enableActive(id) {
      if (this.activeRectId !== null) {
        this.disableActive(this.activeRectId)
      }
      this.activeRectId = id
      const index = this.rects.findIndex(item => item.id === id)
      this.rects[index].active = true
    },

    // 设置为不活跃状态
    disableActive(id) {
      if (id === this.activeRectId) {
        this.activeRectId = null
      }
      const index = this.rects.findIndex(item => item.id === id)
      this.rects[index].active = false
    },
    changeTop(top) {
      const id = this.activeRectId
      if (id === null) {
        return
      }
      const index = this.rects.findIndex(item => item.id === id)
      this.rects[index].top = top
    },
    changeLeft(left) {
      const id = this.activeRectId
      if (id === null) {
        return
      }
      const index = this.rects.findIndex(item => item.id === id)
      this.rects[index].left = left
    },
    changeWidth(width) {
      const id = this.activeRectId
      if (id === null) {
        return
      }
      const index = this.rects.findIndex(item => item.id === id)
      this.rects[index].width = width
    },
    changeHeight(height) {
      const id = this.activeRectId
      if (id === null) {
        return
      }
      const index = this.rects.findIndex(item => item.id === id)
      this.rects[index].height = height
    },
    // 添加图形
    addRect(rect) {
      this.rects.push(rect)
      this.enableActive(rect.id)
      ElMessage.success("添加成功!")
    },
    // 删除图形
    deleteRect() {
      if (!this.activeRectId) {
        console.log(this.activeRectId);
        ElMessage.error("删除失败！")
        return
      }
      const index = this.rects.findIndex(item => item.id === this.activeRectId)
      this.rects.splice(index, 1)
      this.activeRectId = null
      ElMessage.success("删除成功!")
    }

  },
  getters: {
    activeRect: (state) => {
      return state.rects.find(item => item.id === state.activeRectId) ?? null
    }
  }
})

export default useRectStore
