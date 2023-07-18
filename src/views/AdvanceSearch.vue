<script>
import store from "@/store";
import FullSearchForm from "../components/full-search-form.vue";
export default {
	components: {
		FullSearchForm,
	},
};
</script>
<template>
	<div class="form-container">
		<FullSearchForm />
	</div>
</template>

<style lang="scss" scoped>
.form-container {
	background: $dark;
	padding: 1em;
}
</style>
