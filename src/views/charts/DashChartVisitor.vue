<template>

  <Col :span="24">
    <chart :options="option" class="echarts" id="chart" > </chart>

  </Col>

</template>

<style scoped>
.echarts {
  border-radius:4px;
    
  height: 250px;
  width: 100%;

}


</style>

<script>



var data = [{
    value: 3661,
    name: '<10w'
}, {
    value: 5713,
    name: '10w-50w'
}, {
    value: 9938,
    name: '50w-100w'
}, {
    value: 17623,
    name: '100w-500w'
}, {
    value: 3299,
    name: '>500w'
}];


export default {
    mounted(){
    },
  data: function () {
   
    return {





option : {
    title: {
        text: '首条阅读量统计',
        x: '5%',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 20,
        }
    },
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : true,
            data : ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis : {
        type:'value',
        axisLine:{
            show:false
        },
        axisTick:{
            show:false
        }
    },
    series: [{
        type: 'bar',
        color: ['#82B1FF'],
        barWidth:'20%',
        label: {
            normal: {
                formatter: '{d}%',
                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 12
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: data
    }]
}
  
    



    }
  }
}
</script>