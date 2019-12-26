/**
 * created by
 * author zhangdongfei
 * date 2019/12/25
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    message: '',
    aTodos: [
      {
        value: 'default',
        id: 0
      }
    ]
  },
  getters: {
    nCount (state) {
      return state.aTodos.length
    },
    msg (state) {
      return state.message
    }
  },
  mutations: {
    ONADDTODO (state, item) {
      state.aTodos.push(item)
    },
    ONDELETETODO (state, index) {
      state.aTodos.splice(index, 1)
    },
    ONERROR (state, str) {
      state.message = str
    }
  },
  actions: {
    onAddTodo (context, item) {
      if (item.value !== '') {
        context.commit('ONADDTODO', item)
        context.commit('ONERROR', '')
      } else {
        context.commit('ONERROR', '添加失败')
      }
    },
    onDelTodo ({commit}, index) {
      commit('ONDELETETODO', index)
      commit('ONERROR', '')
    }
  },
  modules: {}
})
export default store
