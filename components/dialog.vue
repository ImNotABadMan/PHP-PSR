<template>
    <div class='md-cont' v-show='showstate'>
        <div class='md-wrapper' >
            <div class='md-title'>
            <slot name='tlt' >
                标题
            </slot>
            </div>
            <div class='md-text'>
            <slot name='text' >
                这里是弹框内容
            </slot>
            </div>
            <div class='footer'>
                <div v-if='type=="confirm"' @click='tocancel' class='md-btn'>取消</div>
                <div class='md-btn' @click='took'>确定</div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'modal',
    props:['type','showstate'],
    methods:{
        tocancel:function(){
            this.$emit('tocancel');
        },
        took:function(){
            this.$emit('took');
        }
    }
}
</script>
<style scoped>
.md-cont{position:fixed;left:0;right: 0;top:0;bottom: 0;
    z-index: 500;background:rgba(0,0,0,0.3);text-align:center;
    overflow: hidden;white-space:nowrap;}
.md-cont:after{content:"";display:inline-block;width:0;
height:100%;visibility: hidden;vertical-align:middle;}
.md-wrapper{display:inline-block;vertical-align:middle;
    background:#fff;color:#333333;font-size:0.34rem;
    padding-top:0.2rem;border-radius: 0.1rem;max-width:100%;}
.md-title{font-size:0.34rem;text-align:center;line-height:0.6rem;}
.md-text{font-size:0.25rem;text-align:center;line-height:0.4rem;padding:0.2rem 0.5rem;}
.footer{display:flex;border-top:0.01rem solid #E5E5E5;
    line-height:0.88rem;color:#488BF1;font-size:0.32rem;}
.md-btn{flex:1;}
.md-btn +.md-btn{border-left:0.01rem solid #E5E5E5;}
</style>