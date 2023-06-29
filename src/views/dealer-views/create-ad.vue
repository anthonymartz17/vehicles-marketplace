<script>
import { required } from "vuelidate/lib/validators";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import vue2Dropzone from "vue2-dropzone";
import Multiselect from "vue-multiselect";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
	components: {
		vue2Dropzone,
		Multiselect,
	},
	data() {
		return {
			vehicle: {},
			submitted: false,
			dropzoneOptions: {
				url: "https://httpbin.org/post",
				thumbnailWidth: 150,
				maxFilesize: 0.5,
				headers: { "My-Awesome-Header": "header value" },
				dictDefaultMessage: "<i class='fa fa-cloud-upload'></i>UPLOAD IMAGE",
				addRemoveLinks: true,
			},
			// dropzoneOptions: {
			// 	url: "", // Leave empty since we'll handle the upload manually
			// 	thumbnailWidth: 150,
			// 	maxFilesize: 0.5,
			// 	headers: { "My-Awesome-Header": "header value" },
			// 	dictDefaultMessage: "<i class='fa fa-cloud-upload'></i>UPLOAD IMAGE",
			// 	addRemoveLinks: true,
			// },
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
		console.log(this.user,'from created')
		// console.log(this.user);
		// this.fetchProfileById(this.user.dealerId).then((data) => {
		// 	this.vehicle = data;
		// });
	},
	methods: {
		...mapActions("profile", ["update", "fetchProfileById"]),
		...mapMutations("auth", ["SET_ALERT_MSG","TOGGLE_IS_LOADING"]),
		async tryCreatePost() {
			this.TOGGLE_IS_LOADING()
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
					this.TOGGLE_IS_LOADING()
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
			<p class="form-subtitle">Fill out to make a post.</p>

			<form class="form" @submit.prevent="tryActivateAccount">
				<vue2Dropzone
					ref="myVueDropzone"
					id="dropzone"
					:options="dropzoneOptions"
				></vue2Dropzone>
				<div class="field-flex">
					<div class="form-field-container">
						<label for="make" class="form-label">Make</label>
						<input
							id="make"
							v-model="vehicle.make"
							type="text"
							placeholder="Enter commercial name"
							:class="[
								'form-input',
								{ 'is-invalid ': submitted && !$v.vehicle.make.required },
							]"
						/>
						<div
							v-if="submitted && !$v.vehicle.make.required"
							class="invalid-feedback"
						>
							Make is required.
						</div>
					</div>
					<div class="form-field-container form-field-size">
						<label for="model" class="form-label">Model</label>
						<input
							id="model"
							v-model="vehicle.model"
							type="text"
							placeholder="Enter model"
							:class="[
								'form-input',
								{ 'is-invalid ': submitted && !$v.vehicle.model.required },
							]"
						/>
						<div
							v-if="submitted && !$v.vehicle.model.required"
							class="invalid-feedback"
						>
							Model is required.
						</div>
					</div>
					<div class="form-field-container form-field-size">
						<label for="trim" class="form-label">Trim</label>
						<input
							id="trim"
							v-model="vehicle.trim"
							type="text"
							placeholder="Enter trim"
							:class="[
								'form-input',
								{ 'is-invalid ': submitted && !$v.vehicle.trim.required },
							]"
						/>
						<div
							v-if="submitted && !$v.vehicle.trim.required"
							class="invalid-feedback"
						>
							Trim is required.
						</div>
					</div>
				</div>
				<div class="form-field-container form-field-size">
					<label for="vin" class="form-label">Vin Number</label>
					<input
						id="vin"
						v-model="vehicle.vin"
						type="text"
						placeholder="Enter vin number"
						:class="[
							'form-input',
							{ 'is-invalid ': submitted && !$v.vehicle.vin.required },
						]"
					/>
					<div
						v-if="submitted && !$v.vehicle.vin.required"
						class="invalid-feedback"
					>
						Vin number is required.
					</div>
				</div>
				<div class="field-flex">
					<div class="form-field-container form-field-size">
						<label for="carCondition" class="form-label">Car Condition</label>
						<input
							id="carCondition"
							v-model="vehicle.carCondition"
							type="text"
							placeholder="Enter New or Used"
							:class="[
								'form-input',
								{
									'is-invalid ': submitted && !$v.vehicle.carCondition.required,
								},
							]"
						/>
						<div
							v-if="submitted && !$v.vehicle.carCondition.required"
							class="invalid-feedback"
						>
							Car Condition is required.
						</div>
					</div>
					<div class="form-field-container form-field-size">
						<label for="carType" class="form-label">Car Type</label>
						<input
							id="carType"
							v-model="vehicle.carType"
							type="text"
							placeholder="Enter Type"
							:class="[
								'form-input',
								{ 'is-invalid ': submitted && !$v.vehicle.carType.required },
							]"
						/>
						<div
							v-if="submitted && !$v.vehicle.carType.required"
							class="invalid-feedback"
						>
							Type is required.
						</div>
					</div>
					<div class="form-field-container form-field-size">
						<label for="engine" class="form-label">Engine</label>
						<input
							id="engine"
							v-model="vehicle.engine"
							type="text"
							placeholder="Enter engine"
							:class="[
								'form-input',
								{ 'is-invalid ': submitted && !$v.vehicle.engine.required },
							]"
						/>
						<div
							v-if="submitted && !$v.vehicle.engine.required"
							class="invalid-feedback"
						>
							Engine is required.
						</div>
					</div>
				</div>
				<div class="field-flex">
					<div class="form-field-container form-field-size">
						<label for="transmission" class="form-label">Transmission</label>
						<input
							id="fuel"
							v-model="vehicle.transmission"
							type="text"
							placeholder="Enter Automatic | Mechanical ..."
							:class="[
								'form-input',
								{
									'is-invalid ': submitted && !$v.vehicle.transmission.required,
								},
							]"
						/>
						<div
							v-if="submitted && !$v.vehicle.transmission.required"
							class="invalid-feedback"
						>
							Transmission is required.
						</div>
					</div>
					<div class="form-field-container form-field-size">
						<label for="mileage" class="form-label">Mileage</label>
						<input
							id="carType"
							v-model="vehicle.mileage"
							type="text"
							placeholder="Enter miles on car"
							:class="[
								'form-input',
								{ 'is-invalid ': submitted && !$v.vehicle.mileage.required },
							]"
						/>
						<div
							v-if="submitted && !$v.vehicle.mileage.required"
							class="invalid-feedback"
						>
							Mileage is required.
						</div>
					</div>
					<div class="form-field-container form-field-size">
						<label for="engine" class="form-label">Engine</label>
						<input
							id="engine"
							v-model="vehicle.engine"
							type="text"
							placeholder="Enter engine"
							:class="[
								'form-input',
								{ 'is-invalid ': submitted && !$v.vehicle.engine.required },
							]"
						/>
						<div
							v-if="submitted && !$v.vehicle.engine.required"
							class="invalid-feedback"
						>
							Engine is required.
						</div>
					</div>
				</div>
				<div class="field-flex">
					<div class="form-field-container form-field-size">
						<label for="drivetrain" class="form-label">Drivetrain</label>
						<input
							id="fuel"
							v-model="vehicle.drivetrain"
							type="text"
							placeholder="Enter AWD | FWD ..."
							:class="[
								'form-input',
								{
									'is-invalid ': submitted && !$v.vehicle.drivetrain.required,
								},
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
						<label for="engine" class="form-label">Engine</label>
						<input
							id="engine"
							v-model="vehicle.engine"
							type="text"
							placeholder="Enter engine"
							:class="[
								'form-input',
								{ 'is-invalid ': submitted && !$v.vehicle.engine.required },
							]"
						/>
						<div
							v-if="submitted && !$v.vehicle.engine.required"
							class="invalid-feedback"
						>
							Engine is required.
						</div>
					</div>
				</div>

				<div class="form-field-container">
					<label for="address" class="form-label">Address</label>
					<input
						id="address"
						v-model="vehicle.address"
						type="text"
						placeholder="Enter address"
						:class="[
							'form-input',
							{
								'is-invalid ': submitted && !$v.vehicle.address.required,
							},
						]"
					/>
					<div
						v-if="submitted && !$v.vehicle.address.required"
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
						v-model="vehicle.city"
						type="text"
						placeholder="Enter city"
						:class="[
							'form-input',
							{
								'is-invalid ': submitted && !$v.vehicle.city.required,
							},
						]"
					/>
					<div
						v-if="submitted && !$v.vehicle.city.required"
						class="invalid-feedback"
					>
						city is required.
					</div>
				</div>
				<div class="form-field-container form-field-size">
					<label for="state" class="form-label">State</label>
					<input
						id="state"
						v-model="vehicle.state"
						type="text"
						placeholder="Enter state"
						:class="[
							'form-input',
							{
								'is-invalid ': submitted && !$v.vehicle.state.required,
							},
						]"
					/>
					<div
						v-if="submitted && !$v.vehicle.state.required"
						class="invalid-feedback"
					>
						state is required.
					</div>
				</div>

				<div class="form-field-container form-field-size">
					<label for="zipcode" class="form-label">ZipCode</label>
					<input
						id="zipcode"
						v-model="vehicle.zipcode"
						type="text"
						placeholder="Enter zip code"
						:class="[
							'form-input',
							{
								'is-invalid ': submitted && !$v.vehicle.zipcode.required,
							},
						]"
					/>
					<div
						v-if="submitted && !$v.vehicle.zipcode.required"
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
