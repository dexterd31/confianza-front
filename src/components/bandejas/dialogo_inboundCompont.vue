<template>
<div style="width:100%">
  <v-dialog v-model="dialogInbound" fullscreen hide-overlay persistent transition="dialog-bottom-transition">
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="cerrarVenta"><v-icon>mdi-close</v-icon></v-btn>
        <v-toolbar-title>CREAR PQR</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-card-text>
            <horaComponent :tokenTiempo="tokenInbound" @eventotiempo="tiempo_pqr"></horaComponent>
          </v-card-text>
        </v-toolbar-items>
      </v-toolbar>
      <v-card-text>
        <inboundForm></inboundForm>
      </v-card-text>
    </v-card>
  </v-dialog>
</div>
</template>

<script>
import inboundForm from '@/components/inbound/inbound_formComponent.vue'
import horaComponent from '@/components/widgets/horaComponent.vue'
export default {
  name: 'bandejaDialogInboundComponent',
  components: {
    inboundForm,
    horaComponent
  },
  props: ['dialogInbound', 'tokenInbound'],
  data: () => ({
    tiempo: 0
  }),
  methods: {
    cerrarVenta () {
      this.$emit('closed_inbound')
    },
    tiempo_pqr (ptiempo) {
      this.tiempo = ptiempo
    }
  }
}
</script>
