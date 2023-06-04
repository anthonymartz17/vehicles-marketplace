<script>
import { mapGetters, mapMutations } from "vuex";
import Multiselect from "vue-multiselect";
import SearchBtn from "../components/searchFieldMobile/SearchBtn.vue";
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
	computed: {
		...mapGetters("vehicles", ["vehiclesList"]),
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
	methods: {
		...mapMutations("filterOptions", ["SET_MODEL_OPTIONS"]),

		...mapMutations("vehicles", ["UPDATE_FILTERS", "FILTER_VEHICLES"]),

		fireSearch() {
			this.UPDATE_FILTERS(this.filtersSelected);
			this.FILTER_VEHICLES();
			this.$router.replace({ name: "searchResults" });
		},
	},
};
</script>
<template>
	<form action="">
		<div class="advance-search">
			<div class="">
				<h5 class="sub-title">Advanced Search!</h5>
				<div>
					<div class="field">
						<label for="condition">Type of Car:</label>
						<multiselect
							class="dropdown"
							v-model="filtersSelected.carType"
							:options="carTypeOptions"
							:searchable="false"
							:show-labels="false"
							placeholder="Select a type"
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
			</div>
			<div>
				<h5 class="sub-title">Price and Condition</h5>
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
			</div>
			<div class="blocks-container">
				<h5 class="sub-title">More Options</h5>
				<div class="field">
					<label for="condition">Fuel:</label>
					<multiselect
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
					<multiselect
						class="dropdown"
						v-model="filtersSelected.transmission"
						:options="transmissionOptions"
						:searchable="false"
						:show-labels="false"
						placeholder="All"
					></multiselect>
				</div>
				<div class="field">
					<label for="condition">Traction:</label>
					<multiselect
						class="dropdown"
						v-model="filtersSelected.drivetrain"
						:options="drivetrainOptions"
						:searchable="false"
						:show-labels="false"
						placeholder="All"
					></multiselect>
				</div>
				<div class="field">
					<label for="condition">Engine:</label>
					<multiselect
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
					<multiselect
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
					<multiselect
						class="dropdown"
						v-model="filtersSelected.color"
						:options="colorOptions"
						:searchable="false"
						:show-labels="false"
						placeholder="All"
					></multiselect>
				</div>
			</div>
			<div class="btn-container">
				<div class="btn-search" @click="fireSearch()">Search</div>
			</div>
		</div>
	</form>
</template>

<style lang="scss">
.advance-search {
	padding-bottom: 3em;
	background: $dark;
	padding-inline: 0.5em;
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
