<script>
import HeaderApp from './components/HeaderApp.vue';
import FooterApp from './components/FooterApp.vue';
import Function from './helpers/function.js';
import Loader from './components/Loader.vue';
import Store from './data/store.js';
import { RouterView } from 'vue-router';


export default {
	components: {
		HeaderApp,
		FooterApp,
		Loader

	},

	data() {
		return {
			Function,
			Store
		};
	},

	mounted() {
		// localStorage.clear()
	},
};
</script>

<template>

	<Loader v-if="Store.loader" />

	<HeaderApp v-if="!Store.loader" />

	<main>
		<RouterView />
	</main>

	<FooterApp v-if="!Store.loader" />
</template>

<style scoped></style>
