<template>
  <div id="app">
    <TweetLayout/>
  </div>
</template>

<script>
// import domtoimage from 'dom-to-image'
// import FileSaver from 'file-saver'
// import Vue from 'vue'
import TweetLayout from "@/views/TweetLayout";
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'

export default {
  name: 'App',
  components: {
    TweetLayout,
  },
  mounted() {

  }
}
</script>

<style>

</style>