<script>
import HeaderApp from './components/HeaderApp.vue';
import FooterApp from './components/FooterApp.vue';
import { RouterView } from 'vue-router';


export default {
	components: {
		HeaderApp,
		FooterApp,
	},

	data() {
		return {

		};
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
