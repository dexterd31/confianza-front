<template>
  <div style='width:100%'>
    <v-container>
      <v-row align='center' justify='center'>
        <v-col cols='12' sm='7' md='6'>
          <v-card class='elevation-12'>
            <v-toolbar :color="colores.primario" dark>EQUIPO NO AUTORIZADO</v-toolbar>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-icon size="25">mdi-desktop-classic</v-icon> <span class="text-h6"> {{ equipo.host }} </span>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-icon size="25">mdi-map-marker</v-icon> <span class="text-h6"> {{ equipo.ip }} </span>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </diV>
</template>
<script>
export default {
  name: 'LoginNoAutorizado',
  components: {

  },
  props: ['colores', 'equipo'],
  data: () => ({
  }),
  created () {
  }, // FIN DE CREATED
  watch: {
  }, // FIN DE WATCH
  methods: {

  } // FIN DE METODOS
}
</script>
