import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import {router} from "router"
import items from "./components/ListItem/items";

Vue.use(Vuex)
axios.defaults.baseURL="https://aodapi.eralpsoftware.net"
const store =new Vuex.Store({
  state: {
    token:"",
    items: []


  },
  mutations: {
    setToken(state,token){
      state.token=token
      //state içindeki token değerini gelen token ile değiştirme işlemi
    },
    clearToken(state){
      state.token=""
    },
    initItems(state, items) {
      state.items = items
    },
    addItem(state, item) {
      state.items.push(item)
    },
    updateItem(state, item) {
      let index = state.items.findIndex(c => c.id == item.id)
      if(index > -1){
        state.items[index] =item
      }
    },
    deleteItem(state, itemID) {
      let index = state.items.findIndex(c => c.id == itemID)
      if(index > -1){
        state.items.splice(index, 1)
      }
    }


  },

  actions: {
    initLogin({commit,dispatch})
    //sayfa ilk çalıştığında localstorage'daki token geliyor.
    {
      let token=localStorage.getItem("token")
      if(token){
        commit("setToken",token),
          router.push("/items")
      }
      else{
        router.push("/")
        return false

      }
    },
    logout({commit,dispatch,state}){
      commit("clearToken"),
        localStorage.removeItem("token")

    },
    login ({commit,dispatch,state},authData){

      return axios.post("/login/apply",
        {username: authData.username,password:authData.password,returnSecureToken: true}
      ).then(response => {
        commit("setToken",response.data.token) //setToken methodunu response içinde gelen token ile çalıştırma işlemi
        localStorage.setItem("token",response.data.token) //sayfa yenilendiğinde tokenı kaybetmemek için localstorage kullanıldı
        console.log(response)

      })

    },
    initApp(context) {
      axios.get("/todo")
        .then(response => {
          context.commit("initItems", response.data)
        })
    },
    addItem(context, item,authData) {

      return axios.post("/todo", JSON.stringify(item))
        .then(response => {

          context.commit("addItem", { id : response.data.id})
        })
    },
    updateItem(context, item) {

      return axios.post("/todo", JSON.stringify(item))
        .then(response => {
          context.commit("updateItem", item)
        })
    },
    deleteItem(context, itemID) {

      return axios.post("/todo", JSON.stringify({ id : itemID}))
        .then(response => {
          context.commit("deleteItem", itemID)
        })
    },

  },
  getters :{
    IsLogin(state){
      return state.token!==""
      //state içinde token boş mu kontrol ediliiyor,diğer sayfaya geçmek için kontrol
    },
    getItems(state) {
      return state.items
    }

  },
})
export default store
