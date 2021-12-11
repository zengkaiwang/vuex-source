const state = {
  animalName: '老虎',
}
const mutations = {
  setName(state, payload) {
    state.animalName = payload
  },
}

export default {
  // 开启命名空间 方便之后使用 mapXXX
  namespaced: true,
  state,
  mutations,
}
