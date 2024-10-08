<script>
import Store from "../data/store.js";
import Service from "../helpers/service.js";
import Function from "../helpers/function.js";
import { RouterLink } from "vue-router";

export default {
	name: "CheckOut",

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
		Service.getToken();
	},
};
</script>

<template>
	<div v-if="Store.recordCart.length > 0" class="container my-pt">
		<div class="py-3 w-75 mx-auto">
			<div class="row justify-content-between align-items-center">
				<h2 class="col-auto">Completa ordine da: {{ Store.recordCart[0].restaurant.name }}</h2>
				<div class="col-auto text-end">
					<router-link class="text-dark" :to="{ name: 'SingleRestaurant', params: { slug: Store.recordCart[0].restaurant.slug } }">
						<button class="my-bg btn p-2">Torna al Ristorante</button>
					</router-link>
				</div>
			</div>
			<div class="table-responsive">
				<table class="table">
					<thead>
						<tr>
							<th scope="col">Immagine</th>
							<th scope="col">Nome</th>
							<th scope="col" class="text-center">Quantità</th>
							<th scope="col" class="text-end">Totale</th>
						</tr>
					</thead>
					<tbody class="align-middle">
						<template v-for="product in Store.recordCart[0].products">
							<tr>
								<td><img class="rounded-2" :src="product.image" :alt="product.name" /></td>
								<td>{{ product.name }}</td>
								<td class="text-center">{{ product.quantity }}x</td>
								<td class="text-end">€ {{ (product.price * product.quantity).toFixed(2) }}</td>
							</tr>
						</template>
						<tr>
							<td class="fw-bold">Totale ordine:</td>
							<td></td>
							<td></td>
							<td class="fw-bold text-end">€ {{ Store.recordCart[0].totalPrice.toFixed(2) }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<h2 class="text-center mb-3 w-75 mx-auto">Inserisci i tuoi dati, paga e completa l'ordine</h2>
		<div class="row w-75 m-0 mx-auto">
			<div class="col-12 col-lg-6 p-0 pe-1">
				<div class="mb-3">
					<input placeholder="Nome" type="text" name="name_client" id="name_client" class="form-control" />
				</div>
				<div class="mb-3">
					<input placeholder="Email" type="email" name="email_client" id="email_client" class="form-control" />
				</div>
				<div class="mb-3">
					<input placeholder="Numero di telefono" type="text" name="number_phone" id="number_phone" class="form-control" />
				</div>
				<div class="mb-3">
					<input placeholder="Indirizzo" type="text" name="address_client" id="address_client" class="form-control" />
				</div>
			</div>
			<div class="col-12 col-lg-6 p-0 ps-1">
				<div id="dropin-container" class="text-center"></div>
				<div class="text-center mb-1">
					<button class="my-bg btn p-2" @click="Function.submitPayment">Paga e invia l'ordine</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.my-bg {
	background-color: rgba(250, 205, 173, 0.6);
	margin: 0 auto;
	border-radius: 1rem;
}

.my-pt {
	padding-top: 5rem;
}

.table-responsive img {
	height: 3rem;
}
</style>
