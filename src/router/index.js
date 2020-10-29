import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home"
import News from "@/views/News";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",  
    component : Home,
  },  
  {
    path : "/news",
    name : "News",    
    component : News
  },  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
