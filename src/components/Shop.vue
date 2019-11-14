<template>
  <div class="container">
    <h1 class="center">Shop Coming Soon!</h1>
    <div class="row">
      <div v-for="(item, index) in items" :key="index" class="col s3">
        <a href="#!" class="player-card" @click="goProfile(profile.userId)">
          <div class="card">
            <div class="card-image">
              <img v-bind:src="item.imgUrl" />
              <!-- <span class="card-title cyan-text">{{ item.name }}</span> -->
            </div>
            <div class="card-content center black-text" style="margin: 0; padding: 10px;">
              <p>{{ item.name }}</p>
              <p>{{ item.price }}</p>
            </div>
            <div class="card-content black-text" style="margin: 0;  padding: 10px;">
              <p>{{ item.description | snippet}}</p>
              <a href="#!" class="secondary-content">
                <i class="material-icons">favorite_border</i>
              </a>
              <br />
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shop",
  data() {
    return {
      items: [
        {
          itemId: 1,
          name: "Jersey",
          price: "$50",
          isFavorite: false,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
          imgUrl:
            "http://www.esportclothing.com/wp-content/uploads/2017/10/Ence-Jersey-2018-front-view-jpg-300x346.jpg"
        },
        {
          itemId: 2,
          name: "Zipup Hoodie",
          price: "$50",
          isFavorite: false,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
          imgUrl:
            "http://www.esportclothing.com/wp-content/uploads/2015/12/hoodie_zipper_front-300x346.png"
        },
        {
          itemId: 3,
          name: "Hoodie",
          price: "$50",
          isFavorite: false,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
          imgUrl:
            "http://www.esportclothing.com/wp-content/uploads/2015/06/alternate-hoodie-frontview-300x346.png"
        }
      ]
    };
  }
};
</script>

<style>
</style>