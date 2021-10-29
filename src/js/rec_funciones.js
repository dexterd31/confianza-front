import axios from 'axios'
export default {
  methods: {
    rec_function_timestamp (pfecha) {
      pfecha = this.rec_function_replaceall(pfecha, 'T', ' ')
      pfecha = this.rec_function_replaceall(pfecha, '.000000Z', '')
      return pfecha
    },
    rec_function_replaceall (ptexto, pbuscar, preplace) {
      var target = ptexto
      return target.split(pbuscar).join(preplace)
    },
    rec_function_numberWithCommas (x, coma) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, coma)
    },
    async rec_function_geolocalizacion () {
      this.location.gettingLocation = true
      try {
        this.location.gettingLocation = false
        this.location.location = await this.rec_function_getLocation()
        // console.log(this.location.location)
        // console.log(this.location.location.coords.latitude)
        // console.log(this.location.location.coords.longitude)
      } catch (e) {
        this.location.gettingLocation = false
        this.location.errorStr = e.message
      }
    },
    async rec_function_getLocation () {
      return new Promise((resolve, reject) => {
        if (!('geolocation' in navigator)) {
          reject(new Error('Geolocation is not available.'))
        }
        navigator.geolocation.getCurrentPosition(pos => {
          resolve(pos)
        }, err => {
          reject(err)
        })
      })
    },
    rec_functiones_ip () {
      this.loadingEstado = true
      var urlroute = this.$store.getters.getUrl + 'ip_publica'
      axios({
        url: urlroute,
        method: 'GET',
        data: null,
        auth: {
          username: this.$store.getters.getHeadUsuario,
          password: this.$store.getters.getHeadPassword
        }
      }).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log('error ' + error)
      }).finally(() => {
        this.loadingEstado = false
      })

      // var host = window.location.protocol + '//' + window.location.host + '//' + window.location.hostname
      // return host
    },
    rec_funciones_isCorreo (correo) {
      var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
      var bestado
      if (reg.test(correo)) {
        bestado = true
      } else {
        bestado = false
      }
      return bestado
    },
    rec_funciones_fecha (date) {
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()

      if (month <= 9) month = '0' + month
      if (day <= 9) day = '0' + day

      return year + '-' + month + '-' + day
    },
    rec_funciones_fecha_y_hora (date) {
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()
      var hora = date.getHours()
      var minuto = date.getMinutes()
      var segundo = date.getSeconds()

      if (month <= 9) month = '0' + month
      if (day <= 9) day = '0' + day
      if (hora <= 9) hora = '0' + hora
      if (minuto <= 9) minuto = '0' + minuto
      if (segundo <= 9) segundo = '0' + segundo

      return year + '-' + month + '-' + day + ' ' + hora + ':' + minuto + ':' + segundo
    },
    rec_funciones_fecha_actual () {
      var date = new Date()
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()
      if (month <= 9) month = '0' + month
      if (day <= 9) day = '0' + day
      return year + '-' + month + '-' + day
    },
    rec_funciones_hora_actual () {
      var h = new Date()
      var hora = h.getHours()
      var minuto = h.getMinutes()
      var segundo = h.getSeconds()

      if (hora <= 9) hora = '0' + hora
      if (minuto <= 9) minuto = '0' + minuto
      if (segundo <= 9) segundo = '0' + segundo
      return hora + ':' + minuto + ':' + segundo
    },
    rec_funciones_fecha_addDias (pdate, pdias) {
      var result = new Date(pdate)
      result.setDate(result.getDate() + pdias)
      result = this.rec_funciones_fecha_y_hora(result)
      return result
    },
    rec_funciones_anio () {
      var anio = new Date().getFullYear()
      return anio
    },
    rec_funciones_mayuscula (str) {
      if (str !== '') {
        str = str.toUpperCase()
        str = str.trim()
      }
      return str
    },
    rec_funciones_minusculas (str) {
      if (str !== '') {
        str = str.toLowerCase()
        str = str.trim()
      }
      return str
    },
    rec_funciones_mes () {
      var d = new Date()
      var numeroMes = d.getMonth() + 1
      var mes = ''
      switch (numeroMes) {
        case 1:
          mes = '01'
          break
        case 2:
          mes = '02'
          break
        case 3:
          mes = '03'
          break
        case 4:
          mes = '04'
          break
        case 5:
          mes = '05'
          break
        case 6:
          mes = '06'
          break
        case 7:
          mes = '07'
          break
        case 8:
          mes = '08'
          break
        case 9:
          mes = '09'
          break
        case 10:
          mes = '10'
          break
        case 11:
          mes = '11'
          break
        case 12:
          mes = '12'
          break
      }
      return mes
    },
    rec_funciones_mesnumero_texto (numeroMes) {
      var mes = ''
      switch (numeroMes) {
        case 1:
          mes = 'ENERO'
          break
        case 2:
          mes = 'FEBRERO'
          break
        case 3:
          mes = 'MARZO'
          break
        case 4:
          mes = 'ABRIL'
          break
        case 5:
          mes = 'MAYO'
          break
        case 6:
          mes = 'JUNIO'
          break
        case 7:
          mes = 'JULIO'
          break
        case 8:
          mes = 'AGOSTO'
          break
        case 9:
          mes = 'SEPTIEMBRE'
          break
        case 10:
          mes = 'OCTUBRE'
          break
        case 11:
          mes = 'NOVIEMBRE'
          break
        case 12:
          mes = 'DICIEMBRE'
          break
      }
      return mes
    },
    rec_funciones_mes_texto () {
      var d = new Date()
      var numeroMes = d.getMonth() + 1
      var mes = ';'
      switch (numeroMes) {
        case 1:
          mes = 'ENERO'
          break
        case 2:
          mes = 'FEBRERO'
          break
        case 3:
          mes = 'MARZO'
          break
        case 4:
          mes = 'ABRIL'
          break
        case 5:
          mes = 'MAYO'
          break
        case 6:
          mes = 'JUNIO'
          break
        case 7:
          mes = 'JULIO'
          break
        case 8:
          mes = 'AGOSTO'
          break
        case 9:
          mes = 'SEPTIEMBRE'
          break
        case 10:
          mes = 'OCTUBRE'
          break
        case 11:
          mes = 'NOVIEMBRE'
          break
        case 12:
          mes = 'DICIEMBRE'
          break
      }
      return mes
    },
    rec_funciones_mesLetra (ptexto) {
      var numero = '00'
      if (ptexto === 'ENERO') {
        numero = '01'
      }

      if (ptexto === 'FEBRERO') {
        numero = '02'
      }

      if (ptexto === 'MARZO') {
        numero = '03'
      }

      if (ptexto === 'ABRIL') {
        numero = '04'
      }

      if (ptexto === 'MAYO') {
        numero = '05'
      }

      if (ptexto === 'JUNIO') {
        numero = '06'
      }

      if (ptexto === 'JULIO') {
        numero = '07'
      }

      if (ptexto === 'AGOSTO') {
        numero = '08'
      }

      if (ptexto === 'SEPTIEMBRE') {
        numero = '09'
      }

      if (ptexto === 'OCTUBRE') {
        numero = '10'
      }

      if (ptexto === 'NOVIEMBRE') {
        numero = '11'
      }

      if (ptexto === 'DICIEMBRE') {
        numero = '12'
      }

      return numero
    },
    rec_funciones_calcular_edad (pfecha) {
      var resul = ''
      var birthdayArr = pfecha.split('-')
      var birthdayDate = new Date(
        birthdayArr[0],
        birthdayArr[1] - 1,
        birthdayArr[2]
      )
      if (!isNaN(birthdayDate)) {
        var ageDifMs = Date.now() - birthdayDate.getTime()
        var ageDate = new Date(ageDifMs)
        resul = Math.abs(ageDate.getUTCFullYear() - 1970)
      }
      return resul
    },
    rec_funciones_dia_siguiente () {
      var oldDate = new Date()
      var nextday = new Date(
        oldDate.getFullYear(),
        oldDate.getMonth(),
        oldDate.getDate() + 1
      )
      return this.rec_funciones_fecha(nextday)
    },
    rec_funciones_ultimo_dia_mes (anio, mes) {
      // var date = new Date();
      // var ultimoDia = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      var ultimoDia = new Date(anio, mes + 1, 0).getDate()
      return ultimoDia
    },
    rec_funciones_key () {
      var date = new Date()
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()
      var hora = date.getHours()
      var minutos = date.getMinutes()
      var segundos = date.getSeconds()

      if (month <= 9) month = '0' + month
      if (day <= 9) day = '0' + day
      if (minutos <= 9) minutos = '0' + minutos
      if (segundos <= 9) segundos = '0' + segundos

      var ran = Math.floor(Math.random() * 100)
      var id = parseInt(year + '' + month + '' + day + '' + hora + '' + minutos + '' + segundos + '' + ran)
      return id
    },
    rec_funciones_isNumeric: function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n)
    },
    rec_funciones_bytesToSize (bytes) {
      var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
      if (bytes === 0) return 'n/a'
      var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
      if (i === 0) return bytes + ' ' + sizes[i]
      return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i]
    }

  }
}
