export default{
    namespaced: true,
    state: {
        error: '',
        update: ''
    },
    mutations: {
        SET_ERROR: (state, text) => state.error = text,
        SET_UPDATE: (state, text) => state.update = text
    },
    actions: {
        setError({commit}, text){
            commit('SET_ERROR', text);
            const errorTO = setTimeout(() =>{
                commit('SET_ERROR', '');
            }, 7000)
        },
        setUpdate({commit}, text){
            commit('SET_UPDATE', text);
            const updateTO = setTimeout(() =>{
                commit('SET_UPDATE', '');
            }, 3000)
        }
    }
}