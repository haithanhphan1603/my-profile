<template>
  <div id="navbar" class="row justify-center nav">
    <div class="col-8">
      <router-link class="brand" :to="{ name: 'home' }">Hai.P </router-link>
    </div>
    <div class="router-link">
      <router-link class="col-2" :to="{ name: 'home' }">HOME</router-link>
      <router-link class="col-2 q-ml-lg" :to="{ name: 'about' }"
        >ABOUT</router-link
      >
      <router-link class="col-2 q-ml-lg" :to="{ name: 'blog' }"
        >BLOG</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
.nav .brand {
  font-size: 34px;
  font-weight: bold;
  font-family: "Lobster";
  color: #f5c6aa;
}
.nav {
  background-color: white;

  display: flex;
  align-items: center;
  height: 100px;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: #835151;
  text-decoration: none;
}
p {
  font-family: "Avenir LT Std";
  font-size: 17px;
}
a {
  font-family: "Avenir LT Std";
  color: black;
  font-size: 17px;
  font-weight: lighter;
}
a:hover {
  color: #a3670d;
}
</style>
<script></script>
