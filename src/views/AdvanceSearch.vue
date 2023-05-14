<template>
	<div class="advance-search">
		<div class="search-fields-container">
			<p class="search-fields-container-title">Advance Search!</p>
			<div
				class="search-fields-container-field"
				@click="
					toggleOptionsCard($event);
					updateClickedFieldContent(carTypeComputed.id);
				"
			>
				<p>{{ carTypeComputed.field }}</p>
				<i class="fas fa-caret-down"></i>
			</div>
			<MakeModel />
		</div>
		<div class="search-fields-container">
			<p class="search-fields-container-title">Price and Condition</p>
			<div
				v-for="(field, key) in carConditionComputed"
				:key="key"
				class="search-fields-container-field"
				@click="
					toggleOptionsCard($event);
					updateClickedFieldContent(field.id);
				"
			>
				<p>{{ field.field }}</p>
				<i class="fas fa-caret-down"></i>
			</div>
			<PriceYear />
		</div>

		<MoreOptions />

		<SearchBtn />
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import MakeModel from "../components/searchFieldMobile/MakeModel.vue";
import PriceYear from "../components/searchFieldMobile/PriceYear.vue";
import MoreOptions from "../components/searchFieldMobile/MoreOptions.vue";
import SearchBtn from "../components/searchFieldMobile/SearchBtn.vue";
export default {
	components: {
		MakeModel,
		PriceYear,
		MoreOptions,
		SearchBtn,
	},

	computed: {
		...mapGetters(["advanceSearchFieldsMobile"]),
		carTypeComputed() {
			let cartype;
			if (this.$store.state.filters.carType.typeSelected == "") {
				cartype = "Car Types";
			} else {
				cartype = this.$store.state.filters.carType.typeSelected;
			}
			return { field: cartype, id: "carType" };
		},
		carConditionComputed() {
			let condition;
			if (this.$store.state.filters.carCondition.typeSelected == "") {
				condition = "New/Used";
			} else {
				condition = this.$store.state.filters.carCondition.typeSelected;
			}
			return [{ field: condition, id: "condition" }];
		},
	},
	methods: {
		...mapMutations(["toggleOptionsCard", "updateClickedFieldContent"]),
	},
};
</script>

<style lang="scss">
.advance-search {
	height: 100%;
	padding-bottom: 3em;
	background: $dark;
}

.btnPosition {
	position: fixed;
	bottom: 0em;
}
</style>