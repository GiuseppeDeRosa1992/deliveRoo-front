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
    <!-- *******HEADER****** -->
    <header class="py-3">

        <div class="container p-0 h-100 d-flex justify-content-between">
            <div class="left-side h-100">
                <a href="http://localhost:5174/">
                    <img src="../assets/public/img/Delive8.png" alt="" class="img-fluid">
                </a>
            </div>
            <div class="right-side h-100 text-end align-content-center">
                <div class="carrello align-content-center">
                    <i class="fa-solid fa-cart-shopping" style="color: #ffffff;"></i>
                </div>
            </div>

        </div>

    </header>
    <!-- *******HEADER****** -->


    <!-- *******JUMBOO****** -->
    <div class="my_jumbotron">
        <div class="container-fluid p-0">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../assets/public/img/Jumbotron.jpg" class="d-block " alt="jumbo-panini">
                        <div class="carousel-caption d-none d-md-block my_bg ">
                            <h4>Enjoy every moment</h4>
                            <p>Home is not where we live, but wherever we are understood.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/public/img/Pizza-al-metro.webp" class="d-block " alt="jumbo-pizza">
                        <div class="carousel-caption d-none d-md-block my_bg ">
                            <h4>Find you're story</h4>
                            <p>Each House is a story that is not identical to any other.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/public/img/jumboo3.jpg" class="d-block " alt="jumbo-carne">
                        <div class="carousel-caption d-none d-md-block my_bg ">
                            <h4>Feel at Home</h4>
                            <p>Home is that place where, when you go, they always welcome you.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/public/img/sushi.jpg" class=" d-block " alt="jumbo-sushi">
                        <div class="carousel-caption d-none d-md-block my_bg ">
                            <h4>Feel at Home</h4>
                            <p>Home is that place where, when you go, they always welcome you.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>


</template>

<style scoped>
/* <!-- *******HEADER****** -->  */

header {
    height: 5rem;
    background-color: #facdad;
}

.left-side>a>img {
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

/* <!-- *******JUMBOO****** --> */
.my_bg {
    background-color: rgba(128, 128, 128, 0.534);
    width: 40%;
    margin: 0 auto
}

.my_jumbotron {
    height: 35rem;
    overflow: hidden
}

.my_jumbotron img {
    width: 100%;
    height: 35rem;
    object-fit: cover;
}
</style>