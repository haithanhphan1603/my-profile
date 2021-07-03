<template>
  <div id="nav" class="nav">
    <router-link to="/" class="brand">Hai corp.</router-link>
    <div class="router-link">
      <router-link :to="{ name: 'home' }">Home</router-link> |
      <router-link :to="{ name: 'about' }">About</router-link> |
      <router-link :to="{ name: 'blog' }">Blog</router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav > .brand {
  font-family: 'Lobster';
  font-weight: 700;
  font-size: 2.5em;
  color: #443a0e;
  text-decoration: none;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: #443a0e;
  text-decoration: none;
}
.nav > .router-link {
  font-size: 'Lobster';
  color: #221c01;
  font-weight:500;
  font-size: 1.4em;
  text-decoration: none;
}
</style>
