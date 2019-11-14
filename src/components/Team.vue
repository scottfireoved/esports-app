<template>
  <div class="container">
    <h1 class="cyan-text">Team</h1>

    <div class="row">
      <div v-for="(profile, index) in profiles" :key="index" class="col s3">
        <a href="#!" class="player-card" @click="goProfile(profile.userId)">
          <div class="card">
            <div class="card-image">
              <img v-bind:src="profile.imgUrl" />
            </div>
            <div class="card-content cyan-text">
              <span>{{ profile.name }}</span>
              <span>({{ profile.role}})</span>
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
            "https://www.publicdomainpictures.net/pictures/240000/nahled/cartoon-walrus.jpg"
        },
        {
          userId: 2,
          name: "Uncle Bobbie",
          role: "Member",
          imgUrl:
            "https://www.publicdomainpictures.net/pictures/240000/nahled/cartoon-walrus.jpg"
        },
        {
          userId: 3,
          name: "Caleb",
          role: "Member",
          imgUrl:
            "https://www.publicdomainpictures.net/pictures/240000/nahled/cartoon-walrus.jpg"
        },
        {
          userId: 4,
          name: "Dank",
          role: "Equip. Manager",
          imgUrl:
            "https://www.publicdomainpictures.net/pictures/240000/nahled/cartoon-walrus.jpg"
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
</style>
