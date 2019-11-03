<template>
  <div class="container">
    <div class="row" style="margin: 20px 0;">
      <div class="col s4">
        <img
          class="col s12 materialboxed"
          src="https://uploads.twitchalerts.com/000/122/795/080/followergif.gif"
        />
        <p class="col s12 center">{{ name }} ({{role}})</p>
      </div>

      <div class="col s8">
        <p>{{ bio }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      userId: this.$route.params.user_id,
      name: "JBeerdo",
      role: "Captain",
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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