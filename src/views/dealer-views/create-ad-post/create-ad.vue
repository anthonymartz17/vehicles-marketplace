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
		return {
			stepsRoutes: ["create ad", "step-2", "step-3", "step-4"],
		};
	},
	methods: {
		goNext() {
			if (this.$route.name !== "step-4") {
				// this.$router.push({ name: this.nextRoute });
				this.$refs.currentView.tryNextStep();
			} else {
				this.$refs.currentView.tryCreatePost();
			}
		},
		goBack() {
			if (this.$route.name !== "create ad") {
				this.$router.push({ name: this.backRoute });
			}
		},
	},
	computed: {
		...mapState("auth", ["user"]),
		backRoute() {
			return this.stepsRoutes[this.stepsRoutes.indexOf(this.$route.name) - 1];
		},
		nextRoute() {
			console.log(this.$refs.currentView.vehicle);
			return this.stepsRoutes[this.stepsRoutes.indexOf(this.$route.name) + 1];
		},
	},
};
</script>

<template>
	<div class="create-ad-wrapper">
		<div v-if="!user.isActive" class="inactive-account">
			<p>Please update profile to activate account</p>
			<div class="button">
				<router-link :to="{ name: 'profile' }">Go to profile</router-link>
			</div>
		</div>
		<div v-else class="form-wrapper">
			<FormProgress />
			<router-view ref="currentView" />
			<div class="btn-wrapper">
				<div class="btn-container">
					<button class="button back-btn" @click="goBack()">Back</button>
					<button class="button next-btn" @click="goNext()">
						{{ $route.name != "step-4" ? "Next" : "Create Ad" }}
					</button>
				</div>
			</div>
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

.btn-wrapper {
	display: flex;
}
.btn-container {
	display: flex;
	flex: 1;
}
.button {
	flex: 1;
	cursor: pointer;
	padding: 0.8em;
	font: $font-text-bold;
	text-align: center;
	transition: all 250ms ease-in-out;
	border: 1px solid $light;
	margin: 0.5em;
	color: $light;
	&:hover {
		transform: scale(1.01);
	}
}

.back-btn {
	background: $lightDark;
}
.next-btn {
	background: $primary;
}

.create-ad-wrapper {
	@include breakpoint(tablet) {
	}
	@include breakpoint(desktop) {
		justify-content: center;

		.btn-container {
			flex: none;
			width: 70%;
		}
	}
}
</style>
