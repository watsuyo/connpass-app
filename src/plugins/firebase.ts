import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { environments } from './environments'

interface FirebaseConfig {
  apiKey: string
  authDomain: string
  databaseURL: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
}

const config: FirebaseConfig = {
  apiKey: environments.FIREBASE_API_KEY,
  authDomain: environments.FIREBASE_AUTH_DOMAIN,
  databaseURL: environments.FIREBASE_DATABASE_URL,
  projectId: environments.FIREBASE_PROJECT_ID,
  storageBucket: environments.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: environments.FIREBASE_MESSAGING_SENDER_ID,
  appId: environments.FIREBASE_APP_ID
}

export default (context, inject: (name: string, v: any) => any) => {
  inject(
    'firebase',
    !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
  )
  inject('auth', firebase.auth())
  inject('firestore', firebase.firestore())
}
