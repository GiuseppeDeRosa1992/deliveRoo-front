import Store from "../data/store.js";

const myFunction = {
	toggleCategory(category) {
		const index = Store.categoriesSelected.indexOf(category);
		if (index === -1) {
			Store.categoriesSelected.push(category);
		} else {
			Store.categoriesSelected.splice(index, 1);
		}
	},
	isSelected(category) {
		return Store.categoriesSelected.includes(category);
	},
};

export default myFunction;
