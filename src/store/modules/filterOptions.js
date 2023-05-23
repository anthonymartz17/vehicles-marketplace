export default {
	namespaced: true,

	state: {
		makeOptions: [],
		modelOptions: [],
		priceFromOptions: [],
		priceToOptions: [],
		yearFromOptions: [],
		yearToOptions: [],
		carTypeOptions: [],
		carConditionOptions: [],
		fuelOptions: [],
		transmissionOptions: [],
		driveTrainOptions: [],
		mileageOptions: [],
		engineOptions: [],
		colorOptions: [],
	},

	mutations: {
		SET_MODEL_OPTIONS(state, { list, make }) {
			if (make) {
				state.modelOptions = [
					`All ${make}S`,
					...list.filter((x) => x.make == make).map((x) => x.model),
				];
			}
		},
		SET_FILTERS_OPTIONS(state, payload) {
			state.makeOptions = [
				"All Makes",
				...new Set(payload.map((one) => one.make)),
			];
			state.priceFromOptions = [
				...new Set(payload.map((one) => one.price)),
			].sort((a, b) => a - b);
			state.priceToOptions = [...new Set(payload.map((one) => one.price))].sort(
				(a, b) => a - b
			);
			state.yearFromOptions = [...new Set(payload.map((one) => one.year))].sort(
				(a, b) => a - b
			);
			state.yearToOptions = [...new Set(payload.map((one) => one.year))].sort(
				(a, b) => a - b
			);
			state.carTypeOptions = [...new Set(payload.map((one) => one.carType))];
			state.carConditionOptions = ["New/Used", "New", "Used"];
			state.engineOptions = ["All", "I4", "V6", "V8"];
			// comeback see how to filter by mileage
			state.mileageOptions = [
				"All",
				"0 to 10k",
				"10 to 25k",
				"25k to 50k",
				"50k to 75k",
				"75k to 100k",
				"100k +",
			];
			state.fuelOptions = ["All", ...new Set(payload.map((one) => one.fuel))];
			state.transmissionOptions = [
				"All",
				...new Set(payload.map((one) => one.transmission)),
			];
			state.driveTrainOptions = [
				"All",
				...new Set(payload.map((one) => one.driveTrain)),
			];
			state.colorOptions = [
				"All",
				...new Set(payload.map((one) => one.colorEx)),
			].sort();
			console.log(state.carConditionOptions, "testing");
		},
	},
	getters: {
		makeOptions: (state) => state.makeOptions,
		modelOptions: (state) => state.modelOptions,
		carConditionOptions: (state) => state.carConditionOptions,
		yearOptions: (state) => ({
			from: state.yearFromOptions,
			to: state.yearToOptions,
		}),
		priceOptions: (state) => {
			let from = [];
			let to = [];
//  prepares data to be used in vue multiselect with a custom label attribute, to display currency format in dropdown, but send num type in v-model.
			state.priceFromOptions.forEach((price) => {
				let formatted = price.toLocaleString("en-US", {
					style: "currency",
					currency: "USD",
				});
				from.push({ fromFormatted: formatted, fromNumType: price });
				to.push({ toFormatted: formatted, toNumType: price });
			});
			return {from,to}
		},

		transmissionOptions: (state) => state.transmissionOptions,
		drivetrainOptions: (state) => state.driveTrainOptions,
		mileageOptions: (state) => state.mileageOptions,
		engineOptions: (state) => state.engineOptions,
		colorOptions: (state) => state.colorOptions,
	},
};
