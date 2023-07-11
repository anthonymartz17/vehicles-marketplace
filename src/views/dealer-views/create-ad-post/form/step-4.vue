<script>
import { required } from "vuelidate/lib/validators";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
	components: {
		vue2Dropzone,
	},
	props: ["vehicleIdFromLocal"],

	data() {
		return {
			submitted: false,
			vehiclePostImages: [],
			dropzoneOptions: {
				url: "https://httpbin.org/post",
				thumbnailWidth: 150,
				thumbnailHeight: 150,
				// maxFilesize: 0.5,
				acceptedFiles: ".jpg, .jpeg, .png",
				headers: { "My-Awesome-Header": "header value" },
				dictDefaultMessage: "<i class='fa fa-cloud-upload'></i>UPLOAD IMAGE",
				addRemoveLinks: true,
				// accept: function (file, done) {
				// 	file.acceptDimensions = new Promise(function (resolve, reject) {
				// 		var reader = new FileReader();
				// 		reader.onload = function (e) {
				// 			var img = new Image();
				// 			img.onload = function () {
				// 				var aspectRatio = img.width / img.height;
				// 				var expectedAspectRatio = 1.91; // Aspect ratio of 1.91:1
				// 				var maxDimensions = { width: 1200, height: 800 }; // Maximum dimensions of 1200px x 800px

				// 				if (
				// 					Math.abs(aspectRatio - expectedAspectRatio) < 0.01 &&
				// 					img.width <= maxDimensions.width &&
				// 					img.height <= maxDimensions.height
				// 				) {
				// 					resolve();
				// 				} else {
				// 					reject();
				// 				}
				// 			};
				// 			img.src = e.target.result;
				// 		};
				// 		reader.readAsDataURL(file);
				// 	});

				// 	file.acceptDimensions.then(
				// 		function () {
				// 			done(); // Accept the file
				// 		},
				// 		function () {
				// 			done(
				// 				"Invalid image dimensions or aspect ratio. Please upload a 1.91:1 aspect ratio image with maximum dimensions of 1200px x 800px."
				// 			);
				// 		}
				// 	);
				// },
			},
		};
	},

	validations: {
		vehiclePost: {
			colorEx: { required },
			colorIn: { required },
			drivetrain: { required },
			accesories: { required },
		},
		vehiclePostImages: { required },
	},

	// mounted() {
	// 	// this.uploadImgManually()

	// creating user refresca
	// },

	methods: {
		...mapMutations("auth", ["SET_ALERT_MSG", "TOGGLE_IS_LOADING"]),
		...mapActions("adsCrud", [
			"createAd",
			"updateAd",
			"updateVehiclePost",
			"updateVehiclePostImages",
			"clearVehiclePost",
			"fetchImageUrlListById",
		]),
		afterComplete(file) {
			this.vehiclePostImages.push(file);
		},
		removeImg(file) {
			this.vehiclePostImages = this.vehiclePostImages.filter(
				(img) => img.dataURL != file.dataURL
			);
			console.log(this.vehiclePostImages);
		},
		async uploadImgManually() {
			if (this.vehicleImages.length > 0) {
				//add images to vuedropzone
				this.vehicleImages.forEach((detail) => {
					this.$refs.myVueDropzone.manuallyAddFile(detail, detail.dataURL);
				});
			}
		},
		async tryCreatePost() {
			this.submitted = true;
			if (this.$v.$invalid) {
				return;
			} else {
				try {
					this.TOGGLE_IS_LOADING();
					if (this.vehiceId) {
						console.log("updatinging", this.vehiclePost);
						delete this.vehiclePost.carPicsUrls;
						console.log(this.vehiclePostImages, "images en el momemnto");
						await this.updateAd({
							vehicleData: this.vehiclePost,
							vehicleImages: this.vehiclePostImages,
							vehicleId: this.vehiceId,
						});
					} else {
						await this.createAd({
							vehicleData: this.vehiclePost,
							vehicleImages: this.vehiclePostImages,
						});
					}
					localStorage.removeItem("vehicle_images");
					this.clearVehiclePost({});
					this.$router.push({ name: "dashboard" });
				} catch (error) {
					// throw error;
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
		vehiclePost: {
			get() {
				return this.$store.state.adsCrud.vehiclePost;
			},
			set(newValue) {
				this.updateVehiclePost(newValue);
			},
		},

		vehiceId() {
			const id = JSON.parse(localStorage.getItem("vehicle_id"));
			return id ? id : null;
		},
		vehicleImages() {
			const images = JSON.parse(localStorage.getItem("vehicle_images"));
			return images ? images : [];
		},
	},
};
</script>

<template>
	<div class="profile-wrapper">
		<div class="profile-container">
			<form class="form" @submit.prevent="tryCreatePost">
				<div class="form-field-container">
					<vue2Dropzone
						@vdropzone-removed-file="removeImg"
						@vdropzone-mounted="uploadImgManually"
						@vdropzone-complete="afterComplete"
						:destroyDropzone="false"
						ref="myVueDropzone"
						id="dropzone"
						:options="dropzoneOptions"
						:class="{
							'is-invalid ': submitted && !$v.vehiclePostImages.required,
						}"
					></vue2Dropzone>
					<div
						v-if="submitted && !$v.vehiclePostImages.required"
						class="invalid-feedback"
					>
						Photos are required.
					</div>
				</div>
				<div class="field-flex">
					<div class="form-field-container form-field-size">
						<label for="drivetrain" class="form-label">Drivetrain</label>
						<input
							id="drivetrain"
							v-model="vehiclePost.drivetrain"
							type="text"
							placeholder="AWD | FWD | etc..."
							:class="[
								'form-input',
								{
									'is-invalid ':
										submitted && !$v.vehiclePost.drivetrain.required,
								},
							]"
						/>
						<div
							v-if="submitted && !$v.vehiclePost.drivetrain.required"
							class="invalid-feedback"
						>
							Drivetrain is required.
						</div>
					</div>

					<div class="form-field-container form-field-size">
						<label for="colorEx" class="form-label">Color Exterior</label>
						<input
							id="colorEx"
							v-model="vehiclePost.colorEx"
							type="text"
							placeholder="Enter color of exterior"
							:class="[
								'form-input',
								{
									'is-invalid ': submitted && !$v.vehiclePost.colorEx.required,
								},
							]"
						/>
						<div
							v-if="submitted && !$v.vehiclePost.colorEx.required"
							class="invalid-feedback"
						>
							Color Exterior is required.
						</div>
					</div>
					<div class="form-field-container form-field-size">
						<label for="colorIn" class="form-label">Color Interior</label>
						<input
							id="colorIn"
							v-model="vehiclePost.colorIn"
							type="text"
							placeholder="Enter color of interior"
							:class="[
								'form-input',
								{ 'is-invalid': submitted && !$v.vehiclePost.colorIn.required },
							]"
						/>
						<div
							v-if="submitted && !$v.vehiclePost.colorIn.required"
							class="invalid-feedback"
						>
							Color Interior is required.
						</div>
					</div>
				</div>
				<div class="form-field-container form-field-size">
					<label for="accessories" class="form-label">Accessories</label>
					<textarea
						v-model="vehiclePost.accesories"
						placeholder="Divide by comma Ex: Bluetooth, Gps, Dashcam..."
						name="accessories"
						id="accessories"
						cols="30"
						rows="10"
						:class="[
							{
								'is-invalid ': submitted && !$v.vehiclePost.accesories.required,
							},
						]"
					></textarea>

					<div
						v-if="submitted && !$v.vehiclePost.accesories.required"
						class="invalid-feedback"
					>
						Accessories is required.
					</div>
				</div>
			</form>
		</div>
	</div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
.vueDropZone-container {
	position: relative;
}
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
	position: relative;
	display: flex;
	flex-direction: column;
	margin-bottom: 1em;
	padding-block: 0.5em;
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
