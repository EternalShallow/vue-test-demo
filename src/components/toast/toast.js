/**
 * created by
 * author zhangdongfei
 * date 2019/5/30
 */
import toastVue from './toast'
// 定义插件对象
const ToastBox = {}
// vue的install方法，用于定义vue插件
ToastBox.install = function (Vue, options) {
  const ToastBoxInstance = Vue.extend(toastVue)
  let currentMsg
  const initInstance1 = () => {
    // 实例化vue实例
    currentMsg = new ToastBoxInstance()
    let msgBoxEl = currentMsg.$mount().$el
    document.body.appendChild(msgBoxEl)
  }
  // 在Vue的原型上添加实例方法， 以全局调用
  Vue.prototype.$toastBox = {
    showToastBox (options) {
      if (!currentMsg) {
        initInstance1()
      }
      if (typeof options === 'string') {
        currentMsg.content = options
        currentMsg.done = null
      } else if (typeof options === 'object') {
        if (!options.done) {
          currentMsg.done = null
        }
        Object.assign(currentMsg, options)
      }
      return currentMsg.showToastBox(options.time)
    }
  }
}
