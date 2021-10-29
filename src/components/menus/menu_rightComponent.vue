<template>
  <div style="width:100%">
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app right>
      <v-card color="teal" dark>
        <v-list-item>
          <v-list-item-avatar> <v-icon>mdi-wechat</v-icon></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title><strong>CHAT</strong></v-list-item-title>
            <v-list-item-subtitle>Conversaciones</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on"><v-icon>mdi-refresh</v-icon></v-btn>
              </template>
              <span>Actualizar</span>
            </v-tooltip>
        </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
      </v-card>
      <v-list-item link>
          <v-list-item-avatar><v-icon class="grey lighten-1" color="white">mdi-phone-forward</v-icon></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title><strong>CARLOS CARREÑO</strong></v-list-item-title>
            <v-list-item-subtitle><v-icon color="green">mdi-circle-medium</v-icon>En linea</v-list-item-subtitle>
          </v-list-item-content>
      </v-list-item>
        <v-divider></v-divider>
      <v-list-item link>
          <v-list-item-avatar><v-icon class="grey lighten-1" color="white">mdi-phone-forward</v-icon></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title><strong>CARLOS CARREÑO</strong></v-list-item-title>
            <v-list-item-subtitle><v-icon color="red">mdi-circle-medium</v-icon>2021-09-07</v-list-item-subtitle>
          </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
    </v-navigation-drawer>
  </div>
</template>

<script>

export default {
  name: 'MenuRight',

  data: () => ({
    drawer: true
  })
}
</script>
