<script>
import Store from "../../data/store.js";
export default {
	name: "Category",

	components: {},

	data() {
		return {
			Store,
		};
	},
	methods: {
		toggleCategory(category) {
			const index = Store.categoriesSelected.indexOf(category);
			if (index === -1) {
				Store.categoriesSelected.push(category);
				console.log(Store.categoriesSelected);
			} else {
				Store.categoriesSelected.splice(index, 1);
				console.log(Store.categoriesSelected);
			}
		},
		isSelected(category) {
			return Store.categoriesSelected.includes(category);
		},
	},

	mounted() {},
};
</script>

<template>
	<div v-if="Store.categoriesAll" class="d-flex flex-wrap gap-3 justify-content-center">
		<template v-for="category in Store.categoriesAll">
			<div
				@click="toggleCategory(category)"
				:class="[
					'my_category_box',
					{ selected: isSelected(category), my_grey: Store.categoriesSelected.length > 0 && !isSelected(category) },
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
