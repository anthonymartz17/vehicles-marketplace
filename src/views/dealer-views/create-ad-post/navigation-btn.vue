<template>
	<div class="btn-wrapper">
		<div class="btn-container">
			<div class="button back-btn" @click="goBack()">Back</div>
			<div class="button next-btn" @click="goNext()">Next</div>
		
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			stepsRoutes: ["create ad", "step-2", "step-3", "step-4"],

		};
	},

	methods: {
		goNext() {
			if (this.$route.name !== "step-4") {
				this.$router.push({ name: this.nextRoute });
			}
		},
		goBack() {
			if (this.$route.name !== "create ad") {
				this.$router.push({ name: this.backRoute });
			}
		},
	},
	computed: {
		backRoute() {
			return this.stepsRoutes[this.stepsRoutes.indexOf(this.$route.name) - 1];
		},
		nextRoute() {
			return this.stepsRoutes[this.stepsRoutes.indexOf(this.$route.name) + 1];
		},
	},
};
</script>

<style lang="scss" scoped>
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

.btn-wrapper {
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
