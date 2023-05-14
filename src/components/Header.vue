<template>
	<header class="header-container flex-j-c">
		<div class="header-wrapper flex-a-c">
			<i class="fas fa-bars fa-2x" @click="toggleMobileMenu()"></i>
			<div class="logo-container">
				<router-link :to="{ name: 'Home' }">
					<div class="logo-container">
						<img src="/images/icons/logo.png" alt="site logo"  class="logo"/>
					</div>
				</router-link>
			</div>
			<nav class="desktopNav-container">
				<ul class="desktopNav flex-a-c">
					<li
						v-for="(link, key) in desktopNav"
						:key="key"
						@click="
							clearPropsVal();
							link.link === 'Vehicles' ? clearFilters() : null;
						"
					>
						<router-link :to="{ name: link.name }">
							<p>{{ link.link }}</p>
						</router-link>
					</li>
				</ul>
			</nav>
			<router-link :to="{ name: 'Advance' }" tag="div">
				<i class="fas fa-search" @click="clearPropsVal"></i>
			</router-link>

			<div class="sMedia">
				<div><i class="fab fa-facebook sMedia-icons"></i></div>
				<div><i class="fab fa-instagram sMedia-icons"></i></div>
			</div>
		</div>
	</header>
</template>

<script>
import { mapMutations, mapState } from "vuex";
// import SocialMedia from './SocialMedia.vue'
export default {
	components: {
		// SocialMedia,
	},
	methods: {
		...mapMutations(["clearPropsVal", "toggleMobileMenu", "clearFilters"]),
	},
	computed: {
		...mapState(["desktopView", "desktopNav"]),
	},
};
</script>

<style lang="scss" scoped>
// gotta work on displaying the social media when in tablet or desktop view
// .show-or-hide{

//   @include tablet{
//    display: none !important;
//   }
// }

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
   
	@include desktop {
		// flex: 1;

	}
}
.logo{
	height: 100%;
	max-width: 100%;
	object-fit: contain;
}
.header-wrapper {
	width: 100%;
	justify-content: space-between;

	@include desktop {
		padding: 0 15em;
		gap: 1em;
	}

	// @include tablet{
	//   width: 90%;
	// }
}

.desktopNav-container {
	display: none;
	@include desktop {
		display: flex;
		flex: 3;
	}
	//  @include tablet{
	//   flex: 2 ;
	// }
}
// .hide-elements {
// 	@include desktop {
//     display: none;
// 	}
// }

.desktopNav {
	width: 100%;
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
	@include desktop {
		display: none;
	}
}

.fa-search {
	@include desktop {
		display: none;
	}
	font-size: 1.5em;
	cursor: pointer;
}
.sMedia {
	@include desktop {
		flex: 0.5;
		height: 100%;
		gap: 0.5em;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: center;
		margin-right: 1em;

		// @include tablet{
		//   flex: 1 ;
		// }

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
}
</style>
