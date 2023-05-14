<template>
	<div>
		<transition
			enter-active-class="animate__animated animate__fadeIn animate__faster"
			leave-active-class="animate__animated animate__fadeOut animate__faster"
		>
			<div
				class="selected-field-options"
				v-show="$store.state.mobileMenuToggler"
				@click="toggleMobileMenu()"
			></div>
		</transition>
		<transition
			enter-active-class="animate__animated animate__slideInLeft animate__faster"
			leave-active-class="animate__animated animate__slideOutLeft animate__faster"
		>
			<nav
				class="nav-menu-container"
				v-show="$store.state.mobileMenuToggler"
			>
				<ul>
					<li
						v-for="(link, key) in $store.state.desktopNav"
						:key="key"
						@click="
							toggleMobileMenu();
							clearPropsVal();
							link.link === 'Vehicles' ? clearFilters() : null;
						"
					>
						<router-link :to="{ name: link.name }" class="tabs">
							<i :class="link.icon"></i>
							<p>{{ link.link }}</p>
						</router-link>
					</li>
				</ul>
			</nav>
		</transition>
	</div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
	methods: {
		...mapMutations([
			"toggleMobileMenu",
			"toggleModal",
			"clearPropsVal",
			"clearFilters",
		]),
	},
};
</script>

<style lang="scss" scoped>
a.active {
	border-block: 0.2px solid $light;
}
.tabs {
	color: $light;
}

.nav-menu-container {
	z-index: 12;
	position: fixed;
	background: $lightestDark;
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