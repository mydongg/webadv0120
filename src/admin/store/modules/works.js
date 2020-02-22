export default {
    namespaced: true,
    state: {
        worksAction: "",
        works: [],
        worksItemToUpdate: {}
    },
    getters: {
        
    },
    mutations: {
        SET_WORKS: (state, data) => state.works = data,
        ADD_WORKS: (state, work) => state.works.push(work),
        DELETE_WORK: (state, id) => state.works = state.works.filter(work => work.id != id),
        UPDATE_WORK: (state, work) => {
            state.worksItemToUpdate = {};
            state.works = state.works.map(item => {
                if(item.id === work.id){
                    item = work
                }
                return item
            })
        },
        SET_ACTION: (state, action) => state.worksAction = action,
        SET_WORKS_ITEM_TO_UPDATE: (state, item) => state.worksItemToUpdate = item
    },
    actions: {
        fetchWorks({commit}){
            this.$axios.get('works/266').catch(error =>{
                this.dispatch("errors/setError", error.message);
            }).then(response => {
                commit("SET_WORKS", response.data)
            })
        },
        addWork({commit}, work){
            const formData = new FormData();
            Object.keys(work).forEach(key => {
                const value = work[key];
                formData.append(key, value);
            })
            this.$axios.post('works', formData).catch(error => {
                this.dispatch("errors/setError", error.message);
            }).then(response => {
                commit("ADD_WORKS", response.data);
            })
        },
        deleteWork({commit}, id){
            this.$axios.delete(`works/${id}`).catch(error => {
                this.dispatch("errors/setError", error.message);
            }).then(response => {
                commit("DELETE_WORK", id);
            })
        },
        updateWork({commit}, work){
            const formData = new FormData();
            Object.keys(work).forEach(key => {
                const value = work[key];
                formData.append(key, value);
            });
            this.$axios.post(`works/${work.id}`, formData).catch(error => {
                this.dispatch("errors/setError", error.message);
            }).then(response => {
                commit('UPDATE_WORK', response.data.work)
            })
        },
        // Actions
        // Устанавливает действие для формы
        // пустая строка - форма не отображается
        // add - добавление новой формы
        // update - изменение существующей
        setAction({commit}, action){
            commit('SET_ACTION', action);
        },
        setItemToUpdate({commit}, item){
            commit('SET_WORKS_ITEM_TO_UPDATE', item);
        }
    }
}