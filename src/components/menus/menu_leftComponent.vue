<template>
  <div style="width:100%">
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-card color="indigo" dark>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title><strong>LLAMADAS</strong></v-list-item-title>
            <v-list-item-subtitle>Historial</v-list-item-subtitle>
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
      </v-card>
      <v-card-text class="pt-0 pb-0">
        <v-menu v-model="menu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field v-model="date" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
          </template>
          <v-date-picker v-model="date" @input="menu = false" locale="es"></v-date-picker>
        </v-menu>
      </v-card-text>
      <v-divider></v-divider>
      <v-list-item link>
          <v-list-item-avatar><v-icon class="grey lighten-1" color="white">mdi-phone-forward</v-icon></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title><strong>3112672524</strong></v-list-item-title>
            <v-list-item-subtitle>01:00</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item link>
          <v-list-item-avatar><v-icon class="grey lighten-1" color="white">mdi-phone-incoming</v-icon></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title><strong>3112674830</strong></v-list-item-title>
            <v-list-item-subtitle>00:30</v-list-item-subtitle>
          </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
    </v-navigation-drawer>

  </div>
</template>

<script>

export default {
  name: 'MenuLeft',

  data: () => ({
    drawer: true,
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false
  })
}
</script>
