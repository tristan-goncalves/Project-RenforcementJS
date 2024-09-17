<template>
  <Header></Header>
  <img alt="Vue logo" src="./assets/logo.png">
  <Button></Button>
  <Footer></Footer>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Button from './components/Button.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Button
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
