<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
	data() {
		return {
			listItems: [
				{
					name: "My Posts",
					route: "dashboard",
				},
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
		// reRoute(route) {
		// 	// this.$emit("closeModal");
		// 	if (this.$route.name !== route) this.$router.push({ name: route });
		// },
		closeModal() {
			this.$emit('closeModal')
		}
	},
};
</script>
<template>
	<div class="list-wrapper">
		<ul class="list">
			<li @click="closeModal()"  class="list-item" v-for="item in listItems" :key="item.name">
				<router-link class="list-link" :to="{ name: item.route }">
					{{ item.name }}
				</router-link>
			</li>
		</ul>
	</div>
</template>
<style lang="scss" scoped>
.list-link.router-link-exact-active{
	background: $lightDark;
	border-bottom: 1px solid $lightestDark;
}
.list {
	list-style: none;

}
.list-item {
	// margin-bottom: 1em;
	display: flex;
	margin-bottom: .2em;
}
.list-link {
	
	flex: 1;
	font: $font-text;
	color: $light;
	padding: 1em;
	transition: all 250ms ease-in-out;
	cursor: pointer;

	&:hover {
		background: $lightDark;
		
	}
}

.list-wrapper {
	@include breakpoint(tablet) {
		top: 90px;
	}
	@include breakpoint(desktop) {
		top: 80px;
		right: 100px;
	}
}
</style>
