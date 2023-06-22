<script>
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
	components: {},
	data() {
		return {};
	},
	methods: {
		...mapMutations("vehicles", []),
	},

	computed: {
		...mapGetters("vehicles", []),
	},
};
</script>
<template>
	<div class="dashboard-wrapper">
		<div class="dashboard-container">
			<div class="dashboard-sidebar">
				<div class="sidebar-container">
					<div class="button">+ Create New</div>
				</div>
			</div>
			<div class="dashboard-routerview">
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

	&:hover {
		transform: scale(1.01);
	}
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
			padding: 1em;
		}
		.dashboard-sidebar {
			background: $dark;
			min-height: 70vh;
			flex: 1;
			padding: 0.5em;
		}
	}
}
</style>
