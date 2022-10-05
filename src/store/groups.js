import axios from 'axios'

export default {
    state: {
        groups: [],
        loading_groups: 'false'
    },
    mutations: {
        setLoading_groups(state, paload) {
            state.loading_groups = paload
        },
        setGroups(state, payload) {
            state.groups = payload.data
        },
    },
    actions: {

        async asyncGetGroups(context) {
            context.commit('setLoading_groups', true)

            try {

                const response = await axios.get(`http://tfadeli-api.local/api/v1/groups`)

                //помещаем groups в store              
                context.commit('setGroups', response.data)
                context.commit('setLoading_groups', false)

            } catch (e) {
                context.commit('setLoading', false)
                console.error(e)
            }
        }
    },
    getters: {
        groups(state) {
            return state.groups
        },
    }
}