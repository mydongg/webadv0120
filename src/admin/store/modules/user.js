export default{
    namespaced: true,
    state: {
        errorMessage: ''
    },
    mutations: {
        setError(state, message){
            state.errorMessage = message;
        }
    },
    actions: {
        login(store, user) {
            try{
                this.$axios.post("login", user).catch(error =>{
                    store.state.errorMessage = error.response.data.error;
                }).then(response => {
                    localStorage.setItem("token", response.data.token);
                });
            } catch(error){
                throw new Error(
                    error.response.data.error || error.response.data.message
                )
            }     
        }
    }

}


