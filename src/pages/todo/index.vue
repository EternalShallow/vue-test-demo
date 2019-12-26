<template>
  <div>
    <h1>Vue.js Vue TodoList</h1>
    <hr>
    <todoInput />
    <todoList />
    <p>todoList 数量：{{todoCount}}</p>
    <pre>{{msg}}</pre>
  </div>

</template>

<script>
import todoInput from './components/input'
import todoList from './components/list'
import { mapGetters } from 'vuex'
export default {
  name: 'index',
  components: {
    todoInput,
    todoList
  },
  computed: {
    ...mapGetters({
      todoCount: 'nCount',
      msg: 'msg'
    })
  },
  created () {
    let a = [1, 12, 213, 213, 123, 1, 1, 1, 23, 23]
    // console.log(this.distinct(a, []))
    // console.log(this.distinct1(a))
    console.log(this.unique(a))
  },
  methods: {
    // 利用indexOf检测元素在数组中第一次出现的位置是否和元素现在的位置相等，如果不等则说明该元素是重复元素
    distinct (a, b) {
      let arr = a.concat(b)
      return arr.filter((item, index) => {
        return arr.indexOf(item) === index
      })
    },
    // ES6 中的 Set 去重
    unique (array) {
      return [...new Set(array)]
    },
    // 加一行遍历冒泡(相邻元素去重)
    distinct1 (array) {
      var res = []
      var sortedArray = array.concat().sort()
      var seen
      for (var i = 0, len = sortedArray.length; i < len; i++) {
        // 如果是第一个元素或者相邻的元素不相同
        if (!i || seen !== sortedArray[i]) {
          res.push(sortedArray[i])
        }
        seen = sortedArray[i]
      }
      return res
    }
  },
  data () {
    return {
      message: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less">
  /*%box{display:-webkit-box;-webkit-box-pack:center;-webkit-box-align:center;}*/
  #app{width:400px;margin:0 auto;}
  h1{text-align:center;}
</style>
