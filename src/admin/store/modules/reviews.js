export default{
    namespaced: true,
    state: {
        reviews: [],
        reviewAction: "",
        reviewItemToUpdate: {}
    },
    getters: {

    },
    mutations: {
        SET_ACTION: (state, action) => state.reviewAction = action,
        SET_REVIEW_ITEM_TO_UPDATE: (state, item) => state.reviewItemToUpdate = item,
        SET_REVIEWS: (state, data) => state.reviews = data,
        ADD_REVIEW: (state, review) => state.reviews.push(review),
        DELETE_REVIEW: (state, id) => state.reviews = state.reviews.filter(review => review.id != id),
        UPDATE_REVIEW: (state, review) => {
            state.reviewItemToUpdate = {};
            state.reviews = state.reviews.map(item => {
                if(item.id === review.id){
                    item = review;
                }
                return item;
            })
        }
    },
    actions: {
        fetchReviews({commit}){ 
            this.$axios.get("reviews/266").catch(error => {
                this.dispatch("errors/setError", error.message);
            }).then(response => {
                commit('SET_REVIEWS', response.data)
            })
        },
        addReview({commit}, review){
            const formData = new FormData();
            Object.keys(review).forEach(key => {
                const value = review[key];
                formData.append(key, value);
            })
            this.$axios.post("/reviews", formData).catch(error => {
                this.dispatch("errors/setError", error.message);
            }).then(response => {
                commit('ADD_REVIEW', response.data);
            })
        },
        deleteReview({commit}, id){
            this.$axios.delete(`reviews/${id}`).catch(error => {
                this.dispatch("errors/setError", error.message);
            }).then(response => {
                commit('DELETE_REVIEW', id);
            })
        },
        updateReview({commit}, review){
            this.$axios.post(`reviews/${review.id}`, review).catch(error => {
                this.dispatch("errors/setError", error);
            }).then(response => {
                commit('UPDATE_REVIEW', response.data.review);
            })
        },
        // Action
        // Устанавливает действие для формы
        // пустая строка - форма не отображается
        // add - добавление новой формы
        // update - изменение существующей
        setAction({commit}, action){
            commit('SET_ACTION', action);
        },
        setItemToUpdate({commit}, item){
            commit('SET_REVIEW_ITEM_TO_UPDATE', item);
        }
    }
}