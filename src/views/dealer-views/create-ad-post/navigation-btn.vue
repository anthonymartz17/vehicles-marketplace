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
			step: 1,
		};
	},
	methods: {
		goBack() {
			if (this.step > 1) {
				this.step--;
				let route;
				switch (this.step) {
					case 1:
						route = "create ad";
						break;
					case 2:
						route = "step-2";
						break;
					case 3:
						route = "step-3";
						break;
				}
				this.$router.push({ name: route });
				console.log(this.step);
			}
		},
		goNext() {
			if (this.step < 4) {
				this.step++;
				let route;
				switch (this.step) {
					case 2:
						route = "step-2";
						break;
					case 3:
						route = "step-3";
						break;
					case 4:
						route = "step-4";
						break;
				}
				this.$router.push({ name: route });
				console.log(this.step);
			}
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
