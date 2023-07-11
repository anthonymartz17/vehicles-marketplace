<script>
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
	data() {
		return {
			pageTitle: "",
			showSearchMenue: false,
		};
	},

	created() {
		this.selectPageTitle(this.$route.name);
	},

	methods: {
		...mapMutations("vehicles", ["TOGGLE_SEARCH_MENU"]),
		selectPageTitle(name) {
			let titles = [
				{ routeName: "Vehicles", title: "Vehicles" },
				{ routeName: "Electric", title: "Electrics and Hybrids" },
				{ routeName: "home", title: "Vehicles" },
				{ routeName: "searchResults", title: "Search Results" },
				{ routeName: "dealerInventory", title: "Our Inventory" },
			];

			titles.forEach((one) => {
				if (name == one.routeName) {
					this.pageTitle = one.title;
				}
			});
		},
		// 	toggleSearchMenue() {
		// 	this.showSearchMenue = !this.showSearchMenue
		// }
	},
	computed: {
		...mapGetters("vehicles", ["vehiclesList"]),
		...mapState("vehicles", ["vehiclesToDisplay"]),

		vehiclesToDisplayList() {
			let list;
			if (this.$route.name == "home") {
				// shuffles the list
				const shuffledArray = this.vehiclesList.sort(() => Math.random() - 0.5);
				list = shuffledArray.slice(0, 8);
			} else {
				list = this.vehiclesToDisplay;
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
			{ 'vehicles-container-height': $route.name == 'home' },
		]"
	>
		<div :class="['vehicles', { 'vehicles-height': $route.name == 'home' }]">
			<div class="title-container">
				<h4 class="main-title">
					{{ pageTitle }}
					<i
						v-if="$route.name == 'Electric'"
						:style="{ color: '#116530' }"
						class="fas fa-leaf"
					></i>
				</h4>
				<router-link :to="{ name: 'advance' }">
					<div v-show="$route.name !== 'home'" class="btn-adjustSearch">
						Adjust Search
					</div>
				</router-link>
			</div>

			<div
				v-if="vehiclesToDisplayList && vehiclesToDisplayList.length > 0"
				:class="[
					'vehicles-display',
					{ 'space-even': vehiclesToDisplayList.length > 4 },
					{ 'vehicles-display-height-flow ': $route.name == 'searchResults' },
				]"
			>
				<div
					class="vehicles-display-car"
					v-for="(car, key) in vehiclesToDisplayList"
					:key="key"
				>
					<router-link :to="{ name: 'carToView', query: { id: car.id } }">
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
			<div v-else class="noResultMsg">
				<!-- <div class="noResultMsg-text"> -->
				<p>No Vehicles found with these criteria</p>
				<p>Try modifying the filters!</p>
				<!-- </div> -->
			</div>
		</div>
		<router-link class="moreVehicleBtn" :to="{ name: 'searchResults' }">
			<div v-show="$route.name == 'home'" class="btn-search btn">
				+ More Vehicles
			</div>
		</router-link>
	</div>
</template>

<style lang="scss" scoped>
.space-even {
	justify-content: space-evenly;
}
.msg {
	font: $font-logo-S;
	padding: 0.2em;
	margin-bottom: 0.5em;
}
.title-container {
	border-bottom: 1px solid $lightestDark;
	padding-inline: 0.5em;
	margin-block: 1em;
	display: flex;
	justify-content: space-between;
	align-items: baseline;
}
.vehicles-container {
	flex: 1;
	// padding-inline: .5em;
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
		// background: blue;
		display: flex;
		// justify-content: space-around;
		gap: 0.5em;
		padding-block: 0.3em;
	}

	&-img {
		// width: 15em;
		// height: 12em;
		flex: 1;
		border: 2px solid $lightestDark;

		img {
			object-fit: cover;
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
	height: 100%;
	display: grid;

	place-items: center;
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
	width: 10em;
	height: 3em;
	// min-width: 50%;
	font: $font-mobile-m-bold;
	padding: 0.5em 1em;
	&:hover {
		background: lighten($primary, 15%);
		border: 1px solid $light;
	}
}

.vehicles-container {
	padding-inline: .5em;
	@include breakpoint(tablet) {
		.vehicles-display {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 1em;
			// padding-inline: 0.5em;
			&-car {
				flex-direction: column;
			}
		}
	}
	@include breakpoint(desktop) {

.title-container{
	margin-top: 0;
}
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
