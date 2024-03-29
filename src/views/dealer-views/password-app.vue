<script>
import { required } from "vuelidate/lib/validators";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
	data() {
		return {
			password: {},
			submitted: false,
		};
	},
	validations: {
		password: {
			currentPassword: { required },
			newPassword: { required },
		},
	},

	methods: {
		...mapActions("auth", ["changePassword"]),
		...mapMutations("auth", ["SET_ALERT_MSG", "TOGGLE_IS_LOADING"]),
		async tryChangePassword() {
			this.submitted = true;
			if (this.$v.$invalid) {
				return;
			} else {
				this.TOGGLE_IS_LOADING();
				try {
					await this.changePassword(this.password);
					this.SET_ALERT_MSG({
						title: "Success",
						type: "success",
						msg: "Password updated successfully",
					});
					this.password = {};
				} catch (error) {
					this.SET_ALERT_MSG({
						title: "ERROR",
						type: "error",
						msg: error,
					});
				} finally {
					this.TOGGLE_IS_LOADING();
				}
			}
		},
	},
	computed: {
		...mapState("auth", ["user"]),
	},
};
</script>

<template>
	<div class="profile-wrapper">
		<div v-if="!user.isActive" class="inactive-account">
			<p>Please update profile to activate account</p>
			<div class="button">
				<router-link :to="{ name: 'profile' }">Go to profile</router-link>
			</div>
		</div>
		<div v-else class="profile-container">
			<!-- <p class="form-subtitle">Change your password.</p> -->

			<form class="form" @submit.prevent="tryChangePassword">
				<div class="form-field-container">
					<label for="name" class="form-label">Current Password</label>
					<div>
						<input
							id="name"
							v-model="password.currentPassword"
							type="text"
							placeholder="Enter commercial name"
							:class="[
								'form-input',
								{
									'is-invalid ':
										submitted && !$v.password.currentPassword.required,
								},
							]"
						/>
						<div
							v-if="submitted && !$v.password.currentPassword.required"
							class="invalid-feedback"
						>
							Current password is required.
						</div>
					</div>
				</div>
				<div class="form-field-container">
					<label for="name" class="form-label">New Password</label>
					<div class="input-container">
						<input
							id="name"
							v-model="password.newPassword"
							type="text"
							placeholder="Enter new password"
							:class="[
								'form-input',
								{
									'is-invalid ': submitted && !$v.password.newPassword.required,
								},
							]"
						/>
						<div
							v-if="submitted && !$v.password.newPassword.required"
							class="invalid-feedback"
						>
							A new password is required.
						</div>
					</div>
				</div>

				<div class="submit-btn">
					<button type="submit" class="update-btn">Change Password</button>
				</div>
			</form>
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
.invalid-feedback {
	color: red;
}
.update-btn {
	cursor: pointer;
	background: $success;
	font: $font-text-bold;
	color: $light;
	padding: 0.8em;
	text-align: center;
	transition: all 250ms ease-in-out;
	border: 1px solid $light;
	width: 100%;
	&:hover {
		transform: scale(1.01);
	}
}
.is-invalid {
	border: 1px solid red;
}

.form-subtitle {
	font: $font-text-bold;
	color: red;
}
.form-label {
	font: $font-text-bold;
	color: $lightDark;
}
.form-input {
	height: 3em;
	width: 100%;
	margin-bottom: 0.5em;
	padding-inline: 0.5em;
	border: 1px solid $lightestDark;
	outline: none;
	border-bottom: 1px solid $lightestDark;
	font: $font-text;
}
.form-field-container {
	display: flex;
	flex-direction: column;
	margin-bottom: 1em;
	border-bottom: 1px solid $lightestDark;
	padding-block: 2em;
}

.profile-wrapper {
	padding: 0 2em;
	@include breakpoint(tablet) {
		display: flex;
		.profile-container {
			flex: 1;
		}
		.field-flex {
			display: flex;
			gap: 1em;
			flex-wrap: wrap;
		}
		.form-field-size {
			// flex: 1;
		}
		.submit-btn {
			display: flex;
			justify-content: flex-end;
		}
		.update-btn {
			width: 30%;
		}
		.form-field-container {
			flex-direction: row;
			justify-content: space-between;
			align-content: center;
			padding-right: 14em;

			label {
				flex: 1;
			}
			div {
				flex: 1;
			}
		}
	}
	@include breakpoint(desktop) {
		.card-dealer {
			width: 60%;
		}
		.form-field-container {
			padding-right: 20em;
		}
	}
}
</style>
