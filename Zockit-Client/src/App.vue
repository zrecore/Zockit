<template>
  <div id="app">
    <div v-if="LogState.loggedIn">
      <div id="master-logged">
        <home/>
      </div>
    </div>
    <div v-else="">
      <div id="master-notLogged">
        <button v-on:click="CreateButton">Log In/Create</button>
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
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'app',
    components: {
      home,
      login,
      createaccount
    },
    methods: {
      ...mapActions([
          'acToggleLogging'
      ]),
      CreateButton: function(){
        this.acToggleLogging();
      }
    },
    computed: mapGetters([
        'LogState'
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
