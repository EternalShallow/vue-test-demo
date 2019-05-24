<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

  /***
   *      ┌─┐       ┌─┐
   *   ┌──┘ ┴───────┘ ┴──┐
   *   │                 │
   *   │       ───       │
   *   │  ─┬┘       └┬─  │
   *   │                 │
   *   │       ─┴─       │
   *   │                 │
   *   └───┐         ┌───┘
   *       │         │
   *       │         │
   *       │         │
   *       │         └──────────────┐
   *       │                        │
   *       │                        ├─┐
   *       │                        ┌─┘
   *       │                        │
   *       └─┐  ┐  ┌───────┬──┐  ┌──┘
   *         │ ─┤ ─┤       │ ─┤ ─┤
   *         └──┴──┘       └──┴──┘
   *                神兽保佑
   *               代码无BUG!
   */
  /***
   *                    _ooOoo_
   *                   o8888888o
   *                   88" . "88
   *                   (| -_- |)
   *                    O\ = /O
   *                ____/`---'\____
   *              .   ' \\| |// `.
   *               / \\||| : |||// \
   *             / _||||| -:- |||||- \
   *               | | \\\ - /// | |
   *             | \_| ''\---/'' | |
   *              \ .-\__ `-` ___/-. /
   *           ___`. .' /--.--\ `. . __
   *        ."" '< `.___\_<|>_/___.' >'"".
   *       | | : `- \`.;`\ _ /`;.`/ - ` : | |
   *         \ \ `-. \_ __\ /__ _/ .-` / /
   * ======`-.____`-.___\_____/___.-`____.-'======
   *                    `=---='
   *
   * .............................................
   *          佛祖保佑             永无BUG
   */
  created () {
    console.log(this.$route.meta)
  }
}
</script>

<style lang="less">
  @import "./assets/css/main.less";
  body, html, #app{
    width: 100%;
    height: 100%
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
</style>
