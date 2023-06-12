<script>
import { required, email } from "vuelidate/lib/validators";

export default {
	data() {
		return {
			user: {},
			submitted: false,
		};
	},
	validations: {
		user: {
			commercialname: { required },
			address: { required },
			city: { required },
			state: { required },
			zipcode: { required },
			fullname: { required },
			phonenumber: { required },
			email: { required, email },
			password: { required },
		},
	},
	methods: {
		tryToRegisterIn() {
			this.submitted = true;
			if (this.$v.$invalid) {
				return;
			} else {
				// Perform registration logic here
				// Example: calling an action from Vuex store
				this.$store
					.dispatch("auth/signUp", {
						username: this.user.user_name,
						email: this.user.email,
						password: this.user.password,
					})
					.then(() => {
						// Handle successful registration
						localStorage.setItem(
							"userToConfirm",
							JSON.stringify({
								user: this.user.user_name,
								email: this.user.email,
							})
						);
						this.$router.replace({ name: "email-verification" });
					})
					.catch((error) => {
						// Handle registration error
						this.ALERT({
							isSuccess: false,
							isError: true,
							error: error,
						});
					});
			}
		},
	},
};
</script>

<template>
	<div>
		<form class="form" @submit.prevent="tryToRegisterIn">
			<h4 class="sub-title">Details of your business</h4>
			<div class="form-field-container">
				<label for="commercialname" class="form-label">Commercial Name</label>
				<input
					id="commercialname"
					v-model="user.commercialname"
					type="text"
					placeholder="Enter commercial name"
					:class="[
						'form-input',
						{ 'is-invalid ': submitted && !$v.user.commercialname.required },
					]"
				/>
				<div
					v-if="submitted && !$v.user.commercialname.required"
					class="invalid-feedback"
				>
					Commercial name is required.
				</div>
			</div>
			<div class="address-container"></div>
			<div class="d-flex">
				<div class="form-field-container form-field-size">
					<label for="fullname" class="form-label">Full name</label>
					<input
						id="fullname"
						v-model="user.fullname"
						type="text"
						placeholder="Enter your full name"
						:class="[
							'form-input',
							{ 'is-invalid ': submitted && !$v.user.fullname.required },
						]"
					/>
					<div
					v-if="submitted && !$v.user.fullname.required"
					class="invalid-feedback"
					>
					Full name is required.
					</div>
				</div>
				<div class="form-field-container form-field-size">
					<label for="phonenumber" class="form-label">Phone Number</label>
					<input
					id="phonenumber"
					v-model="user.phonenumber"
					type="text"
					placeholder="Enter phone number"
					:class="[
							'form-input',
							{ 'is-invalid ': submitted && !$v.user.phonenumber.required },
						]"
					/>
					<div
					v-if="submitted && !$v.user.phonenumber.required"
					class="invalid-feedback"
					>
					phonenumber is required.
				</div>
			</div>
		</div>
		<div class="d-flex">
			<div class="form-field-container form-field-size">
				<label for="email" class="form-label">Email address</label>
				<input
				id="email"
				v-model="user.email"
				type="text"
				placeholder="Enter email"
				:class="[
							'form-input',
							{
								'is-invalid ':
								submitted &&
								(!$v.user.email.required || !$v.user.email.email),
							},
						]"
					/>
					<div
					v-if="submitted && !$v.user.email.required"
					class="invalid-feedback"
					>
					Email is required.
				</div>
				<div
				v-else-if="submitted && !$v.user.email.email"
				class="invalid-feedback"
				>
				Enter a valid email.
			</div>
		</div>
		
		<div class="form-field-container form-field-size">
			<label for="input-2" class="form-label">Create password</label>
			<input
			id="input-2"
			v-model="user.password"
			type="password"
			placeholder="Enter password"
			:class="[
							'form-input',
							{ 'is-invalid': submitted && !$v.user.password.required },
						]"
					/>
					<div
					v-if="submitted && !$v.user.password.required"
					class="invalid-feedback"
					>
					Password is required.
				</div>
			</div>
		</div>
		<div class="form-field-container">
			<label for="address" class="form-label">Address</label>
			<input
				id="address"
				v-model="user.address"
				type="text"
				placeholder="Enter address"
				:class="[
					'form-input',
					{
						'is-invalid ': submitted && !$v.user.address.required,
					},
				]"
			/>
			<div
				v-if="submitted && !$v.user.email.required"
				class="invalid-feedback"
			>
				Address is required.
			</div>
		</div>

		<div class="d-flex">
			<div class="form-field-container form-field-size">
				<label for="city" class="form-label">City</label>
				<input
					id="city"
					v-model="user.city"
					type="text"
					placeholder="Enter city"
					:class="[
						'form-input',
						{
							'is-invalid ': submitted && !$v.user.city.required,
						},
					]"
				/>
				<div
					v-if="submitted && !$v.user.city.required"
					class="invalid-feedback"
				>
					city is required.
				</div>
			</div>
			<div class="form-field-container form-field-size">
				<label for="state" class="form-label">State</label>
				<input
					id="state"
					v-model="user.state"
					type="text"
					placeholder="Enter state"
					:class="[
						'form-input',
						{
							'is-invalid ': submitted && !$v.user.state.required,
						},
					]"
				/>
				<div
					v-if="submitted && !$v.user.state.required"
					class="invalid-feedback"
				>
					state is required.
				</div>
			</div>
			<div class="form-field-container form-field-size">
				<label for="zipcode" class="form-label">ZipCode</label>
				<input
					id="zipcode"
					v-model="user.zipcode"
					type="text"
					placeholder="Enter zip code"
					:class="[
						'form-input',
						{
							'is-invalid ': submitted && !$v.user.zipcode.required,
						},
					]"
				/>
				<div
					v-if="submitted && !$v.user.zipcode.required"
					class="invalid-feedback"
				>
					zipcode is required.
				</div>
			</div>
		</div>

			<div class="submit-btn">
				<button type="submit" class="btn">Register</button>
			</div>
		</form>
	</div>
</template>

<style lang="scss" scoped>
.invalid-feedback {
	color: red;
}
.is-invalid {
	border: 1px solid red;
}
.form {
	margin: 1em;
	// height: 20em;
}
.form-label {
	font: $font-text-bold;
}
.form-input {
	height: 3em;
	border-radius: 5px;
	padding-inline: 0.5em;
	font: $font-text;
}
.form-field-container {
	display: flex;
	flex-direction: column;
	margin-bottom: 1em;
	//  font: $font-text;
}
.form-field-size {
	flex: 1;
}
</style>
