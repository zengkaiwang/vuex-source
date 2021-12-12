// 这个是实现vuex核心逻辑的精简版,仅仅几行代码而已
import Vue from 'vue'

const Store = function Store(options = {}) {
  const { state = {}, mutations = {} } = options
  this._vm = new Vue({
    data: {
      $$state: state,
    },
  })
  this._mutations = mutations
}

Store.prototype.commit = function (type, payload) {
  if (this._mutations[type]) {
    this._mutations[type](this.state, payload)
  }
}

Object.defineProperties(Store.prototype, {
  state: {
    get: function () {
      this._vm.data.$$state
    },
  },
})

export default {
  Store,
}
