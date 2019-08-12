import { VuexGetters, VuexMutations, VuexActions } from 'vuex'
import { State, Getters, Mutations, Actions } from '~/types/store/user'

export const state = (): State => ({
  authData: null
})

export const getters: VuexGetters<State, Getters> = {
  authData: (state: State) => state.authData!
}

export const mutations: VuexMutations<State, Mutations> = {
  setUserData(state: State, payload: any) {
    state.authData = { ...payload }
  }
}

export const actions: VuexActions<State, Actions, Getters, Mutations> = {
  authUser(ctx, payload) {
    ctx.commit('setUserData', { ...payload })
  }
}
