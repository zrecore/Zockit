<template>
    <div class="passwordField">
        <span class="passwordService">Service: Google</span> |
        <span class="passwordString">Password: password1</span> |
        <span class="passwordDate">Last Changed: 03/11/2018</span>
        <span class="passwordEdit"><button v-on:click="ToggleEditing()">Edit</button></span><br>
        <div class="editFields">
            <span class="editService"><input typeof="text"></span>
            <span class="editString"><input typeof="text"></span>
        </div>
    </div>
</template>

<script>
    let bEditing = false;
    export default {
        name: "PasswordField",
        methods:{
            ToggleEditing: function(){
                if(!this.bEditing){
                    this.$el.getElementsByClassName('editFields')[0].style.display = "inline-block";
                }else{
                    this.$el.getElementsByClassName('editFields')[0].style.display = "none";
                }
                this.bEditing = !this.bEditing;
                console.log('Toggled');
            }
        }
    }
</script>

<style scoped>
    .editFields{
        display: none;
    }
</style>