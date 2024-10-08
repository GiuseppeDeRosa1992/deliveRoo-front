<script>
import { RouterLink } from "vue-router";
import Store from "../data/store.js";
export default {
	name: "HeaderApp",

	components: {},

	data() {
		return {
			Store,
		};
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
				<template v-if="Store.recordCart.length > 0">
					<div class="carrello align-content-center position-relative">
						<router-link class="text-decoration-none p-0" :to="{ name: 'CheckOut' }">
							<i class="fa-solid fa-cart-shopping" style="color: #ffffff"></i>
							<span v-if="Store.recordCart.length > 0" class="text-bg-danger rounded rounded-circle my_position">{{
								Store.recordCart[0].products.length
							}}</span>
						</router-link>
					</div>
				</template>
				<template v-else>
					<div class="carrello align-content-center position-relative">
						<i class="fa-solid fa-cart-shopping" style="color: #ffffff"></i>
					</div>
				</template>
			</div>
		</div>
	</header>
</template>

<style scoped>
header {
	height: 5rem;
	background-color: rgba(250, 205, 173, 0.9);
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
	background-color: orange;
	border-radius: 50%;
}

.my_position {
	position: absolute;
	top: -8px;
	right: -10px;
	font-size: 12px;
	height: 1.2rem;
	aspect-ratio: 1;
}
</style>
