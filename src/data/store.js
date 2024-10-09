import { reactive } from "vue";

const myData = reactive({
	baseUrlApi: "http://localhost:8000/api/",
	baseUrl: "http://localhost:8000/",

	// category.vue
	categoriesAll: null,
	categoriesSelected: [],
	listRestaurants: null,
	singleRestaurant: null,
	recordCart: JSON.parse(localStorage.getItem("cart")) || [],
	dropinInstance: null,

	// order
	name_client: "",
	email_client: "",
	number_phone: "",
	address_client: "",
	order: null,
});

export default myData;
