<script>
import AppModal from "./components/Modal.vue";
import CarSelectionCard from "./components/searchFieldMobile/CarSelectionCard.vue";
import AppHeader from "./components/header/Header.vue";
// import HomeAd from './components/Advertisements.vue'
import AppMain from "./components/Main.vue";
import AppFooter from "./components/Footer.vue";
import MobileMenu from "./components/MobileMenu.vue";
import initializeFirebase from "./firebaseConfig";
import AlertMsg from "./components/utilities/alert-msg.vue";
import Loading from "./components/utilities/loading.vue";
import { mapActions, mapState, mapMutations, mapGetters } from "vuex";

export default {
	components: {
		AppHeader,
		AppMain,
		AppFooter,
		CarSelectionCard,
		MobileMenu,
		AppModal,
		AlertMsg,
		Loading,
	},
	data() {
		return {
			fullPage: true,
			navItems: [
				{
					link: "Home",
					routename: "home",
					icon: "fas fa-home",
				},
				{
					link: "Vehicles",
					routename: "searchResults",
					icon: "fas fa-car",
				},

				{
					link: "Contact",
					routename: "contact",
					icon: "fas fa-phone-volume",
				},
				{
					link: "Join Us",
					routename: "joinUs",
					icon: "fas fa-phone-volume",
				},
				{
					link: "Dashboard",
					routename: "dashboard",
					icon: "fas fa-phone-volume",
				},
				{
					link: "Log Out",
					icon: "fas fa-phone-volume",
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

		...mapMutations("filterOptions", ["SET_FILTERS_OPTIONS"]),
	},
	computed: {
		...mapState("vehicles", ["showSearchMenu"]),
		...mapState("auth", ["isLoading"]),
		...mapGetters("auth", ["showAlert"]),
	},
};
</script>
<template>
	<div class="page-container">
		<div class="loading" v-if="isLoading">
			<Loading />
		</div>
		<AlertMsg v-show="showAlert" />

		<MobileMenu :navItems="navItems" />

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

.loading{
	position: absolute;
	background:rgba(0, 0, 0, 0.705);
	width: 100%;
	height: 100vh;
	display: grid;
	place-items: center;
	z-index: 100;

}
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
