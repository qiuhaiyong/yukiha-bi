export default {
  // title
  changeTitleNormal(value, key) {
    const id = this.activeRectId
    if (id === null) {
      return
    }
    const index = this.rects.findIndex((item) => item.id === id)
    this.rects[index].options.title[key] = value
  },
  changeTitleTextStyle(value, key) {
    const id = this.activeRectId
    if (id === null) {
      return
    }
    const index = this.rects.findIndex((item) => item.id === id)
    this.rects[index].options.title.textStyle[key] = value
  },

  // tooltip
  changeTooltipNormal(value, key) {
    const id = this.activeRectId
    if (id === null) {
      return
    }
    const index = this.rects.findIndex((item) => item.id === id)
    this.rects[index].options.tooltip[key] = value
  },
  changeTooltipTextStyle(value, key) {
    const id = this.activeRectId
    if (id === null) {
      return
    }
    const index = this.rects.findIndex((item) => item.id === id)
    this.rects[index].options.tooltip.textStyle[key] = value
  },
  // legend
  changeLegendNormal(value, key) {
    const id = this.activeRectId
    if (id === null) {
      return
    }
    const index = this.rects.findIndex((item) => item.id === id)
    this.rects[index].options.legend[key] = value
  },
  changLegendTextStyle(value, key) {
    const id = this.activeRectId
    if (id === null) {
      return
    }
    const index = this.rects.findIndex((item) => item.id === id)
    this.rects[index].options.legend.textStyle[key] = value
  },
  // color
  changeColor(value) {
    const id = this.activeRectId
    if (id === null) {
      return
    }
    const index = this.rects.findIndex((item) => item.id === id)
    this.rects[index].options.color = value
  },
  deleteColor(colorIndex) {
    const id = this.activeRectId
    if (id === null) {
      return
    }
    const index = this.rects.findIndex((item) => item.id === id)
    this.rects[index].options.color.splice(colorIndex, 1)
  },
  addColor(color) {
    const id = this.activeRectId
    if (id === null) {
      return
    }
    const index = this.rects.findIndex((item) => item.id === id)
    this.rects[index].options.color.push(color)
  }
}
