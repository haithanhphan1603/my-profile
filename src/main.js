import Vue from "vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./quasar";
import { scroll } from "quasar";
import VueMeta from "vue-meta";
Vue.use(VueMeta);
const { setScrollPosition, getScrollTarget } = scroll;

Vue.config.productionTip = false;

const scrollTo = (elementId) => {
  const el = document.getElementById(elementId);
  const offset = el.offsetTop;
  const target = getScrollTarget(el);
  setScrollPosition(target, offset, 300);
};

const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});
Vue.prototype.$scrollTo = scrollTo;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
