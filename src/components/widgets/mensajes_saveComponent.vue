<template>
<div style="width:100%">

<v-snackbar color="red" v-model="dialogo.incompleto" :timeout="timeout" right top>
      <v-icon dark>mdi-alert-circle</v-icon>DEBE DILIGENCIAR LOS DATOS OBLIGATORIOS
      <v-btn color="black" text @click="cerrar_incompleto">Close </v-btn>
</v-snackbar>

<v-snackbar color="green darken-2" v-model="dialogo.barfinalizo" :timeout="timeout" right top>
      <v-icon dark>mdi-check-circle</v-icon> DATOS GUARDADOS
      <v-btn color="lime lighten-2" text @click="dialogo.barfinalizo = false">Close </v-btn>
</v-snackbar>

<v-snackbar color="red" v-model="dialogo.barfinalizoanulo" :timeout="timeout" right top>
      <v-icon dark>mdi-check-circle</v-icon> DATOS ANULADOS
      <v-btn color="black" text @click="dialogo.barfinalizoanulo = false">Close </v-btn>
</v-snackbar>

<v-layout row justify-center>
  <v-dialog v-model="dialogo.pregunta" persistent max-width="450">
    <v-card>
        <v-toolbar class="headline" :color="colores.primario" dark>GUARDAR</v-toolbar>
            <v-card-text>
              <br>
              DESEA GUARDAR LOS DATOS?
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="grey darken-1" dark @click="cerrar_ventana_dialogo('PREGUNTA')">ACEPTAR</v-btn>
              <v-btn color="grey darken-1" dark @click="cerrar_ventana_dialogo('CANCELARPREGUNTAR')">CANCELAR</v-btn>
            </v-card-actions>
    </v-card>
  </v-dialog>
</v-layout>

<v-layout row justify-center>
  <v-dialog v-model="dialogo.pregunta_anular" persistent max-width="450">
    <v-card>
      <v-toolbar class="headline" color="red" dark>ANULAR</v-toolbar>
      <v-card-text>
        <br>
        DESEA ANULAR LOS DATOS?
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey darken-1" dark @click="cerrar_ventana_dialogo('PREGUNTA_ANULAR')">ACEPTAR</v-btn>
        <v-btn color="grey darken-1" dark @click="cerrar_ventana_dialogo('CANCELAR_PREGUNTA_ANULAR')">CANCELAR</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</v-layout>

<v-layout row justify-center>
  <v-dialog v-model="dialogo.esperar" persistent max-width="450">
    <v-card :color="colores.primario">
        <v-card-text class="pt-4">
            <v-progress-linear color="white" indeterminate></v-progress-linear>
        </v-card-text>
    </v-card>
  </v-dialog>
</v-layout>

<v-layout row justify-center>
    <v-dialog v-model="dialogo.finalizo" persistent max-width="500">
      <v-card>
          <v-toolbar class="headline" color="green darken-2" dark>DATOS GUARDADOS</v-toolbar>
          <v-card-text>
            <br>
            <v-layout row>
              <v-flex xs12 class="pt-5">
                <center>
                  <v-icon dark color="green darken-2" size="30">mdi-check-circle</v-icon> DATOS GUARDADOS
                </center>
                <br>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="grey darken-1" dark @click="cerrar_ventana_dialogo('FINALIZO')">ACEPTAR</v-btn>
          </v-card-actions>
      </v-card>
    </v-dialog>
</v-layout>

<v-layout row justify-center>
  <v-dialog v-model="dialogo.error" persistent max-width="450">
    <v-card>
        <v-toolbar class="headline" color="red" dark>ERROR</v-toolbar>
        <v-card-text>
          <v-icon dark color="red" size="30">mdi-alert-circle</v-icon>&nbsp;&nbsp; ERROR AL GUARDAR
              <v-list>
                <template v-for="(item, index) in items_errores">
                  <div :key="index">
                    {{item}}
                  </div>
                </template>
              </v-list>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey darken-1" dark @click="dialogo.error=false">ACEPTAR</v-btn>
        </v-card-actions>
    </v-card>
  </v-dialog>
</v-layout>

<v-layout row justify-center>
    <v-dialog v-model="dialogo.detalle" persistent max-width="500">
        <v-card>
          <v-toolbar class="headline" :color="colores.primario" dark>GUARDADO</v-toolbar>
          <v-card-text v-if="dialogo.objPayload">
              <br>
              <v-row no-gutters>
                <v-col cols="12" md="12">
                  <span class="text-subtitle-1">Se ha generado la PQR, con el siguiente identificador:</span>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="12" md="12" class="text-center">
                  <span :class="`text-h4 ${colores.green}--text`"><b>{{ dialogo.objPayload.id }} </b></span>
                </v-col>
              </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="grey darken-1" dark @click.native="cerrar_ventana_dialogo('DETALLES')">ACEPTAR</v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
</v-layout>

</div>
</template>
<script>
export default {
  props: ['dialogo', 'items_errores', 'colores'],
  data: () => ({
    timeout: 3000,
    color: 'pink darken-4'
  }), // FIN DE DATA
  created () {
  }, // FIN DE CREATED
  watch: {
  }, // FIN DE WATCH
  methods: {
    cerrar_incompleto () {
      this.dialogo.incompleto = false
    },
    cerrar_ventana_dialogo (popcion) {
      this.$emit('closed_mensaje_dialogo', popcion)
    }
  } // FIN DE METODOS
}
</script>
