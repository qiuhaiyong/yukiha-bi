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
        }
      ]
    }
  },
  actions: {
    // 设置为活跃状态
    enableActive(index) {
      if (this.activeRectId !== null) {
        this.disableActive(this.activeRectId)
      }
      this.activeRectId = index
      this.rects[index].active = true
    },

    // 设置为不活跃状态
    disableActive(index) {
      if (index === this.activeRectId) {
        this.activeRectId = null
      }
      this.rects[index].active = false
    },
    changeTop(top) {
      const index = this.activeRectId
      if (index === null) {
        return
      }
      this.rects[index].top = top
    },
    changeLeft(left) {
      const index = this.activeRectId
      if (index === null) {
        return
      }
      this.rects[index].left = left
    },
    changeWidth(width) {
      const index = this.activeRectId
      if (index === null) {
        return
      }
      this.rects[index].width = width
    },
    changeHeight(height) {
      const index = this.activeRectId
      if (index === null) {
        return
      }
      this.rects[index].height = height
    }
  }
})

export default useRectStore
