<template>

  <body>
  <div class="row   ">
    <div class="col-md-4 offset-4 card card-info p-5 border border-info mt-5" >
      <h3 class="text-info text-center mb-3 mt-3"> <i class="fas fa-sign-in-alt"></i> Login </h3>
      <hr>

      <form @submit.prevent="onSubmit">

        <div class="form-group">
          <span> E-posta Adresi:</span>
          <input v-model="user.username" type="email" class="form-control mt-2"
                 placeholder="E-posta adresinizi giriniz">
        </div>
        <div class="form-group">
          <span> Şifre:</span>
          <input v-model="user.password" type="password" class="form-control mt-2" placeholder="Şifreniz...">
        </div>
        <div class="button-container d-flex  flex-column align-items-center">
          <button type="submit" class="btn-info btn btn-block mb-2">
            Giriş Yap
          </button>

        </div>
      </form>
    </div>
  </div>
  </body>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      user: {
        username: null,
        password: null
      },

    }
  },
  methods: {
    //form submit butonu tarafından tetiklenirse bu method çalışır
    onSubmit() {

      this.$store.dispatch("login", {username: this.user.username, password: this.user.password})
        //store içindeki actions ı tetiklemek için dispatch kullanılır.
        // veriler authdata'ya gönderildi.

        .then(response => {
          this.$router.push('/items')
        })
      //post işleminden dönen cevapla todolist sayfasına yönlendiriyor login işlemi gerçekleşmediği için yoruma aldım.


    },

  }
}
</script>
<style>

body{
  background-color: bisque;
}
</style>

