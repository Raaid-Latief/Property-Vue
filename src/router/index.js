import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: "/properties",
    name: "properties",
    component: () => import('../views/Properties.vue'),
  },
  {
    path: "/properties",
    name: "PropertyDetails",
    component: () => import('../views/PropertyDetails.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router