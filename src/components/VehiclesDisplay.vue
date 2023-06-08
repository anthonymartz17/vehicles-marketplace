<script>
import { mapMutations, mapActions, mapGetters } from "vuex";

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
		...mapMutations("vehicles", ["clearFilters"]),
		selectPageTitle(name) {
			let titles = [
				{ routeName: "Vehicles", title: "Vehicles" },
				{ routeName: "Electric", title: "Electrics and Hybrids" },
				{ routeName: "Home", title: "Vehicles" },
				{ routeName: "searchResults", title: "Search Results" },
				{ routeName: "dealerInventory", title: "Our Inventory" },
			];

			titles.forEach((one) => {
				if (name == one.routeName) {
					this.pageTitle = one.title;
				}
			});
		},
		setCarToViewInLS(car) {
			localStorage.setItem("carToView", JSON.stringify(car));
		},
	},
	computed: {
		...mapGetters("vehicles", ["vehiclesList"]),

		vehiclesToDisplay() {
			let list;
			let listFromLocal = JSON.parse(localStorage.getItem("searchResults"));

			if (this.$route.name == "Home") {
				// shuffles the list
				const shuffledArray = this.vehiclesList.sort(() => Math.random() - 0.5);
				list = shuffledArray.slice(0, 8);
			} else if (this.$route.name == "Electric") {
				// shows electric only
				list = this.vehiclesList.filter((x) => x.fuel == "Electric");
			} else if (listFromLocal && listFromLocal.length >= 0) {
				// shows results of search
				list = listFromLocal;
			} else {
				// shows all available cars
				list = [];
			}
			return list;
		},
	},
};
</script>
<template>
	<div
		:class="[
			'vehicles-container',
			{ 'vehicles-container-height': $route.name == 'Home' },
		]"
	>
		<div :class="['vehicles', { 'vehicles-height': $route.name == 'Home' }]">
			<h2 class="vehicles-title">
				<span v-if="$route.name === 'dealerInventory'"
					>{{ carToViewDealer.name }} | </span
				>{{ pageTitle }}
				<i
					v-if="$route.name == 'Electric'"
					:style="{ color: '#116530' }"
					class="fas fa-leaf"
				></i>
			</h2>

			<div
				:class="[
					'vehicles-display',
					{ 'space-even': vehiclesToDisplay.length > 4 },
					{ 'vehicles-display-height-flow ': $route.name == 'searchResults' },
				]"
			>
				<div
					class="vehicles-display-car"
					v-for="(car, key) in vehiclesToDisplay"
					:key="key"
				>
					<router-link :to="{ name: 'CarToView', query: { id: car.id } }">
						<!-- getCarToViewFromLocalStore();
							setCarToViewGeneralInfo();
							saveCarToViewDealerToLocalS(car.dealerId);
							setCarToViewDealer();
							setVehicleHistory();
							setCarToviewDetails(); -->
						<div v-if="car && car.carPicsUrls" class="vehicles-display-img">
							<img :src="car.carPicsUrls[0]" :alt="`picture of ${car.model}`" />
						</div>
						<div class="vehicles-display-description">
							<h3 class="vehicles-display-title">
								{{ car.year }} {{ car.make }} {{ car.model }}
							</h3>
							<p class="vehicles-display-specs">
								{{ car.fuel }} - {{ car.carCondition }} - {{ car.miles }} miles
							</p>
							<p class="vehicles-display-price">
								{{ car.price | currency }}
							</p>
						</div>
					</router-link>
				</div>
			</div>
		</div>
		<router-link class="moreVehicleBtn" :to="{ name: 'searchResults' }">
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
		<div class="noResultMsg" v-if="vehiclesToDisplay.length === 0">
			<div class="noResultMsg-text">
				<p>No Vehicles found with these criteria</p>
				<p>Try modifying the filters!</p>
			</div>

			<router-link :to="{ name: 'Advance' }" class="btn-adjustSearch">
				<div @click="clearFilters()">Adjust Search</div>
			</router-link>
		</div>
	</div>
</template>

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
	&-car {
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

.noResultMsg {
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
}

.vehicles-container {
	@include breakpoint(tablet) {
		.vehicles-display {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 1em;
			padding-inline: 0.5em;
			&-car {
				flex-direction: column;
			}
		}
	}
	@include breakpoint(desktop) {
		.vehicles-display {
			grid-template-columns: repeat(4, 1fr);
		}
		.moreVehicleBtn {
			display: none;
		}
		.btn-adjustSearch {
			display: none;
		}
	}
}
</style>
