<template>
  <div id="app">
    <span v-if="LogState.loggedIn">
      <span id="master-logged">
        <home/>
      </span>
    </span>
    <div v-else="">
      <span id="master-notLogged">
        <button v-on:click="CreateButton">Log In/Create</button>
        <span v-if="LogState.logging">
          <login/>
        </span>
        <span v-else="">
          <createaccount/>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
  import home from '@/views/Home.vue'
  import login from '@/views/Login.vue'
  import createaccount from '@/views/CreateAccount.vue';
  import axios from 'axios';
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'app',
    components: {
      home,
      login,
      createaccount
    },
    created(){
      this.CheckLoginToken();
    },
    methods: {
      ...mapActions([
          'acToggleLogging',
          'acLogin'
      ]),
      CreateButton: function(){
        this.acToggleLogging();
      },
      CheckLoginToken: async function(){
        let validToken = false;
        try{
          await axios.post('http://localhost:6969/check-token', {tData: 'Test Data'},
          {withCredentials: true, 'Access-Control-Allow-Origin': 'http://localhost:6969'})
          .then(async function(res){
            if(res.data === 'validToken'){
              console.log('Valid Token');
              validToken = true;
            }else if(res.data === 'invalidToken'){
              console.log('Invalid Token');
            }else{
              console.log('Token Error');
            }
          });
        }catch(err){
          console.log(err);
        }finally{
          if(validToken){
            this.acLogin();
          }
        }
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
