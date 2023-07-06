<script>
import { mapGetters, mapActions, mapState } from "vuex";
import ListingActions from "./listingOptions.vue";
export default {
	components: {
		ListingActions,
	},
	data() {
		return {
			pageTitle: "",
		};
	},

	created() {
		this.fetchAds(this.user.dealerId);
	},

	methods: {
		...mapActions("adsCrud", ["fetchAds"]),
	},
	computed: {
		...mapGetters("adsCrud", ["adsList"]),
		...mapState("auth", ["user"]),
	},
};
</script>
<template>
	<div class="vehicles-container">
		<div class="vehicles">
			<div v-if="adsList && adsList.length > 0" class="vehicles-display">
				<div
					class="vehicles-display-car"
					v-for="(car, key) in adsList"
					:key="key"
				>
					<div class="vehicle-display-header">
						<div v-if="car && car.carPicsUrls" class="vehicles-display-img">
							<img :src="car.carPicsUrls[0]" :alt="`picture of ${car.model}`" />
						</div>
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
						<ListingActions :carId="car.id" />
					</div>
				</div>
			</div>
			<div v-else class="noResultMsg">
				<p>No posts have been added</p>
			</div>
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

.vehicle-display-header {
	border: 2px solid $lightestDark;
}
.actions {
	flex: 1;
}
.vehicles-display {
	&-car {
		position: relative;
		gap: 0.5em;
		padding-block: 0.3em;
	}

	&-img {
		flex: 1;

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
