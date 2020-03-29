<template>
  <div id="app">
    <Product />
    <Cart />
    <Info />
  </div>
</template>

<script>
import Product from './components/Product'
import Cart from './components/Cart'
import Info from './components/Info'

export default {
  name: 'App',
  components: {
    Product,
    Cart,
    Info
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
