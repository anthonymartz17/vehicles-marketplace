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
			this.heroImg = vehicle.carPicsUrls[0];
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
			heroImg: "",
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

		updateHeroImg(img) {
			this.heroImg = img;
		},
		// toggles the showMorePics btn
		showMorePics() {
			this.morePics = !this.morePics;
		},
	},
};
</script>
<template>
	<div class="carToView">
		<div class="carToView-section-top">
			<div class="carToview-display-section">
				<div class="carToView-title-price">
					<h2 class="carToView-titles">
						{{ vehicle.year }} {{ vehicle.make }} {{ vehicle.model }}
					</h2>
					<p class="carToView-red-title">{{ vehicle.price | currency }}</p>
				</div>
				<div class="carToView-img-display">
					<div class="main-display">
						<img :src="heroImg" alt="" />
					</div>
					<div :class="['carToView-images-list', { hidePics: !morePics }]">
						<div
							@click="updateHeroImg(img)"
							:class="['carToView-image-item', { selectedImg: heroImg == img }]"
							v-for="(img, key) in vehicle.carPicsUrls"
							:key="key"
						>
							<img
								class="item-img"
								:src="img"
								:alt="`picture of ${vehicle.model}`"
							/>
						</div>
					</div>
				</div>
				<div class="showmore-btn" @click="showMorePics">
					+ Show More Pictures
				</div>
			</div>
			<div class="dealer-wrapper">
				<div class="popup-header">
					<div class="user-logo">
						<img
							v-if="dealer.logo_Img"
							:src="dealer.logo_Img"
							alt="logo image of seller"
						/>
						<img
							v-else
							src="/images/icons/userIcon.png"
							alt="logo image of seller"
						/>
					</div>
					<div class="popup-title-container">
						<h4 class="popup-title">{{ dealer.name }}</h4>
						<p class="popup-email">{{ dealer.email }}</p>
					</div>
				</div>

				<div class="seller-info-container">
					<h3 class="carToView-red-title carToView-titles">Seller info:</h3>

					<div class="seller-info-field">
						<p class="carToView-details-bold">Name:</p>
						<p class="carToView-details-text">{{ dealer.name }}</p>
					</div>
					<div class="seller-info-field">
						<p class="carToView-details-bold">Tel:</p>
						<p class="carToView-details-text">{{ dealer.tel }}</p>
					</div>
					<div class="seller-info-field">
						<p class="carToView-details-bold">E-mail:</p>
						<p class="carToView-details-text">{{ dealer.email }}</p>
					</div>
					<div class="seller-info-field">
						<p class="carToView-details-bold">Address:</p>
						<p class="carToView-details-text">{{ dealer.address }}</p>
					</div>
				</div>
				<div v-if="$route.name != 'dealerInventory'" class="btn-container">
					<router-link
						class="btn btn-local"
						:to="{
							name: 'dealerInventory',
							query: { dealerId: this.vehicle.dealerId },
						}"
					>
						Visit Our Inventory
					</router-link>
				</div>
			</div>
		</div>

		<div class="car-breakdown">
			<div class="carToView-details">
				<p class="carToView-red-title carToView-titles">Vehicle Details</p>
				<div class="carToView-details-specs">
					<template v-for="(detail, key) in vehicleDetails">
						<div :key="key" v-if="detail.val">
							<p class="carToView-details-bold">{{ detail.key }}:</p>
							<p class="carToView-details-text">{{ detail.val }}</p>
						</div>
					</template>
				</div>
			</div>
			<div class="carToView-accesories">
				<p class="carToView-red-title carToView-titles">Accesories</p>
				<ul>
					<li v-for="(accesory, key) in vehicle.accesories" :key="key">
						{{ accesory }}
					</li>
				</ul>
			</div>
			<div class="carToView-history">
				<p class="carToView-red-title carToView-titles">Vehicle History</p>
				<div class="carToView-history-detailWrap">
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

							<div class="carToView-history-details">
								<p class="carToView-details-bold">{{ detail.key }}:</p>
								<p class="carToView-details-text">{{ detail.val }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.showmore-btn {
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
}
.hidePics {
	overflow: hidden;
	height: 40vh;
}
.user-logo {
	height: 3em;
	width: 3em;
	border: 1px solid;
	border-radius: 50px;
	display: grid;
	place-items: center;
	cursor: pointer;
	transition: all 250ms ease-in-out;
	box-shadow: 0 2px 4px rgba(160, 158, 158, 0.5);
	&:hover {
		box-shadow: 0 3px 4px rgba(254, 254, 254, 0.551);
	}
	img {
		max-width: 100%;
		object-fit: cover;
	}
}
.popup-header {
	display: flex;
	padding: 0.5em;

	align-items: center;
	border-bottom: 1px solid $lightDark;
	padding-block: 1em;
	gap: 1em;
	margin-bottom: 1em;
}
.popup-title {
	justify-self: flex-end;
	font: $font-text-bold;
}
.popup-email {
	font: $font-text;
}

.carToView-history {
	margin-block: 1em;
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
.carToView-car {
	flex: 3;
}

.carToView {
	background: $light;
	padding: 0.5em;

	&-title-price {
		margin-block: 1em;
	}

	&-red-title {
		font: $font-mobile-xl;
		color: $primary;
	}
}
.carToView-titles {
	// border-bottom: 2px solid $lightestDark;
	padding-block: 0.5em;
	font: $font-mobile-xl;
}

.carToView-info {
	display: grid;
	justify-items: center;
	gap: 0.5em 0.2em;
	grid-template-columns: 1fr 1fr 1fr;
	margin-block: 1em;

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

.carToView-images-list {
	&-wrapper {
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	}
	img {
		max-width: 100%;
	}
}

.main-display {
	display: none;
}
.carToView-accesories {
	border-bottom: 1px solid lighten($lightestDark, 30);
	padding-block: 1em;
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
}

.carToView-details {
	&-specs {
		margin-block: 0.5em;
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-content: stretch;
		// gap: 0 2em;
	}
	&-bold {
		font: $font-mobile-m-bold;
	}
	&-text {
		font: $font-mobile-m;
	}
}
.seller-info-container {
	padding: 1em;
	display: grid;
	gap: 0.5em;
}
.seller-info-field{
	display: flex;
	gap: 1em;
}
.sub-title {
	font: $font-mobile-l;
	color: $dark;
}
.dealer-wrapper {
	padding-block: 1em;
}

.carToView {
	@include breakpoint(tablet) {
		padding-inline: 1em;
		&-title-price {
			display: flex;
			height: 3em;
			justify-content: space-between;
			align-items: baseline;
			border-bottom: 2px solid $lightestDark;
			font: $font-mobile-m;
			margin-bottom: 2em;
			padding-inline: 2em;
			padding-bottom: 0.5em;
		}

		.showmore-btn {
			display: none;
		}
		.hidePics {
			height: 100%;
			overflow: visible;
		}
		.carToView-titles {
			border-bottom: none;
		}
		.carToView-img-display {
			display: flex;
			gap: 0.2em;
			max-height: 40em;
			width: 100%;
		}

		.main-display {
			flex: 3;
			max-width: 100%;
			display: flex;
			img {
				max-width: 100%;
				max-height: 100%;
				object-fit: cover;
			}
		}

		.carToView-images-list {
			flex: 1;
			max-height: 40em;
			overflow: auto;
		}
		.carToView-history-detailWrap {
			display: flex;
			justify-content: space-between;
		}
		.dealer-wrapper {
			border-bottom: 1px solid lighten($lightestDark, 30);
		}
		.carToView-accesories {
			border-bottom: 1px solid lighten($lightestDark, 30);
			padding-block: 1em;
		}
		.carToView-details {
			border-bottom: 1px solid lighten($lightestDark, 30);
			padding-block: 1em;
		}
		.selectedImg {
			position: relative;
			&::before {
				content: "Viewing";
				color: $light;
				display: grid;
				place-items: center;
				font: $font-mobile-m-bold;
				font-size: 1.2em;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: $dark;
				opacity: 0.4;
			}
		}
	}
	@include breakpoint(desktop) {
		margin-block: 1em;
		padding: 0;
		gap: 1em;
		background: $light;
		padding-inline: 10em;
.btn-container{
	padding-inline: 1em;
}
		.carToView-titles {
			border-bottom: none;
			color: $primary;
		}
		.carToView-info {
			display: none;
		}
		.carToView-section-top {
			display: flex;
			gap: 1em;
		}

		.carToview-display-section {
			flex: 1;
		}
		.carToView-img-display {
			display: flex;
			flex-direction: column;
		}
		.dealer-wrapper {
			flex: 1;
			background: lighten($lightestDark, 35);
		}
		.carToView-images-list {
			flex: 1;
			display: flex;
			gap: 0.1em;
		}
	
	}
	@include breakpoint(lg-device) {
		padding-inline: 5%;
	}
}
</style>
