<template>
    <div>
        <Row>
            <Col :md="4">
            <div style="" class="doc-header">
                <Upload action="https://win-east.cn/wins/activity.php?c=Test&a=UploadAction">
                    <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
                </Upload>
            </div>
            <div style="" class="doc-content">
                <h5>自定义时间轴点</h5>
                <p>接受一个 slot 来自定义轴点的内容，比如一个图标。</p>
            </div>
            </Col>
        </Row>
        <Row>
            <Col :md="4">
            <div style="" class="doc-header">
                <Upload
                        multiple
                        action="https://win-east.cn/wins/activity.php?c=Test&a=UploadAction">
                    <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
                </Upload>
            </div>
            <div style="" class="doc-content">
                <h5>多选</h5>
                <p>设置属性 multiple，可以选择多个文件。</p>

            </div>
            </Col>
        </Row>
        </Row>
        <Row>
            <Col :md="4">
            <div style="" class="doc-header">
                <div>
                    <Upload
                            :before-upload="handleUpload"
                            action="https://win-east.cn/wins/activity.php?c=Test&a=UploadAction">
                        <Button type="ghost" icon="ios-cloud-upload-outline">选择要上传文件的文件</Button>
                    </Upload>
                    <div v-if="file !== null">待上传文件：{{ file.name }}
                        <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? '上传中' : '点击上传'}}
                        </Button>
                    </div>
                </div>
            </div>
            <div style="" class="doc-content">
                <h5>手动上传</h5>
                <p> 绑定 before-upload，并返回false，可以阻止默认上传流程，手动控制文件上传。。</p>
            </div>
            </Col>
        </Row>
        <Row>
            <Col :md="4">
            <div style="" class="doc-header">
                <Upload
                        multiple
                        type="drag"
                        action="https://win-east.cn/wins/activity.php?c=Test&a=UploadAction">
                    <div style="padding: 20px 0">
                        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                        <p>点击或将文件拖拽到这里上传</p>
                    </div>
                </Upload>
            </div>
            <div style="" class="doc-content">
                <h5>拖拽上传</h5>
                <p>设置属性 type 为 drag，可以拖拽上传。</p>

            </div>
            </Col>
        </Row>
        <Row>
            <Col :md="4">
            <div style="" class="doc-header">
                <div>
                    <div class="demo-upload-list" v-for="item in uploadList">
                        <template v-if="item.status === 'finished'">
                            <img :src="item.url">
                            <div class="demo-upload-list-cover">
                                <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                            </div>
                        </template>
                        <template v-else>
                            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                        </template>
                    </div>
                    <Upload
                            ref="upload"
                            :show-upload-list="false"
                            :default-file-list="defaultList"
                            :on-success="handleSuccess"
                            :format="['jpg','jpeg','png']"
                            :max-size="2048"
                            :on-format-error="handleFormatError"
                            :on-exceeded-size="handleMaxSize"
                            :before-upload="handleBeforeUpload"
                            multiple
                            type="drag"
                            action="https://win-east.cn/wins/activity.php?c=Test&a=UploadAction"
                            style="display: inline-block;width:58px;">
                        <div style="width: 58px;height:58px;line-height: 58px;">
                            <Icon type="camera" size="20"></Icon>
                        </div>
                    </Upload>
                    <Modal title="查看图片" v-model="visible">
                        <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible"
                             style="width: 100%">
                    </Modal>
                </div>
            </div>
            <div style="" class="doc-content">
                <h5>自定义上传列表</h5>
                <p>可以自由控制上传列表，完成各种业务逻辑，示例是一个照片墙，可以查看大图和删除。</p>
                <p>设置属性 show-upload-list 为 false，可以不显示默认的上传列表</p>
                <p>设置属性 default-file-list 设置默认已上传的列表。 </p>
                <p>通过 on-success 等属性来控制完整的上传过程，详见API。</p>
                <p>另外，可以通过丰富的配置，来定制上传需求，本例中包含了：</p>
                <p>文件必须是 jpg 或 png 格式的图片。</p>
                <p>最多上传5张图片。</p>
                <p>每个文件大小不超过 2M。 </p>
            </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                file: null,
                loadingStatus: false,
                defaultList: [
                    {
                        'name': 'a42bdcc1178e62b4694c830f028db5c0',
                        'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
                    },
                    {
                        'name': 'bc7521e033abdd1e92222d733590f104',
                        'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
                    }
                ],
                imgName: '',
                visible: false,
                uploadList: []
            }
        },
        methods: {
            handleUpload(file) {
                this.file = file;
                return false;
            },
            upload() {
                this.loadingStatus = true;
                setTimeout(() => {
                    this.file = null;
                    this.loadingStatus = false;
                    this.$Message.success('上传成功')
                }, 1500);
            },
            handleView(name) {
                this.imgName = name;
                this.visible = true;
            },
            handleRemove(file) {
                // 从 upload 实例删除数据
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            handleSuccess(res, file) {
                // 因为上传过程为实例，这里模拟添加 url
                file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
                file.name = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            handleFormatError(file) {
                this.$Notice.warning({
                    title: '文件格式不正确',
                    desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
                });
            },
            handleMaxSize(file) {
                this.$Notice.warning({
                    title: '超出文件大小限制',
                    desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
                });
            },
            handleBeforeUpload() {
                const check = this.uploadList.length < 5;
                if (!check) {
                    this.$Notice.warning({
                        title: '最多只能上传 5 张图片。'
                    });
                }
                return check;
            },
        },
        mounted() {
            this.uploadList = this.$refs.upload.fileList;
        }

    }
</script>

<style>
    .demo-upload-list {
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
        margin-right: 4px;
    }

    .demo-upload-list img {
        width: 100%;
        height: 100%;
    }

    .demo-upload-list-cover {
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, .6);
    }

    .demo-upload-list:hover .demo-upload-list-cover {
        display: block;
    }

    .demo-upload-list-cover i {
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>



