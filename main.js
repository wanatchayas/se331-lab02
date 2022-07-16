const app = Vue.createApp({
    data() {
        return {
            product: 'Shoes',
            brand: 'SE331',
            // image: './assets/images/socks_green.jpg',
            // inStock: true,
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
            ],
            cart: [0, 0],
            SelectedVariant: 0,
            onSale: true,
            premium: true

        }
    },
    // methods: {
    //     addToCart() {
    //         this.cart += 1
    //     },
    //     updateImage(variantImage) {
    //         this.image = variantImage
    //     },
    //     updateVariant(index) {
    //         this.SelectedVariant = index;
    //     },

    // },
    // computed: {

    //     title() {
    //         return this.brand + ' ' + this.product
    //     },

    //     image() {
    //         return this.variants[this.SelectedVariant].image
    //     },
    //     inStock() {
    //         return this.variants[this.SelectedVariant].quantity
    //     },
    //     onsalee() {
    //         return this.brand + ' is on sale ' + this.product
    //     },
    //     shipping() {
    //         if (this.premium) {
    //             return 'Free'
    //         }
    //         return 30
    //     }


    // }
    methods: {
        updateCart(id) {
            this.cart.push(id);
            if (id == 2234) {
                this.cart[0] += 1;
            } else
                this.cart[1] += 1;
        },
        removeFromCart() {
            this.cart.splice(0, 1, 0)
            this.cart.splice(1, 1, 0)
        }

    }
})