<script>
export default {
	data() {
		return {
			props: ["activeProgress"],
			stepsRoutes: ["create ad", "step-2", "step-3", "step-4"],
			// formProgress: [{ step: 1 }, { step: 2 }, { step: 3 }, { step: 4 }],
		};
	},
	computed: {
		routeIdx() {
			return this.stepsRoutes.indexOf(this.$route.name)
		
		},
	},
};
</script>
<template>
	<div class="steps-container">
		<ul class="list">
			<li :class="['list-item',routeIdx >= idx?'complete':'incomplete']" v-for="(step, idx) in stepsRoutes" :key="step">
				{{ idx + 1 }}
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.steps-container {
	width: 100%;
}
.list {
	list-style: none;
	display: flex;
	justify-content: center;
	gap: 2em;
}
.incomplete {
	background: $lightDark;
}
.complete {
	background: $success;
}
.list-item {
	color: $light;
	height: 2.5em;
	width: 2.5em;
	border-radius: 50%;
	display: grid;
	place-items: center;
	font: $font-text-bold;
}
</style>
