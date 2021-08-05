<template>
  <div class="col blog">
    <div class="row content-center justify-center">
      <h3 class="text-deep-orange-8">Welcome to my blog!!!!</h3>
      <h6>
        “Where the Internet is about availability of information, blogging is
        about making information creation available to anyone.”-George Siemens
      </h6>
    </div>
    <Blog v-for="blog in blogs" :key="blog.id" :blog="blog" />
  </div>
</template>
<script>
import Blog from "@/components/Blog.vue";
import EventService from "@/services/EventService.js";
export default {
  components: {
    Blog,
  },
  data() {
    return {
      blogs: [],
    };
  },
  created() {
    EventService.getBlogs()
      .then((response) => {
        this.blogs = response.data;
      })
      .catch((error) => {
        console.log("There was an error:", error.response);
      });
  },
};
</script>
<style scoped>
h3,
h6 {
  font-family: "Avenir";
}
.blog {
  background-color: #fdf6f0;
  padding-left: 20%;
  padding-right: 20%;
  padding-top: 5%;
  padding-bottom: 5%;
}
</style>
