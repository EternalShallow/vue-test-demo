<template>
  <transition>
    <div class="toast box horizontal center" :class="opacity" v-if="isShowToastBox" @touchmove.prevent>
      <div v-if="type === 'none'" class="rectangleBox" v-text="text"></div>
      <div v-else class="squareBox box horizontal center">
        <div>
          <!--加载中-->
          <svg v-if="type === 'loading'" data-v-ecaca2b0="" viewBox="0 0 64 64" class="spinner" style="fill: rgb(170, 170, 170); stroke: rgb(170, 170, 170);"><g stroke-width="4" stroke-linecap="round"><line y1="17" y2="29" transform="translate(32,32) rotate(180)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(210)"><animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(240)"><animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(270)"><animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(300)"><animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(330)"><animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(0)"><animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(30)"><animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(60)"><animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(90)"><animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(120)"><animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(150)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line></g></svg>
          <!--成功-->
          <span v-if="type === 'success'" class="iconfont icon-yuanxingxuanzhongfill fs60"></span>
          <!--叹号-->
          <span v-if="type === 'fail'" class="iconfont icon-warn-fill fs60"></span>
          <!--叉号-->
          <span v-if="type === 'cross'" class="iconfont icon-guanbi2fill fs60"></span>
          <div class="pclass">
            <p v-text="text" class="textclass1"></p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
let t1
export default{
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    text: {
      default: 'loading'
    },
    type: {
      default: 'loading',
      require: true
    },
    opacity: {
      default: 'opacity0'
    },
    time: {
      default: 2000
    },
    done: {
      type: Function,
      default: null
    }
  },
  data () {
    return {
      isShowToastBox: false
    }
  },
  methods: {
    showToastBox: function (time) {
      this.isShowToastBox = true
      this.downToast(time)
    },
    destroy: function () {
      this.$destroy()
      document.body.removeChild(this.$el)
    },
    downToast (time) { // 定时器 time=0 永久展示
      let that = this
      if (Number(time) === 0) {
        that.isShowToastBox = true
      } else {
        t1 = setTimeout(function () {
          that.isShowToastBox = false
          that.done && that.done()
          clearTimeout(t1) // 去掉定时器
        }, time)
      }
    }
  }
}
</script>
<style scoped lang="less">
  .opacity0{
    background: rgba(0,0,0,0);
  }
  .opacity3{
    background: rgba(0,0,0,.3);
  }
  .opacity5{
    background: rgba(0,0,0,.5);
  }
  .toast{
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left: 0;
    z-index: 9999900;
    .rectangleBox{
      min-width: 150px;
      max-width: 400px;
      padding: 18px 20px;
      background: rgba(0,0,0,.6);
      border-radius: 10px;
      text-align: center;
      color: rgba(255,255,255,1);
      font-size: 26px;
    }
    .squareBox{
      width: 240px;
      height:240px;
      background: rgba(0,0,0,.6);
      border-radius: 10px;
      text-align: center;
      color: rgba(255,255,255,1);
      box-sizing: border-box;
      padding-top: 30px;
    }
    .pclass{
      max-width: 200px;
    }
    .textclass1{
      font-size: 26px;
      margin-top: 30px;
    }
    .fs60{
      font-size: 80px;
    }
    .spinner{
      width: 70px;
      height: 70px;
    }
  }
</style>
