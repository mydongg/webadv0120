import Vue from 'vue';
import axios from "axios";
import Flickity from 'vue-flickity';
import "babel-polyfill";

const $axios = axios.create({
    baseURL: "https://webdev-api.loftschool.com/"
})

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
                groupCells: true,
                selectedAttraction: 0.1,
                friction: 0.5,
                cellAlign: 'right'          
              }
        }
    },
    methods: {
        next() {
            this.$refs.flickity.next();
          },
        previous() {
            this.$refs.flickity.previous();
        }
    },
    created(){
        $axios.get('reviews/266').then(response => {
            this.reviews = response.data
            this.$nextTick(function() {
                this.$refs.flickity.rerender()
            })
        })
    }
})