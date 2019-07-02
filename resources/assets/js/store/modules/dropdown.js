export default {
    state: {
        currentComponent: 'settingsModal',
    },

    mutations: {
        setCurrentComponent(state, component) {
            state.currentComponent = component
        },
        closeComponent(state) {
            state.currentComponent = ''
        },
    },

    actions: {
        setCurrentComponent({ commit }, component) {
            commit('setCurrentComponent', component)
        },
        closeComponent({ commit }) {
            commit('closeComponent')
        },
    }
}
