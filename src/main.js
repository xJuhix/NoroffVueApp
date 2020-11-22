import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Recipe from './RecipePage.vue'
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
routes: [
  {
    path: '/',
    name: 'Recipes',
    component: Recipe
  }
]
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')