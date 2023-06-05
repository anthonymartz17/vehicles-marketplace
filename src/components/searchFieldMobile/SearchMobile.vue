<template>
	<div class="search-fields-container">
		<p class="search-fields-container-title">Search for Your Vehicle!</p>

		<HomeSearchForm />
		<router-link :to="{ name: 'Advance' }">
			<div class="btn btn-advanceSearch" @click="clearFilters()">
				Advanced Search
			</div>
		</router-link>
	</div>
</template>

<script>
import { mapMutations } from "vuex";
import SearchBtn from "./SearchBtn.vue";
import HomeSearchForm from "../homeSearchForm.vue";

export default {
	components: {
		SearchBtn,
		HomeSearchForm,
	},
	methods: {
		...mapMutations("vehicles",["clearFilters"]),
	},
};
</script>

<style lang="scss" scoped>
.search-fields-container {
	@include desktop {
		display: none;
	}
}
.btn {
	width: 100%;
	height: 3em;
	margin-block: 0.2em;
	font: $font-text-bold;
	text-align: center;
}

.btn-advanceSearch {
	color: $primary;
	transition: all 0.3s ease-in-out;
	border: 1px solid $lightestDark;
	&:hover {
		color: $light;
		border: 1px solid $light;
	}
}
</style>
