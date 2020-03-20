<template>
  <div id="app">
    <TweetLayout/>
  </div>
</template>

<script>
import TweetLayout from "@/views/TweetLayout";
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'

export default {
  name: 'App',
  components: {
    TweetLayout,
  }
}
</script>

<style>

</style>
