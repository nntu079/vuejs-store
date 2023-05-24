import { createStore } from 'vuex';

export default createStore({
    state: {
        username: 'tudev.com',
        age: 10
    },

    getters: {
        //Here we will create getter
    },

    mutations: {
        //Here we will create commit
        changeUsername(state, newUsername) {
            state.username = newUsername
        }
    },

    actions: {
        //Here we will create action
        handleChangeUsername(context, newUsername) {
            context.commit('changeUsername', newUsername)
        }
    }
});