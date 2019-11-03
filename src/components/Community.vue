<template>
  <div class="container">
    <h1>Community</h1>
    <ul class="collection">
      <li v-for="(post, index) in posts" :key="index" class="collection-item avatar">
        <img v-bind:src="post.img" alt class="circle" />
        <span class="title left">{{ post.user }}</span>
        <br />
        <p>{{ post.body }}</p>
        <p class="right grey-text lighten-3">{{post.date}}</p>
        <br />
        <a href="#!" class="secondary-content">
          <i class="material-icons">flag</i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Community",
  data() {
    return {
      posts: [
        {
          user: "Uncle Bobbie",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          img: "https://picsum.photos/200/300",
          date: new Date()
        },
        {
          user: "JBeerdo",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          img: "https://picsum.photos/200/300",
          date: new Date()
        },
        {
          user: "Dank",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          img: "https://picsum.photos/200/300",
          date: new Date()
        },
        {
          user: "Caleb",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          img: "https://picsum.photos/200/300",
          date: new Date()
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  display: block;
}

i {
  color: red;
}
</style>
