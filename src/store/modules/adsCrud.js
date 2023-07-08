import apiAds from "../../helpers/apiAds";
import apiCarsImages from "../../helpers/apiCarsImages";
import auth from "./auth";
export default {
	namespaced: true,

	state: {
		ads: [],
		vehiclePost: {},
		vehicleImagesDetails: [],
	},
	mutations: {
		UPDATE_VEHICLEPOST(state, newValue) {
			state.vehiclePost = { ...state.vehiclePost, ...newValue };
		},
		UPDATE_VEHICLEPOST_IMAGES(state, newValue) {
			state.vehicleImagesDetails = newValue;
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
				let vehicle = await apiAds.getVehicleById(vehicleId);
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
				vehicleData.accesories = vehicleData.accesories.split(",");

				const createdPost = await apiAds.createAd(vehicleData);

				const uploadedImgPaths = await apiAds.uploadImages({
					vehicleImages,
					vehicleId: createdPost.id,
				});

				// creates array pics and spread list of img references
				vehicleData.pics = [...uploadedImgPaths];
				const updatedAd = await apiAds.updateAd({
					vehicleData,
					vehicleId: createdPost.id,
				});
			} catch (error) {
				throw error;
			}
		},
		// async uploadImages(_, data) {
		// 	try {
		// 		const response = await apiAds.uploadImages(data);
		// 		console.log(response, "images uploaded, state");
		// 	} catch (error) {
		// 		throw error;
		// 	}
		// },
		async fetchImageUrlListById(_, imagePaths) {
			try {
				const imgUrlList = await apiAds.getImagesById(imagePaths);
				return imgUrlList;
			} catch (error) {
				throw error;
			}
		},
		async updateAd(_, { vehicleData, vehicleImages, vehicleId }) {
			try {
				let keptImages = vehicleImages.filter((img) =>
					img.dataURL.includes(vehicleId)
				);
				let newImages = vehicleImages.filter(
					(img) => !img.dataURL.includes(vehicleId)
				);
				let imagesToDelete = [];
				let immagesToKeep = [];

				vehicleData.pics.forEach((path) => {
					const startIndex = path.indexOf("/", path.indexOf("/") + 1) + 1;
					const endIndex = path.lastIndexOf(".");
					const extractedString = path.substring(startIndex, endIndex);

					const found = keptImages.find((url) =>
						url.dataURL.includes(extractedString)
					);
					found ? immagesToKeep.push(path) : imagesToDelete.push(path);
				});

				await apiAds.deleteImages(imagesToDelete);
				const uploadedImgPaths = await apiAds.uploadImages({
					vehicleImages: newImages,
					vehicleId
				});
				//creates array pics and spread list of img paths
				vehicleData.pics = [...immagesToKeep, ...uploadedImgPaths];

				//make accessories an array
				vehicleData.accesories = vehicleData.accesories.split(",");
				const response = await apiAds.updateAd({ vehicleData, vehicleId });
				console.log(response, "images uploaded, state");
			} catch (error) {
				throw error;
			}
		},
		async deleteAd({ commit }, vehicleId) {
			try {
				//delete images firebase storage
				let vehicle = await apiAds.getVehicleById(vehicleId);
				await apiAds.deleteImages(vehicle.pics);
				//End delete images firebase storage
				//delete data firebase database
				const response = await apiAds.deleteAd(vehicleId);
				commit("DELETE", vehicleId);
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
		updateVehiclePostImages({ commit }, newValue) {
			commit("UPDATE_VEHICLEPOST_IMAGES", newValue);
		},
		clearVehiclePost({ commit }, payload) {
			commit("CLEAR_VEHICLEPOST", payload);
		},
	},
	getters: {
		vehiclePostImages: (state) => state.vehiclePostImages,

		adsList(state) {
			if (state.ads) {
				return state.ads;
			}
		},
	},
};
