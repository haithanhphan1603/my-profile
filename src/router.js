import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Blog from "./views/BlogPage.vue";
import BlogView from "./views/BlogView.vue";
import About from "./views/About.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    {
      path: "/blogs/",
      name: "blog",
      component: Blog,
    },
    {
      path: "/blogs/:id",
      name: "blog-view",
      component: BlogView,
      props: true,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});
