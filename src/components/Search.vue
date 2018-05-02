<template>
  <v-container fluid grid-list-lg>
    <ais-index
        app-id='46REFXDXXW'
        api-key='053b6f707307dc7985393b5c0eec6cbd'
        index-name='notes'>
        <v-layout row wrap>
          <v-flex xs12>
            <h2> Search </h2>
          </v-flex>
          <v-flex class="searchBar">
            <ais-search-box placeholder="Search notes..." id="SearchBar"></ais-search-box>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <ais-results>
              <template slot-scope="{ result }">
                <v-flex xs12>
                  <v-card>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline">{{ result.title }} </div>
                          <span class="grey--text">Professor: {{ result.professor
    }} <br> Subject: {{ result.subject }} {{ result.course_number }}</span>
                        </div>
                      </v-card-title>
                    <v-card-text>
                      <p>
                        {{ result.description }}
                      </p>
                    </v-card-text>
                    <v-card-actions>
                      <router-link tag="button" :to="{ name: 'View', params: {id: result.id}}"><v-btn color="info">View Notes</v-btn></router-link>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </template>
            </ais-results>
          </v-flex>
        </v-layout>
    </ais-index>
  </v-container>
</template>

<style>
.input-group {
  height: 100px;
}

.searchBar {
  position: relative;
}

.ais-input {
  width: 100%;
  outline: none;
  font-size: 15px;
  padding: 7px;
  box-sizing: border-box;
  border: 2px solid lightgrey;
  border-radius: 2px;
  margin: 20px 0;
  padding-left: 40px;
  margin-right: 5%;
}

.ais-search-box__submit,
.ais-clear {
  background: none;
  border: none;
  position: absolute;
  z-index: 30;
  top: 40px;
}

.ais-search-box__submit {
  left: 20px;
}

.ais-clear {
  right: 20px;
}

.ais-clear--disabled {
  display: none;
}

</style>
