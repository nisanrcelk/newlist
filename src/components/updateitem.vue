<template>
  <body>
  <div class="row">
    <div class="col-md-6 offset-3">
      <form @submit.prevent="onSub" class="card mt-5 p-3 border border-info bg-warning shadow-lg">
        <div class="form-group">
          <label class="text-light"> Adı</label>
          <input v-model="item.title" type="text" class=" border border-info text-info form-control" placeholder="Düzenle...">
        </div>

        <div class="button-container">
          <router-link
            to="/items"
            tag="button"
            class="btn btn-outline-danger">
            İptal
          </router-link>
          <button type="submit" class="btn btn-outline-success">Kaydet</button>
        </div>
      </form>
    </div>
  </div>
  </body>
</template>
<script>
export default {
  data(){
    return {
      item : {
        title : '',

      }
    }
  },
  methods : {
    onSub(){
      this.$store.dispatch("updateItem", this.item)
        .then(() => {
          this.$router.push("/items")
        })
    }
  },
  created(){
    this.item.title=this.$route.params.item.title,
      this.item.id=this.$route.params.item.id

  }

}
</script>

<style>
body{
  background-color: bisque;
}
</style>
