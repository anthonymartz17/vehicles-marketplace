<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Multiselect from "vue-multiselect";
import SearchBtn from "./searchFieldMobile/SearchBtn.vue";
export default {
	components: {
		Multiselect,
		SearchBtn,
	},
	data() {
		return {
			filtersSelected: {},
		};
	},
	created() {
		this.fetchDealers();
		console.log(this.filters, "state");
		console.log(this.filtersSelected, "local");

		//keeps local filter object updated with the state main object filters
		Object.assign(this.filtersSelected, this.filteredObject);
	},

	methods: {
		...mapMutations("filterOptions", ["SET_MODEL_OPTIONS"]),

		...mapMutations("vehicles", ["UPDATE_FILTERS", "FILTER_VEHICLES"]),
		...mapActions("vehicles", ["fetchDealers"]),

		fireSearch() {
			console.log(this.filtersSelected);
			this.UPDATE_FILTERS(this.filtersSelected);
			this.FILTER_VEHICLES();
			if (this.$route.name !== "searchResults") {
				this.$router.replace({ name: "searchResults" });
			}
		},
		removeFilter({ id }) {
			switch (id) {
				case "year":
					this.filtersSelected.yearFrom = null;
					this.filtersSelected.yearTo = null;
					break;
				case "price":
					this.filtersSelected.priceFrom = null;
					this.filtersSelected.priceTo = null;
					break;
				case "make":
					this.filtersSelected.make = "";
					this.filtersSelected.model = "";
					break;

				default:
					this.filtersSelected[id] = "";
			}

			this.fireSearch();
		},
	},
	computed: {
		...mapGetters("vehicles", ["vehiclesList", "dealersList"]),
		...mapState("vehicles", ["filters"]),

		...mapGetters("filterOptions", [
			"makeOptions",
			"modelOptions",
			"carConditionOptions",
			"carTypeOptions",
			"yearOptions",
			"priceOptions",
			"transmissionOptions",
			"drivetrainOptions",
			"mileageOptions",
			"engineOptions",
			"fuelOptions",
			"colorOptions",
		]),

		filteredObject() {
			return Object.keys(this.filters).reduce((acc, key) => {
				const value = this.filters[key];
				if (value !== "" && value !== 0 && value !== null) {
					acc[key] = value;
				}
				return acc;
			}, {});
		},
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
	<form action="">
		<div class="advance-search">
			<div class="">
				<!-- <h5 class="sub-title">Advanced Search!</h5> -->
				<div>
					<div class="field">
						<label for="condition">Condition:</label>
						<span
							v-if="filtersSelected.carCondition"
							class="eliminate-filter"
							@click="removeFilter({ id: 'carCondition' })"
							>(Eliminate)</span
						>
						<multiselect
							@input="$route.name == 'searchResults' ? fireSearch() : null"
							class="dropdown"
							v-model="filtersSelected.carCondition"
							:options="carConditionOptions"
							:searchable="false"
							:show-labels="false"
							placeholder="New/Used"
						></multiselect>
					</div>
					<div class="field">
						<label for="condition">Make:</label
						><span
							v-if="filtersSelected.make"
							class="eliminate-filter"
							@click="removeFilter({ id: 'make' })"
							>(Eliminate)</span
						>
						<multiselect
							class="dropdown"
							v-model="filtersSelected.make"
							:options="makeOptions"
							:searchable="false"
							:show-labels="false"
							placeholder="All makes"
							@input="
								filtersSelected.model ? (filtersSelected.model = '') : null;
								SET_MODEL_OPTIONS({
									list: vehiclesList,
									make: filtersSelected.make,
								});
								$route.name == 'searchResults' ? fireSearch() : null;
							"
						></multiselect>
					</div>
				</div>
				<div class="field">
					<label for="condition">Model:</label
					><span
						v-if="filtersSelected.model"
						class="eliminate-filter"
						@click="removeFilter({ id: 'model' })"
						>(Eliminate)</span
					>
					<multiselect
						@input="$route.name == 'searchResults' ? fireSearch() : null"
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
			</div>
			<div>
				<h5 class="sub-title">Price and Type</h5>

				<div class="field">
					<label for="condition">Type of Car:</label
					><span
						v-if="filtersSelected.carType"
						class="eliminate-filter"
						@click="removeFilter({ id: 'carType' })"
						>(Eliminate)</span
					>
					<multiselect
						@input="$route.name == 'searchResults' ? fireSearch() : null"
						class="dropdown"
						v-model="filtersSelected.carType"
						:options="carTypeOptions"
						:searchable="false"
						:show-labels="false"
						placeholder="Select a type"
					></multiselect>
				</div>
				<div class="field">
					<label for="condition">Year:</label>
					<span
						v-if="filtersSelected.yearFrom || filtersSelected.yearTo"
						class="eliminate-filter"
						@click="removeFilter({ id: 'year' })"
						>(Eliminate)</span
					>

					<div class="double-input-container">
						<multiselect
							@input="$route.name == 'searchResults' ? fireSearch() : null"
							class="dropdown"
							v-model="filtersSelected.yearFrom"
							:options="yearOptionsDynamic.from"
							:searchable="false"
							:show-labels="false"
							placeholder="From"
						></multiselect>
						<multiselect
							@input="$route.name == 'searchResults' ? fireSearch() : null"
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
					<span
						v-if="filtersSelected.priceFrom || filtersSelected.priceTo"
						class="eliminate-filter"
						@click="removeFilter({ id: 'price' })"
						>(Eliminate)</span
					>
					<div class="double-input-container">
						<multiselect
							@input="$route.name == 'searchResults' ? fireSearch() : null"
							class="dropdown"
							v-model="filtersSelected.priceFrom"
							:options="priceOptionsDynamic.from.map((x) => x.fromNumType)"
							:custom-label="
								(opt) => {
									const formatted = priceOptionsDynamic.from.find(
										(x) => x.fromNumType == opt
									);
									return formatted ? formatted.fromFormatted : '';
								}
							"
							:searchable="false"
							:show-labels="false"
							placeholder="from"
						></multiselect>
						<multiselect
							@input="$route.name == 'searchResults' ? fireSearch() : null"
							class="dropdown"
							v-model="filtersSelected.priceTo"
							:options="priceOptionsDynamic.to.map((x) => x.toNumType)"
							:custom-label="
								(opt) => {
									const formatted = priceOptionsDynamic.to.find(
										(x) => x.toNumType == opt
									);
									return formatted ? formatted.toFormatted : '';
								}
							"
							:searchable="false"
							:show-labels="false"
							placeholder="To"
						></multiselect>
					</div>
				</div>
			</div>
			<div class="blocks-container">
				<h5 class="sub-title">More Options</h5>
				<div class="field">
					<label for="condition">Fuel:</label
					><span
						v-if="filtersSelected.fuel"
						class="eliminate-filter"
						@click="removeFilter({ id: 'fuel' })"
						>(Eliminate)</span
					>
					<multiselect
						@input="$route.name == 'searchResults' ? fireSearch() : null"
						class="dropdown"
						v-model="filtersSelected.fuel"
						:options="fuelOptions"
						:searchable="false"
						:show-labels="false"
						placeholder="All"
					></multiselect>
				</div>
				<div class="field">
					<label for="condition">Transmission:</label>
					<span
						v-if="filtersSelected.transmission"
						class="eliminate-filter"
						@click="removeFilter({ id: 'transmission' })"
						>(Eliminate)</span
					>
					<multiselect
						@input="$route.name == 'searchResults' ? fireSearch() : null"
						class="dropdown"
						v-model="filtersSelected.transmission"
						:options="transmissionOptions"
						:searchable="false"
						:show-labels="false"
						placeholder="All"
					></multiselect>
				</div>
				<div class="field">
					<label for="drivetrain">Traction:</label>
					<span
						v-if="filtersSelected.driveTrain"
						class="eliminate-filter"
						@click="removeFilter({ id: 'driveTrain' })"
						>(Eliminate)</span
					>
					<multiselect
						@input="$route.name == 'searchResults' ? fireSearch() : null"
						class="dropdown"
						v-model="filtersSelected.driveTrain"
						:options="drivetrainOptions"
						:searchable="false"
						:show-labels="false"
						placeholder="All"
					></multiselect>
				</div>
				<div class="field">
					<label for="condition">Engine:</label>
					<span
						v-if="filtersSelected.engine"
						class="eliminate-filter"
						@click="removeFilter({ id: 'engine' })"
						>(Eliminate)</span
					>
					<multiselect
						@input="$route.name == 'searchResults' ? fireSearch() : null"
						class="dropdown"
						v-model="filtersSelected.engine"
						:options="engineOptions"
						:searchable="false"
						:show-labels="false"
						placeholder="All"
					></multiselect>
				</div>
				<div class="field">
					<label for="condition">Color:</label>
					<span
						v-if="filtersSelected.color"
						class="eliminate-filter"
						@click="removeFilter({ id: 'color' })"
						>(Eliminate)</span
					>
					<multiselect
						@input="$route.name == 'searchResults' ? fireSearch() : null"
						class="dropdown"
						v-model="filtersSelected.color"
						:options="colorOptions"
						:searchable="false"
						:show-labels="false"
						placeholder="All"
					></multiselect>
				</div>
				<div class="field">
					<label for="condition">Seller:</label>
					<span
						v-if="filtersSelected.dealerId"
						class="eliminate-filter"
						@click="removeFilter({ id: 'dealerId' })"
						>(Eliminate)</span
					>
					<multiselect
						@input="$route.name == 'searchResults' ? fireSearch() : null"
						class="dropdown"
						v-model="filtersSelected.dealerId"
						:options="dealersList.map((x) => x.id)"
						:custom-label="
							(opt) => {
								return dealersList.find((x) => x.id == opt).name;
							}
						"
						:show-labels="false"
						placeholder="All"
					></multiselect>
				</div>
			</div>
			<div v-if="$route.name !== 'searchResults'" class="btn-container">
				<div class="btn-search" @click="fireSearch()">Search</div>
			</div>
		</div>
	</form>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
.advance-search {
	padding-bottom: 3em;
	// background: $dark;
	padding-inline: 0.5em;
}
.eliminate-filter {
	color: $primary;
	cursor: pointer;
	font: $font-text;
}

.btn-container {
	height: 3em;
}
.btn-search {
	font: $font-text-bold;
	background: $primary;
	height: 100%;
	outline: none;
	border: none;
}
.sub-title {
	font: $font-mobile-l;
	color: $light;
	padding-block: 1em;
}

.btnPosition {
	position: fixed;
	bottom: 0em;
}
.double-input-container {
	flex: 3;
	display: flex;
	gap: 1em;
}
.field {
	margin-bottom: 1em;
	align-items: center;
	font: $font-mobile-m-bold;

	label {
		flex: 1;
		color: $light;
	}

	select {
		flex: 3;
		font: $font-mobile-m-bold;
		color: $dark;
		padding: 0.2em;
	}
}
// .blocks-container {
// 	margin-inline: 0.5em;
// 	margin-bottom: 2em;
// }
</style>
