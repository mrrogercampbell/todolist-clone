import { firebase } from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
    apiKey: '',
    authDomain: '',
    databaseUrl: '',
    projectId: '',
    storageBucket: '',
    messageSenderId: '',
    apiId: ''
})

export { firebaseConfig as firebase }