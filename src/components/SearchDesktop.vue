<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
import SearchBtn from "./searchFieldMobile/SearchBtn.vue";
import PriceYear from "./priceYearDesktop.vue";
export default {
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
	components: {
		SearchBtn,
		PriceYear,
	},
	methods: {
		...mapMutations([
			"assignValueToTypeSelected",
			"searchVehicles",
			"setDataInVehiclesDisplayFromLocal",
			"selectModelByMake",
			"disablePricesYears",
			"updateInputTextUser",
		]),
		...mapMutations("filterOptions", ["SET_MODEL_OPTIONS"]),
		...mapActions(["getCarsData"]),
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
					<p>{{ modelOptions }}dd</p>
					<select
						name="condition"
						id="condition"
						v-model="filtersSelected.carCondition"
					>
						<option v-for="(condition, key) in carConditionOptions" :key="key">
							{{ condition }}
						</option>
					</select>
				</div>

				<div class="field">
					<label for="make">Make:</label>
					<select
						name="make"
						id="make"
						v-model="filtersSelected.make"
						@click="
							SET_MODEL_OPTIONS({
								list: vehiclesList,
								make: filtersSelected.make,
							})
						"
					>
						<option v-for="(make, key) in makeOptions" :key="key">
							{{ make }}
						</option>
					</select>
				</div>

				<div class="field">
					<label for="model">Model:</label>
					<select v-model="filtersSelected.model" name="model" id="model">
						<option v-for="(model, key) in modelOptions" :key="key">
							{{ model }}
						</option>
					</select>
				</div>
				<div>
					<PriceYear />
				</div>

				<SearchBtn />
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

.field {
	height: 3em;
	margin-block: 0.2em;
	display: flex;
	align-items: center;

	label {
		flex: 1;
		font: $font-mobile-m-bold;
		color: $dark;
	}

	select {
		flex: 3;
		font: $font-mobile-m-bold;
		color: $dark;
		padding: 0.2em;
	}
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
