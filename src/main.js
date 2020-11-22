import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import HomePage from './HomePage.vue'
import Recipes from './components/RecipePage.vue'
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
routes: [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/components',
    name: 'RecipePage',
    component: Recipes
  }
]
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')