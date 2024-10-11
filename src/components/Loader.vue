<script>
export default {

    name: 'Loader',

    components: {

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

    <div class="loader vh-100 d-flex justify-content-center align-items-center">

        <img src="../assets/public/img/Delive8.png" alt="">

    </div>

</template>

<style scoped>
.loader {
    animation: heart 1s infinite alternate linear;
}

@keyframes heart {
    from {
        transform: scale(.7);
    }

    to {
        transform: scale(1);
    }
}
</style>