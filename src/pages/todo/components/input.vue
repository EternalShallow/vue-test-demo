<template>
  <div class="form-group">
    <input type="text" class="form-control"  placeholder="" v-model="value"  />
    <button type="button" class="btn btn-default" @click="addItem">Add Item</button>
  </div>
</template>

<script>
export default {
  name: 'input',
  data () {
    return {
      value: '',
      id: 0
    }
  },
  methods: {
    addItem () {
      let item = {
        value: this.value,
        id: ++this.id
      }
      this.$store.dispatch('onAddTodo', item)
    }
  }
}
</script>

<style lang="less">
  /*%box{display:-webkit-box;-webkit-box-pack:center;-webkit-box-align:center;}*/
  .form-group{
    .form-control{-webkit-box-flex:1;}
  }
</style>
