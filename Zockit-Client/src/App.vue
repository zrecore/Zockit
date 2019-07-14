<template>
  <div id="app">
    <div v-if="false">
      <home/>
    </div>
    <div v-else="">
      <login/>
    </div>
  </div>
</template>

<script>
  import home from '@/views/Home.vue'
  import login from '@/views/Login.vue'

  export default {
    name: 'app',
    components: {
      home,
      login
    },
    data() {
      return{
        LoginData: {
          _username: 'username',
          _password: 'password',
          _userid: '1234'
        }
      }
    },
    methods:{
    }
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
