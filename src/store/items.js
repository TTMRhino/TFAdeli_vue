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
                /** Сортировка */
                let sort = VueCookies.get("sort")
                let groupId = VueCookies.get("groupId")

                const response = await axios.get(`http://tfadeli-api.local/api/v1/items?page=${payload.pageNum}&sort=${sort}&groupId=${groupId}`)

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