<script>
import { required } from "vuelidate/lib/validators";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
	components: {
		vue2Dropzone,
	},
	data() {
		return {
			vehicle: {},
			list: [],
			submitted: false,
			dropzoneOptions: {
				url: "https://httpbin.org/post",
				thumbnailWidth: 150,
				thumbnailHeight: 150,
				// maxFilesize: 0.5,
				acceptedFiles: ".jpg, .jpeg, .png",
				headers: { "My-Awesome-Header": "header value" },
				dictDefaultMessage: "<i class='fa fa-cloud-upload'></i>UPLOAD IMAGE",
				addRemoveLinks: true,
			},
		};
	},
	validations: {
		vehicle: {
			make: { required },
			model: { required },
			trim: { required },
			year: { required },
			price: { required },
		},
	},
	created() {
		this.vehicle = this.vehiclePost;
	},
	methods: {
		...mapActions("profile", ["update", "fetchProfileById"]),
		...mapMutations("auth", ["SET_ALERT_MSG", "TOGGLE_IS_LOADING"]),
		...mapMutations("adsCrud", ["UPDATE_VEHICLE"]),
		...mapActions("adsCrud", ["uploadImages"]),

		afterComplete(file) {
			this.vehicle.pics.push(file);
		},
		async tryNextStep() {
			this.submitted = true;
			if (this.$v.$invalid) {
				return;
			} else {
				this.UPDATE_VEHICLE(this.vehicle);
				try {
					const response = await this.uploadImages({
						imgFiles: this.vehicle.pics,
						dealerId: this.user.dealerId,
					});
					console.log(response, "step1");
				} catch (error) {
					console.log(error);
				}
				// this.$router.push({ name: "step-2" });
			}
		},
	},
	computed: {
		...mapState("auth", ["user"]),
		...mapState("adsCrud", ["vehiclePost"]),
	},
};
</script>

<template>
	<div class="profile-wrapper">
		<div class="profile-container">
			<form class="form" @submit.prevent="tryActivateAccount">
				<vue2Dropzone
					@vdropzone-complete="afterComplete"
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
				</div>
				<div class="field-flex">
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
					<div class="form-field-container form-field-size">
						<label for="year" class="form-label">Year</label>
						<input
							id="year"
							maxlength="4"
							v-model.number="vehicle.year"
							type="text"
							placeholder="Enter year"
							:class="[
								'form-input',
								{ 'is-invalid ': submitted && !$v.vehicle.year.required },
							]"
						/>
						<div
							v-if="submitted && !$v.vehicle.year.required"
							class="invalid-feedback"
						>
							Year is required.
						</div>
					</div>
					<div class="form-field-container form-field-size">
						<label for="price" class="form-label">Price</label>
						<input
							id="price"
							v-model.number="vehicle.price"
							type="text"
							placeholder="Enter price"
							:class="[
								'form-input',
								{ 'is-invalid ': submitted && !$v.vehicle.price.required },
							]"
						/>
						<div
							v-if="submitted && !$v.vehicle.price.required"
							class="invalid-feedback"
						>
							Price is required.
						</div>
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
