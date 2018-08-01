<template>
    <div class="animated fadeIn">

        <Row>
            <Col :md="24">


            <div>
                <div style="position:relative;">
                    <Table class="hahaha" :columns="columns7" :data="page_video_list" ref="table"></Table>
                    <div style="position:absolute;top:0px;width:100%;height:100%;display: flex;align-items: center;justify-content: center;background: rgba(210, 216, 222, 0.5);" v-if="list_loadding">
                        <Spin size="large"></Spin>
                        <h6 style="color:#2d8cf0;margin-top:10px;">正在获取数据...</h6>
                    </div>
                </div>
                <Page :total="this.video_list.length" show-total @on-change="setInitPage"
                      style="text-align:right;margin-top:50px"></Page>

                <Button type="primary" size="large" @click="exportData(1)">
                    <Icon type="ios-download-outline"></Icon>
                    导出原始数据
                </Button>
                <Button type="primary" size="large" @click="exportData(2)">
                    <Icon type="ios-download-outline"></Icon>
                    导出排序和过滤后的数据
                </Button>
            </div>

            </Col>


            <Col :md="12">


            </Col>


        </Row>


    </div>
</template>

<script>
    var vue;
    import service from '../../../../utils/fetch';
    service.post('wins/activity.php?c=Test&a=request_test', {});
    $.ajax({
        url: 'https://www.win-east.cn/wins/activity.php?c=Test&a=request_test',
        complete: function (res) {
            console.log(res)
        }
    })
    import expandRow from '../../../table-expand.vue';
    import axios from 'axios';


    function getVideoName(video_name) {
        var video_name = '';
        var img_ext_list = [".jpg", ".png", ".jpeg"];
        img_ext_list.forEach(function (e) {
            if (video_name.indexOf(e) !== -1) {
                let point_index = video_name.indexOf(e);
                let leaf_index = video_name.lastIndexOf('/', point_index);
                let line_index = video_name.lastIndexOf('_', point_index);
                video_name = video_name.substring(line_index + 1);
                return video_name;

            }
        });


        var video_ext_list = [".mp4"];
        video_ext_list.forEach(function (e) {
            if (video_name.indexOf(e) !== -1) {
                let point_index = video_name.indexOf(e);
                let leaf_index = video_name.lastIndexOf('/', point_index);
                let line_index = video_name.lastIndexOf('_', point_index);
                video_name = video_name.substring(line_index + 1);
                return video_name;
            }
        });
        return video_name;

    };

    function getVideoDuration(video_duration_before) {
        let video_duration = parseInt(video_duration_before);
        if (video_duration <= 60) {
            if (video_duration < 10)
                video_duration = "00:00:0" + video_duration;
            else
                video_duration = "00:00:" + video_duration;

        }
        else if (video_duration > 60 && video_duration <= 60 * 60) {
            const minute = Math.floor(video_duration / 60);
            const s = Math.floor(video_duration % 60);
            if (minute < 10)
                video_duration = "00:0" + minute;
            else
                video_duration = "00:" + minute;


            if (s < 10)
                video_duration = video_duration + ":0" + s;

            else
                video_duration = video_duration + ":" + s;

        }
        else if (video_duration > 60 * 60 && video_duration < 60 * 60 * 60) {
            const hour = Math.floor(video_duration / 3600);

            const minute = Math.floor((video_duration % 3600) / 60);
            const s = Math.floor((video_duration % 3600) % 60);
            if (hour < 10)
                video_duration = "0" + hour;
            else
                video_duration = hour + '';

            if (minute < 10)
                video_duration = video_duration + ":0" + minute;
            else
                video_duration = video_duration + ":" + minute;

            if (s < 10)
                video_duration = video_duration + ":0" + s;
            else
                video_duration = video_duration + ":" + s;


        }

        return video_duration;
    }

    function getVideoSize(video_size) {
        if (video_size < 1024)
            video_size = Math.round(video_size * 100) / 100 + " B";
        else if (video_size >= 1024 && video_size < 1024 * 1024)
            video_size = Math.round(video_size / 1024 * 100) / 100 + " Kb";
        else if (video_size >= 1024 * 1024 && video_size < 1024 * 1024 * 1024)
            video_size = Math.round(video_size / (1024 * 1024) * 100) / 100 + " Mb";

        return video_size;
    }

    export default {
        components: {expandRow},

        name: 'user',
        data() {
            return {
                progresshow: false,
                files: [],
                loadingStatus: false,
                progresscount: 0,
                progresstatus: 'active',
                progressspeed: 0,
                video_list: [
                    {
                        number: 0,
                        userId:0,
                        sex:1,
                        area:'凉州',
                        headImg:'http://fanyi.bdstatic.com/static/translation/img/header/logo_cbfea26.png',
                        focusTime: "2017-08-10 17:03:54",
                        remark: "1岁",
                        tabId: 89757,
                        action: 0,
                    },
                    {
                        number: 0,
                        userId:0,
                        sex:1,
                        area:'凉州',
                        headImg:'http://fanyi.bdstatic.com/static/translation/img/header/logo_cbfea26.png',
                        focusTime: "2017-08-10 17:03:54",
                        remark: "1岁",
                        tabId: 89757,
                        action: 0,
                    },{
                        number: 0,
                        userId:0,
                        sex:1,
                        area:'凉州',
                        headImg:'http://fanyi.bdstatic.com/static/translation/img/header/logo_cbfea26.png',
                        focusTime: "2017-08-10 17:03:54",
                        remark: "1岁",
                        tabId: 89757,
                        action: 0,
                    },{
                        number: 0,
                        userId:0,
                        sex:1,
                        area:'凉州',
                        headImg:'http://fanyi.bdstatic.com/static/translation/img/header/logo_cbfea26.png',
                        focusTime: "2017-08-10 17:03:54",
                        remark: "1岁",
                        tabId: 89757,
                        action: 0,
                    },{
                        number: 0,
                        userId:0,
                        sex:1,
                        area:'凉州',
                        headImg:'http://fanyi.bdstatic.com/static/translation/img/header/logo_cbfea26.png',
                        focusTime: "2017-08-10 17:03:54",
                        remark: "1岁",
                        tabId: 89757,
                        action: 0,
                    },{
                        number: 0,
                        userId:0,
                        sex:1,
                        area:'凉州',
                        headImg:'http://fanyi.bdstatic.com/static/translation/img/header/logo_cbfea26.png',
                        focusTime: "2017-08-10 17:03:54",
                        remark: "1岁",
                        tabId: 89757,
                        action: 0,
                    },{
                        number: 0,
                        userId:0,
                        sex:1,
                        area:'凉州',
                        headImg:'http://fanyi.bdstatic.com/static/translation/img/header/logo_cbfea26.png',
                        focusTime: "2017-08-10 17:03:54",
                        remark: "1岁",
                        tabId: 89757,
                        action: 0,
                    }
                ],
                pageindex: 1,
                page_video_list: [],
                lodding: false,
                list_loadding: false,
                columns7: [
                    {
                        title: '序号',
                        align:'center',
                        key: 'number',
                        ellipsis: 'true',
                    },
                    {
                        title: '用户ID',
                        align:'center',
                        ellipsis: 'true',
                        key: 'userId',
                    },

                    {
                        title: '性别',
                        align:'center',
                        ellipsis: 'true',
                        key: 'sex',
                        render: (h, params) => {
                            const sex = parseInt(params.row.sex);
                            if (sex === 0) {
                                return '男';
                            }
                            else if (sex === 1) {
                                return '女';
                            }
                        }//render
                    },
                    {
                        title: '地区',
                        align:'center',
                        ellipsis: 'true',
                        key: 'area'
                    },
                    {
                        title: '头像',
                        ellipsis: 'true',
                        key: 'headImg',
                        align:'center',
                        render: (h, params) => {
                            const img = params.row.headImg;
                            return h('img',{
                                attrs:{
                                    src:img
                                }});
                        }//render
                    },
                    {
                        title: '关注时间',
                        align:'center',
                        ellipsis: 'true',
                        key: 'focusTime',
                    },
                    {
                        title: '备注',
                        align:'center',
                        ellipsis: 'true',
                        key: 'remark',
                    },
                    {
                        title: '标签ID',
                        align:'center',
                        ellipsis: 'true',
                        key: 'tabId',
                    },
                    {
                        title: '操作',
                        align:'center',
                        ellipsis: 'true',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small',
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.$router.push({path: '/tabledetail/' + (((this.pageindex - 1) * 10) + params.index)})
                                        }
                                    },
                                }, '查看标签'),
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small',
                                    },
                                    on: {
                                        click: () => {
                                            alert(1)
                                        }
                                    }
                                }, '备注')
                            ]);
                        }//render
                    },//{
                ],//cloumn
            }//return
        },//data
        methods: {
            handleUpload(file) {
                this.files.push(file);
                console.log(this.files);
                return false;
            },
            async upload(i) {
                vue=this;
                this.loadingStatus = true;
                //如果不需要用到上传后的返回值可以把 async...await 语法去掉
                let files = this.files, complete;
                if (files.length > 0) {
                    let form = new FormData();
                    form.append('file', files[i])
                    let data = await new Promise((resolve, reject) => {
                        axios({
                            url: 'https://win-east.cn/wins/activity.php?c=Test&a=UploadAction',
                            method: 'post',
                        }, form, {
                            onUploadProgress: progressEvent => {
                                complete = (progressEvent.loaded / progressEvent.total * 100 | 0) + '%'
                                vue.progresscount = complete;
                                vue.progresstatus = "active";
                                vue.progressspeed = "1.5 Mb/s";
                            }
                        }).then(res => {
                            this.loadingStatus = false;
                            resolve(res)
                            vue.$Notice.success({title: '上传成功'});
                            var obj = {
                                task_status: 1,
                                timestamp: files[i].lastModifiedDate,
                                video_duration: "11.121667",
                                video_size: getVideoSize(files[i].size),
                                video_name: files[i].name,
                            };
                            vue.video_list.push(obj);
                            vue.setInitPage(1);
                            this.files.splice(i,1);
                        })
                            .catch(err => {
                                console.log(err)
                                vue.progressspeed = 0;
                                vue.progresstatus = "wrong";

                                vue.$Message.error('上传失败');
                                vue.progresscount = 0;
                                vue.progresshow = false;
                            })
                    })
                }
            },
            selectedFile(e) {
                console.log(e.target.files[0])
                if(e.target.files) {
                    vue.progresshow = true;
                }
                //根据项目需求做具体处理，比如说获取文件名
            },
            remove(index) {
                this.video_list.splice(index, 1);
            },
            setInitPage(page) {

                this.page_video_list = [];
                this.pageindex = page;
                let video_list = this.video_list;
                for (let i = (page - 1) * 10; i < (page - 1) * 10 + 10; i++) {


                    if (i < video_list.length) {
                        this.page_video_list.push(this.video_list[i]);
                    }
                }
                console.log(this.page_video_list)
            },
            exportData(type) {
                if (type === 1) {
                    this.$refs.table.exportCsv({
                        filename: '原始数据',
                        columns: this.columns7,
                        data: this.video_list
                    });
                } else if (type === 2) {
                    this.$refs.table.exportCsv({
                        filename: '排序和过滤后的数据',
                        original: false
                    });
                }
            }
        },
        mounted() {
            const vue = this;

            this.list_loadding = true;
            setTimeout(function () {
                vue.list_loadding = false;

            }, 2000)
            this.setInitPage(1);
        },
    }


</script>


<style type="text/css" scoped>
    .ivu-tag-dot {
        border: none !important;
    }

    tr.ivu-table-row-hover td .ivu-tag-dot {
        background-color: #ebf7ff !important;
    }

    .demo-i-circle-custom h1 {
        color: #3f414d;
        font-size: 10px;
        font-weight: normal;
    }

    .demo-i-circle-custom p {
        color: #657180;
        font-size: 8px;
        margin: 5px 0 2px;
    }

    .demo-i-circle-custom span {
        display: block;
        padding-top: 15px;
        color: #657180;
        font-size: 10px;
    }

    .demo-i-circle-custom span :before {
        content: '';
        display: block;
        width: 50px;
        height: 1px;
        margin: 0 auto;
        background: #e0e3e6;
        position: relative;
        top: -20px;
    }
    .demo-i-circle-custom span i {
        font-style: normal;
        color: #3f414d;
    }

    /*wz-btn wz-btn-primary wz-btn-small wz-btn-loading*/

    .ivu-btn.ivu-btn-primary.ivu-btn-small:not(.ivu-btn-loading ) {
        padding: 2px 10px !important;
    }

    td.ivu-table-expanded-cell {
        background-color: white !important;

    }
</style>



