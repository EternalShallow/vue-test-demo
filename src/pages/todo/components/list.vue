<template>
  <div class="todolist">
    <ul class="list-group">
      <li class="list-group-item" v-for="(item,index) in aTodos" :key="index">
        <span>{{item.value}}</span>
        <button class="btn btn-default" @click="delItem(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'list',
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'aTodos'
    ])
  },
  methods: {
    delItem (index) {
      this.$store.dispatch('onDelTodo', index)
    }
  }
}
</script>

<style lang="less">
  /*%box{display:-webkit-box;-webkit-box-pack:center;-webkit-box-align:center;}*/
  .list-group-item{display: -webkit-box;-webkit-box-align:center;
    span{
      display: block;
      -webkit-box-flex:1;
    }
  }
</style>
