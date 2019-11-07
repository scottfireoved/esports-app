<template>
  <div class="navbar">
    <nav class="nav-extended light-blue lighten-1">
      <div class="nav-wrapper">
        <a href="#!" class="brand-logo left" @click="goHome">Walrus Whippers</a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <div id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link :to="{name: 'Home'}">Home</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Team'}">Team</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Community'}">Community</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Shop'}">Shop</router-link>
          </li>
          <!-- <li>
            <router-link :to="{name: 'About'}">About</router-link>
          </li>-->

          <li>
            <button class="btn waves-effect waves-cyan lighten-1" @click="login">Login</button>
          </li>
        </div>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <li>
        <router-link :to="{name: 'Home'}">Home</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Team'}">Team</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Community'}">Community</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Shop'}">Shop</router-link>
      </li>
      <!-- <li>
        <router-link :to="{name: 'About'}">About</router-link>
      </li>-->
    </ul>
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
    },
    login() {
      this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style >
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.router-link-exact-active {
  color: burlywood;
}
</style>