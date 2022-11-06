function drawPie(data) {
  var color = ["#4db890", "#4e7ad7"];

  var piechart = echarts.init(document.getElementById('chartpie'));
  piechart.setOption({
    // 图例
    legend: [{
      selectedMode: false, // 图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭。
      top: 0,
      left: "center",
      textStyle: {
        // 图例的公用文本样式。
        fontSize: 14,
        color: "#fff",
      },
      data: ["已复核问题报告", "待复核问题报告"],
    }, ],

    // 提示框
    tooltip: {
      show: true, // 是否显示提示框
      formatter: "{b} </br> {c} </br> 占比{d}%", // 提示框显示内容,此处{b}表示各数据项名称，此项配置为默认显示项，{c}表示数据项的值，默认不显示，({d}%)表示数据项项占比，默认不显示。
    },

    // graphic 是原生图形元素组件。可以支持的图形元素包括：image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
    graphic: {
      type: "text", // [ default: image ]用 setOption 首次设定图形元素时必须指定。image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
      top: "center", // 描述怎么根据父元素进行定位。top 和 bottom 只有一个可以生效。如果指定 top 或 bottom，则 shape 里的 y、cy 等定位属性不再生效。『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 group 的子元素，父元素就是 group 元素。
      left: "center", // 同上
      style: {
        text: "", // 文本块文字。可以使用 \n 来换行。[ default: '' ]
        fill: "#fff", // 填充色。
        fontSize: 16, // 字体大小
        fontWeight: "bold", // 文字字体的粗细，可选'normal'，'bold'，'bolder'，'lighter'
      },
    },

    series: [{
      name: "圆环图系列名称", // 系列名称
      type: "pie", // 系列类型
      center: ["50%", "50%"], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
      radius: ["30%", "45%"], // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
      hoverAnimation: true, // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
      color: color, // 圆环图的颜色
      label: {
        // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等.
        normal: {
          show: false, // 是否显示标签[ default: false ]
          position: "outside", // 标签的位置。'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区。'inside','inner' 同 'inside',饼图扇区内部。'center'在饼图中心位置。
          formatter: "{b} : {c}", // 标签内容
        },
      },

      data: data

    }, ],
  });
}