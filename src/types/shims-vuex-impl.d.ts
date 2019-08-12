import 'vuex'
import * as UserEvents from '~/types/store/userEvents'

declare module 'vuex' {
  type RootState = {
    userEvents: UserEvents.State
  }
  type RootGetters = UserEvents.RootGetters
  type RootMutations = UserEvents.RootMutations
  type RootActions = UserEvents.RootActions
}
