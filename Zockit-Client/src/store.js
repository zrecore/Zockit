import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: {
      loggedIn: false,
      logging: true,
      user_id: 1234,
      user_name: 'Good Name'
    },
    currentTab: 'Peenits'
  },
  mutations: {
    mToggleLogging: (state, isLogging) => (state.loginStatus.logging = isLogging),
    mLogin: (state) => (state.loginStatus.loggedIn = true)
  },
  actions: {
    acToggleLogging(){
      if(!this.state.loginStatus.loggedIn){
        this.commit('mToggleLogging', !this.state.loginStatus.logging);
      }
    },
    acLogin(){
      if(!this.state.loginStatus.loggedIn){
        this.commit('mLogin');
      }
    }
  },
  getters: {
    LogState: state => {
      return state.loginStatus;
    }
  }
})