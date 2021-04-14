import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger' // 控制台打印
import template from './template' // 模板
import demo from './demo' //

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    template,
    demo
  },
  plugins: [createLogger()]
})
