<template>
  <div id="q-app">
    <div class="row" id="home">
      <AvatarCard />
      <div class="col-6 q-mt-xl">
        <q-img src="/hello.png" style="height: 74px; max-width: 110px"></q-img>
        <h2 class="text-brown-10 text-h2 no-margin">
          Welcome to my kingdom <br />
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
#home {
  height: 820px;
  padding-left: 300px;
  padding-right: 200px;
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

h4 {
  font-weight: 100;
}
h3 {
  font-family: "Poppins";
  font-size: 33px;
  line-height: 33px;
  font-weight: 900;
}
h5 {
  font-size: 30px;
  font-family: "Source Code Pro";
  line-height: 0px;
  letter-spacing: 3px;
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
