<template>
  <div id="q-app">
    <div class="row justify-evenly content-center " id="home">
      <AvatarCard class="col-2" />
      <div class="col-4">
        <q-img src="/hello.png" style="height: 74px; max-width: 110px"></q-img>
        <h2 class="text-brown-10 text-h2 no-margin">
          Welcome to my website <br />
        </h2>
        <h6 class="text-black text-h6 q-mt-xl">
          I'm a freelance developer. Check out my work and feel free to get in
          touch with me.
        </h6>
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
</template>

<style scoped>
@font-face {
  font-family: Source Code Pro;
  src: url(/Users/fanhigh/Downloads/Source_Code_Pro/SourceCodePro-Light.ttf);
}
@font-face {
  font-family: Poppins;
  src: url(/Users/fanhigh/Downloads/Poppins/Poppins-SemiBold.ttf);
}
#home {
  height: 820px;
  background-image: url("/background.png");
  background-repeat: no-repeat;
  background-size: cover;
}
a {
  font-size: 20px;
}
h2 {
  font-family: "Noto Sans";
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
.q-pd-md {
  text-align: center;
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
