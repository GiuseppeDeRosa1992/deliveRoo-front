<script>
import dropin from "braintree-web-drop-in";
import Store from "../data/store.js";
import axios from "axios";

export default {
	name: "CheckOut",

	components: {},

	data() {
		return {
			dropinInstance: null,
			Store,
		};
	},
	methods: {
		initializeDropIn(token) {
			dropin.create(
				{
					authorization: token,
					container: "#dropin-container",
					locale: "it_IT",
				},
				(err, instance) => {
					if (err) {
						console.error(err);
						return;
					}
					this.dropinInstance = instance;
				}
			);
		},

		submitPayment() {
			this.dropinInstance.requestPaymentMethod((err, payload) => {
				if (err) {
					console.error(err);
					return;
				}
				// Invia il nonce al backend per completare la transazione
				axios
					.post("http://localhost:8000/api/braintree/checkout", {
						payment_method_nonce: payload.nonce,
						amount: Store.recordCart[0].totalPrice.toFixed(2),
					})
					.then((response) => {
						if (response.data.success) {
							alert("Pagamento completato con successo!");
						} else {
							alert("Errore nel pagamento: " + response.data.message);
						}
					});
			});
		},
	},

	mounted() {
		axios
			.get("http://127.0.0.1:8000/api/braintree/token")
			.then((response) => {
				this.initializeDropIn(response.data.token);
			})
			.catch((error) => {
				console.error("Errore nel recuperare il token:", error);
			});
	},
};
</script>

<template>
	<div class="container my-pt">
		<div class="py-3">
			<h2 class="text-center">Nome ristorante: {{ Store.recordCart[0].restaurant.name }}</h2>
			<p>riepilogo carrello:</p>

			<div class="table-responsive">
				<table class="table">
					<thead>
						<tr>
							<th scope="col">Immagine</th>
							<th scope="col">Nome</th>
							<th scope="col">Quantità</th>
							<th scope="col">Totale</th>
						</tr>
					</thead>
					<tbody class="align-middle">
						<template v-for="product in Store.recordCart[0].products">
							<tr class="">
								<td><img class="rounded-2" :src="product.image" :alt="product.name" /></td>
								<td>{{ product.name }}</td>
								<td>{{ product.quantity }}x</td>
								<td>€ {{ (product.price * product.quantity).toFixed(2) }}</td>
							</tr>
						</template>
						<tr>
							<td class="fw-bold">Totale ordine:</td>
							<td></td>
							<td></td>
							<td class="fw-bold">€ {{ Store.recordCart[0].totalPrice.toFixed(2) }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="w-75 mx-auto py-3">
			<div id="dropin-container"></div>
			<div class="text-center mb-1">
				<button class="my-bg btn p-2" @click="submitPayment">Paga e invia l'ordine</button>
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
