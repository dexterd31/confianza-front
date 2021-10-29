<template>
<v-app id="inspire" style="background:#FAFAFA">
  <v-main>
    <router-view></router-view>
  </v-main>
</v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    colores: null,
    session: { id: 0 }
  }),
  created () {
    const rules = { requerido: v => !!v || 'Requerido', email: v => (v && /.+@.+\..+/.test(v)) || 'E-mail invalido', long10: v => (v && v.length <= 10) || 'Debe ser mayor a 10', combocero: v => (v && v !== 0) || 'Requerido' }
    this.$store.commit('setRules', rules)
    const colores = { primario: 'blue', secundario: 'indigo', white: 'white', orange: 'orange', black: 'black', teal: 'teal', red: 'red darken-1', green: 'green', amber: 'amber', blueGrey: 'blue-grey', grey: 'grey darken-2', brownDarken: 'brown darken-2' }
    this.$store.commit('setColores', colores)
    this.colores = this.$store.getters.getColores
    this.session = this.$store.getters.getSession
  }
}
</script>
