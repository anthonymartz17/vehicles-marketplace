<script>
import { required, email } from "vuelidate/lib/validators";
import Multiselect from "vue-multiselect";
export default {
	components: {
		Multiselect,
	},
	created() {
		this.$getLocation(this.myCoordinates).then((coordinates) => {});
	},
	data() {
		return {
			submitted: false,
			user: {
				name: "",
				phone: "",
				email: "",
				comments: "",
				contactAbout: "",
			},
			about: [
				"Customer Service",
				"Suggestions",
				"Sales",
				"advertise with us",
				"Report error",
				"Other",
			],
			myCoordinates: {
				lat: 40.7748980666624,
				lng: -73.53101231626863,
			},
		};
	},
	validations: {
		user: {
			name: { required },
			email: { required, email },
			comments: { required },
			contactAbout: { required },
		},
	},
	methods: {
		tryToSubmit() {
			this.submitted = true;
			this.$v.$touch();

			if (this.$v.$invalid) {
				return;
			} else {
				alert("form has been submited");
				(this.user.name = ""),
					(this.user.phone = ""),
					(this.user.email = ""),
					(this.user.comments = ""),
					(this.user.contactAbout = ""),
					(this.submitted = false);
			}
		},
	},
};
</script>
<template>
	<div class="contact-wrapper">
		<h2 class="contact-title">Contact page</h2>
		<div class="contact">
			<div class="contact-location">
				<div class="contact-info">
					<h3 class="contact-subtitle">Our Office</h3>
					<p><span>Tel:</span>516 679-3454</p>
					<p><span>Fax:</span>516 679-3454</p>
					<address>358 N Broadway, Hicksville, NY 11801</address>
					<p><span>Hours:</span>Mon-Fri 9am-6pm</p>
				</div>
				<div class="geo-location">
					<GmapMap
						:center="myCoordinates"
						:zoom="15"
						map-type-id="terrain"
						class="gmap"
					>
					</GmapMap>
				</div>
			</div>
			<div class="contact-form">
				<div class="form-header">
					<h3 class="contact-subtitle">Email</h3>
					<p>
						For any questions or comments, please complete this form. We will
						get back to you as soon as possible.
					</p>
				</div>
				<form @submit.prevent="tryToSubmit" class="form">
					<div class="fields">
						<label for="name">Name:</label>
						<input
							type="text"
							id="name"
							v-model="user.name"
							:class="{ is_invalid: submitted && !$v.user.name.required }"
						/>
					</div>
					<small v-if="submitted && !$v.user.name.required" class="errorText"
						>Name is required</small
					>
					<div class="fields">
						<label for="Phone">Phone:</label>
						<input type="text" id="phone" v-model="user.phone" />
					</div>
					<div class="fields">
						<label for="email">email:</label>
						<input
							type="text"
							id="email"
							v-model="user.email"
							:class="{
								is_invalid:
									submitted &&
									(!$v.user.email.required || !$v.user.email.email),
							}"
						/>
					</div>
					<small v-if="submitted && !$v.user.name.required" class="errorText"
						>Email is required</small
					>
					<small v-else-if="submitted && !$v.user.email.email" class="errorText"
						>Email is invalid</small
					>
					<div class="fields">
						<label for="condition">about:</label>

						<multiselect
							v-model="user.contactAbout"
							:options="about"
							:searchable="false"
							:show-labels="false"
							placeholder="Select"
							:class="[
								'multiselect',
								{
									is_invalid: submitted && !$v.user.contactAbout.required,
								},
							]"
						></multiselect>
						<small
							v-if="submitted && !$v.user.contactAbout.required"
							class="errorText"
							>Select an option</small
						>
					</div>

					<div class="fields">
						<label for="comments">Comments:</label>
						<textarea
							name="comments"
							id="comments"
							cols="30"
							rows="10"
							v-model="user.comments"
							:class="{
								is_invalid: submitted && !$v.user.comments.required,
							}"
						></textarea>
					</div>
					<small
						v-if="submitted && !$v.user.comments.required"
						class="errorText"
						>Comments can not be empty</small
					>
					<div class="btn-container">
						<button class="btn-search btn-submit">Send</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
.contact {
	font: $font-text;
	color: $dark;
	display: flex;
	flex-direction: column;
	gap: 1em;
	margin-top: 1em;
}
.contact-title {
	font: $font-mobile-l;
	color: $dark;
}
.contact-subtitle {
	margin-block: 0.5em;
	font: $font-text-bold;
}

.geo-location {
	height: 20em;
	width: 100%;
	border: 1px solid $lightestDark;
	margin-block: 0.5em;
}
.gmap {
	width: 100%;
	height: 100%;
}

.form-header {
	margin-block: 1em;
}
.form {
	display: flex;
	flex-direction: column;
}
.fields {
	display: flex;
	flex-direction: column;
	margin-block: 0.5em;
	flex: 1;

	label {
		font: $font-text-bold;
	}
	input {
		height: 3em;
	}
}
.multiselect {
	border: 1px solid $lightDark;
	border-radius: 5px;
}
.fields :first-child {
	// flex: 1;
}
.fields :last-child {
	// flex: 2;
	font: $font-text;

	option {
		font: $font-text;
	}
}

.is_invalid {
	border: 1px solid red;
}
.errorText {
	color: red;
	display: block;
}
.btn-submit {
	padding-block: 0.5em;
	font: $font-text-bold;
}
.contact-location {
	display: flex;
	flex-direction: column;
}
.contact-wrapper {
	margin: 1em;

	@include breakpoint(tablet) {
		.contact-location {
			flex-direction: row;
			align-items: center;
		}
		.contact-info {
			flex: 1;
		}

		.geo-location {
			flex: 1;
		}
	}
	@include breakpoint(desktop) {
		min-height: 40em;
		display: flex;
		flex-direction: column;
		gap: 1em;
		padding-inline: 10em;

		.contact {
			flex: 3;
			gap: 1em;
			flex-direction: row;
		}

		.contact-title {
			flex: 0.5;
		}

		.contact-location {
			flex: 1;
			flex-direction: column;
			align-items: stretch;
		}
		.contact-info {
			flex: 0.5;
		}
		.geo-location {
			flex: 2;
		}

		.contact-form {
			flex: 1;
			display: flex;
			flex-direction: column;
		}

		.form-header {
			flex: 1;
			// margin-block: 0;
		}

		.form {
			flex: 3;
		}
		.btn-container {
			flex: 1;
			margin-block: 0.5em;
			display: flex;
			justify-content: flex-end;
		}
		// .btn-submit {
		// }
	}
}
</style>
