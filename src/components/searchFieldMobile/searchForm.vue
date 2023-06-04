<!-- <script>
import { mapMutations, mapState, mapGetters } from "vuex";
export default {
	data() {
		return {
			filterSelected: {
				make: "",
				model: "",
			},
		};
	},

	methods: {
		...mapMutations(["toggleOptionsCard", "updateClickedFieldContent"]),

		addSelection(key, value) {
			this.filterSelected[key] = value;
		},
	},
	computed: {
		...mapGetters("filterOptions", [
			"makeOptions",
			"modelOptions",
			"yearOptions",
			"priceOptions",
		]),
		// working here for mobile view?????????????
		makeModel() {
			let selectedMake = this.filterSelected.make,
				selectedModel = this.filterSelected.model,
				make,
				model;

			if (selectedMake === "") make = "Make";
			else make = selectedMake;

			if (selectedModel === "") model = "Model";

			if (
				selectedMake !== "All Makes" &&
				selectedMake !== "" &&
				selectedModel === ""
			) {
				model = `All ${selectedMake}`;
			}
			if (selectedModel !== "") model = selectedModel;

			return [
				{ field: make, id: "make" },
				{ field: model, id: "model" },
			];
		},
		priceYear() {
			function formatPrice(value) {
				let val = (value / 1).toFixed(2).replace(".", ",");
				return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
			}

			let priceFrom, priceTo, yearFrom, yearTo;

			if (this.filters.priceFrom.typeSelected == 0) {
				priceFrom = "Price From";
			} else {
				priceFrom = `$${formatPrice(this.filters.priceFrom.typeSelected)}`;
			}
			if (this.filters.priceTo.typeSelected == 0) {
				priceTo = "Price To";
			} else {
				priceTo = `$${formatPrice(this.filters.priceTo.typeSelected)}`;
			}
			if (this.filters.yearFrom.typeSelected == 0) {
				yearFrom = "Year From";
			} else {
				yearFrom = this.filters.yearFrom.typeSelected;
			}
			if (this.filters.yearTo.typeSelected == 0) {
				yearTo = "Year to";
			} else {
				yearTo = this.filters.yearTo.typeSelected;
			}

			return [
				{ field: priceFrom, id: "priceFrom" },
				{ field: priceTo, id: "priceTo" },
				{ field: yearFrom, id: "yearFrom" },
				{ field: yearTo, id: "yearTo" },
			];
		},
	},
};
</script>
<template>
	<div>
		<div class="makeModel-wrapper">
			<div
				class="search-fields-container-field"
				v-for="(field, key) in makeModel"
				:key="key"
				@click="
					toggleOptionsCard($event);
					updateClickedFieldContent(field.id);
				"
			>
				<p>{{ field.field }}</p>
				<i class="fas fa-caret-down"></i>
			</div>
		</div>
		<div class="price-year-wrapper">
			<div
				class="search-fields-container-field"
				v-for="(field, key) in priceYear"
				:key="key"
				@click="
					toggleOptionsCard($event);
					updateClickedFieldContent(field.id);
				"
			>
				<p>{{ field.field }}</p>
				<i class="fas fa-caret-down"></i>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.makeModel-wrapper {
	display: grid;
	grid-template-columns: 1fr;
}
.price-year-wrapper {
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 0.2em;
}
</style> -->
