import { createStore } from 'vuex'
import items from '@/store/items'
import groups from '@/store/groups'

export default createStore({
    modules: {
        items,
        groups
    }
})