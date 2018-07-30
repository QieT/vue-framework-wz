<template>
    <div class="animated fadeIn">
        <el-select v-model="value1" placeholder="请选择">
            <el-option
                    v-for="item in items"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>
        <Row :gutter="16">

            <Col :xs="24" :sm="12" :md="6" :lg="6">

            <dash-chart-large></dash-chart-large>


            </Col>
            <Col :xs="24" :sm="12" :md="6" :lg="6">

            <sale-chart></sale-chart>


            </Col>
            <Col :xs="24" :sm="12" :md="6" :lg="6">

            <bar></bar>


            </Col>
            <Col :xs="24" :sm="12" :md="6" :lg="6">

            <column></column>


            </Col>

        </Row>
        <Row>
            <Col :xs="24" :sm="12" :md="12" :lg="24" style="margin-top:10px;background: #fff">
            <choose-text style="margin: 20px;float: left;width: 200px" v-bind:style1="color" @getValue="unname" v-bind:style2="color1" v-bind:items="items"></choose-text>
            <Date-picker type="daterange" format="yyyy年MM月dd日" :options="options2" placement="bottom-end" placeholder="选择日期" style="width: 250px;margin:20px;float: right"></Date-picker>
            <column></column>
            </Col>
        </Row>
    </div>
</template>

<script>

    import DashChartLarge from './charts/DashChartLarge';
    import SaleChart from './charts/SaleChart';
    import Column from './charts/Column';
    import Bar from './charts/Bar';
    import ChooseText from './components/ChooseText';
    let spanValue='';
    export default {
        components: {
            ChooseText,
            DashChartLarge,SaleChart,Bar,Column},
        name: 'dashboard',
        data() {
            return {
                color:{ color:'#000'},
                color1:{color:'#00f'},
                items:[{
                    value:1,
                    label:'今日'
                },{
                    value:2,
                    label:'本周'
                },{
                    value:3,
                    label:'本月'
                },{
                    value:4,
                    label:'全年'
                }],
                value1: 0,
                value2: 0,
                value3: 0,

                speed: 10000,
                options2: {
                    disabledDate (date) {
                        const disabledDay = date.getDate();
                        return disabledDay === 15;
                    },
                    shortcuts: [
                        {
                            text: '最近一周',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            },

                        },
                        {
                            text: '最近一个月',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '最近三个月',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
                }
            }
        },
        methods: {
            unname(res){
                console.log(res)
            },
            test_logout() {
                this.$store.dispatch('LogOut').then(() => {
                    this.$router.push({path: '/login'});
                }).catch(err => {
                    this.$message.error(err);
                });
            }
        },
        mounted() {
            const token = this.$store.getters.roles[0];

            this.$Notice.success({
                title: '欢迎使用雯思东方后台管理系统',
                desc: `你的账户权限是 ${token}`,
                duration: 10
            });

        }
    }
</script>


<style type="text/css" scoped>
    .staff_progress p {
        margin: 0
    }

    .animated {
        background-color: #eff0f4
    }

    li {
        margin-bottom: 11px;
        margin-left: 10px;
        margin-right: 10px
    }

    .demo-carousel img {
        height: 100%;
        width: 100%
    }

    h3, h4, h5 {
        margin: 12px
    }

    h3 {
        margin-bottom: 20px
    }

    p {
        margin: 12px
    }
    .state-info .panel .summary span {
        color: #49586e;
        font-size: 13px;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 10px
    }

    .state-info .panel .summary h3 {
        font-size: 200%;
        font-weight: 700;
        line-height: 20px;
        margin: 0
    }

    .page-heading h3 {
        color: #49586e;
        font-size: 25px;
        font-size: 11%;
        font-weight: 400;
        margin: 10px 0
    }

    .chart-bar img {
        display: inline-block;
        width: 68px;
        height: 45px;
        vertical-align: top
    }

    .twt-info h3 {
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        font-weight: 900;
        margin: 10px 0 30px 0;
        text-align: center
    }

    .twt-info p {
        font-size: 18px;
        line-height: 25px;
        font-style: italic;
        margin: 0 0 20px 0;
        text-align: center
    }

    .twt-info p a {
        color: #98fdf4
    }

    .usr-info img {
        vertical-align: middle
    }

    .usr-info h4 {
        color: #658585;
        margin-bottom: 0
    }

    .usr-info .media-body span {
        color: #ea755c;
        font-size: 12px;
        margin-bottom: 20px;
        display: inline-block
    }

    .usr-info .media-body p {
        color: #b6bcbc
    }

    ul.user-states li {
        text-align: center;
        float: left;
        width: 33%;
        font-size: 18px;
        margin: 0
    }
</style>