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
		return {};
	},
	created() {
		this.fetchDealers();
	},

	methods: {
		...mapMutations("vehicles", ["UPDATE_FILTERS", "FILTER_VEHICLES"]),
		...mapActions("vehicles", ["fetchDealers"]),
		...mapActions("filterOptions", ["setModelOptions"]),

		fireSearch() {
			this.FILTER_VEHICLES();
			if (this.$route.name !== "searchResults") {
				this.$router.replace({ name: "searchResults" });
			}
		},

		clearFilters() {
			this.UPDATE_FILTERS(null);
			this.FILTER_VEHICLES();
		},
		removeFilter({ id }) {
			switch (id) {
				case "year":
					this.filters.yearFrom = null;
					this.filters.yearTo = null;
					break;
				case "price":
					this.filters.priceFrom = null;
					this.filters.priceTo = null;
					break;
				case "make":
					this.filters.make = "";
					this.filters.model = "";
					break;

				default:
					this.filters[id] = "";
			}
			if (this.$route.name !== "advance") this.fireSearch();
		},
	},
	computed: {
		...mapGetters("vehicles", [
			"vehiclesList",
			"dealersList",
			"appliedFilters",
		]),

		filters: {
			get() {
				return this.$store.state.vehicles.filters;
			},
			set(newValue) {
				this.$store.dispatch("vehicles/updateFilters", newValue);
			},
		},
		modelPlaceholder() {
			return this.filters.make && this.filters.make !== "All Makes"
				? `All ${this.filters.make}S`
				: "All Models";
		},

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

		yearOptionsDynamic() {
			let list = {};
			if (this.filters.yearTo) {
				list.from = this.yearOptions.from.filter(
					(x) => x <= this.filters.yearTo
				);
			} else {
				list.from = this.yearOptions.from;
			}
			if (this.filters.yearFrom) {
				list.to = this.yearOptions.to.filter((x) => x >= this.filters.yearFrom);
			} else {
				list.to = this.yearOptions.to;
			}
			return list;
		},
		priceOptionsDynamic() {
			// controls from price is not greater than to price and to price not less than from price.
			let list = {};

			if (this.filters.priceTo) {
				list.from = this.priceOptions.from.filter(
					(x) => x.fromNumType <= this.filters.priceTo
				);
			} else {
				list.from = this.priceOptions.from;
			}
			if (this.filters.priceFrom) {
				list.to = this.priceOptions.to.filter(
					(x) => x.toNumType >= this.filters.priceFrom
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
			<div>
				<div v-if="$route.name !== 'searchResults'" class="btn-container">
					<router-link class="flat-btn" :to="{ name: 'searchResults' }"
						>Cancel</router-link
					>
					<div
						@click="
							clearFilters();
							setModelOptions(null);
						"
						class="flat-btn"
					>
						<span>Clear</span>
						<span>
							{{ appliedFilters.length }} filter<span
								v-show="appliedFilters.length > 1"
								>s</span
							>
						</span>
					</div>
					<div class="btn-search" @click="fireSearch()">Apply</div>
				</div>
				<div>
					<div class="field">
						<div class="label-container">
							<label for="condition">Condition:</label>
							<span
								v-if="filters.carCondition"
								class="eliminate-filter"
								@click="removeFilter({ id: 'carCondition' })"
								>(Eliminate)</span
							>
						</div>
						<multiselect
							@input="$route.name == 'searchResults' ? fireSearch() : null"
							class="dropdown"
							v-model="filters.carCondition"
							:options="carConditionOptions"
							:searchable="false"
							:show-labels="false"
							placeholder="New/Used"
						></multiselect>
					</div>
					<div class="field">
						<div class="label-container">
							<label for="condition">Make:</label
							><span
								v-if="filters.make"
								class="eliminate-filter"
								@click="
									removeFilter({ id: 'make' });
									setModelOptions(null);
								"
								>(Eliminate)</span
							>
						</div>
						<multiselect
							class="dropdown"
							v-model="filters.make"
							:options="makeOptions"
							:searchable="false"
							:show-labels="false"
							placeholder="All makes"
							@input="
								filters.model ? (filters.model = '') : null;
								setModelOptions({
									list: vehiclesList,
									make: filters.make,
								});
								$route.name == 'searchResults' ? fireSearch() : null;
							"
						></multiselect>
					</div>
				</div>
				<div class="field">
					<div class="label-container">
						<label for="condition">Model:</label
						><span
							v-if="filters.model"
							class="eliminate-filter"
							@click="removeFilter({ id: 'model' })"
							>(Eliminate)</span
						>
					</div>
					<multiselect
						@input="$route.name == 'searchResults' ? fireSearch() : null"
						class="dropdown"
						v-model="filters.model"
						:options="modelOptions"
						:searchable="false"
						:show-labels="false"
						:placeholder="modelPlaceholder"
					></multiselect>
				</div>
			</div>
			<div>
				<h5 class="sub-title">Price and Type</h5>

				<div class="field">
					<div class="label-container">
						<label for="condition">Type of Car:</label
						><span
							v-if="filters.carType"
							class="eliminate-filter"
							@click="removeFilter({ id: 'carType' })"
							>(Eliminate)</span
						>
					</div>
					<multiselect
						@input="$route.name == 'searchResults' ? fireSearch() : null"
						class="dropdown"
						v-model="filters.carType"
						:options="carTypeOptions"
						:searchable="false"
						:show-labels="false"
						placeholder="Select a type"
					></multiselect>
				</div>
				<div class="field">
					<div class="label-container">
						<label for="condition">Year:</label>
						<span
							v-if="filters.yearFrom || filters.yearTo"
							class="eliminate-filter"
							@click="removeFilter({ id: 'year' })"
							>(Eliminate)</span
						>
					</div>

					<div class="double-input-container">
						<multiselect
							@input="$route.name == 'searchResults' ? fireSearch() : null"
							class="dropdown"
							v-model="filters.yearFrom"
							:options="yearOptionsDynamic.from"
							:searchable="false"
							:show-labels="false"
							placeholder="From"
						></multiselect>
						<multiselect
							@input="$route.name == 'searchResults' ? fireSearch() : null"
							class="dropdown"
							v-model="filters.yearTo"
							:options="yearOptionsDynamic.to"
							:searchable="false"
							:show-labels="false"
							placeholder="To"
						></multiselect>
					</div>
				</div>
				<div class="field">
					<div class="label-container">
						<label for="condition">Price:</label>
						<span
							v-if="filters.priceFrom || filters.priceTo"
							class="eliminate-filter"
							@click="removeFilter({ id: 'price' })"
							>(Eliminate)</span
						>
					</div>
					<div class="double-input-container">
						<multiselect
							@input="$route.name == 'searchResults' ? fireSearch() : null"
							class="dropdown"
							v-model="filters.priceFrom"
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
							v-model="filters.priceTo"
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
					<div class="label-container">
						<label for="condition">Fuel:</label
						><span
							v-if="filters.fuel"
							class="eliminate-filter"
							@click="removeFilter({ id: 'fuel' })"
							>(Eliminate)</span
						>
					</div>
					<multiselect
						@input="$route.name == 'searchResults' ? fireSearch() : null"
						class="dropdown"
						v-model="filters.fuel"
						:options="fuelOptions"
						:searchable="false"
						:show-labels="false"
						placeholder="All"
					></multiselect>
				</div>
				<div class="field">
					<div class="label-container">
						<label for="condition">Transmission:</label>
						<span
							v-if="filters.transmission"
							class="eliminate-filter"
							@click="removeFilter({ id: 'transmission' })"
							>(Eliminate)</span
						>
					</div>
					<multiselect
						@input="$route.name == 'searchResults' ? fireSearch() : null"
						class="dropdown"
						v-model="filters.transmission"
						:options="transmissionOptions"
						:searchable="false"
						:show-labels="false"
						placeholder="All"
					></multiselect>
				</div>
				<div class="field">
					<div class="label-container">
						<label for="drivetrain">Traction:</label>
						<span
							v-if="filters.driveTrain"
							class="eliminate-filter"
							@click="removeFilter({ id: 'driveTrain' })"
							>(Eliminate)</span
						>
					</div>
					<multiselect
						@input="$route.name == 'searchResults' ? fireSearch() : null"
						class="dropdown"
						v-model="filters.driveTrain"
						:options="drivetrainOptions"
						:searchable="false"
						:show-labels="false"
						placeholder="All"
					></multiselect>
				</div>
				<div class="field">
					<div class="label-container">
						<label for="condition">Engine:</label>
						<span
							v-if="filters.engine"
							class="eliminate-filter"
							@click="removeFilter({ id: 'engine' })"
							>(Eliminate)</span
						>
					</div>
					<multiselect
						@input="$route.name == 'searchResults' ? fireSearch() : null"
						class="dropdown"
						v-model="filters.engine"
						:options="engineOptions"
						:searchable="false"
						:show-labels="false"
						placeholder="All"
					></multiselect>
				</div>
				<div class="field">
					<div class="label-container">
						<label for="condition">Color:</label>
						<span
							v-if="filters.color"
							class="eliminate-filter"
							@click="removeFilter({ id: 'color' })"
							>(Eliminate)</span
						>
					</div>
					<multiselect
						@input="$route.name == 'searchResults' ? fireSearch() : null"
						class="dropdown"
						v-model="filters.color"
						:options="colorOptions"
						:searchable="false"
						:show-labels="false"
						placeholder="All"
					></multiselect>
				</div>
				<div class="field">
					<div class="label-container">
						<label for="condition">Seller:</label>
						<span
							v-if="filters.dealerId"
							class="eliminate-filter"
							@click="removeFilter({ id: 'dealerId' })"
							>(Eliminate)</span
						>
					</div>
					<multiselect
						@input="$route.name == 'searchResults' ? fireSearch() : null"
						class="dropdown"
						v-model="filters.dealerId"
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
.flat-btn {
	flex: 1;
	transition: all 0.3s ease-in-out;
	word-break: break-all;
	color: $light;
	font: $font-text-bold;
	display: grid;
	place-items: center;
	border: 0.5px solid $light;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	&:hover {
		transform: scale(1.01);
		cursor: pointer;
	}
}
// .clear-btn {
// 	padding: 0.2em;
// 	border: 1px solid $primary;
// 	cursor: pointer;
// 	font: $font-text-bold;
// 	color: $dark;
// 	margin-bottom: 0.3em;
// }
.advance-search {
	padding-bottom: 3em;
	// background: $dark;
	padding-inline: 0.5em;
}
.label-container {
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.5em;
}
.eliminate-filter {
	color: $light;
	border: 1px solid $primary;
	border-radius: 10px;
	cursor: pointer;
	font: $font-text;
}

.btn-container {
	height: 3em;
	margin: 1.5em 0 2em;
	display: flex;
	gap: 1em;
	justify-content: space-around;
}
.btn-search {
	flex: 1;
	height: 100%;
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
