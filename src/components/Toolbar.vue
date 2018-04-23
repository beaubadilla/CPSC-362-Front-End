<template>
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      v-model="drawer"
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="item.heading"
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              :to="child.href"
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :to="item.href" :key="item.text">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="blue darken-3"
      dark
      app
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      fixed
    >
      <v-toolbar-title style="width: 200px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Titan Notes</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">
          <ais-index app-id='46REFXDXXW'
           api-key='053b6f707307dc7985393b5c0eec6cbd'
           index-name="contacts">

           <ais-input placeholder="Search contacts..."></ais-input>

           <ais-results></ais-results>

</ais-index>
        <v-btn flat>
          <v-icon>search</v-icon> Search
        </v-btn>
        <fileUpload></fileUpload>
      </div>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import FileUpload from './FileUpload.vue'
export default {
  components: {
    fileUpload: FileUpload
  },
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { icon: 'lightbulb_outline', text: 'Personal Notes' },
      { icon: 'touch_app', text: 'Reminders' },
      { divider: true },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Notes',
        model: true,
        children: [
          { href: '/examplecard', text: 'Software Engineering' },
          { href: '/NotesExample', text: 'Random notes' },
          { icon: 'add', text: 'Create label' }
        ]
      },
      { divider: true },
      { icon: 'settings', text: 'Settings' },
      { href: '/logout', icon: 'lock', text: 'Log out' }
    ],
    selectedFile: null
  }),
  props: {
    source: String
  }
}
</script>
