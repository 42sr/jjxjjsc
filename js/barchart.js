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
      data: ['消防车登高面消防救援口', '消防车登高操作场地', '建筑外墙和屋面保温', '对疏散设施影响', '消防电梯',
        '消防水泵', '消防给水设备', '室外消火栓及取水口', '水泵接合器', '消防排水'
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