import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: () => import('./views/Home.vue') },
    { path: '/home1', component: () => import('./views/Home1.vue') },
]

const router = new VueRouter({
    routes
})

export default router
