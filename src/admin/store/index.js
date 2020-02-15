import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import categories from "./modules/categories";
import works from "./modules/works";
import skills from "./modules/skills";
import skillsList from "./modules/skillsList";

export default new Vuex.Store({
  modules: {
    categories,
    works,
    skills,
    skillsList
  }
});