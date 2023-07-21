<script>
import SearchMobile from "../components/searchFieldMobile/SearchMobile.vue";
import SearchDesktop from "../components/SearchDesktop.vue";
import VehiclesDisplay from "../components/VehiclesDisplay.vue";

export default {
	// fires shuffleHomeDisplayCars mutation to display vehicles ramdomly everytime the home component is created.
	components: {
		SearchMobile,
		SearchDesktop,
		VehiclesDisplay,
	},
};
</script>
<template>
	<div class="home-container">
		<div>
			<SearchMobile />
			<SearchDesktop />
			<div class="vehicle-display">
				<VehiclesDisplay />
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.home-container {
	@include breakpoint(desktop) {
		padding-inline: 10em;
	}
	@include breakpoint(lg-device) {
		// padding-inline: 5em;
	}
}
</style>
