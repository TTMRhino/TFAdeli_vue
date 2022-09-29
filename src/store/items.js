//import Vue from 'vue'
import axios from 'axios'
import VueCookies from 'vue-cookies'
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


            const sort = VueCookies.get("sort")

            if (typeof sort == 'undefined' || sort == 'ASC') {
                payload.data.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0))
            } else {
                payload.data.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
            }

            state.items = payload.data
            state.paginations = payload.meta //пагинация
            state.paginations.links = payload.links


        },
        setLoading(state, paload) {
            state.loading = paload
        },
        /*setSort(state, paload) {
            state.sort = paload
        },*/
    },
    actions: {

        async asyncGetItems(context, payload) {
            context.commit('setLoading', true)

            if (typeof payload == 'undefined') {
                payload = {
                    pageNum: '1'
                }
            }

            try {
                const response = await axios.get(`http://tfadeli-api.local/api/v1/items?page=${payload.pageNum}`)

                //помещаем items в store              
                context.commit('setItems', response.data)
                context.commit('setLoading', false)

            } catch (e) {
                context.commit('setLoading', false)
                console.error(e)
            }
        },

    },
    getters: {
        items(state) {
            return state.items
        },
        loading(state) {
            return state.loading
        },
        paginations(state) {
            return state.paginations
        }

    }
}