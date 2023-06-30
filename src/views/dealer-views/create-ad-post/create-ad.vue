<script>
import { mapActions, mapMutations, mapState } from "vuex";
import FormProgress from "./from-progress.vue";
import NavigationBtn from "./navigation-btn.vue";
export default {
	components: {
		FormProgress,
		NavigationBtn,
	},
	data() {
		return {};
	},
	computed: {
		...mapState("auth", ["user"]),
	},
};
</script>

<template>
	<div>
		<div v-if="!user.isActive" class="inactive-account">
			<p>Please update profile to activate account</p>
			<div class="button">
				<router-link :to="{ name: 'profile' }">Go to profile</router-link>
			</div>
		</div>
		<div v-else class="form-wrapper">
			<FormProgress />
			<router-view />
			<NavigationBtn />
		</div>
	</div>
</template>
<style lang="scss" scoped>
.inactive-account {
	width: 100%;
	display: grid;
	place-items: center;
	margin-block: 3em;
	font: $font-mobile-m-bold;
	color: $dark;

	&-text {
		text-align: center;
	}
}
.button {
	cursor: pointer;
	background: $primary;
	font: $font-text-bold;
	text-align: center;
	transition: all 250ms ease-in-out;
	border: 1px solid $light;
	margin: 0.5em;
	&:hover {
		transform: scale(1.01);
	}
	a {
		color: $light;
		padding: 0.8em;
		display: block;
	}
}
.form-wrapper {
	padding: 0 1em;
	display: flex;
	flex-direction: column;
	gap: 1em;
}

.form-wrapper {
	@include breakpoint(tablet) {
	}
	@include breakpoint(desktop) {
	}
}
</style>
