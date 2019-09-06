import { firebase } from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAqP75rbQ6v85_QoyPNmFw_6r1NbZQY_h0",
    authDomain: "todolist-tutorial1336.firebaseapp.com",
    databaseURL: "https://todolist-tutorial1336.firebaseio.com",
    projectId: "todolist-tutorial1336",
    storageBucket: "todolist-tutorial1336.appspot.com",
    messagingSenderId: "623567305166",
    appId: "1:623567305166:web:3ae5a43076df9fdbd6139f"
})

export { firebaseConfig as firebase }