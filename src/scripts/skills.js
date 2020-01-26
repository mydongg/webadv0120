import Vue from "vue";

const skill = {
    template: "#skill",
    props: ['percent', 'name'],
    methods: {
        percentCounter(){
            const circle = this.$refs["color-segment"];
            const rest = 100 - this.percent;
            const value = this.percent + " " + rest;
    
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
        const data = require("../data/skills.json")
        this.skills = data;
    }
})