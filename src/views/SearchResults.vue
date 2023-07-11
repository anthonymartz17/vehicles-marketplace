<script>
import VehiclesDisplay from "../components/VehiclesDisplay.vue";
// import SideSearch from "../components/sideBarSearch.vue";
import Multiselect from "vue-multiselect";
import { mapGetters, mapMutations, mapState } from "vuex";
import FullSearchForm from "../components/full-search-form.vue";

export default {
	components: {
		VehiclesDisplay,
		// SideSearch,
		Multiselect,
		FullSearchForm,
	},
	data() {
		return {
			selectedSortId: "",
			sortingOptions: [
				{ name: "Lowest price first", id: "lowestPrice" },
				{ name: "Highest price first", id: "highestPrice" },
				{ name: "Highest mileage first", id: "highestMileage" },
				{ name: "Lowest mileage first", id: "lowestMileage" },
				{ name: "Newest first (by Car year)", id: "newest" },
				{ name: "Oldest first (by Car year)", id: "oldest" },
			],
		};
	},
	methods: {
		...mapMutations("vehicles", [
			"SORT_VEHICLES",
			"UPDATE_FILTERS",
			"FILTER_VEHICLES",
		]),
		fireRemoveFilter(id) {
			if (id == "yearFrom" || id == "yearTo") {
				id = "year";
			}
			if (id == "priceFrom" || id == "priceTo") {
				id = "price";
			}
			this.$refs.removeFilter.removeFilter({ id });
		},
		fireClearFilters() {
			this.$refs.removeFilter.clearFilters();
		},
	},
	beforeDestroyed() {
		this.fireClearFilters();
	},

	computed: {
		...mapGetters("vehicles", ["appliedFilters"]),
		// appliedFilters() {
		// 	let list = Object.keys(this.filters).reduce((acc, key) => {
		// 		const value = this.filters[key];
		// 		if (value !== "" && value !== 0 && value !== null) {
		// 			acc[key] = value;
		// 		}
		// 		return acc;
		// 	}, {});
		// 	// only keeps first word that s before cap lette. so priceFrom,priceto become price and its only one word in the array reffereing to the price. same with year.
		// 	let finalList = Object.keys(list).map((one) => {
		// 		const match = one.match(/[A-Z]/);
		// 		return one.split(match)[0];
		// 	});
		// 	//get rid of duplicate elements in the array
		// 	return [...new Set(finalList)];
		// },
	},
};
</script>
<template>
	<div class="resultsWrapper">
		<div class="sort-filter-wrapper">
			<div class="sort">
				<multiselect
					v-model="selectedSortId"
					:options="sortingOptions.map((x) => x.id)"
					:custom-label="
						(opt) => {
							const selected = sortingOptions.find((x) => x.id == opt);
							return selected.name;
						}
					"
					:searchable="false"
					:show-labels="false"
					placeholder="Sort by:"
					@input="SORT_VEHICLES(selectedSortId)"
				></multiselect>
			</div>
			<div class="applied-filters">
				<h3
					@click="fireClearFilters"
					v-show="appliedFilters.length > 0"
					class="clear-btn"
				>	Clear	{{ appliedFilters.length }} filter<span
						v-show="appliedFilters.length > 1"
						>s</span
					>
				</h3>
			</div>
		</div>
		<div class="sideSearch">
			<!-- <SideSearch /> -->
			<FullSearchForm ref="removeFilter" />
		</div>

		<div class="results">
			<VehiclesDisplay />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.clear-btn {
	padding: 0.2em;
	border: 1px solid $primary;
	cursor: pointer;
	font: $font-text-bold;
	color: $dark;
	margin-bottom: 0.3em;
	display: flex;
}
.resultsWrapper {
	@include desktop {
		display: grid;
		grid-template-columns: 1fr 4fr;
		grid-template-areas:
			"sideSearch head head"
			"sideSearch results results"
			"sideSearch results results";
	}
}
.sort-filter-wrapper {
	display: none;
	@include desktop {
		grid-area: head;
		display: flex;
		gap: 1em;
		align-items: baseline;
		padding-inline: 0.5em;
	}
}

.sort {
	display: none;
	@include desktop {
		display: flex;
		width: 15em;
		padding: 0.2em;
	}
}
.applied-filters {
	display: flex;
	flex-wrap: wrap;
	gap: 0.5em;
}

.filter-applied {
	background: $dark;
	color: $light;
	font: $font-mobile-m-bold;
	border: 1px solid;
	display: flex;
	justify-content: space-between;
	align-items: baseline;

	p {
		flex: 1;
		padding-inline: 0.2em;
	}
	button {
		cursor: pointer;
		background: $primary;
		color: $light;
		padding: 0.2em;
	}
}
.results {
	// padding-inline: 1em;
	height: 100%;
	position: sticky;
	top: 10px;
}
.sideSearch {
	display: none;
	@include desktop {
		display: block;
		grid-area: sideSearch;
		background: $dark;
		// padding-inline: 1em;
	}
}
</style>
