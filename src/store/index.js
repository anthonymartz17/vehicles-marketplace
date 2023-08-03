import Vue from "vue";
import Vuex from "vuex";
import vehicles from "./modules/vehicles";
import filterOptions from "./modules/filterOptions";
import auth from "./modules/auth";
import adsCrud from "./modules/adsCrud";
import profile from "./modules/profile";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		vehicles,
		filterOptions,
		auth,
		adsCrud,
		profile,
	},
	state: {
		// Global
		modalToggler: false,
		optionsCardToggler: false,
	},
});
