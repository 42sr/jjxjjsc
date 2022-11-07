function drawBar(data) {
  var barchart = echarts.init(document.getElementById('chartbar'));

  // 指定图表的配置项和数据
  barchart.setOption({
    tooltip: {},
    color: "#4d7bd7",
    grid: {
      top: "10%",
      left: "15%",
      right: "10%",
      bottom: "30%"
    },
    xAxis: {
      data: ['消防车登高面消防救援口', '电气防爆', '建筑外墙和屋面保温', '对疏散设施影响', '应急照明配电箱',
        '消防水泵', '消防给水设备', '报警阀组', '水泵接合器', '疏散走道'
      ],
      axisLine: {
        lineStyle: {
          color: "#fff",
        }
      },
      axisLabel: {
        interval: 0,
        rotate: 15
      }
    },
    yAxis: {
      axisLine: {
        lineStyle: {
          color: "#fff",
        }
      }
    },
    series: [{

      type: 'bar',
      barWidth: 40,
      data: data
    }]
  });
}