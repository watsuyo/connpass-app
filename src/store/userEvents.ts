import { VuexGetters, VuexMutations, VuexActions } from 'vuex'
import { State, Getters, Mutations, Actions } from '~/types/store/userEvents'
import axios from 'axios'

const baseUrl = 'https://connpass.com/api/v1/'

export const state = (): State => ({
  userEvents: ''
})

export const getters: VuexGetters<State, Getters> = {
  getUserEvents: (state: State) => state.userEvents
}

export const mutations: VuexMutations<State, Mutations> = {
  setUserEvents(state: State, res: any) {
    console.log('s')
    state.userEvents = res
  }
}

export const actions: VuexActions<State, Actions, Getters, Mutations> = {
  async fetchUserEvents(ctx) {
    await axios
      .get(`${baseUrl}event?nickname=watuyo_2`)
      .then(res => {
        console.log(res.status)
        console.log(res.data)
        ctx.commit('setUserEvents', res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
