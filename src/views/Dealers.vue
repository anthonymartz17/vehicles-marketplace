<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import VehiclesDisplay from "@/components/VehiclesDisplay.vue";

export default {
	components: {
		VehiclesDisplay,
	},

	data() {
		return {
			dealer: {},
			dealerId: null,
			inventory: [],
		};
	},
	mounted() {
		this.dealerId = this.$route.query.dealerId;
		if (this.dealerId) {
			this.fetchDealerById(this.dealerId).then((dealer) => {
				this.dealer = dealer;
				this.fetchAds(this.dealerId).then((data) => {
					this.inventory = data;
				});
				this.getCarsByDealer(this.dealerId);
			});
		}
	},
	methods: {
		...mapActions("vehicles", [
			"fetchDealerById",
			"updateFilters",
			"filterVehicles",
		]),
		...mapActions("vehicles", ["fetchDealerById"]),
		...mapActions("adsCrud", ["fetchAds"]),

		getCarsByDealer() {
			// resets filters first in case there were some set
			this.updateFilters(null);
			this.updateFilters({ dealerId: this.dealerId });
			this.filterVehicles();
		},
	},
	computed: {
		...mapGetters("vehicles", ["dealersList"]),
	},
};
</script>
<template>
	<div class="car-seller-wrapper">
		<div class="car-seller">
			<div class="car-seller-details">
				<div class="car-seller-title-logo-wrapper">
					<!-- <h3 class="car-seller-title">Seller</h3> -->
					<h4 class="main-title">{{ dealer.name }}</h4>
					<p class="car-seller-logo">{{ dealer.name }}</p>
				</div>
				<div class="car-seller-info">
					<p>
						<span>Tel:</span> <span>{{ dealer.tel }}</span>
					</p>
					<p>
						<span>E-mail:</span> <span>{{ dealer.email }}</span>
					</p>
					<p>
						<span>Address:</span> <span>{{ dealer.address }}</span>
					</p>
				</div>
			</div>
			<div class="vehicles">
				<VehiclesDisplay :inventory="inventory" />
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.car-seller{
	color: $dark;
	height: min-30vh;
	padding: 0.5em;
}
.btn-local {
	background: $primary;
	transition: all 0.3s ease-in-out;
	border: 1px solid transparent;
	color: $light;
	&:hover {
		background: lighten($primary, 15%);
		border: 1px solid $light;
	}
}

.car-seller {
	&-title-logo-wrapper {
		position: relative;
	}

	.car-seller-logo {
		color: $primary;
		font: $font-mobile-m-bold;
		background: lighten($lightestDark, 30);
		height: 4em;
		width: 8em;
		display: grid;
		place-items: center;
		position: absolute;
		top: 0px;
		right: 1em;
	}

	.car-seller-info {
		h4 {
			font: $font-mobile-l;
			color: $primary;
		}
		p {
			margin-block: 1em;
			color: $dark;
		}
		span:nth-child(1) {
			font: $font-mobile-m-bold;
			margin-right: 0.5em;
		}
		span:nth-child(2) {
			font: $font-mobile-m;
			margin-right: 0.5em;
		}
	}
}
.car-seller-wrapper {
	@include breakpoint(desktop) {
		display: flex;
		justify-content: center;
	.car-seller{
		width: 70%;
	}
		// height: 100vh;
		// position: sticky;
		// top: 100px;
		.car-seller-details {
			margin-top: 2em;
		}
		.car-seller-title {
			border-bottom: none;
			color: $lightestDark;
			margin: 0px;
			border-bottom: 2px solid $lightestDark;
			padding-block: 0.5em;
			margin-bottom: 1em;
			font: $font-mobile-xl;
		}
		.car-seller-logo {
			top: 40px;
			right: 1em;
		}
	}
}
</style>
