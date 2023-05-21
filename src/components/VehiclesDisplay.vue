<template>
	<div
		:class="[
			'vehicles-container',
			{'vehicles-container-height': $route.name == 'Home'},
		]"
	>
		<div :class="['vehicles', {'vehicles-height': $route.name == 'Home'}]">
			<h2 class="vehicles-title">
				<span v-if="$route.name === 'dealerInventory'"
					>{{ carToViewDealer.name }} | </span
				>{{ pageTitle }}
				<i
					v-if="$route.name == 'Electric'"
					:style="{color: '#116530'}"
					class="fas fa-leaf"
				></i>
			</h2>

			<router-link :to="{name: 'CarToView'}">
				<div
					:class="[
						'vehicles-display',
						{'space-even': vehiclesDisplay.length > 4},
						{'vehicles-display-height-flow ':  $route.name == 'searchResults'},
					]"
				>
					<div
						class="vehicles-display-car"
						v-for="(car, key) in vehicles"
						:key="key"
						@click="
							saveCarToViewToLocalStore({
								name: 'carToView',
								data: car,
							});
							getCarToViewFromLocalStore();
							setCarToViewGeneralInfo();
							saveCarToViewDealerToLocalS(car.dealerId);
							setCarToViewDealer();
							setVehicleHistory();
							setCarToviewDetails();
						"
					>
						<div v-if="car.imagesUrl[0]" class="vehicles-display-img">
							<img
								:src="car.imagesUrl[0]"
								:alt="`picture of ${car.model}`"
							/>
						</div>
						<div class="vehicles-display-description">
							<h3 class="vehicles-display-title">
								{{ car.year }} {{ car.make }} {{ car.model }}
							</h3>
							<p class="vehicles-display-specs">
								{{ car.fuel }} - {{ car.carCondition }} -
								{{ car.miles }} miles
							</p>
							<p class="vehicles-display-price">
								{{ car.price | currency }}
							</p>
						</div>
					</div>
				</div>
			</router-link>
		</div>
		<router-link class="moreVehicleBtn" :to="{name: 'searchResults'}">
			<div
				@click="
					searchVehicles();
					setDataInVehiclesDisplayFromLocal();
				"
				v-show="$route.name == 'Home'"
				class="btn-search btn"
			>
				+ More Vehicles
			</div>
		</router-link>
		<div class="noResultMsg" v-if="vehiclesDisplay.length === 0">
			<div class="noResultMsg-text">
				<p>No Vehicles found with these criteria</p>
				<p>Try modifying the filters!</p>
			</div>

			<router-link :to="{name: 'Advance'}" class="btn-adjustSearch">
				<div @click="clearPropsVal">Adjust Search</div>
			</router-link>
		</div>
	</div>
</template>

<script>
import {mapMutations, mapState, mapActions} from "vuex";

export default {
	data() {
		return {
			pageTitle: "",
		};
	},

	created() {
		this.selectPageTitle(this.$route.name);
	},

	methods: {
		...mapMutations([
			"getCarToViewFromLocalStore",
			"setCarToViewGeneralInfo",
			"saveCarToViewDealerToLocalS",
			"setCarToViewDealer",
			"setVehicleHistory",
			"setCarToviewDetails",
			"saveCarToViewToLocalStore",
			"selectElectricCars",
			"clearPropsVal",
			"searchVehicles",
			"setDataInVehiclesDisplayFromLocal",
		]),
		...mapActions(["getCarsData"]),

		selectPageTitle(name) {
			let titles = [
				{routeName: "Vehicles", title: "Vehicles"},
				{routeName: "Electric", title: "Electrics and Hybrids"},
				{routeName: "Home", title: "Vehicles"},
				{routeName: "searchResults", title: "Search Results"},
				{routeName: "dealerInventory", title: "Our Inventory"},
			];

			titles.forEach((one) => {
				if (name == one.routeName) {
					this.pageTitle = one.title;
				}
			});
		},
	},
	computed: {
		...mapState(["vehiclesDisplay", "msg", "carToViewDealer"]),
		...mapState('vehicles',["vehicles", "msg", "carToViewDealer"]),
	},
};
</script>

<style lang="scss">
.space-even {
	justify-content: space-evenly;
}
.msg {
	font: $font-logo-S;
	padding: 0.2em;
	margin-bottom: 0.5em;
}
.vehicles-container {
	padding: 0.5em;
	flex: 1;
	
}
// this height only when in home screen
.vehicles-container-height {
	height: 90vh;
}

.vehicles-height {
	height: 80vh;
	@include desktop {
		height: 80vh;
	}
}

.vehicles {
	color: $dark;
	overflow: hidden;

	&-title {
		font: $font-logo-S;
		border-bottom: 2px solid $lightestDark;
		padding: 0.2em;
		margin-bottom: 0.5em;
	}
}
// controls overflow of div when in search results view
.vehicles-display-height-flow {
	height: 100vh;
	overflow: auto;
}

.vehicles-display {
	@include desktop {
	
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		// justify-items: stretch;
		gap: 1em;
		padding-inline: .5em;
	}
	&-car {
		@include desktop {
			flex-direction: column;
		}

		display: flex;
		justify-content: space-around;
		gap: 0.5em;
		padding-block: 0.3em;
	}

	&-img {
		flex: 1;
		border: 2px solid $lightestDark;

		img {
			max-width: 100%;
			height: 100%;
		}
	}
	&-description {
		flex: 2;
	}
	&-title {
		color: $primary;
		font: $font-text-bold;
	}
	&-specs {
		font: $font-text;
	}
	&-price {
		font: $font-text-bold;
	}
}
.moreVehicleBtn {
	@include desktop {
		display: none;
	}
}
.noResultMsg {
	background: blue;
	display: grid;
	place-items: center;
	gap: 2em;
	margin-block: 3em;
	font: $font-mobile-m-bold;
	color: $dark;

	&-text {
		text-align: center;
	}
}
.btn-adjustSearch {
	background: $primary;
	transition: all 0.3s ease-in-out;
	border: 1px solid transparent;
	text-align: center;
	color: $light;
	min-width: 50%;
	font: $font-mobile-m-bold;
	padding: 0.5em 1em;
	&:hover {
		background: lighten($primary, 15%);
		border: 1px solid $light;
	}
	@include desktop {
		display: none;
	}
}
</style>
