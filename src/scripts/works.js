import Vue from "vue";
import axios from "axios";

const $axios = axios.create({
    baseURL: "https://webdev-api.loftschool.com/"
})

const preview = {
    template: "#works-previews",
    props: ["works", "currentWork", "visibleWorks"],
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
    props: ["works", "currentWork", "visibleWorks", "currentIndex"],
}

const info = {
    template: "#works-info",
    components: {
        tags
    },
    props: ["currentWork"],
    computed: {
        tagsArray(){
            return this.currentWork.techs.split(',');
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
            works: {},
            visibleWorks: [],
            firstVisibleItem: 0,
            currentIndex: 0
        }
    },
    computed: {
        currentWork(){
            return this.works[this.currentIndex];
        }
    },
    methods: {
        handleSlide(direction){
            switch(direction) {
                case "next":
                    this.currentIndex++;
                    if(this.currentIndex >= this.firstVisibleItem + 3){
                        this.firstVisibleItem++;
                    }
                    break;
                case "prev":
                    this.currentIndex--;
                    if(this.currentIndex < this.firstVisibleItem){
                        this.firstVisibleItem--;
                    }
                    break;
            }
        },
        makeIndexLoop(value){
            const workAmount = this.works.length -1;
            if(value > workAmount){
                this.currentIndex = 0;
                this.firstVisibleItem = 0;
            }
            if(value < 0){
                this.currentIndex = workAmount;
                this.firstVisibleItem = workAmount - 2;
            }
        },
        getVisibleWorks(value, first){
            const workAmount = this.works.length -1;
            if(workAmount <= 3){
                this.visibleWorks = this.works; 
            } else{
                this.visibleWorks = this.works.slice(first, (first + 3));
            }   
        }
    },
    watch: {
        currentIndex(value) {
            this.makeIndexLoop(value);
        },
        firstVisibleItem(value){
            this.getVisibleWorks(this.works, value);
        }
    },
    created() {       
        $axios.get('works/266').then(response => {
            this.works = response.data;
            this.getVisibleWorks(this.works, this.firstVisibleItem);
        })
    }
})