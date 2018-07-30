<template>
    <div class="choose-text" :style='{style1:style2}'>
        <span v-for="item in items" :data-value="item.value" @click="active($event,style1,style2)">{{item.label}}</span>
    </div>
</template>

<script>
    export default {
        name: "choose-text",
        methods:{
            active(e,i,j){
                this.$emit('getValue',e.target.dataset.value)
                $(e.target).siblings().css(i);
                $(e.target).css(j);
            }
        },
        props:{
            style1:{
                type:Object,
                required:true
            },
            style2:{
                type:Object,
                required:true
            },
            items:{
                type:Array,
                required:true
            }
        }
    }
</script>

<style scoped>
    .choose-text{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .choose-text>span{
        cursor: pointer;
    }
</style>