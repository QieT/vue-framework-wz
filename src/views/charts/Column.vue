<template>
    <Row>

        <Col :span="24" style="background-color:white;padding: 5%">
        <div>
            <chart :options="option" class="echarts"></chart>
        </div>
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
                    color: ['#EF9A9A'],
                    title: {
                        text: '新增关注',
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
                        left: '-3%',
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
                            name:'邮件营销',
                            type:'bar',
                            barWidth:'30%',
                            stack: '总量',
                            itemStyle: {normal: {
                                    borderRadius:0.3
                                }},
                            data:[120, 132, 101, 134, 90, 230, 210]
                        }
                    ]
                }



            }
        }
    }
</script>