import Vue from 'vue'
import Vuex from 'vuex'

import ptClass from './modules/ptClass'
import student from './modules/student'
import teacher from './modules/teacher'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ptClass,
    student,
    teacher
  }
})
