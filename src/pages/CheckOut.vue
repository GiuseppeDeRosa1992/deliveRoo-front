<script>
import Store from "../data/store.js";
import Service from "../helpers/service.js";
import Function from "../helpers/function.js";

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
	<div class="container my-pt">
		<div class="py-3 w-75 mx-auto">
			<h2 class="text-center">Nome ristorante: {{ Store.recordCart[0].restaurant.name }}</h2>
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
							<td></td>
							<td></td>
							<td class="fw-bold text-center">Totale ordine:</td>
							<td class="fw-bold text-end">€ {{ Store.recordCart[0].totalPrice.toFixed(2) }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="w-75 mx-auto py-3">
			<div class="row justify-content-between">
				<div class="mb-3 col-6">
					<label for="name_client" class="form-label">Nome</label>
					<input type="text" name="name_client" id="name_client" class="form-control" />
				</div>
				<div class="mb-3 col-6">
					<label for="email_client" class="form-label">Email</label>
					<input type="email" name="email_client" id="email_client" class="form-control" />
				</div>
			</div>
			<div class="row justify-content-between">
				<div class="mb-3 col-6">
					<label for="number_phone" class="form-label">Numero di telefono</label>
					<input type="text" name="number_phone" id="number_phone" class="form-control" />
				</div>
				<div class="mb-3 col-6">
					<label for="address_client" class="form-label">Indirizzo</label>
					<input type="text" name="address_client" id="address_client" class="form-control" />
				</div>
			</div>
		</div>
		<div class="w-75 mx-auto py-3">
			<div id="dropin-container"></div>
			<div class="text-center mb-1">
				<button class="my-bg btn p-2" @click="Function.submitPayment">Paga e invia l'ordine</button>
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
