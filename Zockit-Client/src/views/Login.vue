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

                //Test login variable
                let validLog = false;

                if(email_raw){
                    if(pw_raw){
                        try{
                            await axios.post('http://localhost:6969/login', {email: email_raw, password: pw_raw, remember: false})
                                .then(function(res) {
                                    if(res.data === 'validLogin'){
                                        console.log('Valid Login');
                                        validLog = true;
                                    }else{
                                        console.log('Invalid Login');
                                    }
                                }).catch(function (err) {
                                console.log('HTTP Post Error');
                            })
                        }catch(err){
                            console.log(err);
                        }finally {
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