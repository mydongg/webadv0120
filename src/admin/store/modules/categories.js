export default{
    namespaced: true,
    state: {
        categories: []
    },
    mutations: {
        SET_CATEGORIES: (state, data) => state.categories = data,
        // ниже unshift в данном случае используется т.к. на сервере
        // добавление происходит в начало массива а не в конец
        ADD_CATEGORY: (state, category) => state.categories.unshift(category),
        DELETE_CATEGORY: (state, id) => state.categories = state.categories.filter(cat => cat.id !=id),
        UPDATE_CATEGORY: (state, newCategory) => {
            state.categories = state.categories.map(category => {
                if(category.id === newCategory.id){
                    category.category = newCategory.category;
                }
                return category;
            })
        },
        ADD_SKILL: (state, newSkill) => {
            state.categories = state.categories.map(category => {
                if(category.id === newSkill.category){
                    category.skills.push(newSkill);
                }
                return category;
            })
        },
        DELETE_SKILL: (state, deletedSkill) => {
            state.categories = state.categories.map(category => {
                if(category.id === deletedSkill.category){
                    category.skills = category.skills.filter(skill => skill.id != deletedSkill.id)
                }
                return category;
            })
        },
        UPDATE_SKILL: (state, updatedSkill) => {
            state.categories = state.categories.map(category => {
                if(category.id === updatedSkill.category){
                    category.skills = category.skills.map(skill => {
                        if(skill.id === updatedSkill.id){
                            skill = updatedSkill;
                        }
                        return skill;
                    })
                }
                return category;
            })
        }
    },
    actions: {
        addCategory({commit}, title){
            try{
                this.$axios.post("categories", {title}).then(response => {
                    // в респонс добавляется пустой объект скиллов, иначе
                    // сразу после создания категории в нее нельзя добавить скиллы, т.к.
                    // skills не определен (возвращаемый API объект категории не содержит массива скиллов)
                    let newCategory = response.data;
                    newCategory.skills = [];
                    commit('ADD_CATEGORY', newCategory); 
                })
            } catch(error){
                this.dispatch("errors/setError", error.message);
            }
        },
        fetchCategories({ commit }){
            try{
                this.$axios.get("categories/266").then(response => {
                    commit('SET_CATEGORIES', response.data);
                });
            } catch(error){
                this.dispatch("errors/setError", error.message);
            }
        },
        deleteCategory({commit}, id){
            try{
                this.$axios.delete(`categories/${id}`).then(response => {
                    commit('DELETE_CATEGORY', id);
                    if(response.status === 200){
                        this.dispatch("errors/setUpdate", "Категория удалена");
                    }
                })
            } catch(error){
                this.dispatch("errors/setError", error.message);
            }
        },
        updateCategory({commit}, category){
            try{
                let newTitle = {
                    title: category.category
                }
                this.$axios.post(`categories/${category.id}`, newTitle).then(response => {
                    commit('UPDATE_CATEGORY', category);
                    if(response.status === 200){
                        this.dispatch("errors/setUpdate", "Категория удалена");
                    }
                })
            } catch(error){
                this.dispatch("errors/setError", error.message);
            }
        }
    }
}