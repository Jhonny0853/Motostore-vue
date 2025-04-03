import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../pages/Login.vue";
import Home from "../pages/home.vue";
import RecoverPassword from "../pages/RecoverPassword.vue";
import LegalNotice from "../pages/LegalNotice.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/recoverpassword",
      name: "recoverpassword",
      component: RecoverPassword,
    },
    {
      path: "/legalnotice",
      name: "legalnotice",
      component: LegalNotice,
    },
  ],
});

export default router;
