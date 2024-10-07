<script>
import dropin from 'braintree-web-drop-in';
import Store from '../data/store.js';
import axios from 'axios';

export default {

    name: 'CheckOut',

    components: {

    },

    data() {
        return {
            dropinInstance: null,
            Store,
        };
    },
    methods: {

        initializeDropIn(token) {
            dropin.create({
                authorization: token,
                container: '#dropin-container',
            }, (err, instance) => {
                if (err) {
                    console.error(err);
                    return;
                }
                this.dropinInstance = instance;
            });
        },

        submitPayment() {
            this.dropinInstance.requestPaymentMethod((err, payload) => {
                if (err) {
                    console.error(err);
                    return;
                }
                // Invia il nonce al backend per completare la transazione
                axios.post('http://localhost:8000/api/braintree/checkout', {
                    payment_method_nonce: payload.nonce,
                    // amount: Store.recordCart[0].totalPrice
                    amount: 10,
                }).then(response => {
                    if (response.data.success) {
                        alert('Pagamento completato con successo!');
                    } else {
                        alert('Errore nel pagamento: ' + response.data.message);
                    }
                });
            });
        }
    },

    mounted() {
        axios.get("http://127.0.0.1:8000/api/braintree/token")
            .then(response => {
                this.initializeDropIn(response.data.token);
            }).catch(error => {
                console.error("Errore nel recuperare il token:", error);
            });

    },
};
</script>

<template>
    <div>
        <div id="dropin-container"></div>
        <button @click="submitPayment">Paga</button>
    </div>
</template>

<style scoped></style>