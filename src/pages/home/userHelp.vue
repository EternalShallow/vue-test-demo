<template>
  <div class="userHelpDetails">
    <!-- 标题 -->
    <header class="header">
      <div class="title">{{article.title }}</div>
      <!--<div class="close" @click="closeWindow"><img src="../../assets/img/userhelpClose.png" alt=""></div>-->
    </header>
    <!-- 中间 -->
    <section class="section">
      <!-- 详情 -->
      <div class="questionAnswer" v-html="article.content"></div>
      <!-- 相关 -->
      <div class="related">
        <div class="relatedTitle">相关问题</div>
        <div class="questionTitles">
          <div v-for="(item, index) in article.related" @click="routerAnother(item)" class="questionTitle" :key="index">
            {{ item.title }}
          </div>
        </div>
      </div>
    </section>
    <!-- 顶踩 -->
    <!--<footer class="footer">-->
      <!--&lt;!&ndash; 顶 &ndash;&gt;-->
      <!--<div class="good">-->
        <!--<div v-if="article.isResolve === 0 || article.resolveType === 1" @click="rate('good')"><img-->
          <!--src="../../assets/img/userhelpGood01.png" alt="有用"></div>-->
        <!--<div v-else-if="article.isResolve === 1 && article.resolveType === 0"><img-->
          <!--src="../../assets/img/userhelpGood02.png" alt="有用"></div>-->
        <!--<div>很棒，解决了我的问题</div>-->
      <!--</div>-->
      <!--&lt;!&ndash; 踩 &ndash;&gt;-->
      <!--<div class="bad">-->
        <!--<div v-if="article.isResolve === 0  || article.resolveType === 0" @click="rate('bad')"><img-->
          <!--src="../../assets/img/userhelpBad01.png" alt="没用"></div>-->
        <!--<div v-else-if="article.isResolve === 1 && article.resolveType === 1"><img-->
          <!--src="../../assets/img/userhelpBad02.png" alt="没用"></div>-->
        <!--<div>不是我想要的答案</div>-->
      <!--</div>-->
    <!--</footer>-->
  </div>
</template>

<script>
export default {
  name: 'userHelpDetails',
  props: [],
  comments: {},
  data () {
    return {
      article: {
        title: '专人专用，不可解绑了送给他人佩戴',
        content: '<p>安顿护心手表请勿与他人交叉佩戴、混戴。安顿护心手表仅限一个用户佩戴，多人佩戴会造成数据混乱，产生误报、错报、漏报现象。 </p><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555915742904&di=eab4b37f58188e618b0f4bdb1759cbb3&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D1218451250%2C3052020845%26fm%3D191%26app%3D48%26wm%3D1%2C17%2C90%2C45%2C20%2C7%26wmo%3D0%2C0%26n%3D0%26g%3D0n%26f%3DJPEG%3Fsec%3D1853310920%26t%3D1db5921f2ff996b0730d7ef081a1e2b4" alt="">',
        related: [
          {
            title: '专人专用，不可解绑了送给他人佩戴。',
            id: '123'
          },
          {
            title: '专人专用，不可解绑了送给他人佩戴。',
            id: '456'
          },
          {
            title: '专人专用，不可解绑了送给他人佩戴。',
            id: '789'
          }
        ],
        isResolve: 0,
        resolveType: ''
      }
    }
  },
  computed: {},
  watch: {
    '$route' (to, from) {
      if (to.path === '/userHelpDetails') { // 判断条件2  监听路由名 监听你从什么路由跳转过来的
        console.log(111)
        console.log(this.$route.query)
      }
    }
  },
  methods: {
    closeWindow () {
      alert('关闭窗口')
    },
    // 跳另外一篇
    routerAnother (item) {
      let _this = this
      let id = item.id
      _this.$router.push({
        path: '/userHelpDetails',
        query: {
          id: id,
          r: Math.random()
        }
      })
    },
    // 评价
    rate (type) {
      let _this = this
      if (_this.article.isResolve === 0) {
        _this.article.isResolve = 1
        if (type === 'good') {
          _this.article.resolveType = 0
        } else if (type === 'bad') {
          _this.article.resolveType = 1
        }
      }
    }
  },
  created () {

  }
}
</script>

<style scoped type="text/scss" lang="less">
  .userHelpDetails {
    box-sizing: border-box;
    width: 100%;
    padding: 0 18px;
    /*头部*/
    .header {
      height: 52px;
      border-bottom: 0.5px solid #E5E6E6;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title {
        font-family: PingFangSC-Medium;
        font-size: 15px;
        color: #333;
      }
      .close {
        img {
          width: 14px;
        }
      }
    }
    /*中间*/
    .section {
      width: 100%;
      height: calc(100vh - 127px);
      overflow-y: scroll;
      padding: 12.5px 0 38px;
      /*问题回答*/
      .questionAnswer {
        width: 100%;
        /deep/ * {
          width: 100%;
        }
      }
      /*相关问题*/
      .related {
        padding: 35px 0 0;
        .relatedTitle {
          font-family: PingFangSC-Regular;
          font-size: 13px;
          color: #9B9B9B;
        }
        .questionTitles {
          width: 100%;
          .questionTitle {
            cursor: pointer;
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #0096FF;
            padding-top: 15px;
          }
        }
      }
    }
    /*footer*/
    .footer {
      position: fixed;
      z-index: 999;
      width: 100%;
      height: 75px;
      bottom: 0;
      left: 0;
      border-top: 0.5px solid #E5E6E6;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .good, .bad {
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size: 13px;
        color: #9B9B9B;
        img {
          margin-bottom: 6px;
          width: 20px;
        }
      }
    }
  }
</style>
