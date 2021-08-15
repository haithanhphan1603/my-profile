<template>
  <div id="q-app">
    <div class="row justify-center items-center" id="home">
      <AvatarCard class="col-sm-10 col-md-4" id="card" />
      <div class="col-sm-6 col-md-4 col-auto " id="text-card">
        <q-img
          src="/hello.png"
          style="height: 74px; max-width: 110px"
          class="img"
        ></q-img>
        <h2 class="text-brown-10 text-h2 no-margin">
          Welcome to my website <br />
        </h2>
        <h6 class="text-black text-h6 q-mt-xl">
          I'm a freelance developer. Check out my work and feel free to get in
          touch with me.
        </h6>
        <div class="col-sm-12">
          <router-link :to="{ name: 'about' }"
            ><q-btn color="pink-2" icon="person" label="About Me"></q-btn
          ></router-link>
          <router-link :to="{ name: 'blog' }"
            ><q-btn
              class="q-ml-sm"
              color="deep-orange-3"
              icon="book"
              label="My Blog"
            ></q-btn
          ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: Lobster;
  src: url(../assets/font/Lobster/Lobster-Regular.ttf);
}
@font-face {
  font-family: Avenir LT Std;
  src: url(../assets/font/Avenir/AvenirLTStd-Book.otf);
}
@font-face {
  font-family: Source Code Pro;
  src: url(../assets/font/SourceCodePro/SourceCodePro-Light.ttf);
}
@font-face {
  font-family: Poppins;
  src: url(../assets/font/Poppins/Poppins-SemiBold.ttf);
}
#home {
  height: fit-content;
  background-image: url("/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 10%;
  padding-bottom: 10%;
}
a {
  font-size: 20px;
}
h2 {
  font-family: "Poppins";
}

h3 {
  font-family: "Poppins";
  font-size: 33px;
  line-height: 33px;
  font-weight: 900;
}

h6 {
  font-size: 20px;
  font-family: "Source Code Pro";
  line-height: 40px;
  font-weight: 520;
}
@media only screen and (max-width: 768px) {
  #home {
    background-image: url("/screen-1.jpeg");
    margin-left: 10%;
    margin-top: 20%;
    margin-right: 10%;
  }
  .img {
    display: none;
  }
  #text-card {
    margin-top: 10%;
  }
}
</style>

<script>
import AvatarCard from "@/components/AvatarCard.vue";

export default {
  components: {
    AvatarCard,
  },
};
</script>
