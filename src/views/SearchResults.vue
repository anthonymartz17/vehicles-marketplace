<script>
import VehiclesDisplay from "../components/VehiclesDisplay.vue";
import SideSearch from "../components/sideBarSearch.vue";
import Multiselect from "vue-multiselect";
import { mapMutations } from "vuex";

export default {
	components: {
		VehiclesDisplay,
		SideSearch,
		Multiselect,
	},
	data() {
		return {
			selectedSortId:'',
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
		...mapMutations("vehicles", ["SORT_VEHICLES"]),
	},
};
</script>
<template>
	<div class="resultsWrapper">
		<div class="sort-ad-wrapper">
			<div class="sort">
				<multiselect
				v-model="selectedSortId"
					:options="sortingOptions.map((x) => x.id)"
					:custom-label="(opt)=>{
						const selected = sortingOptions.find(x => x.id == opt)
						return selected.name
					}"
					:searchable="false"
					:show-labels="false"
					placeholder="Sort by:"
					@input="SORT_VEHICLES(selectedSortId)"
				></multiselect>

				<!-- <select name="sort" id="sort" @input="SORT_VEHICLES()">
					<option :value="null">Sort by</option>
					<option
						:value="filter.id"
						v-for="(filter, key) in filters"
						:key="key"
					>
						{{ filter.sortby }}
					</option>
				</select> -->
			</div>
		</div>
		<div class="sideSearch">
			<SideSearch />
		</div>

		<div class="results">
			<VehiclesDisplay />
		</div>
	</div>
</template>

<style lang="scss" scoped>
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
.sort-ad-wrapper {
	display: none;
	@include desktop {
		grid-area: head;
		display: flex;
	}
}

.sort {
	display: none;
	@include desktop {
		display: flex;
		flex: 1;
		align-items: flex-end;
		padding: 0.2em;

		select {
			height: 2em;
			border: 1px solid $lightestDark;
			font: $font-mobile-m-bold;
		}
	}
}
.results {
	height: 100%;
	position: sticky;
	top: 10px;
}
.sideSearch {
	display: none;
	@include desktop {
		display: block;
		grid-area: sideSearch;
		padding-inline: 1em;
	}
}
</style>
