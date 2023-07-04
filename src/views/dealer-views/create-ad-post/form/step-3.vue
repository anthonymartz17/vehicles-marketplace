<script>
import { required } from "vuelidate/lib/validators";

export default {
	data() {
		return {
			submitted: false,
		};
	},
	validations: {
		vehiclePost: {
			vin: { required },
			titleCheck: { required },
			accidents: { required },
			owner: { required },
			miles: { required },
			location: { required },
		},
	},

	methods: {
		tryNextStep() {
			this.submitted = true;
			if (this.$v.$invalid) {
				return;
			} else {
				this.$router.push({ name: "step-4" });
			}
		},
	},
	computed: {
		vehiclePost: {
			get() {
				return this.$store.state.adsCrud.vehiclePost;
			},
			set(newValue) {
				this.$store.dispatch("adsCrud/updateVehiclePost", newValue);
			},
		},
	},
};
</script>

<template>
	<div class="profile-wrapper">
		<div class="profile-container">
			<form class="form" @submit.prevent="tryActivateAccount">
				<div class="field-flex">
					<div class="form-field-container form-field-size">
						<label for="vin" class="form-label">Vin Number</label>
						<input
							id="vin"
							v-model="vehiclePost.vin"
							type="text"
							placeholder="Enter vin number"
							:class="[
								'form-input',
								{ 'is-invalid ': submitted && !$v.vehiclePost.vin.required },
							]"
						/>
						<div
							v-if="submitted && !$v.vehiclePost.vin.required"
							class="invalid-feedback"
						>
							Vin number is required.
						</div>
					</div>
					<div class="form-field-container form-field-size">
						<label for="titleCheck" class="form-label">Title Check</label>
						<input
							id="titleCheck"
							v-model="vehiclePost.titleCheck"
							type="text"
							placeholder="Enter AWD | FWD ..."
							:class="[
								'form-input',
								{
									'is-invalid ':
										submitted && !$v.vehiclePost.titleCheck.required,
								},
							]"
						/>
						<div
							v-if="submitted && !$v.vehiclePost.titleCheck.required"
							class="invalid-feedback"
						>
							Title Check is required.
						</div>
					</div>
				</div>
				<div class="field-flex">
					<div class="form-field-container form-field-size">
						<label for="accidents" class="form-label">Accidents</label>
						<input
							id="accidents"
							maxlength="2"
							v-model.number="vehiclePost.accidents"
							type="text"
							placeholder="Enter accidents"
							:class="[
								'form-input',
								{
									'is-invalid ':
										submitted && !$v.vehiclePost.accidents.required,
								},
							]"
						/>
						<div
							v-if="submitted && !$v.vehiclePost.accidents.required"
							class="invalid-feedback"
						>
							Accidents is required.
						</div>
					</div>
					<div class="form-field-container form-field-size">
						<label for="owners" class="form-label"
							>Number of previous owners</label
						>
						<input
							id="owners"
							maxlength="2"
							v-model.number="vehiclePost.owner"
							type="text"
							placeholder="Enter owners"
							:class="[
								'form-input',
								{ 'is-invalid ': submitted && !$v.vehiclePost.owner.required },
							]"
						/>
						<div
							v-if="submitted && !$v.vehiclePost.owner.required"
							class="invalid-feedback"
						>
							Number of previous owners is required.
						</div>
					</div>
				</div>
				<div class="field-flex">
					<div class="form-field-container form-field-size">
						<label for="miles" class="form-label">Miles on car</label>
						<input
							id="carType"
							v-model="vehiclePost.miles"
							type="text"
							placeholder="Enter miles on car"
							:class="[
								'form-input',
								{ 'is-invalid ': submitted && !$v.vehiclePost.miles.required },
							]"
						/>
						<div
							v-if="submitted && !$v.vehiclePost.miles.required"
							class="invalid-feedback"
						>
							Miles on car is required.
						</div>
					</div>
					<div class="form-field-container form-field-size">
						<label for="location" class="form-label">Location of vehicle</label>
						<input
							id="location"
							v-model="vehiclePost.location"
							type="text"
							placeholder="Enter location of vehicle"
							:class="[
								'form-input',
								{
									'is-invalid ': submitted && !$v.vehiclePost.location.required,
								},
							]"
						/>
						<div
							v-if="submitted && !$v.vehiclePost.location.required"
							class="invalid-feedback"
						>
							Location of vehicle is required.
						</div>
					</div>
				</div>
			</form>
		</div>
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
	display: flex;
}

.invalid-feedback {
	color: red;
	position: absolute;
	bottom: -5px;
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
	border: 1px solid red !important;
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
	position: relative;
	display: flex;
	flex-direction: column;
	margin-bottom: 1em;
	// border-bottom: 1px solid $lightestDark;
	padding-block: 1em;
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
