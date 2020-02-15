export default{
    namespaced: true,
    state: {
        reviews: [],
        reviewAction: ""
    },
    getters: {

    },
    mutations: {
        SET_ACTION: (state, action) => state.reviewAction = action,
        SET_REVIEWS: (state, data) => state.reviews = data
    },
    actions: {
        fetchReviews({commit}){ 
            this.$axios.get("reviews/266").catch(error => console.log(error)).then(response => {
                commit('SET_REVIEWS', response.data)
                console.log(response.data);
            })
        },
        addReview(store, review){
            const formData = new FormData();
            Object.keys(review).forEach(key => {
                const value = review[key];
                formData.append(key, value);
            })
            this.$axios.post("/reviews", formData).catch(error => {
                console.log(error);
            }).then(response => {
                console.log(response);
            })
        },
        deleteReview(store, id){
            this.$axios.delete(`reviews/${id}`).catch(error => {
                console.log(error)
            }).then(response => {
                console.log(response);
            })
        },
        updateReview(store, review){
            this.$axios.post(`reviews/${review.id}`, review).catch(error => {
                console.log(error)
            }).then(response => {
                console.log(response);
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