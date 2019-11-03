<template>
  <div class="team">
    <h1>Team</h1>
    <ul>
      <li v-for="(profile, index) in profiles" :key="index" style="display: block;">
        <router-link :to="{name: 'Profile', params: { user_id: profile.userId}}">
          <span>Name: {{ profile.name }}</span>
          <span>Role: {{ profile.role }}</span>
          <br />
        </router-link>
      </li>
    </ul>
    <!-- <h2>Navigation Controls</h2>
    <ul>
      <li>
        <button @click="goBack">Go Back</button>
        <button @click="goHome">Redirect to Home</button>
        <button @click="goForward">Go Forward</button>
      </li>
    </ul>-->
  </div>
</template>

<script>
export default {
  name: "Team",
  data() {
    return {
      profiles: [
        { userId: "1", name: "JBeerdo", role: "Captain" },
        { userId: "2", name: "Uncle Bobbie", role: "Member" },
        { userId: "3", name: "Caleb", role: "Member" },
        { userId: "4", name: "Dank", role: "Equip. Manager" }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
