<template>
  <div style="width:100%">
    <v-row no-gutters>
      <v-col cols="12" style="font-size: 11px">
        <b>{{ titulo }}</b>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" style="font-size: 16px">
        {{ descripcion }}
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  props: ['titulo', 'descripcion'],
  data: () => ({
  }), // FIN DE DATA
  created () {}, // FIN DE CREATED
  watch: {}, // FIN DE WATCH
  methods: {} // FIN DE METODOS
}
</script>
