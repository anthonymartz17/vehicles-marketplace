<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
	methods: {
		...mapMutations("auth", ["SET_ALERT_MSG"]),
		...mapActions("adsCrud", ["deleteAd"]),
		async emitLogin() {
			if (this.alert.vehicleId) {
				await this.deleteAd(this.alert.vehicleId);
			}
			this.$emit("CheckLoginOptionEvent", "login");
			//reset alert
			this.SET_ALERT_MSG({});
		},
	},

	computed: {
		...mapState("auth", ["alert", "showAlert"]),

		btnText() {
			let text;
			if (
				this.$route.name == "activationForm" &&
				this.alert.type == "success"
			) {
				text = "Login Now!!";
			}
			if (this.alert.vehicleId) {
				text = "Delete";
			}
			return text;
		},
	},
};
</script>
<template>
	<div @click="SET_ALERT_MSG({})" class="successful">
		<div class="card">
			<div :class="['card-header', alert.type]">
				<h3 class="sub-title text-light">{{ alert.title }}</h3>
				<h3 @click="SET_ALERT_MSG({})" class="sub-title text-light close">X</h3>
			</div>
			<div class="card-body">
				<p>{{ alert.msg }}</p>
				<button
					v-show="
						($route.name == 'activationForm' && alert.type == 'success') ||
						alert.vehicleId
					"
					class="card-btn"
					@click="emitLogin"
				>
					{{ btnText }}
				</button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.successful {
	position: absolute;
	display: grid;
	place-items: center;
	background: rgba(5, 5, 5, 0.438);
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 100;
}
.card {
	background: $light;
	margin-bottom: 20em;
	width: 20em;
	min-height: 13em;
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.card-header {
	display: flex;
	justify-content: space-between;
	padding: 0.5em;
}
.success {
	background: $success;
}
.warning {
	background: $warning;
}
.error {
	background: $primary;
}
.card-btn {
	font: $font-text-bold;
	color: $lightDark;
	padding: 0.5em 1em;
	cursor: pointer;
}
.card-body {
	display: grid;
	place-items: center;
	gap: 1em;
	font: $font-text-bold;
	color: $lightDark;
	margin-block: 1em;
	padding-inline: 1em;
}
.close {
	cursor: pointer;
}
.card {
	@include breakpoint(tablet) {
		width: 60%;
		.custom-btn {
			width: 50%;
		}
	}
	@include breakpoint(desktop) {
		width: 30%;
		.custom-btn {
			width: 30%;
		}
	}
}
</style>
