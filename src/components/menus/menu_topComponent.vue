<template>
  <div style="width:100%">
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" :clipped-right="$vuetify.breakpoint.lgAndUp" app color="blue" dark>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span>ASEGURADORA CONFIANZA</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-badge color="red" overlap content="6"><v-icon>mdi-email</v-icon></v-badge>
      </v-btn>
      <v-btn icon>
        <v-badge color="red" overlap content="6"><v-icon>mdi-bell</v-icon></v-badge>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>

export default {
  name: 'MenuLeft',

  data: () => ({
    drawer: true
  })
}
</script>
