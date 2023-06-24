<script>
import { required, email } from "vuelidate/lib/validators";
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
			email: { required, email },
			password: { required },
		},
	},
	methods: {
		...mapActions("auth", ["signUp", "signIn"]),
		...mapMutations("auth", ["SET_ALERT_MSG"]),
		...mapActions("profile", ["createProfile"]),

		async tryToRegisterIn() {
			this.submitted = true;
			if (this.$v.$invalid) {
				return;
			} else {
				try {
					//after signup firebase sign user in automaticaly
					const newUser = await this.signUp({
						email: this.user.email,
						password: this.user.password,
					});
					await this.createProfile({
						active: false,
						email: this.user.email,
						auth_Id: newUser.uid,
					});

					this.$router.push({
						name: "activationForm",
						query: { authId: newUser.uid },
					});

					// this.SET_ALERT_MSG({type:'success',title:'Success',msg:'Successful registration. Login to activate account!!'});
				} catch (error) {
					this.SET_ALERT_MSG({ type: "error", title: "Error", msg: error });
					console.log(error);
				}
			}
		},
	},
};
</script>

<template>
	<div>
		<form class="form" @submit.prevent="tryToRegisterIn">
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

.form {
	@include breakpoint(tablet) {
		.field-flex {
			display: flex;
			gap: 1em;
			flex-wrap: wrap;
		}
		.form-field-size {
			flex: 1;
		}
	}
}
</style>
