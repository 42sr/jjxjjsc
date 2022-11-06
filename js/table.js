function newProjTable() {
  var newHead = ["省份", "城市", "项目名称", "添加日期"]
  var datas = [{
    province: '山东省',
    city: '青岛市',
    project: '碧桂园二期',
    date: "2022年11月2日"
  }, {
    province: '浙江省',
    city: '杭州市',
    project: '特殊康复中心',
    date: "2022年11月3日"
  }, ];

  var thead = document.querySelector('thead')
  var tbody = document.querySelector('tbody')

  var tr = document.createElement('tr');
  thead.appendChild(tr)
  for (var k in newHead) {
    var th = document.createElement("th")
    th.innerText = newHead[k]
    tr.appendChild(th)
  }


  for (var i = 0; i < datas.length; i++) {

    //创建行
    var tr = document.createElement('tr');
    tbody.appendChild(tr);

    //创建单元格

    for (var k in datas[i]) {
      var td = document.createElement("td");
      td.innerText = datas[i][k];
      tr.appendChild(td);
    }
  }
}

function projProblem(datas) {
  var probHead = ["城市", "项目名称", "问题数（条）"]

  var tbody = document.querySelector('tbody')
  var thead = document.querySelector('thead')

  var tr = document.createElement('tr');
  thead.appendChild(tr)
  for (var k in probHead) {
    var th = document.createElement("th")
    th.innerText = probHead[k]
    tr.appendChild(th)
  }


  for (var i = 0; i < datas.length; i++) {

    //创建行
    var tr = document.createElement('tr');
    tbody.appendChild(tr);

    //创建单元格

    for (var k in datas[i]) {
      var td = document.createElement("td");
      td.innerText = datas[i][k];
      tr.appendChild(td);
    }
  }
}