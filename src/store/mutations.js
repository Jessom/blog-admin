import * as types from './types'

const state = {
  loading: false
}

const mutations = {
  [types.SET_STATE](state, options) {
    state.loading = options
  }
}

const getters = {
  [types.GET_LOADING_STATE](state) {
    return state.loading
  }
}

export default {
  state,
  mutations,
  getters
}
