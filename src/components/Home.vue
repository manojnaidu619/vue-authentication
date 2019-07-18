<template lang="html">
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <p class="status">Not Signed!</p>
      </div>
    </div>
    <h1>Welcome to Homepage!</h1>
    <div class="row justify-content-center">
      <router-link to="/signin" class="btn btn-primary"><a>SignIn</a></router-link>
      <router-link to="/signup" class="btn btn-primary"><a>SignUp</a></router-link>
    </div>
  </div>
</template>

<script>
export default {
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
    color: red;
  }
</style>
