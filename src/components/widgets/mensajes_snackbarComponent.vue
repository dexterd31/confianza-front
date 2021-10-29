<template>
  <div style="width:100%">
    <v-snackbar v-model="dialogo_snackbar.snackbar" :color="dialogo_snackbar.backcolor" :timeout="timeout" right top>
      <v-icon dark>mdi-alert-circle</v-icon>
      {{ dialogo_snackbar.descripcion }}
      <v-btn :color="dialogo_snackbar.color" text @click="dialogo_snackbar.snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  props: ['dialogo_snackbar'],
  data: () => ({
    timeout: 3000
  }), // FIN DE DATA
  created () {}, // FIN DE CREATED
  watch: {}, // FIN DE WATCH
  methods: {} // FIN DE METODOS
}
</script>
