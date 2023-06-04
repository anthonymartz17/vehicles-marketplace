<template>
	<div>
		
	</div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
	data() {
		return {
			filterSelected:{},
			priceOrYear: [],
		};
	},
	methods: {
		...mapMutations([
			"toggleOptionsCard",
			"updateClickedFieldContent",
			"formatPrice",
		]),
	},
	computed: {
		...mapState(["filters"]),

		// price formatter function is throwing undefined

		priceYear() {
			function formatPrice(value) {
				let val = (value / 1).toFixed(2).replace(".", ",");
				return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
			}

			let priceFrom, priceTo, yearFrom, yearTo;

			if (this.filters.priceFrom.typeSelected == 0) {
				priceFrom = "Price From";
			} else {
				priceFrom = `$${formatPrice(this.filters.priceFrom.typeSelected)}`;
			}
			if (this.filters.priceTo.typeSelected == 0) {
				priceTo = "Price To";
			} else {
				priceTo = `$${formatPrice(this.filters.priceTo.typeSelected)}`;
			}
			if (this.filters.yearFrom.typeSelected == 0) {
				yearFrom = "Year From";
			} else {
				yearFrom = this.filters.yearFrom.typeSelected;
			}
			if (this.filters.yearTo.typeSelected == 0) {
				yearTo = "Year to";
			} else {
				yearTo = this.filters.yearTo.typeSelected;
			}

			return [
				{ field: priceFrom, id: "priceFrom" },
				{ field: priceTo, id: "priceTo" },
				{ field: yearFrom, id: "yearFrom" },
				{ field: yearTo, id: "yearTo" },
			];
		},
	},
};
</script>

<style lang="scss" scoped>
.price-year-wrapper {
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 0.2em;
}
</style>