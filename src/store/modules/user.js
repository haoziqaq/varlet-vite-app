export default {
  namespaced: true,
  state: () => ({
    userInfo: {}
  }),
  mutations: {
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    async getUserInfo({ commit }) {}
  }
}