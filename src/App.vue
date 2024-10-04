<script>
import HeaderApp from './components/HeaderApp.vue';
import FooterApp from './components/FooterApp.vue';
import Function from './helpers/function.js'
import { RouterView } from 'vue-router';


export default {
	components: {
		HeaderApp,
		FooterApp,
	},

	data() {
		return {
			Function
		};
	},

	mounted() {
		// localStorage.clear()
	},
};
</script>

<template>
	<HeaderApp />

	<main>
		<RouterView />
	</main>

	<FooterApp />
</template>

<style scoped></style>
