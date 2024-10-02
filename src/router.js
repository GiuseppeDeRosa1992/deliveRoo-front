import { createRouter, createWebHistory } from 'vue-router';
import SearchRestaurant from './pages/SearchRestaurant.vue';
import SingleRestaurant from './pages/SingleRestaurant.vue';
import CheckOut from './pages/CheckOut.vue';
import NotFound from './pages/NotFound.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: '/',
            name: 'SearchRestaurant',
            component: SearchRestaurant,
        },
        {
            path: '/restaurant/:slug/menu',
            name: 'SingleRestaurant',
            component: SingleRestaurant,
        },
        {
            path: '/cart',
            name: 'CheckOut',
            component: CheckOut,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound,
        },

        // {
        //     path: '/thank-you',
        //     name: 'thank-you',
        //     component: AppThankYouPage,
        // },

    ]
});

export { router };