<template>
	<router-link :to="{ name: 'Home' }">
		<span @click="clearFilters()" class="logo">
			Auto <span class="logo-m">M</span>artz
		</span>
	</router-link>
</template>

<script>
import { mapMutations } from "vuex";
export default {
	methods: {
		...mapMutations("vehicles", ["clearFilters"]),
	},
};
</script>

<style lang="scss">
.logo {
	font: $font-mobile-xl;
	background: $dark;
	cursor: pointer;
	color: $light;
	padding: 0.1em 0.5em;

	.logo-m {
		color: $primary;
		border: 1px solid rgba(255, 255, 255, 0.301);
		padding-inline: 0.2em;
		border-radius: 50%;
		background: black;
	}
}
</style>
