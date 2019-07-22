<template lang="html">
  <div class="container">
    <div class="row justify-content-center">
      <h4><span class="badge badge-pill badge-info">email : test@test.com</span></h4>
      <h4><span class="badge badge-pill badge-info">password : testing</span></h4>
    </div>

    <div class="row justify-content-center">
      <div class="col-sm-4 col-md-6 form-box">
        <p class="text-center error" v-if="show">Invalid email/password</p>
          <h1 class="text-center">Signin</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <button type="submit" @click.prevent="login()" class="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      email: '',
      password: '',
      show: false
    }
  },
  methods: {
    login(){
      const user={
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:3000/tokens', user)
      .then(res => {
          console.log(res.data.jwt)
          localStorage.setItem('signInToken', res.data.jwt);
          this.$store.state.signedIn = true
          this.$router.push('/')
          this.$store.dispatch('signOutInterval')
      })
      .catch(error => {
          this.show = true
          console.log(error)
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .container{
    margin-top: 100px;
  }
  .form-box{
    border: 1px solid slategrey;
    border-radius: 20px;
    padding: 35px;
    box-shadow: 3px 3px slategrey;
  }
  .error{
    color: red;
  }
  .badge{
    margin: 10px;
  }
</style>
