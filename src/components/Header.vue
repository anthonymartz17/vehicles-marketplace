<script>
import { mapMutations, mapState } from "vuex";
export default {
	props: ["navItems"],
	methods: {
		...mapMutations("vehicles", [
			"TOGGLE_MOBILE_MENUE",
			"UPDATE_FILTERS",
			"FILTER_VEHICLES",
		]),

		getCars(link) {
			if (link == "searchResults") {
				this.UPDATE_FILTERS(null);
				this.FILTER_VEHICLES();
			} else if (link == "Electric") {
				//clear filters first, in case filters where set somewhere else and are still active
				this.UPDATE_FILTERS(null);
				this.UPDATE_FILTERS({ fuel: "Electric" });
				this.FILTER_VEHICLES();
			}
		},
	},
	computed: {
		...mapState("vehicles", ["filters"]),
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
						v-for="(link, key) in navItems"
						:key="key"
						@click="getCars(link.link)"
					>
						<router-link :to="{ name: link.routename }">
							<p>{{ link.link }}</p>
						</router-link>
					</li>
				</ul>
			</nav>
			<div class="searchIcon">
				<router-link
					@click="clearFilters()"
					:to="{ name: 'advance' }"
					tag="div"
				>
					<i class="fas fa-search"></i>
				</router-link>
			</div>

			<div class="sMedia">
				<div><i class="fab fa-facebook sMedia-icons"></i></div>
				<div><i class="fab fa-instagram sMedia-icons"></i></div>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
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
