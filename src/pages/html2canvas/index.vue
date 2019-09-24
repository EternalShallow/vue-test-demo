<template>
  <div class="html2canvas-box">
    <img class="real_pic" :src="dataURL" v-if="dataURL"/>
    <div class="imageWrapper" ref="imageWrapper" v-if="!dataURL">
      <slot>
        <div class="img-box">
          <!--<div class="txt orange">asdiasjdklasjdklasdjaksdhksa</div>-->
          <!--<div class="hongqi-icon"></div>-->
          <!--<div class="box-1"></div>-->
          <!--<div class="box-2"></div>-->
          <!--<img class="img" src="./img/1501569305168_.pic_hd.jpg" alt="">-->
          <img class="img" src="./img/1511569306387_.pic.jpg" alt="">
          <div class="hongqi">
            <img src="./img/hongqia.png" alt="">
            <!--<img src="./img/五星红旗红色图标.png" alt="">-->
          </div>
        </div>
      </slot>
    </div>
    <div class="btn" @click="toImage">生成图片</div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
export default {
  name: 'index',
  data () {
    return {
      dataURL: ''
    }
  },
  methods: {
    toImage () {
      html2canvas(this.$refs.imageWrapper, {
        backgroundColor: null,
        scale: 5
      }).then((canvas) => {
        let dataURL = canvas.toDataURL('image/png')
        this.dataURL = dataURL
      })
    }

  }
}
</script>

<style scoped lang="less">
  @import "./css/font";
  .html2canvas-box{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #fff;
    .imageWrapper{
      /*padding: 32px;*/
      font-size: 38px;
      .img-box{
        position: relative;
        width: 100%;
        /*width: 640px;*/
        /*height: 640px;*/
        margin: 0 auto;
        .img{
          display: block;
          width: 100%;
          height: 100%;
        }
        .box-1{
          width: 115px;
          height: 230px;
          background-color: #fff;
          position: absolute;
          right: 0;
          bottom: 0;
          border-top-right-radius: 150px;
        }
        .box-2{
          width: 230px;
          height: 115px;
          background-color: #fff;
          position: absolute;
          right: 0;
          bottom: 0;
          border-bottom-left-radius: 150px;
        }
        .hongqi{
          position: absolute;
          bottom: 0;
          right: 0;
          width: 260px;
          height: 260px;
          /*border: 10px solid #fff;*/
          /*background-image: url("./img/五星红旗红色图标.png");*/
          background-size: 200px 200px;
          background-repeat: no-repeat;
          background-position: center;
          /*background-color: #fff;*/
          border-bottom-left-radius: 50%;
          border-top-left-radius: 50%;
          border-radius: 50%;
          z-index: 1000;
          img{
            width: 100%;
            height: 100%;
          }
        }
        /*.hongqi-icon{*/
          /*position: absolute;*/
          /*bottom: 0;*/
          /*right: 0;*/
          /*width: 230px;*/
          /*height: 230px;*/
          /*border: 20px solid #fff;*/
          /*background-image: url("./img/五星红旗红色图标.png");*/
          /*background-size: 200px 200px;*/
          /*background-repeat: no-repeat;*/
          /*background-position: center;*/
          /*background-color: #fff;*/
          /*border-bottom-left-radius: 50%;*/
          /*border-top-left-radius: 50%;*/
          /*border-radius: 50%;*/
          /*z-index: 1000;*/
        /*}*/
      }
    }
    .txt {
      display: inline;
      font-family: 'Lobster';
      text-align: center;
      font-size: 40px;
      line-height: 80px;
      color: #fff;
      cursor: pointer;

      &:hover {
        color: #fff;
      }
    }

    .pink {
      filter: brightness(110%);
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #E91E63, 0 0 35px #E91E63, 0 0 40px #E91E63, 0 0 50px #E91E63, 0 0 75px #E91E63;
      animation: pink 1.5s ease-in-out infinite alternate;
    }
    .orange {
      color: #ff5722;
    }

    .orange:hover {
      animation: orange 1.5s ease-in-out infinite alternate;
    }

    .yellow {
      color: #ffeb3b;
    }

    .yellow:hover {
      animation: yellow 1.5s ease-in-out infinite alternate;
    }

    @keyframes pink {
      to {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #E91E63, 0 0 70px #E91E63, 0 0 80px #E91E63, 0 0 100px #E91E63, 0 0 150px #E91E63;
      }
    }

    @keyframes orange {
      to {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff5722, 0 0 70px #ff5722, 0 0 80px #ff5722, 0 0 100px #ff5722, 0 0 150px #ff5722;

      }
      from {
        filter: brightness(110%);
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff5722, 0 0 35px #ff5722, 0 0 40px #ff5722, 0 0 50px #ff5722, 0 0 75px #ff5722;
      }
    }

    @keyframes yellow {
      to {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ffeb3b, 0 0 70px #ffeb3b, 0 0 80px #ffeb3b, 0 0 100px #ffeb3b, 0 0 150px #ffeb3b;

      }
      from {
        filter: brightness(110%);
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ffeb3b, 0 0 35px #ffeb3b, 0 0 40px #ffeb3b, 0 0 50px #ffeb3b, 0 0 75px #ffeb3b;
      }
    }

    .btn{
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      width: 600px;
      height: 100px;
      text-align: center;
      background-color: #ff6352;
      color: #fff;
      font-size: 40px;
      line-height: 100px;
    }
  }
</style>
