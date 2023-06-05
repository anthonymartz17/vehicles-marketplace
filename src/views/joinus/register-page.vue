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
			username: { required },
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
			<div class="form-field-container">
				<label for="username" class="form-label">User Name</label>
				<input
					id="username-1"
					v-model="user.username"
					type="text"
					placeholder="Enter username"
					:class="[
						'form-input',
						{ 'is-invalid ': submitted && !$v.user.username.required },
					]"
				/>
				<div
					v-if="submitted && !$v.user.username.required"
					class="invalid-feedback"
				>
					Username is required.
				</div>
			</div>
			<div class="form-field-container">
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
								submitted && (!$v.user.email.required || !$v.user.email.email),
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

			<div class="form-field-container">
				<label for="input-2" class="form-label">Password</label>
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
				<div v-if="submitted && !$v.user.password.required" class="invalid-feedback">
					Password is required.
				</div>
			</div>
			<!-- <div class="form-check mb-3">
                    <input
                        class="form-check-input"
                        id="customControlInline"
                        name="checkbox-1"
                        value="accepted"
                        :unchecked-value="not_accepted"
                        type="checkbox"
                    />
                    <label class="form-check-label" for="customControlInline">
                        Remember me
                    </label>
                </div> -->
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
	height: 20em;
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
</style>
