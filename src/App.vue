<template>
  <div id="app">
    <NavBar />
    <router-view class="q-mt-xl" />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>
<style>
html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  background-image: url("/background1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

#app {
  box-sizing: border-box;
  width: 800px;

  margin: 0 auto;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
a {
  color: #665007;
  font-weight: 600;
  background-color: transparent;
  font-size: 20px;
  text-decoration: none;
}
a:hover {
  color: #a3670d;
}
</style>
