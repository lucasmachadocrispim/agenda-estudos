import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import TarefasView from "../views/TarefasView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/tarefas",
      component: TarefasView,
    },
  ],
});

export default router;