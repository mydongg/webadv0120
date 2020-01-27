import Vue from 'vue';
import Flickity from 'vue-flickity';

const item = {
    template: "#reviews-item",
    props: ['item']
}

const arrows = {
    template: "#reviews-arrows"
}

new Vue({
    el: "#reviews-component",
    template: "#reviews-container",
    components: {
        arrows, item, Flickity
    },
    data() {
        return {
            reviews: [],
            flickityOptions: {
                initialIndex: 0,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: false,
                groupCells: 2                
              }
        }
    },
    methods: {
        makeArrayImages(data){
            return data.map(item => {
                const requiredPic = require(`../images/content/avatars/${item.pic}`);
                item.pic = requiredPic;
                return item;
            })
        },
        next() {
            this.$refs.flickity.next();
          },
        previous() {
            this.$refs.flickity.previous();
        }
    },
    created(){
        const data = require("../data/reviews.json");
        this.reviews =  this.makeArrayImages(data);
    }
})