import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Header from './components/Header'
import Footer from './components/Footer'

Vue.component('Header', Header)
Vue.component('Footer', Footer)

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount("#app")