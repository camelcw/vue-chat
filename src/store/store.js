import {createStore} from "vuex";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getMessaging} from "firebase/messaging"

const firebaseConfig = {
    apiKey: "AIzaSyBAv7wcBSZmdNdKnTNiUUfl4sHnB5nm-V4",
    authDomain: "vue-chat-ac0b7.firebaseapp.com",
    projectId: "vue-chat-ac0b7",
    storageBucket: "vue-chat-ac0b7.appspot.com",
    messagingSenderId: "449824223367",
    appId: "1:449824223367:web:d1d59d9877216e9a1cc822",
    measurementId: "G-NJP23T5P5X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const firestore = firebase.firestore()
const messaging = getMessaging()

const store = createStore({
    state() {
        return {
            isAuth: false,
            user: null,
            auth: auth,
            firestore: firestore,
            messaging: messaging,
        }
    },
    mutations: {
        ToggleAuth(state) {
            state.isAuth = !state.isAuth
        },
        async Login(state) {
            const provider = new firebase.auth.GoogleAuthProvider();
            const {user} = await state.auth.signInWithPopup(provider)
            state.user = user
            console.log(state.user)
            state.isAuth = !state.isAuth

        },
        LogOut(state) {
            state.auth.signOut();
            state.isAuth = !state.isAuth
            console.log(state.isAuth)
        }
    }
})

export default store;