<template>
    <div class="home">
      <div id="sidebar">
        <router-link to="/"><button>Hub</button></router-link><br>
        <router-link to="/inventory"><button>Inventory</button></router-link><br>
        <router-link to="/orders"><button>Orders</button></router-link><br>
        <router-link to="/money"><button>Money</button></router-link><br>
        <router-link to="/settings"><button>Settings</button></router-link>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>

export default {
  name: 'home',
  components: {

  }
}
</script>
