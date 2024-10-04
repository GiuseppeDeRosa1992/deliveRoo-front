import { reactive } from "vue";

const myData = reactive({
	baseUrlApi: "http://localhost:8000/api/",
	baseUrl: "http://localhost:8000/",

	// category.vue
	categoriesAll: null,
	categoriesSelected: [],
	listRestaurants: null,
	singleRestaurant: null,
	recordCart: JSON.parse(localStorage.getItem('cart')) || [],
});

export default myData;
