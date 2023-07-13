<script>
// import { mapGetters, mapMutations, mapState } from "vuex";
import LoggedInUserLinks from "../../components/dashboard/Loggedin-user-links.vue";
import MartzIcons from "../../components/martz-icons.vue";
import "animate.css";
export default {
	components: { LoggedInUserLinks, MartzIcons },
	data() {
		return {
			showSidebar: false,
			isDesktop: false,
		};
	},
	mounted() {
		this.isDesktop = window.innerWidth >= 768;
	},
	methods: {
		toggleSideBar() {
			this.showSidebar = !this.showSidebar;
		},
		goCreateNew() {
			//clear vehiclePost in state in case coming from edit listing
			localStorage.removeItem("vehicle_id");
			localStorage.removeItem("vehicle_images");
			this.$store.dispatch("adsCrud/updateVehiclePost", {});
			// if (this.$route.name != "create ad")
			this.$router.push({ name: "create ad" });
		},
	},

	computed: {
		// ...mapGetters("vehicles", []),
		title() {
			let title;
			switch (this.$route.name) {
				case "dashboard":
					title = "My Posts";
					break;
				case "profile":
					title = "Profile";
					break;
				case "password":
					title = "Password";
					break;
				case "create ad":
					title = "Create Post";
					break;
			}
			return title;
		},
	},
};
</script>
<template>
	<div class="dashboard-wrapper">
		<div class="dashboard-container">
			<div class="menu-btn">
				<MartzIcons icon="downArrow" :size="40" @click.native="toggleSideBar" />
			</div>

			<transition
				v-if="!isDesktop"
				enter-active-class="animate__animated animate__slideInDown"
				leave-active-class="animate__animated animate__slideOutUp animate__faster"
			>
				<div
					v-if="showSidebar || isDesktop"
					:class="{
						'dashboard-sidebar': true,
						'show-dashboard-sidebar': showSidebar,
					}"
				>
					<div
						@click="
							goCreateNew();
							toggleSideBar();
						"
						class="button"
					>
						+ Create New
					</div>
					<div class="link-list">
						<LoggedInUserLinks @click.native="toggleSideBar" />
					</div>
					<div v-if="showSidebar" class="menu-btn">
						<MartzIcons
							class="downArrow"
							icon="upArrow"
							:size="40"
							@click.native="toggleSideBar"
						/>
					</div>
				</div>
			</transition>

			<div class="dashboard-routerview">
				<h3 class="title">{{ title }}</h3>

				<router-view />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.dashboard-container {
	position: relative;
}
.menu-btn {
	background: $dark;
	width: 100%;
	display: flex;
	justify-content: center;
}

.clear-btn {
	padding: 0.2em;
	border: 1px solid $primary;
	cursor: pointer;
	font: $font-text-bold;
	color: $dark;
	margin-bottom: 0.3em;
}
.button {
	cursor: pointer;
	background: $primary;
	font: $font-text-bold;
	text-align: center;
	transition: all 250ms ease-in-out;
	border: 1px solid $light;

	color: $light;
	padding: 1em;
	&:hover {
		transform: scale(1.01);
	}
	a {
		color: $light;
		padding: 0.8em;
		display: block;
	}
}
.title {
	margin: 1em;
	color: $lightDark;
	font: $font-mobile-l;
}

.dashboard-routerview {
	margin-block: 2em;
}
.dashboard-sidebar {
	background: $dark;
	flex: 1;
}
.show-dashboard-sidebar {
	width: 100%;
	position: absolute;
	padding-top: 1em;
	top: -10px;
	z-index: 9;
}
.dashboard-wrapper {
	position: relative;
	@include breakpoint(tablet) {
	}
	@include breakpoint(desktop) {
		// .hidden-menu-container {
		// 	display: none;
		// }
		.title {
			margin: 0 1em;
		}
		.dashboard-wrapper {
			position: absolute;
			width: 100vw;
			height: 100vh;
		}
		.dashboard-container {
			display: grid;
			grid-template-columns: 1fr 4fr;
		}
		.dashboard-routerview {
			flex: 3;
		}

		.dashboard-sidebar {
			min-height: 70vh;
			display: block;
		}
		.button {
			margin: 0.5em;
		}
		.menu-btn {
			display: none;
		}
	}
}
</style>
