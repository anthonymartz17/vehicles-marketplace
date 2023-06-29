<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import LoggedInUserLinks from "../dashboard/Loggedin-user-links.vue";
export default {
	components: { LoggedInUserLinks },
	data() {
		return {
			popOptions: [
				{
					name: "Profile",
					route: "profile",
				},
				{
					name: "Password",
					route: "password",
				},
			],
		};
	},
	methods: {
		reRoute(route) {
			this.$emit("closeModal");
			if (this.$route.name !== route) this.$router.push({ name: route });
		},
	},
	computed: {
		...mapState("auth", ["user"]),
		...mapGetters("auth", ["isLoggedIn"]),
	},
};
</script>
<template>

	<div class="popUp-container">
		<div class="popup-header">
			<div v-if="isLoggedIn" class="user-logo">
				<img src="/images/icons/logo.png" alt="" />
			</div>
			<div class="popup-title-container">
				<h4 class="popup-title">{{ user ? user.username : null }}</h4>
				<p class="popup-email">{{ user ? user.currentUser : null }}</p>
			</div>
		</div>
		<div class="linkList">
			<LoggedInUserLinks v-on="$listeners"/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.user-logo-container {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.user-logo {
	height: 3em;
	width: 3em;
	border: 1px solid;
	border-radius: 50px;
	display: grid;
	place-items: center;
	cursor: pointer;
	transition: all 250ms ease-in-out;
	box-shadow: 0 2px 4px rgba(160, 158, 158, 0.5);
	&:hover {
		box-shadow: 0 3px 4px rgba(254, 254, 254, 0.551);
	}
	img {
		max-width: 100%;
		object-fit: cover;
	}
}
.popUp-container {
	position: absolute;
	background: $dark;
	border: 1px solid $light;
	box-shadow: 0 3px 4px rgba(254, 254, 254, 0.551);
	border-radius: 5px;
	width: 20em;
	min-height: 15em;
	top: 70px;
	right: 20px;
}
.popup-header {
	display: flex;
	padding: 0.5em;

	align-items: center;
	border-bottom: 1px solid $lightDark;
	padding-block: 0.5em;
	gap: 1em;
	margin-bottom: 1em;
}
.popup-title {
	justify-self: flex-end;
	font: $font-text-bold;
}
.popup-email {
	font: $font-text;
}
.linkList{
	margin-bottom: 1em;
}



.popUp-container {
	@include breakpoint(tablet) {
		top: 90px;
	}
	@include breakpoint(desktop) {
		top: 80px;
		right: 100px;

		
	}
}
</style>
