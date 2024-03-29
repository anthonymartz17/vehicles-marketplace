<script>
import { required } from "vuelidate/lib/validators";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
	data() {
		return {
			user: {},
			submitted: false,
		};
	},
	validations: {
		user: {
			name: { required },
			manager: { required },
			tel: { required },
			address: { required },
			city: { required },
			state: { required },
			zipcode: { required },
		},
	},
	

	methods: {
		...mapActions("profile", ["update", "fetchByAuthId"]),
		...mapMutations("auth", ["SET_ALERT_MSG"]),
		async tryActivateAccount() {
			this.submitted = true;
			if (this.$v.$invalid) {
				return;
			} else {
				try {
					const authId = this.$route.query.authId;

					if (authId) {
						const profile = await this.fetchByAuthId(authId);

						await this.update({
							dealerId: profile[0].id,
							profileData: { active: 1, ...this.user },
						});
					}

					this.$router.replace({ name: "dashboard" });
				} catch (error) {
					this.SET_ALERT_MSG({
						title: "ERROR",
						type: "error",
						msg: error,
					});
				}
			}
		},
	},

};
</script>

<template>
	<div class="wrapper-dealer-form">
		<div class="card-dealer">
			<form class="form" @submit.prevent="tryActivateAccount">
				<h4 class="sub-title">Details of your business</h4>
				<div class="form-field-container">
					<label for="name" class="form-label">Company Name</label>
					<input
						id="name"
						v-model="user.name"
						type="text"
						placeholder="Enter commercial name"
						:class="[
							'form-input',
							{ 'is-invalid ': submitted && !$v.user.name.required },
						]"
					/>
					<div
						v-if="submitted && !$v.user.name.required"
						class="invalid-feedback"
					>
						Commercial name is required.
					</div>
				</div>
				<div class="field-flex">
					<div class="form-field-container form-field-size">
						<label for="manager" class="form-label">Manager</label>
						<input
							id="manager"
							v-model="user.manager"
							type="text"
							placeholder="Enter manager's name"
							:class="[
								'form-input',
								{ 'is-invalid ': submitted && !$v.user.manager.required },
							]"
						/>
						<div
							v-if="submitted && !$v.user.manager.required"
							class="invalid-feedback"
						>
							Full name is required.
						</div>
					</div>
					<div class="form-field-container form-field-size">
						<label for="tel" class="form-label">Phone Number</label>
						<input
							id="tel"
							v-model="user.tel"
							type="text"
							placeholder="Enter phone number"
							:class="[
								'form-input',
								{ 'is-invalid ': submitted && !$v.user.tel.required },
							]"
						/>
						<div
							v-if="submitted && !$v.user.tel.required"
							class="invalid-feedback"
						>
							Phone is required.
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
						v-if="submitted && !$v.user.address.required"
						class="invalid-feedback"
					>
						Address is required.
					</div>
				</div>
				<div class="field-flex">
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
					<button type="submit" class="btn">Activate account</button>
				</div>
			</form>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.wrapper-dealer-form {
	padding-block: 2em;
}
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
}

.wrapper-dealer-form {
	@include breakpoint(tablet) {
		display: flex;
		justify-content: center;
		.field-flex {
			display: flex;
			gap: 1em;
			flex-wrap: wrap;
		}
		.form-field-size {
			flex: 1;
		}
		.card-dealer {
			width: 80%;
			box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		}
	}
	@include breakpoint(desktop) {
		.card-dealer {
			width: 60%;
		}
	}
}
</style>
