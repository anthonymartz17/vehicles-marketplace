<script>
import { mapGetters, mapState ,mapActions} from "vuex";
export default {
	props: {
		carId: [String],
	},
	data() {
		return {
			actions: [
				{
					name: "Edit",
					route: "create ad",
				},
				{
					name: "View",
					route: "carToView",
				},
				{
					name: "Delete",
				},
			],
		};
	},
	methods: {
		...mapActions("adsCrud",["deleteAd"]),
		async takeAction(action) {
			if (action.name === "Delete") {
				const response = await this.deleteAd(this.carId);
			} else {
				this.$router.push({ name: action.route, query: { id: this.carId } });
			}
		},
	},
	computed: {
		...mapState("auth", ["user"]),
		...mapGetters("auth", ["isLoggedIn"]),
	},
};
</script>
<template>
	<div class="actions-container">
		<ul class="list">
			<li
				@click="takeAction(action)"
				class="list-item"
				v-for="action in actions"
				:key="action.name"
			>
				{{ action.name }}
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.actions-container {
	width: 100%;
	height: 100%;
	background: $dark;
	display: flex;
}
.list {
	flex: 1;
	list-style: none;
	display: flex;
}

.list-item {
	flex: 1;
	margin: 0.5em;
	display: grid;
	place-items: center;
	font: $font-text-bold;
	border: 1px solid $light;
	color: $light;
	transition: all 250ms ease-in-out;
	cursor: pointer;

	&:hover {
		background: $dark;
	}
}

.actions-container {
	@include breakpoint(tablet) {
	}
	@include breakpoint(desktop) {
	}
}
</style>
