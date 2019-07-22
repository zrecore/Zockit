import vue from 'vue';
import Vuex from 'vuex';

//Load VueX
vue.use(Vuex);

//
export default new Vuex.Store({
    modules: {

    },
    state: {
        loginStatus: {
            loggedIn: false,
            logging: true,
            user_id: 1234,
            user_name: 'Good Name'
        },
        currentTab: ''
    },
    mutations: {

    },
    actions: {

    }
})