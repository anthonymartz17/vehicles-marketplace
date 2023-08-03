<script>
import Login from "../authentication/login-page";
import Register from "../authentication/register-page";
import ForgotPassword from "../authentication/forgot-password";
// import SuccessConfirmation from "../../components/utilities/alert-msg.vue";
import { mapState } from "vuex";

export default {
	components: {
		Login,
		Register,
		ForgotPassword,
		// SuccessConfirmation,
	},
	data() {
		return {
			activeComponent: "Login",
		};
	},
	methods: {
		checkLoginOption(id) {
	
			switch (id) {
				case "Forgot your password?":
					this.activeComponent = "ForgotPassword";
					break;
				case "Login instead":
					this.activeComponent = "Login";
					break;
				case "register":
					this.activeComponent = "Register";
					break;
			}
		},
	},
	computed: {
		...mapState("auth", ["alert"]),
		toggleLinkText() {
			return this.activeComponent == "Login"
				? "Forgot your password?"
				: "Login instead";
		},
	},
};
</script>
<template>
	<div class="joinus-wrapper">
		<!-- <SuccessConfirmation
			v-show="alert.type"
			@CheckLoginOptionEvent="checkLoginOption($event)"
			alert="error"
			title="Error"
			msg="somehting went wrong"
		/> -->
		<div class="joinus-container">
			<div class="component-tabs-container">
				<button
					@click="checkLoginOption('Login instead')"
					:class="[
						'component-switch-btn',
						{ 'active-component': activeComponent == 'Login' },
					]"
				>
					Login
				</button>

				<button
					@click="checkLoginOption('register')"
					:class="[
						'component-switch-btn ',
						{ 'active-component': activeComponent == 'Register' },
					]"
				>
					Register
				</button>
			</div>

			<div class="active-component-wrapper">
				<component :is="activeComponent" />
			</div>
			<a
				href="#"
				@click.prevent="checkLoginOption(toggleLinkText)"
				class="text-muted forgot-pwd"
			>
				{{ toggleLinkText }}
			</a>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.joinus-wrapper {
	margin: 2em 0.5em;
}
.joinus-container {
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	display: flex;
	flex-direction: column;
	height: auto;
	min-height: 30em;
}
.component-tabs-container {
	display: flex;
	flex: 1;
}
.component-switch-btn {
	flex: 1;
	height: 5em;
	display: grid;
	place-items: center;
	font: $font-text-bold;
	outline: none;
	background: $dark;
	color: $light;
}
.joinus-btn-container {
	padding: 0;
	height: 5em;
	margin-bottom: 2em;
}

.joinus-btn {
	font-size: 1.3em;
	font-weight: 600;
}
.active-component-wrapper {
	flex: 4;
}
.active-component {
	background: $primary;
}
.inActive-component {
	background: $lightDark;
}
.forgot-pwd {
	text-align: center;
	margin-block: 1em;
	text-decoration: underline;
}
.joinus-wrapper {
	@include breakpoint(tablet) {
		display: flex;
		justify-content: center;
		.joinus-container {
			width: 70%;
		}
	}
	@include breakpoint(desktop) {
		.joinus-container {
			width: 60%;
		}
	}
}
</style>
