<template>
  <transition name="fade">
    <div class="modal-mask" v-show="isShowMessageBox" @touchmove.prevent>
      <div class="modal-wrapper box center">
        <div class="modal-container" :class="list.length !== 0 ? 'mt1100px' : ''">
          <div class="modal-header fs28" v-show="title">
            <slot name="header">
              <div v-text="title"></div>
            </slot>
          </div>
          <div class="modal-body fs26" v-if="bodyshow">
            <slot name="body">
              <div v-html="content"></div>
            </slot>
          </div>
          <div class="modal-body1 fs28" v-if="body1show">
            <slot name="body1">
              <div v-for="item in list" :key="item.id">
                <div v-html="item" class="ellipsis"></div>
              </div>
            </slot>
          </div>
          <div class="modal-footer box fs26">
            <slot name="footer">
              <a v-show="cancelBtn" class="modal-default-button flex1" @click.stop="cancel">{{cancelBtnText}}</a>
              <a class="modal-primary-button flex1" @click.stop="confirm">{{cancelBtnText}}</a>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'confirm',
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    },
    bodyshow: {
      type: Boolean,
      default: true
    },
    body1show: {
      type: Boolean,
      default: false
    },
    cancelBtn: {
      type: Boolean,
      default: true
    },
    sureBtnText: {
      type: String,
      default: '确认'
    },
    cancelBtnText: {
      type: String,
      default: '取消'
    }
  },
  data () {
    return {
      isShowMessageBox: false,
      resolve: '',
      reject: '',
      promise: '', // 保存promise对象
      mt100px: 'mt100px'
    }
  },
  methods: {
    confirm () {
      this.isShowMessageBox = false
      this.resolve('confirm')
      this.remove()
    },
    cancel () {
      this.isShowMessageBox = false
      this.reject('cancel')
      this.remove()
    },
    showMsgBox () {
      console.log('0999')
      this.isShowMessageBox = true
      this.promise = new Promise((resolve, reject) => {
        this.reject = reject
        this.resolve = resolve
      })
      return this.promise
    },
    remove () {
      setTimeout(() => {
        this.destory()
      }, 300)
    },
    destory () {
      this.$destroy()
      document.body.removeChild(this.$el)
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/css/fun.less';
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
  }
  .modal-wrapper {
    width: 100%;
    height:100%;
    -webkit-user-select: none;
  }
  .modal-container {
    width: 470px;
    margin: 0 auto;
    border-radius: 15px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    overflow: hidden;
    padding-top: 20px;
    background-color: white;
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  .mt100px {
    margin-top: 200px;
  }
  .modal-header{
    padding: 10px 0;
    font-weight: 400;
    text-align: center;
    line-height: 1;
    background-color: #fff;
    color: #333333;
  }
  .modal-body {
    padding: 20px 40px;
    min-height: 80px;
    line-height: 1.2;
    word-wrap: break-word;
    word-break: break-all;
    color: #333333;
    text-align: center;
    background-color: #fff;
    padding-bottom: 30px;
  }
  .modal-body:first-child{
    padding: 2.7em 20px 1.7em;
    color: #333333;
  }
  .modal-body1 {
    padding: 20px 40px;
    min-height: 80px;
    line-height: 1.8;
    word-wrap: break-word;
    word-break: break-all;
    color: #333333;
    text-align: left;
    background-color: #fff;
    padding-bottom: 30px;
  }
  .modal-body1:first-child{
    padding: 2.7em 20px 1.7em;
    color: #333333;
  }
  .modal-footer{
    position: relative;
    line-height: 66px;
  }
  .modal-footer a{
    display: block;
    text-align: center;
    border-top: 1px solid #D5D5D5;
    height: 66px;
    font-size: inherit;
    color: #353535;
    background:white;
    line-height: 66px;
  }
  .modal-footer a:active{
    opacity: .85;
  }
  .modal-footer a.modal-primary-button {
    color: #FFFFFF;
    background-color: @emColor;
  }
  .fade-enter .modal-container,
  .fade-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  .modal-input-dialog{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 200;
    input[type='text']{
      width:100%;
      background: #f3f4f5;
      border: none;
      padding: 10px;
    }
  }
</style>
