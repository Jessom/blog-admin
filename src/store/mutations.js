import * as types from './types'

const state = {
  loading: false,
  slideRightCollapse: true,
  curPath: '/dashboard'
}

const mutations = {
  [types.SET_STATE](state, options) {
    state[options.key] = options.val
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
