<template>
    <div id="login">
        <input id="login-email" type="text" placeholder="E-Mail"><br><br>
        <input id="login-pw" type="password" placeholder="Password" autocomplete="new-password"><br><br>
        <button v-on:click="CheckLogin">Login</button>
    </div>
</template>

<script>
    export default {
        name: "Login",
        methods: {
            CheckLogin: function() {
                const email_raw = document.getElementById('login-email').value;
                const pw_raw = document.getElementById('login-pw').value;
                if(email_raw){
                    if(pw_raw){
                        this.$http.post('http://localhost:6969/login', {email: email_raw, password: pw_raw, remember: false})
                            .then(function (res) {
                                if(res.data === 'validLogin'){

                                    console.log('Valid Login');
                                }else{
                                    console.log('Invalid Login');
                                }
                            }).catch(function (err) {
                            console.log(err.data);
                        }).finally(function () {

                        })
                    }else{
                        console.log('No Password');
                    }
                }else{
                    console.log('No Username');
                }
            }
        }
    }
</script>

<style scoped>

</style>