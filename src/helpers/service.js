import axios from "axios";
import Store from "../data/store.js";
import Function from "../helpers/function.js";

const myHelpers = {
	getCategoriesAll() {
		axios
			.get(Store.baseUrlApi + "categories")
			.then((response) => {
				Store.categoriesAll = response.data.categories;
			})
			.catch((error) => {
				console.error("Errore durante la ricezione delle categorie", error);
			});
	},
	getRestaurantsByCategory() {
		axios.post(Store.baseUrlApi + "restaurants-by-category", { categories: Store.categoriesSelected }).then((response) => {
			Store.listRestaurants = response.data.restaurants;
		});
	},

	getRestaurants() {
		axios.get(Store.baseUrlApi + "restaurants").then((response) => {
			Store.listRestaurants = response.data.restaurants;
		});
	},

	getMenuRestaurant(params) {
		axios.get(`http://localhost:8000/api/restaurant/${params}`).then((response) => {
			Store.singleRestaurant = response.data.restaurant;
		});
	},
	getToken() {
		axios
			.get("http://127.0.0.1:8000/api/braintree/token")
			.then((response) => {
				Function.initializeDropIn(response.data.token);
			})
			.catch((error) => {
				console.error("Errore nel recuperare il token:", error);
			});
	},
	braintreePayment(payload) {
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
	},
};

export default myHelpers;
