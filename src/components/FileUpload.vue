<template>
  <v-dialog v-model="dialog" persistent max-width="500px">
    <!-- <input type="file" @change="onFileSelected" style="display:none" ref="fileInputUpload"> -->
    <v-btn flat dark slot="activator" @click="$refs.fileInputUpload.click()">
      <v-icon>file_upload</v-icon> Upload </v-btn>
    <v-card>
      <v-card-title> <span class="headline">File Upload</span> </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field label="Title" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Description" required></v-text-field>
            </v-flex>
            <div class="container">
              <div class="dropbox">
              <input type="file" :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length" accept=".doc, .docx, .pdf, .txt, .odt, .rtf" class="input-file">
              <p v-if="isInitial">
                Drag your file here to begin<br> or click to browse
              </p>
              <p v-if="isSaving">
                Uploading {{ fileCount }} files...
              </p>
            </div>
            </div>
          </v-layout>
        </v-container> <small>*indicates required field</small> </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
const STATUS_INITIAL = 0
const STATUS_SAVING = 1
const STATUS_SUCCESS = 2
const STATUS_FAILED = 3

export default {
  data: () => ({
    uploadedFiles: [],
    uploadError: null,
    currentStatus: null,
    uploadFieldName: 'documents',
    dialog: false
  }),
  computed: {
    isInitial () {
      return this.currentStatus === STATUS_INITIAL
    },
    isSaving () {
      return this.currentStatus === STATUS_SUCCESS
    },
    isFailed () {
      return this.currentStatus === STATUS_FAILED
    }
  },
  methods: {
    reset () {
      this.currentStatus = STATUS_INITIAL
      this.uploadedFile = []
      this.uploadedError = null
    },
    save (formData) {
      this.currentStatus = STATUS_SAVING
    },
    filesChange (fieldName, fileList) {
      const formData = new FormData()

      if (!fileList.length) return
      this.save(formData)
    },
    mounted () {
      this.reset()
    }
  }
}
</script>

<style>
.dropbox {
  outline: 2px dashed grey;
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px;
  position: relative;
  cursor: pointer;
}

.input-file {
  opacity: 0;
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue;
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}

</style>
