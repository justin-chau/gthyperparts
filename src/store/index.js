// ~store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import VuexEasyFirestore from 'vuex-easy-firestore'
Vue.use(Vuex)

// import from step 1
import { Firebase, initFirebase } from '../config/firebase'
// import from step 3 (below)
import projects from './modules/projects'
import assemblies from './modules/assemblies'
import parts from './modules/parts'
import users from './modules/users'

// do the magic 🧙🏻‍♂️
const easyFirestore = VuexEasyFirestore(
  [projects, assemblies, parts, users],
  {logging: true, FirebaseDependency: Firebase}
)

// include as PLUGIN in your vuex store
// please note that "myModule" should ONLY be passed via the plugin
const storeData = {
  plugins: [easyFirestore],
  // ... your other store data
}

// initialise Vuex
const store = new Vuex.Store(storeData)

// initFirebase
initFirebase()
  .catch(error => {
    // take user to a page stating an error occurred
    // (might be a connection error, or the app is open in another tab)
  })

store.dispatch('projects/openDBChannel')
store.dispatch('assemblies/openDBChannel')
store.dispatch('parts/openDBChannel')
store.dispatch('users/openDBChannel')

export default store