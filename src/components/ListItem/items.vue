<template>
  <body>
  <div class="row">
    <div class="col-md-8 offset-2 mt-5">
      <table v-if="items.length > 0" class="table table-hover table-warning table-striped border-info border shadow-lg">
        <thead>
        <th>#id</th>
        <th>Yapılacaklar</th>
        <th>İşlem</th>
        </thead>
        <tbody>
        <item v-for="item in items" :key="item.id" :item="item" />
        </tbody>
      </table>
      <div v-else class="alert alert-primary border-0">
        Henüz yapılacak bir şey yok...
      </div>
      <router-link
        to="/yeni"
        tag="button"
        class="btn-warning btn text-info float-right">
        Yapılacakları Ekleyin..
      </router-link>
    </div>
  </div>
  </body>
</template>

<script>
import item from "./item"
export default {
  components : {
    item
  },
  computed : {
    items(){
      return this.$store.getters.getItems
    }
  }
}
</script>
<style>
body{
  background-color: bisque;
  font-size: 20px;
}
</style>
