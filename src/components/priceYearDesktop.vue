<template>
	<div class="price-year-desk-wrappert">
		<div
			:class="[
				'field',
				{ 'when-sideSearch-view': $route.name == 'searchResults' },
			]"
		>
			<label>Year:</label>
			<div class="spacing-years-price">
				<select
					name="yearFrom"
					id="yearFrom"
					@input="onChangeMultiple($event)"
				>
					<option :value="null">From</option>
					<template v-for="(yearFrom, key) in filters.yearFrom.type">
						<option :key="key" :selected="yearFrom == filters.yearFrom.typeSelected">
							{{ yearFrom }}
						</option>
					</template>
				</select>
				<select name="yearTo" id="yearTo" @input="onChangeMultiple($event)">
					<option :value="null">To</option>
					<template v-for="(yearTo, key) in filters.yearTo.type">
						<option
							:key="key"
							:disabled="
								yearsUnavailable != null && key < yearsUnavailable
							"
							:class="{
								disabledOptions:
									yearsUnavailable != null && key < yearsUnavailable,
							}"
							:selected="yearTo == filters.yearTo.typeSelected"
						>
							{{ yearTo }}
						</option>
					</template>
				</select>
			</div>
		</div>
		<div
			:class="[
				'field ',
				{ 'when-sideSearch-view': $route.name == 'searchResults' },
			]"
		>
			<label for="priceFrom">Price:</label>
			<div class="spacing-years-price">
				<select
					name="priceFrom"
					id="priceFrom"
					@input="onChangeMultiple($event)"
					
				>
				<!-- working on lines bellow, prices and years not showing when going from home search to sidebar search -->
					<option :value="null">From</option>
					<!-- <option :value="null">{{filters.priceFrom.typeSelected == 0 ? "from":filters.priceFrom.typeSelected | currency }}</option> -->
					<template v-for="(priceFrom, key) in filters.priceFrom.type">
						<option :key="key" :selected="priceFrom == filters.priceFrom.typeSelected" >
							{{ priceFrom | currency }}
						</option>
					</template>
				</select>
				<select
					name="priceTo"
					id="priceTo"
					@input="onChangeMultiple($event)"
				>
					<option :value="null">To</option>
					<template v-for="(priceTo, key) in filters.priceTo.type">
						<option
							:disabled="
								pricesUnavailable != null && key < pricesUnavailable
							"
							:class="{
								disabledOptions:
									pricesUnavailable != null && key < pricesUnavailable,
							}"
							:key="priceTo"
							:selected="priceTo == filters.priceTo.typeSelected"
						>
							{{ priceTo | currency }}
						</option>
					</template>
				</select>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
	methods: {
		onChangeMultiple(e) {
			this.assignValueToTypeSelected(e);
			this.disablePricesYears({
				id: e.target.id,
				key: e.target.selectedIndex,
			});
			if (this.$route.name === "searchResults") {
				this.searchVehicles();
				this.setDataInVehiclesDisplayFromLocal();
			}
		},

		...mapMutations([
			"assignValueToTypeSelected",
			"disablePricesYears",
			"searchVehicles",
			"setDataInVehiclesDisplayFromLocal",
		]),
	},
	computed: {
		
		...mapState([
			"filters",
			"pricesUnavailable",
			"yearsUnavailable",
		]),
	},
};
</script>

<style lang="scss" scoped>
.disabledOptions {
	background: darken($light, 10%);
	text-decoration: line-through;
}
.spacing-years-price {
	display: flex;
	gap: 1em;
	flex: 3;
}

.field {
	display: flex;
	margin-bottom: 1.5em;

	label {
		font: $font-mobile-m-bold;
		color: $dark;
		flex: 1;
	}

	select {
		font: $font-mobile-m-bold;
		color: $dark;
		padding: 0.2em;
		flex: 1;
	}
}

.when-sideSearch-view {
	flex-direction: column;
}
</style>
