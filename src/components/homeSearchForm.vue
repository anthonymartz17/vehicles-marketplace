<script>
import { mapGetters, mapState, mapActions } from "vuex";
import SearchBtn from "./searchFieldMobile/SearchBtn.vue";
import Multiselect from "vue-multiselect";
import MartzIcons from "@/components/MartzIcons.vue";
export default {
	components: {
		SearchBtn,
		Multiselect,
		MartzIcons,
	},
	data() {
		return {
			searchLabels: ["Condition", "Make", "Model", "Year", "Price"],
		};
	},

	methods: {
		...mapActions("filterOptions", ["setModelOptions"]),
		...mapActions("vehicles", ["updateFilters", "filterVehicles"]),

		fireSearch() {
			this.filterVehicles();
			this.$router.replace({ name: "searchResults" });
		},
		searchFromType(type) {
			this.filters.carType = type;
		},
	},

	computed: {
		...mapState("vehicles", ["filters"]),
		...mapGetters("vehicles", ["vehiclesList"]),
		filters: {
			get() {
				return this.$store.state.vehicles.filters;
			},
			set(newvalue) {
				this.updateFilters(newvalue);
			},
		},
		cartypes() {
			return [
				...new Set(this.vehiclesList.map((x) => x.carType.toLowerCase())),
			];
		},

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
	<form class="form">
		<div :class="['field', { 'align-block': $route.name == 'searchResults' }]">
			<label class="field-label" for="condition">Condition:</label>
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

		<div :class="['field', { 'align-block': $route.name == 'searchResults' }]">
			<label class="field-label" for="condition">Make:</label>
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

		<div :class="['field', { 'align-block': $route.name == 'searchResults' }]">
			<label for="condition">Model:</label>
			<multiselect
				@input="$route.name == 'searchResults' ? fireSearch() : null"
				class="dropdown"
				v-model="filters.model"
				:options="modelOptions"
				:searchable="false"
				:show-labels="false"
				:placeholder="
					filters.make && filters.make !== 'All Makes'
						? `All ${filters.make}S`
						: 'All Models'
				"
			></multiselect>
		</div>
		<div :class="['field', { 'align-block': $route.name == 'searchResults' }]">
			<label for="condition">Year:</label>
			<div
				:class="[
					'double-input-container',
					{ 'full-width': $route.name == 'searchResults' },
				]"
			>
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
		<div :class="['field', { 'align-block': $route.name == 'searchResults' }]">
			<label for="condition">Price:</label>
			<div
				:class="[
					'double-input-container',
					{ 'full-width': $route.name == 'searchResults' },
				]"
			>
				<multiselect
					@input="$route.name == 'searchResults' ? fireSearch() : null"
					class="dropdown"
					v-model="filters.priceFrom"
					:options="priceOptionsDynamic.from.map((x) => x.fromNumType)"
					:custom-label="
						(opt) => {
							return priceOptionsDynamic.from.find((x) => x.fromNumType == opt)
								.fromFormatted;
						}
					"
					:searchable="false"
					:show-labels="false"
					placeholder="From"
				></multiselect>
				<multiselect
					@input="$route.name == 'searchResults' ? fireSearch() : null"
					class="dropdown"
					v-model="filters.priceTo"
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

		<div v-show="$route.name !== 'searchResults'" class="btn-container">
			<div class="btn-search" @click="fireSearch()">Search</div>
		</div>
	</form>
</template>

<style lang="scss" scoped>
.types-icon-container {
	max-height: 100%;
}
// .typesCarList {
// 	height: 100%;
// 	list-style: none;
// 	display: grid;
// 	grid-template-columns: 1fr 1fr;
// 	gap: 2em;
// 	flex-wrap: wrap;
// 	flex: 2;

// 	li {
// 		flex: 1;
// 		display: flex;
// 		flex-direction: column;
// 		align-items: center;
// 		justify-content: center;
// 		transition: all 0.3s ease-in-out;
// 		&:hover {
// 			background: lighten($lightestDark, 35);
// 		}

// 		p {
// 			font: $font-text-bold;
// 			pointer-events: none;
// 		}
// 		.routerlink {
// 			height: 100%;
// 		}
// 	}
// }
.type-cars-icons {
	max-width: 40%;
	pointer-events: none;
}

.search-type-wrapper {
	display: none;
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
.full-width {
	width: 100%;
}
.dropdown {
	flex: 3;
}
.carCondition {
	// display: none;
}
.field {
	margin-bottom: 1em;

	align-items: center;
	font: $font-mobile-m-bold;

	label {
		flex: 1;
		// color: $light;
	}

	// select {
	// 	flex: 3;
	// 	font: $font-mobile-m-bold;
	// 	color: $dark;
	// 	padding: 0.2em;
	// }
}

.align-block {
	flex-direction: column;
	align-items: flex-start;
}
.btn-container {
	height: 3em;
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
	height: 100%;
	outline: none;
	border: none;
}
.btn-advanceSearch {
	background: $dark;
	color: $primary;
	display: grid;
	place-items: center;
}

.form {
	@include breakpoint(tablet) {
	}
	@include breakpoint(desktop) {
		.search-type-wrapper {
			display: flex;
			gap: 1em;
			margin-block: 1em;
		}
		.field {
			display: flex;

			label {
				color: $dark;
			}
		}
		.btn-container {
			display: flex;
			justify-content: flex-end;
			margin-top: 1em;
		}
	}
}
</style>
