<template>
  <div class="home-box">
    <div class="box">
      <div class="box1 box"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  components: {},
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="less">
  .home-box{
    .box{
      width: 100px;
      height: 100px;
      background-color: #a500b0;
      .box1{
        width: 50px;
        height: 50px;
        background-color: #1E9D6E;
        z-index: -1;
      }
    }
  }
</style>
