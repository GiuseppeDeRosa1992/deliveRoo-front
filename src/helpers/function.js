import Store from "../data/store.js";
import Helpers from "./service.js";

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
		// if (restaurantSlugInCart && restaurantSlugInCart !== this.$route.params.restaurant_slug) {
		// 	if (this.cart.length > 0) {
		// 		// Mostra l'avviso solo se c'è già un ristorante nel carrello
		// 		this.pendingRestaurantSlug = this.$route.params.restaurant_slug;
		// 		const confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'));
		// 		confirmModal.show();
		// 		return;  // Blocca l'aggiunta del piatto
		// 	}
		// }


		let productExist = false;
		if (Store.recordCart.length > 0) {

			Store.recordCart[0].products.forEach(element => {
				if (element.id == product.id) {
					productExist = true;
					console.log("sei entrato in if");
					element.quantity += 1;
					Store.recordCart[0].totalPrice += parseFloat(element.price)
				}
			});

			if (!productExist) {
				console.log("sei in else")
				product.quantity = 1;
				Store.recordCart[0].products.push(product);
				Store.recordCart[0].totalPrice += parseFloat(product.price)
			}
		} else {
			Store.recordCart = [{
				'restaurant': restaurant,
				'products': [product],
				'totalPrice': parseFloat(product.price)
			}];
			Store.recordCart[0].products[0].quantity = 1
		}
		localStorage.setItem('cart', JSON.stringify(Store.recordCart));
		console.log(Store.recordCart)
	},

	totalPrice() {

	}
};

export default myFunction;
