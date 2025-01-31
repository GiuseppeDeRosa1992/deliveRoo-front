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
		Store.loader = true
		axios.get(Store.baseUrlApi + "restaurants").then((response) => {
			Store.listRestaurants = response.data.restaurants;
			Store.loader = false
		});
	},

	getMenuRestaurant(params) {
		Store.loader = true
		axios.get(`http://localhost:8000/api/restaurant/${params}`).then((response) => {
			Store.singleRestaurant = response.data.restaurant;
			Store.loader = false

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
					this.sendOrder();
				} else {
					alert("Errore nel pagamento: " + response.data.message);
				}
			});
	},
	async sendOrder() {
		try {
			const orderObject = {
				restaurant_id: Store.recordCart[0].restaurant.id,
				name_client: Store.name_client,
				email_client: Store.email_client,
				number_phone: Store.number_phone,
				address_client: Store.address_client,
				total: Store.recordCart[0].totalPrice.toFixed(2),
				products: Store.recordCart[0].products.map((product) => ({
					product_id: product.id,
					name_product: product.name,
					quantity: product.quantity,
					price_product: product.price,
				})),
			};
			const response = await axios.post(Store.baseUrlApi + "order", orderObject);
			if (response.status === 200) {
				console.log("ordine effettuato", response.data);
				Store.order = Store.recordCart;
				Store.order.push({
					name_client: Store.name_client,
					email_client: Store.email_client,
					number_phone: Store.number_phone,
					address_client: Store.address_client,
				});
				console.log(Store.order);
				localStorage.clear();
				Store.recordCart = [];
			} else {
				console.log("non funziona", response.data);
			}
		} catch (error) {
			console.log("errore", error);
		}
		Store.loading = false;
		Store.name_client = "";
		Store.email_client = "";
		Store.number_phone = "";
		Store.address_client = "";
	},
};

export default myHelpers;
