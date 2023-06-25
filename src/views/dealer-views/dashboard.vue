<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import LoggedInUserLinks from "../../components/dashboard/Loggedin-user-links.vue";

export default {
	components: { LoggedInUserLinks },
	data() {
		return {};
	},
	methods: {
		...mapMutations("vehicles", []),
	},

	computed: {
		...mapGetters("vehicles", []),
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
			}
			return title;
		},
	},
};
</script>
<template>
	<div class="dashboard-wrapper">
		<div class="dashboard-container">
			<div class="dashboard-sidebar">
				<div class="sidebar-container">
					<div class="button">+ Create New</div>
					<div class="link-list">
						<LoggedInUserLinks />
					</div>
				</div>
			</div>
			<div class="dashboard-routerview">
				<h3 class="main-title">{{ title }}</h3>
				<router-view />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>

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
	color: $light;
	padding: 0.8em;
	text-align: center;
	transition: all 250ms ease-in-out;
	border: 1px solid $light;
	margin: 0.5em;
	&:hover {
		transform: scale(1.01);
	}
}
.link-list{
			display: none;
		}
.dashboard-routerview {
	// padding: 1em;
}
.dashboard-wrapper {
	@include breakpoint(tablet) {
		
	}
	@include breakpoint(desktop) {
		.dashboard-wrapper {
			position: absolute;
			width: 100vw;
			height: 100vh;
			background: blue;
		}
		.dashboard-container {
			display: grid;
			grid-template-columns: 1fr 4fr;
		}
		.dashboard-routerview {
			flex: 3;
	
		}
		.dashboard-sidebar {
			background: $dark;
			min-height: 70vh;
			flex: 1;
		}

		.link-list {
			display: block;
		}
	}
}
</style>
