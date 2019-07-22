<template>
  <div id="app">
    <div v-if="LogState.loggedIn">
      <div id="master-logged">
        <home/>
      </div>
    </div>
    <div v-else="">
      <div id="master-notLogged">
        <div v-if="LogState.logging">
          <login/>
        </div>
        <div v-else="">
          <createaccount/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import home from '@/views/Home.vue'
  import login from '@/views/Login.vue'
  import createaccount from '@/views/CreateAccount.vue';
  import {mapGetters} from 'vuex';

  export default {
    name: 'app',
    components: {
      home,
      login,
      createaccount
    },
    computed: mapGetters([
            'LogState',
            'TestGet'
    ])
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
