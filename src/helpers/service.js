import axios from "axios";
import Store from "../data/store.js";

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
			Store.listRestaurants = response.data.restaurants
		});
	},

	getRestaurants() {
		axios.get(Store.baseUrlApi + 'restaurants').then(response => {
			console.log(response.data.restaurants)
			Store.listRestaurants = response.data.restaurants
		})
	},

};

export default myHelpers;
