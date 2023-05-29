<template>
  <div>
    <div class="mb-5">
      <Header></Header>
    </div>
    <div class="container">
      <router-view />
    </div>
    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';

export default {
  name: "App",
  components: { Header, Footer }
}
</script>

<style scoped>
.container{
  min-height: 500px;
}
</style>
