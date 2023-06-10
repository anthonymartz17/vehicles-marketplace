<script>
import { mapActions, mapMutations } from "vuex";
import Dealers from "@/views/Dealers.vue";
export default {
	// resets the morePics prop back to false.
	components: {
		Dealers,
	},
	created() {
		this.fetchVehicleById(this.$route.query.id).then((vehicle) => {
			this.vehicle = vehicle;
			this.setVehicleDetails(vehicle);
			this.setVehicleHistory(vehicle);
			this.fetchDealerById(this.vehicle.dealerId).then((dealer) => {
				this.dealer = dealer;
			});
		});
	},
	destroyed() {
		this.showMorePics();
	},

	data() {
		return {
			vehicle: {},
			vehicleDetails: [],
			vehicleHistory: [],
			dealer: {},
			morePics: false,
		};
	},
	methods: {
		...mapActions("vehicles", ["fetchVehicleById", "fetchDealerById"]),
		...mapMutations("vehicles", ["UPDATE_FILTERS", "FILTER_VEHICLES"]),
		setvehicle(carsData) {
			let carId = this.$route.query.id;
			if (carId) {
				this.vehicle = carsData.find((x) => x.id == carId);
			}
		},
		setVehicleDetails(vehicle) {
			this.vehicleDetails = [
				{ key: "Location", val: vehicle.location },
				{ key: "Engine", val: vehicle.engine },
				{ key: "Miles", val: vehicle.miles },
				{ key: "MPG", val: vehicle.mileage },
				{ key: "Fuel", val: vehicle.fuel },
				{ key: "transmission", val: vehicle.transmission },
				{ key: "Car type", val: vehicle.carType },
				{ key: "Drivetrain", val: vehicle.driveTrain },
				{ key: "Color Exterior", val: vehicle.colorEx },
				{ key: "Color Interior", val: vehicle.colorIn },
				{ key: "Vin", val: vehicle.vin },
			];
		},
		setVehicleHistory(vehicle) {
			const { owner, accidents, titleCheck } = vehicle;

			const greenColor = "green";
			const yellowColor = "#FFCC1D";

			let ownerText, ownerIcon, ownerBg;
			if (owner === 0 || owner === 1) {
				ownerText = `${owner === 0 ? "Never" : "One"} owner`;
				ownerIcon = "fas fa-user";
				ownerBg = greenColor;
			} else {
				ownerText = `${owner} owners`;
				ownerIcon = "fas fa-users";
				ownerBg = "#333";
			}

			let accidentsText, accidentsBg;
			if (accidents === 0) {
				accidentsText = "No issues reported";
				accidentsBg = greenColor;
			} else if (accidents === 1) {
				accidentsText = "One accident reported";
				accidentsBg = yellowColor;
			} else {
				accidentsText = `${accidents} accidents reported`;
				accidentsBg = yellowColor;
			}

			let titleCheckText, titleCheckBg;
			if (titleCheck === "No issues") {
				titleCheckText = "No issues reported";
				titleCheckBg = greenColor;
			} else {
				titleCheckText = titleCheck;
				titleCheckBg = yellowColor;
			}

			this.vehicleHistory = [
				{
					key: "Owners",
					val: ownerText,
					icon: ownerIcon,
					iconBg: ownerBg,
				},
				{
					key: "Accidents",
					val: accidentsText,
					icon: "fas fa-car",
					iconBg: accidentsBg,
				},
				{
					key: "Title check",
					val: titleCheckText,
					icon: "far fa-check-square",
					iconBg: titleCheckBg,
				},
			];
		},
		getCarsByDealer() {
			this.UPDATE_FILTERS({ dealerId: this.vehicle.dealerId });
			this.FILTER_VEHICLES();
			this.$router.replace({ name: "dealerInventory", query:{dealerId:this.vehicle.dealerId} });
		},

		// toggles the showMorePics btn
		showMorePics() {
			this.morePics = !this.morePics;
		},
	},
};
</script>
<template>
	<div class="car2view">
		<div class="car2view-title-price">
			<h2 class="car2view-titles">
				{{ vehicle.year }} {{ vehicle.make }} {{ vehicle.model }}
			</h2>
			<p class="car2view-red-title">{{ vehicle.price | currency }}</p>
		</div>
		<div class="car-breakdown">
			<div class="car2view-info"></div>
			<div :class="['car2view-images', { hidePics: !morePics }]">
				<div
					class="car2view-images-wrapper"
					v-for="(img, key) in vehicle.carPicsUrls"
					:key="key"
				>
					<img :src="img" :alt="`picture of ${vehicle.model}`" />
				</div>
			</div>
			<div class="hiden-when-desktop" @click="showMorePics">
				+ Show More Pictures
			</div>

			<div class="car2view-details">
				<p class="car2view-red-title car2view-titles">Vehicle Details</p>
				<div class="car2view-details-specs">
					<template v-for="(detail, key) in vehicleDetails">
						<div :key="key" v-if="detail.val">
							<p class="car2view-details-bold">{{ detail.key }}:</p>
							<p class="car2view-details-text">{{ detail.val }}</p>
						</div>
					</template>
				</div>
			</div>
			<div class="car2view-accesories">
				<p class="car2view-red-title car2view-titles">Accesories</p>
				<ul>
					<li v-for="(accesory, key) in vehicle.accesories" :key="key">
						{{ accesory }}
					</li>
				</ul>
			</div>
			<div class="car2view-history">
				<p class="car2view-red-title car2view-titles">Vehicle History</p>
				<div class="car2view-history-detailWrap">
					<div
						class="history-detail"
						v-for="(detail, key) in vehicleHistory"
						:key="key"
					>
						<div class="icon-detail-wrapper">
							<div>
								<i
									:class="[detail.icon, 'car-history-icon']"
									:style="{ backgroundColor: detail.iconBg }"
								>
								</i>
							</div>

							<div class="car2view-history-details">
								<p class="car2view-details-bold">{{ detail.key }}:</p>
								<p class="car2view-details-text">{{ detail.val }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="dealer-wrapper">
			<div class="car-seller-title-logo-wrapper">
				<h3 class="car2view-red-title car2view-titles">Seller</h3>
				<p class="car-seller-logo">{{ dealer.name }}</p>
			</div>
			<div class="seller-container">
				<h4 class="">{{ dealer.name }}</h4>
				<p>
					<span class="car2view-details-bold">Tel:</span>
					<span class="car2view-details-text">{{ dealer.tel }}</span>
				</p>
				<p>
					<span class="car2view-details-bold">E-mail:</span>
					<span class="car2view-details-text">{{ dealer.email }}</span>
				</p>
				<p>
					<span class="car2view-details-bold">Address:</span>
					<span class="car2view-details-text">{{ dealer.address }}</span>
				</p>
			</div>
			<div v-if="$route.name != 'dealerInventory'">
				<div @click="getCarsByDealer" class="btn btn-local">Visit Our Inventory</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.hiden-when-desktop {
	background: $primary;
	height: 3em;
	transition: all 0.3s ease-in-out;
	border: 1px solid transparent;
	color: $light;
	height: 3em;
	margin-block: 0.2em;
	font: $font-mobile-l;
	display: grid;
	place-items: center;
	cursor: pointer;
	&:hover {
		background: lighten($primary, 15%);
		border: 1px solid $light;
	}
	@include desktop {
		display: none;
	}
}
.hidePics {
	overflow: hidden;
	height: 40vh;
	@include desktop {
		height: 100%;
		overflow: visible;
	}
}
.car2view-history {
	margin-block: 1em;

	@include desktop {
		grid-area: history;
	}
	&-detailWrap {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding-block: 1em;
	}
}

.car-history-icon {
	border-radius: 50%;
	width: 4em;
	height: 4em;
	display: grid;
	place-items: center;
	color: $light;
	margin: 0.5em 0;
}
.car2view-car {
	flex: 3;
}
.car-breakdown {
	@include desktop {
		flex: 2;
		display: grid;
		grid-template-columns: 1.5fr 2fr;
		grid-template-rows: 0.5fr 1fr 0.5fr;
		column-gap: 1em;
		grid-template-areas:
			"carPics detail"
			"carPics accesories"
			"carPics history";
	}
}

.car2view {
	@include desktop {
		border-top: 1px solid lighten($lightestDark, 20);
		margin-block: 1em;
		padding: 0;
		display: flex;
		gap: 1em;
	}

	background: $light;
	padding: 0.5em;

	&-title-price {
		margin-block: 1em;

		@include desktop {
			display: flex;
			height: 3em;
			justify-content: space-between;
			align-items: baseline;
			border-bottom: 2px solid $lightestDark;
			font: $font-mobile-m;
		}
	}

	&-red-title {
		font: $font-mobile-xl;
		color: $primary;
		@include desktop {
			color: $dark;
		}
	}
}
.car2view-titles {
	@include desktop {
		border-bottom: none;
		color: $primary;
	}
	border-bottom: 2px solid $lightestDark;
	padding-block: 0.5em;
	margin-bottom: 1em;
	font: $font-mobile-xl;
}

.car2view-info {
	display: grid;
	justify-items: center;
	gap: 0.5em 0.2em;
	grid-template-columns: 1fr 1fr 1fr;
	margin-block: 1em;

	@include desktop {
		display: none;
	}

	&-children {
		text-align: center;
	}
	&-icons {
		width: 30px;
	}
	&-specs {
		font: $font-text;
	}
}

.car2view-images {
	display: grid;
	@include desktop {
		grid-area: carPics;
		align-content: start;
	}

	&-wrapper {
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
		@include desktop {
			height: 75%;
		}
	}
	img {
		max-width: 100%;
	}
}
.car2view-accesories {
	// display: none;

	ul {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	li {
		list-style: none;
		line-height: 180%;
	}

	ul li::before {
		content: "▪ ";
		color: $primary;
	}

	@include desktop {
		display: block;
		padding-bottom: 1em;
		border-bottom: 1px solid lighten($lightestDark, 30);
	}
}

.car2view-details {
	margin-block: 1em;

	@include desktop {
		margin: 0;
		grid-area: detail;
		padding-bottom: 1em;
		border-bottom: 1px solid lighten($lightestDark, 30);
	}

	&-specs {
		margin-block: 0.5em;
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-content: stretch;
		// gap: 0 2em;
	}
	&-bold {
		font: $font-mobile-m-bold;
		@include desktop {
			font: $font-mobile-m;
		}
	}
	&-text {
		font: $font-mobile-m;
	}
}
.seller-container {
	padding-block: 1em;
	display: grid;
	gap: 0.5em;
}
.sub-title {
	font: $font-mobile-l;
	color: $dark;
}
.dealer-wrapper {
	flex: 1.5;
	@include desktop {
		background: lighten($lightestDark, 35);
	}
}
</style>
