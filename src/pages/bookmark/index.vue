<template>
  <div class="bookmark-box">
    <div class="img-box">
      <img alt="" src="./images/new_user_welcome.jpeg">
      <div class="tag-t-box">
        <span class="txt">标签标签</span>
      </div>
      <!--<div class="tag-t-box1">-->
        <!--<span class="txt">标签标签</span>-->
      <!--</div>-->
      <!--<div class="tag-p-box1">-->
        <!--<div class="txt">详情</div>-->
      <!--</div>-->
    </div>
    <div class="img-box1">
      <img alt="" src="./images/new_user_welcome.jpeg">
      <div class="tag-t-box">
        <span class="txt">标签标签</span>
      </div>
    </div>
    <div class="img-box2">
      <img alt="" src="./images/new_user_welcome.jpeg">
      <div class="tag-p-box1">
        <div class="txt">详情</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped lang="less">
  .bookmark-box{
    padding: 20px 20px 0;
    .img-box{
      width: 100%;
      /*border-radius: 9px;*/
      padding-bottom: 20px;
      position: relative;
      img{
        display: block;
        width: 100%;
        border-radius: 9px;
        box-shadow: 4px 4px 14px 0 rgba(64, 60, 60, 0.22);
      }
      .tag-t-box{
        position: absolute;
        right: -10px;
        top: 20px;
        background: rgba(1, 14, 2, 0.8);
        width: 120px;
        line-height: 48px;
        text-align: left;
        height: 48px;
        color: #fff;
        font-size: 26px;
        font-weight: bold;
        //
        &::before {
          content: '';
          position: absolute;
          top: -4px;
          right: 0;
          border: 4px solid rgba(1, 14, 2, 0.8);
          border-right-color: transparent;
          border-top-width: 2px;
          border-bottom-width: 2px;
          border-top-color: transparent;
        }
        // 夹角
        &::after {
          content: '';
          position: absolute;
          right: 120px;
          z-index: 1;
          width: 6px;
          height: 0;
          line-height: 0;
          color: #21232e;
          border: 24px solid rgba(1, 14, 2, 0.8);
          border-left-color: #fff;
          border-left-width: 24px;
          /*padding-right: 3px;*/
          text-align: left;
          text-decoration: none;
          font-size: 24px;
        }
      }
      /*.tag-t-box1{*/
        /*position: absolute;*/
        /*left: -10px;*/
        /*bottom: 40px;*/
        /*background: rgba(1, 14, 2, 0.8);*/
        /*width: 120px;*/
        /*line-height: 48px;*/
        /*text-align: right;*/
        /*height: 48px;*/
        /*color: #fff;*/
        /*font-size: 26px;*/
        /*font-weight: bold;*/
        /*// 书签文字*/
        /*&::before {*/
          /*content: '';*/
          /*position: absolute;*/
          /*left: 120px;*/
          /*z-index: 1;*/
          /*width: 6px;*/
          /*height: 0;*/
          /*line-height: 0;*/
          /*color: #21232e;*/
          /*border: 24px solid rgba(1, 14, 2, 0.8);*/
          /*border-right-color: #fff;*/
          /*border-right-width: 24px;*/
          /*!*padding-right: 3px;*!*/
          /*text-align: left;*/
          /*text-decoration: none;*/
          /*font-size: 24px;*/
        /*}*/
        /*// 夹角*/
        /*&::after {*/
          /*content: '';*/
          /*position: absolute;*/
          /*top: -4px;*/
          /*left: 0;*/
          /*border: 4px solid rgba(1, 14, 2, 0.8);*/
          /*border-left-color: transparent;*/
          /*border-top-width: 2px;*/
          /*border-bottom-width: 2px;*/
          /*border-top-color: transparent;*/
        /*}*/
      /*}*/
      /*.tag-p-box1{*/
        /*position: absolute;*/
        /*top: 0;*/
        /*left: 40px;*/
        /*height: 100px;*/
        /*border: 20px solid rgba(1, 14, 2, 0.8);*/
        /*border-bottom-width: 20px;*/
        /*border-bottom-color: transparent;*/
        /*box-sizing: border-box;*/
        /*.txt{*/
          /*display: inline-block;*/
          /*position: absolute;*/
          /*top: -28px;*/
          /*left: -20px;*/
          /*width: 40px;*/
          /*height: 100px;*/
          /*line-height: 40px;*/
          /*writing-mode: vertical-lr;*/
          /*text-align: center;*/
          /*color: #fff;*/
          /*font-size: 26px;*/
          /*font-weight: bold;*/
        /*}*/
      /*}*/
    }
    .img-box1{
      width: 100%;
      /*border-radius: 9px;*/
      padding-bottom: 20px;
      position: relative;
      img{
        display: block;
        width: 100%;
        border-radius: 9px;
        box-shadow: 4px 4px 14px 0 rgba(64, 60, 60, 0.22);
      }
      .tag-t-box{
        position: absolute;
        left: -10px;
        bottom: 40px;
        background: rgba(1, 14, 2, 0.8);
        width: 120px;
        line-height: 48px;
        text-align: right;
        height: 48px;
        color: #fff;
        font-size: 26px;
        font-weight: bold;
        &::before {
          content: '';
          position: absolute;
          left: 120px;
          z-index: 1;
          width: 6px;
          height: 0;
          line-height: 0;
          color: #21232e;
          border: 24px solid rgba(1, 14, 2, 0.8);
          border-right-color: #fff;
          border-right-width: 24px;
          text-align: left;
          text-decoration: none;
          font-size: 24px;
        }
        // 夹角
        &::after {
          content: '';
          position: absolute;
          top: -4px;
          left: 0;
          border: 4px solid rgba(1, 14, 2, 0.8);
          border-left-color: transparent;
          border-top-width: 2px;
          border-bottom-width: 2px;
          border-top-color: transparent;
        }
      }
    }
    .img-box2{
      width: 100%;
      /*border-radius: 9px;*/
      padding-bottom: 20px;
      position: relative;
      img{
        display: block;
        width: 100%;
        border-radius: 9px;
        box-shadow: 4px 4px 14px 0 rgba(64, 60, 60, 0.22);
      }
      .tag-p-box1{
        position: absolute;
        top: 0;
        right: 40px;
        height: 100px;
        border: 20px solid rgba(1, 14, 2, 0.8);
        border-bottom-width: 20px;
        border-bottom-color: transparent;
        box-sizing: border-box;
        .txt{
          display: inline-block;
          position: absolute;
          top: -28px;
          left: -20px;
          width: 40px;
          height: 100px;
          line-height: 40px;
          writing-mode: vertical-lr;
          text-align: center;
          color: #fff;
          font-size: 26px;
          font-weight: bold;
        }
      }
    }
  }

</style>
