import apiAds from "../../helpers/apiAds";
import apiCarsImages from "../../helpers/apiCarsImages";
import auth from "./auth";
export default {
	namespaced: true,

	state: {
		ads: [],
		vehiclePost: {},
	},
	mutations: {
		UPDATE_VEHICLEPOST(state, newValue) {
			state.vehiclePost = { ...state.vehiclePost, ...newValue };
		},
		CLEAR_VEHICLEPOST(state, payload) {
			state.vehiclePost = payload;
		},
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
		async fetchAds({ commit }, dealerId) {
			try {
				let data = await apiAds.getAds(dealerId);
				// fetch images url in firestore storage & adds each corresponding list of urls to the proper car in cars list.
				let dataUrl = await apiCarsImages.getCarsImages(data);
				console.log(dataUrl);

				data.forEach((one) => {
					let imagesUrl = dataUrl.find((x) => x.id == one.id).imagesUrl;
					one.carPicsUrls = imagesUrl;
				});
				commit("SET", data);
				return data;
			} catch (error) {
				throw error;
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
			}
		},

		async createAd(_, { vehicleData, vehicleImages }) {
			try {
				vehicleData.dealerId = auth.state.user.dealerId;
				vehicleData.accessories = vehicleData.accessories.split(",");

				const createdPost = await apiAds.createAd(vehicleData);
				const uploadedImgPaths = await apiAds.uploadImages({
					vehicleImages,
					vehicleId: createdPost.id,
				});

				//creates array pics and spread list of img references

				vehicleData.pics = [...uploadedImgPaths];
				console.log(vehicleData.pics, "antes de actualizar");
				const updateAd = await apiAds.updateAd({
					vehicleData,
					vehicleId: createdPost.id,
				});
			} catch (error) {
				throw error;
			}
		},
		async uploadImages(_, data) {
			try {
				const response = await apiAds.uploadImages(data);
				console.log(response, "images uploaded, state");
			} catch (error) {
				throw error;
			}
		},
		async updateAd(_, data) {
			try {
				const response = await apiAds.updateAd(data);
				console.log(response, "images uploaded, state");
			} catch (error) {
				throw error;
			}
		},
		async fetchDealers({ commit }) {
			try {
				let data = await apiVehicles.getDealers();
				commit("SET_DEALERS", data);
				return data;
			} catch (error) {
				throw error;
			}
		},
		async fetchDealerById(_, dealerId) {
			try {
				let dealer = await apiVehicles.getDealerById(dealerId);
				return dealer;
			} catch (error) {
				throw error;
			}
		},

		updateVehiclePost({ commit }, newValue) {
			commit("UPDATE_VEHICLEPOST", newValue);
		},
		clearVehiclePost({ commit }, payload) {
			commit("CLEAR_VEHICLEPOST", payload);
		},
	},
};
