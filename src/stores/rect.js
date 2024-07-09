/*
 * @Author: Yuk1ha
 * @Date: 2024-07-09 22:48:39
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-07-10 00:00:34
 * @FilePath: \yukiha-bi\src\stores\rect.js
 */
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
          zIndex: 2,
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
    }
  }
})

export default useRectStore
