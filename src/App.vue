<template>
  <div id="app col-lg ">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>
<style>
html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  box-sizing: border-box;
  margin: 0 auto;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
a {
  color: black;
  font-weight: 600;
  background-color: transparent;
  font-size: 20px;
  text-decoration: none;
}
a:hover {
  color: #a3670d;
}
</style>
