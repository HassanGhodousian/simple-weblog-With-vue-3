import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import IndexUser from "../views/user/IndexUser.vue";
import TemplateUser from "../views/user/TemplateUser.vue";
import ShowUesr from "../views/user/ShowUesr.vue";

import IndexPost from "../views/post/IndexPost.vue";
import TemplatePost from "../views/post/TemplatePost.vue";
import ShowPost from "../views/post/ShowPost.vue";
import CreatePost from "../views/post/CreatePost.vue";
import EditPost from "../views/post/EditPost.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/users",
    name: "users",
    component: TemplateUser,
    children: [
      {
        path: "",
        name: "users",
        component: IndexUser,
      },
      {
        path: ":id",
        name: "userid",
        component: ShowUesr,
      },
    ],
  },
  {
    path: "/posts",
    name: "posts",
    component: TemplatePost,
    children: [
      {
        path: "",
        name: "posts",
        component: IndexPost,
      },
      {
        path: ":id",
        name: "postid",
        component: ShowPost,
      },
      {
        path: "create",
        name: "create",
        component: CreatePost,
      },
      {
        path: "edit/:id",
        name: "edit",
        component: EditPost,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
