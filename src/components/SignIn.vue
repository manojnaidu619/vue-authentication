<template lang="html">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm-4 col-md-6 form-box">
          <h1 class="text-center">Signin</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
