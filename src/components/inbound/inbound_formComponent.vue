<template>
<div style="width:100%">
  <br>
  <v-form ref="form">
    ID: {{ id }}
    <br>
    <v-text-field v-model='form.descripcion' :rules="[rules.requerido]" maxlength="40" counter="40" label='* DESCRIPCION' autocomplete="off"></v-text-field>
    <br>
    <v-btn @click="validar" block dark>ACEPTAR</v-btn>
    <br>
    <div v-if="items_errores">
      <b>ERRORES</b>
      {{ items_errores }}
    </div>
  </v-form>
  <template v-for="(item, index) in items_gestiones">
    <v-row no-gutters :key="index">
      <v-col cols="12" md="6">
        {{ item.id }}
      </v-col>
      <v-col cols="12" md="6">
        {{ item.descripcion }}
      </v-col>
    </v-row>
  </template>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'bandejaOutboundComponent',
  components: {

  },
  data: () => ({
    id: 0,
    form: { descripcion: '' },
    items_errores: null,
    items_gestiones: [],
    rules: { requerido: v => !!v || 'Requerido', email: v => /.+@.+\..+/.test(v) || 'E-mail invalido', long10: v => (v && v.length <= 10) || 'Debe ser mayor a 10', combocero: v => (v && v !== 0) || 'Requerido' }
  }),
  methods: {
    validar () {
      if (this.$refs.form.validate()) {
        this.enviar_datos()
      }
    },
    enviar_datos () {
      this.dialogEsperar = true
      var urlroute = this.$store.getters.getUrl + 'guardar'
      const data = { form: this.form }
      axios({
        url: urlroute,
        method: 'POST',
        data: data
      }).then((response) => {
        this.items_gestiones = response.data
      }).catch((error) => {
        console.log('ERROR: ' + error)
        if (error.response.status === 422) {
          this.items_errores = error.response.data.errors
        }
      }).finally(() => {
        this.dialogEsperar = false
      })
    }

  }
}
</script>
