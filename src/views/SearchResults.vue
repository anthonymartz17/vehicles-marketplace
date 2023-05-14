<template>
	<div class="resultsWrapper">
		<div class="sort-ad-wrapper">
			<div class="sort">
				<select name="sort" id="sort" @input="sortBy">
					<option :value="null">Sort by</option>
					<option
						:value="filter.id"
						v-for="(filter, key) in filters"
						:key="key"
					>
						{{ filter.sortby }}
					</option>
				</select>
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

<script>
import VehiclesDisplay from "../components/VehiclesDisplay.vue";
import SideSearch from "../components/sideBarSearch.vue";
import { mapMutations } from "vuex";

export default {
	created() {
		this.setDataInVehiclesDisplayFromLocal();
	},

	components: {
		VehiclesDisplay,
		SideSearch,
	},
	methods: {
		...mapMutations(["setDataInVehiclesDisplayFromLocal", "sortBy"]),
	},
	computed: {
		filters() {
			return [
				{ sortby: "Lowest price first", id: "lowestPrice" },
				{ sortby: "Highest price first", id: "highestPrice" },
				{ sortby: "Highest mileage first", id: "highestMileage" },
				{ sortby: "Lowest mileage first", id: "lowestMileage" },
				{ sortby: "Newest first (by Car year)", id: "newest" },
				{ sortby: "Oldest first (by Car year)", id: "oldest" },
			];
		},
	},
};
</script>

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
