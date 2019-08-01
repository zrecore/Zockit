<template>
    <div id="login">
        <input id="login-email" type="text" placeholder="E-Mail"><br><br>
        <input id="login-pw" type="password" placeholder="Password" autocomplete="new-password"><br><br>
        <button v-on:click="CheckLogin">Login</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import axios from 'axios';

    export default {
        name: "Login",
        methods: {
            ...mapActions([
                'acLogin'
            ]),
            CheckLogin: async function(){
                const email_raw = document.getElementById('login-email').value;
                const pw_raw = document.getElementById('login-pw').value;

                //Login variable
                let validLog = false;

                if(email_raw){
                    if(pw_raw){
                        try{
                            await axios.post('http://localhost:6969/login', {email: email_raw, password: pw_raw, remember: true}, {withCredentials: true, 'Access-Control-Allow-Origin': 'http://localhost:6969'})
                                .then(function(res) {
                                    if(res.data === 'validLogin'){
                                        validLog = true;
                                    }else{
                                        validLog = false;
                                    }
                                }).catch(function (err) {

                            })
                        }catch(err){
                            console.log(err);
                        }finally{
                            if(validLog){
                                this.acLogin();
                            }
                        }
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