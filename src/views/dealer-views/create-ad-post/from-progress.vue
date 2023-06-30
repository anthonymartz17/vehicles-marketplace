<script>
export default {
	data() {
    return {
      props:["activeProgress"],
			formProgress: [
				{ step: "1" },
				{ step: "2" },
				{ step: "3" },
				{ step: "4" },
			],
		};
	},
};
</script>
<template>
	<div class="steps-container">
		<ul class="list">
			<li class="list-item" v-for="step in formProgress" :key="step.step">
				{{ step.step }}
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
.list-item {
	background: $lightDark;
  color: $light;
	height: 3em;
	width: 3em;
	border-radius: 50%;
	display: grid;
	place-items: center;
  font: $font-text-bold;
}
</style>
