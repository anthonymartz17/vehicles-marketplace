import apiVehicles from "../../helpers/apiVehicles";
import apiCarsImages from "../../helpers/apiCarsImages";

export default {
	namespaced: true,

	state: {
		isDesktop: false,
		vehicles: [],
		dealers: [],
		vehiclesToDisplay: [],
		filters: {
			make: "",
			model: "",
			priceFrom: null,
			priceTo: null,
			yearFrom: null,
			yearTo: null,
			carType: "",
			carCondition: "",
			fuel: "",
			transmission: "",
			driveTrain: "",
			mileage: "",
			engine: "",
			color: "",
			dealerId: "",
		},
		showMobileMenue: false,
		searchMenuToggler: false,
	},
	mutations: {
		SET_ISDESKTOP(state, payload) {
			state.isDesktop = payload;
		},
		SET_VEHICLES(state, payload) {
			state.vehicles = payload;
		},
		SET_DEALERS(state, payload) {
			state.dealers = payload;
		},

		UPDATE_FILTERS(state, payload) {
			if (payload == null) {
				state.filters = {
					make: "",
					model: "",
					priceFrom: null,
					priceTo: null,
					yearFrom: null,
					yearTo: null,
					carType: "",
					carCondition: "",
					fuel: "",
					transmission: "",
					driveTrain: "",
					mileage: "",
					engine: "",
					color: "",
					dealerId: "",
				};

				console.log(state.filters ,'state')
			} else {
				state.filters = { ...state.filters, ...payload };
			}
		},
		FILTER_VEHICLES(state) {
			let results = state.vehicles;
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
			if (state.filters.priceFrom != null) {
				results = results.filter((one) => one.price >= state.filters.priceFrom);
			}
			if (state.filters.priceTo != null) {
				results = results.filter((one) => one.price <= state.filters.priceTo);
			}
			if (state.filters.yearFrom != null) {
				results = results.filter((one) => one.year >= state.filters.yearFrom);
			}
			if (state.filters.yearTo != null) {
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
				state.filters.model != "" &&
				state.filters.model != `All ${state.filters.make}`
			) {
				results = results.filter((one) =>
					one.model
						.toLowerCase()
						.includes(state.filters.model.toLowerCase().trim())
				);
			}
			localStorage.setItem("searchResults", JSON.stringify(results));
			state.vehiclesToDisplay = results;
			// state.showDropDownTextField = false;
		},

		TOGGLE_MOBILE_MENUE(state) {
			state.showMobileMenue = !state.showMobileMenue;
		},
		TOGGLE_SEARCH_MENU(state) {
			state.showSearchMenu = !state.showSearchMenu;
		},
		// sorts the vehicles that are displaying
		SORT_VEHICLES(state, id) {
			switch (id) {
				case "lowestPrice":
					state.vehiclesToDisplay.sort((a, b) => a.price - b.price);
					break;
				case "highestPrice":
					state.vehiclesToDisplay.sort((a, b) => b.price - a.price);
					break;

				case "lowestMileage":
					state.vehiclesToDisplay.sort((a, b) => {
						return +a.miles.replace(/,/g, "") - +b.miles.replace(/,/g, "");
					});
					break;

				case "highestMileage":
					state.vehiclesToDisplay.sort((a, b) => {
						return +b.miles.replace(/,/g, "") - +a.miles.replace(/,/g, "");
					});
					break;

				case "newest":
					state.vehiclesToDisplay.sort((a, b) => b.year - a.year);
					break;

				case "oldest":
					state.vehiclesToDisplay.sort((a, b) => a.year - b.year);
					break;

				default:
					return;
			}
		},
	},

	getters: {
		isDesktop: (state) => state.isDesktop,
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
		appliedFilters(state) {
			let list = Object.keys(state.filters).reduce((acc, key) => {
				const value = state.filters[key];
				if (value !== "" && value !== 0 && value !== null) {
					acc[key] = value;
				}
				return acc;
			}, {});
			// only keeps first word that s before cap lette. so priceFrom,priceto become price and its only one word in the array reffereing to the price. same with year.
			let finalList = Object.keys(list).map((one) => {
				const match = one.match(/[A-Z]/);
				return one.split(match)[0];
			});
			//get rid of duplicate elements in the array
			return [...new Set(finalList)];
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

		updateFilters({ commit }, payload) {
			console.log('is firing')
			commit("UPDATE_FILTERS", payload);
		},
		filterVehicles({ commit }) {
			commit("FILTER_VEHICLES");
		},
	},
};
