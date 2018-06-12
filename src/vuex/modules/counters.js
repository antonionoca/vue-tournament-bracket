import * as types from '../mutation-types'

// default state value
const state = {
  main: 2
}

// the only way actually change state
const mutations = {
  [types.DECREMENT_MAIN_COUNTER] (state) {
    state.main--
  },
  [types.INCREMENT_MAIN_COUNTER] (state) {
    state.main++
  }
}

// to compute derived state based on store state
const getters = {
  mainCounter: state => state.main
}

// action commits mutations
// can contain arbitrary asynchronous operations.
const actions = {
  decrementMain ({ commit }) {
    commit(types.DECREMENT_MAIN_COUNTER)
  },
  incrementMain ({ commit }) {
    commit(types.INCREMENT_MAIN_COUNTER)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
