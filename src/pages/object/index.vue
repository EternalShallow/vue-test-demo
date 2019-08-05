<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'index',
  created () {
    // console.log(this.createBottle(1, 'as', false))
    // console.dir(this.numAdd)
  },
  methods: {
    createBottle () {
      console.log(arguments)
      console.log(this.superAdd(1, 23, 56, 2.3, 23))
      console.log(this.superAdd())
      return {
        name: arguments[0],
        price: arguments[1],
        isKeepWarn: arguments[2]
      }
    },
    superAdd () {
      let len = arguments.length
      let result
      if (len) {
        result = 0
        for (let i = 0; i < len; i++) {
          result = this.numAdd(arguments[i], result)
        }
      }
      return result
    },
    numAdd (num1, num2) { // 解决小数相加精度丢失
      let baseNum, baseNum1, baseNum2
      try {
        baseNum1 = num1.toString().split('.')[1].length
      } catch (e) {
        baseNum1 = 0
      }
      try {
        baseNum2 = num2.toString().split('.')[1].length
      } catch (e) {
        baseNum2 = 0
      }
      baseNum = Math.pow(10, Math.max(baseNum1, baseNum2))
      return (num1 * baseNum + num2 * baseNum) / baseNum
    },
    numSub (num1, num2) { // 解决小数相减精度丢失问题
      let baseNum, baseNum1, baseNum2
      let precision // 精度
      try {
        baseNum1 = num1.toString().split('.')[1].length
      } catch (e) {
        baseNum1 = 0
      }
      try {
        baseNum2 = num2.toString().split('.')[1].length
      } catch (e) {
        baseNum2 = 0
      }
      baseNum = Math.pow(10, Math.max(baseNum1, baseNum2))
      precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2
      return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision)
    },
    numMulti (num1, num2) { // 乘法精度
      let baseNum = 0
      try {
        baseNum += num1.toString().split('.')[1].length
      } catch (e) {
      }
      try {
        baseNum += num2.toString().split('.')[1].length
      } catch (e) {
      }
      return Number(num1.toString().replace('.', '')) * Number(num2.toString().replace('.', '')) / Math.pow(10, baseNum)
    },
    numDiv (num1, num2) { // 除法精度
      let baseNum1 = 0
      let baseNum2 = 0
      let baseNum3, baseNum4
      try {
        baseNum1 = num1.toString().split('.')[1].length
      } catch (e) {
        baseNum1 = 0
      }
      try {
        baseNum2 = num2.toString().split('.')[1].length
      } catch (e) {
        baseNum2 = 0
      }
      baseNum3 = Number(num1.toString().replace('.', ''))
      baseNum4 = Number(num2.toString().replace('.', ''))
      return (baseNum3 / baseNum4) * Math.pow(10, baseNum2 - baseNum1)
      // }
    },
    toDecimal2 (x) { // 保留两位小数
      var f = parseFloat(x)
      if (isNaN(f)) {
        return false
      }
      f = Math.round(x * 100) / 100
      var s = f.toString()
      var rs = s.indexOf('.')
      if (rs < 0) {
        rs = s.length
        s += '.'
      }
      while (s.length <= rs + 2) {
        s += '0'
      }
      return s
    }
  }
}
</script>

<style scoped>
  a{
    vertical-align: middle ;
  }

</style>
