<template>
  <div class="container view-profile">
    <h2>Profile for {{userId}}</h2>
    <!-- <div class="row">
    <div class="col s3">-->
    <div class="card-image">
      <img src="https://uploads.twitchalerts.com/000/122/795/080/followergif.gif" />
      <!-- <span class="card-title">Card Title</span> -->
      <!-- </div>
      </div>-->
      <!-- <div class="col s9">
        <div class="container">
          <h1>JBeerdo</h1>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      userId: this.$route.params.user_id
    };
  },
  methods: {
    updateId() {
      this.userId = this.$route.params.user_id;
    }
  },
  watch: {
    $route: "updateId"
  }
};
</script>

<style>
</style>