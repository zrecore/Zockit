<template>
    <div id="login">
        <input type="text" placeholder="E-Mail"><br><br>
        <input type="password" placeholder="Password" autocomplete="new-password"><br><br>
        <button v-on:click="CheckLogin">Login</button>
    </div>
</template>

<script>
    export default {
        name: "Login",
        methods: {
            CheckLogin: function() {
                this.$http.post('http://localhost:6969/', {username: 'badusername', password: 'goodpassword'})
                .then(function (res) {
                    console.log(res.data);
                }).catch(function (err) {
                    console.log(err.data);
                }).finally(function () {
                    console.log('Tried');
                })
            }
        }
    }
</script>

<style scoped>

</style>