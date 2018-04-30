<template>
  <v-dialog v-model="dialog" persistent max-width="500px">
    <v-btn flat dark slot="activator">
      <v-icon>file_upload</v-icon> Upload </v-btn>
    <v-card>
      <v-card-title> <span class="headline">File Upload</span> </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field label="Title" v-model="title" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Subject" v-model="subject" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Description" required v-model="description"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Course Number" v-model="courseNumber" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Professor" v-model="professor" required></v-text-field>
            </v-flex>
            <div class="container">
              <div class="dropbox">
              <input type="file" @change="onFileSelected" ref="fileInputUpload">>
              <p>
                Drag your file here to begin<br> or click to browse
              </p>
              <p>
                Upload
              </p>
            </div>
            </div>
          </v-layout>
        </v-container> <small>*indicates required field</small> </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" flat @click.native="dialog = false" @click="postNotes">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    uploadedFiles: [],
    uploadError: null,
    currentStatus: 0,
    uploadFieldName: 'documents',
    dialog: false,
    selectedFile: null,
    title: '',
    subject: '',
    description: '',
    courseNumber: '',
    professor: ''
  }),
  methods: {
    onFileSelected (event) {
      this.selectedFile = event.target.files[0]
    },
    postNotes () {
      var formData = new FormData()
      formData.append('title', this.title)
      formData.append('subject', this.subject)
      formData.append('description', this.description)
      formData.append('course_number', this.courseNumber)
      formData.append('professor', this.professor)
      formData.append('doc', this.selectedFile)
      var token = 'bearer ' + localStorage.token
      this.axios.post('http://titannotes.jonmouchou.com/api/v1/notes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': token
        }
      }).then(res => {
        console.log(res)
        console.log(localStorage.token)
      })
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
