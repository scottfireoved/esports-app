<template>
  <footer class="page-footer light-blue darken-4">
    <div class="footer-copyright light-blue darken-4">
      <div class="container">
        © {{new Date().getFullYear()}} Copyright Text
        <a
          class="grey-text text-lighten-4 right"
          href="#!"
        >Contact Us: {{email}}</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      email: "support@walruswhippers.com"
    };
  }
};
</script>
<style>
</style>