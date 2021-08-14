<template>
  <div id="app ">
    <PageLoader />
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import PageLoader from "@/components/PageLoader.vue";
export default {
  components: {
    NavBar,
    Footer,
    PageLoader,
  },
  created() {
    document.title = "PH site";
  },
};
</script>
<style>
html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: black;
  font-weight: 600;
  background-color: transparent;
  font-size: 20px;
  text-decoration: none;
}
@media only screen and (max-width: 768px) {
  #app {
    width: 100%;
  }
}
</style>
