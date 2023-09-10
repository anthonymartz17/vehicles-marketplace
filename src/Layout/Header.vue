<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import PopupProfile from "@/Layout/popUp-profile.vue";
export default {
	props: ["navItems"],
	components: {
		PopupProfile,
	},
	data() {
		return {
			showPopup: false,
		};
	},
	methods: {
		...mapMutations("vehicles", ["TOGGLE_MOBILE_MENUE"]),
		...mapActions("vehicles", ["filterVehicles", "updateFilters"]),
		...mapMutations("auth", ["TOGGLE_IS_LOADING"]),
		...mapActions("auth", ["signOutUser"]),
		togglePopup() {
			this.showPopup = !this.showPopup;
			if (this.showPopup) {
				document.body.classList.add("no-scroll");
			} else {
				document.body.classList.remove("no-scroll");
			}
		},
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
		...mapState("vehicles", ["filters"]),
		...mapState("auth", ["user"]),
		...mapGetters("auth", ["isLoggedIn"]),
	},
};
</script>
<template>
	<header class="header-container flex-j-c">
		<div class="header-wrapper flex-a-c">
			<i class="fas fa-bars fa-2x" @click="TOGGLE_MOBILE_MENUE()"></i>

			<div class="logo-container">
				<router-link :to="{ name: 'home' }">
					<img src="/images/icons/logo.png" alt="site logo" class="logo" />
				</router-link>
			</div>
			<nav class="navItems-container">
				<ul class="navItems flex-a-c">
					<li
						v-show="shouldShowNavs(link.link)"
						v-for="(link, key) in navItems"
						:key="key"
						@click="
							getCars(link.link);
							signOut(link.link);
						"
					>
						<router-link :to="{ name: link.routename }">
							<p>{{ link.link }}</p>
						</router-link>
					</li>
				</ul>
			</nav>

			<div @click="togglePopup()" class="user-logo-container">
				<div v-if="isLoggedIn" class="user-logo">
					<img src="/images/icons/logo.png" alt="" />
				</div>
			</div>
			<transition
				enter-active-class="animate__animated animate__bounceIn"
				leave-active-class="animate__animated animate__bounceOut"
			>
			<div
			@click.self="togglePopup()"
			class="popup-overlay"
			v-show="showPopup"
			>
					<PopupProfile @closeModal="togglePopup()" />
				</div>
			</transition>
		</div>
	</header>
</template>

<style lang="scss" scoped>
.no-scroll {
	overflow: hidden;
}
.header-container {
	background: $dark;
	min-height: 10vh;
	width: 100%;
	color: $light;
	position: sticky;
	top: -10px;
	z-index: 10;
	padding-inline: 0.5em;
}
.logo-container {
	height: 10vh;
	min-width: 10vw;
	flex: 1;
}
.logo {
	height: 100%;
	max-width: 100%;
	object-fit: contain;
	// background: blue;
}
.header-wrapper {
	width: 100%;
	justify-content: space-between;
}

.navItems-container {
	display: none;
	justify-content: center;
	flex: 3;
}

.navItems {
	min-width: 35vw;
	justify-content: space-around;

	li {
		list-style: none;
	}
	a {
		text-decoration: none;
		color: $light;
		font: $font-text-bold;
		transition: all 0.3s ease-in-out;
		cursor: pointer;

		&:hover {
			color: $primary;
		}
	}
}

.fa-bars {
	cursor: pointer;
	flex: 1;
}
.searchIcon {
	flex: 1;
	display: flex;
	justify-content: flex-end;
	font-size: 1.5em;
}

.sMedia {
	display: none;
	flex: 1;
	height: 100%;
	gap: 0.5em;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	margin-right: 1em;

	i {
		border: 1px solid $light;
		font-size: 1em;
		width: 1.5em;
		height: 1.5em;
		border-radius: 100%;
		text-align: center;
		padding-top: 0.2em;
		transition: all 0.3s ease-in-out;
		cursor: pointer;

		&:hover {
			color: $primary;
		}
	}
}

.user-logo-container {
	// position: relative;
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
.popup-overlay {
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
}

.header-container {
	@include breakpoint(tablet) {
	}
	@include breakpoint(desktop) {
		.sMedia {
			display: flex;
		}
		.header-wrapper {
			padding: 0 15em;
			gap: 1em;
		}
		.navItems-container {
			display: flex;
			flex: 3;
		}

		.fa-bars {
			display: none;
		}
		.fa-search {
			display: none;
		}
	}
	.header-wrapper {
		@include breakpoint(lg-device) {
			max-width: 1600px;
		}
	}
}
</style>
