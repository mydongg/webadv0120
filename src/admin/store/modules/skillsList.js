export default{
    namespaced: true,
    state: {

    },
    mutations: {

    },
    actions: {
        addSkill({commit}, skill){
            this.$axios.post('skills', skill).then(response => {
                commit("categories/ADD_SKILL", response.data, {root: true});
            })
        },
        deleteSkill({commit}, skill){
            this.$axios.delete(`skills/${skill.id}`).then(response => {
                commit("categories/DELETE_SKILL", skill, {root: true});
            })
        },
        updateSkill({commit}, skill){
            this.$axios.post(`skills/${skill.id}`, skill).then(response => {
                commit("categories/UPDATE_SKILL", response.data.skill, {root: true});
            })
        }
    }
}