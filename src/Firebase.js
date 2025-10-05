import firebase from 'firebase'
import configData from './config'

const firebaseConfig = {
  apiKey: configData.apiKey,
  authDomain: configData.authDomain,
  databaseURL: configData.databaseURL,
  projectId: configData.projectId,
  storageBucket: configData.storageBucket,
  messagingSenderId: configData.messagingSenderId,
  appId: configData.appId,
  measurementId: configData.measurementId,
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebase
