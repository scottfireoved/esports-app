<template>
  <footer class="page-footer indigo darken-2">
    <div class="footer-copyright">
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