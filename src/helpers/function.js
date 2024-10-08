import Store from "../data/store.js";
import Helpers from "./service.js";
import dropin from "braintree-web-drop-in";

const myFunction = {
	toggleCategory(categoryId) {
		const index = Store.categoriesSelected.indexOf(categoryId);
		if (index === -1) {
			Store.categoriesSelected.push(categoryId);
			Helpers.getRestaurantsByCategory();
		} else {
			Store.categoriesSelected.splice(index, 1);
			Helpers.getRestaurantsByCategory();
		}
	},
	isSelected(categoryId) {
		return Store.categoriesSelected.includes(categoryId);
	},

	// getLocalStorage() {
	// 	if (localStorage.cart) {
	// 		Store.recordCart = JSON.parse(localStorage.cart)
	// 	}
	// },

	addToCart(restaurant, product) {
		// Controlla se l'utente sta cercando di aggiungere piatti da un ristorante diverso
		if (Store.recordCart.length > 0) {
			if (Store.recordCart[0].restaurant.id !== restaurant.id) {
				// Mostra l'avviso solo se c'è già un ristorante nel carrello
				const confirmModal = new bootstrap.Modal(document.getElementById("confirmModal"));
				confirmModal.show();
				return; // Blocca l'aggiunta del piatto
			}
		}

		let productExist = false;
		if (Store.recordCart.length > 0) {
			Store.recordCart[0].products.forEach((element) => {
				if (element.id == product.id) {
					productExist = true;
					element.quantity += 1;
					Store.recordCart[0].totalPrice += parseFloat(element.price);
				}
			});

			if (!productExist) {
				product.quantity = 1;
				Store.recordCart[0].products.push(product);
				Store.recordCart[0].totalPrice += parseFloat(product.price);
			}
		} else {
			Store.recordCart = [
				{
					restaurant: restaurant,
					products: [product],
					totalPrice: parseFloat(product.price),
				},
			];
			Store.recordCart[0].products[0].quantity = 1;
		}
		localStorage.setItem("cart", JSON.stringify(Store.recordCart));
	},

	deleteCart() {
		Store.recordCart = [];
		localStorage.clear();
	},

	incrementQuantity(product, indice) {
		if (product.quantity < 30) {
			Store.recordCart[0].totalPrice += parseFloat(product.price);
			Store.recordCart[0].products[indice].quantity++;
			let cart = JSON.parse(localStorage.getItem("cart"));
			cart[0].totalPrice += parseFloat(product.price);
			cart[0].products[indice].quantity++;
			localStorage.setItem("cart", JSON.stringify(cart));
		}
	},
	decrementQuantity(product, indice) {
		if (product.quantity === 1) {
			Store.recordCart[0].products.splice(indice, 1);
			Store.recordCart[0].totalPrice -= parseFloat(product.price);
			if (Store.recordCart[0].products.length === 0) {
				Store.recordCart = [];
			}
			let cart = JSON.parse(localStorage.getItem("cart"));
			cart[0].products.splice(indice, 1);
			cart[0].totalPrice -= parseFloat(product.price);
			localStorage.setItem("cart", JSON.stringify(cart));
			if (cart[0].products.length === 0) {
				localStorage.clear();
			}
		} else {
			Store.recordCart[0].totalPrice -= parseFloat(product.price);
			Store.recordCart[0].products[indice].quantity--;
			let cart = JSON.parse(localStorage.getItem("cart"));
			cart[0].totalPrice -= parseFloat(product.price);
			cart[0].products[indice].quantity--;
			localStorage.setItem("cart", JSON.stringify(cart));
		}
	},
	deleteProduct(indice) {
		Store.recordCart[0].products.splice(indice, 1);
		if (Store.recordCart[0].products.length === 0) {
			Store.recordCart = [];
		}
		let cart = JSON.parse(localStorage.getItem("cart"));
		cart[0].products.splice(indice, 1);
		localStorage.setItem("cart", JSON.stringify(cart));
		if (cart[0].products.length === 0) {
			localStorage.clear();
		}
	},
	totalProductPrice(priceProduct, quantityProduct) {
		return priceProduct * quantityProduct;
	},
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
				Store.dropinInstance = instance;
			}
		);
	},

	submitPayment() {
		Store.dropinInstance.requestPaymentMethod((err, payload) => {
			if (err) {
				console.error(err);
				return;
			}
			// Invia il nonce al backend per completare la transazione
			Helpers.braintreePayment(payload);
		});
	},
};

export default myFunction;
