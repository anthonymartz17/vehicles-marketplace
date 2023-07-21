<script>
import { required, email } from "vuelidate/lib/validators";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
	data() {
		return {
			email: "",
			submitted: false,
		};
	},
	validations: {
		email: { required, email },
	},

	methods: {
		...mapActions("auth", ["handleForgotPassword"]),
		...mapMutations("auth", ["SET_ALERT_MSG", "TOGGLE_IS_LOADING"]),

		async tryPasswordReset() {
			this.submitted = true;
			// stop here if form is invalid
			this.$v.$touch();

			if (this.$v.$invalid) {
				return;
			} else {
				this.TOGGLE_IS_LOADING();
				try {
					await this.handleForgotPassword(this.email);
					this.email = "";
					this.submitted = false;
					this.SET_ALERT_MSG({
						type: "success",
						title: "Success",
						msg: "Password reset email sent successfully.",
					});
				} catch (error) {
					// const errorMsg = this.adjustErrorMsg(error);
					this.SET_ALERT_MSG({ type: "error", title: "Error", msg: error });
				} finally {
					this.TOGGLE_IS_LOADING();
				}
			}
		},
	},
};
</script>
<template>
	<div>
		<form class="form" @submit.prevent="tryPasswordReset">
			<p class="resetText">If email exists, you will receive a reset link.</p>
			<div class="form-field-container">
				<label for="email" class="form-label">User email</label>
				<input
					id="email"
					v-model="email"
					type="text"
					placeholder="Enter email"
					:class="[
						'form-input',
						{ 'is-invalid ': submitted && !$v.email.required },
					]"
				/>
				<div v-if="submitted && !$v.email.required" class="invalid-feedback">
					E-mail is required.
				</div>
				<div v-else-if="submitted && !$v.email.email" class="invalid-feedback">
					Enter a valid email.
				</div>
			</div>

			<div class="submit-btn">
				<button type="submit" class="btn">Send Reset</button>
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
.resetText{
	color: $primary;
	font: $font-text-bold;
	margin-block:1em ;
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
