export default {
    namespaced: true,
    state: {
        worksAction: "",
        works: []
    },
    getters: {
        
    },
    mutations: {
        SET_WORKS: (state, data) => state.works = data,
        ADD_WORKS: (state, work) => state.works = state.works.push(work),
        DELETE_WORK: (state, id) => state.works = state.works.filter(work => work.id != id),
        SET_ACTION: (state, action) => state.worksAction = action
    },
    actions: {
        fetchWorks({commit}){
            this.$axios.get('works/266').catch(error =>{
                console.log(error);
            }).then(response => {
                commit("SET_WORKS", response.data)
                console.log(response.data)
            })
        },
        addWork({commit}, work){
            const formData = new FormData();
            Object.keys(work).forEach(key => {
                const value = work[key];
                formData.append(key, value);
            })
            this.$axios.post('works', formData).catch(error => {
                console.log(error);
            }).then(response => {
                console.log(response.data);
                commit("ADD_WORKS", response.data);
            })
        },
        deleteWork({commit}, id){
            this.$axios.delete(`works/${id}`).catch(error => {
                console.log(error);
            }).then(response => {
                commit("DELETE_WORK", id);
            })
        },

        // Actions
        // Устанавливает действие для формы
        // пустая строка - форма не отображается
        // add - добавление новой формы
        // update - изменение существующей
        setAction({commit}, action){
            commit('SET_ACTION', action);
        }
    }
}