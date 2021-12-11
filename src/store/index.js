import Vue from 'vue'
import Vuex from 'vuex'
import animal from './module/animal'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '张三',
    age: 21,
  },
  getters: {
    getterName(state) {
      return 'getters中的name' + state.name
    },
  },
  mutations: {
    setName(state, payload) {
      state.name = payload
    },
  },
  actions: {
    // 异步
    changeNameAsync(content, payload) {
      setTimeout(() => {
        content.commit('setName', payload)
      }, 1000)
    },
  },
  modules: {
    animal,
  },
})
