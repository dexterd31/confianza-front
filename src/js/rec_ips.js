// import axios from 'axios'
export default {
  methods: {
    rec_ip_validar () {
      var ip = this.form.ip.trim()
      var bestado = 1
      this.rec_ip_limpiar_errores()
      if (ip === '') {
        this.errores.ip = 'INGRESE LA IP'
        bestado = 0
      }
      return bestado
    }

  }
}
