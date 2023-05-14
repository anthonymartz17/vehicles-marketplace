<template>
	<div class="contact">
		<h2 class="contact-title">Contact page</h2>
		<div class="contact-wrapper">
			<div class="contact-location">
				<h3 class="contact-subtitle">Our Office</h3>
				<p><span>Tel:</span>516 679-3454</p>
				<p><span>Fax:</span>516 679-3454</p>
				<address>358 N Broadway, Hicksville, NY 11801</address>
				<p><span>Hours:</span>Mon-Fri 9am-6pm</p>
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
					<p
						>For any questions or comments, please complete this form. We
						will get back to you as soon as possible.</p
					>
				</div>
				<form @submit.prevent="tryToSubmit" class="form">
					<div class="fields">
						<label for="name">Name:</label>
						<input
							type="text"
							id="name"
							v-model="user.name"
							:class="{is_invalid: submitted && !$v.user.name.required}"
						/>
					</div>
					<small
						v-if="submitted && !$v.user.name.required"
						class="errorText"
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
					<small
						v-if="submitted && !$v.user.name.required"
						class="errorText"
						>Email is required</small
					>
					<small
						v-else-if="submitted && !$v.user.email.email"
						class="errorText"
						>Email is invalid</small
					>

					<div class="fields">
						<label for="about">about:</label>
						<select
							name=""
							id="about"
							v-model="user.contactAbout"
							:class="{
								is_invalid: submitted && !$v.user.contactAbout.required,
							}"
						>
							<option value="" disabled>Select</option>
							<option
								:value="choice"
								v-for="choice in about"
								:key="choice"
								>{{ choice }}</option
							>
						</select>
					</div>
					<small
						v-if="submitted && !$v.user.contactAbout.required"
						class="errorText"
						>Select an option</small
					>
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
					<button class="btn-search btn-submit">Send</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import {required, email} from "vuelidate/lib/validators";

export default {
	created() {
		this.$getLocation(this.myCoordinates).then((coordinates) => {
			console.log(coordinates);
		});
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
			name: {required},
			email: {required, email},
			comments: {required},
			contactAbout: {required},
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

<style lang="scss" scoped>
.contact {
	margin: 1em;
	@include desktop {
		min-height: 40em;
		display: flex;
		flex-direction: column;
		gap: 1em;
	}
}
.contact-wrapper {
	font: $font-text;
	color: $dark;
	@include desktop {
		flex: 3;
		display: flex;
		gap: 1em;
	}
}
.contact-title {
	font: $font-mobile-l;
	color: $dark;
	@include desktop {
		flex: 0.5;
	}
}
.contact-subtitle {
	margin-block: 0.5em;
	font: $font-text-bold;
}
.contact-location {
	@include desktop {
		flex: 1;
	}
}
.geo-location {
	height: 20em;
	width: 20em;
	border: 1px solid $lightestDark;
	margin-block: 0.5em;

	@include desktop {
		height: 70%;
		width: 90%;
	}
}
.gmap {
	width: 100%;
	height: 100%;
}
.contact-form {
	@include desktop {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
}
.form-header {
	margin-block: 1em;
	@include desktop {
		flex: 1;
		margin-block: 0;
	}
}
.form {
	min-height: 35em;
	display: flex;
	flex-direction: column;
	// border: 1px solid red;
	@include desktop {
		flex: 3;
		height: auto;
	}
}
.fields {
	// border: 1px solid green;
	display: flex;
	flex-direction: column;
	margin-block: 0.5em;
	flex: 1;
	@include desktop {
		flex-direction: initial;
	}
}
.fields :first-child {
	flex: 1;
	@include desktop {
		flex: 0.5;
		align-self: center;
	}
}
.fields :last-child {
	flex: 2;
	font: $font-text;
	@include desktop {
		flex: 2;
	}
	option{
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
	font: $font-mobile-m;
	@include desktop {
		padding-block: 0;
	}
}
</style>
