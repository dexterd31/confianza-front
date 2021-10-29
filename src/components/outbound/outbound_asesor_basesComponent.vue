<template>
<div style="width:100%">
  <v-list>
    <v-list-item>
      <v-list-item-avatar>
          <v-avatar color="teal" size="40">
            <span class="white--text">1</span>
          </v-avatar>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>
          <v-row no-gutters>
            <v-col cols="12" md="2">
              <v-icon>mdi-database</v-icon>ID: 12345678
            </v-col>
            <v-col cols="12" md="2">
              <v-card color="blue" class="text-center" style="font-size:11px" dark>REGISTROS  11</v-card>
            </v-col>
            <v-col cols="12" md="8">
                <v-row no-gutters>
                  <v-col cols="12" md="3">
                    <v-card color="blue-grey" class="text-center" dark style="font-size:11px">SIN GESTIONAR 123</v-card>
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-card color="orange" class="text-center" dark style="font-size:11px">GESTIONADOS  123</v-card>
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-card color="teal" class="text-center" dark style="font-size:11px">CERRADOS 123</v-card>
                  </v-col>
                </v-row>
            </v-col>
          </v-row>
        </v-list-item-title>
        <v-list-item-title>
          <v-row no-gutters>
            <v-col cols="12" md="2"></v-col>
            <v-col cols="12" md="2">
              <v-icon>mdi-calendar-outline</v-icon><span style="font-size: 12px">2018-01-01</span>
            </v-col>
            <v-col cols="12" md="4">
              <v-icon>mdi-database</v-icon><span style="font-size: 12px">NOMBRE DE LA BASE CARGADA</span>
            </v-col>
            <v-col cols="12" md="4">
                <v-icon>mdi-account</v-icon><span style="font-size: 12px">USUARIO QUE LA CARGO</span>
            </v-col>
          </v-row>
        </v-list-item-title>
      </v-list-item-content>
      <v-list-item-action>
        <v-list-item-action-text>
          <v-btn class="ma-2" fab dark small color="blue lighten-2"><v-icon>mdi-phone-in-talk</v-icon></v-btn>
        </v-list-item-action-text>
      </v-list-item-action>
    </v-list-item>
    <v-divider></v-divider>
  </v-list>
  <outboundBasesGestion></outboundBasesGestion>
</div>
</template>

<script>
import outboundBasesGestion from '@/components/outbound/outbound_asesor_bases_gestionComponent.vue'

export default {
  name: 'outboundAsesorBasesComponent',
  components: {
    outboundBasesGestion
  },
  data: () => ({

  })
}
</script>
