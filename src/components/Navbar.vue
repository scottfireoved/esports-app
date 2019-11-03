<template>
  <nav class="main-nav">
    <ul>
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
        <router-link :to="{name: 'About'}">About</router-link>
      </li>
    </ul>
    <h2>User Profiles</h2>
    <ul>
      <li v-for="(profile, index) in profiles" :key="index" style="display: block;">
        <router-link :to="{name: 'Profile', params: { user_id: profile.userId}}">
          <span>Name: {{ profile.name }}</span>
          <span>Role: {{ profile.role }}</span>
          <br />
        </router-link>
      </li>
    </ul>
    <h2>Navigation Controls</h2>
    <ul>
      <li>
        <button @click="goBack">Go Back</button>
        <button @click="goHome">Redirect to Home</button>
        <button @click="goForward">Go Forward</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      profiles: [
        { userId: "1", name: "JBeerdo", role: "Captain" },
        { userId: "2", name: "HighBriD", role: "Member" },
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