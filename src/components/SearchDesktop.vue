<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
import SearchBtn from "./searchFieldMobile/SearchBtn.vue";
import Multiselect from "vue-multiselect";
// import PriceYear from "./priceYearDesktop.vue";
export default {
	components: {
		SearchBtn,
		Multiselect,
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
			this.$router.replace({name:'searchResults'})
		},
	},

	computed: {
		cartypes() {
			return [
				{ type: "Sedan", img: "sedan.png" },
				{ type: "SUV", img: "suv.png" },
				{ type: "Midsize SUV", img: "midsize.png" },
				{ type: "Pickup", img: "pickup.png" },
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
							:options="yearOptions.from"
							:searchable="false"
							:show-labels="false"
							placeholder="From"
						></multiselect>
						<multiselect
							class="dropdown"
							v-model="filtersSelected.yearTo"
							:options="yearOptions.to"
							:searchable="false"
							:show-labels="false"
							placeholder="To"
						></multiselect>
					</div>
				</div>
				<div class="field">
					<label for="condition">Price:</label>
					<div class="double-input-container">
						<multiselect
							class="dropdown"
							v-model="filtersSelected.priceFrom"
							:options="priceOptions.from"
							:searchable="false"
							:show-labels="false"
							placeholder="From"
						></multiselect>
						<multiselect
							class="dropdown"
							v-model="filtersSelected.priceTo"
							:options="priceOptions.to"
							:searchable="false"
							:show-labels="false"
							placeholder="To"
						></multiselect>
					</div>
				</div>
				<!-- 
				<div class="field">
					<label for="condition">Condition:</label>
					<select
						name="condition"
						id="condition"
						v-model="filtersSelected.carCondition"
					>
						<option v-for="(condition, key) in carConditionOptions" :key="key">
							{{ condition }}
						</option>
					</select>
				</div> -->

				<!-- <div class="field">
					<label for="make">Make:</label>
					<select name="make" id="make" v-model="filtersSelected.make">
						<option disabled selected value="">Select an option</option>
						<option v-for="(make, key) in makeOptions" :key="key">
							{{ make }}
						</option>
					</select>
				</div> -->

				<!-- <div class="field">
					<label for="model">Model:</label>
					<select v-model="filtersSelected.model" name="model" id="model">
						<option v-for="(model, key) in modelOptions" :key="key">
							{{ model }}
						</option>
					</select>
				</div> -->

				<!-- <div class="price-year-desk-wrappert">
					<div class="field">
						<label>Year:</label>
						<div class="double-input-container">
							<select
								name="yearFrom"
								id="yearFrom"
								v-model="filtersSelected.yearFrom"
							>
								<option :value="null">From</option>
								<option
									:selected="yearFrom == filtersSelected.yearFrom"
									v-for="(yearFrom, key) in yearOptions.from"
									:key="key"
								>
									{{ yearFrom }}
								</option>
							</select>
							<select
								name="yearTo"
								id="yearTo"
								v-model="filtersSelected.yearTo"
							>
								<option :value="null">To</option>
								<option
									v-for="(yearTo, key) in yearOptions.to"
									:key="key"
									:disabled="yearsUnavailable != null && key < yearsUnavailable"
									:class="{
										disabledOptions:
											yearsUnavailable != null && key < yearsUnavailable,
									}"
									:selected="yearTo == filters.yearTo.typeSelected"
								>
									{{ yearTo }}
								</option>
							</select>
						</div>
					</div>
					<div class="field">
						<label>Price:</label>
						<div class="double-input-container">
							<select
								name="yearFrom"
								id="yearFrom"
								v-model="filtersSelected.priceFrom"
							>
								<option :value="null">From</option>
								<option
									:selected="priceFrom == filtersSelected.priceFrom"
									v-for="(priceFrom, key) in priceOptions.from"
									:key="key"
								>
									{{ priceFrom }}
								</option>
							</select>
							<select
								name="priceTo"
								id="priceTo"
								v-model="filtersSelected.priceTo"
							>
								<option :value="null">To</option>
								<option
									v-for="(priceTo, key) in priceOptions.to"
									:key="key"
									:disabled="yearsUnavailable != null && key < yearsUnavailable"
									:class="{
										disabledOptions:
											pricesUnavailable != null && key < pricesUnavailable,
									}"
									:selected="priceTo == filtersSelected.priceTo"
								>
									{{ priceTo }}
								</option>
							</select>
						</div>
					</div>
				</div> -->
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
						<img
							class="type-cars-icons"
							:src="`/images/icons/${type.img}`"
							:alt="`picture of ${type.type}`"
						/>
						<p>{{ type.type }}</p>
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
.btn-container{
	display: flex;
	justify-content: flex-end;
	margin-top:1em ;
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
