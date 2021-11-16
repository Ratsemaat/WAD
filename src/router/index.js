import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
    {
    path: "/",
    name: "Home",
    component: Home,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
];
const router =  new VueRouter({
    mode: "history",
    routes,
});

export default router;