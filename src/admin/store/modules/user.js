export default{
    namespaced: true,
    state: {
        user: {}
    },
    mutations: {
        SET_USER: (state, user) => state.user = user,
        CLEAR_USER: (state) => state.user = {}
    },
    getters: {
        userIsLoggedIn: state => {
            const userObj = state.user;
            const userObjectIsEmpty = Object.keys(userObj).length === 0 && userObj.constructor === Object;

            return userObjectIsEmpty === false;
        }
    },
    actions: {
        logout({commit}){
            this.$axios.post('logout').catch(error => {
                console.log(error)
            }).then(response => {
                console.log(response);
                commit('CLEAR_USER');
                localStorage.clear();
            })
        }
    }
}