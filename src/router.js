import Vue from "vue"
import VueRouter from "vue-router"
import Login from "./components/pages/login"
import items from "./components/ListItem/items"
import nw from "./components/newitem"
import update from "./components/updateitem"
import item from "./components/ListItem/item"


import store from "./store";


Vue.use(VueRouter)

export const router=new VueRouter({
  routes:[

    { path:"/",component:Login},
    {
      path: "/items", component: items,
      beforeEnter(to, from, next) {
        if(store.getters.IsLogin){
          next()
        }
        else
        {
          next('/')
        }

      }
    },


    { path : "/yeni", component : nw,
      beforeEnter(to, from, next) {
        if(store.getters.IsLogin){
          next()
        }
        else
        {
          next('/')
        }

      }
    },
    { name : "duzenle-parametre", path : "/duzenle", component : update,
      beforeEnter(to, from, next) {
        if(store.getters.IsLogin){
          next()
        }
        else
        {
          next('/')
        }

      }
    },
  ],
  mode:"history"
})
