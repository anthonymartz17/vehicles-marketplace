<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
import SearchBtn from "./searchFieldMobile/SearchBtn.vue";
import Multiselect from "vue-multiselect";
import MartzIcons from "./martz-icons.vue";
// import PriceYear from "./priceYearDesktop.vue";
export default {
	components: {
		SearchBtn,
		Multiselect,
		MartzIcons,
	},
	data() {
		return {
			filtersSelected: {},
			searchLabels: ["Condition", "Make", "Model", "Year", "Price"],
		};
	},
	created() {
		this.getCarsData({
			funcToCommit: "shuffleHomeDisplayCars",
			route: this.$route,
		});
	},
	methods: {
		// ...mapMutations([
		// 	"assignValueToTypeSelected",
		// 	"searchVehicles",
		// 	"setDataInVehiclesDisplayFromLocal",
		// 	"selectModelByMake",
		// 	"disablePricesYears",
		// 	"updateInputTextUser",
		// ]),
		...mapMutations("filterOptions", ["SET_MODEL_OPTIONS"]),

		...mapMutations("vehicles", ["UPDATE_FILTERS", "FILTER_VEHICLES"]),
		...mapActions(["getCarsData"]),

		fireSearch() {
			this.UPDATE_FILTERS(this.filtersSelected);
			this.FILTER_VEHICLES();
			this.$router.replace({ name: "searchResults" });
		},
	},

	computed: {
		cartypes() {
			return [
				...new Set(this.vehiclesList.map((x) => x.carType.toLowerCase())),
			];
		},
		modelByMake() {
			if (
				this.filters.make.typeSelected === "" ||
				this.filters.make.typeSelected === "All Makes"
			) {
				return ["Models"];
			} else {
				return this.filters.models.type;
			}
		},

		searchFieldPlaceholder() {
			let make, model;
			//  ,condition,year,price;
			if (this.filters.make.typeSelected == "") {
				make = "Make";
			} else {
				make = this.filters.make.typeSelected;
			}
			if (this.filters.models.typeSelected == "") {
				model = "Model";
			} else {
				model = this.filters.models.typeSelected;
			}

			return [
				{ field: make, id: "make" },
				{ field: model, id: "model" },
			];
		},
		...mapState([
			"filters",
			"clickedFieldContent",
			"carsData",
			"pricesUnavailable",
			"yearsUnavailable",
		]),
		...mapGetters([
			"priceToComputed",
			"priceFromComputed",
			"yearFromComputed",
			"yearToComputed",
		]),
		...mapGetters("vehicles", ["vehiclesList"]),
		...mapGetters("filterOptions", [
			"makeOptions",
			"modelOptions",
			"carConditionOptions",
			"yearOptions",
			"priceOptions",
			"transmissionOptions",
			"drivetrainOptions",
			"mileageOptions",
			"engineOptions",
			"colorOptions",
		]),

		//updates years fields to keep years from less than years to and viceversa
		yearOptionsDynamic() {
			let list = {};
			if (this.filtersSelected.yearTo) {
				list.from = this.yearOptions.from.filter(
					(x) => x <= this.filtersSelected.yearTo
				);
			} else {
				list.from = this.yearOptions.from;
			}
			if (this.filtersSelected.yearFrom) {
				list.to = this.yearOptions.to.filter(
					(x) => x >= this.filtersSelected.yearFrom
				);
			} else {
				list.to = this.yearOptions.to;
			}
			return list;
		},
		priceOptionsDynamic() {
			// controls from price is not greater than to price and to price not less than from price.
			let list = {};

			if (this.filtersSelected.priceTo) {
				list.from = this.priceOptions.from.filter(
					(x) => x.fromNumType <= this.filtersSelected.priceTo
				);
			} else {
				list.from = this.priceOptions.from;
			}
			if (this.filtersSelected.priceFrom) {
				list.to = this.priceOptions.to.filter(
					(x) => x.toNumType >= this.filtersSelected.priceFrom
				);
			} else {
				list.to = this.priceOptions.to;
			}

			return list;
		},
	},
};
</script>
<template>
	<div class="search-type-wrapper">
		<div class="search-vehicle">
			<p class="search-title-desktop"><span> Search</span> Your Vehicle!</p>

			<form>
				<div class="field">
					<label for="condition">Condition:</label>
					<multiselect
						class="dropdown"
						v-model="filtersSelected.carCondition"
						:options="carConditionOptions"
						:searchable="false"
						:show-labels="false"
						placeholder="New/Used"
					></multiselect>
				</div>
				<div class="field">
					<label for="condition">Make:</label>
					<multiselect
						class="dropdown"
						v-model="filtersSelected.make"
						:options="makeOptions"
						:searchable="false"
						:show-labels="false"
						placeholder="All makes"
						@input="
							SET_MODEL_OPTIONS({
								list: vehiclesList,
								make: filtersSelected.make,
							})
						"
					></multiselect>
				</div>

				<div class="field">
					<label for="condition">Model:</label>
					<multiselect
						class="dropdown"
						v-model="filtersSelected.model"
						:options="modelOptions"
						:searchable="false"
						:show-labels="false"
						:placeholder="
							filtersSelected.make && filtersSelected.make !== 'All Makes'
								? `All ${filtersSelected.make}S`
								: 'All Models'
						"
					></multiselect>
				</div>
				<div class="field">
					<label for="condition">Year:</label>
					<div class="double-input-container">
						<multiselect
							class="dropdown"
							v-model="filtersSelected.yearFrom"
							:options="yearOptionsDynamic.from"
							:searchable="false"
							:show-labels="false"
							placeholder="From"
						></multiselect>
						<multiselect
							class="dropdown"
							v-model="filtersSelected.yearTo"
							:options="yearOptionsDynamic.to"
							:searchable="false"
							:show-labels="false"
							placeholder="To"
						></multiselect>
					</div>
				</div>
				<div class="field">
					<label for="condition">Price:</label>
					<!-- <p>{{ priceOptions.from }}</p> -->
					<div class="double-input-container">
						<multiselect
							class="dropdown"
							v-model="filtersSelected.priceFrom"
							:options="priceOptionsDynamic.from.map((x) => x.fromNumType)"
							:custom-label="
								(opt) => {
									return priceOptionsDynamic.from.find(
										(x) => x.fromNumType == opt
									).fromFormatted;
								}
							"
							:searchable="false"
							:show-labels="false"
							placeholder="From"
						></multiselect>
						<multiselect
							class="dropdown"
							v-model="filtersSelected.priceTo"
							:options="priceOptionsDynamic.to.map((x) => x.toNumType)"
							:custom-label="
								(opt) => {
									return priceOptionsDynamic.to.find((x) => x.toNumType == opt)
										.toFormatted;
								}
							"
							:searchable="false"
							:show-labels="false"
							placeholder="To"
						></multiselect>
					</div>
				</div>

				<div class="btn-container">
					<div class="btn-search" @click="fireSearch()">Search</div>
				</div>
			</form>
		</div>

		<div class="search-types">
			<p class="search-title-desktop"><span> Types</span> of Vehicles</p>
			<ul class="typesCarList">
				<li v-for="(type, key) in cartypes" :key="key">
					<router-link
						:to="{ name: 'searchResults' }"
						class="routerlink"
						id="carType"
						@click.native="
							assignValueToTypeSelected($event);
							searchVehicles();
							setDataInVehiclesDisplayFromLocal();
							updateInputTextUser();
						"
					>
						<MartzIcons :icon="type" size="80" />

						<p>{{ type }}</p>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
.types-icon-container {
	max-height: 100%;
}
.typesCarList {
	height: 100%;
	list-style: none;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 2em;
	flex-wrap: wrap;
	flex: 2;

	li {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease-in-out;
		&:hover {
			background: lighten($lightestDark, 35);
		}

		p {
			font: $font-text-bold;
			pointer-events: none;
		}
		.routerlink {
			height: 100%;
		}
	}
}
.type-cars-icons {
	max-width: 40%;
	pointer-events: none;
}

.search-type-wrapper {
	display: none;
	@include desktop {
		display: flex;
		gap: 1em;
		margin-block: 1em;
	}
}
.search-title-desktop {
	border-bottom: 2px solid $lightestDark;
	padding-bottom: 0.5em;
	margin-bottom: 1em;
	span {
		color: $primary;
	}
	font: $font-text-bold;
}

.search-vehicle {
	box-shadow: 0px -2px 0px 0px $lightestDark;
	border: 1px solid $lightestDark;
	padding: 1em 0.5em;
	flex: 1;
}
.search-types {
	box-shadow: 0px -2px 0px 0px $lightestDark;
	border: 1px solid $lightestDark;
	padding: 1em 0.5em;
	flex: 1;
	display: flex;
	flex-direction: column;
}
.double-input-container {
	flex: 3;
	display: flex;
	gap: 1em;
}
.dropdown {
	flex: 3;
}
.field {
	height: 3em;
	margin-block: 0.2em;
	display: flex;
	align-items: center;
	font: $font-mobile-m-bold;

	label {
		flex: 1;

		color: $dark;
	}

	select {
		flex: 3;
		font: $font-mobile-m-bold;
		color: $dark;
		padding: 0.2em;
	}
}
.btn-container {
	display: flex;
	justify-content: flex-end;
	margin-top: 1em;
}
.price {
	display: flex;
}
.year {
	display: flex;
}
.btn {
	width: 100%;
	height: 3em;
	margin-block: 0.2em;
	font: $font-text-bold;
	text-align: center;
}
.btn-search {
	background: $primary;
	outline: none;
	border: none;
}
.btn-advanceSearch {
	background: $dark;
	color: $primary;
	display: grid;
	place-items: center;
}
</style>
