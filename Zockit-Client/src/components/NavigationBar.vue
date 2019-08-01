<template>
    <div id="navbar">
        <select id="navSelector" v-on:change="ChangeView()">
            <option value="/">Home</option>
            <option value="/passwords">Passwords</option>
            <option value="/inventory">Inventory</option>
        </select>
    </div>
</template>

<script>
    import router from 'vue-router';

    export default {
        name: "NavigationBar",
        methods:{
            ChangeView: function(){
                let view = document.getElementById('navSelector').value;
                this.$router.push(view);
            }
        }
    }
</script>

<style scoped>
    #navbar{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 50px;
        background: dodgerblue;
    }
</style>