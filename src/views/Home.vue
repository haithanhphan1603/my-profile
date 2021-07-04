<template>
  <div id="q-app">
    <div class="row">
      <div class="col">
        <q-img src="/hi-1.png" style="height: 60px; max-width: 110px"></q-img>
        <h2 class="text-brown-10 text-h2 no-margin">
          I am Phan Hai <br />
          A Freelancer
        </h2>
        <p class="text-deep-orange-4 text-h5 q-mt-xl">
          This website aims to <br />
          introduce me to everyone !
        </p>
        <router-link :to="{ name: 'blog' }">
          <q-btn color="orange-4" icon-right="book" label="My Blog"></q-btn>
        </router-link>
        &nbsp;

        <router-link :to="{ name: 'about' }">
          <q-btn
            color="yellow-10"
            icon-right="person "
            label="More about me"
          ></q-btn>
        </router-link>
        <div class="q-mt-xl">
          <a href="https://www.facebook.com/htp163/"> • Facebook</a>
          <a href="https://www.instagram.com/fan.highh/">
            &nbsp;&nbsp; • Instagram</a
          ><a href="https://twitter.com/Hi13132394">&nbsp;&nbsp; • Twitter</a>
        </div>
      </div>

      <div class="col q-mt-xl">
        <br /><br />
        <q-img src="/me.png" style="height: 650px; width: 500px"></q-img>
      </div>
    </div>
  </div>
</template>

<style>
.row {
  line-height: 0.5;
}
a {
  font-size: 20px;
}
h2 {
  font-family: "Noto Sans";
}
</style>

<script>
export default {
  name: "PageHome",
};
</script>
