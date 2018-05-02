<template>
  <v-dialog v-model="dialog" persistent max-width="500px">
    <v-btn flat dark slot="activator">
      <v-icon>file_upload</v-icon> Upload </v-btn>
    <v-card ref="form">
      <v-card-title> <h1>File Upload</h1> </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field ref="title" label="Title" :rules="[() => title.length > 0 || 'This field is required']" v-model="title" required autofocus></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field ref="subject" hint="Max of 4 characters" :rules="[(v) => v.length <=4 || 'Max 4 characters', () => subject.length > 0 || 'This field is required']" label="Subject" v-model="subject" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field ref="description" :rules="[() => description.length > 0 || 'This field is required']" label="Description" required v-model="description"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field ref="courseNumber" hint="Max of 5 characters" max="5" :rules="[(v) => v.length <=5 || 'Max 5 characters', () => courseNumber.length > 0 || 'This field is required']" label="Course Number" v-model="courseNumber" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field ref="professor" label="Professor" v-model="professor" :rules="[() => professor.length > 0 || 'This field is required']" required></v-text-field>
            </v-flex>
            <div class="container">
              <form enctype="multipart/form-data" novalidate v-if="isInitial">
                <div class="dropbox">
                <input type="file" @change="onFileSelected" class="input-file" >
                <p v-if="isInitial">
                  Drag your file here to begin<br> or click to browse
                </p>
                </div>
              </form>
              <div v-if="isSuccess">
                <h3>Uploaded 1 file successfully.</h3>
                <p>
                  <a href="javascript:void(0)" @click="reset()">Upload again</a>
                </p>
              </div>
              <div v-if="isFailed">
                <h2>Uploaded failed.</h2>
                <p>
                  <a href="javascript:void(0)" @click="reset()">Try again</a>
                </p>
                <pre>{{ uploadError }}</pre>
              </div>
            </div>
          </v-layout>
        </v-container> <small>*indicates required field</small> </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" flat @click="postNotes">Upload</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
var STATUS_INITIAL = 0
var STATUS_SUCCESS = 2
var STATUS_FAILED = 3

export default {
  data: () => ({
    selectedFile: null,
    uploadError: null,
    currentStatus: 0,
    dialog: false,
    title: '',
    subject: '',
    description: '',
    courseNumber: '',
    professor: '',
    fileName: '',
    file: '',
    formHasErrors: false,
    fileURL: ''
  }),
  computed: {
    isInitial () {
      return this.currentStatus === STATUS_INITIAL
    },
    isSuccess () {
      return this.currentStatus === STATUS_SUCCESS
    },
    isFailed () {
      return this.currentStatus === STATUS_FAILED
    },
    form () {
      return {
        professor: this.professor,
        title: this.title,
        subject: this.subject,
        description: this.description,
        courseNumber: this.courseNumber
      }
    }
  },
  methods: {
    reset () {
      this.currentStatus = STATUS_INITIAL
      this.selectedFile = null
      this.uploadError = null
      this.formHasErrors = false
    },
    onFileSelected (event) {
      this.selectedFile = event.target.files[0]
      this.currentStatus = STATUS_SUCCESS
    },
    postNotes () {
      this.formHasErrors = false

      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) {
          this.formHasErrors = true
        }
        this.$refs[f].validate(true)
      })

      if (!this.formHasErrors) {
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
          this.reset()
          this.dialog = false
          var titleForURL = res.data.data.attributes.title
          this.$router.push({name: 'View', params: {id: titleForURL}})
        })
      }
    }
  },
  mounted () {
    this.reset()
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
