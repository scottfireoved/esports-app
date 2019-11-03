<template>
  <div class="navbar">
    <nav class="nav-extended indigo darken-2">
      <div class="nav-content">
        <router-link :to="{name: 'Home'}">
          <span class="nav-title">Home</span>
        </router-link>
        <router-link :to="{name: 'Team'}">
          <span class="nav-title">Team</span>
        </router-link>
        <router-link :to="{name: 'Community'}">
          <span class="nav-title">Community</span>
        </router-link>
        <router-link :to="{name: 'About'}">
          <span class="nav-title">About</span>
        </router-link>
        <a href class="btn-floating btn-large halfway-fab pink">
          <router-link to>
            <i class="material-icons">add</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      profiles: [
        { userId: "1", name: "JBeerdo", role: "Captain" },
        { userId: "2", name: "Uncle Bobbie", role: "Member" },
        { userId: "3", name: "Caleb", role: "Member" },
        { userId: "4", name: "Dank", role: "Equip. Manager" }
      ]
    };
  },
  methods: {
    goHome() {
      this.$router.push({ name: "Home" });
    },
    goBack() {
      this.$router.go(-1);
    },
    goForward() {
      this.$router.go(1);
    }
  }
};
</script>

<style>
.navbar nav {
  padding: 0 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
li {
  display: inline-block;
  margin: 10p;
}
.router-link-exact-active {
  color: purple;
}
</style>