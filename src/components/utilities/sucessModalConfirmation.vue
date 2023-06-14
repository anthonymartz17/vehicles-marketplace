<script>
  import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations("auth",["SET_CONFIRMATION_MSG"]),
    emitLogin() {
      this.$emit('CheckLoginOptionEvent', 'login')
      this.SET_CONFIRMATION_MSG(false)
    }
  }
};
</script>
<template>
	<div class="successful">
		<div class="card">
			<div>
				<h3 class="sub-title text-success">Registered Successfully</h3>
			</div>
			<div @click="emitLogin" class="btn btn-search custom-btn">Login now!!</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.successful {
	position: absolute;
	display: grid;
	place-items: center;
	background: rgba(5, 5, 5, 0.438);
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 100;
}
.card {
	background: $light;
	padding: 1em;
  margin-bottom: 20em;

	border-radius: 5px;
	display: grid;
	place-items: center;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	height: 10em;
}
.custom-btn {
	width: 70%;
}
.card {
	@include breakpoint(tablet) {
		width: 60%;
		.custom-btn {
			width: 50%;
		}
	}
	@include breakpoint(desktop) {
    width: 30%;
		.custom-btn {
			width: 30%;
		}
	}
}
</style>
