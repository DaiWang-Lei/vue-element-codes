import Vue from "vue";
import VueRouter from "vue-router";
import Input from "../components/eleComponents/Input.vue";
import Form from "../components/eleComponents/Form.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/input",
    name: "input",
    component: Input,
  },
  {
    path: "/form",
    name: "form",
    component: Form,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
