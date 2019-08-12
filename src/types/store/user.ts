import { ExCommit, ExDispatch } from 'vuex'

export interface State {
  authData?: {
    token: string
  } | null
}

export interface Getters {
  authData: {
    token: string
  } | null
}

export interface RootGetters {
  'user/authData': Getters['authData']
}

export interface Mutations {
  setUserData: any
}

export interface RootMutations {
  'user/setUserData': Mutations['setUserData']
}

export interface Actions {
  authUser: any
}
export interface RootActions {
  'user/authUser': Actions['authUser']
}
