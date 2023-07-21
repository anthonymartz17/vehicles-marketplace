import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Filters from "vue2-filters";
import Vuelidate from "vuelidate";
import VueGeolocation from "vue-browser-geolocation";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
	load: {
		key: "AIzaSyDzix5mhOB8cqOPPK2nN8E3W_ics7Y76Aw",
	},
}),
	Vue.use(VueGeolocation);
Vue.use(Vuelidate);
Vue.use(Vue2Filters);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
