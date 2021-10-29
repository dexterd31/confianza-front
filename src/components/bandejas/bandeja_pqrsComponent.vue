<template>
  <div style="width:100%">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" md="3"></v-col>
        <v-col cols="12" md="3"></v-col>
        <v-col cols="12" md="3"></v-col>
        <v-col cols="12" md="3">
          <v-row>
            <v-col cols="12" md="6">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn block v-bind="attrs" v-on="on"> <v-icon>mdi-refresh</v-icon> </v-btn>
                </template>
                <span>Refrescar</span>
              </v-tooltip>
            </v-col>
            <v-col cols="12" md="6">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn block v-bind="attrs" v-on="on" @click="nuevo_pqr"><v-icon>mdi-file-outline</v-icon> </v-btn>
                </template>
                <span>Crear PQR</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <br>
      <bandejegaListado></bandejegaListado>
    </v-container>
  </div>
</template>

<script>
import bandejegaListado from '@/components/bandejas/bandeja_pqrs_listadoComponent.vue'
export default {
  name: 'bandeja_pqrsComponent',
  components: {
    bandejegaListado
  },
  data: () => ({
    tab: null
  }),
  methods: {
    nuevo_pqr () {
      this.$emit('new_inbound')
    }
  }
}
</script>
