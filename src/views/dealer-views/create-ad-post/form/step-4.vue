<script>
import { required } from "vuelidate/lib/validators";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
	components: {},
	data() {
		return {
			vehicle: {},
			submitted: false,
		};
	},
	validations: {
		vehicle: {
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
		console.log(this.user, "from created");
	},
	methods: {
		...mapActions("profile", ["update", "fetchProfileById"]),
		...mapMutations("auth", ["SET_ALERT_MSG", "TOGGLE_IS_LOADING"]),
		async tryCreatePost() {
			this.TOGGLE_IS_LOADING();
			this.submitted = true;
			if (this.$v.$invalid) {
				return;
			} else {
				try {
					await this.update({
						dealerId: this.vehicle.id,
						profileData: this.vehicle,
					});
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
		<div class="profile-container">
			<form class="form" @submit.prevent="tryActivateAccount">
				<div class="field-flex">
					<div class="form-field-container form-field-size">
						<label for="drivetrain" class="form-label">Drivetrain</label>
						<input
							id="drivetrain"
							v-model="vehicle.colorEx"
							type="text"
							placeholder="AWD | FWD | etc..."
							:class="[
								'form-input',
								{ 'is-invalid ': submitted && !$v.vehicle.drivetrain.required },
							]"
						/>
						<div
							v-if="submitted && !$v.vehicle.drivetrain.required"
							class="invalid-feedback"
						>
							Drivetrain is required.
						</div>
					</div>
					<div class="form-field-container form-field-size">
						<label for="colorIn" class="form-label">Color Interior</label>
						<input
							id="colorIn"
							v-model="vehicle.colorIn"
							type="text"
							placeholder="Enter color of interior"
							:class="[
								'form-input',
								{ 'is-invalid ': submitted && !$v.vehicle.colorIn.required },
							]"
						/>
						<div
							v-if="submitted && !$v.vehicle.colorIn.required"
							class="invalid-feedback"
						>
							Color Interior is required.
						</div>
					</div>
				</div>
				<div class="field-flex">
					<div class="form-field-container form-field-size">
						<label for="colorEx" class="form-label">Color Exterior</label>
						<input
							id="colorEx"
							v-model="vehicle.colorEx"
							type="text"
							placeholder="Enter color of exterior"
							:class="[
								'form-input',
								{ 'is-invalid ': submitted && !$v.vehicle.colorEx.required },
							]"
						/>
						<div
							v-if="submitted && !$v.vehicle.colorEx.required"
							class="invalid-feedback"
						>
							Color Exterior is required.
						</div>
					</div>
					<div class="form-field-container form-field-size">
						<label for="colorIn" class="form-label">Color Interior</label>
						<input
							id="colorIn"
							v-model="vehicle.colorIn"
							type="text"
							placeholder="Enter color of interior"
							:class="[
								'form-input',
								{ 'is-invalid ': submitted && !$v.vehicle.colorIn.required },
							]"
						/>
						<div
							v-if="submitted && !$v.vehicle.colorIn.required"
							class="invalid-feedback"
						>
							Color Interior is required.
						</div>
					</div>
				</div>
				<div class="form-field-container form-field-size">
					<label for="accessories" class="form-label">Accessories</label>
					<textarea
						v-model="vehicle.vin"
						placeholder="Divide by comma Ex: Bluetooth, Gps, Dashcam..."
						name="accessories"
						id="accessories"
						cols="30"
						rows="10"
						:class="[{ 'is-invalid ': submitted && !$v.vehicle.vin.required }]"
					></textarea>

					<div
						v-if="submitted && !$v.vehicle.vin.required"
						class="invalid-feedback"
					>
						Vin number is required.
					</div>
				</div>
			</form>
		</div>

		<!-- </div> -->
	</div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
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
			div {
				flex: 1;
			}
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
			// flex-direction: row;
			justify-content: space-between;
			align-content: center;
			// padding-right: 18em;

			label {
				// flex: 1;
			}
			input {
				// flex: 1;
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
