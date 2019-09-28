import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [
      {
        contactName: 'Thomas',
        nickname: 'Tom',
        relationship: 'work colleague'
      },
      {
        contactName: 'Regan',
        nickname: 'Regan',
        relationship: 'work colleague'
      },
    ]
  },
  mutations: {
    addContact: (state, payload) => {
      state.contacts.push(payload);
    }
  },
  actions: {
    addContact: (context, payload) => {
      setTimeout(() => {
        context.commit('addContact', payload);
      },1000);
    }
  },
  getters: {
    contacts: state => {
      return state.contacts;
    }
  }
})
