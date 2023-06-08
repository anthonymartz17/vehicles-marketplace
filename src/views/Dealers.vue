<script>
import { mapGetters, mapActions, mapState } from "vuex";
import VehiclesDisplay from "@/components/VehiclesDisplay.vue";

export default {
	components: {
		VehiclesDisplay,
	},

	props: ["dealer"],

	methods: {
		...mapActions("vehicles", ["fetchDealers"]),
		setDealer() {
			// this.vehicle = carsData.find((x) => x.id == carId);
			console.log(dealerId, "el dealer");
		},
	},
	computed: {
		...mapGetters("vehicles", ["dealersList"]),
	},
};
</script>
<template>
	<!-- added inventory-deskt class to dynamically trigger in dealerinventory route, so i can display vehicle display first and seller info to the right by reversing the flex, this without affecting their position in the other component cartoview.  -->
	<div
		:class="[
			'car-seller',
			{ 'inventory-deskt': $route.name === 'dealerInventory' },
		]"
	>
		<div
			:class="{ 'inventory-deskt-seller': $route.name === 'dealerInventory' }"
		>
			<div class="car-seller-title-logo-wrapper">
				<h3 class="car-seller-title">Seller</h3>
				<p class="car-seller-logo">{{ dealer.name }}</p>
			</div>
			<div class="car-seller-info">
				<h4>{{ dealer.name }}</h4>
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
		<div
			v-if="$route.name === 'dealerInventory'"
			:class="{
				'inventory-deskt-carDisplay': $route.name === 'dealerInventory',
			}"
		>
			<VehiclesDisplay />
		</div>
		<router-link
			:to="{ name: 'dealerInventory' }"
			v-if="$route.name != 'dealerInventory'"
		>
			<div class="btn btn-local">Visit Our Inventory</div>
		</router-link>
	</div>
</template>

<style lang="scss">
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
.inventory-deskt {
	@include desktop {
		display: flex;
		flex-direction: row-reverse;
		border-top: 1px solid lighten($lightestDark, 20);
		margin-block: 2em;
	}
}
.inventory-deskt-seller {
	@include desktop {
		min-width: 30%;
		background: lighten($lightestDark, 35);
		padding-inline: 0.5em;
	}
}
.inventory-deskt-carDisplay {
	//  background: blue;
}

.car-seller {
	color: $dark;
	height: min-30vh;
	padding: 0.5em;
	@include desktop {
		height: 100vh;
		position: sticky;
		top: 100px;
	}

	.car-seller-title {
		@include desktop {
			border-bottom: none;
			color: $lightestDark;
			margin: 0px;
		}
		border-bottom: 2px solid $lightestDark;
		padding-block: 0.5em;
		margin-bottom: 1em;
		font: $font-mobile-xl;
	}
	&-title-logo-wrapper {
		position: relative;
	}

	&-logo {
		// border: 1px solid $lightestDark;
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
		@include desktop {
			top: 40px;
			right: 1em;
		}
	}

	&-info {
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
</style>
