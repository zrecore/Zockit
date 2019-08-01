<template>
    <div id="home">
      <navigation-bar/>
      <router-view/>
    </div>
</template>

<script>
import NavigationBar from "../components/NavigationBar";

export default {
  name: 'home',
  components: {
      NavigationBar
  }
}
</script>

<style scoped>
    #home{

    }
</style>