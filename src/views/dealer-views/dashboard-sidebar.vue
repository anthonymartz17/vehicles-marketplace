<script>
import LoggedInUserLinks from "../../components/dashboard/Loggedin-user-links.vue";
import MartzIcons from "../../components/MartzIcons.vue";
import "animate.css";
import { mapMutations } from "vuex";
export default {
	components: { LoggedInUserLinks, MartzIcons },

	methods: {
		...mapMutations("auth", ["SET_ALERT_MSG"]),
		emitToggle() {
			this.$emit("fireToggleSidebar");
		},

		goCreateNew() {
			//clear vehiclePost in state in case coming from edit listing
			const isVehicleId = JSON.parse(localStorage.getItem("vehicle_id"));
			if (isVehicleId) {
				this.SET_ALERT_MSG({
					title: "WARNING",
					type: "warning",
					id: "exit-edit",
					msg: "Are you sure you want exit editing?",
				});
			} else {
				if (this.$route.name != "create ad")
					this.$router.push({ name: "create ad" });
			}
		},
	},
};
</script>
<template>
	<div class="sidebar-wrapper">
		<div class="dashboard-sidebar">
			<div
				@click="
					goCreateNew();
					emitToggle();
				"
				class="button"
			>
				+ Create New
			</div>
			<div class="link-list">
				<LoggedInUserLinks @click.native="emitToggle" />
			</div>
			<div class="menu-btn">
				<MartzIcons
					class="downArrow"
					icon="upArrow"
					:size="40"
					@click.native="emitToggle"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.menu-btn {
	background: $dark;
	width: 100%;
	display: flex;
	justify-content: center;
	cursor: pointer;
}

.button {
	cursor: pointer;
	background: $primary;
	font: $font-text-bold;
	text-align: center;
	border: 1px solid $light;
	color: $light;
	padding: 1em;
}

.dashboard-sidebar {
	flex: 1;
}

.sidebar-wrapper {
	@include breakpoint(tablet) {
	}
	@include breakpoint(desktop) {
		.menu-btn {
			display: none;
		}
		.button {
			margin: 0.5em;
			transition: all 250ms ease-in-out;
			&:hover {
				transform: scale(1.01);
			}
			a {
				color: $light;
				padding: 0.8em;
				display: block;
			}
		}
	}
}
</style>
