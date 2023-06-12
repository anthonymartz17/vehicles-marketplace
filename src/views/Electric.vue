		<script>
		import VehiclesDisplay from "../components/VehiclesDisplay.vue";
		
		export default {
			components: {
				VehiclesDisplay,
			},
		};
		</script>
<template>
	<div class="electric-container">
		<VehiclesDisplay />
	</div>
</template>


<style lang="scss" scoped>

.electric-container{
	@include breakpoint(lg-device){
		padding-inline: 5%;
	}
}

</style>
