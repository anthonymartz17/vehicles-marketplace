<script>
import { mapGetters, mapMutations, mapState, mapActions } from "vuex";
export default {
	props: ["navItems"],

	methods: {
		...mapMutations("vehicles", ["TOGGLE_MOBILE_MENUE"]),
		...mapMutations("auth", ["TOGGLE_IS_LOADING"]),
		...mapActions("auth", ["signOutUser"]),
		...mapActions("vehicles", ["filterVehicles", "updateFilters"]),
		shouldShowNavs(link) {
			let showNav = true;
			if (
				(link == "Dashboard" && !this.isLoggedIn) ||
				(link == "Join Us" && this.isLoggedIn) ||
				(link == "Log Out" && !this.isLoggedIn)
			) {
				showNav = false;
			}
			return showNav;
		},
		getCars(link) {
			if (link == "Vehicles") {
				this.updateFilters(null);
				this.filterVehicles();
			}
		},
		async signOut(link) {
			if (link == "Log Out" && this.$route.name !== "joinUs") {
				this.TOGGLE_IS_LOADING();
				try {
					await this.signOutUser();
					this.$router.replace({ name: "joinUs" });
				} catch (error) {
					throw error;
				} finally {
					this.TOGGLE_IS_LOADING();
				}
			}
		},
	},
	computed: {
		...mapState("vehicles", ["showMobileMenue"]),
		...mapGetters("auth", ["isLoggedIn"]),
	},
};
</script>
<template>
	<div>
		<transition
			enter-active-class="animate__animated animate__fadeIn animate__faster"
			leave-active-class="animate__animated animate__fadeOut animate__faster"
		>
			<div
				class="selected-field-options"
				v-show="showMobileMenue"
				@click="TOGGLE_MOBILE_MENUE()"
			></div>
		</transition>
		<transition
			enter-active-class="animate__animated animate__slideInLeft animate__faster"
			leave-active-class="animate__animated animate__slideOutLeft animate__faster"
		>
			<nav class="nav-menu-container" v-show="showMobileMenue">
				<ul>
					<li
						v-show="shouldShowNavs(link.link)"
						v-for="(link, key) in navItems"
						:key="key"
						@click="
							TOGGLE_MOBILE_MENUE();
							getCars(link.link);
							signOut(link.link);
						"
					>
						<router-link :to="{ name: link.routename }" class="tabs">
							<i :class="link.icon"></i>
							<p>{{ link.link }}</p>
						</router-link>
					</li>
				</ul>
			</nav>
		</transition>
	</div>
</template>

<style lang="scss" scoped>
a.active {
	background: $lightDark;
	border-bottom: 1px solid $lightestDark;
}
.tabs {
	color: $light;
}

.nav-menu-container {
	z-index: 12;
	position: fixed;
	background: $dark;
	border-right: 1px solid $light;
	height: 100%;
	width: 70%;
	padding-top: 4em;

	ul {
		padding-block: 1em;
		height: 40%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	li {
		list-style: none;
		width: 100%;
		border-block: 0.5px solid transparent;
		transition: all 0.3s ease-in-out;

		&:hover {
			border-block: 0.5px solid rgba(255, 255, 255, 0.5);
		}
	}
	a {
		padding: 1em 2em;
		width: 100%;
		height: 100%;
		text-decoration: none;
		display: flex;
		align-items: baseline;
		gap: 1em;
		font: $font-mobile-m-bold;
	}
}
</style>
