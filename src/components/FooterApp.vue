<script>
export default {

    name: 'FooterApp',

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
    <footer>
        <div class="my-bg">
            <div class="container p-0 py-5">
                <div class="row m-0 align-items-center">
                    <!-- LOGO -->
                    <div class="col-12 col-md-2 py-3 px-2">
                        <figure class="m-0">
                            <img src="../assets/public/img/Delive8.png" alt="logo-footer" class="img-fluid my-color">
                        </figure>
                    </div>
                    <!-- ICONE SOCIAL -->
                    <div class="col-12 col-md-8 py-3 px-2">
                        <h4 class="m-0 py-2 text-center">
                            Seguici sui nostri social:
                        </h4>
                        <div class="social text-center">
                            <a href="#instagram" class="px-2">
                                <i class="fa-brands fa-instagram fa-xl" style="color: #000000;"></i>
                            </a>
                            <a href="#facebook" class="px-2">
                                <i class="fa-brands fa-facebook fa-xl" style="color: #005eff;"></i>
                            </a>
                            <a href="#twitter" class="px-2">
                                <i class="fa-brands fa-twitter fa-xl" style="color: #1c96e8;"></i>
                            </a>
                            <a href="#telegram" class="px-2">
                                <i class="fa-brands fa-telegram fa-xl" style="color: #33a6e1;"></i>
                            </a>
                        </div>
                    </div>
                    <!-- LINK -->
                    <div class="col-12 col-md-2 py-3 px-2">
                        <h5 class="m-0-py-2 text-center">
                            Sei un Ristoratore?
                        </h5>

                        <div class="text-center py-1">
                            <a href="http://127.0.0.1:8000/" target="_blank"
                                class="btn bg-white my-p rounded-5">Accedi</a>
                        </div>
                        <div class="text-center py-1">
                            <a href="http://127.0.0.1:8000/register" target="_blank"
                                class="btn bg-dark text-white px-5 rounded-5">Registrati</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.my-color {
    filter: brightness(1.5) drop-shadow(0px 5px 4px black);
}

.my-bg {
    background-color: #facdad;
}

.my-p {
    padding-left: 3.7rem;
    padding-right: 3.7rem;
}
</style>