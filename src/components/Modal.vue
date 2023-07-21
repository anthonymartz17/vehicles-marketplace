<template>
	<transition
		enter-active-class="animate__animated animate__fadeIn animate__faster"
		leave-active-class="animate__animated animate__fadeOut animate__faster"
	>
		<div
			class="selected-field-options"
			v-show="$store.state.optionsCardToggler"
			@click="toggleOptionsCard($event)"
		>
			<div class="selected-field-options-card">
				<div
					v-for="(field, key) in clickedFieldContent.type"
					:id="clickedFieldContent.id"
					:value="field"
					:key="key"
					:class="[
						'selected-field-options-card-content',
						{
							'card-content-disabled':
								clickedFieldContent.id == 'model' &&
								filters.make.typeSelected == '',
							disabledOptions:
								(clickedFieldContent.id === 'priceTo' &&
									pricesUnavailable != null &&
									key < pricesUnavailable) ||
								(clickedFieldContent.id === 'yearTo' &&
									yearsUnavailable != null &&
									key < yearsUnavailable),
							rememberSelection:
								clickedFieldContent.typeSelected != '' &&
								field == clickedFieldContent.typeSelected,
						},
					]"
					:for="key"
					@click.stop="
						assignValueToTypeSelected($event, field);
						toggleOptionsCard($event);
						selectModelByMake({ $event, id: clickedFieldContent.id });
						disablePricesYears({ id: clickedFieldContent.id, key });
					"
				>
					<template
						v-if="
							clickedFieldContent.id == 'priceFrom' ||
								clickedFieldContent.id == 'priceTo'
						"
						>{{ field | currency }}</template
					>
					<template v-else>{{ field }}</template>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
	computed: {
		...mapState([
			"filters",
			"modalToggler",
			"optionsCardToggler",
			"clickedFieldContent",
			"pricesUnavailable",
			"yearsUnavailable",
			"checked",
		]),
	},
	methods: {
		...mapMutations([
			"testAssign",
			"remSelection",
			"toggleOptionsCard",
			"assignValueToTypeSelected",
			"selectModelByMake",
			"formatPrice",
			"disablePricesYears",
			"checkField",
		]),
	},
};
</script>

<style lang="scss">
.rememberSelection {
	background: $lightestDark;
}
</style>
