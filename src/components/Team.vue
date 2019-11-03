<template>
  <div class="container">
    <h1>Team</h1>

    <div class="row">
      <div v-for="(profile, index) in profiles" :key="index" class="col s3">
        <a href="#!" class="player-card" @click="goProfile(profile.userId)">
          <div class="card">
            <div class="card-image">
              <img v-bind:src="profile.imgUrl" />
              <span class="card-title blue-text">{{ profile.name }}</span>
            </div>
            <div class="card-content">
              <p>{{ profile.role}}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team",
  data() {
    return {
      profiles: [
        {
          userId: 1,
          name: "JBeerdo",
          role: "Captain",
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSf9gLJ0T0BxwdZ09DYvMcsR7ECdGVDFKf-1EWwopuVqqTLqnkx"
        },
        {
          userId: 2,
          name: "Uncle Bobbie",
          role: "Member",
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSf9gLJ0T0BxwdZ09DYvMcsR7ECdGVDFKf-1EWwopuVqqTLqnkx"
        },
        {
          userId: 3,
          name: "Caleb",
          role: "Member",
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSf9gLJ0T0BxwdZ09DYvMcsR7ECdGVDFKf-1EWwopuVqqTLqnkx"
        },
        {
          userId: 4,
          name: "Dank",
          role: "Equip. Manager",
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSf9gLJ0T0BxwdZ09DYvMcsR7ECdGVDFKf-1EWwopuVqqTLqnkx"
        }
      ]
    };
  },
  methods: {
    goProfile(profileId) {
      this.$router.push({ name: "Profile", params: { user_id: profileId } });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  >
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
