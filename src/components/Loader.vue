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

    <div class="vh-100 d-flex justify-content-center align-items-center bg-salmon">

        <img src="../assets/public/img/logo-completo.png" alt="" class="loader">

    </div>

</template>

<style scoped>
.bg-salmon {
    background-color: rgba(250, 205, 173, 0.8);
}

.loader {
    animation: loader 2s ease infinite;
    height: 6rem;
}

@keyframes loader {
    30% {
        transform: scale(1.2);
    }

    40%,
    60% {
        transform: rotate(-20deg) scale(1.2);
    }

    50% {
        transform: rotate(20deg) scale(1.2);
    }

    70% {
        transform: rotate(0deg) scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}
</style>