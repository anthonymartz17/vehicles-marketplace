<!-- <template>
	<div>
		<div class="search-fields-container">
			<p class="search-fields-container-title">More Options</p>
			<div
				v-for="(field, key) in moreOptionsComputed"
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
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
	methods: {
		...mapMutations([
			"toggleOptionsCard",
			"updateClickedFieldContent",
			"selectedFieldData",
		]),
	},
	computed: {
		...mapState(["clickedFieldContent","filters"]),

		...mapGetters(["advanceSearchFieldsMobile"]),

		moreOptionsComputed() {
			let fuel, transmission, driveTrain, engine, color;
			if (this.filters.fuel.typeSelected == "") {
				fuel = "Fuel";
			} else {
				fuel = this.filters.fuel.typeSelected;
			}
			if (this.filters.transmission.typeSelected == "") {
				transmission = "transmission";
			} else {
				transmission = this.filters.transmission.typeSelected;
			}
			if (this.filters.driveTrain.typeSelected == "") {
				driveTrain = "DriveTrain";
			} else {
				driveTrain = this.filters.driveTrain.typeSelected;
			}
			if (this.filters.engine.typeSelected == "") {
				engine = "Engine";
			} else {
				engine = this.filters.engine.typeSelected;
			}
			if (this.filters.color.typeSelected == "") {
				color = "Color";
			} else {
				color = this.filters.color.typeSelected;
			}
			return [
				{ field: fuel, id: "fuel" },
				{ field: transmission, id: "transmission" },
				{ field: driveTrain, id: "driveTrain" },
				{ field: engine, id: "engine" },
				{ field: color, id: "color" },
			];
		},
	},
};
</script>

<style lang="scss" scoped></style> -->