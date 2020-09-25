import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../views/Index.vue";
import About from "../views/About.vue";
import ManagePost from "../views/ManagePost.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
  {
    path: "/create-post",
    name: "Create Post",
    component: ManagePost,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
