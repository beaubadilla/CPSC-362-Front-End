/* eslint-disable */
<template>
  <div>
    <v-btn v-on:click="addCategory" color="orange lighten-1" dark>Create</v-btn>
    <v-text-field v-model="categoryName"></v-text-field >
  </div>
</template>

<script>
import Toolbar from './Toolbar'
export default {
  data () {
    return {
      categoryName: '   Untitled category'
    }
  },
  components: {
    'Toolbar': Toolbar
  },
  method: {
    addCategory: function () {
      Toolbar.items.children.push({href: '/$categoryName', text: 'categoryName'})
      console.log('I added a new category ')
    }
  }
}
</script>
