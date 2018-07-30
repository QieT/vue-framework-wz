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
                    color: ['#13c2c2'],
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
                            type : 'value',
                            max:157324,
                            boundaryGap:[0,0.01],
                        }
                    ],
                    yAxis : {
                        show:false,
                        type:'category',
                        data:['one']
                    },
                    series : [
                        {
                            name:'邮件营销',
                            type:'bar',
                            barWidth:'30%',
                            stack: '总量',
                            itemStyle: {normal: {
                                    borderRadius:0.3
                                }},
                            data:[117324]
                        }
                    ]
                }



            }
        }
    }
</script>