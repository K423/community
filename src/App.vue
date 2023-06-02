<template>
  <div>
    <div class="mb-5">
      <Header></Header>
    </div>
    <div class="container">
      <router-view :key="key" />
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
  components: { Header, Footer },
  computed: {
    key() {
      return this.$route.path + Math.random();
    }
  }
}
</script>

<style scoped>
.container {
  min-height: 500px;
}
</style>
