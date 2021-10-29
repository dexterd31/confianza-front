<template>
<div style="width:100%">
  <v-row>
    <v-col cols="12" md="6">
      <v-text-field label="* AÑO"></v-text-field>
    </v-col>
    <v-col cols="12" md="5">
      <v-autocomplete label="* MES"></v-autocomplete>
    </v-col>
    <v-col cols="12" md="1" align-self="center">
      <v-btn color="secondary">1</v-btn>
    </v-col>
  </v-row>
  <outboundBases></outboundBases>
</div>
</template>

<script>
import outboundBases from '@/components/outbound/outbound_asesor_basesComponent.vue'
export default {
  name: 'outboundAsesorComponent',
  components: {
    outboundBases
  },
  data: () => ({

  })
}
</script>
