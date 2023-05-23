<template>
	<div class="page-container">
		<AppModal />
		<MobileMenu />
		<AppHeader />
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
		// this.$store.dispatch("getCarsData");
		// this.$store.dispatch("getDealersData");
		initializeFirebase;
		this.fetchCars().then((data) => {
			this.SET_FILTERS_OPTIONS(data);
			this.fetchCarsImages(data);
		});
	},

	methods: {
		...mapActions("vehicles", ["fetchCars", "fetchCarsImages"]),

		...mapMutations(["toggleMobileMenu", "detectResize"]),

		...mapMutations("filterOptions", ["SET_FILTERS_OPTIONS"]),
	},

	components: {
		AppHeader,
		// HomeAd,
		AppMain,
		AppFooter,
		CarSelectionCard,
		MobileMenu,
		AppModal,
	},
	computed: {
		...mapState(["makeSelected", "vehiclesDisplay"]),
	},
};
</script>
<style lang="scss" scoped>
.page-container {
	// background:$lightestDark;
	min-height: 100%;
	min-width: 25em;
	// overflow: auto;
	position: relative;
}
</style>
