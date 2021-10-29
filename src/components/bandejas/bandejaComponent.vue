<template>
  <div style="width:100%">
    <v-container>
        <v-card>
          <v-tabs v-model="tab" background-color="blue" centered dark icons-and-text>
            <v-tabs-slider></v-tabs-slider>
            <v-tab href="#tab-1">BANDEJA<v-icon>mdi-inbox</v-icon></v-tab>
            <v-tab href="#tab-2">BASES<v-icon>mdi-database</v-icon></v-tab>
            <v-tab href="#tab-3">CONFIGURACION<v-icon>mdi-cog-outline</v-icon></v-tab>
            <v-tab href="#tab-4">APLICATIVOS<v-icon>mdi-apps</v-icon></v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item :key="1" :value="'tab-1'">
              <v-card flat><v-card-text>  <bandejegaPqrs @new_inbound="nuevo_inbound"></bandejegaPqrs>  </v-card-text></v-card>
            </v-tab-item>
            <v-tab-item :key="2" :value="'tab-2'">
              <v-card flat><v-card-text> <outboundAsesor></outboundAsesor> </v-card-text></v-card>
            </v-tab-item>
            <v-tab-item :key="3" :value="'tab-3'">
              <v-card flat><v-card-text>  <dialogoConfiguracion></dialogoConfiguracion>  </v-card-text></v-card>
            </v-tab-item>
            <v-tab-item :key="4" :value="'tab-4'">
              <v-card flat><v-card-text>2</v-card-text></v-card>
            </v-tab-item>
          </v-tabs-items>
      </v-card>
      <!-- <chat :myRight="380"></chat> -->
      <!-- <chat :myRight="720"></chat> -->
      <dialogoInbound :dialogInbound="dialogInbound" :tokenInbound="tokenInbound" @closed_inbound="dialogInbound=false"></dialogoInbound>
    </v-container>
  </div>
</template>

<script>
import bandejegaPqrs from '@/components/bandejas/bandeja_pqrsComponent.vue'
// import chat from '@/components/chats/chatComponent.vue'
import dialogoInbound from '@/components/bandejas/dialogo_inboundCompont.vue'
import dialogoConfiguracion from '@/components/bandejas/bandeja_configuracionCompont.vue'
import outboundAsesor from '@/components/outbound/outbound_asesorComponent.vue'

export default {
  name: 'bandejaComponent',
  components: {
    bandejegaPqrs,
    // chat,
    dialogoInbound,
    dialogoConfiguracion,
    outboundAsesor
  },
  data: () => ({
    tab: null,
    dialogInbound: false,
    tokenInbound: 0
  }),
  methods: {
    nuevo_inbound () {
      this.dialogInbound = true
      this.tokenInbound = this.tokenInbound + 1
    }

  }
}
</script>
