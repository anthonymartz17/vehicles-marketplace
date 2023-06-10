import apiVehicles from "../../helpers/apiVehicles";
import apiCarsImages from "../../helpers/apiCarsImages";

export default {
	namespaced: true,

	state: {
		vehicles: [],
		dealers: [],
		filters: {
			make: "",
			models: "",
			priceFrom: 0,
			priceTo: 0,
			yearFrom: 0,
			yearTo: 0,
			carType: "",
			carCondition: "",
			fuel: "",
			transmission: "",
			driveTrain: "",
			mileage: "",
			engine: "",
			color: "",
			dealerId:"",
		},
		mobileMenuToggler: false,
	},
	mutations: {
		SET_VEHICLES(state, payload) {
			state.vehicles = payload;
		},
		SET_DEALERS(state, payload) {
			state.dealers = payload;
		},

		UPDATE_FILTERS(state, payload) {
			state.filters = { ...state.filters, ...payload };
		},
		FILTER_VEHICLES(state) {
			let results = state.vehicles;
	   console.log('new filters empty',state.filters)
			if (
				state.filters.carCondition !== "" &&
				state.filters.carCondition !== "New/Used"
			) {
				results = results.filter(
					(one) => one.carCondition === state.filters.carCondition
				);
			}
		
			if (state.filters.fuel !== "" && state.filters.fuel !== "All") {
				results = results.filter((one) => one.fuel === state.filters.fuel);
			}
			
			if (state.filters.dealerId !== "" && state.filters.dealerId !== "All") {
				results = results.filter(
					(one) => one.dealerId === state.filters.dealerId
				);
				console.log(results,'jdealers')
			}
			if (
				state.filters.transmission !== "" &&
				state.filters.transmission !== "All"
			) {
				results = results.filter(
					(one) => one.transmission === state.filters.transmission
				);
			}
			
			if (
				state.filters.driveTrain !== "" &&
				state.filters.driveTrain !== "All"
			) {
				results = results.filter(
					(one) => one.driveTrain === state.filters.driveTrain
				);
			}
			if (state.filters.engine !== "" && state.filters.engine !== "All") {
				results = results.filter((one) => {
					if (
						one.engine != undefined &&
						one.engine
							.toLowerCase()
							.includes(state.filters.engine.toLowerCase())
					) {
						return one;
					}
				});
			}
			if (state.filters.mileage !== "" && state.filters.mileage !== "All") {
				let reg = /\d+/g;
				// finds the numbers in a string and returns them in an array.
				let nums = state.filters.mileage.match(reg);
				// setting numbers at position zero and one to min and max respectively and converting them to thousands.
				let min = +nums[0] * 1000;
				let max = +nums[1] * 1000;

				results = results.filter((one) => {
					let miles = +one.miles.replace(",", "");

					if (max) {
						return miles > min && miles < max;
					} else {
						return miles > min;
					}
				});
			}
			if (state.filters.color !== "" && state.filters.color !== "All") {
				results = results.filter((one) => one.colorEx === state.filters.color);
			}
			if (state.filters.carType !== "") {
				results = results.filter((one) =>
					one.carType
						.toLowerCase()
						.includes(state.filters.carType.toLowerCase().trim())
				);

				// state.inputTextUser = state.filters.carType;
			}
			if (state.filters.priceFrom != 0) {
				results = results.filter((one) => one.price >= state.filters.priceFrom);
			
			}
			if (state.filters.priceTo != 0) {
				results = results.filter((one) => one.price <= state.filters.priceTo);
			}
			if (state.filters.yearFrom > 0) {
				results = results.filter((one) => one.year >= state.filters.yearFrom);
			}
			if (state.filters.yearTo > 0) {
				results = results.filter((one) => one.year <= state.filters.yearTo);
			}
			// the following condition ensures to show selected make, and in case all makes is selected, it doesnt get into the condition which makes the program run as if nothing was selected and shows all makes avalables.
			if (state.filters.make !== "" && state.filters.make !== "All Makes") {
				results = results.filter((one) =>
					one.make
						.toLowerCase()
						.includes(state.filters.make.toLowerCase().trim())
				);
			}

			if (
				state.filters.models != "" &&
				state.filters.models != `All ${state.filters.make}`
			) {
				results = results.filter((one) =>
					one.model
						.toLowerCase()
						.includes(state.filters.models.toLowerCase().trim())
				);
			}
			console.log(results,'end',state.filters)
			localStorage.setItem("searchResults", JSON.stringify(results));
			state.showDropDownTextField = false;
		},
		clearFilters(state) {
			state.filters = {
				make: "",
				models: "",
				priceFrom: 0,
				priceTo: 0,
				yearFrom: 0,
				yearTo: 0,
				carType: "",
				carCondition: "",
				fuel: "",
				transmission: "",
				driveTrain: "",
				mileage: "",
				engine: "",
				color: "",
			};
		},
		TOGGLE_MOBILE_MENUE(state) {
			state.mobileMenuToggler = !state.mobileMenuToggler;
		},
	},

	getters: {
		vehiclesList(state) {
			if (state.vehicles) {
				return state.vehicles;
			}
		},
		dealersList(state) {
			if (state.dealers) {
				return state.dealers;
			}
		},
	},

	actions: {
		async fetchVehicles({ commit }) {
			// shows loading animation while getting the data
			// commit("SWITCH_LOADING");
			try {
				let data = await apiVehicles.getVehicles();
				// fetch images url in firestore storage & adds each corresponding list of urls to the proper car in cars list.
				let dataUrl = await apiCarsImages.getCarsImages(data);
				data.forEach((one) => {
					let imagesUrl = dataUrl.find((x) => x.id == one.id).imagesUrl;
					one.carPicsUrls = imagesUrl;
				});
				commit("SET_VEHICLES", data);
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
