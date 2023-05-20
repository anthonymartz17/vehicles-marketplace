import ApiBuyer from "../helpers/apiBuyer";

export const state = {
	cars: [],
	dealers: [],
};
export const mutations = {
	SETCARS(state, payload) {
		state.cars = payload;
	},

	SETDEALERS(state, payload) {
		state.dealers = payload;
	},

	// SWITCH_LOADING(state) {
	// 	state.isLoading = !state.isLoading;
	// },
};

// export const getters = {
// 	agenciesList(state) {
// 		if (state.agencies) {
// 			return state.agencies;
// 		}
// 	},
// };

export const actions = {
	async fetchCars({ commit ,state}) {
		// shows loading animation while getting the data
		// commit("SWITCH_LOADING");
		try {
			let data = await ApiBuyer.getCars();
      commit("SETCARS", data);
      console.log(state.cars,'from state')
		} catch (error) {
			throw error;
		} finally {
			// turns loading to false
			// commit("SWITCH_LOADING");
		}
	},

	async create({ commit }, { agencyData, countryName, userName }) {
		try {
			let data = await ApiAgency.createAgency(agencyData);
			data.country_name = countryName;
			data.user_name = userName;
			commit("CREATE", data);
			return data;
		} catch (error) {
			throw error;
		}
	},

	async fetchById(_, agencyId) {
		// app status: loading
		try {
			let data = await ApiAgency.getAgencyById(agencyId);
			return data;
		} catch (error) {
			throw error;
		}
		// app status: ready
	},

	async update({ commit }, { agencyData, countryName, userName }) {
		// app status:  loading
		try {
			let data = await ApiAgency.updateAgency(agencyData);
			data.country_name = countryName;
			data.user_name = userName;
			commit("UPDATE", data);
			// app status: ready
		} catch (error) {
			throw error;
		}
	},
	async delete({ commit }, id) {
		try {
			let data = await ApiAgency.deleteAgency(id);
			commit("DELETE", id);
			return data;
		} catch (error) {
			throw error;
		}
	},
};
