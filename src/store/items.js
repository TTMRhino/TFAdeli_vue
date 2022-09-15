//import Vue from 'vue'
import axios from 'axios'

export default {
    state: {
        items: null,
        top: [],
        paginations: {},
        sort: 'item',
        method: '',
        loading: 'false'
    },
    mutations: {
        setItems(state, payload) {
            console.log("setItems");
            state.items = payload.data
            state.paginations = payload.meta //пагинация
            state.paginations.links = payload.links

            //console.log(this.getters);
        },
        setLoading(state, paload) {
            state.loading = paload
        },
        /*setSort(state, paload) {
            state.sort = paload
        },*/
    },
    actions: {

        async asyncGetItems(context) {
            context.commit('setLoading', true)
            try {
                console.log("asyncGetItems");
                const response = await axios.get('http://tfadeli-api.local/api/v1/items')
                    //console.log(response.data)

                //помещаем items в store              
                context.commit('setItems', response.data)
                context.commit('setLoading', false)

            } catch (e) {
                console.error(e)
            }
        }
    },
    getters: {
        items(state) {
            return state.items
        },
        loading(state) {
            return state.loading
        }

    }
}