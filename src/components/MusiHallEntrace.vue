<template>
    <div class="float_button">
        <div
            @click="onBtnClicked"
            @="musicHall"
            ref="floatButton"
            class="float_info"
            :style="{'width': itemWidth + 'px', 'height': itemHeight + 'px', 'left': left + 'px', 'top': top + 'px'}"
        >
            <img src="../assets/grid_icon.png" alt="" srcset="">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            clientWidth: 0,
            clientHeight: 0,
            timer: null,
            currentTop: 0,
            left: 0,
            top: 0,
        }
    },
    props: {
        text: {                 // 按钮文本内容
            type: String,
            default: "首页"
        },
        itemWidth: {            // 悬浮按钮宽度
            type: Number,
            default: 40
        },
        itemHeight: {           // 悬浮按钮高度
            type: Number,
            default: 50
        },
        gapWidth: {             // 距离左右两边距离     
            type: Number,
            default: 0
        },
        coefficientHeight: {    // 从上到下距离比例
            type: Number,
            default: 0.55
        }
    },
    created() {
        this.clientWidth = document.documentElement.clientWidth
        this.clientHeight = document.documentElement.clientHeight
        this.left = this.clientWidth - this.itemWidth - this.gapWidth
        this.top = this.clientHeight * this.coefficientHeight
    },
    methods: {
        musicHall(){
        },
        onBtnClicked(){
            //this.$emit("onFloatBtnClicked")
             console.log("music hall")
             this.$router.push("/musichall")
        },
        handleScrollStart() {
            this.timer && clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.handleScrollEnd()
            }, 300)
            this.currentTop = document.documentElement.scrollTop || document.body.scrollTop
            if(this.left > this.clientWidth / 2) {
                this.left = this.clientWidth - this.itemWidth / 2
            } else {
                this.left = -this.itemWidth / 2
            }
        },
        handleScrollEnd(){
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            if(scrollTop === this.currentTop) {
                if(this.left > this.clientWidth/2) {
                    this.left = this.clientWidth - this.itemWidth - this.gapWidth
                } else {
                    this.left = this.gapWidth
                }
                clearTimeout(this.timer)
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            const floatButton = this.$refs.floatButton
            floatButton.addEventListener("touchstart", () => {
                floatButton.style.transition = 'none'
            })
            
            // 在拖拽的过程中，组件应该跟随手指的移动而移动。
            floatButton.addEventListener("touchmove", (e) => {
                if (e.targetTouches.length === 1) {         // 一根手指
                    let touch = e.targetTouches[0]
                    this.left = touch.clientX - 20
                    this.top = touch.clientY - 25
                }
            })
            
			// 拖拽结束以后，重新调整组件的位置并重新设置过度动画。
            floatButton.addEventListener("touchend", () => {
                floatButton.style.transition = 'all 0.3s'
                if(this.left > document.documentElement.clientWidth / 2) {
                    this.left = document.documentElement.clientWidth - 40
                }else{
                    this.left = 0
                }
            })
        })
    },
    beforeDestroy(){
        // 添加监听页面滚动
        window.removeEventListener('scroll', this.handleScrollStart)
    },
    destroyed() {}
}
</script>
<style lang="less">
.float_button {
    .float_info{
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
        color: #666666;
        transition: all 0.3s;
        position: fixed;
        bottom: 436px;
        right: 0;
        width: 80px;
        height: 100px;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        z-index: 999;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 14px;
        cursor: pointer;
        .text{
            font-size: 24px;
            color: #fff;
        }
        img{
            width: 44px;
            height: 44px;
        }
    }
}
</style>
