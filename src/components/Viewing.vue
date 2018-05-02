<template>
    <div>
        <div v-if="note">
            <h2>{{note.title}}</h2>
            <h2>{{note.description}}</h2>
            <h2>{{note.subject}}</h2>
            <h2>{{note.course_number}}</h2>
            <h2>{{note.professor}}</h2>
            <iframe id="viewer" :src="'https://docs.google.com/viewer?url='+ note.link + '&embedded=true'" style="width:600px; height:500px;" frameborder="0"></iframe>
        </div>
        <div v-else>
          <h1>Whoops, No note found</h1>
        </div>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      note: null
    }
  },
  methods: {
    createSRC () {
      // User selects note from search function. Grab ID from selected note. Append. Change src attribute

      // Grab ID
      // // docID =
      this.srcURL = this.begURL + this.docID + this.endURL

      var newSRC = document.getElementById('viewer')
      newSRC.src = this.srcURL
    }
  },
  created: function () {
    let self = this
    var token = 'bearer ' + localStorage.token
    this.axios.get('https://titannotes.jonmouchou.com/api/v1/notes/' + this.$route.params.id, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': token
      }
    })
      .then(function (data) {
        console.log(data.data)
        self.note = data.data.attributes
      })
  },
  props: [
    'documentURL'
  ]
}
</script>
