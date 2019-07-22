<template lang="html">
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <p>Signed In? : <span class="status">{{signInCheck}}</span></p>
      </div>
    </div>
    <h1>Welcome to Homepage!</h1>
    <div v-if="signInCheck == false" class="row justify-content-center">
      <router-link to="/signin" class="btn btn-primary"><a>SignIn</a></router-link>
      <router-link to="/signup" class="btn btn-primary"><a>SignUp</a></router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    signInCheck(){
      return this.$store.state.signedIn
    }
  }
}
</script>

<style lang="css" scoped>
  .container{
    margin-top: 50px;
  }
  .row a{
    margin: 30px;
  }
  .status{
    color: OrangeRed;
    font-weight: bold;
  }
</style>
