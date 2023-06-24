<script>
import { required, email } from "vuelidate/lib/validators";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
	data() {
		return {
			user: {},
			submitted: false,
		};
	},
	validations: {
		user: {
			email: { required, email },
			password: { required },
		},
	},

	methods: {
		...mapActions("auth", ["signIn"]),
		...mapActions("profile", ["fetchByAuthId"]),
		...mapMutations("auth", ["SET_ALERT_MSG"]),

		adjustErrorMsg(error) {
			let errorMsg;
			switch (error) {
				case "auth/invalid-email":
					errorMsg = "Invalid email";
					break;
				case "auth/user-not-found":
					errorMsg = "No account found with this email";
					break;
				case "auth/wrong-password":
					errorMsg = "Incorrect password";
					break;
				default:
					errorMsg = "Email or password was incorrect";
					break;
			}
			return errorMsg;
		},

		async tryToLogIn() {
			this.submitted = true;
			// stop here if form is invalid
			this.$v.$touch();

			if (this.$v.$invalid) {
				return;
			} else {
				try {
					const response = await this.signIn({
						email: this.user.email,
						password: this.user.password,
					});
					//checks user status to see if active, if not redirect to activate account
					// const profile = await this.fetchByAuthId(response.uid);
					console.log(this.isLoggedIn,'isLOGIN')
					this.isLoggedIn
						? this.$router.push({ name: "dashboard" })
						: this.$router.push({
								name: "activationForm",
								query: { authId: response.uid },
						  });
				} catch (error) {
					// const errorMsg = this.adjustErrorMsg(error);
					this.SET_ALERT_MSG({ type: "error", title: "Error", msg: error });
				}
			}
		},
	},
	computed: {
		...mapGetters("auth",["isLoggedIn"])
	}
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
