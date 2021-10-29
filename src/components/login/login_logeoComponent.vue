<template>
  <div style='width:100%'>
    <v-container>
      <v-row align='center' justify='center'>
        <v-col cols='12' sm='8' md='7'>
          <v-card class='elevation-12'>
            <v-card-text class='pt-0 pr-3 pl-3 pb-0'>
              <v-row>
                <v-col md="6" xs=12>
                  <v-container grid-list-xs>
                    <v-form ref="form">
                      <v-row no-gutters>
                        <v-col cols="12">
                          <center><br><v-icon size='120' :color='colores.primario'>mdi-account-circle</v-icon><br></center>
                        </v-col>
                      </v-row>
                      <v-row no-gutters>
                        <v-col cols="12">
                          <v-text-field v-model='login.email' :color='colores.primario' :rules="[rules.requerido, rules.email]" v-on:keyup.enter="evento_enter('email')" ref='login_email' label='* EMAIL' append-icon='mdi-email' class='minusculas' type='email' autocomplete="off"></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row no-gutters>
                        <v-col cols="12">
                          <v-text-field v-model='login.password' :color='colores.primario' :rules="[rules.requerido]" v-on:keyup.enter="evento_enter('password')" ref='login_password' label='* PASSWORD' :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"  @click:append='show1 = !show1' :type="show1 ? 'text' : 'password'" autocomplete="off"></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row no-gutters>
                        <v-col cols="12">
                          <v-card-actions class='pt-0 pb-0 pr-3 pl-3'>
                            <v-spacer></v-spacer>
                            <v-btn text small>
                              <label style='font-size:10px'>OLVIDASTE TU PASSWORD?</label>
                            </v-btn>
                          </v-card-actions>
                        </v-col>
                      </v-row>
                      <v-card-actions class='pr-8 pl-8'>
                        <v-btn @click="validar" :color="colores.primario" block dark>ACEPTAR</v-btn>
                        <br><br>
                      </v-card-actions>
                    </v-form>
                  </v-container>
                </v-col>
                <v-col md="6" xs=12 style='background-color:#2196F3'>
                      <center>
                        <br /><br />
                        <div class='white--text headline'>
                          <b>BIENVENIDO</b>
                        </div>
                        <br />
                        <!-- <img src='img/logo1.png' style="width:85%"> -->
                        <br /><br /><br />
                        <div class='white--text headline'>
                          <b>2021</b>
                        </div>
                        <br />
                        <div style='height:15px'></div>
                      </center>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <loginRecueprar></loginRecueprar>
    <v-dialog v-model="dialogEsperar" persistent width="300px">
        <v-card :color="colores.primario">
          <v-card-text class="pt-4">
            <v-progress-linear :color="colores.white" height="7" indeterminate></v-progress-linear>
          </v-card-text>
        </v-card>
    </v-dialog>
    <mensajesSnackbar :dialogo_snackbar='dialogo_snackbar'></mensajesSnackbar>
  </diV>
</template>
<script>
import loginRecueprar from '@/components/login/login_recuperarComponent.vue'
import recFunciones from '@/js/rec_funciones.js'
import mensajesSnackbar from '@/components/widgets/mensajes_snackbarComponent.vue'
import axios from 'axios'
export default {
  name: 'LoginLogeo',
  components: {
    loginRecueprar,
    mensajesSnackbar
  },
  props: ['colores', 'equipo'],
  mixins: [recFunciones],
  data: () => ({
    dialogEsperar: false,
    show1: false,
    anio: '',
    login: { email: '', password: '' },
    rules: { requerido: v => !!v || 'Requerido', email: v => /.+@.+\..+/.test(v) || 'E-mail invalido', long10: v => (v && v.length <= 10) || 'Debe ser mayor a 10', combocero: v => (v && v !== 0) || 'Requerido' },
    dialogo_snackbar: { backcolor: '', descripcion: '', color: '', snackbar: false }
  }),
  created () {
    this.anio = this.rec_funciones_anio()
    var id, identificacion, nombres, apellidos, correo, tipo, area, permisos
    id = 0
    identificacion = ''
    nombres = ''
    apellidos = ''
    correo = ''
    tipo = ''
    area = 0
    permisos = []
    this.$store.commit('setSession', { id, identificacion, nombres, apellidos, correo, tipo, area, permisos })
  }, // FIN DE CREATED
  watch: {
  }, // FIN DE WATCH
  methods: {
    validar () {
      if (this.$refs.form.validate()) {
        this.enviar_datos()
      }
    },
    limpiar_datos_login () {
      this.login.email = ''
      this.login.password = ''
    },
    conver_mayusculas () {
      this.login.email = this.rec_funciones_minusculas(this.login.email)
    },
    enviar_datos () {
      this.dialogEsperar = true
      var urlroute = this.$store.getters.getUrl + 'login'
      const data = { login: this.login }
      axios({
        url: urlroute,
        method: 'POST',
        data: data
      }).then((response) => {
        var data, id, identificacion, nombres, apellidos, correo, tipo, area, permisos, token
        data = response.data
        if (data !== 'NO AUTORIZADO') {
          id = data.user.id
          identificacion = data.user.identificacion
          nombres = data.user.nombres
          apellidos = data.user.apellidos
          correo = data.user.email
          tipo = ''
          area = 0
          permisos = []
          token = data.token
          this.$store.commit('setAutenticacion', true)
          this.$store.commit('setSession', { id, identificacion, nombres, apellidos, correo, tipo, area, permisos })
          this.$store.commit('setToken', token)
          this.$router.replace({ path: 'bandeja' })
          // this.$router.replace({ path: 'bandeja?idusu=', query: { idusu: id } })
          // eslint-disable-next-line handle-callback-err
          this.$router.push('/bandeja').catch(err => {})
          // this.$router.push({ path: '/bandeja', query: { idusu: id } }).catch(err => {})
          // this.$router.push({ path: '/bandeja', query: { idusu: id } }).catch(err => {})
        } else {
          this.dialogo_snackbar.backcolor = 'red'
          this.dialogo_snackbar.color = 'black'
          this.dialogo_snackbar.snackbar = true
          this.dialogo_snackbar.descripcion = 'DATOS INCORRECTOS'
        }
      }).catch((error) => {
        console.log('ERROR: ' + error)
      }).finally(() => {
        this.dialogEsperar = false
      })
    },
    evento_enter (key) {
      switch (key) {
        case 'email':
          this.$refs.login_password.focus()
          break
        case 'password':
          this.validar()
          break
      }
    }

  } // FIN DE METODOS
}
</script>
