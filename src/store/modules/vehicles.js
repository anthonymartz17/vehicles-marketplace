import apiVehicles from "../../helpers/apiVehicles";
import apiCarsImages from "../../helpers/apiCarsImages";

export default {
	namespaced: true,

	state: {
		vehicles: [],
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
		},
	},
	mutations: {
		SET_CARS(state, payload) {
			state.vehicles = payload;
		},
		//add the imagesUrl array property to each corresponding car in vehicles array
		SET_CARS_IMAGESURL(state, payload) {
			state.vehicles.forEach((car) => {
				let { carImagesUrl } = payload.find((x) => x.carId == car.id);
				car.imagesUrl = carImagesUrl;
			});
		},
		UPDATE_FILTERS(state, payload) {
			state.filters = { ...state.filters, ...payload };
			console.log(state.filters, "the filters");
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
			localStorage.setItem("searchResults", JSON.stringify(results));
			state.showDropDownTextField = false;
			console.log(results);
		},
	},

	getters: {
		vehiclesList(state) {
			if (state.vehicles) {
				return state.vehicles;
			}
		},
	},

	actions: {
		async fetchCars({ commit }) {
			// shows loading animation while getting the data
			// commit("SWITCH_LOADING");
			try {
				let data = await apiVehicles.getCars();
				commit("SET_CARS", data);
				return data;
			} catch (error) {
				throw error;
			} finally {
				// turns loading to false
				// commit("SWITCH_LOADING");
			}
		},
		async fetchCarsImages({ commit, state }, carsData) {
			// shows loading animation while getting the data
			// commit("SWITCH_LOADING");
			try {
				let data = await apiCarsImages.getCarsImages(carsData);
				commit("SET_CARS_IMAGESURL", data);
				return data;
			} catch (error) {
				throw error;
			} finally {
				// turns loading to false
				// commit("SWITCH_LOADING");
			}
		},
	},
};
