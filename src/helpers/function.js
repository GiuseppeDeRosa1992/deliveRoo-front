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
};

export default myFunction;
