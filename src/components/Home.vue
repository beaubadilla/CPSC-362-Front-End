<template>
  <v-layout column>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex v-bind="{ ['xs${card.flex}']: true }" v-for="item in list.data" :key="item.id">
          <v-card>
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">{{ item.attributes.title }} </div>
                      <span class="grey--text">Professor: {{ item.attributes.professor
 }} <br> Subject: {{ item.attributes.subject }}</span>
                    </div>
                  </v-card-title>
                  <v-card-text> {{ item.attributes.description }} </v-card-text>
                  <v-card-actions>
                    <router-link tag="button" :to="{ name: 'View', params: {id: item.id}}"><v-btn color="info">View Notes</v-btn></router-link>
                  </v-card-actions>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  data: function () {
    return {
      list: []
    }
  },
  created () {
    let self = this
    var token = 'bearer ' + localStorage.token
    this.axios.get('https://titannotes.jonmouchou.com/api/v1/notes/', {
      headers: {
        'Authorization': token
      }
    })
      .then(function (data) {
        self.list = data.data
        console.log(self.list)
      })
  }
}
</script>
