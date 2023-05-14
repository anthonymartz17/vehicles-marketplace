<template>
	<div>
		<div class="makeModel-wrapper">
			<div
				class="search-fields-container-field"
				v-for="(field, key) in makeModel"
				:key="key"
				@click="
					toggleOptionsCard($event);
					updateClickedFieldContent(field.id);
				"
			>
				<p>{{ field.field }}</p>
				<i class="fas fa-caret-down"></i>
			</div>
		</div>
	</div>
</template>

<script>
import {mapMutations, mapState} from "vuex";
export default {
	methods: {
		...mapMutations(["toggleOptionsCard", "updateClickedFieldContent"]),
	},
	computed: {
		...mapState(["filters"]),
		// working here for mobile view?????????????
		makeModel() {
			let selectedMake = this.filters.make.typeSelected,
				selectedModel = this.filters.models.typeSelected,
				make,
				model;

			if (selectedMake === "") make = "Make";
			else make = selectedMake;

			if (selectedModel === "") model = "Model";

			if (
				selectedMake !== "All Makes" &&
				selectedMake !== "" &&
				selectedModel === ""
			) {
				model = `All ${selectedMake}`;
			}
			if (selectedModel !== "") model = selectedModel;
			
			return [
				{field: make, id: "make"},
				{field: model, id: "model"},
			];
		},
	},
};
</script>

<style lang="scss" scoped>
.makeModel-wrapper {
	display: grid;
	grid-template-columns: 1fr;
}
</style>
