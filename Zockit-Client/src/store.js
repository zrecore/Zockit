import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: {
      loggedIn: true,
      logging: true,
      user_id: 1234,
      user_name: 'Good Name'
    },
    currentTab: 'Peenits',
    testBool: true
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    LogState: state => {
      return state.loginStatus;
    },
    TestGet: state => {
      return state.testBool;
    }
  }
})