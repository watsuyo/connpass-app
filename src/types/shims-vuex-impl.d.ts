import 'vuex'
import * as User from '~/types/store/user'

declare module 'vuex' {
  type RootState = {
    user: User.State
  }
  type RootGetters = User.RootGetters
  type RootMutations = User.RootMutations
  type RootActions = User.RootActions
}
