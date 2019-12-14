import Vue from 'vue'
import Vuex from 'vuex'
import context from './context/context'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    context
  },
});
