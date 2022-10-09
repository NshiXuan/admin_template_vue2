import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home.vue')
const Class = () => import('../views/Class.vue')
const Teacher = () => import('../views/Teacher.vue')
const Student = () => import('../views/Student.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/class',
    name: 'Class',
    component: Class
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: Teacher
  },
  {
    path: '/student',
    name: 'Student',
    component: Student
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
