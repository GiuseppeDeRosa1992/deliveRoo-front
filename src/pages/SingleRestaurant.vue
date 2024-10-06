<script>
import Service from "../helpers/service.js";
import Store from "../data/store.js";
import Function from "../helpers/function.js";

export default {
	name: "SingleRestaurant",

	components: {},

	data() {
		return {
			Service,
			Store,
			Function,
		};
	},
	methods: {},

	mounted() {
		Service.getMenuRestaurant(this.$route.params.slug);
		console.log(Store.recordCart);
	},
};
</script>

<template>
	<!-- JUMBO -->
	<div class="my-pt">
		<div class="my-jumbo-bg d-flex align-items-center justify-content-center position-relative" v-if="Store.singleRestaurant">
			<img src="../assets/public/img/jumboo3.jpg" alt="jumbo" class="position-absolute top-0 left-0 w-100 h-100 z-n1 my-brightness" />
			<div class="container my-bg rounded-3 p-3 row m-0 justify-content-center align-items-center">
				<div class="col-auto p-0 me-3">
					<img :src="Store.singleRestaurant.image" :alt="Store.singleRestaurant.image" class="img-fluid rounded" />
				</div>
				<div class="col-auto p-0">
					<h1 class="m-0 pb-1 text-white">{{ Store.singleRestaurant.name }}</h1>
					<p class="m-0 py-1">{{ Store.singleRestaurant.address }}</p>
					<p class="m-0 py-1">{{ Store.singleRestaurant.phone_number }}</p>
					<template v-for="category in Store.singleRestaurant.categories">
						<span class="badge bg-orange rounded-pill text-dark me-1">{{ category.name }}</span>
					</template>
				</div>
			</div>
		</div>
	</div>

	<h3 class="m-0 py-1 text-center">Ecco il nostro Menù</h3>

	<div class="mt-5">
		<div class="row m-0">
			<div class="col-12 col-md-7 col-lg-8 p-0 px-2">
				<div class="row m-0" v-if="Store.singleRestaurant">
					<template v-for="product in Store.singleRestaurant.products">
						<div class="col-12 col-lg-4 px-0 px-md-3 py-5">
							<div class="card text-center h-100 my-shadow">
								<div class="card-body p-0 px-2 pb-2 position-relative h-100">
									<img
										v-if="!product.image.startsWith('http')"
										:src="Store.baseUrl + 'storage/' + product.image"
										class="rounded rounded-circle position-absolute mt-4 ratio ratio-1*1"
										alt="..." />

									<img
										v-else=""
										:src="product.image"
										class="rounded rounded-circle position-absolute mt-4 ratio ratio-1*1"
										alt="..." />
									<div class="d-flex flex-column justify-content-between h-100">
										<div>
											<h4 class="card-title mb-0 pb-1">{{ product.name }}</h4>
											<p class="card-text m-0 py-1">{{ product.description }}</p>
											<p class="card-text m-0 py-1">{{ product.price }}</p>
											<p class="card-text m-0 py-1">{{ product.type }}</p>
										</div>
										<div>
											<button class="btn p-2 my-bg" @click="Function.addToCart(Store.singleRestaurant, product)">
												<i class="fa-solid fa-cart-shopping"></i>
												Aggiungi al Carrello
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</template>
				</div>
			</div>
			<div class="col-12 col-md-5 col-lg-4 p-0 px-2">
				<!-- Card del carrello -->
				<div class="card cart-card my-position mb-5">
					<div class="card-body">
						<h5 class="card-title fs-3 mb-3">Carrello</h5>
						<p>Il carrello è vuoto</p>
						<p class="card-text">Aggiungi piatti al carrello per visualizzare qui.</p>
						<div v-if="Store.recordCart.length > 0" class="cart-items mb-0">
							<div class="cart-list ps-0">
								<h3 class="card-title m-0 py-2">Stai ordinando presso: {{ Store.recordCart[0].restaurant.name }}</h3>

								<div class="d-flex mb-2 cart-list-detail flex-column pb-2" v-for="product in Store.recordCart[0].products">
									<div class="mb-1 d-flex align-items-center justify-content-between">
										<span class="fs-4 cart-name-dish">{{ product.name }}</span>
										<span class="ps-2 fw-bold">{{ Function.totalProductPrice(product.price, product.quantity) }}</span>
									</div>
									<div class="d-flex align-items-center justify-content-between pb-2">
										<div class="quantity-controls ms-0">
											<button class="rounded border-0 text-white btn-quantity ms-0">-</button>
											<span>{{ product.quantity }}</span>
											<button class="rounded border-0 text-white btn-quantity">+</button>
										</div>
										<button class="btn btn-danger btn-sm mt-0"><i class="fa-solid fa-trash"></i></button>
									</div>
								</div>
							</div>
						</div>
						<!-- Totale dei prodotti e del prezzo -->
						<div v-if="Store.recordCart.length > 0" class="cart-totals border-top border-2 border-dark pt-2">
							<p class="mb-1">Totale prodotti: {{ Store.recordCart[0].products.length }}</p>
							<p>
								Totale da pagare: <b>€ {{ Store.recordCart[0].totalPrice }}</b>
							</p>
						</div>
						<button class="btn btn-success">Procedi all'ordine</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.card-body img {
	top: -5rem;
	left: 50%;
	transform: translate(-50%);
}

.card {
	border: 3px solid #facdad;
}

img {
	height: 10rem;
	width: 10rem;
}

h4 {
	margin-top: 7rem !important;
}

.my-shadow {
	transition: all 300ms;
}

.my-shadow:hover {
	transform: scale(1.1);
	box-shadow: 0 7px 14px #facdad;
	transition: all 300ms;
}

.my-bg {
	background-color: rgba(250, 205, 173, 0.6);
	margin: 0 auto;
	border-radius: 1rem;
}

.bg-orange {
	background-color: orange;
}

/* JUMBO */
.my-pt {
	padding-top: 5rem;
}

.my-jumbo-bg {
	height: 40rem;
}

.my-brightness {
	filter: brightness(0.4);
}

/* CART */
.my-position {
	position: sticky;
	top: 5rem;
}
</style>
