<script>
import Store from '../../data/store.js';
import Service from '../../helpers/service.js';
import { RouterLink } from 'vue-router';

export default {

    name: 'RestaurantList',

    components: {

    },

    data() {
        return {
            Service,
            Store,
        };
    },
    methods: {

    },

    mounted() {
        this.Service.getRestaurants()
    },
};
</script>

<template>
    <template v-if="!Store.loader">
        <div class="container" v-show="Store.listRestaurants">
            <hr class="my-border-color rounded-3 mb-4 mx-auto">

            <h3 class="m-0 text-center mb-5">
                Scegli il tuo ristorante
            </h3>


            <div class="row m-0">
                <template v-for="restaurant in Store.listRestaurants">
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 px-4 py-5">
                        <router-link :to="{ name: 'SingleRestaurant', params: { slug: restaurant.slug } }"
                            class="text-decoration-none">
                            <div class="card text-center h-100 my-shadow">
                                <div class="card-body p-0 px-2 pb-2 d-flex justify-content-between flex-column">
                                    <div class="position-relative">
                                        <img v-if="!restaurant.image.startsWith('http')"
                                            :src="Store.baseUrl + 'storage/' + restaurant.image"
                                            class="rounded rounded-circle position-absolute mt-4" alt="...">

                                        <img v-else="" :src="restaurant.image"
                                            class="rounded rounded-circle position-absolute mt-4" alt="...">
                                        <h4 class="card-title mb-0 pb-1">{{ restaurant.name }}</h4>
                                        <p class="card-text m-0 py-1">{{ restaurant.address }}</p>
                                        <p class="card-text m-0 py-1">{{ restaurant.phone_number }}</p>
                                        <template v-for="category in restaurant.categories">
                                            <span class="badge my-bg rounded-pill text-dark mx-1">{{ category.name
                                                }}</span>
                                        </template>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </template>
            </div>
        </div>
    </template>

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
}

h4 {
    margin-top: 7rem !important;
}

.my-bg {
    background-color: #facdad;
}

.my-border-color {
    border-top: orange 7px solid !important;
    width: 70%;
}

.my-shadow {
    transition: all 300ms;
}

.my-shadow:hover {
    transform: scale(1.1);
    box-shadow: 0 7px 14px #facdad;
    transition: all 300ms;
}
</style>