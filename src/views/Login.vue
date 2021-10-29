<template>

<v-container align="center" justify="center" fluid fill-height>
  <v-container v-if="loadingAutorizado">
    <v-row align='center' justify='center'>
      <v-col cols='12' sm='8' md='7'>
        <center><v-progress-circular :size="150" indeterminate :color="colores.primario"></v-progress-circular></center>
      </v-col>
    </v-row>
  </v-container>
  <!-- v-if="isAutorizado === 1" -->
  <loginLogeo  :equipo="equipo" :colores="colores"></loginLogeo>
  <loginNoautorizado v-if="isAutorizado === 2" :equipo="equipo" :colores="colores"></loginNoautorizado>
</v-container>
</template>
<script>
import loginLogeo from '@/components/login/login_logeoComponent.vue'
import loginNoautorizado from '@/components/login/login_noautorizadoComponent.vue'
import recIps from '@/js/rec_ips.js'
export default {
  name: 'Login',
  components: {
    loginLogeo,
    loginNoautorizado
  },
  mixins: [recIps],
  data: () => ({
    colores: null,
    isAutorizado: 0,
    loadingAutorizado: false,
    equipo: null
  }),
  created () {
    this.colores = this.$store.getters.getColores
    // this.rec_ip_autorizada()
  }, // FIN DE CREATED
  watch: {
  }, // FIN DE WATCH
  methods: {

  } // FIN DE METODOS
}
</script>
