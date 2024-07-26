const setPiechartsData = (rect) => {
  rect.options.series[0].data = rect.dataOptions.data
}

const setLineChartsData = (rect) => {
  let xAxisData = rect.dataOptions.data.map((item) => item.name)
  let yAxisData = rect.dataOptions.data.map((item) => item.value)
  rect.options.xAxis.data = xAxisData
  rect.options.series[0].data = yAxisData
}

const setBarChartsData = (rect) => {
  let xAxisData = rect.dataOptions.data.map((item) => item.name)
  let yAxisData = rect.dataOptions.data.map((item) => item.value)
  rect.options.xAxis.data = xAxisData
  rect.options.series[0].data = yAxisData
}

const dataMethodMap = new Map([
  ['Echarts-Pie', setPiechartsData],
  ['Echarts-Line', setLineChartsData],
  ['Echarts-Bar', setBarChartsData]
])

export default dataMethodMap
