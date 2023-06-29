<script>
import { required } from "vuelidate/lib/validators";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
	data() {
		return {
			userProfile: {},
			submitted: false,
		};
	},
	validations: {
		userProfile: {
			name: { required },
			manager: { required },
			tel: { required },
			address: { required },
			city: { required },
			state: { required },
			zipcode: { required },
		},
	},
	created() {
		this.fetchProfileById(this.user.dealerId).then((data) => {
			if (data) this.userProfile = data;
		});
	},
	methods: {
		...mapActions("profile", ["update", "fetchProfileById"]),
		...mapMutations("auth", ["SET_ALERT_MSG", "ACTIVATE_ACCOUNT"]),
		async tryActivateAccount() {
			this.submitted = true;
			if (this.$v.$invalid) {
				return;
			} else {
				try {
					//to activate account after registration if not active
					if (this.user.isActive === false) {
						this.userProfile.active = true;
					}
					const userUpdated = await this.update({
						dealerId: this.userProfile.id,
						profileData: this.userProfile,
					});
					console.log(userUpdated, "EL ACTUALIZADO");
					//updates currentUserDealer.isActive if account hadnt been activated to immediatelly show active account views when autologin fires.
					if (userUpdated.active) {
						const currentUserDealer = JSON.parse(
							localStorage.getItem("currentUserDealer")
						);
						currentUserDealer.isActive = true;
						localStorage.setItem(
							"currentUserDealer",
							JSON.stringify(currentUserDealer)
						);
					}
					this.SET_ALERT_MSG({
						title: "Success",
						type: "success",
						msg: "Information updated successfully",
					});
				} catch (error) {
					this.SET_ALERT_MSG({
						title: "ERROR",
						type: "error",
						msg: error,
					});
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
		<div class="profile-container">
			<p class="form-subtitle">Update your information here.</p>

			<form class="form" @submit.prevent="tryActivateAccount">
				<div class="form-field-container">
					<label for="name" class="form-label">Company Name</label>
					<input
						id="name"
						v-model="userProfile.name"
						type="text"
						placeholder="Enter commercial name"
						:class="[
							'form-input',
							{ 'is-invalid ': submitted && !$v.userProfile.name.required },
						]"
					/>
					<div
						v-if="submitted && !$v.userProfile.name.required"
						class="invalid-feedback"
					>
						Commercial name is required.
					</div>
				</div>

				<div class="form-field-container form-field-size">
					<label for="manager" class="form-label">Manager</label>
					<input
						id="manager"
						v-model="userProfile.manager"
						type="text"
						placeholder="Enter manager's name"
						:class="[
							'form-input',
							{ 'is-invalid ': submitted && !$v.userProfile.manager.required },
						]"
					/>
					<div
						v-if="submitted && !$v.userProfile.manager.required"
						class="invalid-feedback"
					>
						Full name is required.
					</div>
				</div>
				<div class="form-field-container form-field-size">
					<label for="tel" class="form-label">Phone Number</label>
					<input
						id="tel"
						v-model="userProfile.tel"
						type="text"
						placeholder="Enter phone number"
						:class="[
							'form-input',
							{ 'is-invalid ': submitted && !$v.userProfile.tel.required },
						]"
					/>
					<div
						v-if="submitted && !$v.userProfile.tel.required"
						class="invalid-feedback"
					>
						Phone is required.
					</div>
				</div>

				<div class="form-field-container">
					<label for="address" class="form-label">Address</label>
					<input
						id="address"
						v-model="userProfile.address"
						type="text"
						placeholder="Enter address"
						:class="[
							'form-input',
							{
								'is-invalid ': submitted && !$v.userProfile.address.required,
							},
						]"
					/>
					<div
						v-if="submitted && !$v.userProfile.address.required"
						class="invalid-feedback"
					>
						Address is required.
					</div>
				</div>
				<!-- <div class="field-flex"> -->

				<div class="form-field-container form-field-size">
					<label for="city" class="form-label">City</label>
					<input
						id="city"
						v-model="userProfile.city"
						type="text"
						placeholder="Enter city"
						:class="[
							'form-input',
							{
								'is-invalid ': submitted && !$v.userProfile.city.required,
							},
						]"
					/>
					<div
						v-if="submitted && !$v.userProfile.city.required"
						class="invalid-feedback"
					>
						city is required.
					</div>
				</div>
				<div class="form-field-container form-field-size">
					<label for="state" class="form-label">State</label>
					<input
						id="state"
						v-model="userProfile.state"
						type="text"
						placeholder="Enter state"
						:class="[
							'form-input',
							{
								'is-invalid ': submitted && !$v.userProfile.state.required,
							},
						]"
					/>
					<div
						v-if="submitted && !$v.userProfile.state.required"
						class="invalid-feedback"
					>
						state is required.
					</div>
				</div>

				<div class="form-field-container form-field-size">
					<label for="zipcode" class="form-label">ZipCode</label>
					<input
						id="zipcode"
						v-model="userProfile.zipcode"
						type="text"
						placeholder="Enter zip code"
						:class="[
							'form-input',
							{
								'is-invalid ': submitted && !$v.userProfile.zipcode.required,
							},
						]"
					/>
					<div
						v-if="submitted && !$v.userProfile.zipcode.required"
						class="invalid-feedback"
					>
						zipcode is required.
					</div>
				</div>
				<!-- </div> -->

				<div class="submit-btn">
					<button type="submit" class="update-btn">Update Info</button>
				</div>
			</form>
		</div>

		<!-- </div> -->
	</div>
</template>

<style lang="scss" scoped>
.profile-wrapper {
	padding: 0 1em;
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
	margin-block: 1em;
}
.form-label {
	font: $font-text-bold;
	color: $lightDark;
}
.form-input {
	height: 3em;
	// border-radius: 5px;
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
			padding-right: 18em;

			label {
				flex: 1;
			}
			input {
				flex: 1;
			}
		}
	}
	@include breakpoint(desktop) {
		.card-dealer {
			width: 60%;
		}
	}
}
</style>
