<script>
import Service from '../helpers/service.js';
import Store from '../data/store.js';


export default {

    name: 'SingleRestaurant',

    components: {

    },

    data() {
        return {
            Service,
            Store
        };
    },
    methods: {

    },

    mounted() {
        Service.getMenuRestaurant(this.$route.params.slug)
    }
};
</script>

<template>

    <!-- JUMBO -->
    <div class="my-jumbo-bg d-flex align-items-center justify-content-center position-relative"
        v-if="Store.singleRestaurant">
        <img src="../assets/public/img/jumboo3.jpg" alt="jumbo"
            class="position-absolute top-0 left-0 w-100 h-100 z-n1 my-brightness">
        <div class="container my-bg rounded-3 p-3 row m-0 justify-content-center align-items-center">
            <div class="col-auto p-0 me-3">
                <img :src="Store.singleRestaurant.image" :alt="Store.singleRestaurant.image" class="img-fluid rounded">
            </div>
            <div class="col-auto p-0">
                <h1 class="m-0 pb-1 text-white">{{ Store.singleRestaurant.name }}</h1>
                <p class="m-0 py-1">{{ Store.singleRestaurant.address }}</p>
                <p class="m-0 py-1">{{ Store.singleRestaurant.phone_number }}</p>
                <template v-for="category in Store.singleRestaurant.categories">
                    <span class="badge bg-orange rounded-pill text-dark me-1">{{ category.name }}</span>
                </template>
            </div>
        </div>
    </div>

    <h3 class="m-0 py-1 text-center">Ecco il nostro Menù</h3>

    <div class="container mt-5">
        <div class="row m-0" v-if="Store.singleRestaurant">
            <template v-for="product in Store.singleRestaurant.products">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 px-4 py-5">
                    <div class="card text-center h-100 my-shadow">
                        <div class="card-body p-0 px-2 pb-2 d-flex justify-content-between flex-column">
                            <div class="position-relative">
                                <img :src="product.image"
                                    class="rounded rounded-circle position-absolute mt-4 ratio ratio-1*1"
                                    :alt="product.image">
                                <h4 class="card-title mb-0 pb-1">{{ product.name }}</h4>
                                <p class="card-text m-0 py-1">{{ product.description }}</p>
                                <p class="card-text m-0 py-1">{{ product.price }}</p>
                                <p class="card-text m-0 py-1">{{ product.type }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>

</template>

<style scoped>
.card-body img {
    top: -5rem;
    left: 50%;
    transform: translate(-50%);
}

.card {
    border: 3px solid #facdad;
}

img {
    height: 10rem;
    width: 10rem;
}

h4 {
    margin-top: 7rem !important;
}

.my-shadow {
    transition: all 300ms;
}

.my-shadow:hover {
    transform: scale(1.1);
    box-shadow: 0 7px 14px #facdad;
    transition: all 300ms;
}

.my-bg {
    background-color: rgba(250, 205, 173, 0.6);
    margin: 0 auto;
    border-radius: 1rem;
}

.bg-orange {
    background-color: orange;
}

/* JUMBO */
.my-jumbo-bg {
    height: 35rem;
}

.my-brightness {
    filter: brightness(0.4);
}
</style>