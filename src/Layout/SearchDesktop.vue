<script>
import { mapGetters, mapMutations } from "vuex";
import SearchBtn from "../components/searchFieldMobile/SearchBtn.vue";
import HomeSearchForm from "../components/homeSearchForm.vue";
import Multiselect from "vue-multiselect";
import MartzIcons from "../components/MartzIcons.vue";
// import PriceYear from "./priceYearDesktop.vue";
export default {
	components: {
		SearchBtn,
		Multiselect,
		MartzIcons,
		HomeSearchForm,
	},
	data() {
		return {
			filtersSelected: {},
		};
	},

	methods: {
		...mapMutations("vehicles", ["UPDATE_FILTERS", "FILTER_VEHICLES"]),

		fireSearch() {
			this.UPDATE_FILTERS(this.filtersSelected);
			this.FILTER_VEHICLES();
			this.$router.replace({ name: "searchResults" });
		},
		searchFromType(type) {
			this.filtersSelected.carType = type;
		},
	},

	computed: {
		...mapGetters("vehicles", ["vehiclesList"]),
		cartypes() {
			return [
				...new Set(this.vehiclesList.map((x) => x.carType.toLowerCase())),
			];
		},
	},
};
</script>
<template>
	<div class="search-type-wrapper">
		<div class="search-types">
			<p class="search-title-desktop"><span> Searcch</span> your Vehicles!</p>
			<HomeSearchForm />
		</div>
		<div class="search-types">
			<p class="search-title-desktop"><span> Types</span> of Vehicles</p>
			<ul class="typesCarList">
				<li
					v-for="(type, key) in cartypes"
					:key="key"
					@click="
						searchFromType(type);
						fireSearch();
					"
				>
					<MartzIcons :icon="type" size="80" />
					<p>{{ type }}</p>
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
