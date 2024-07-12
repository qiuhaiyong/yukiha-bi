// 图形默认配置
export default {
  // 饼状图
  basicPie: {
    width: 200,
    height: 150,
    top: 540,
    left: 960,
    zIndex: 1,
    active: false,
    type: 'Echarts-Pie',
    title: '基本饼图',
    name: '基本饼图',
    icon: 'fa-solid fa-chart-pie',
    options: {
      title: {
        show: false,
        text: '',
        textStyle: {
          fontFamily: 'sans-serif',
          fontSize: 18,
          color: '#333',
          fontWeight: 'normal'
        },
        padding: 10,
        left: 'center',
        top: 'top'
      },
      tooltip: {
        show: true,
        trigger: 'item',
        triggerOn: 'mousemove|click',
        hideDelay: 100,
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: '#333',
        borderWidth: 0,
        textStyle: {
          fontFamily: 'sans-serif',
          fontSize: 14,
          color: '#333',
          fontWeight: 'normal'
        }
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }
      ]
    }
  },
  // 柱状图
  basicBar: {
    width: 200,
    height: 150,
    top: 540,
    left: 960,
    zIndex: 1,
    active: false,
    type: 'Echarts-Bar',
    title: '基本柱状图',
    name: '基本柱状图',
    icon: 'fa-solid fa-chart-bar',
    options: {
      title: {
        show: false,
        text: '',
        textStyle: {
          fontFamily: 'sans-serif',
          fontSize: 18,
          color: '#333',
          fontWeight: 'normal'
        },
        padding: 10,
        left: 'center',
        top: 'top'
      },
      tooltip: {
        show: true,
        trigger: 'axis',
        triggerOn: 'mousemove|click',
        hideDelay: 100,
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: '#333',
        borderWidth: 0,
        textStyle: {
          fontFamily: 'sans-serif',
          fontSize: 14,
          color: '#333',
          fontWeight: 'normal'
        }
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    }
  },
  // 折线图
  basicLine: {
    width: 200,
    height: 150,
    top: 540,
    left: 960,
    zIndex: 1,
    active: false,
    type: 'Echarts-Line',
    title: '基本折线图',
    name: '基本折线图',
    icon: 'fa-solid fa-chart-line',
    options: {
      title: {
        show: false,
        text: '',
        textStyle: {
          fontFamily: 'sans-serif',
          fontSize: 18,
          color: '#333',
          fontWeight: 'normal'
        },
        padding: 10,
        left: 'center',
        top: 'top'
      },
      tooltip: {
        show: true,
        trigger: 'axis',
        triggerOn: 'mousemove|click',
        hideDelay: 100,
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: '#333',
        borderWidth: 0,
        textStyle: {
          fontFamily: 'sans-serif',
          fontSize: 14,
          color: '#333',
          fontWeight: 'normal'
        }
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    }
  }
}
