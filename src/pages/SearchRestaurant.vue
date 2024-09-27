<script>
import Category from '../components/SearchRestaurant/Category.vue';
import RestaurantList from '../components/SearchRestaurant/RestaurantList.vue';


export default {

    name: 'SearchRestaurant',

    components: {
        Category,
        RestaurantList,
    },

    data() {
        return {

        };
    },
    methods: {

    },

    mounted() {

    },
};
</script>

<template>

    <Category />

    <RestaurantList />


</template>

<style scoped></style>