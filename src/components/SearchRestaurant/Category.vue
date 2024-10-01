<script>
import Store from "../../data/store.js";
import Function from "../../helpers/function.js";
export default {
	name: "Category",

	components: {},

	data() {
		return {
			Store,
			Function,
		};
	},
	methods: {},

	mounted() {},
};
</script>

<template>
	<div v-if="Store.categoriesAll" class="container py-3 d-flex flex-wrap gap-3 justify-content-center">
		<h5 v-if="!Store.categoriesSelected.length > 0" class="w-100 text-center">Cosa vuoi mangiare oggi?</h5>
		<template v-for="category in Store.categoriesAll">
			<div
				@click="Function.toggleCategory(category)"
				:class="[
					'my_category_box',
					{ selected: Function.isSelected(category), my_grey: Store.categoriesSelected.length > 0 && !Function.isSelected(category) },
				]">
				<template v-if="category.image.startsWith('http')">
					<img :src="category.image" :alt="category.name" />
				</template>
				<template v-else>
					<img :src="'http://localhost:8000' + '/storage/' + category.image" :alt="category.name" />
				</template>
				<p class="m-0">{{ category.name }}</p>
			</div>
		</template>
	</div>
</template>

<style scoped>
img {
	height: 3rem;
}

.my_category_box {
	text-align: center;
	padding: 1rem;
	border: 2px solid #facdad;
	border-radius: 20px;
	transition: all 300ms;
}

.my_category_box:hover {
	background-color: #facdad;
	transform: scale(1.1);
	transition: all 300ms;
}

.selected {
	background-color: #facdad;
	transform: scale(1.1);
}

.my_grey {
	background-color: #ccc;
	opacity: 0.5;
}
</style>
