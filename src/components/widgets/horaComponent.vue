<template>
<div style="width:100%">
  <v-row align="center">
    <v-col align-self="center">
      <v-icon size="30">mdi-alarm</v-icon><span class="text-h6"><strong> {{ tiempos }}</strong></span>
    </v-col>
  </v-row>
</div>
</template>

<script>
export default {
  name: 'bandejaOutboundComponent',
  components: {
  },
  props: ['tokenTiempo'],
  data: () => ({
    tiempos: '00:00:00',
    h: '',
    m: '',
    s: '',
    hora: 0,
    minuto: 0,
    segundos: 0,
    total_segundos: 0
  }),
  created () {
    this.startInterval()
  },
  watch: {
    tokenTiempo: {
      immediate: true,
      handler (newVal, oldVal) {
        this.tiempos = '00:00:00'
        this.h = ''
        this.m = ''
        this.s = ''
        this.hora = 0
        this.minuto = 0
        this.segundos = 0
        this.total_segundos = 0
      }
    }
  },
  methods: {
    startInterval: function () {
      setInterval(() => {
        this.total_segundos = this.total_segundos + 1
        this.segundos = this.segundos + 1
        if (this.segundos >= 60) {
          this.segundos = 0
          this.minuto = this.minuto + 1
          if (this.minuto >= 60) {
            this.minuto = 0
            this.hora = this.hora + 1
          }
        }

        if (this.segundos <= 9) {
          this.s = '0' + this.segundos
        } else {
          this.s = this.segundos
        }

        if (this.minuto <= 9) {
          this.m = '0' + this.minuto
        } else {
          this.m = this.minuto
        }

        if (this.hora <= 9) {
          this.h = '0' + this.hora
        } else {
          this.h = this.hora
        }

        this.tiempos = this.h + ':' + this.m + ':' + this.s
        this.$emit('eventotiempo', this.total_segundos)
      }, 1000)
    }

  }
}
</script>
