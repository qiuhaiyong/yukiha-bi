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
  },

  // series
  changeSeriesNormal(seriesIndex, val, key) {
    const id = this.activeRectId
    if (id === null) {
      return
    }
    const index = this.rects.findIndex((item) => item.id === id)
    this.rects[index].options.series[seriesIndex][key] = val
  },
  changeSeriesLabel(seriesIndex, val, key) {
    const id = this.activeRectId
    if (id === null) {
      return
    }
    const index = this.rects.findIndex((item) => item.id === id)
    this.rects[index].options.series[seriesIndex].label[key] = val
  },
  // labelLine
  changeSeriesLabelLine(seriesIndex, val, key) {
    const id = this.activeRectId
    if (id === null) {
      return
    }
    const index = this.rects.findIndex((item) => item.id === id)
    this.rects[index].options.series[seriesIndex].labelLine[key] = val
  },
  // radius
  changeSeriesRadius(seriesIndex, radiusIndex, val) {
    const id = this.activeRectId
    if (id === null) {
      return
    }
    const index = this.rects.findIndex((item) => item.id === id)
    this.rects[index].options.series[seriesIndex].radius[radiusIndex] = val
  },
  // center
  changeSeriesCenter(seriesIndex, centerIndex, val) {
    const id = this.activeRectId
    if (id === null) {
      return
    }
    const index = this.rects.findIndex((item) => item.id === id)
    this.rects[index].options.series[seriesIndex].center[centerIndex] = val
  },
  // grid
  changeGrid(value, key) {
    const id = this.activeRectId
    if (id === null) {
      return
    }
    const index = this.rects.findIndex((item) => item.id === id)
    this.rects[index].options.grid[key] = value
  },
  // xAxis
  changeXAxis(value, key) {
    const id = this.activeRectId
    if (id === null) {
      return
    }
    const index = this.rects.findIndex((item) => item.id === id)
    this.rects[index].options.xAxis[key] = value
  },
  changeXAxisLabel(value, key) {
    const id = this.activeRectId
    if (id === null) {
      return
    }
    const index = this.rects.findIndex((item) => item.id === id)
    this.rects[index].options.xAxis.axisLabel[key] = value
  },
  changeXAxisNameTextStyle(value, key) {
    const id = this.activeRectId
    if (id === null) {
      return
    }
    const index = this.rects.findIndex((item) => item.id === id)
    this.rects[index].options.xAxis.nameTextStyle[key] = value
  },
  changeXAxisTick(value, key) {
    const id = this.activeRectId
    if (id === null) {
      return
    }
    const index = this.rects.findIndex((item) => item.id === id)
    this.rects[index].options.xAxis.axisTick[key] = value
  },
  changeXAxisLine(value, key) {
    const id = this.activeRectId
    if (id === null) {
      return
    }
    const index = this.rects.findIndex((item) => item.id === id)
    this.rects[index].options.xAxis.axisLine[key] = value
  },
  // yAxis
  changeYAxis(value, key) {
    const id = this.activeRectId
    if (id === null) {
      return
    }
    const index = this.rects.findIndex((item) => item.id === id)
    this.rects[index].options.yAxis[key] = value
  },
  changeYAxisLabel(value, key) {
    const id = this.activeRectId
    if (id === null) {
      return
    }
    const index = this.rects.findIndex((item) => item.id === id)
    this.rects[index].options.yAxis.axisLabel[key] = value
  },
  changeYAxisNameTextStyle(value, key) {
    const id = this.activeRectId
    if (id === null) {
      return
    }
    const index = this.rects.findIndex((item) => item.id === id)
    this.rects[index].options.yAxis.nameTextStyle[key] = value
  },
  changeYAxisTick(value, key) {
    const id = this.activeRectId
    if (id === null) {
      return
    }
    const index = this.rects.findIndex((item) => item.id === id)
    this.rects[index].options.yAxis.axisTick[key] = value
  },
  changeYAxisLine(value, key) {
    const id = this.activeRectId
    if (id === null) {
      return
    }
    const index = this.rects.findIndex((item) => item.id === id)
    this.rects[index].options.yAxis.axisLine[key] = value
  }
}
