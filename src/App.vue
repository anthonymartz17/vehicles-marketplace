<script>
import AppModal from "./components/Modal.vue";
import CarSelectionCard from "./components/searchFieldMobile/CarSelectionCard.vue";
import AppHeader from "./components/Header.vue";
// import HomeAd from './components/Advertisements.vue'
import AppMain from "./components/Main.vue";
import AppFooter from "./components/Footer.vue";
import MobileMenu from "./components/MobileMenu.vue";
import initializeFirebase from "./firebaseConfig";
// import Loading from "vue-loading-overlay";
// import "vue-loading-overlay/dist/css/index.css";
import { mapActions, mapState, mapMutations } from "vuex";

export default {
	components: {
		AppHeader,
		AppMain,
		AppFooter,
		CarSelectionCard,
		MobileMenu,
		AppModal,
	},
	data() {
		return {
			isLoading: false,
			navItems: [
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
					name: "Contact",
					link: "Contact",
					icon: "fas fa-phone-volume",
				},
				{
					name: "Join Us",
					link: "JoinUs",
					icon: "fas fa-phone-volume",
				},
				{
					name: "LogOut",
					link: "JoinUs",
					icon: "fas fa-phone-volume",
					auth:true
				},
			],
		};
	},
	created() {
		initializeFirebase;
		this.fetchVehicles().then((data) => {
			this.SET_FILTERS_OPTIONS(data);
		});
	},
	methods: {
		...mapActions("vehicles", ["fetchVehicles", "fetchVehiclesImages"]),

		// ...mapMutations(["toggleMobileMenu", "detectResize"]),

		...mapMutations("filterOptions", ["SET_FILTERS_OPTIONS"]),
	},
	computed: {
		...mapState("vehicles", ["showSearchMenu"]),
	},
};
</script>
<template>
	<div class="page-container">
		<!-- <Loading v-model="isLoading" /> -->
		<!-- toggleable menues -->
		<MobileMenu :navItems="navItems" />
		<!-- <div class="searchmenue">

			<SearchMenue v-if="showSearchMenu" />
	
		</div> -->
		<header>
			<AppHeader :navItems="navItems" />
		</header>
		<main>
			<AppMain />
		</main>

		<CarSelectionCard />
		<footer>
			<AppFooter />
		</footer>
	</div>
</template>

<style lang="scss" scoped>
.page-container {
	// min-height: 100%;
	// min-width: 25em;
	// overflow: auto;
	position: relative;
}

.searchmenue {
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	z-index: 100;
	@include breakpoint(desktop) {
		display: none;
	}
}
</style>
