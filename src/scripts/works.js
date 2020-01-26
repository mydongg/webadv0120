import Vue from "vue";


const preview = {
    template: "#works-previews",
    props: ["works", "currentWork"]
}

const buttons = {
    template: "#works-buttons",

}

const tags = {
    template: "#works-tags",
    props: ["tagsArray"]
}

const display = {
    template: "#works-display",
    components: {
        preview, buttons
    },
    props: ["works", "currentWork", "currentIndex"]
}

const info = {
    template: "#works-info",
    components: {
        tags
    },
    props: ["currentWork"],
    computed: {
        tagsArray(){
            return this.currentWork.skills.split(', ');
        }
    }
}

new Vue({
    el: "#works-component",
    template: "#works-container",
    components: {
        display, info
    },
    data(){
        return {
            works: [],
            currentIndex: 0
        }
    },
    computed: {
        currentWork(){
            return this.works[this.currentIndex];
        }
    },
    methods: {
        makeArrayImages(data){
            return data.map(item => {
                const requiredPic = require(`../images/content/previews/${item.photo}`);
                item.photo = requiredPic;
                return item;
            })
        },
        handleSlide(direction){
            switch(direction) {
                case "next":
                    this.currentIndex++;
                    break;
                case "prev":
                    this.currentIndex--;
                    break;
            }
        },
        makeIndexLoop(value){
            const workAmount = this.works.length -1;
            if(value > workAmount){
                this.currentIndex = 0;
            }
            if(value < 0){
                this.currentIndex = workAmount;
            }
        }
    },
    watch: {
        currentIndex(value) {
            this.makeIndexLoop(value);
        }
    },
    created() {
        const data = require("../data/works.json")
        this.works = this.makeArrayImages(data);
    }
})