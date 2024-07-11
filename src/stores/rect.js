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
          width: 493,
          height: 268,
          top: 357,
          left: 0,
          zIndex: 3,
          active: false,
          type: 'Echarts-Line',
          title: '基本折线图',
          name: '基本折线图',
          icon: 'fa-solid fa-chart-line',
          options: {
            xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
            yAxis: { type: 'value' },
            series: [{ data: [150, 230, 224, 218, 135, 147, 260], type: 'line' }]
          },
          id: '8W4IMF5gJ6CWAGRq1CQWg'
        },
        {
          width: 490,
          height: 330,
          top: 0,
          left: 540,
          zIndex: 2,
          active: false,
          type: 'Echarts-Bar',
          title: '基本柱状图',
          name: '基本柱状图',
          icon: 'fa-solid fa-chart-bar',
          options: {
            xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
            yAxis: { type: 'value' },
            series: [{ data: [120, 200, 150, 80, 70, 110, 130], type: 'bar' }]
          },
          id: 'fH7fXdQUsBAi7RloS9g7V'
        },
        {
          width: 501,
          height: 340,
          top: 0,
          left: 0,
          zIndex: 1,
          active: false,
          type: 'Echarts-Pie',
          title: '基本饼图',
          name: '基本饼图',
          icon: 'fa-solid fa-chart-pie',
          options: {
            tooltip: { trigger: 'item' },
            legend: { top: '5%', left: 'center' },
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: { show: false, position: 'center' },
                emphasis: { label: { show: true, fontSize: 40, fontWeight: 'bold' } },
                labelLine: { show: false },
                data: [
                  { value: 1048, name: 'Search Engine' },
                  { value: 735, name: 'Direct' },
                  { value: 580, name: 'Email' },
                  { value: 484, name: 'Union Ads' },
                  { value: 300, name: 'Video Ads' }
                ]
              }
            ]
          },
          id: '7Ey_Dsh6VK2_ZksN3zAck'
        }
      ]
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
        console.log(this.activeRectId)
        ElMessage.error('删除失败！')
        return
      }
      const index = this.rects.findIndex((item) => item.id === this.activeRectId)
      this.rects.splice(index, 1)
      this.activeRectId = null
      ElMessage.success('删除成功!')
    }
  },
  getters: {
    activeRect: (state) => {
      return state.rects.find((item) => item.id === state.activeRectId) ?? null
    }
  }
})

export default useRectStore
