import Vue from "vue";
import axios from "axios";

const $axios = axios.create({
    baseURL: "https://webdev-api.loftschool.com/"
})

const skill = {
    template: "#skill",
    props: {
        sk: Object
    },
    methods: {
        percentCounter(){
            const circle = this.$refs["color-segment"];
            const rest = 100 - this.sk.percent;
            const value = this.sk.percent + " " + rest;
            circle.style.strokeDasharray = value;
        }
    },
    mounted(){
        this.percentCounter();
    }
}

const skillsRow = {
    template: "#skills-row",
    components: {
        skill
    },
    props: ['skill']
}

new Vue({
    el: "#skills-component",
    template: "#skills-list",
    data(){
        return {
            skills: []
        }
    },
    components: {
        skillsRow
    },
    created(){
        $axios.get("categories/266").then(response => {
            this.skills = response.data;    
        })  
    }   
})