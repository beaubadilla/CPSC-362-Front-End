/* eslint-disable */
<template>
  <div>
    <v-btn v-on:click="addCategory" color="orange lighting-1" dark>Create</v-btn>
    <v-text-field v-model="categoryName"></v-text-field >
  </div>
</template>

<script>
import Toolbar from './Toolbar'
import index from '../router/index'
export default {
  data () {
    return {
      categoryName: '   Untitled category'
    }
  },
  components: {
    'Toolbar': Toolbar,
    'index': index
  },
  method: {
    addCategory: function () {
      Toolbar.items.children.push({href: '/$categoryName', text: 'categoryName'})
      index.routes.children.push({path: '/$categoryName', name: '/$categoryName', component: '/$categoryName'})
      console.log('I added a new category ')
    }
  }
}
</script>
