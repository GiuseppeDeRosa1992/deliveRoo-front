<script>
import Category from "../components/SearchRestaurant/Category.vue";
import RestaurantList from "../components/SearchRestaurant/RestaurantList.vue";
import Store from "../data/store.js";
import Helpers from "../helpers/service.js";

export default {
	name: "SearchRestaurant",

	components: {
		Category,
		RestaurantList,
	},

	data() {
		return {
			Store,
			Helpers,
		};
	},
	methods: {},

	mounted() {
		Helpers.getCategoriesAll();
	},
};
</script>

<template>
	<Category />
	<RestaurantList />
</template>

<style scoped></style>
