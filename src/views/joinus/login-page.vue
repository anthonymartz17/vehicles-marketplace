<script>
import { required } from "vuelidate/lib/validators";

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
			password: { required },
		},
	},
	methods: {
		async tryToLogIn() {
			console.log("trying login");
			this.submitted = true;
			// stop here if form is invalid
			this.$v.$touch();

			if (this.$v.$invalid) {
				return;
			} else {
				try {
					let user = await this.$store.dispatch("auth/signIn", {
						username: this.user.username,
						password: this.user.password,
					});
				
					if (Object.keys(userData).length == 0) {
						let response = await ApiUser.createUser({
							user_name: this.user.user_name,
							email: user.attributes.email,
							cog_id: cog_id,
							Confirmed: 1,
						});
						console.log(response, "after created");
						allowed = true;
					} else {
						if (userData.active == 1 && userData.Confirmed == 1) {
							allowed = true;
						}
					}
					if (allowed) {
						this.$router.replace({ name: "dashboard" });
					} else {
						this.$store.dispatch("auth/signOut");
						this.$store.commit("auth/ALERT", {
							isSuccess: false,
							isError: true,
							alertMsg:
								"account may be cancelled, unconfirmed, or it doesn't exist",
						});
					}
				} catch (error) {
					this.$store.commit("auth/ALERT", {
						isSuccess: false,
						isError: true,
						alertMsg: error,
					});
				}
			}
		},
	},
};
</script>
<template>
	<div>
		<form class="form" @submit.prevent="tryToLogIn">
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
				<button type="submit" class="btn">Login</button>
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
	min-height: 20em;
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
