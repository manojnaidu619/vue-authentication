<template lang="html">
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <p>Signed In? : <span class="status">{{signInCheck}}</span></p>
      </div>
    </div>
    <h1>Welcome to Homepage!</h1>
    <h3 class="email" v-if="signInCheck == true">{{decodedData}}</h3><br>
    <div v-if="signInCheck == false" class="row justify-content-center">
      <router-link to="/signin" class="btn btn-primary"><a>SignIn</a></router-link>
      <router-link to="/signup" class="btn btn-primary"><a>SignUp</a></router-link>
    </div>
    <div class="row justify-content-center" v-else>
      <button type="button" @click="logout()" class="btn btn-danger">Logout</button>
    </div>
  </div>
</template>

<script>
import VueJwtDecode from 'vue-jwt-decode'
export default {
  created(){
    if(localStorage.getItem('signInToken')){
      this.$store.state.signedIn = true
    }
  },
  computed: {
    signInCheck(){
      return this.$store.state.signedIn
    },
    decodedData(){
      return VueJwtDecode.decode(localStorage.getItem('signInToken'))
    }
  },
  methods: {
    logout(){
      delete localStorage.signInToken
      this.$store.state.signedIn = false
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
  .email{
    color: green;
  }
</style>
