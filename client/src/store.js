import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    superheroes: {
      namespaced: true,
      state: {
        counter: 10,
        heroes: null,
      },
      mutations: {
        increment(state, value) {
          console.log('mutation increment called');
          state.counter += value;
          console.log(' state.counter', state.counter);
        },
        GET_HEROES(state, heroes) {
          state.heroes = heroes;
        },
      },
      actions: {
        getSuperheroData({ commit }) {
          axios.get('/api/heroes')
            .then((res) => {
              commit('GET_HEROES', res.data);
            })
            .catch(console.log);
        },
      },
    },
  },
});
