import { useGetAppInfo } from '../../api/index'

export default {
  namespaced: true,
  state: () => ({
    appInfo: {}
  }),
  mutations: {
    SET_APP_INFO(state, appInfo) {
      state.appInfo = appInfo
    }
  },
  actions: {
    async getAppInfo({ commit }) {
      const { data, task } = useGetAppInfo()

      await task()

      commit('SET_APP_INFO', data.value)
    }
  }
}