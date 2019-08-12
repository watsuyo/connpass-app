import { ExCommit, ExDispatch } from 'vuex'

export interface State {
  userEvents: ''
}

export interface Getters {
  getUserEvents: ''
}

export interface RootGetters {
  'userEvents/userEvents': Getters['getUserEvents']
}

export interface Mutations {
  setUserEvents: any
}

export interface RootMutations {
  'userEvents/setUserEvents': Mutations['setUserEvents']
}

export interface Actions {
  fetchUserEvents: any
}
export interface RootActions {
  'userEvents/fetchUserEvents': Actions['fetchUserEvents']
}
