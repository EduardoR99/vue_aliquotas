<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <Navbar/>
  <RouterView />
  <Footer/>
</template>

<style>

*{
  outline: none;
  box-sizing: border-box;
}
body{
  margin: 0;
}
#app{
  background-color: #dee2e6;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 0;
}


</style>
