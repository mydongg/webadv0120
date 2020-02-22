import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import categories from "./modules/categories";
import skills from "./modules/skills";
import skillsList from "./modules/skillsList";


import works from "./modules/works";

import reviews from "./modules/reviews";

import user from "./modules/user";

import errors from "./modules/errors"

export default new Vuex.Store({
  modules: {
    categories,
    skills,
    skillsList,
    works,
    reviews,
    user,
    errors
  }
});