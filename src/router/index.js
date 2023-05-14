import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Electric from '../views/Electric.vue'
import Contact from '../views/Contact.vue'
import Advance from '../views/AdvanceSearch.vue'
import CarToView from '../views/CarToView.vue'
import SearchResults from '../views/SearchResults'
import Dealers from '../views/Dealers'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/electric',
    name: 'Electric',
    component: Electric
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/advance',
    name: 'Advance',
    component: Advance
  },
  {
    path: '/cartToView',
    name: 'CarToView',
    component: CarToView 
  },
  {
    path: '/searchResults',
    name: 'searchResults',
    component: SearchResults
  },
  {
    path: '/dealerInventory',
    name: 'dealerInventory',
    component: Dealers
  },
  
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:'active'
})
export default router
