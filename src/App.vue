<template>
	<div class="page-container">
		<AppModal />
		<MobileMenu :desktopNav="desktopNav" />
		<AppHeader :desktopNav="desktopNav" />
		<!-- <HomeAd/> -->
		<AppMain />
		<CarSelectionCard />
		<AppFooter />
	</div>
</template>

<script>
import AppModal from "./components/Modal.vue";
import CarSelectionCard from "./components/searchFieldMobile/CarSelectionCard.vue";
import AppHeader from "./components/Header.vue";
// import HomeAd from './components/Advertisements.vue'
import AppMain from "./components/Main.vue";
import AppFooter from "./components/Footer.vue";
import MobileMenu from "./components/MobileMenu.vue";
import initializeFirebase from "./firebaseConfig";

import { mapActions, mapState, mapMutations } from "vuex";

export default {
	created() {
		initializeFirebase;
		this.fetchVehicles().then((data) => {
			this.SET_FILTERS_OPTIONS(data);
		});
	},
	data() {
		return {
			desktopNav: [
				{
					name: "Home",
					link: "Home",
					icon: "fas fa-home",
				},
				{
					name: "Vehicles",
					link: "searchResults",
					icon: "fas fa-car",
				},
				{
					name: "Electric Cars",
					link: "Electric",
					icon: "fas fa-charging-station",
				},
				{
					name: "Contacto",
					link: "Contact",
					icon: "fas fa-phone-volume",
				},
				{
					name: "Join Us",
					link: "JoinUs",
					icon: "fas fa-phone-volume",
				},
			],
		};
	},

	methods: {
		...mapActions("vehicles", ["fetchVehicles", "fetchVehiclesImages"]),

		...mapMutations(["toggleMobileMenu", "detectResize"]),

		...mapMutations("filterOptions", ["SET_FILTERS_OPTIONS"]),
	},

	components: {
		AppHeader,
		AppMain,
		AppFooter,
		CarSelectionCard,
		MobileMenu,
		AppModal,
	},
};
</script>
<style lang="scss" scoped>
.page-container {

	// min-height: 100%;
	// min-width: 25em;
	// overflow: auto;
	position: relative;
}
</style>
