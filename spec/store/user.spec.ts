import * as user from '../../src/store/user'
import Vuex, { Store, ExStore } from 'vuex'
import { createLocalVue } from '@vue/test-utils'

const Vue = createLocalVue()
Vue.use(Vuex)

describe('store/user.ts', () => {
  describe('mutations', () => {
    let store: ExStore

    beforeAll(() => {
      ;(store as any) = null
      store = new Vuex.Store({
        modules: {
          user: {
            ...user,
            namespaced: true
          }
        }
      })
    })

    test('setUserData', () => {
      expect(store.state.user.authData).toBe(null)
      store.commit('user/setUserData', { token: 'ABCDE' })
      expect(store.state.user.authData!.token).toBe('ABCDE')
    })
  })
})
