<template>
  <div class="container">
    <div class="parallax-container logueo">
      <div class="parallax">
        <img src="https://alistapart.com/d/438/fig-6--background-blend-mode.jpg" />
      </div>
      <div class="row">
        <br />
        <div class="col m8 s8 offset-m2 offset-s2 center">
          <h4 class="truncate bg-card-user">
            <img
              src="https://cdn3.iconfinder.com/data/icons/happily-colored-snlogo/128/medium.png"
              alt
              class="circle responsive-img"
            />
            <div class="row login">
              <!-- <h4>Inicia sesión.</h4> -->
              <form class="col s12">
                <div class="row">
                  <div class="input-field col m12 s12">
                    <i class="material-icons iconis prefix">account_box</i>
                    <input id="icon_prefix" type="text" class="validate" />
                    <label for="icon_prefix">Username</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col m12 s12">
                    <i class="material-icons iconis prefix">enhanced_encryption</i>
                    <input id="password" type="password" class="validate" />
                    <label for="password">Password</label>
                  </div>
                </div>
                <div class="row">
                  <button class="btn waves-effect waves-light" type="submit" name="action">Login</button>
                </div>
              </form>
            </div>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  }
};
</script>

<style>
</style>