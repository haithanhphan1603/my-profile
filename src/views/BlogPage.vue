<template>
  <div>
    <h3 class="text-deep-orange-8">Welcome to my blog!!!!</h3>
    <h6>
      “Where the Internet is about availability of information, blogging is
      about making information creation available to anyone.”-George Siemens
    </h6>
    <Blog />
  </div>
</template>
<script>
import Blog from "@/components/Blog.vue";

export default {
  components: {
    Blog,
  },
};
</script>
<style scoped>
h3,
h6 {
  font-family: "Kalam";
}
</style>
