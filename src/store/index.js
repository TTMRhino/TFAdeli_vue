import { createStore } from 'vuex'
import items from '@/store/items'

export default createStore({
    modules: {
        items
    }
})