<script>
import { required,email } from "vuelidate/lib/validators";
import { mapActions, mapMutations } from "vuex";

export default {
	data() {
		return {
			user: {},
			submitted: false,
		};
	},
	validations: {
		user: {
			email: { required,email },
			password: { required },
		},
	},
	methods: {
		...mapActions("auth", ["signIn"]),
		...mapMutations("auth", ["SET_ALERT_MSG"]),

		async tryToLogIn() {
			this.submitted = true;
			// stop here if form is invalid
			this.$v.$touch();

			if (this.$v.$invalid) {
				return;
			} else {
				try {
					let user = await this.signIn({
						email: this.user.email,
						password: this.user.password,
					});
					console.log(user,'loggedin')
				} catch (error) {
					this.SET_ALERT_MSG({ type: "error", title: "Error", msg: error });
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
				<label for="email" class="form-label">User email</label>
				<input
					id="email"
					v-model="user.email"
					type="text"
					placeholder="Enter email"
					:class="[
						'form-input',
						{ 'is-invalid ': submitted && !$v.user.email.required },
					]"
				/>
				<div
					v-if="submitted && !$v.user.email.required"
					class="invalid-feedback"
				>
					Username is required.
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
				<div
					v-if="submitted && !$v.user.password.required"
					class="invalid-feedback"
				>
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
