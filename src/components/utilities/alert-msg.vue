<script>
import {mapState, mapMutations } from "vuex";
export default {
	methods: {
		...mapMutations("auth", ["SET_ALERT_MSG"]),
		emitLogin() {
			this.$emit("CheckLoginOptionEvent", "login");
			//reset alert
			this.SET_ALERT_MSG({});
		},
	},

	computed: {
		...mapState("auth",["alert"]),
		headerBg() {
			return this.alert.type == "success"
				? { "success-alert": true }
				: { "error-alert": true };
		},
	},
};
</script>
<template>
	<div @click="emitLogin()" class="successful">
		<div class="card">
			<div :class="['card-header', headerBg]">
				<h3 class="sub-title text-light">{{ alert.title }}</h3>
				<h3 @click="emitLogin()" class="sub-title text-light close">X</h3>
			</div>
			<div class="card-body">
				<p >{{ alert.msg }}</p>
				<button class="card-btn" v-show="alert.type == 'success'" @click="emitLogin">
					Login now!!
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
.success-alert {
	background: $success;
}
.error-alert {
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
