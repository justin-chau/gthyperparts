const users = {
    firestorePath: 'users',
    firestoreRefType: 'collection', // or 'doc'
    moduleName: 'users',
    statePropName: 'data',
    namespaced: false, // automatically added
  
    // this object is your store module (will be added as '/myModule')
    // you can also add state/getters/mutations/actions
    state: {},
    getters: {},
    mutations: {},
    actions: {},
  }
  
  export default users