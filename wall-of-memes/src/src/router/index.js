import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Text from "../views/Text.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/text",
    name: "Text",
    component: Text,
  },
];

const router = new VueRouter({
  base: process.env.NODE_ENV === "production" ? "/wall-of-memes/" : "/",
  routes,
});

export default router;
