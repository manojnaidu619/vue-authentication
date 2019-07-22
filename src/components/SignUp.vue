<template lang="html">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm-4 col-md-6 form-box">
          <h1 class="text-center">SignUp</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Confirm Password</label>
            <input type="password" v-model="confirmPassword" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <button type="submit" :disabled="validate" @click.prevent="createUser()" class="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    validate(){
      var eVal = /\S+@\S+\.\S+/
      if(this.email.match(eVal) && this.password.length > 0 && this.password == this.confirmPassword){
        return false
      }
      return true
    }
  },
  methods:{
    createUser(){
      const user = {
        email: this.email,
        password: this.password
      }
      console.log(user)
      axios.post('http://localhost:3000/users', user)
      .then(res => console.log(res))
      .catch(error => console.log(error))
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
  }
</style>
