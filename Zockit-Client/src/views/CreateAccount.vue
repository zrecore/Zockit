<template>
    <div id="create">
        <input id="create-email" type="text" placeholder="E-Mail"><br><br>
        <input id="create-pw" type="password" placeholder="Password" autocomplete="new-password"><br><br>
        <button v-on:click="CheckCreate">Create Account</button>
    </div>
</template>

<script>
    export default {
        name: "CreateAccount",
        methods: {
            CheckCreate: function() {
                const email_raw = document.getElementById('create-email').value;
                const pw_raw = document.getElementById('create-pw').value;

                if(email_raw){
                    if(pw_raw){
                        this.$http.post('http://localhost:6969/create', {email: email_raw, password: pw_raw})
                            .then(function(res) {
                                console.log(res.data);
                            })
                    }else{
                        console.log('No Password');
                    }
                }else{
                    console.log('No Email');
                }
            }
        }
    }
</script>

<style scoped>

</style>