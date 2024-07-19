// 图形默认配置
export default {
  // 饼状图
  basicPie: {
    width: 500,
    height: 300,
    top: 540,
    left: 960,
    zIndex: 1,
    active: false,
    type: 'Echarts-Pie',
    title: '基本饼图',
    name: '基本饼图',
    icon: 'fa-solid fa-chart-pie',
    dataOptions: {
      type: 'static',
      data: []
    },
    options: {
      color: [
        '#2f4554',
        '#c23531',
        '#61a0a8',
        '#d48265',
        '#91c7ae',
        '#749f83',
        '#ca8622',
        '#bda29a',
        '#6e7074',
        '#546570',
        '#c4ccd3'
      ],
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
        show: true,
        left: 'center',
        top: 'top',
        orient: 'horizontal',
        itemGap: 5,
        itemWidth: 25,
        itemHeight: 14,
        borderRadius: 5,
        icon: 'circle',
        textStyle: {
          fontFamily: 'sans-serif',
          fontSize: 12,
          color: '#333',
          fontWeight: 'normal'
        }
      },
      series: [
        {
          name: 'series one',
          type: 'pie',
          label: {
            show: true,
            fontFamily: 'sans-serif',
            fontSize: 12,
            fontWeight: 'normal',
            position: 'inside'
          },
          labelLine: {
            show: true,
            length: 10,
            length2: 20,
            smooth: true
          },
          radius: ['40%', '70%'],
          center: ['50%', '50%'],
          roseType: false,
          // avoidLabelOverlap: true,
          // emphasis: {
          //   label: {
          //     show: true,
          //     fontSize: 40,
          //     fontWeight: 'bold'
          //   }
          // },

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
    width: 500,
    height: 300,
    top: 540,
    left: 960,
    zIndex: 1,
    active: false,
    type: 'Echarts-Bar',
    title: '基本柱状图',
    name: '基本柱状图',
    icon: 'fa-solid fa-chart-bar',
    dataOptions: {
      type: 'static'
    },
    options: {
      grid: {
        containLabel: true,
        top: 50,
        right: 50,
        bottom: 50,
        left: 50
      },
      color: [
        '#2f4554',
        '#c23531',
        '#61a0a8',
        '#d48265',
        '#91c7ae',
        '#749f83',
        '#ca8622',
        '#bda29a',
        '#6e7074',
        '#546570',
        '#c4ccd3'
      ],
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
        show: true,
        type: 'category',
        name: 'x轴',
        nameTextStyle: {
          color: '#333',
          fontWeight: 'normal',
          fontFamily: 'sans-serif',
          fontSize: 12
        },
        axisLabel: {
          show: true,
          color: '#333',
          fontWeight: 'normal',
          fontFamily: 'sans-serif',
          fontSize: 12
        },
        axisTick: {
          show: true,
          inside: false,
          length: 5
        },
        axisLine: {
          show: true
        },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value',
        name: 'y轴',
        nameTextStyle: {
          color: '#333',
          fontWeight: 'normal',
          fontFamily: 'sans-serif',
          fontSize: 12
        },
        axisLabel: {
          show: true,
          color: '#333',
          fontWeight: 'normal',
          fontFamily: 'sans-serif',
          fontSize: 12
        },
        axisTick: {
          show: true,
          inside: false,
          length: 5
        },
        axisLine: {
          show: true
        }
      },
      legend: {
        show: false,
        left: 'center',
        top: 'top',
        orient: 'horizontal',
        itemGap: 5,
        itemWidth: 25,
        itemHeight: 14,
        borderRadius: 5,
        icon: 'circle',
        textStyle: {
          fontFamily: 'sans-serif',
          fontSize: 12,
          color: '#333',
          fontWeight: 'normal'
        }
      },
      series: [
        {
          name: 'series one',
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          barWidth: 10,
          label: {
            show: false,
            fontFamily: 'sans-serif',
            fontSize: 12,
            fontWeight: 'normal',
            position: 'top'
          }
        }
      ]
    }
  },
  // 折线图
  basicLine: {
    width: 500,
    height: 300,
    top: 540,
    left: 960,
    zIndex: 1,
    active: false,
    type: 'Echarts-Line',
    title: '基本折线图',
    name: '基本折线图',
    icon: 'fa-solid fa-chart-line',
    dataOptions: {
      type: 'static'
    },
    options: {
      grid: {
        containLabel: true,
        top: 50,
        right: 50,
        bottom: 50,
        left: 50
      },
      color: [
        '#2f4554',
        '#c23531',
        '#61a0a8',
        '#d48265',
        '#91c7ae',
        '#749f83',
        '#ca8622',
        '#bda29a',
        '#6e7074',
        '#546570',
        '#c4ccd3'
      ],
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
        show: true,
        type: 'category',
        name: 'x轴',
        nameTextStyle: {
          color: '#333',
          fontWeight: 'normal',
          fontFamily: 'sans-serif',
          fontSize: 12
        },
        axisLabel: {
          show: true,
          color: '#333',
          fontWeight: 'normal',
          fontFamily: 'sans-serif',
          fontSize: 12
        },
        axisTick: {
          show: true,
          inside: false,
          length: 5
        },
        axisLine: {
          show: true
        },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value',
        name: 'y轴',
        nameTextStyle: {
          color: '#333',
          fontWeight: 'normal',
          fontFamily: 'sans-serif',
          fontSize: 12
        },
        axisLabel: {
          show: true,
          color: '#333',
          fontWeight: 'normal',
          fontFamily: 'sans-serif',
          fontSize: 12
        },
        axisTick: {
          show: true,
          inside: false,
          length: 5
        },
        axisLine: {
          show: true
        }
      },
      legend: {
        show: false,
        left: 'center',
        top: 'top',
        orient: 'horizontal',
        itemGap: 5,
        itemWidth: 25,
        itemHeight: 14,
        borderRadius: 5,
        icon: 'circle',
        textStyle: {
          fontFamily: 'sans-serif',
          fontSize: 12,
          color: '#333',
          fontWeight: 'normal'
        }
      },
      series: [
        {
          name: 'series one',
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
          symbol: 'emptyCircle',
          symbolSize: 10,
          label: {
            show: false,
            fontFamily: 'sans-serif',
            fontSize: 12,
            fontWeight: 'normal',
            position: 'top'
          }
        }
      ]
    }
  }
}
