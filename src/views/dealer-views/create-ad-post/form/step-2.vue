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
			fuel: { required },
			carType: { required },
			carCondition: { required },
			mileage: { required },
			transmission: { required },
			engine: { required },
		},
	},

	methods: {
		
		tryNextStep() {
			this.submitted = true;
			if (this.$v.$invalid) {
				return;
			} else {
				this.$router.push({ name: "step-3" });
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
		
					<div class="form-field-container form-field-size">
						<label for="fuel" class="form-label">Fuel</label>
						<input
							id="fuel"
							v-model="vehiclePost.fuel"
							type="text"
							placeholder="Enter fuel"
							:class="[
								'form-input',
								{ 'is-invalid ': submitted && !$v.vehiclePost.fuel.required },
							]"
						/>
						<div
							v-if="submitted && !$v.vehiclePost.fuel.required"
							class="invalid-feedback"
						>
							Fuel is required.
						</div>
					</div>
					<div class="form-field-container form-field-size">
						<label for="carType" class="form-label">Car Type</label>
						<input
							id="carType"
							v-model="vehiclePost.carType"
							type="text"
							placeholder="Enter Type"
							:class="[
								'form-input',
								{
									'is-invalid ': submitted && !$v.vehiclePost.carType.required,
								},
							]"
						/>
						<div
							v-if="submitted && !$v.vehiclePost.carType.required"
							class="invalid-feedback"
						>
							Type is required.
						</div>
					</div>
		
				<div class="field-flex">
					<div class="form-field-container form-field-size">
						<label for="carCondition" class="form-label">Car Condition</label>
						<input
							id="carCondition"
							v-model="vehiclePost.carCondition"
							type="text"
							placeholder="Enter New or Used"
							:class="[
								'form-input',
								{
									'is-invalid ':
										submitted && !$v.vehiclePost.carCondition.required,
								},
							]"
						/>
						<div
							v-if="submitted && !$v.vehiclePost.carCondition.required"
							class="invalid-feedback"
						>
							Car Condition is required.
						</div>
					</div>

					<div class="form-field-container form-field-size">
						<label for="mileage" class="form-label">Miles per Gallon</label>
						<input
							id="mileage"
							v-model="vehiclePost.mileage"
							type="text"
							placeholder="Enter miles per gallon"
							:class="[
								'form-input',
								{
									'is-invalid ': submitted && !$v.vehiclePost.mileage.required,
								},
							]"
						/>
						<div
							v-if="submitted && !$v.vehiclePost.mileage.required"
							class="invalid-feedback"
						>
							Miles per Gallon is required.
						</div>
					</div>
				</div>
				<div class="field-flex">
					<div class="form-field-container form-field-size">
						<label for="transmission" class="form-label">Transmission</label>
						<input
							id="fuel"
							v-model="vehiclePost.transmission"
							type="text"
							placeholder="Enter Automatic | Mechanical ..."
							:class="[
								'form-input',
								{
									'is-invalid ':
										submitted && !$v.vehiclePost.transmission.required,
								},
							]"
						/>
						<div
							v-if="submitted && !$v.vehiclePost.transmission.required"
							class="invalid-feedback"
						>
							Transmission is required.
						</div>
					</div>
					<div class="form-field-container form-field-size">
						<label for="engine" class="form-label">Engine</label>
						<input
							id="engine"
							v-model="vehiclePost.engine"
							type="text"
							placeholder="Enter engine"
							:class="[
								'form-input',
								{ 'is-invalid ': submitted && !$v.vehiclePost.engine.required },
							]"
						/>
						<div
							v-if="submitted && !$v.vehiclePost.engine.required"
							class="invalid-feedback"
						>
							Engine is required.
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
	bottom: -10px;
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
	display: flex;
	position: relative;
	flex-direction: column;
	margin-bottom: 1em;
	padding-block: .5em;
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
