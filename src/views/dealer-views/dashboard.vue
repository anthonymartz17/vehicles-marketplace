<script>
// import { mapGetters, mapMutations, mapState } from "vuex";
import LoggedInUserLinks from "../../components/dashboard/Loggedin-user-links.vue";
import MartzIcons from "../../components/martz-icons.vue";
import DashboadSidebar from "./dashboard-sidebar.vue";
import "animate.css";
export default {
	components: { LoggedInUserLinks, MartzIcons, DashboadSidebar },
	data() {
		return {
			showSidebar: false,
			isDesktop: false,
		};
	},
	mounted() {
		this.isDesktop = window.innerWidth > 768;
	},
	methods: {
		toggleSideBar() {
			this.showSidebar = !this.showSidebar;
		},
	},

	computed: {
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
			<div class="menu-btn" v-if="!isDesktop">
				<MartzIcons icon="downArrow" :size="40" @click.native="toggleSideBar" />
			</div>
			<div v-if="!isDesktop" >
			<div v-if="showSidebar" class="overlay"></div>
				<transition
					enter-active-class="animate__animated animate__slideInDown animate__faster"
					leave-active-class="animate__animated animate__slideOutUp animate__faster"
				>
					<DashboadSidebar
						v-if="showSidebar"
						class="mobile-dashboard-sidebar"
						@fireToggleSidebar="toggleSideBar"
					/>
				</transition>
			</div>
			<div v-else class="dashboard-sidebar-desktop">
				<DashboadSidebar />
			</div>

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

.overlay {
	backdrop-filter: blur(5px);
	position: fixed;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 8;
}
.mobile-dashboard-sidebar {
	background: $dark;
	width: 100%;
	position: absolute;
	padding-top: 1em;
	top: -5px;
	z-index: 9;
}

.menu-btn {
	background: $dark;
	width: 100%;
	display: flex;
	justify-content: center;
	cursor: pointer;
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

.dashboard-wrapper {
	// position: relative;
	@include breakpoint(tablet) {
	}
	@include breakpoint(desktop) {
		// width: 100vw;
		min-height: 70vh;
		.title {
			margin: 0 1em;
		}

		.dashboard-container {
			display: grid;
			grid-template-columns: 1fr 4fr;
			min-height: 70vh;
		}
		.dashboard-sidebar-desktop {
			background: $dark;
			height: 100%;
		}
		.dashboard-routerview {
			flex: 3;
		}

		// .dashboard-sidebar {
		// 	min-height: 70vh;
		// 	display: block;
		// }
		.button {
			margin: 0.5em;
		}
	}
}
</style>
