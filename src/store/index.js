import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'

var ls = new SecureLS({ encodingType: 'aes', isCompression: false, encryptionSecret: '2uEFeCnb+zeuCtEVKF7N5Z0mloSc2U583RqUCiokDy8=' })

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: process.env.VUE_APP_URL,
    urlFile: process.env.VUE_APP_FILE,
    headUsuario: process.env.VUE_APP_USER,
    headPassword: process.env.VUE_APP_PASS,
    autenticacion: false,
    rules: {},
    session: { id: 0, nombres: '', apellidos: '', correo: '', identificacion: '', tipo: '', area: 0, permisos: [] },
    colores: { primario: '', secundario: '', blanco: '', orange: '', black: '', red: '', teal: '', green: '', amber: '', blueGre: '', grey: '', brownDarken: '' },
    token: ''
  },
  mutations: {
    setToken (state, value) {
      state.token = value
    },
    setRules (state, value) {
      state.rules = value
    },
    setSession (state, { id, identificacion, nombres, apellidos, correo, tipo, area, permisos }) {
      state.session.id = id
      state.session.identificacion = identificacion
      state.session.nombres = nombres
      state.session.apellidos = apellidos
      state.session.correo = correo
      state.session.tipo = tipo
      state.session.area = area
      state.session.permisos = permisos
    },
    setColores (state, { primario, secundario, white, orange, black, teal, red, green, amber, blueGre, grey, brownDarken }) {
      state.colores.primario = primario
      state.colores.secundario = secundario
      state.colores.white = white
      state.colores.orange = orange
      state.colores.black = black
      state.colores.teal = teal
      state.colores.red = red
      state.colores.green = green
      state.colores.amber = amber
      state.colores.blueGre = blueGre
      state.colores.grey = grey
      state.colores.brownDarken = brownDarken
    },
    setheadUsuario (state, value) {
      state.headUsuario = value
    },
    setheadPassword (state, value) {
      state.headPassword = value
    },
    setAutenticacion (state, value) {
      state.autenticacion = value
    },
    setUrlFile (state, value) {
      state.urlFile = value
    },
    setUrl (state, value) {
      state.url = value
    }
  },
  getters: {
    getHeadUsuario: state => state.headUsuario,
    getHeadPassword: state => state.headPassword,
    getAutenticacion: state => state.autenticacion,
    getUrl: state => state.url,
    getUrlFile: state => state.urlFile,
    getSession: state => state.session,
    getColores: state => state.colores,
    getToken: state => state.token,
    getRules: state => state.rules
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    // key: 'The name stored in localstorage',
    // key: 'vuex',
    // saveState: (key, state, storage) => {
    //  ls.set(key, state)
    // },
    storage: {
      getItem: key => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: key => ls.remove(key)
    }
  })]
})
