<template>
  <div></div>
</template>

<script>
export default {
  name: 'objectTest',
  created () {
    // console.log(this.createBottle(1, 'as', false))
    console.log(this.quote('hello world', {char: '*'}))
    console.log(this.quote('hello worlh', {char: 'h', shipIfQuoted: true}))
    console.log(this.quote('Sunny day'))
  },
  methods: {
    createBottle () {
      return {
        name: arguments[0],
        price: arguments[1],
        isKeepWarn: arguments[2]
      }
    },
    quote (str, {char = '', shipIfQuoted = true} = {}) {
      console.log(arguments)
      console.log(shipIfQuoted)
      const length = str.length
      if (shipIfQuoted && str[0] === char && str[length - 1] === char) {
        return str
      }
      return char + str + char
    }
  }
}
</script>

<style scoped>

</style>
