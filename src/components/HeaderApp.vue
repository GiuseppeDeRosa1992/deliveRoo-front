<script>

export default {

    name: 'HeaderApp',

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
    <section>

        <div class="container p-0 h-100 d-flex justify-content-between">
            <div class="left-side h-100">
                <img src="../assets/public/img/Delive8.png" alt="">
            </div>
            <div class="right-side h-100 text-end align-content-center">
                <div class="carrello align-content-center">
                    <i class="fa-solid fa-cart-shopping" style="color: #ffffff;"></i>
                </div>
            </div>

        </div>

    </section>

</template>

<style scoped>
section {
    height: 4.5rem;
    background-color: #facdad;
}

.left-side>img {
    filter: brightness(1.5);
    height: 100%;
    padding: 0.2rem 0;
}

.right-side>.carrello {
    height: 2rem;
    width: 2rem;
    text-align: center;
    border-radius: 50%;
}

.right-side>.carrello:hover {
    background-color: orange;
}
</style>