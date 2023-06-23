import apiProfile from "../../helpers/apiProfile";
import apiCarsImages from "../../helpers/apiCarsImages";

export default {
	namespaced: true,

	state: {
		profile: {},
	},
	mutations: {
		SET(state, payload) {
			state.profile = payload;
		},
		// CREATE(state, payload) {
		// 	state.ads.push(payload);
		// },
		UPDATE_PROFILE(state, payload) {
			Object.assign(state.profile, payload);
		},
		// DELETE(state, id) {
		// 	state.user = {}
		// },
	},

	// getters: {
	// 	adsList(state) {
	// 		if (state.ads) {
	// 			return state.ads;
	// 		}
	// 	},
	// },

	actions: {
		async fetchProfile({ commit }) {
			// shows loading animation while getting the data
			// commit("SWITCH_LOADING");
			try {
				let data = await apiProfile.getProfile();
				// fetch images url in firestore storage & adds each corresponding list of urls to the proper car in cars list.
				// let dataUrl = await apiCarsImages.getCarsImages(data);
				// data.forEach((one) => {
				// 	let imagesUrl = dataUrl.find((x) => x.id == one.id).imagesUrl;
				// 	one.carPicsUrls = imagesUrl;
				// });
				commit("SET", data);
				return data;
			} catch (error) {
				throw error;
			} finally {
				// turns loading to false
				// commit("SWITCH_LOADING");
			}
		},

		async fetchProfileById(_, dealerId) {
			try {
				let profile = await apiProfile.getProfileById(dealerId);
				// let imagesUrl = await apiCarsImages.getImagesById(vehicle.pics);
				// vehicle.carPicsUrls = imagesUrl;
				return profile;
			} catch (error) {
				throw error;
			} finally {
				// turns loading to false
				// commit("SWITCH_LOADING");
			}
		},
		async createProfile(_, data) {
			try {
				await apiProfile.createProfile(data);
			} catch (error) {
				throw error;
			} finally {
				// turns loading to false
				// commit("SWITCH_LOADING");
			}
		},
		async update({ commit }, profileData) {
			try {
				let updatedProfile = await apiProfile.updateProfile(profileData);
				commit("UPDATE_PROFILE", updatedProfile);
				// let imagesUrl = await apiCarsImages.getImagesById(vehicle.pics);
				// vehicle.carPicsUrls = imagesUrl;

				return updatedProfile;
			} catch (error) {
				throw error;
			} finally {
				// turns loading to false
				// commit("SWITCH_LOADING");
			}
		},
	},
};
