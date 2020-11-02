import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  base: process.env.NODE_ENV === "production" ? "/wall-of-memes/" : "/",
  routes,
});

export default router;
