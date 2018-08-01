<template>
  <Row>

  <Col :span="24" style="background-color:white;padding: 5%">
    <div style="border-bottom: 1px solid #e8e8e8">
    <chart :options="option" class="echarts"></chart>
    </div>
    日访问量 1234
  </Col>

  </Row>
</template>

<style scoped>
.echarts {
  height: 200px;
  width: 100%;
  border-radius: 25px;
}

</style>

<script>
var xData = function() {
    var data = [];
    for (var i = 1; i < 13; i++) {
        data.push(i + "月份");
    }
    return data;
}();


export default {
  data: function () {
    let data = []

    for (let i = 0; i <= 360; i++) {
        let t = i / 180 * Math.PI
        let r = Math.sin(2 * t) * Math.cos(2 * t)
        data.push([r, i])
    }

    return {



option : {
    color: ['#B388FF'],
    title: {
        text: '首条访问量',
        textStyle:{
            fontWeight:'normal',
            fontSize:14,
            color:'#a6a6a6'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '-7%',
        right: '4%',
        bottom: '0',
        containLabel: true
    },
    xAxis : [
        {
            show:false,
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : {show:false},
    series : [
        {
            smooth:true,
            name:'邮件营销',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[120, 132, 101, 134, 90, 230, 210]
        }
    ]
}



    }
  }
}
</script>