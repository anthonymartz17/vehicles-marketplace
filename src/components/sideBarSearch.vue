<template>
	<div class="sideBar">
		<div class="field-and-checkbox">
			<div class="field">
				<label for="typeIn">Make | Model | Type of Vehicle</label>
				<!-- added searchbyinput on focus, so that when the user clicks out but clicks back in the field and there is still something written, the search fires. -->
				<input
					placeholder=" Search your Vehicle"
					@focus="fireSearchByInputText($event)"
					@input="searchAfterFinishTyping"
					class="field-box"
					id="userInputId"
					type="text"
					:value="inputTextUser"
				/>
				<div class="inputDropDown" v-show="showDropDownTextField">
					<div v-if="dropDownError">
						<p>{{ dropDownErrorMsg }}</p>
					</div>
					<div v-else>
						<div v-show="filters.make.typeSelected != ''">
							<p class="list-title">Make</p>
							<p
								class="hover-list"
								id="make"
								@click="
									onChangeMultiple($event);
									selectModelByMake({$event, id: 'make'});
								"
								>{{ filters.make.typeSelected }}</p
							>
						</div>
						<div v-show="filters.carType.typeSelected != ''">
							<p class="list-title">CarType</p>
							<p
								class="hover-list"
								id="carType"
								@click="
									onChangeMultiple($event);
									selectModelByMake({$event, id: 'make'});
								"
								>{{ filters.carType.typeSelected }}</p
							>
						</div>
						<div>
							<p class="list-title">Models</p>
							<ul>
								<li
									class="hover-list"
									v-for="(model, key) in filters.models.type"
									:key="key"
									id="model"
									@click="
										onChangeMultiple($event);
										selectModelByMake({$event, id: 'make'});
									"
									>{{ model.model }}</li
								>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="field-checkbox">
				<div v-for="(option, key) in filters.fuel.type" :key="key">
					<input
						type="radio"
						:checked="
							option === 'All'
								? filters.fuel.typeSelected === ''
								: option === filters.fuel.typeSelected
						"
						:value="option"
						:id="`fuel ${key}`"
						name="fuel"
						@input="onChangeMultiple($event)"
					/>
					<label :for="`fuel ${key}`">{{ option }}</label>
				</div>
			</div>
			<!-- <div class="year-price">
				<PriceYear />
			</div> -->
			<div
				class="make-models"
				v-if="filters.make.typeSelected !== '' && !showDropDownTextField"
			>
				<p>Models</p>
				<ul :class="['list']">
					<li
						v-for="(model, key) in filters.models.type"
						:key="key"
						:class="{
							selected:
								model.toLowerCase() ===
								filters.models.typeSelected.toLowerCase(),
						}"
					>
						<span id="model" @click="onChangeMultiple($event)">{{
							model
						}}</span>
					</li>
				</ul>
				<small
					id="clear-models"
					@click="
						clearInputTextUser('clear-models');
						clearMakeModel('clear-models');
					"
					v-if="filters.models.typeSelected"
					class="btn-search clear-btn"
					>Clear this filter</small
				>
			</div>
			<div class="make-models">
				<p>Makes</p>
				<ul :class="['listMakes', {showMoreMakes: moreLessMakes}]">
					<li
						v-for="(car, key) in carsData"
						:key="key"
						:class="{selected: car.make === filters.make.typeSelected}"
					>
						<span
							id="make"
							@click="
								onChangeMultiple($event);
								selectModelByMake({$event, id: 'make'});
								clearInputTextUser('clear-models');
								clearMakeModel('clear-models');
							"
							>{{ car.make }}</span
						>
						<span>({{ car.model.length }})</span>
					</li>
				</ul>
				<small
					id="clear-makes"
					@click="
						clearInputTextUser('clear-makes');
						clearMakeModel('clear-makes');
					"
					v-if="filters.make.typeSelected && !showDropDownTextField"
					class="btn-search clear-btn"
					>Clear this filter</small
				>
				<p class="moreMakesBtn" @click="switchMoreMakes">{{
					moreLessMakesBtn
				}}</p>
			</div>
			<div class="other-options-wrapper">
				<p class="title">Other options</p>
				<ul class="other-options-list">
					<li v-for="(filter, key) in otherOptions" :key="key">
						<label>{{ filter.filter }}</label>
						<select
							@input="onChangeMultiple($event)"
							:name="filter.filter"
							:id="filter.id"
						>
							<option
								v-for="(option, key) in filter.options"
								:key="key"
								:selected="option == filters.carCondition.typeSelected"
							>
								<p v-if="filter.id !== 'mileage'">{{ option }}</p>
								<p v-else>{{ option }}</p>
							</option>
						</select>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import {mapMutations, mapState} from "vuex";
// import PriceYear from "./priceYearDesktop.vue";
export default {
	data() {
		return {
			selected: "All Vehicles",
			moreLessMakes: false,
			timer: true,
			isFocused: false,
		};
	},
	components: {
		// PriceYear,
	},
	mounted() {
		this.scrollSelectedMakeOrModelIntoView();
		this.updateInputTextUser();
		// console.log(this.inputTextUser, 'i fired')
	},
	destroyed() {
		this.clearFilters();
	},

	methods: {
		// if user clicked outside textfield, let text in inputtext and focus the textfield again, this methods fires the searchbyinputtext to search again.
		fireSearchByInputText(e) {
			if (this.inputTextUser !== "") {
				this.$store.commit("searchByInputText", e);
			}
		},
		// this function makes sure selected make or model is always into view in the sidebarsearch component, when selection is made from home view.
		scrollSelectedMakeOrModelIntoView() {
			let el = document.querySelectorAll(".selected");
			el.forEach((one) => one.scrollIntoView());
		},
		searchAfterFinishTyping(e) {
			clearTimeout(this.timer);
			this.timer = setTimeout(this.searchByInputText, 1000, e);
		},

		onChangeMultiple(e) {
			this.assignValueToTypeSelected(e);
			this.searchVehicles();
			this.setDataInVehiclesDisplayFromLocal();
			this.scrollSelectedMakeOrModelIntoView();
			this.updateInputTextUser();
		},
		switchMoreMakes() {
			this.moreLessMakes = !this.moreLessMakes;
		},
		clearMakeModel(id) {
			this.$store.commit("clearMakeModel", id);
			this.searchVehicles();
			this.setDataInVehiclesDisplayFromLocal();
		},
		...mapMutations([
			"searchVehicles",
			"filterByRadioBtn",
			"setFuelType",
			"assignValueToTypeSelected",
			"setDataInVehiclesDisplayFromLocal",
			"searchByInputText",
			"hideDropDown",
			"selectModelByMake",
			"clearFilters",
			"clearInputTextUser",
			"updateInputTextUser",
		]),
	},
	computed: {
		moreLessMakesBtn() {
			let text;
			if (this.moreLessMakes === false) {
				text = "Show more makes>>";
			} else {
				text = "Show less makes>>";
			}
			return text;
		},
		// working here on showing models by make
		modelsByMake() {
			let models;
			if (
				this.filters.make.typeSelected !== "" &&
				this.filters.make.typeSelected !== "All Models"
			) {
				models = this.allModels.filter((one) => {
					if (
						one.make.toLowerCase() ===
						this.filters.make.typeSelected.toLowerCase()
					) {
						return one.model;
					}
				});
			}
			return models;
		},
		otherOptions() {
			return [
				{
					id: "carCondition",
					filter: "Condition",
					options: this.filters.carCondition.type,
				},
				{
					id: "transmission",
					filter: "Transmission",
					options: this.filters.transmission.type,
				},
				{
					id: "driveTrain",
					filter: "DriveTrain",
					options: this.filters.driveTrain.type,
				},
				{
					id: "mileage",
					filter: "mileage",
					options: this.filters.mileage.type,
				},
				{
					id: "color",
					filter: "Color",
					options: this.filters.color.type,
				},
				{
					id: "engine",
					filter: "Engine",
					options: this.filters.engine.type,
				},
			];
		},
		...mapState([
			"allModels",
			"carsData",
			"filters",
			"inputTextUser",
			"noResults",
			"showDropDownTextField",
			"dropDownErrorMsg",
		]),

		typeOfCar: {
			get() {
				return this.$store.typeOfCar;
			},
			set(val) {
				this.$store.commit("setTypeOfCar", val);
			},
		},

		dropDownError() {
			return !!this.dropDownErrorMsg;
		},
	},
};
</script>

<style lang="scss" scoped>
.selected {
	color: $primary;
}
.inputDropDown {
	background: $light;
	border-radius: 0px 0px 5px 5px;
	position: absolute;
	width: 100%;
	overflow: auto;
	max-height: 75vh;

	ul {
		list-style: none;

		li {
			border-bottom: 1px solid rgba(128, 128, 128, 0.225);
		}
	}
}
.hover-list {
	transition: 200ms ease-in-out;
	padding: 0.1em 0.5em;
	&:hover {
		background: darken($light, 10);
		cursor: pointer;
	}
}
.list-title {
	background: darken($light, 20);
}
.sideBar {
	background: lighten($lightestDark, 30);
	height: auto;
	padding: 1em;
}

.field {
	font: $font-mobile-m-bold;
	color: $dark;
	position: relative;

	&-box {
		border: 2px solid $lightestDark;
		width: 100%;
		padding-block: 0.3em;
	}
}
.field-checkbox {
	font: $font-mobile-m-bold;
	color: $dark;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 0.3em 1em;
	margin-block: 1em;
	padding-block: 1em;
	border-bottom: 1px solid $lightestDark;
}
.year-price {
	padding-block: 1em;
	border-bottom: 1px solid $lightestDark;
}

.make-models {
	font: $font-mobile-m-bold;
	color: $dark;
	padding-block: 1em;
	border-bottom: 1px solid $lightestDark;

	li {
		list-style: none;
		cursor: pointer;
		transition: 200ms ease-in-out;
		&:hover {
			color: $lightestDark;
		}
	}
}
.clear-btn {
	font-size: 12px;
	border-radius: 10px;
	cursor: pointer;
}
.listMakes {
	padding-left: 1em;
	height: 9em;
	overflow: hidden;
}
.showMoreMakes {
	height: 45vh;
	overflow: auto;
}
.moreMakesBtn {
	cursor: pointer;
	margin-block: 0.5em;
	transition: 200ms ease-in-out;
	&:hover {
		color: $lightestDark;
	}
}
.other-options-wrapper {
	margin-block: 1em;
	.title {
		font: $font-mobile-m-bold;
		margin-block: 1em;
	}
}
.other-options-list {
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	max-width: 16.5em;
	// background: blue;

	li {
		font: $font-mobile-s-bold;
		max-width: 100%;
		border: 1px solid $lightestDark;
		border-radius: 5px;
		display: flex;
		height: 2.5em;
	}
	label {
		flex: 1;
		padding-left: 0.5em;
		border-inline-end: 1px solid $lightestDark;
		height: 100%;
		display: flex;
		align-items: center;
	}
	select {
		flex: 2;
		max-width: 12em;
		font: $font-mobile-m-bold;
		height: 100%;
		border: transparent;
		border-radius: 0 5px 5px 0;
		padding-left: 0.5em;
	}
}
</style>
