<script>
import { RouterLink } from "vue-router";
export default {
	name: "HeaderApp",

	components: {},

	data() {
		return {};
	},
	methods: {},

	mounted() {},
};
</script>

<template>
	<header class="py-3 position-fixed w-100 z-1">
		<div class="container p-0 h-100 d-flex justify-content-between">
			<div class="left-side h-100">
				<router-link :to="'/'">
					<img src="../assets/public/img/Delive8.png" alt="" class="img-fluid" />
				</router-link>
			</div>
			<div class="right-side h-100 text-end align-content-center">
				<div class="carrello align-content-center">
					<i class="fa-solid fa-cart-shopping" style="color: #ffffff"></i>
				</div>
			</div>
		</div>
	</header>
</template>

<style scoped>
header {
	height: 5rem;
	background-color: #facdad;
}

.left-side > a > img {
	filter: brightness(1.5) drop-shadow(0px 5px 4px black);
	height: 100%;
	padding: 0.2rem 0;
}

.right-side > .carrello {
	height: 2rem;
	width: 2rem;
	text-align: center;
	border-radius: 50%;
}

.right-side > .carrello:hover {
	background-color: orange;
}
</style>
