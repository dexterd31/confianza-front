<template>
<div style="width:100%">
  <!-- style="right:500px;" -->
<div class="msg_box" :style="{ right: myRight + 'px' }" v-if="showChats">
  <v-card>
      <v-toolbar color="pink darken-4" dark >
        <v-toolbar-title>
          <v-btn icon @click="toggle"><v-icon>{{ show? 'mdi-arrow-down-thick':'mdi-arrow-up-thick' }}</v-icon></v-btn>CHAT
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="showChats=false"><v-icon>mdi-exit-to-app</v-icon></v-btn>
      </v-toolbar>
      <transition name="fade">
          <div v-if="show" style="height:400px;overflow-y:auto;">
              <v-list two-line >
                <template v-for="(item, index) in items">
                  <v-subheader v-if="item.header" :key="item.header"></v-subheader>
                  <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
                  <v-list-item v-else :key="item.title">
                    <v-list-item-avatar> <img :src="item.avatar"></v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title v-html="item.title"></v-list-item-title>
                        <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>
          </div>
      </transition>
      <v-footer v-if="show">
        <v-row no-gutters>
          <v-col cols="12" md="10"><v-text-field placeholder="MENSAJE" append-outer-icon="mdi-send" @click:append-outer="sendMessage"></v-text-field></v-col>
          <v-col md="1" align-self="center"><v-btn icon><v-icon>mdi-paperclip</v-icon></v-btn></v-col>
        </v-row>
      </v-footer>
  </v-card>
</div>
</div>
</template>

<script>

export default {
  name: 'bandejaChatComponent',
  components: {
  },
  props: ['myRight'],
  data: () => ({
    tab: null,
    showChats: true,
    show: true,
    items: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
      }
    ]
  }),
  methods: {
    toggle () {
      this.show = !this.show
    },
    sendMessage () {
      alert('1')
    }
  }
}
</script>
<style scoped>
.msg_box{
  position:fixed;
  bottom:0px;
  width:320px;
  /*background:white;
  border-radius:5px 5px 0px 0px;*/
  z-index:1;
}
</style>
