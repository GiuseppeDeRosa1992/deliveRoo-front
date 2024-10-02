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
	<!-- *******JUMBOO****** -->
	<div class="my_jumbotron">
		<div class="container-fluid p-0">
			<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src="../assets/public/img/Jumbotron.jpg" class="d-block" alt="jumbo-panini" />
						<div class="carousel-caption d-none d-md-block my_bg">
							<h4>Goditi ogni momento</h4>
							<p>La casa non è dove viviamo, ma ovunque veniamo compresi.</p>
						</div>
					</div>
					<div class="carousel-item">
						<img src="../assets/public/img/Pizza-al-metro.webp" class="d-block" alt="jumbo-pizza" />
						<div class="carousel-caption d-none d-md-block my_bg">
							<h4>Trova la tua Casa.</h4>
							<p>Ogni Casa è una storia che non è identica a nessun'altra.</p>
						</div>
					</div>
					<div class="carousel-item">
						<img src="../assets/public/img/jumboo3.jpg" class="d-block" alt="jumbo-carne" />
						<div class="carousel-caption d-none d-md-block my_bg">
							<h4>Sentiti a Casa</h4>
							<p>Casa è quel posto dove, quando vai, ti accolgono sempre.</p>
						</div>
					</div>
					<div class="carousel-item">
						<img src="../assets/public/img/sushi.jpg" class="d-block" alt="jumbo-sushi" />
						<div class="carousel-caption d-none d-md-block my_bg">
							<h4>Abbraccia ogni istante</h4>
							<p>Casa non è un luogo fisico, ma ovunque il cuore trovi rifugio e comprensione.</p>
						</div>
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
					<span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
					<span class="visually-hidden">Prossima</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
					<span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
					<span class="visually-hidden">Precedente</span>
				</button>
			</div>
		</div>
	</div>

	<Category />
	<RestaurantList />
</template>

<style scoped>
/* <!-- *******JUMBOO****** --> */
.my_bg {
	background-color: rgba(250, 205, 173, 0.7);
	width: 40%;
	margin: 0 auto;
	border-radius: 1rem;
}

.my_jumbotron {
	height: 40rem;
	overflow: hidden;
}

.my_jumbotron img {
	width: 100%;
	height: 35rem;
	object-fit: cover;
	filter: brightness(0.4);
}
</style>
