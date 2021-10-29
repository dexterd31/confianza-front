<template>
<div style="width:100%">
  <v-list-item link class="pa-0">
    <v-row no-gutters>
      <v-col cols="12" md="1">
          <v-row no-gutters align="center">
            <v-col cols="12" md="3">
              <v-card width="25" height="85" color="pink" @click="abrirColores"></v-card>
            </v-col>
            <v-col cols="12" md="9" class="text-center">1234567</v-col>
          </v-row>
          <!-- <v-btn icon color="pink"><v-icon>mdi-heart</v-icon></v-btn> -->
      </v-col>
      <v-col cols="12" md="2">
          <v-list-item-content class="pa-0">
              <v-list-item-title><v-icon size="15">mdi-chevron-right</v-icon><span style="font-size:10px">IDENTIFICACION</span></v-list-item-title>
              <v-list-item-title><v-icon size="15">mdi-chevron-right</v-icon><span style="font-size:10px">CARLOS ALEXANDER</span></v-list-item-title>
              <v-list-item-title><v-icon size="15">mdi-chevron-right</v-icon><span style="font-size:10px">CARREÑO RODRIGUEZ</span></v-list-item-title>
          </v-list-item-content>
      </v-col>
      <v-col cols="12" md="3">
          <v-list-item-content class="pa-0">
              <v-list-item-title><v-icon size="15">mdi-email</v-icon><span style="font-size:10px">MEDIO</span></v-list-item-title>
              <v-list-item-title><v-icon size="15">mdi-chevron-right</v-icon><span style="font-size:10px">QUEJA</span></v-list-item-title>
              <v-list-item-title><v-icon size="15">mdi-chevron-right</v-icon><span style="font-size:10px">CAUSAL</span></v-list-item-title>
              <v-list-item-title><v-icon size="15">mdi-chevron-right</v-icon><span style="font-size:10px">MOTIVO</span></v-list-item-title>
          </v-list-item-content>
      </v-col>
      <v-col cols="12" md="3">
            <v-row no-gutters><v-col class="pl-2"><v-icon size="15">mdi-calendar</v-icon><span class="pl-1" style="font-size:10px">CREADO: 2021-09-15 09:00:00</span></v-col></v-row>
            <v-row no-gutters><v-col class="pl-2"><v-icon size="15">mdi-account-circle</v-icon><span class="pl-1" style="font-size:10px">CARLOS ALEXANDER CARREÑO</span></v-col></v-row>
            <v-row no-gutters><v-col class="pr-2"><v-card class="pl-2" color="green" dark><v-icon size="15">mdi-calendar</v-icon><span class="pl-1" style="font-size:10px">CERRAR 2019-01-01 08:00:00</span></v-card></v-col></v-row>
      </v-col>
      <v-col cols="12" md="3" align-self="center">
          <v-row no-gutters align="center">
            <v-col cols="12" md="10">
                <v-row no-gutters class="pt-1">
                  <v-col>
                  <v-chip small outlined color="green">
                    <v-avatar left><v-icon size="15">mdi-check-bold</v-icon></v-avatar>
                    <span style="font-size:10px">CARLOS ALEXANDER CARREÑO</span>
                  </v-chip>
                  </v-col>
                </v-row>
                <v-row no-gutters class="pt-1">
                  <v-col>
                  <v-chip small outlined color="indigo">
                    <v-avatar left><v-icon size="15">mdi-account-circle</v-icon></v-avatar>
                    <span style="font-size:10px">CARLOS ALEXANDER CARREÑO</span>
                  </v-chip>
                  </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" md="2" align-self="center" class="text-center">
              <v-btn icon color="blue"><v-icon>mdi-pencil</v-icon></v-btn>
            </v-col>
          </v-row>
      </v-col>
    </v-row>
  </v-list-item>
  <v-divider></v-divider>

  <v-list-item link class="pa-0">
    <v-row no-gutters>
      <v-col cols="12" md="1">
          <v-row no-gutters align="center">
            <v-col cols="12" md="3">
              <v-card width="25" height="85" color="pink" @click="abrirColores"></v-card>
            </v-col>
            <v-col cols="12" md="9" class="text-center">1234567</v-col>
          </v-row>
          <!-- <v-btn icon color="pink"><v-icon>mdi-heart</v-icon></v-btn> -->
      </v-col>
      <v-col cols="12" md="2">
          <v-list-item-content class="pa-0">
              <v-list-item-title><v-icon size="15">mdi-chevron-right</v-icon><span style="font-size:10px">IDENTIFICACION</span></v-list-item-title>
              <v-list-item-title><v-icon size="15">mdi-chevron-right</v-icon><span style="font-size:10px">CARLOS ALEXANDER</span></v-list-item-title>
              <v-list-item-title><v-icon size="15">mdi-chevron-right</v-icon><span style="font-size:10px">CARREÑO RODRIGUEZ</span></v-list-item-title>
          </v-list-item-content>
      </v-col>
      <v-col cols="12" md="3">
          <v-list-item-content class="pa-0">
              <v-list-item-title><v-icon size="15">mdi-phone</v-icon><span style="font-size:10px">MEDIO</span></v-list-item-title>
              <v-list-item-title><v-icon size="15">mdi-chevron-right</v-icon><span style="font-size:10px">QUEJA</span></v-list-item-title>
              <v-list-item-title><v-icon size="15">mdi-chevron-right</v-icon><span style="font-size:10px">CAUSAL</span></v-list-item-title>
              <v-list-item-title><v-icon size="15">mdi-chevron-right</v-icon><span style="font-size:10px">MOTIVO</span></v-list-item-title>
          </v-list-item-content>
      </v-col>
      <v-col cols="12" md="3">
            <v-row no-gutters><v-col class="pl-2"><v-icon size="15">mdi-calendar</v-icon><span class="pl-1" style="font-size:10px">CREADO: 2021-09-15 09:00:00</span></v-col></v-row>
            <v-row no-gutters><v-col class="pl-2"><v-icon size="15">mdi-account-circle</v-icon><span class="pl-1" style="font-size:10px">CARLOS ALEXANDER CARREÑO</span></v-col></v-row>
            <v-row no-gutters><v-col class="pr-2"><v-card class="pl-2" color="green" dark><v-icon size="15">mdi-calendar</v-icon><span class="pl-1" style="font-size:10px">CERRAR 2019-01-01 08:00:00</span></v-card></v-col></v-row>
      </v-col>
      <v-col cols="12" md="3" align-self="center">
          <v-row no-gutters align="center">
            <v-col cols="12" md="10">
                <v-row no-gutters class="pt-1">
                  <v-col>
                  <v-chip small outlined color="green">
                    <v-avatar left><v-icon size="15">mdi-check-bold</v-icon></v-avatar>
                    <span style="font-size:10px">CARLOS ALEXANDER CARREÑO</span>
                  </v-chip>
                  </v-col>
                </v-row>
                <v-row no-gutters class="pt-1">
                  <v-col>
                  <v-chip small outlined color="indigo">
                    <v-avatar left><v-icon size="15">mdi-account-circle</v-icon></v-avatar>
                    <span style="font-size:10px">CARLOS ALEXANDER CARREÑO</span>
                  </v-chip>
                  </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" md="2" align-self="center" class="text-center">
              <v-btn icon color="blue"><v-icon>mdi-pencil</v-icon></v-btn>
            </v-col>
          </v-row>
      </v-col>
    </v-row>
  </v-list-item>
  <v-divider></v-divider>

   <v-list-item link class="pa-0">
    <v-row no-gutters>
      <v-col cols="12" md="1">
          <v-row no-gutters align="center">
            <v-col cols="12" md="3">
              <v-card width="25" height="85" color="pink" @click="abrirColores"></v-card>
            </v-col>
            <v-col cols="12" md="9" class="text-center">1234567</v-col>
          </v-row>
          <!-- <v-btn icon color="pink"><v-icon>mdi-heart</v-icon></v-btn> -->
      </v-col>
      <v-col cols="12" md="2">
          <v-list-item-content class="pa-0">
              <v-list-item-title><v-icon size="15">mdi-chevron-right</v-icon><span style="font-size:10px">IDENTIFICACION</span></v-list-item-title>
              <v-list-item-title><v-icon size="15">mdi-chevron-right</v-icon><span style="font-size:10px">CARLOS ALEXANDER</span></v-list-item-title>
              <v-list-item-title><v-icon size="15">mdi-chevron-right</v-icon><span style="font-size:10px">CARREÑO RODRIGUEZ</span></v-list-item-title>
          </v-list-item-content>
      </v-col>
      <v-col cols="12" md="3">
          <v-list-item-content class="pa-0">
              <v-list-item-title><v-icon size="15">mdi-wechat</v-icon><span style="font-size:10px">CHAT</span></v-list-item-title>
              <v-list-item-title><v-icon size="15">mdi-chevron-right</v-icon><span style="font-size:10px">QUEJA</span></v-list-item-title>
              <v-list-item-title><v-icon size="15">mdi-chevron-right</v-icon><span style="font-size:10px">CAUSAL</span></v-list-item-title>
              <v-list-item-title><v-icon size="15">mdi-chevron-right</v-icon><span style="font-size:10px">MOTIVO</span></v-list-item-title>
          </v-list-item-content>
      </v-col>
      <v-col cols="12" md="3">
            <v-row no-gutters><v-col class="pl-2"><v-icon size="15">mdi-calendar</v-icon><span class="pl-1" style="font-size:10px">CREADO: 2021-09-15 09:00:00</span></v-col></v-row>
            <v-row no-gutters><v-col class="pl-2"><v-icon size="15">mdi-account-circle</v-icon><span class="pl-1" style="font-size:10px">CARLOS ALEXANDER CARREÑO</span></v-col></v-row>
            <v-row no-gutters><v-col class="pr-2"><v-card class="pl-2" color="green" dark><v-icon size="15">mdi-calendar</v-icon><span class="pl-1" style="font-size:10px">CERRAR 2019-01-01 08:00:00</span></v-card></v-col></v-row>
      </v-col>
      <v-col cols="12" md="3" align-self="center">
          <v-row no-gutters align="center">
            <v-col cols="12" md="10">
                <v-row no-gutters class="pt-1">
                  <v-col>
                  <v-chip small outlined color="green">
                    <v-avatar left><v-icon size="15">mdi-check-bold</v-icon></v-avatar>
                    <span style="font-size:10px">CARLOS ALEXANDER CARREÑO</span>
                  </v-chip>
                  </v-col>
                </v-row>
                <v-row no-gutters class="pt-1">
                  <v-col>
                  <v-chip small outlined color="indigo">
                    <v-avatar left><v-icon size="15">mdi-account-circle</v-icon></v-avatar>
                    <span style="font-size:10px">CARLOS ALEXANDER CARREÑO</span>
                  </v-chip>
                  </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" md="2" align-self="center" class="text-center">
              <v-btn icon color="blue"><v-icon>mdi-pencil</v-icon></v-btn>
            </v-col>
          </v-row>
      </v-col>
    </v-row>
  </v-list-item>
  <v-divider></v-divider>

  </div>
</template>

<script>

export default {
  name: 'bandeja_pqr_listadoComponent',
  data: () => ({
    tab: null
  }),
  methods: {
    abrirColores () {
      alert('1')
    }
  }
}
</script>
