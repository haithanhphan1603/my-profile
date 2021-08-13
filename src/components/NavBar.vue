<template>
  <header class="header">
    <nav class="navbar">
      <a href="#" class="nav-logo">HaiP.</a>
      <ul class="nav-menu">
        <li class="nav-item">
          <router-link :to="{ name: 'home' }" class="nav-link"
            >HOME</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'about' }" class="nav-link"
            >ABOUT</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'blog' }" class="nav-link"
            >BLOG</router-link
          >
        </li>
      </ul>
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  </header>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  font-family: "Roboto", sans-serif;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
.header {
  border-bottom: 1px solid #e2e8f0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  padding-left: 10%;
  padding-right: 10%;
  top: 0;
  z-index: 100;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: fixed;
  width: 100%;
  background-color: white;
}
.hamburger {
  display: none;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #101010;
}
.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-item {
  margin-left: 2rem;
}

.nav-link {
  font-family: "Avenir LT Std";
  color: black;
  font-size: 17px;
  font-weight: lighter;
}

.nav-link:hover {
  color: #a3670d;
}

.nav-logo {
  font-size: 34px;
  font-weight: bold;
  font-family: "Lobster";
  color: #f5c6aa;
}
@media only screen and (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 5rem;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    border-radius: 10px;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-item {
    margin: 2.5rem 0;
  }

  .hamburger {
    display: block;
    cursor: pointer;
  }
  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>
<script>
export default {
  name: "NavBar",
};
</script>
