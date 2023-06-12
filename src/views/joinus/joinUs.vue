<template>
	<div class="joinus-wrapper">
		<div class="joinus-container">
			<div class="component-tabs-container">
				<button
					@click="activeComponent = 'Login'"
					:class="[
						'component-switch-btn',
						{ 'active-component': activeComponent == 'Login' },
					]"
				>
					Login
				</button>

				<button
					@click="activeComponent = 'Register'"
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
			<a href="#" @click.prevent="checkLoginOption()" class="text-muted forgot-pwd">
				{{
					activeComponent == "Login" ? "Forgot your password?" : "Login instead"
				}}
			</a>
		</div>
	</div>
</template>

<script>
import Login from "../joinus/login-page";
import Register from "../joinus/register-page";

export default {
	components: {
		Login,
		Register,
	},
	data() {
		return {
			activeComponent: "Login",
		};
	},
	methods: {
		checkLoginOption() {
			if (this.activeComponent == 'Login') {
				this.$router.replace({name:'forgot-password'})
			} else {
				this.activeComponent = 'Login'
			}
		}
	}
};
</script>

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
			width: 50%;
		}
	}
}
</style>
