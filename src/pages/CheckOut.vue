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
				<h3 class="col-auto">Completa ordine da: {{ Store.recordCart[0].restaurant.name }}</h3>
				<div class="col-auto text-end">
					<router-link class="text-dark"
						:to="{ name: 'SingleRestaurant', params: { slug: Store.recordCart[0].restaurant.slug } }">
						<button class="my-bg btn p-2">Torna al Ristorante</button>
					</router-link>
				</div>
			</div>
			<div class="table-responsive">
				<table class="table">
					<thead>
						<tr>
							<th scope="col" class="d-none d-md-table-cell">Immagine</th>
							<th scope="col">Nome</th>
							<th scope="col" class="text-center">Quantità</th>
							<th scope="col" class="text-end">Totale</th>
						</tr>
					</thead>
					<tbody class="align-middle">
						<template v-for="product in Store.recordCart[0].products">
							<tr>
								<td class="d-none d-md-table-cell">
									<img v-if="!product.image.startsWith('http')"
										:src="Store.baseUrl + 'storage/' + product.image" class="rounded-2"
										:alt="product.name" />
									<img v-else="" :src="product.image" class="rounded-2" :alt="product.name" />
								</td>
								<td>{{ product.name }}</td>
								<td class="text-center">{{ product.quantity }}x</td>
								<td class="text-end">€ {{ (product.price * product.quantity).toFixed(2) }}</td>
							</tr>
						</template>
						<tr>
							<td class="fw-bold">Totale ordine:</td>
							<td class="d-none d-md-table-cell"></td>
							<td></td>
							<td class="fw-bold text-end">€ {{ Store.recordCart[0].totalPrice.toFixed(2) }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<h3 class="text-center mb-3 w-75 mx-auto">Inserisci i tuoi dati, paga e completa l'ordine</h3>

		<form @submit.prevent="Function.submitPayment">
			<div class="row w-75 m-0 mx-auto">
				<div class="col-12 col-lg-6 p-0 pe-1">
					<div class="mb-3">
						<input placeholder="Nome" type="text" v-model="Store.name_client" name="name_client"
							id="name_client" class="form-control" required minlength="2" maxlength="30" />
					</div>
					<div class="mb-3">
						<input placeholder="Email" type="email" v-model="Store.email_client" name="email_client"
							id="email_client" class="form-control" required pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$" />
					</div>
					<div class="mb-3">
						<input placeholder="Numero di telefono" type="text" v-model="Store.number_phone"
							name="number_phone" id="number_phone" class="form-control" required minlength="9"
							maxlength="10" pattern="\d{9,10}" />
					</div>
					<div class="mb-3">
						<input placeholder="Indirizzo" type="text" v-model="Store.address_client" name="address_client"
							id="address_client" class="form-control" required minlength="5" maxlength="255"
							pattern=".{5,255}" />
					</div>
				</div>
				<div class="col-12 col-lg-6 p-0 ps-1">
					<div id="dropin-container" class="text-center"></div>
					<div class="text-center mb-1">
						<button class="my-bg btn p-2" type="submit">Paga e invia l'ordine</button>
					</div>
				</div>

				<div v-if="Store.loading" class="d-flex justify-content-center py-4">
					<div class="spinner-border" role="status">
						<span class="visually-hidden">Caricamento...</span>
					</div>
				</div>
			</div>
		</form>
	</div>

	<div v-else class="my-pt container">
		<h3 class="text-center m-0 my-3">Grazie {{ Store.order[1].name_client }} per aver ordinato da Deliveroo!</h3>
		<div class="row justify-content-center">
			<div class="col-8 col-md-2">
				<img v-if="!Store.order[0].restaurant.image.startsWith('http')"
					:src="Store.baseUrl + 'storage/' + Store.order[0].restaurant.image" class="rounded img-fluid"
					:alt="Store.order[0].restaurant.name" />

				<img v-else="" :src="Store.order[0].restaurant.image" class="rounded img-fluid"
					:alt="Store.order[0].restaurant.name" />
			</div>
			<div class="col-auto">
				<h5>Hai ordinato da {{ Store.order[0].restaurant.name }}</h5>
				<p>{{ Store.order[0].restaurant.address }}</p>
				<p>{{ Store.order[0].restaurant.phone_number }}</p>
				<template v-for="category in Store.order[0].restaurant.categories">
					<span class="badge my-bg rounded-pill text-dark me-1">{{ category.name }}</span>
				</template>
			</div>
		</div>
		<h3 class="text-center m-0 my-3">Riepilogo ordine:</h3>
		<div class="row justify-content-center pb-3">
			<div class="col-12 col-md-auto text-center text-md-start">
				<h5>I tuoi dati:</h5>
				<p>{{ Store.order[1].name_client }}</p>
				<p>{{ Store.order[1].address_client }}</p>
				<p>{{ Store.order[1].email_client }}</p>
				<p>{{ Store.order[1].number_phone }}</p>
			</div>
			<div class="col-12 col-md-auto">
				<div class="table-responsive">
					<table class="table">
						<thead>
							<tr>
								<th scope="col" class="p-0 px-2 pb-2 d-none d-md-table-cell">Immagine</th>
								<th scope="col" class="p-0 px-2 pb-2">Nome</th>
								<th scope="col" class="p-0 px-2 pb-2">Quantità</th>
								<th scope="col" class="p-0 px-2 pb-2">Prezzo</th>
								<th scope="col" class="p-0 px-2 pb-2">Totale</th>
							</tr>
						</thead>
						<tbody>
							<template v-for="product in Store.order[0].products">
								<tr>
									<td class="d-none d-md-table-cell">
										<img v-if="!product.image.startsWith('http')"
											:src="Store.baseUrl + 'storage/' + product.image" class="rounded"
											:alt="product.name" />
										<img v-else="" :src="product.image" class="rounded img-fluid"
											:alt="product.name" />
									</td>
									<td>{{ product.name }}</td>
									<td class="text-center">x{{ product.quantity }}</td>
									<td class="text-center">€ {{ (product.price * product.quantity).toFixed(2) }}</td>
									<td></td>
								</tr>
							</template>
							<tr>
								<td class="d-none d-md-table-cell"></td>
								<td></td>
								<td></td>
								<td></td>
								<td class="fw-bold">€ {{ Store.order[0].totalPrice.toFixed(2) }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="col-12 text-center">
				<em>A breve riceverai nella tua email: {{ Store.order[1].email_client }} il riepilogo dell'ordine che
					hai
					effettuato</em>
			</div>
			<div class="col-12 text-center mt-2">
				<router-link to="/" class="my-bg btn p-2"> Torna alla Home </router-link>
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

table img {
	height: 2rem;
}

.spinner-border {
	width: 3rem;
	height: 3rem;
	color: #facdad;
}
</style>
