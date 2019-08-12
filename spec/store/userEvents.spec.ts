import Vuex, { Store, ExStore } from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import { State } from '~/types/store/userEvents'
import { createUserEvents } from '../seeds/userEvents'

const Vue = createLocalVue()
Vue.use(Vuex)

describe('store/userEvents.ts', () => {
  const state: State = {
    userEvents: createUserEvents()
  }

  let store: ExStore

  beforeAll(() => {
    ;(store as any) = null
    store = new Vuex.Store({
      modules: {
        userEvents: {
          ...state,
          namespaced: true
        }
      }
    })
  })
  describe('actions', () => {
    test('fetchUserEvents', () => {
      expect(store.state.userEvents.userEvents).toEqual([])
      store.dispatch('userEvents/fetchUserEvents')
      expect(store.state.userEvents.userEvents).toEqual(state.userEvents)
    })
  })
  describe('mutations', () => {
    test('setUserEvents', () => {
      store.commit('userEvents/setUserEvents', state.userEvents)
      expect(store.state.userEvents.userEvents).toBe(state.userEvents)
    })
  }),
    describe('getters', () => {
      test('getUserEvents', () => {
        const result = store.getters['userEvents/getUserEvents']
        expect(result).toStrictEqual(state.userEvents)
      })
    })
})
