<template>
  <div id="q-app">
  <div class="row">
    <div class="col">
      <q-img
        src="/hi-1.png"
        class="q-mt-xl"
        style="height: 60px; max-width: 110px"
      ></q-img><h2 class="text-brown-10 text-h2 no-margin">I am Phan Hai <br> A Freelancer</h2>
      <p class="text-white text-h5 q-mt-xl">This website aims to <br> introduce me to everyone !</p>
      <router-link :to="{ name: 'about' }">
      <q-btn color="yellow-10" icon-right="send" label="More about me"></q-btn>
      </router-link>
      <br><br><br><br><br><br>
      <a href="https://www.facebook.com/htp163/"> • Facebook</a>  <a href="https://www.instagram.com/fan.highh/"> &nbsp;&nbsp; • Instagram</a><a href="https://twitter.com/Hi13132394">&nbsp;&nbsp; • Twitter</a>
    </div>
   <div class="col">
     <br><br><br><br><br><br><br><br><br>
      <q-img class="q-mt-xl"
      src="/me.png"
      style="height: 650px; width: 500px"
    ></q-img>  
  </div>
  </div>
</div>
</template>

<style>

.row {
  line-height: 0.5;
}
a{
  font-size:20px;
}
h2 {
  font-family: 'Noto Sans';
}
</style>

<script>

export default {
  name: 'PageHome'
}

</script>
