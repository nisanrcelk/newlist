<template>
  <tr>
    <td class="text-danger"># {{ item.id }}</td>
    <td class="text-info">{{ item.title }}</td>

    <td>
      <button @click="$store.dispatch('deleteItem', item.id)" class="btn btn-m btn btn-outline-danger">Sil</button>
      <router-link
        :to="{ name : 'duzenle-parametre', params : { item : item}}"
        tag="button"
        class="btn btn-m btn btn-outline-warning">
        Düzenle
      </router-link>
    </td>
  </tr>
</template>
<script>
export default {

  props : ["item"]
}
</script>
