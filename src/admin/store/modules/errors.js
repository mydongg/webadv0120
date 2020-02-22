export default{
    namespaced: true,
    state: {
        error: ''
    },
    mutations: {
        SET_ERROR: (state, text) => state.error = text
    },
    actions: {
        setError({commit}, text){
            commit('SET_ERROR', text);
            const errorTO = setTimeout(() =>{
                commit('SET_ERROR', '');
            }, 10000)
        }
    }
}