<template>
    <div id="passwords">
        Passwords
        <password-field/>
        <password-field/>
        <password-field/>
    </div>
</template>

<script>
    import PasswordField from "../components/passwords/PasswordField";

    export default {
        name: "Passwords",
        components: {PasswordField}
    }
</script>

<style scoped>

</style>