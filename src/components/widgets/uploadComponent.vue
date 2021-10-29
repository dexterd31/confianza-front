<template>
<div style="width:100%">
  <v-row no-gutters>
    <v-col cols="12" md="3">
      <v-btn  @click.native="onFocus"><v-icon>mdi-paperclip</v-icon> ADJUNTAR ARCHIVO</v-btn>
    </v-col>
    <v-col cols="12" md="9" align-self="center" class="text-center" v-if="progress>0">
      <v-progress-linear v-model="progress" color="blue darken-3"></v-progress-linear>
      {{ progress }}%
    </v-col>
  </v-row>
  <br>
  <v-list>
    <div>
        <v-list-item >
            <v-list-item-content>
              <v-list-item-title>achvivo</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-action-text>12ddd</v-list-item-action-text>
              <v-row no-gutters>
                <v-col cols="12" md="6" align-self="center">
                  <v-icon :color="colores.green">mdi-check-bold</v-icon>
                </v-col>
                <v-col cols="12" md="6" align-self="center">
                  <v-btn icon><v-icon :color="colores.red">mdi-delete</v-icon></v-btn>
                </v-col>
              </v-row>
            </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
    </div>
  </v-list>

<!--
  <v-flex xs6 v-if="false">
    <input style="display:none" type="file" :multiple="false" ref="fileInput" @change="onFileChange">
    <v-text-field single-line v-model="filename" ref="fileTextField" :disabled="true" v-if="false"></v-text-field>
    <v-btn icon @click.native="cancelar"><v-icon color="pink" dark>mdi-restore</v-icon></v-btn>
    <v-btn icon @click.native="onFocus"><v-icon color="blue darken-3" dark>mdi-camera</v-icon></v-btn>
  </v-flex>
</v-layout>
-->
<input style="display:none" type="file" :multiple="true" ref="fileInput" @change="onFileChange">
<v-text-field single-line v-model="filename" ref="fileTextField" :disabled="true" v-if="false"></v-text-field>

</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'uploadComponent',
  props: ['session', 'urlroute', 'keyform', 'colores'],
  data () {
    return {
      filename: '',
      progress: '0',
      files: [],
      iseliminar: false
    }
  },
  created () {
  },
  watch: {
  },
  methods: {
    onFocus () {
      this.$refs.fileInput.click()
    },
    onFileChange ($event) {
      const files = $event.target.files || $event.dataTransfer.files
      this.filename = files[0].name
      this.files = files
      this.CargarFiles()
    },
    CargarFiles () {
      var filedata = new FormData()
      for (var i = 0; i < this.files.length; i++) {
        filedata.append('files[]', this.files[i])
      }
      // filedata.append('usuario_id', this.session.usuario_id)
      // filedata.append('keyform', this.keyform)
      this.iseliminar = false
      var urlroute = this.$store.getters.getUrl + this.urlroute
      axios({
        method: 'POST',
        url: urlroute,
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: filedata,
        onUploadProgress: function (e) {
          if (e.lengthComputable) {
            var percentComplete = e.loaded / e.total
            percentComplete = parseInt(percentComplete * 100)
            this.progress = percentComplete
          }
        }.bind(this)
      }).then(response => {
        console.log(response.data)
      }, error => {
        console.error(error)
      })
    }
  }
}
</script>
