import apiAds from "../../helpers/apiAds";
import apiCarsImages from "../../helpers/apiCarsImages";

export default {
	namespaced: true,

	state: {
		ads: [],
	},
	mutations: {
		SET(state, payload) {
			state.ads = payload;
		},
		CREATE(state, payload) {
			state.ads.push(payload);
		},
		UPDATE(state, payload) {
			state.ads.find((item) => {
				if (item.id == payload.id) {
					Object.assign(item, payload);
				}
			});
		},
		DELETE(state, id) {
			state.ads = state.ads.filter((x) => x.id !== id);
		},
	},

	getters: {
		adsList(state) {
			if (state.ads) {
				return state.ads;
			}
		},
	},

	actions: {
		async fetchAds({ commit },dealerId) {
			// shows loading animation while getting the data
			// commit("SWITCH_LOADING");
			try {
				let data = await apiAds.getAds(dealerId);
				// fetch images url in firestore storage & adds each corresponding list of urls to the proper car in cars list.
				let dataUrl = await apiCarsImages.getCarsImages(data);
				data.forEach((one) => {
					let imagesUrl = dataUrl.find((x) => x.id == one.id).imagesUrl;
					one.carPicsUrls = imagesUrl;
				});
				commit("SET", data);
				return data;
			} catch (error) {
				throw error;
			} finally {
				// turns loading to false
				// commit("SWITCH_LOADING");
			}
		},
		async fetchVehicleById(_, vehicleId) {
			try {
				let vehicle = await apiVehicles.getVehicleById(vehicleId);
				let imagesUrl = await apiCarsImages.getImagesById(vehicle.pics);
				vehicle.carPicsUrls = imagesUrl;
				return vehicle;
			} catch (error) {
				throw error;
			} finally {
				// turns loading to false
				// commit("SWITCH_LOADING");
			}
		},
		async fetchDealers({ commit }) {
			// shows loading animation while getting the data
			// commit("SWITCH_LOADING");
			try {
				let data = await apiVehicles.getDealers();
				commit("SET_DEALERS", data);
				return data;
			} catch (error) {
				throw error;
			} finally {
				// turns loading to false
				// commit("SWITCH_LOADING");
			}
		},
		async fetchDealerById(_, dealerId) {
			try {
				let dealer = await apiVehicles.getDealerById(dealerId);
				return dealer;
			} catch (error) {
				throw error;
			} finally {
				// turns loading to false
				// commit("SWITCH_LOADING");
			}
		},
	},
};
